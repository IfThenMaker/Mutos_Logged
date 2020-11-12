import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Favorite from '@material-ui/icons/Brightness4';

import Cells from './kouten.Table.cells';
import {
  genKaminashiNeniArr,
  genkaminashiDaiArr,
} from './kouten.worker';
import { genKaminashiGetuArr } from '../worker/worker';
import MutosContext from '../context';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
  nen: {
    fill: 'red',
  },
  tuki: {
    fill: 'green',
  },
  dai: {
    fill: 'blue',
  },
});


const zip = (arr, Arr, sArr) => {
  const nArr = [];
  arr.forEach((item, i) => {
    const inArr = [];
    if (item) { inArr.push(item); }
    if (Arr[i]) { inArr.push(Arr[i]); }
    if (sArr[i]) { inArr.push(sArr[i]); }
    nArr.push(inArr);
  });
  return nArr;
};

const Kaminashi = () => {
  const classes = useStyles();
  const { seinen, seibetu } = useContext(MutosContext);
  const ToP = (i) => {
    if (i === 'nen') { return <Favorite key="a1" className={classes.nen} />; }
    if (i === 'tuki') { return <Favorite key="a2" className={classes.tuki} />; }
    if (i === 'dai') { return <Favorite key="a3" className={classes.dai} />; }
    return '';
  };
  const InCell = (v) => {
    if (v) { return ToP(v); }
    return ' ';
  };
  const kaminashiNen = genKaminashiNeniArr({ seinen }).map((v) => InCell(v));
  const kaminashiTuki = genKaminashiGetuArr({ seinen }).map((v) => InCell(v));
  const kaminashiDai = genkaminashiDaiArr({ seinen, seibetu }).map((v) => InCell(v));
  const kaminashi = zip(kaminashiNen, kaminashiTuki, kaminashiDai);
  // if ()
  // console.log('n', genKaminashiNeniArr({ seinen }));
  // console.log('nen', kaminashiNen);

  return (
    <TableRow>
      <TableCell>神無節</TableCell>
      <Cells index="nashituki" arr={kaminashi} />
    </TableRow>
  );
};


export default Kaminashi;
