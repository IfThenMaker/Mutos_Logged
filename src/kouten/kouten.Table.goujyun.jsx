import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Favorite from '@material-ui/icons/Favorite';

import Cells from './kouten.Table.cells';
import { genGoujyunArr } from './kouten.worker';
import MutosContext from '../context';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
  gou: {
    fill: 'pink',
  },
  nen: {
    fill: 'red',
  },
  tuki: {
    fill: 'green',
  },
  nichi: {
    fill: 'blue',
  },
});


const Kaminashi = () => {
  const { seinen } = useContext(MutosContext);
  const classes = useStyles();
  const gouArr = genGoujyunArr({ seinen }).map((v) => (v
    ? <Favorite key={nanoid()} className={classes.gou} /> : ''
  ));

  return (
    <TableRow>
      <TableCell>合巡</TableCell>
      <Cells index="nashinen" arr={gouArr} />
    </TableRow>
  );
};


export default Kaminashi;
