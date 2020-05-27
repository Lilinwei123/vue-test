// 数组表示方法
// 类型 + []
var arr1: number [] = [1, 2, 3];
var arr2: string [] = ['1', '2', '3'];
var arr3: any [] = [1, '2', true];

// 可采用数组范型表示 Array<elemType>
var arrType1: Array<number> = [1, 2, 3];
var arrType2: Array<string> = ['1', '2', '3'];
var arrType3: Array<any> = [1, '2', true];

// 可用接口方法表示
interface Istate {
  username: string,
  age: number
}

interface IArr {
  [index: number]: Istate
}

var arrType4: IArr = [{username: 'lisi', age: 10}];

var arrType5: Istate [] = [{username: 'lisi', age: 10}];

var arrType6: Array<Istate> = [{username: 'lisi', age: 10}];
