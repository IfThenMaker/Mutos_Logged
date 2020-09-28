// import jyunData from './datas/jyunsu';
import etoData from './datas/eto';
import jyunkashinData from './datas/jyunkashin';
import setuData from './datas/setu';
import jyunsuData from './datas/jyunsu';


// pass num return 12nums array
const genJyunArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 11 }, (v, k) => k + 1);
  // console.log('int', intArr);
  intArr.forEach(() => {
    if (counter < 12) {
      counter += 1;
    } else {
      counter = 1;
    }
    arr.push(counter);
  });
  return arr;
};

// pass num return 12nums array
const genYouArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 11 }, (v, k) => k + 1);
  // console.log('int', intArr);
  intArr.forEach(() => {
    if (counter < 10) {
      counter += 1;
    } else {
      counter = 1;
    }
    arr.push(counter);
  });
  return arr;
};

export const genJyunkashinArr = ({ teikeimei }) => {
  const setuChecker = (dt, year) => {
    // const dt = new Date();
    const y = dt.getYear() + 1894;
    const m = dt.getMonth() + 1;
    const d = dt.getDate();
    // console.log(y, m, d);
    const tdate = new Date(`${y}-${m}-${d}`);
    const dstar = `${year}-${2}-${setuData[String(year)].startDate}`;
    const cdate = new Date(dstar);
    return tdate >= cdate;
  };
  const date = new Date('2013-02-03');
  let year = date.getYear() + 1894;

  //   check true year by setu
  const setuCheck = setuChecker(date, year);
  // console.log(setuCheck);
  if (!setuCheck) { year -= 1; }
  const jyunsu = jyunsuData[year % 10].year;
  // console.log('nn', jyunsu);

  //   create kashinsu array
  const kashinsuArr = genYouArr(jyunsu);
  // console.log(kashinsuArr);
  const kashinData = jyunkashinData[teikeimei];
  // console.log('d', teikeimei, jyunkashinData);
  // console.log('data', kashinData);
  const kashinArr = kashinsuArr.map((num) => kashinData[String(num)]);
  // console.log('kashin', kashinArr);
  return kashinArr;
};


// pass first year return 12etos array
export const genYearEtoArr = ({ firstYear }) => {
  const mod = ((Number(firstYear) - 4) % 12) + 1;
  const arr = genJyunArr(mod);
  return arr.map((m) => etoData[m]);
};

export const genYearArr = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  return [...Array(year + 12).keys()].slice(year);
};


// const genYouArr = (num) => {
//   const arr = [num];
//   let counter = num;
//   const intArr = Array.from({ length: 9 }, (v, k) => k + 1);
//   // console.log('int', intArr);
//   intArr.forEach(() => {
//     if (counter < 10) {
//       counter += 1;
//     } else {
//       counter = 1;
//     }
//     arr.push(counter);
//   });
//   console.log(arr);
//   return arr;
// };


const genInArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 9 }, (v, k) => k + 1);
  // console.log('int', intArr);
  intArr.forEach(() => {
    if (counter <= 1) {
      counter = 10;
    } else {
      counter -= 1;
    }
    arr.push(counter);
  });
  console.log(arr);
  return arr;
};


export const nenjyun = () => {
  console.log('tukijyun', jyunData);

};


// genYouArr(10);
// genInArr(5);
