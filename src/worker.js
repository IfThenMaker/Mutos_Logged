import jyunkashinData from './datas/jyunkashin';
import etoData from './datas/eto';
import unseiData from './datas/unsei';
import { genChartA, genChartB } from './worker/worker';

import {
  genCycleArr, genCycleRevArr,
  genJyunsu,
  genTukijyunsu,
  setuChecker, inyoChecker,
} from './worker/methods';


/*
  -------- kouten.Table.kashin  ----------
*/
export const genJyunkashinArr = ({ teikeimei }) => {
  const kashinsuArr = genCycleArr(1, 12, 10);
  const kashinData = jyunkashinData[teikeimei];
  const kashinArr = kashinsuArr.map((num) => kashinData[String(num)]);
  return kashinArr;
};


/*
  -------- kouten.Table.nen  ----------
*/
export const genNenArr = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  return [...Array(year + 12).keys()].slice(year);
};

// pass first year return 12etos array
export const genEtoArr = ({ firstYear }) => {
  const mod = ((Number(firstYear) - 5) % 12) + 1;
  const arr = genCycleArr(mod);
  return arr.map((m) => etoData[m]);
};


/*
  -------- kouten.Table.getu  ----------
*/
const today = new Date();

export const genGetuArr = () => {
  const tukiJyunsu = genJyunsu(today).month;
  const tukiJyunsuArr = genCycleArr(tukiJyunsu, 12, 10);
  const arr = [];
  tukiJyunsuArr.forEach((item, i) => {
    arr[item - 1] = arr[item - 1]
      ? `${arr[item - 1]}, ${i + 1}月`
      : `${i + 1}月`;
  });
  arr[10] = '-';
  arr[11] = '-';
  return arr;
};

export const genGetuEtoArr = () => {
  const tukiJyunsu = genJyunsu(today).month;
  const tukiJyunsuArr = genCycleArr(tukiJyunsu, 12, 10);
  const arr = [];
  tukiJyunsuArr.forEach((item, i) => {
    arr[item - 1] = arr[item - 1]
      ? `${arr[item - 1]}, ${etoData[i + 1]}`
      : etoData[i + 1];
  });
  arr[10] = '-';
  arr[11] = '-';
  // console.log('tukieto', arr);
  return arr;
};


/*
  -------- kouten.Table.daijyun  ----------
*/
export const genDaijyunEtoArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  // console.log('inyo', inyo);
  // const newSeinen = setuChecker(seinen);
  // const startJyunsu = genJyunsu(newSeinen).month;
  const startJyunsu = genTukijyunsu({ seinen });
  // const indexArr = genCycleArr(startJyunsu, 12, 10);
  const indexArr = (inyo
    ? genCycleArr(startJyunsu, 10, 10)
    : genCycleRevArr(startJyunsu, 10, 10)
  );
  const startEtoJyunsu = new Date(setuChecker(seinen)).getMonth() + 1;
  console.log('大巡開始巡数:', startJyunsu);
  console.log('生月干支:', etoData[startEtoJyunsu]);
  const etoArr = (inyo
    ? genCycleArr(startEtoJyunsu, 12, 12).map(
      (i) => etoData[i],
    )
    : genCycleRevArr(startEtoJyunsu, 12, 12).map(
      (i) => etoData[i],
    )
  );
  const resultArr = [];
  indexArr.forEach((item, i) => {
    resultArr[item - 1] = resultArr[item - 1]
      ? `${resultArr[item - 1]}, ${etoArr[i]}`
      : etoArr[i];
  });
  return resultArr;
};


/*
  -------- kouten.chart  ----------
*/
const genKashinData = ({ teikeimei }) => {
  const kashinArr = genJyunkashinArr({ teikeimei });
  const dataArr = kashinArr.map((v) => (
    Number(v.ten.slice(0, 1))
  ));
  return dataArr;
};

const genNenData = ({ teikeimei }) => {
  const firstYear = { firstYear: genNenArr()[0] };
  const etoArr = genEtoArr(firstYear);
  const data = unseiData[teikeimei];
  return etoArr.map((k) => Number(data[k]));
};

const genOmeguriData = ({ teikeimei, seinen, seibetu }) => {
  const etoArr = genDaijyunEtoArr({ seinen, seibetu });
  const data = unseiData[teikeimei];
  return etoArr.map((k) => {
    const index = k.length === 1
      ? k
      : k.slice(-1, k.length);
    return Number(data[index]);
  });
};

// const genGetuData = ({ teikeimei }) => {
//   const etoArr = genGetuEtoArr();
//   const data = unseiData[teikeimei];
//   return etoArr.map((k) => Number(data[k]));
// };

// const genGetuData = ({ teikeimei }) => {
//   const etoArr = genGetuEtoArr();
//   const data = unseiData[teikeimei];
//   // console.log('d', data);
//   const resArr = etoArr.map((k) => {
//     let result;
//     console.log('k', k);
//     if (k.length === 1) {
//       result = [Number(data[k])];
//     } else {
//       const etoA = data[k.slice(0, 1)];
//       const etoB = data[k.slice(-1, k.length)];
//       result = [Number(etoA), Number(etoB)];
//     }
//     return result;
//   });
//   console.log('res', resArr.slice(0, 10));
//   return resArr.slice(0, 10);
// };
//
// const genChartAdata = (arr) => {
//   let st = 0;
//   let ed = 0;
//   for (let i = 0; arr.length > i; i += 1) {
//     if (arr[i].length === 2) { ed = i; }
//   }
//   for (let i = arr.length - 1; i > 0; i -= 1) {
//     if (arr[i].length === 2) { st = i; }
//   }
//   const arrA = arr.slice(0, st);
//   const arrB = [[arr[st][1]], [arr[ed][1]]];
//   const arrC = arr.slice(ed, arr.length - 1).map(() => []);
//   const sum = arrA.concat(arrB).concat(arrC);
//   console.log('sum', sum);
//   return sum;
// };

// const

export const genUnseiData = ({ teikeimei, seinen, seibetu }) => {
  // genChartAdata(genGetuData({ teikeimei }));
  const kashinData = genKashinData({ teikeimei });
  const nenData = genNenData({ teikeimei });
  const aData = genChartA({ teikeimei });
  const bData = genChartB({ teikeimei });
  const omeguriData = genOmeguriData({ teikeimei, seinen, seibetu });
  console.log('omeguriData', omeguriData);
  const dataArr = Array.from({ length: 12 }, (v, k) => (
    { colmn: k < 10 ? k + 1 : String(k - 9) }
  ));
  kashinData.forEach((item, i) => {
    dataArr[i].kashin = item;
  });
  nenData.forEach((item, i) => {
    dataArr[i].nen = item;
  });
  aData.forEach((item, i) => {
    dataArr[i].getu = item;
  });
  aData.forEach((item, i) => {
    dataArr[i].getuA = item;
  });
  bData.forEach((item, i) => {
    dataArr[i].getuB = item;
  });
  omeguriData.forEach((item, i) => {
    dataArr[i].omeguri = item;
  });
  return dataArr;
};


/*
  -------- senten.extend.tukijyunkashin  ----------
*/
export const genTukijyunKashin = ({ teikeimei }) => {
  console.log('woook');
  console.log('teikei', teikeimei);
  const kashinArr = genJyunkashinArr({ teikeimei });
  console.log('kjashi', kashinArr);
  const tukiJyunsu = genJyunsu(today).month;
  const tukiJyunsuArr = genCycleArr(tukiJyunsu, 12, 10);
  const arr = [];
  tukiJyunsuArr.forEach((item, i) => {
    arr[item - 1] = arr[item - 1]
      ? [arr[item - 1], i + 1]
      : [i + 1];
  });
  console.log('arr', arr);
  const month = new Date().getMonth() + 1;
  let index;
  arr.forEach((item, i) => {
    if (item.length === 1) {
      index = item === month ? i : index;
    } else {
      // if (item[0] === month) { index = i; }
      // if (item[1] === month) { index = }
      index = item[0] === month || item[1] === month ? i : index;
    }
  });
  console.log('index', index);
  // const tukiArr = genGetuArr();
  // const month = `${new Date().getMonth() + 1}月`;
  // let index;
  // tukiArr.forEach((item, i) => {
  //   if (item.length < 4) {
  //     if (item === month) { index = i; }
  //     console.log('2', month, item, month===item, index);
  //   } else {
  //     const mArr = item.split(',');
  //     console.log(mArr, mArr[0], mArr[1], mArr[0]===item, mArr[1]===item);
  //     index = item.split(',')[0] === month || item.split(',')[1] === month
  //       ? i : index;
  //   }
  // });
  //
  //
  // console.log('tuki', tukiArr);
  return {
    title: '月巡華神',
    index: `${month}月`,
    // value: kashinArr[genJyunsu(setuChecker(seinen)).month].kashin,
    value: kashinArr[index].kashin,
  };
};





//
