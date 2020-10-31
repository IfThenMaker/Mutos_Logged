import jyunkashinData from './datas/jyunkashin';
import etoData from './datas/eto';
import jyunsuData from './datas/jyunsu';


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
  return arr;
};

















//
