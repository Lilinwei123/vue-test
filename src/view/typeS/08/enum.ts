// 实用枚举可以定义一些有名字的数字常量
// tsc enum.ts  编译
enum Days {
  Sun=3, //初始化值会累加
  Mon,
  Tus,
  Wed,
  Thr,
  Fri,
  Sat
}

console.log(Days.Sun); // 0
console.log(Days.Fri); // 5
console.log(Days);  //枚举类型会被编译成双映射的对象
// { '0': 'Sun',
//   '1': 'Mon',
//   '2': 'Tus',
//   '3': 'Wed',
//   '4': 'Thr',
//   '5': 'Fri',
//   '6': 'Sat',
//   Sun: 0,
//   Mon: 1,
//   Tus: 2,
//   Wed: 3,
//   Thr: 4,
//   Fri: 5,
//   Sat: 6 }
console.log(Days[0] === 'Sun')
