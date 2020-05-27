// let num: number|string = "10";
// num = 20;
// console.log(num.length);

// 类型断言 只能断言联合类型中存在的类型
function getAssert(name: string|number) {
  // return (<string>name).length;
  return (name as string).length;
}