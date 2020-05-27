// 声明式类型的函数
function funcType (name: string, age: number): number {
  return age;
}

var ageNum: number = funcType('zhangsan', 23);


// 函数参数不确定
function funcType2 (name: string, age: number, sex?: string): number {
  return age;
}

var ageNum2: number = funcType2('zhangsan', 23, 'male');

// 函数参数默认值
function funcType3 (name: string = 'zhangsan', age: number = 13): number {
  return age;
}


// 表达式类型的函数
// 1
var funcType4 = function (name: string, age: number): number {
  return age;
}
// 2
var funcType5: (name: string, age: number) => number = function (name: string, age: number): number {
  return age;
}
// 3
interface IfuncType6 {
  (name: string, age: number): number
}

var funcType6: IfuncType6 = function (name: string, age: number): number {
  return age;
}


// 对于联合类型的函数，可以实用重载的方式
function getValue(value: number): number;
function getValue(value: string): string;
function getValue (value: number|string): number|string {
  return value;
}

let a: number = getValue(1);
let b: string = getValue('1');


