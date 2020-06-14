

// let itemArr = [];
// function isHappy (n) {
//     let arr = n.toString().split('');
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += value*value;
//     });
//     if (sum === 1) {
//         return true;
//     } else {
//         if (itemArr.indexOf(sum) !== -1) {
//             return false;
//         } else {
//             itemArr.push(sum);
//             isHappy(sum);
//         }
//     }
// };

// isHappy(3);


// var twoSum = function(nums, target) {
//     debugger
//     for (let i = 0; i < nums.length; i++) {
//         let t = target - nums[i];
//         let index = nums.lastIndexOf(t);
//         if (index > i) {
//             return [i, index];
//         }
//     }
// };

// twoSum([3, 3, 7, 9], 12)


let count = 0;

function myJsonp (url) {
    return new Promise((resolve, reject) => {
        let fnName = 'sax_jsonpCallback_' + count++;
        let script = document.createElement('script');
    
        script.src = url + '&callback=' + fnName;
    
        document.body.appendChild(script);
    
        window[fnName] = (res) => {
            resolve(res);
            // document.body.removeChild(script);
        }
    })
}

myJsonp('https://sa.sina.cn/native/delivery?adunit_id=PDPS000000057573,PDPS000000057786,PDPS000000059890,PDPS000000060087&page_url=https%3A%2F%2Fk.sina.cn%2Farticle_5883109483_15ea9206b00100zanu.html%3Ffrom%3Dent%26subch%3Dstar%26cre%3Dtianyi%26mod%3Dwhome%26loc%3D9%26r%3D26%26rfunc%3D33%26tj%3Dcx_wap_whome%26tr%3D0%26vt%3D4%26pos%3D108%26his%3D0%26isEncrypt%3D1&timestamp=1591323832624&&rotate_count=97&am=%7B%22ds%22%3A%22375*667%22%2C%22ov%22%3A%22ios%22%7D&net=null&chwm=').then((res) => {
    console.log(res)
}) 

// fetch ('https://sa.sina.cn/native/delivery?adunit_id=PDPS000000057573,PDPS000000057786,PDPS000000059890,PDPS000000060087&page_url=https%3A%2F%2Fk.sina.cn%2Farticle_5883109483_15ea9206b00100zanu.html%3Ffrom%3Dent%26subch%3Dstar%26cre%3Dtianyi%26mod%3Dwhome%26loc%3D9%26r%3D26%26rfunc%3D33%26tj%3Dcx_wap_whome%26tr%3D0%26vt%3D4%26pos%3D108%26his%3D0%26isEncrypt%3D1&timestamp=1591323832624&&rotate_count=97&am=%7B%22ds%22%3A%22375*667%22%2C%22ov%22%3A%22ios%22%7D&net=null&chwm=').then((res) => {

// })