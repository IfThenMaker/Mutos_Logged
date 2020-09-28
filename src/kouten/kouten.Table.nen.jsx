import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genYearArr, genYearEtoArr } from './kouten.worker';


const useStyles = makeStyles({

});


const KoutenTable = ({ index, arr }) => (
  <TableRow>
    <TableCell>{index}</TableCell>
    {arr.map((value) => (
      <TableCell key={`${index}${value}`}>{value}</TableCell>
    ))}
  </TableRow>
);
KoutenTable.defaultProps = {
  index: 'test',
  arr: genYearArr(),
};
KoutenTable.propTypes = {
  index: PropTypes.string,
  arr: PropTypes.array,
};

const Nen = () => {
  const yearArr = genYearArr();
  const firstYear = { firstYear: yearArr[0] };
  return (
    <>
      <TableRow>
        <TableCell>該当年</TableCell>
        <Cells index="nen" arr={yearArr} />
      </TableRow>
      <TableRow>
        <TableCell>年干支</TableCell>
        <Cells index="neneto" arr={genYearEtoArr(firstYear)} />
      </TableRow>
    </>
  );
};


export default Nen;
