import jyunkashinData from './datas/jyunkashin';
import etoData from './datas/eto';

import {
  genCycleArr, genCycleRevArr,
  genJyunsu,
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
  const newSeinen = setuChecker(seinen);
  const startJyunsu = genJyunsu(newSeinen).month;
  // const indexArr = genCycleArr(startJyunsu, 12, 10);
  const indexArr = (inyo
    ? genCycleArr(startJyunsu, 12, 10)
    : genCycleRevArr(startJyunsu, 12, 10)
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











//
