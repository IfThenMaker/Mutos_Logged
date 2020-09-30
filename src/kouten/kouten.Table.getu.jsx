import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import {
  genGetuArr, genGetuEtoArr, genGetuJyunsuArr,
} from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
});

const Getu = () => {
  const classes = useStyles();
  const monthArr = genGetuArr();
  const monthEto = genGetuEtoArr();
  const monthJyunArr = genGetuJyunsuArr();
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
      <TableRow className={classes.keisen}>
        <TableCell>月巡数</TableCell>
        <Cells index="tukijyun" arr={monthJyunArr} />
      </TableRow>
    </>
  );
};
// Getu.defaultProps = {
//   teikeimei: '厳山命',
//   inyou: true,
// };
// Getu.propTypes = {
//   teikeimei: PropTypes.string,
//   inyou: PropTypes.bool,
// };

export default Getu;
