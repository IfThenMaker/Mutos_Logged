import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Favorite from '@material-ui/icons/Favorite';

import Cells from './kouten.Table.cells';
import {
  genKaminashiNeniArr,
  genKaminashiTukiArr,
} from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
  nen: {
    fill: 'gray',
  },
  tuki: {
    fill: 'green',
  },
  nichi: {
    fill: 'blue',
  },
});


const zip = (arr, Arr) => {
  const nArr = [];
  arr.forEach((item, i) => {
    const inArr = [];
    if (item) { inArr.push(item); }
    if (Arr[i]) { inArr.push(Arr[i]); }
    nArr.push(inArr);
  });
  return nArr;
};

const Kaminashi = ({ seinen }) => {
  const classes = useStyles();
  const ToP = (i) => {
    if (i === 'nen') { return <Favorite key="a1" className={classes.nen} />; }
    if (i === 'tuki') { return <Favorite key="a2" className={classes.tuki} />; }
    return '';
  };
  const InCell = (v) => {
    if (v) { return ToP(v); }
    return ' ';
  };
  const kaminashiNen = genKaminashiNeniArr({ seinen }).map((v) => InCell(v));
  const kaminashiTuki = genKaminashiTukiArr({ seinen }).map((v) => InCell(v));
  const kaminashi = zip(kaminashiNen, kaminashiTuki);
  console.log('kaminashi', kaminashi);

  return (
    <TableRow>
      <TableCell>神無節</TableCell>
      <Cells index="nashituki" arr={kaminashi} />
    </TableRow>
  );
};
Kaminashi.defaultProps = {
  seinen: '1940-01-01',
};
Kaminashi.propTypes = {
  seinen: PropTypes.string,
};

//
export default Kaminashi;
