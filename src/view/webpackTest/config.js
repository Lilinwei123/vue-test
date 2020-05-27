const path = require('path');
const fs = require('fs');
const parser = require('@babel/parser');
const options = require('./webpack.config');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  }
}

const Parser = {
  getAst: path => {
    // 读取入口文件
    const content = fs.readFileSync(path, 'utf-8');
    // 将文件内容抽象为抽象语法🌲
    return parser.parse(content, {
      sourceType: 'module'
    })
  },

  getDependecies: (ast, filename) => {
    const dependecies = {};
    // 遍历所有import依赖，存在dependecies
    traverse(ast, {
      ImportDeclaration({ node }) {
        // 返回path的目录名
        const dirname = path.dirname(filename);
        // 保存依赖模块路径,后面生成依赖关系图会用到
        const filepath = './' + path.join(dirname, node.source.value);
        dependecies[node.source.value] = filepath;
      }
    })

    return dependecies;
  },

  getCode: ast => {
    const code = transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })

    return code;
  }
}

class Compiler {
  constructor (options) {
    // webpack 配置
    var {entry, output} = options;
    // 入口
    this.entry = entry;
    // 出口
    this.output = output;
    // 模块
    this.modules = [];
  }
  // 构建启动
  run () {
    // 解析入口文件
    const info = this.build(this.entry);
    this.modules.push(info);
    this.modules.forEach(({ dependecies }) => {
      // 判断是否还有依赖项，递归解析所有依赖项
      if (dependecies) {
        for (dependency in dependecies) {
          this.modules.push(this.build(dependecies[dependency]));
        }
      }
    })

    // 生成依赖关系图    
    const dependencyGraph = this.modules.reduce((graph, item) => ({        
      ...graph,       
      // 使用文件路径作为每个模块的唯一标识符,保存对应模块的依赖对象和文件内容        
      [item.filename]: {          
        dependecies: item.dependecies,          
        code: item.code        
      }      
    }),      
    {}    
    )    
    this.generate(dependencyGraph)
  };

  build(filename) {    
    const { getAst, getDependecies, getCode } = Parser    
    const ast = getAst(filename)    
    const dependecies = getDependecies(ast, filename)    
    const code = getCode(ast)    
    return {      
      // 文件路径,可以作为每个模块的唯一标识符      
      filename,      
      // 依赖对象,保存着依赖模块路径      
      dependecies,      
      // 文件内容      
      code    
    }
  }

  // 重写 require函数 (浏览器不能识别commonjs语法),输出bundle
  generate(code) {
    const filepath = path.join(this.output.path, this.output.filename);

    // 懵逼了吗? 没事,下一节我们捋一捋    
    const bundle = `(function(graph){      
      function require(module){        
        function localRequire(relativePath){          
          return require(graph[module].dependecies[relativePath])        
        }        
        var exports = {};        
        (function(require,exports,code){          
          eval(code)        
        })(localRequire,exports,graph[module].code);        
        return exports;      
      }      
      require('${this.entry}')    
    })(${JSON.stringify(code)})`

    // 把文件内容写到文件系统
    fs.readFileSync(filepath, bundle, 'utf-8');

  };
}

new Compiler(options).run();