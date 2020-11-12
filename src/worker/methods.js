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
  if (m !== nm && m <= 2) { nm = m === 1 ? 12 : 1; }
  const res = `${ny}-${nm}-${nd}`;
  // console.log(dateStr, 'che', res, m, nm);
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

//   return seinen tukijyunnsu
// export const genTukijyunsu = ({ seinen }) => {
//   const date = new Date(seinen);
//   const chakeddate = new Date(setuChecker(seinen));
//   const y = date.getYear();
//   const m = date.getMonth();
//   const cy = date.getYear();
//   const cm = date.getMonth();
//   let ansYear = cy;
//   let ansMonth = cm;
//   if (m === 1 || m === 2) {
//     ansYear =
//   }
//   // const changedYear = y === cy ? y : cy;
//   // const changedMonth = (() => {
//   //   let result;
//   //   if (m === cm) {
//   //     result = m;
//   //   } else {
//   //     result = y === cy
//   //       ?
//   //
//   //   }
//   // })();
// };

// export const genTukijyunsu = ({ seinen }) => {
//   const date = new Date(seinen);
//   // console.log('method', date.getMonth());
//   const y = date.getYear() + 1900;
//   const nm = new Date(setuChecker(seinen)).getMonth() + 1;
//   console.log('setuc', setuChecker(seinen), 'seinen', seinen);
//   console.log('nm', nm);
//
//   // console.log('ch', y, jyunsuData[Number(y) % 10]);
//   const jyunsu = jyunsuData[Number(y) % 10].month;
//   console.log('jyunsu', jyunsu);
//   const arr = genCycleArr(jyunsu, 12, 10);
//   // console.log('arr', arr);
//   return arr[nm - 1];
// };

// export const genTukijyunsu = ({ seinen }) => {
//   const checkedDate = setuChecker(seinen);
//   const date = new Date(checkedDate);
//   // console.log('cc', date.getMonth());
//   console.log('setuc', setuChecker(seinen), 'seinen', seinen);
//   const y = date.getYear() + 1900;
//   const m = date.getMonth();
//   const startJynsu = jyunsuData[Number(y) % 10].month;
//   const arr = genCycleArr(startJynsu, 12, 10);
//   return arr[m];
// };

export const genTukijyunsu = ({ seinen }) => {
  const cd = new Date(setuChecker(seinen));
  const d = new Date(seinen);
  const cy = cd.getYear() + 1900;
  const cm = cd.getMonth();
  const y = d.getYear() + 1900;
  const m = d.getMonth();
  let startJynsu = jyunsuData[Number(cy) % 10].month;
  // console.log(cy, cm, y, m);
  if (cy !== y && cm === m) {
    startJynsu = jyunsuData[Number(y) % 10].month;
    // console.log('ireg', startJynsu);
  }
  const arr = genCycleArr(startJynsu, 12, 10);
  return arr[cm];
};

// const genTukijyunsu = ({ seinen }) => {
//   const checkedDate = setuChecker(seinen);
//   const date = new Date(checkedDate);
//   // console.log('cc', date.getMonth());
//   const y = date.getYear() + 1900;
//   const m = date.getMonth();
//   const arr = genTenArr(jyunsuData[Number(y) % 10].month);
//   return arr[m];
// };






















//
