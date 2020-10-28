import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genNenJyunsuArr } from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
});


const Jyunsu = () => {
  const classes = useStyles();
  const nenJyunsuArr = genNenJyunsuArr();

  return (
    <TableRow className={classes.keisen}>
      <TableCell>巡数</TableCell>
      <Cells index="nen" arr={nenJyunsuArr} />
    </TableRow>
  );
};


export default Jyunsu;
