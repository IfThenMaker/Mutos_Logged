import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import Jyunsu from './kouten.Table.jyunsu';
import Year from './kouten.Table.nen';
import Month from './kouten.Table.getu';
import Kashin from './kouten.Table.kashin';
import Omeguri from './kouten.Table.omeguri';
import Kaminashi from './kouten.Table.kaminashi';
import Goujyun from './kouten.Table.goujyun';


const useStyles = makeStyles({
  table: {
    '& td': {
      minWidth: '65px',
    },
  },
});


const KoutenTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table size="small">
        <TableBody>
          <Jyunsu />
          <Kashin />
          <Year />
          <Month />
          <Omeguri />
          <Kaminashi />
          <Goujyun />
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default KoutenTable;
