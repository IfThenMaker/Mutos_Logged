import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import KoutenTable from './kouten.Table';
import KoutenChart from './kouten.chart';


const useStyles = makeStyles({
  chart: {
    marginTop: '30px',
    overflow: 'auto',
  },
});

const Kouten = () => {
  console.log('～～～　後天計算スタート　～～～');
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <KoutenTable />
      </Grid>
      <Grid
        className={classes.chart}
        item
        xs={12}
      >
        <KoutenChart />
      </Grid>
    </Grid>
  );
};


export default Kouten;
