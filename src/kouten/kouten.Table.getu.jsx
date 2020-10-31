import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genGetuArr, genGetuEtoArr } from '../worker';


const Getu = () => {
  const monthArr = genGetuArr();
  const monthEto = genGetuEtoArr();
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
