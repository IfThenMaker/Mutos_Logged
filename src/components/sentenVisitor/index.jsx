import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SentenInput from './sentenInput';
import SentenTable from './sentenTable';
import SentenJintai from './sentenJintai';


const useStyles = makeStyles({
  wrapper: {
    padding: '10px',
  },
  imput: {
    margin: '12px 0',
  },
  table: {
    margin: '12px 0',
  },
  space: {
    margin: '12px 0',
  },
});

const SentenVisitor = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.wrapper} container>
      <Grid className={classes.imput} item xs={12}>
        <SentenInput />
      </Grid>
      <Grid className={classes.table} item xs={12} sm={7}>
        <SentenTable />
      </Grid>
      <Grid className={classes.jintai} item xs={12} sm={3}>
        <SentenJintai />
      </Grid>
    </Grid>
  );
};

export default SentenVisitor;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <Dialog />
// </MuiPickersUtilsProvider>
