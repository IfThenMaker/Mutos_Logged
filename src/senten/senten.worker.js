import data from './datas/himeguri';
import jinColorData from './datas/jinColor';
import syugoColorData from './datas/syugoColor';
import bodyColorData from './datas/bodyColor';
import syugoIndex from './datas/syugoIndex';
import syugokashinData from './datas/syugokashinData';


const dateData = ({ seinen }) => {
  const mo = seinen.slice(5, 7);
  // console.log('nmi', mo.slice(0, 1));
  return {
    year: seinen.slice(0, 4),
    month: mo.slice(1, 2) === '0' ? mo : mo.replace('0', ''),
    day: seinen.slice(8, 10),
  };
};

export const teikeimeiCalc = ({ seinen }) => {
  // console.log('b', birthday);
  const { year, month, day } = dateData({ seinen });
  // console.log('date', year, month, day);
  const kihon = data[year].month[month];
  // console.log('kihon', kihon);
  const mesu = (() => {
    let kari = Number(kihon) + Number(day) - 8;
    if (kari > 60) {
      kari -= 60;
    }
    return kari;
  })();
  console.log('命数:', mesu);
  const himeguri = mesu % 10;
  console.log('生年日巡数:', himeguri);
  return jinColorData[himeguri];
};

export const syugokashinCalc = ({ seinen, teikeimeiNum }) => {
  const { year, month, day } = dateData({ seinen });
  // console.log(syugokashinData);
  const ydata = syugokashinData[year];
  // console.log(ydata);
  const date = `${`00${month}`.slice(-2)}/${`00${day}`.slice(-2)}`;
  // console.log('ydata', ydata);
  const kashinsu = ydata[date];
  // console.log('kashinsu', kashinsu);
  // console.log('teikeiNum', teikeimeiNum);
  const kashin = syugoIndex[kashinsu][teikeimeiNum].syugoNum;
  // console.log('kashinRow', kashin, syugoColorData[kashin]);
  return syugoColorData[kashin];
};

export const bodykashinCalc = ({ seinen }) => {
  const { year, month, day } = dateData({ seinen });
  const strSum = (word) => {
    const arr = word.split('');
    let sum = 0;
    arr.forEach((item) => {
      sum += Number(item);
    });
    return sum;
  };
  let f = strSum(year) + strSum(month) + strSum(day);
  if (f >= 10) {
    f = Math.floor(f / 10) + (f % 10);
  }
  if (f >= 10) {
    f = Math.floor(f / 10) + (f % 10);
  }
  return bodyColorData[f];
};
