import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genNenArr, genEtoArr, genNenJyunsuArr } from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
});


const Nen = () => {
  const classes = useStyles();
  const yearArr = genNenArr();
  const eto = genEtoArr({ firstYear: yearArr[0] });
  const nenJyunsuArr = genNenJyunsuArr();
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
      <TableRow className={classes.keisen}>
        <TableCell>年巡数</TableCell>
        <Cells index="nenjyun" arr={nenJyunsuArr} />
      </TableRow>
    </>
  );
};


export default Nen;
