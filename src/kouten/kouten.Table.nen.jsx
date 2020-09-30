import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genNenArr, genEtoArr } from './kouten.worker';


const useStyles = makeStyles({

});


const Nen = () => {
  const yearArr = genNenArr();
  const firstYear = { firstYear: yearArr[0] };
  return (
    <>
      <TableRow>
        <TableCell>該当年</TableCell>
        <Cells index="nen" arr={yearArr} />
      </TableRow>
      <TableRow>
        <TableCell>年干支</TableCell>
        <Cells index="neneto" arr={genEtoArr(firstYear)} />
      </TableRow>
    </>
  );
};


export default Nen;
