// 没有确切的定义返回值的类型，运行的数组每一项都是任意类型
// function createArray (length: number, value: any): Array<any> {
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr[i] = value;
//   }

//   return arr;
// }

// createArray(3, 1);

// 范型改造
// function createArray<T> (length: number, value: T): Array<T> { 
//   let arr: T[] = [];
//   for (let i = 0; i < length; i++) {
//     arr[i] = value;
//   }

//   return arr;
// }

// var strArray: string[] = createArray<string>(3, '1'); 
// var numArray: number[] = createArray(3, 3);

// 接口中的范型
interface ICreate {
  // (name: string, value: any): Array<any>
  <T>(name: string, value: T): Array<T>
}

let func: ICreate;
func = function <T> (name: string, value: T): Array<T> {
  return [];
}

var numArray: Array<number> = func('alin', 23);
var strArray: string [] = func('alin', 'lala');