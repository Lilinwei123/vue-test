// 强约束
interface Istate1 {
  name: string,
  age: number
}

var obj1: Istate1;
obj1 = {
  name: 'zhangsan',
  age: 10
};

// 可选属性
interface Istate2 {
  name: string,
  age?: number
}

var obj2: Istate2;
obj2 = {name: 'lisi'};

// 属性个数不确定的时候, any必须是any
interface Istate3 {
  name: string|number,
  age?: number,
  [propName: string]: any
}

var obj3: Istate3;
obj3 = {name: 3, age: 10, isMarry: true, sex: 'male'};

// 只读属性
interface Istate4 {
  name: string,
  readonly age: number
}

var obj4: Istate4;
obj4 = {'name': 'alin', age: 10};
// obj4.age = 12; 只读属性，一旦赋予初始值就不能再更改，Cannot assign to 'age' because it is a read-only property.ts