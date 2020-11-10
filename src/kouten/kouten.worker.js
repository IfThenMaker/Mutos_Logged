import etoData from '../datas/eto';
import jyunkashinData from '../datas/jyunkashin';
import setuData from '../datas/setu';
import jyunsuData from '../datas/jyunsu';
import junsetuYou from '../datas/jyunsetuYou';
import junsetuIn from '../datas/jyunsetuIn';
import himeguriData from '../datas/himeguri';
import kaminashiData from '../datas/kaminashi';
import goujyunData from '../datas/goujyun';
import unseiData from '../datas/unsei';

import { genChartA, genChartB } from '../worker/worker';
import { genDaijyunEtoArr } from '../worker';
import { inyoChecker, setuChecker, genTukijyunsu } from '../worker/methods';

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
  // console.log('sn', setuMonth);
  // console.log(typeof y);
  // console.log('date', y, m, d);
  // console.log(result);
// };


//   return todays jyunsu object {year: , month: ,}
//   genGetuArr genJyunkashinArr inyoChecker
const genJyunsu = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  const dateStr = `${year}-${date.getMonth() + 1}-${date.getDate()}`;
  // console.log(dateStr);
  const checedYear = Number(setuChecker(dateStr).slice(0, 4));
  // console.log('yy', checedYear);
  return jyunsuData[checedYear % 10];
};

// console.log('jyunsu', genJyunsu());


/*
  -------- kouten.Table.kashin  ----------
*/
export const genJyunkashinArr = ({ teikeimei }) => {
  const jyunsu = genJyunsu().year;
  // console.log('占い日年巡数:', jyunsu);
  //   create kashinsu array
  const kashinsuArr = genTenArr(jyunsu);
  // console.log('kashinsuArr', kashinsuArr);
  const kashinData = jyunkashinData[teikeimei];
  // console.log('kashinData', kashinData);
  const kashinArr = kashinsuArr.map((num) => kashinData[String(num)]);
  // console.log('kashinArr', kashinArr);
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
  const arr = genTwelveArr(mod);
  return arr.map((m) => etoData[m]);
};

export const genNenJyunsuArr = () => (
  genTenArr(genJyunsu().year)
);


/*
  -------- kouten.Table.getu  ----------
*/
const genTenRowArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 9 }, (v, k) => k + 1);
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


export const genGetuArr = () => {
  // console.log('getsarr', teikeimei);
  // const kashinArr = genJyunkashinArr({ teikeimei });
  // console.log('tei', kashinArr)
  const tukiSt = genTenRowArr(genJyunsu().month).indexOf(1) + 1;
  // console.log('tuki', genJyunsu().month);
  return genTwelveArr(tukiSt);
  // const nenDef = 13 - genNenJyunsuArr().indexOf(1);
  // const tukiArr = genTwelveArr(genJyunsu().month + (nenDef === 13 ? 1 : nenDef));
  // console.log(genJyunsu());
  // console.log('tukiSt', tukiSt);
  // console.log('tuki', tukiArr);
  // return Array.from({ length: 12 }, (v, k) => k + 1);
};

export const genGetuEtoArr = () => genGetuArr().map(
  (m) => etoData[m],
);

export const genGetuJyunsuArr = () => (
  genTenArr(genJyunsu().month)
);

// export const genGetuArr = () => {
//   const jyunsu = genJyunsu();
//   const jyunArr = genTenArr(jyunsu.year);
//   console.log('nenArr', jyunsu);
//   // const def = junsu.year - jyunsu.month;
//   // const monSt = def > 0 ? jyunsu.month +
//   const monStart = genTenArr(jyunsu.month).slice(0, 10).indexOf(1) + 1;
//   console.log('mon', monStart);
//   return genTwelveArr(monStart);
//   const stMonth = () => {
//     let def = jyunsu.year - jyunsu.month;
//     if (def < 0) { def = 11 - def; }
//     return def;
//   };
//   return genTwelveArr(stMonth());
// };





/*
  -------- kouten.Table.daijyun  ----------
*/
// const inyoChecker = ({ seinen, seibetu }) => {
//   const checkedDate = setuChecker(seinen);
//   const y = checkedDate.slice(0, 4);
//   const check = jyunsuData[Number(y) % 10].year % 2;
//   // console.log('in', jyunsuData[Number(y) % 10], check);
//   let inyo = true;
//   if (check !== 0 && seibetu.seibetu === 'female') { inyo = false; }
//   if (check === 0 && seibetu.seibetu === 'male') { inyo = false; }
//   // console.log('inyo', inyo);
//   return inyo;
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
  return arr;
};


// const genInjyunArr = (setusu) => {
//   const arr = Array.from({ length: 10 }, (v, k) => {
//     const res = `${setusu + (k - 1) * 10 > 0
//       ? setusu + (k - 1) * 10 : 0} ~ ${setusu - 1 - (10 - k) * 10}歳`;
//     return res === '0 ~ 0歳' ? '0歳' : res;
//   });
//     // 10 - k});
//   console.log('arrrs', arr);
//   console.log(arr);
// };

export const genDaijyunArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const date = new Date(seinen);
  // console.log('date', date);
  const ndate = new Date(setuChecker(seinen));
  // console.log('sddate', ndate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // console.log('seinen', seinen);
  // console.log('陰陽:', inyo ? '陽' : '陰');
  // console.log('tuki', tukijyunsu);
  const jyunsetu = inyo ? junsetuYou : junsetuIn;
  const setusu = Number(jyunsetu[month][day]);
  console.log('巡節年:', setusu);
  const daijyunsu = genTukijyunsu({ seinen });
  console.log('生月巡数:', daijyunsu);
  const jyunArr = inyo ? genTenArr(daijyunsu) : genInArr(daijyunsu);
  // console.log('jyunArr', jyunArr);
  // const arr = genTwelveArr(daijyunsu);
  const setuArr = Array.from({ length: 10 }, (v, k) => {
    const res = `${setusu + (k - 1) * 10 > 0
      ? setusu + (k - 1) * 10 : 0} ~ ${setusu - 1 + k * 10}歳`;
    return res === '0 ~ 0歳' ? '0歳' : res;
  });
  // console.log('setuo', setuArr);
  const daijyunArr = [];
  jyunArr.slice(0, 10).forEach((item, i) => {
    // console.log('i', i, 'item', item);
    // console.log('setu', setuArr[i]);
    // console.log('narr', item - 1);
    daijyunArr[item - 1] = setuArr[i];
  });
  // console.log('dai', daijyunArr);
  daijyunArr[10] = '-';
  daijyunArr[11] = '-';
  // console.log('dai', daijyunArr);
  // const tukiArr = genGetuArr();
  // console.log('tukiarr', tukiArr);
  // const newArr = tukiArr.map((i) => setuArr[i - 1]);
  // console.log('nn', newArr);
  return daijyunArr;
};

const genGetuRevArr = (num) => {
  // console.log(num)
  const arr = [];
  let count = num;
  for (let i = 1; i < 11; i += 1) {
    if (count > 1) {
      count -= 1;
    } else {
      count = 10;
    }
    // console.log(count);
    arr.push(count);
  }
  // console.log()
  // const adarr = Array.from({ length: 11 }, (v, k) => k + 2).reverse();
  // console.log(arr.concat(adarr));
  return arr;

  // console.log(arr, adarr);
};


export const OldgenDaijyunEtoArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const daijyunsu = genTukijyunsu({ seinen });
  console.log('大巡数:', daijyunsu);
  const arr = (inyo
    ? genTwelveArr(daijyunsu + 1)
    : genGetuRevArr(daijyunsu + 1));
  // console.log('arr', arr);
  const tuki = new Date(setuChecker(seinen)).getMonth() + 1;
  // console.log('ge', tuki);
  const tukiArr = genTwelveArr(tuki).map((m) => (inyo
    ? etoData[m]
    : etoData[13 - m]
  ));
  // console.log('tukiArr', arr);
  // console.log('etoarr', tukiArr);
  const resultArr = arr.map((m) => {
    // console.log(m, tukiArr[m]);
    return inyo ? tukiArr[m - 1] : tukiArr[m];
  });
  resultArr[10] = '-';
  resultArr[11] = '-';
  // console.log('resss', resultArr);
  return resultArr;
};


// const genYouArr = (num) => {
//   const ar = Array.from({ length: 10 }, (v, k) => k + 1);
//   const arr = ar.concat(ar);
//   const st = 11 - num;
//   const ed = 21 - num;
//   const res = arr.slice(st, ed);
//   return res;
// };
//
// const genNinArr = (num) => {
//   const ar = Array.from({ length: 10 }, (v, k) => k + 1);
//   const arr = ar.concat(ar).reverse();
//   return arr.slice(10 - num, 20 - num);
// };

// const genTwelveRevArr = (num) => {
//   const arr = [];
//   let count = num;
//   for (let i = 1; i < 13; i += 1) {
//     if (count > 1) {
//       count -= 1;
//     } else {
//       count = 12;
//     }
//     arr.push(count);
//   }
//   return arr;
// };

// export const genDaijyunEtoArr = ({ seinen, seibetu }) => {
//   const inyo = inyoChecker({ seinen, seibetu });
//   // console.log('dai', inyo);
//   const daijyunsu = genTukijyunsu({ seinen });
//   console.log('大巡開始巡数:', daijyunsu);
//   const arr = (inyo
//     ? genYouArr(daijyunsu)
//     : genNinArr(daijyunsu));
//
//   // console.log('arr', arr);
//   // console.log('inArr', genNinArr(daijyunsu));
//   // console.log('youArr', genYouArr(daijyunsu));
//   const tuki = new Date(setuChecker(seinen)).getMonth() + 1;
//   // console.log('tuki', tuki);
//   console.log('生月干支:', etoData[tuki]);
//   // console.log('tukiArr', genTwelveArr(tuki));
//   const tukiArr = (inyo
//     ? genTwelveArr(tuki)
//     : genTwelveRevArr(tuki + 1)
//   );
//   // console.log('tukiYou', genTwelveArr(tuki));
//   // console.log('tukiIn', genTwelveRevArr(tuki + 1));
//   // console.log('tuki', tukiArr);
//   const etoArr = tukiArr.map((m) => (etoData[m]));
//   // console.log('etoArr', etoArr);
//   const finArr = arr.map((i) => etoArr[i - 1]);
//   finArr[10] = '-';
//   finArr[11] = '-';
//   // console.log('fin', finArr);
//   // const etoArr = etoData.map(());
//   // const jyunArr = inyo ? genTenArr(daijyunsu) : genInArr(daijyunsu);
//   // const tuki = new Date(setuChecker(seinen)).getMonth() + 1;
//   // console.log('ge', tuki);
//   // const tukiArr = genTwelveArr(tuki).map((m) => (inyo
//   //   ? etoData[m]
//   //   : etoData[13 - m]
//   // ));
//   // console.log('tukiArr', arr);
//   // console.log('etoarr', tukiArr);
//   // const resultArr = arr.map((m) => {
//   //   // console.log(m, tukiArr[m]);
//   //   return inyo ? tukiArr[m - 1] : tukiArr[m];
//   // });
//   // resultArr[10] = '-';
//   // resultArr[11] = '-';
//   // console.log('resss', resultArr);
//   return finArr;
//
//   // const you = genGetuEtoArr();
//   // const inn = genGetuRevArr().map((m) => etoData[m]);
//   // return inyo ? you : inn;
// };


/*
  -------- kouten.Table.kaminashi  ----------
*/
const dateData = ({ seinen }) => {
  const date = new Date(seinen);
  return {
    year: date.getYear() + 1900,
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

const genMesu = ({ seinen }) => {
  // console.log('b', seinen);
  const { year, month, day } = dateData({ seinen });
  // console.log(year, month, day);
  const daijyunsu = himeguriData[year].month[month];
  // console.log('kihon', kihon);
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
  const meisu = genMesu({ seinen });
  console.log('命数：', meisu);
  const kaminashi = genKaminashi(meisu);
  const EtoArr = genEtoArr({ firstYear: genNenArr()[0] });
  const etoNashiArr = EtoArr.map((v) => (
    kaminashi.eto.indexOf(v) > -1 ? 'nen' : ' '
  ));
  return etoNashiArr;
};

export const genKaminashiTukiArr = ({ seinen }) => {
  const teikeimei = genMesu({ seinen });
  // console.log(teikeimei);
  let kaminashi = {};
  if (teikeimei <= 10) {
    kaminashi = kaminashiData[1];
  } else if (teikeimei <= 20) {
    kaminashi = kaminashiData[2];
  } else if (teikeimei <= 30) {
    kaminashi = kaminashiData[3];
  } else if (teikeimei <= 40) {
    kaminashi = kaminashiData[4];
  } else if (teikeimei <= 50) {
    kaminashi = kaminashiData[5];
  } else if (teikeimei <= 60) {
    kaminashi = kaminashiData[6];
  }
  // console.log(kaminashi.tuki);
  const tukiArr = genGetuArr();
  // console.log(tukiArr);
  const NashiArr = tukiArr.map((v) => (
    kaminashi.tuki.indexOf(v) > -1 ? 'tuki' : ' '
  ));
  // console.log(NashiArr);
  return NashiArr;
};

export const genkaminashiDaiArr = ({ seinen, seibetu }) => {
  const teikeimei = genMesu({ seinen });
  // console.log(teikeimei);
  let kaminashi = {};
  if (teikeimei <= 10) {
    kaminashi = kaminashiData[1];
  } else if (teikeimei <= 20) {
    kaminashi = kaminashiData[2];
  } else if (teikeimei <= 30) {
    kaminashi = kaminashiData[3];
  } else if (teikeimei <= 40) {
    kaminashi = kaminashiData[4];
  } else if (teikeimei <= 50) {
    kaminashi = kaminashiData[5];
  } else if (teikeimei <= 60) {
    kaminashi = kaminashiData[6];
  }

  const etoArr = genDaijyunEtoArr({ seinen, seibetu });
  const NashiArr = etoArr.map((v) => {
    // console.log(v, kaminashi.eto);
    const e = kaminashi.eto;
    return (
      v === e[0] || v === e[1] ? 'dai' : ' '
    );
  });
  // console.log('dai', NashiArr);
  return NashiArr;
};






/*
  -------- kouten.Table.goujyun  ----------
*/
const genNenjyunsu = ({ seinen }) => {
  const checkedDate = setuChecker(seinen);
  const y = checkedDate.slice(0, 4);
  return jyunsuData[Number(y) % 10].year;
};

export const genGoujyunArr = ({ seinen }) => {
  const teikeisu = genMesu({ seinen });
  const nenjyun = genNenjyunsu({ seinen });
  const tukijyun = genTukijyunsu({ seinen });
  const nichijyun = teikeisu % 10 ? teikeisu % 10 : 10;
  const nenJyunsuArr = genNenJyunsuArr();
  // console.log(nenjyun, tukijyun, nichijyun);
  // console.log(nenJyunsuArr);
  const gd = goujyunData;
  const checker = (i) => (
    !!(i === gd[nenjyun]
    || i === gd[tukijyun]
    || i === gd[nichijyun])
  );
  // ){
  //   const res = [];
  //   if (i === gd[nenjyun]
  //     || i === gd[tukijyun]
  //     || i === gd[nichijyun]) { res.push(true); }
  //   // if (!res.length) { res = ''; }
  //   // console.log('re', i, res);
  //   return res;
  // };
  // console.log('nenArr', nenJyunsuArr);
  const result = nenJyunsuArr.map((i) => checker(i));
  return result;
};





export const OldgenGoujyunArr = ({ seinen }) => {
  const teikeisu = genMesu({ seinen });
  const nenjyun = genNenjyunsu({ seinen });
  const tukijyun = genTukijyunsu({ seinen });
  const nichijyun = teikeisu % 10 ? teikeisu % 10 : 10;
  const nenJyunsuArr = genNenJyunsuArr();
  // console.log(nenjyun, tukijyun, nichijyun);
  // console.log(nenJyunsuArr);
  const gd = goujyunData;
  const checker = (i) => {
    const res = [];
    if (i === gd[nenjyun]) { res.push('nen'); }
    if (i === gd[tukijyun]) { res.push('tuki'); }
    if (i === gd[nichijyun]) { res.push('nichi'); }
    // if (!res.length) { res = ''; }
    // console.log('re', i, res);
    return res;
  };
  // console.log('nenArr', nenJyunsuArr);
  const result = nenJyunsuArr.map((i) => checker(i));
  // console.log('srear', result);
  return result;
};


/*
  -------- kouten.chart  ----------
*/
export const genKashinData = ({ teikeimei }) => {
  // console.log('kashindata', teikeimei);
  const kashinArr = genJyunkashinArr({ teikeimei });
  const dataArr = kashinArr.map((v) => (
    Number(v.ten.slice(0, 1))
  //   {
  //   colmn: i + 1,
  //   kashin: Number(v.ten.slice(0, 1)),
  // }
  ));
  // console.log(dataArr);
  return dataArr;
};

export const genNenData = ({ teikeimei }) => {
  const firstYear = { firstYear: genNenArr()[0] };
  const etoArr = genEtoArr(firstYear);
  // console.log('eto', etoArr);
  const data = unseiData[teikeimei];
  // console.log('data', data);
  return etoArr.map((k) => Number(data[k]));
};

export const genGetuData = ({ teikeimei }) => {
  const etoArr = genGetuEtoArr();
  const data = unseiData[teikeimei];
  return etoArr.map((k) => Number(data[k]));
};

export const genOmeguriData = ({ teikeimei, seinen, seibetu }) => {
  const etoArr = genDaijyunEtoArr({ seinen, seibetu });
  const data = unseiData[teikeimei];
  return etoArr.map((k) => Number(data[k]));
};

// const conDic = (arr, dic, index) => {
//   const ndic = dic;
//   arr.forEach((item, i) => {
//     ndic.colmn = i+1
//   });
//
//
// };

export const genUnseiData = ({ teikeimei, seinen, seibetu }) => {
  const kashinData = genKashinData({ teikeimei });
  const nenData = genNenData({ teikeimei });
  // const getuData = genTukiChart({ teikeimei });
  const aData = genChartA({ teikeimei });
  const bData = genChartB({ teikeimei });
  // console.log('getuA', aData);
  // console.log('getub', bData);
  // const getuData = genGetuData({ teikeimei });
  const omeguriData = genOmeguriData({ teikeimei, seinen, seibetu });
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
  // console.log('dr', dataArr);
  return dataArr;
};


/*
  -------- senten.extend.daijyunkashin  ----------
*/
export const genDaijyunKashin = ({ seinen, seibetu, teikeimei }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const date = new Date(setuChecker(seinen));
  console.log('dd', date);
  const year = date.getYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // console.log('month', month);
  // console.log('陰陽:', inyo ? '陽' : '陰');
  // console.log('tuki', tukijyunsu);
  const jyunsetu = inyo ? junsetuYou : junsetuIn;
  const setusu = Number(jyunsetu[month][day]);
  console.log('巡節年:', setusu);
  const toshi = new Date().getYear() - new Date(seinen).getYear();
  console.log('年齢', toshi);
  const daijyunArr = genDaijyunArr({ seinen, seibetu });
  // console.log('dai', daijyunArr);
  const resultObj = {
    title: '大巡華神',
    index: '',
    value: '',
  };

  // let index;
  // for (let i = 0; i < daijyunArr.length; i += 1) {
  //   const check = daijyunArr[i].slice(0, 2).replace('歳', '');
  //   console.log('check', check);
  //   if (check > toshi) {
  //     index = i;
  //     break;
  //   }
  // }
  const dai = Math.floor(toshi / 10) * 10;
  const keta = toshi < 10 ? 0 : toshi % 10;
  // console.log('ka', keta);
  // console.log('ten', dai);

  const jyu = dai;
  const ichi = keta;
  let ans;
  if (toshi === 0) {
    ans = '0歳';
  } else if (toshi <= setusu) {
    ans = `0 ~ ${setusu}歳`;
  } else if (keta <= setusu) {
    ans = `${dai - 10 + setusu}歳 ~ ${dai + setusu - 1}歳`;
  } else {
    ans = `${dai + setusu}歳 ~ ${dai + setusu + 9}歳`;
  }
  // const ans = '';
  const result = toshi === 0 ? '0歳' : ans;
  // console.log(result);

  let birthIndex;
  if (toshi === 0) {
    birthIndex = 0;
  } else if (keta < setusu) {
    birthIndex = (dai / 10);
    // console.log('maru', birthIndex);
  } else {
    birthIndex = (dai / 10) + 1;
  }
  // console.log('birthIndex', birthIndex);
  const tuki = genTukijyunsu({ seinen });
  let index;
  if (inyo) {
    index = tuki - 1 + birthIndex;
    // console.log('bi', birthIndex, tuki);
    if (index >= 10) { index %= 10; }
  } else {
    // console.log('nega', tuki - birthIndex - 1);
    index = tuki > birthIndex
      ? tuki - birthIndex - 1
      : 12 + (tuki - birthIndex - 1);
  }

  // if (index >= 10) { index %= 10; }
  // console.log('index', index);
  // console.log('teikei', teikeimei);
  const kashinArr = genJyunkashinArr({ teikeimei });

  resultObj.index = daijyunArr[index];
  resultObj.value = kashinArr[index].kashin;
  // console.log('result', resultObj);
  return resultObj;
};


/*
  -------- senten.extend.nenjyunkashin  ----------
*/
export const genNenjyunKashin = ({ teikeimei }) => {
  const kashinArr = genJyunkashinArr({ teikeimei });
  const date = setuChecker(new Date());
  // console.log(date);
  return {
    title: '年巡華神',
    index: `${new Date(date).getYear() + 1900}年`,
    value: kashinArr[6].kashin,
  };
};


/*
  -------- senten.extend.tukijyunkashin  ----------
*/
export const genTukijyunKashin = ({ teikeimei }) => {
  const kashinArr = genJyunkashinArr({ teikeimei });
  const date = setuChecker(new Date());
  // console.log(date);
  return {
    title: '月巡華神',
    index: `${new Date(date).getMonth() + 1}月`,
    value: kashinArr[genJyunsu().month].kashin,
  };
};


/*
  -------- senten.extend.kanna  ----------
*/
export const genKana = ({ seinen }) => {
  const kaminashi = genKaminashi(genMesu({ seinen }));
  // console.log('kaminashi', kaminashi);
  return {
    title: '神無節',
    tuki: `毎年 ${kaminashi.tuki[0]} , ${kaminashi.tuki[1]}月`,
    eto: `干支 ${kaminashi.eto[0]} , ${kaminashi.eto[1]}`,
  };
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
  // console.log('jyunsuArr', jyunsuArr);
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


// const genInArr = (num) => {
//   const arr = [num];
//   let counter = num;
//   const intArr = Array.from({ length: 9 }, (v, k) => k + 1);
//   // console.log('int', intArr);
//   intArr.forEach(() => {
//     if (counter <= 1) {
//       counter = 10;
//     } else {
//       counter -= 1;
//     }
//     arr.push(counter);
//   });
//   console.log(arr);
//   return arr;
// };


export const nenjyun = () => {
  console.log('tukijyun', jyunData);

};


// genYouArr(10);
// genInArr(5);
