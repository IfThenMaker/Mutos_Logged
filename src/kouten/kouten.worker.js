// import jyunData from './datas/jyunsu';
import etoData from './datas/eto';
import jyunkashinData from './datas/jyunkashin';
import setuData from './datas/setu';
import jyunsuData from './datas/jyunsu';
import junsetuYou from './datas/jyunsetuYou';
import junsetuIn from './datas/jyunsetuIn';


//   pass num return 12nums array
//   genEtoArr
const genTwelveArr = (num) => {
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

//   pass num return 10nums array
//   genGetuArr
const genTenArr = (num) => {
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

//   check setu from date string return checed date string
//   genNenJyunsu genJyunsuArr
const setuChecker = (dateStr) => {
  const dt = new Date(dateStr);
  const y = dt.getYear() + 1900;
  const m = dt.getMonth() + 1;
  const setu = setuData[String(y)];
  // const result = { year: true, month: true };
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
  // console.log('sn', setuMonth);
  // console.log(typeof y);
  // console.log('date', y, m, d);
  // console.log(result);
};


//   return todays jyunsu object {year: , month: ,}
//   genGetuArr genJyunkashinArr inyoChecker
const genJyunsu = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  const dateStr = `${year}-${date.getMonth() + 1}-${date.getDate()}`;
  console.log(dateStr);
  const checedYear = Number(setuChecker(dateStr).slice(0, 4));
  console.log(checedYear);
  return jyunsuData[checedYear % 10];
};

console.log('jyunsu', genJyunsu());


/*  kouten.Table.nen   */
export const genNenArr = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  return [...Array(year + 12).keys()].slice(year);
};

// pass first year return 12etos array
export const genEtoArr = ({ firstYear }) => {
  const mod = ((Number(firstYear) - 4) % 12) + 1;
  const arr = genTwelveArr(mod);
  return arr.map((m) => etoData[m]);
};

/*  kouten.Table.getu   */
export const genGetuArr = () => {
  const jyunsu = genJyunsu();
  const jyunArr = genTenArr(jyunsu.year);
  console.log('nenArr', jyunsu);
  // const def = junsu.year - jyunsu.month;
  // const monSt = def > 0 ? jyunsu.month +
  const monStart = genTenArr(jyunsu.month).slice(0, 10).indexOf(1) + 1;
  console.log('mon', monStart);
  return genTwelveArr(monStart);

  const stMonth = () => {
    let def = jyunsu.year - jyunsu.month;
    if (def < 0) { def = 11 - def; }
    return def;
  };
  return genTwelveArr(stMonth());
};

export const genGetuEtoArr = () => genGetuArr().map(
  (m) => etoData[m],
);

/*  kouten.Table.kashin   */
export const genJyunkashinArr = ({ teikeimei }) => {
  const jyunsu = genJyunsu().year;
  //   create kashinsu array
  const kashinsuArr = genTenArr(jyunsu);
  const kashinData = jyunkashinData[teikeimei];
  const kashinArr = kashinsuArr.map((num) => kashinData[String(num)]);
  return kashinArr;
};


/*  kouten.Table.kashin   */
const inyoChecker = ({ seinen, seibetu }) => {
  const checkedDate = setuChecker(seinen);
  const y = checkedDate.slice(0, 4);
  const check = jyunsuData[Number(y) % 10].year % 2;
  console.log(jyunsuData[Number(y) % 10]);
  let inyo = true;
  if (check && seibetu === 'female') { inyo = false; }
  if (!check && seibetu === 'male') { inyo = false; }
  return inyo;
};
const genTukijyunsu = ({ seinen }) => {
  const checkedDate = setuChecker(seinen);
  const y = checkedDate.slice(0, 4);
  return jyunsuData[Number(y) % 10].month;
};

export const genDaijyunArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  console.log(inyo);
  const tukijyunsu = genTukijyunsu({ seinen });
  console.log('tuki', tukijyunsu);
  // const
};






//   creage nenjyunsu from date string
const genNenJyunsu = (strDate) => {
  const checkedDate = setuChecker(strDate);
  const y = checkedDate.slice(0, 4);
  return jyunsuData[Number(y) % 10];
};





export const genJyunsuArr = () => {
  const genJyunsu = () => {
    const setuCh = (dt, year) => {
      const y = dt.getYear() + 1894;
      const m = dt.getMonth() + 1;
      const d = dt.getDate();
      const tdate = new Date(`${y}-${m}-${d}`);
      const dstar = `${year}-${2}-${setuData[String(year)].startDate}`;
      const cdate = new Date(dstar);
      return tdate >= cdate;
    };
    const date = new Date('2013-02-03');
    let year = date.getYear() + 1894;

    //   check true year by setu
    const setuCheck = setuCh(date, year);
    if (!setuCheck) { year -= 1; }
    return jyunsuData[year % 10];
  };
  return genTenArr(genJyunsu().year);
};

//   for omeguri
export const daijyunun = ({ seinen, seibetu }) => {
  // const check = genNenJyunsu(seinen);
  const jyunsuArr = genJyunsuArr();
  // const c = genJyunkashinArr({teikeimei: 'åŽ³å±±å‘½'});
  console.log('jyunsuArr', jyunsuArr);
  // const check = setuChecker('1912-02-5');
  // const nenJyunsu =
  // console.log('se', check);
};












//
// const setuChecker = (dateStr) => {
//   const dt = new Date(dateStr);
//   const y = dt.getYear() + 1900;
//   const m = dt.getMonth() + 1;
//   const setu = setuData[String(y)];
//   // const result = { year: true, month: true };
//   let ny = y;
//   let nm = m;
//   const nd = dt.getDate();
//   //   yearCheck
//   const setuYear = new Date(`${y}-2-${setu.startDate}`);
//   if (dt < setuYear) { ny -= 1; }
//   //   month chack
//   const setuMonth = new Date(`${y}-${m}-${setu.tuki[m]}`);
//   if (dt < setuMonth) { nm = (nm - 1) !== 0 ? (nm - 1) : 12; }
//   return `${ny}-${nm}-${nd}`;
//   // console.log('sn', setuMonth);
//   // console.log(typeof y);
//   // console.log('date', y, m, d);
//   // console.log(result);
// };
















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
