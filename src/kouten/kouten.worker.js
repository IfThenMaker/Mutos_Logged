import etoData from '../datas/eto';
import jyunkashinData from '../datas/jyunkashin';
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

//   return todays jyunsu object {year: , month: ,}
//   genGetuArr genJyunkashinArr inyoChecker
const genJyunsu = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  const dateStr = `${year}-${date.getMonth() + 1}-${date.getDate()}`;
  const checedYear = Number(setuChecker(dateStr).slice(0, 4));
  return jyunsuData[checedYear % 10];
};


/*
  -------- kouten.Table.kashin  ----------
*/
export const genJyunkashinArr = ({ teikeimei }) => {
  const jyunsu = genJyunsu().year;
  //   create kashinsu array
  const kashinsuArr = genTenArr(jyunsu);
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
  const tukiSt = genTenRowArr(genJyunsu().month).indexOf(1) + 1;
  return genTwelveArr(tukiSt);
};

export const genGetuEtoArr = () => genGetuArr().map(
  (m) => etoData[m],
);

export const genGetuJyunsuArr = () => (
  genTenArr(genJyunsu().month)
);


/*
  -------- kouten.Table.daijyun  ----------
*/
const genInArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 9 }, (v, k) => k + 1);
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

export const genDaijyunArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const date = new Date(seinen);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const jyunsetu = inyo ? junsetuYou : junsetuIn;
  const setusu = Number(jyunsetu[month][day]);
  console.log('巡節年:', setusu);
  const daijyunsu = genTukijyunsu({ seinen });
  console.log('生月巡数:', daijyunsu);
  const jyunArr = inyo ? genTenArr(daijyunsu) : genInArr(daijyunsu);
  const setuArr = Array.from({ length: 10 }, (v, k) => {
    const res = `${setusu + (k - 1) * 10 > 0
      ? setusu + (k - 1) * 10 : 0} ~ ${setusu - 1 + k * 10}歳`;
    return res === '0 ~ 0歳' ? '0歳' : res;
  });
  const daijyunArr = [];
  jyunArr.slice(0, 10).forEach((item, i) => {
    daijyunArr[item - 1] = setuArr[i];
  });
  daijyunArr[10] = '-';
  daijyunArr[11] = '-';
  return daijyunArr;
};

const genGetuRevArr = (num) => {
  const arr = [];
  let count = num;
  for (let i = 1; i < 11; i += 1) {
    if (count > 1) {
      count -= 1;
    } else {
      count = 10;
    }
    arr.push(count);
  }
  return arr;
};


export const OldgenDaijyunEtoArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const daijyunsu = genTukijyunsu({ seinen });
  console.log('大巡数:', daijyunsu);
  const arr = (inyo
    ? genTwelveArr(daijyunsu + 1)
    : genGetuRevArr(daijyunsu + 1));
  const tuki = new Date(setuChecker(seinen)).getMonth() + 1;
  const tukiArr = genTwelveArr(tuki).map((m) => (inyo
    ? etoData[m]
    : etoData[13 - m]
  ));
  const resultArr = arr.map((m) => (
    inyo ? tukiArr[m - 1] : tukiArr[m]
  ));
  resultArr[10] = '-';
  resultArr[11] = '-';
  return resultArr;
};


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
  if (etoNashiArr[10] === 'nen') { etoNashiArr[0] = 'nen'; }
  if (etoNashiArr[11] === 'nen') { etoNashiArr[1] = 'nen'; }
  return etoNashiArr;
};


export const genkaminashiDaiArr = ({ seinen, seibetu }) => {
  const teikeimei = genMesu({ seinen });
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
    const e = kaminashi.eto;
    const isEto = (eto) => (
      eto === e[0] || eto === e[1] ? 'dai' : ' '
    );
    let result;
    if (v.length > 2) {
      const eto1 = isEto(v.slice(0, 1));
      const eto2 = isEto(v.slice(-1, v.length));
      result = eto1 === 'dai' || eto2 === 'dai'
        ? 'dai' : ' ';
    } else {
      result = isEto(v);
    }
    return result;
  });
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
  const gd = goujyunData;
  const checker = (i) => (
    !!(i === gd[nenjyun]
    || i === gd[tukijyun]
    || i === gd[nichijyun])
  );
  const result = nenJyunsuArr.map((i) => checker(i));
  return result;
};


export const OldgenGoujyunArr = ({ seinen }) => {
  const teikeisu = genMesu({ seinen });
  const nenjyun = genNenjyunsu({ seinen });
  const tukijyun = genTukijyunsu({ seinen });
  const nichijyun = teikeisu % 10 ? teikeisu % 10 : 10;
  const nenJyunsuArr = genNenJyunsuArr();
  const gd = goujyunData;
  const checker = (i) => {
    const res = [];
    if (i === gd[nenjyun]) { res.push('nen'); }
    if (i === gd[tukijyun]) { res.push('tuki'); }
    if (i === gd[nichijyun]) { res.push('nichi'); }
    return res;
  };
  const result = nenJyunsuArr.map((i) => checker(i));
  return result;
};


// /*
//   -------- kouten.chart  ----------
// */
// export const genKashinData = ({ teikeimei }) => {
//   const kashinArr = genJyunkashinArr({ teikeimei });
//   const dataArr = kashinArr.map((v) => (
//     Number(v.ten.slice(0, 1))
//   ));
//   return dataArr;
// };
//
// export const genNenData = ({ teikeimei }) => {
//   const firstYear = { firstYear: genNenArr()[0] };
//   const etoArr = genEtoArr(firstYear);
//   const data = unseiData[teikeimei];
//   return etoArr.map((k) => Number(data[k]));
// };
//
// export const genGetuData = ({ teikeimei }) => {
//   const etoArr = genGetuEtoArr();
//   const data = unseiData[teikeimei];
//   return etoArr.map((k) => Number(data[k]));
// };
//
// export const genOmeguriData = ({ teikeimei, seinen, seibetu }) => {
//   const etoArr = genDaijyunEtoArr({ seinen, seibetu });
//   const data = unseiData[teikeimei];
//   return etoArr.map((k) => Number(data[k]));
// };
//
// export const genUnseiData = ({ teikeimei, seinen, seibetu }) => {
//   const kashinData = genKashinData({ teikeimei });
//   const nenData = genNenData({ teikeimei });
//   const aData = genChartA({ teikeimei });
//   const bData = genChartB({ teikeimei });
//   const omeguriData = genOmeguriData({ teikeimei, seinen, seibetu });
//   const dataArr = Array.from({ length: 12 }, (v, k) => (
//     { colmn: k < 10 ? k + 1 : String(k - 9) }
//   ));
//   kashinData.forEach((item, i) => {
//     dataArr[i].kashin = item;
//   });
//   nenData.forEach((item, i) => {
//     dataArr[i].nen = item;
//   });
//   aData.forEach((item, i) => {
//     dataArr[i].getu = item;
//   });
//   aData.forEach((item, i) => {
//     dataArr[i].getuA = item;
//   });
//   bData.forEach((item, i) => {
//     dataArr[i].getuB = item;
//   });
//   omeguriData.forEach((item, i) => {
//     dataArr[i].omeguri = item;
//   });
//   return dataArr;
// };


/*
  -------- senten.extend.daijyunkashin  ----------
*/
export const genDaijyunKashin = ({ seinen, seibetu, teikeimei }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const date = new Date(setuChecker(seinen));
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const jyunsetu = inyo ? junsetuYou : junsetuIn;
  const setusu = Number(jyunsetu[month][day]);
  const toshi = new Date().getYear() - new Date(seinen).getYear();
  console.log('年齢', toshi);
  const daijyunArr = genDaijyunArr({ seinen, seibetu });
  const resultObj = {
    title: '大巡華神',
    index: '',
    value: '',
  };

  const dai = Math.floor(toshi / 10) * 10;
  const keta = toshi < 10 ? 0 : toshi % 10;
  let birthIndex;
  if (toshi === 0) {
    birthIndex = 0;
  } else if (keta < setusu) {
    birthIndex = (dai / 10);
  } else {
    birthIndex = (dai / 10) + 1;
  }
  const tuki = genTukijyunsu({ seinen });
  let index;
  if (inyo) {
    index = tuki - 1 + birthIndex;
    if (index >= 10) { index %= 10; }
  } else {
    index = tuki > birthIndex
      ? tuki - birthIndex - 1
      : 10 + (tuki - birthIndex - 1);
  }
  const kashinArr = genJyunkashinArr({ teikeimei });
  resultObj.index = daijyunArr[index];
  resultObj.value = kashinArr[index].kashin;
  return resultObj;
};


/*
  -------- senten.extend.nenjyunkashin  ----------
*/
export const genNenjyunKashin = ({ teikeimei }) => {
  const kashinArr = genJyunkashinArr({ teikeimei });
  const date = setuChecker(new Date());
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
  return {
    title: '神無節',
    tuki: `毎年 ${kaminashi.tuki[0]} , ${kaminashi.tuki[1]}月`,
    eto: `干支 ${kaminashi.eto[0]} , ${kaminashi.eto[1]}`,
  };
};

export const genJyunsuArr = () => genTenArr(genJyunsu().year);
