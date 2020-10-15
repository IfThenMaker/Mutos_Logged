import setuData from './setu';
import jyunsuData from './jyunsu';
import jyunkashinData from './jyunkashin';
import etoData from './eto';
import kaminashiData from './kaminashi';

import himeguriData from './himeguri';
import goujyunData from './goujyun';
import unseiData from './unsei';


/* -----  methods  ----- */
//   generate int cycle arr
const genCycleArr = (
  startNumber,
  colmuns = 12,
  count = 12,
) => {
  const arr = [startNumber];
  let counter = startNumber;
  const intArr = Array.from({ length: colmuns - 1 }, (v, k) => k + 1);
  intArr.forEach(() => {
    if (counter < count) {
      counter += 1;
    } else {
      counter = 1;
    }
    arr.push(counter);
  });
  return arr;
};

//   setuCheck
const setuChecker = (dateStr) => {
  const dt = new Date(dateStr);
  const y = dt.getYear() + 1900;
  const m = dt.getMonth() + 1;
  const setu = setuData[String(y)];
  let ny = y;
  let nm = m;
  const nd = dt.getDate();
  //   yearCheck
  const setuYear = new Date(`${y}-2-${setu.startDate}`);
  if (dt < setuYear) { ny -= 1; }
  //   month chack
  const setuMonth = new Date(`${y}-${m}-${setu.tuki[m]}`);
  if (dt < setuMonth) { nm = (nm - 1) !== 0 ? (nm - 1) : 12; }
  return `${ny}-${nm}-${nd}`;
};

//   junsu object nen and tuki
const genJyunsu = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getYear();
  const month = date.getMonth();
  const data = jyunsuData[year % 10];
  const tukijyunArr = genCycleArr(data.month, 12, 10);
  const result = {
    year: data.year,
    month: tukijyunArr[month],
  };
  return result;
};

//   kashin array for table standard
const genKashinArr = ({ teikeimei }) => {
  const arr = genJyunkashinArr({ teikeimei });
  return arr.map((obj) => obj.kashin);
};

//   return object by datas
const dateData = (dateStr) => {
  const date = new Date(dateStr);
  return {
    year: date.getYear() + 1900,
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};


/* -----  constants  ----- */
//   todays date string checked
const today = setuChecker(new Date());



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
  const arr = genCycleArr(mod, 12, 12);
  return arr.map((m) => etoData[m]);
};

export const genNenJyunsuArr = () => (
  genCycleArr(genJyunsu().year, 12, 10)
);


/*
  -------- kouten.Table.getu  ----------
*/
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
  return arr;
};


/*
  -------- kouten.table.goujyun  ----------
*/
const genTukiNumArr = () => {
  const tukiJyunsu = genJyunsu(today).month;
  const tukiJyunsuArr = genCycleArr(tukiJyunsu, 12, 10);
  const arr = [];
  tukiJyunsuArr.forEach((item, i) => {
    arr[item - 1] = arr[item - 1]
      ? arr[item - 1].concat([i + 1])
      : [i + 1];
  });
  return arr;
};

const genMesu = (seinen) => {
  // console.log('seinein', seinen);
  const { year, month, day } = dateData(seinen);
  // console.log(year, month, day);
  const daijyunsu = himeguriData[year].month[month];
  const mesu = () => {
    let kari = Number(daijyunsu) + Number(day) - 8;
    if (kari > 60) {
      kari -= 60;
    }
    return kari;
  };
  return mesu();
};

const genKaminashi = (meisu) => {
  let kaminashi;
  if (meisu <= 10) {
    kaminashi = kaminashiData[1];
  } else if (meisu <= 20) {
    kaminashi = kaminashiData[2];
  } else if (meisu <= 30) {
    kaminashi = kaminashiData[3];
  } else if (meisu <= 40) {
    kaminashi = kaminashiData[4];
  } else if (meisu <= 50) {
    kaminashi = kaminashiData[5];
  } else if (meisu <= 60) {
    kaminashi = kaminashiData[6];
  }
  console.log('神無干支:', kaminashi.eto);
  console.log('神無月:', kaminashi.tuki);
  return kaminashi;
};

export const genKaminashiNeniArr = ({ seinen }) => {
  const meisu = genMesu(seinen);
  const kaminashi = genKaminashi(meisu);
  const EtoArr = genEtoArr({ firstYear: genNenArr()[0] });
  const etoNashiArr = EtoArr.map((v) => (
    kaminashi.eto.indexOf(v) > -1 ? 'nen' : ' '
  ));
  return etoNashiArr;
};

export const genKaminashiGetuArr = ({ seinen }) => {
  const meisu = genMesu(seinen);
  const kaminashi = genKaminashi(meisu).tuki;
  const arr = genTukiNumArr();
  const resultArr = arr.map((v) => {
    let c = ' ';
    if (kaminashi[0] === v[0]) { c = 'tuki'; }
    if (kaminashi[1] === v[0]) { c = 'tuki'; }
    if (kaminashi[0] === v[1]) { c = 'tuki'; }
    if (kaminashi[1] === v[1]) { c = 'tuki'; }
    return c;
  });
  return resultArr;
};


/*
  -------- kouten.chart  ----------
*/
const genEtoArrArr = () => {
  const tukiJyunsu = genJyunsu(today).month;
  const tukiJyunsuArr = genCycleArr(tukiJyunsu, 12, 10);
  const arr = [];
  tukiJyunsuArr.forEach((item, i) => {
    arr[item - 1] = arr[item - 1]
      ? arr[item - 1].concat([etoData[i + 1]])
      : [etoData[i + 1]];
  });
  return arr;
};

const etoA = (arr) => {
  let st = 0;
  let ed = 0;
  for (let i = 0; arr.length > i; i += 1) {
    if (arr[i].length === 2) { ed = i; }
  }
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i].length === 2) { st = i; }
  }
  const arrA = arr.slice(0, st);
  const arrB = [[arr[st][1]], [arr[ed][1]]];
  const arrC = arr.slice(ed, arr.length - 1).map(() => []);
  const sum = arrA.concat(arrB).concat(arrC);
  return sum;
};

const etoB = (arr) => {
  let st = 0;
  let ed = 0;
  for (let i = 0; arr.length > i; i += 1) {
    if (arr[i].length === 2) { ed = i; }
  }
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i].length === 2) { st = i; }
  }
  const arA = arr.slice(0, st).map(() => []);
  const arB = [[arr[st][0]], [arr[ed][0]]];
  const arC = arr.slice(ed + 1, arr.length);
  const sum = arA.concat(arB).concat(arC);
  return sum;
};

export const genTukiChart = ({ teikeimei }) => {
  const etoArr = genEtoArrArr();
  const arr = etoA(etoArr);
  console.log('etoarr', etoArr);
  const data = unseiData[teikeimei];
  return arr.map((k) => Number(data[k]));
};

export const genChartA = ({ teikeimei }) => {
  const etoArr = genEtoArrArr();
  const arr = etoA(etoArr);
  // console.log('etoarr', etoArr);
  const data = unseiData[teikeimei];
  return arr.map((k) => Number(data[k]));
};

export const genChartB = ({ teikeimei }) => {
  const etoArr = genEtoArrArr();
  const arr = etoB(etoArr);
  // console.log('etoarr', etoArr);
  const data = unseiData[teikeimei];
  return arr.map((k) => Number(data[k]));
};




/*
  -------- kouten.table.goujyun  ----------
*/



export const test = ({ seinen }) => {
  // console.log('seinen', seinen);
  const teikeisu = genMesu({ seinen });
  // console.log('å‘½æ•°', teikeisu);
  const checkedDate = setuChecker(seinen);
  const nenjyun = genJyunsu(checkedDate).year;
  const tukijyun = genJyunsu(checkedDate).month;
  const nichijyun = teikeisu % 10 ? teikeisu % 10 : 10;
  // console.log('jyunsu', nenjyun, tukijyun, nichijyun);
  // const nenJyunsuArr = genNenJyunsuArr();
  // // console.log(nenjyun, tukijyun, nichijyun);
  // // console.log(nenJyunsuArr);
  const gd = goujyunData;
  // const checker = (i) => (
  //   !!(i === gd[nenjyun]
  //   || i === gd[tukijyun]
  //   || i === gd[nichijyun])
  // );
  // const result = nenJyunsuArr.map((i) => checker(i));
  // return result;
};
