import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import SentenHeader from './sentenHeader';
import SentenInput from './sentenInput';
import SentenTable from './sentenTable';
import SentenJintai from './sentenJintai';


const useStyles = makeStyles({
  wrapper: {
    maxWidth: '840px',
    margin: '0 auto',
    padding: '10px',
  },
  imput: {
    margin: '12px 0',
  },
  cap: {
    margin: '17px 0 0 0',
    '& h4': {
      marginBottom: '5px',
    },
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
      <Grid className={classes.cap} item xs={12}>
        <h4>診断結果</h4>
      </Grid>
      <Grid className={classes.table} item xs={12} sm={6}>
        <SentenTable />
      </Grid>
      <Grid className={classes.jintai} item xs={12} sm={4}>
        <SentenJintai />
      </Grid>
      <Grid>
        <Button variant="contained" color="primary" href="">
          Link
        </Button>
      </Grid>
    </Grid>
  );
};

export default SentenVisitor;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <Dialog />
// </MuiPickersUtilsProvider>
