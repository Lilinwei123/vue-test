let arr = [];
arr.length = 12;
let obj = {1:222, 2:123, 5:888};

for (let prop in obj) {
  console.log('prop-------', prop);
  arr[prop-1] = obj[prop];
}



console.log(JSON.stringify(arr));