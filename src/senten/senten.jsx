import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SentenTable from './senten.table';
import SentenJintai from './senten.jintai';
import SentenExtend from './senten.extend';
import {
  teikeimeiCalc, syugokashinCalc, bodykashinCalc,
} from './senten.worker';


const useStyles = makeStyles({
  cap: {
    margin: '20px 0 0 0',
    '& h4': {
      marginBottom: '5px',
    },
  },
  jintai: {
    minWidth: '320px',
  },
});


const Senten = ({ seinen, seibetu }) => {
  console.log('～～～　先天計算スタート　～～～');
  const classes = useStyles();
  const {
    teikeimei, teikeimeiNum, jinColor,
  } = teikeimeiCalc({ seinen });
  const { syugokashin, syugoColor } = syugokashinCalc({
    seinen,
    teikeimeiNum,
  });
  const { bodykashin, bodyColor } = bodykashinCalc({ seinen });


  return (
    <Grid
      container
      justify="center"
      spacing={3}
    >
      <Grid className={classes.cap} item xs={12}>
        <h4>診断結果</h4>
      </Grid>
      <Grid className={classes.table} item xs={12} sm={6}>
        <SentenTable
          syugokashin={syugokashin}
          bodykashin={bodykashin}
        />
      </Grid>
      <Grid className={classes.jintai} item xs={12} sm={4}>
        <h4>イメージカラー</h4>
        <SentenJintai jinColor={jinColor} syugoColor={syugoColor} bodyColor={bodyColor} />
      </Grid>
      <Grid className={classes.jintai} item xs={12}>
        <SentenExtend teikeimei={teikeimei} seinen={seinen} seibetu={seibetu} />
      </Grid>
    </Grid>
  );
};
Senten.defaultProps = {
  seinen: '1950-01-01',
  seibetu: 'male',
};
Senten.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
};

export default Senten;
