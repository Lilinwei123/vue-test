// 实用枚举可以定义一些有名字的数字常量
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tus"] = 2] = "Tus";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thr"] = 4] = "Thr";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days.Sun); // 0
console.log(Days.Fri); // 5
console.log(Days); // { '0': 'Sun',
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
console.log(Days[0] === 'Sun');
