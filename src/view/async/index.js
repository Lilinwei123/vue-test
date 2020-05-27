// async function testAsync () {
//   return 'Hello async!';
// }

// const result = testAsync();
// testAsync().then ( (v) => {
//   console.log('then------' + v);
// })
// console.log('result------' + result);




// function getSomething() {
//   return "something";
// }

// async function testAsync() {
//   return Promise.resolve("hello async");
// }

// async function test() {
//   const v1 = await getSomething();
//   const v2 = await testAsync();
//   console.log(v1, v2);
// }

// test();






// function takeLongTime() {
//   return new Promise(resolve => {
//       setTimeout(() => resolve("long_time_value"), 1000);
//   });
// }

// takeLongTime().then(v => {
//   console.log("got", v);
// });

function takeLongTime () {
  return new Promise(resolve => {
    setTimeout(() => resolve("long_time_value"), 1000);
  });
}

async function test () {
  var v1 = await takeLongTime();
  console.log(v1);
}

test();

