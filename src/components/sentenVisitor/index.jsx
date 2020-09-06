import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SentenHeader from './sentenHeader';
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

  jintai: {
    minWidth: '400px',
    margin: '12px 0',
  },
});

const SentenVisitor = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.wrapper} container justify="center">
      <Grid className={classes.imput} item xs={12}>
        <SentenHeader />
      </Grid>
      <Grid className={classes.imput} item xs={12}>
        <SentenInput />
      </Grid>
      <Grid className={classes.table} item centor xs={12} sm={6}>
        <SentenTable />
      </Grid>
      <Grid className={classes.jintai} item xs={12} sm={4}>
        <SentenJintai />
      </Grid>
    </Grid>
  );
};

export default SentenVisitor;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <Dialog />
// </MuiPickersUtilsProvider>
