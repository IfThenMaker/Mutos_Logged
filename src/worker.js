import jyunkashinData from './datas/jyunkashin';
import etoData from './datas/eto';
import jyunsuData from './datas/jyunsu';
import setuData from './datas/setu';


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

//   generate int cycle reverse arr
const genCycleRevArr = (
  startNumber,
  colmuns = 12,
  count = 12,
) => {
  const arr = [startNumber];
  let counter = startNumber;
  const intArr = Array.from({ length: colmuns - 1 }, (v, k) => colmuns - k - 1);
  intArr.forEach(() => {
    if (counter > 1) {
      counter -= 1;
    } else {
      counter = count;
    }
    arr.push(counter);
  });
  return arr;
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

//   setu check with birthdate string
export const setuChecker = (dateStr) => {
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
  const res = `${ny}-${nm}-${nd}`;
  // console.log(dateStr, 'che', res);
  return res;
};

//   check if it is in or you
export const inyoChecker = ({ seinen, seibetu }) => {
  const checkedDate = setuChecker(seinen);
  const bdate = seinen.slice(0, 4);
  const y = checkedDate.slice(0, 4);
  // console.log('seinen', seinen);
  // console.log('cd', checkedDate);
  console.log('setuOn', bdate === y);
  const check = bdate === y
    ? jyunsuData[Number(y) % 10].year % 2
    : (jyunsuData[Number(y) % 10].year - 1) % 2;
  console.log('worker c', check);
  // console.log('seibe', seibetu, seibetu.seibetu === 'male');
  let inyo = true;
  if (check !== 0 && seibetu.seibetu === 'female') { inyo = false; }
  if (check === 0 && seibetu.seibetu === 'male') { inyo = false; }
  return inyo;
};


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
  console.log('tukieto', arr);
  return arr;
};


/*
  -------- kouten.Table.daijyun  ----------
*/
export const genDaijyunEtoArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  console.log('inyo', inyo);
  const newSeinen = setuChecker(seinen);
  const startJyunsu = genJyunsu(newSeinen).month;
  const indexArr = (inyo
    ? genCycleArr(startJyunsu, 12, 10)
    : genCycleRevArr(startJyunsu, 12, 10)
  );
  const startEtoJyunsu = new Date(setuChecker(seinen)).getMonth() + 1;
  console.log('大巡開始巡数:', startJyunsu);
  console.log('生月干支:', etoData[startEtoJyunsu]);
  const etoArr = genCycleArr(startEtoJyunsu, 12, 12).map(
    (i) => etoData[i],
  );
  const resultArr = [];
  indexArr.forEach((item, i) => {
    // console.log(item, i);
    resultArr[item - 1] = resultArr[item - 1]
      ? `${resultArr[item - 1]}, ${etoArr[i]}`
      : etoArr[i];
  });
  return resultArr;
};











//
