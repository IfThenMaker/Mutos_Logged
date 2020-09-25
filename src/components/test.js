const te = '1/18-2/4'

const ind = te.indexOf('-')

console.log('te', te.slice(ind+1, ind + 3))

const yea = '1800-01-01';

const date = new Date(yea);
console.log(date);

const dateValidate = (dateStr) => {
  const stDate = new Date('1912');
  const endDate = new Date('2040');
  const chDate = new Date(dateStr);
  console.log(stDate, endDate);
  console.log(chDate < stDate);
  if (chDate < stDate) {
    window.alart('less');
  } else if (chDate > endDate) {
    window.alart('over');
  } else {
    return true;
  }
  return false;
  // switch (chDate - stDate) {
  //   case chDate < stDate:
  //     window.alart('miss');
  //     console.log('miss');
  //     break;
  //   case chDate > endDate:
  //     window.alart('over');
  //     console.log('over');
  //     break;
  //   default:
  //     return true;
  // }
};

console.log(dateValidate(yea));
