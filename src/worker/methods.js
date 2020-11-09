import jyunsuData from '../datas/jyunsu';
import setuData from '../datas/setu';


/* -----  methods  ----- */
//   generate int cycle arr
export const genCycleArr = (
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
export const genCycleRevArr = (
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
export const genJyunsu = (dateStr) => {
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
  const bDate = seinen.slice(0, 4);
  const cDate = checkedDate.slice(0, 4);
  // console.log('seinen', seinen);
  // console.log('cd', bDate, cDate, checkedDate);
  // console.log('setuOn', bDate === cDate);
  // const check = bDate === cDate
  //   ? jyunsuData[Number(cDate) % 10].year % 2
  //   : (jyunsuData[Number(cDate) % 10].year - 1) % 2;
  // console.log('worker c', check);
  const check = jyunsuData[Number(cDate) % 10].year % 2;
  // console.log('seibe', seibetu, seibetu.seibetu === 'male');
  let inyo = true;
  if (check !== 0 && seibetu.seibetu === 'female') { inyo = false; }
  if (check === 0 && seibetu.seibetu === 'male') { inyo = false; }
  console.log('陰陽:', inyo ? '陽' : '陰');
  return inyo;
};
