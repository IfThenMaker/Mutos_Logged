import etoData from './datas/eto';


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
  -------- kouten.Table.kashin  ----------
*/
