import data from './base_data';
import teikeimeiData from './teikeimei';
// console.log('data', data);

const testData = {
  birthday: '1932-03-03',
};

const dateData = ({ birthday }) => ({
  year: birthday.slice(0, 4),
  month: birthday.slice(5, 7).replace('0', ''),
  day: birthday.slice(8, 10),
});

export const teikeimei = ({ birthday }) => {
  console.log('b', birthday);
  const year = birthday.slice(0, 4);
  const month = birthday.slice(5, 7).replace('0', '');
  const day = birthday.slice(8, 10);
  console.log('y', day);
  const kihon = data[year].month[month];
  console.log('kihon', kihon);
  const mesu = (() => {
    let kari = Number(kihon) + Number(day) - 8;
    if (kari > 60) {
      kari -= 60;
    }
    return kari;
  })();
  console.log('mesu', mesu);
  const himeguri = mesu % 10;
  console.log('himegu', himeguri);
  return teikeimeiData[himeguri];
};

const syugokashin = ({ birthday }) => {
  const { year, month, day } = dateData({ birthday });
  const dateArr = data[year].date;
  // const arr = Object.keys(dateArr).filter(
  //   (k) => k.slice(0, 2) || k.slice(
  //     k.indexOf('-') + 1, k.indexOf('-') + 3,
  //   ) === `${month}/`,
  // );
  const arr = Object.keys(dateArr).filter(
    (k) => k.slice(0, 2) === `${month}/`,
  );
  const arr2 = Object.keys(dateArr).filter(
    (k) => k.slice(
      k.indexOf('-') + 1, k.indexOf('-') + 3,
    ) === `${month}/`,
  );
  console.log('arr', arr);
  console.log('dateArr', dateArr);
};

export const bodykashin = ({ birthday }) => {
  const { year, month, day } = dateData({ birthday });
  const strSum = (word) => {
    const arr = word.split('');
    let sum = 0;
    arr.forEach((item) => {
      sum += Number(item);
    });
    return sum;
  };
  let f = strSum(year) + strSum(month) + strSum(day);
  // console.log('f', f);
  if (f >= 10) {
    f = Math.floor(f / 10) + (f % 10);
  }
  if (f >= 10) {
    f = Math.floor(f / 10) + (f % 10);
  }
  // console.log('f', f);
  return f;
};

teikeimei(testData);
// syugokashin(testData);
bodykashin(testData);


//
