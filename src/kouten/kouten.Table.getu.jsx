import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { genYearArr } from './kouten.worker';
import eto from './datas/eto';

const useStyles = makeStyles({

});


const Cells = ({ index, arr }) => (
  arr.map((value) => (
    <TableCell key={`${index}${value}`}>{value}</TableCell>
  ))
);
Cells.defaultProps = {
  index: 'test',
  arr: genYearArr(),
};
Cells.propTypes = {
  index: PropTypes.string,
  arr: PropTypes.array,
};

const Getu = () => {
  const monthArr = [...Array(13).keys()].slice(1);
  const monthEto = monthArr.map((m) => eto[m]);
  return (
    <>
      <TableRow>
        <TableCell>該当月</TableCell>
        <Cells index="tuki" arr={monthArr} />
      </TableRow>
      <TableRow>
        <TableCell>月干支</TableCell>
        <Cells index="tukieto" arr={monthEto} />
      </TableRow>
    </>
  );
};


export default Getu;
