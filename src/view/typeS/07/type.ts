// 类型别名
// let str: number|string = '10';

type strType = number|string|boolean;
var str: strType = 10;
str = '10';
str = true;

// 接口定义类型别名
interface IStr1 {
  name: string
}

interface IStr2 {
  age: number
}

type strType2 = IStr1| IStr2;

var str2:strType2 = {name: 'zhangsan'};
str2 = {age: 10};
str2 = {name: 'zhangsan', age: 10};

// 
type sex = '男'|'女';

function getSex(s: sex): string {
  return s;
}

getSex('女');