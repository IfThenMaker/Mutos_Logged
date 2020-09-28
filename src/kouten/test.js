const date = new Date('2012')
console.log(date)
const ddate = new Date('2020-09-28')

console.log(date >= ddate);


const num = 1029
console.log(num % 10);
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
