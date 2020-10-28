import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genNenArr, genEtoArr } from '../worker';


const Nen = () => {
  const yearArr = genNenArr();
  const eto = genEtoArr({ firstYear: yearArr[0] });

  return (
    <>
      <TableRow>
        <TableCell>該当年</TableCell>
        <Cells index="nen" arr={yearArr} />
      </TableRow>
      <TableRow>
        <TableCell>年干支</TableCell>
        <Cells index="neneto" arr={eto} />
      </TableRow>
    </>
  );
};


export default Nen;
