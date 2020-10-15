const dt = '2020-02-01';


const date = new Date(dt);

// console.log(dt.slice(dt.indexOf('-') + 1, dt.lastIndexOf('-')));

const arr = [[9], [10], [1, 11], [2, 12], [3], [4], [5], [6], [7], [8]];
const c = [4, 5];
arr.forEach((item, i) => {
  console.log(item[0], item[0] in c);
});

let st = 0;
let ed = 0;
for (let i = 0; arr.length > i; i += 1) {
  if (arr[i].length === 2) { ed = i; }
}
for (let i = arr.length - 1; i > 0; i -= 1) {
  if (arr[i].length === 2) { st = i; }
  console.log(i);
}
console.log(st, ed);

const arrA = arr.slice(0, st);
const arrB = [[arr[st][1]], [arr[ed][1]]];
const arrC = arr.slice(ed, arr.length - 1).map(() => []);
const sum = arrA.concat(arrB).concat(arrC);
// sum.push(arrC);
console.log(arrA, arrB, arrC, sum);
console.log(sum);

const arA = arr.slice(0, st).map(() => []);
const arB = [[arr[st][0]], [arr[ed][0]]];
const arC = arr.slice(ed + 1, arr.length);
console.log(arA, arB, arC);
