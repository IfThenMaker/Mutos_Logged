const date = new Date('2020-01-01');

const arr =  ["辰", "巳"]
const am = '辰';


console.log(am === arr[0]);




// const setusu = 2;
//
// const setuArr = Array.from({ length: 12 }, (v, k) => (
//   // `${setusu + (k - 1) * 10 > 0
//   //   ? setusu + (k - 1) * 10 : 0} ~ ${setusu + k * 10}歳`
//   `${setusu + (k - 1) * 10 > 0
//     ? setusu + (k - 1) * 10 : 0} ~ ${setusu - 1 + k * 10}歳`
// ));
//
// console.log(setuArr);
//
// const arr = ["a", "b", "c",];
// const narr = arr.map((v, i) => console.log(i));
// console.log(narr);
// console.log(is arr.length);
//
// const test = 12;
//
// const check = (v) => {
//   switch (v) {
//     case v > 1 <= 10:
//       console.log(v);
//       return 10;
//       // break;
//     case v > 11 <= 20:
//       console.log(20);
//       return 20;
//     default:
//       break;
//   }
//   return ' ';
// };
// check(test);

// break;
// const date = new Date('2012')
// console.log(date)
// const ddate = new Date('2020-09-28')
//
// console.log(date >= ddate);
//
//
// const num = 1029
// console.log(num % 10);
// const eto = {
//   1: '子',
//   2: '丑',
//   3: '寅',
//   4: '卯',
//   5: '辰',
//   6: '巳',
//   7: '午',
//   8: '未',
//   9: '申',
//   10: '酉',
//   11: '戌',
//   12: '亥',
// };
//
// const year = '2006';
// const mod = ((Number(year) - 4) % 12) + 1;
// const arr = [mod];
// let counter = mod;
// const intArr = Array.from({ length: 11 }, (v, k) => k + 1);
// // console.log('int', intArr);
// intArr.forEach(() => {
//   if (counter < 12) {
//     counter += 1;
//   } else {
//     counter = 1;
//   }
//   arr.push(counter);
// });
// console.log(arr);
// console.log(mod);
// const etoArr = arr.map((m) => eto[m]);
// console.log(etoArr);
//
// const genYouArr = (num) => {
//   const arr = [num];
//   let counter = num;
//   const intArr = Array.from({ length: 11 }, (v, k) => k + 1);
//   // console.log('int', intArr);
//   intArr.forEach(() => {
//     if (counter < 12) {
//       counter += 1;
//     } else {
//       counter = 1;
//     }
//     arr.push(counter);
//   });
//   return arr;
// };
// console.log(genYouArr(5));
