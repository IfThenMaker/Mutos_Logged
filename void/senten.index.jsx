import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import SentenHeader from './senten.header';
import SentenInput from '../input/input';
import SentenTable from './senten.table';
import SentenJintai from './senten.jintai';
import {
  teikeimeiCalc, syugokashinCalc, bodykashinCalc,
} from './senten.worker';


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
    margin: '20px 0 0 0',
    '& h4': {
      marginBottom: '5px',
    },
  },
  table: {
    margin: '12px 0',
  },
  jintai: {
    minWidth: '320px',
    margin: '12px 0',
  },
  link: {
    backgroundColor: '#ffaa56',
    margin: '30px auto',
  },
});


const Senten = ({ birthDate, cosName, dialog }) => {
  const classes = useStyles();
  // console.log('vis', birthDate);
  const {
    teikeimei, teikeimeiNum, jinColor,
  } = teikeimeiCalc({ birthday: birthDate });
  // console.log('tk', teikeimei, jinColor, teikeimeiNum);
  const { syugokashin, syugoColor } = syugokashinCalc({
    birthday: birthDate,
    teikeimeiNum,
  });
  // console.log('syu', syugokashin, syugoColor);
  const { bodykashin, bodyColor } = bodykashinCalc({ birthday: birthDate });
  // console.log('tk', teikeimei, jinColor);
  // console.log(bodykashinCalc({ birthday: birthDate }));

  return (
    <Grid
      className={classes.wrapper}
      container
      justify="center"
      spacing={3}
    >
      <Grid className={classes.imput} item xs={12}>
        <SentenHeader />
      </Grid>
      <Grid className={classes.imput} item xs={12}>
        <SentenInput birthDate={birthDate} cosName={cosName} dialog={dialog} />
      </Grid>
      <Grid className={classes.cap} item xs={12}>
        <h4>診断結果</h4>
      </Grid>
      <Grid className={classes.table} item xs={12} sm={6}>
        <SentenTable teikeimei={teikeimei} syugokashin={syugokashin} bodykashin={bodykashin} />
      </Grid>
      <Grid className={classes.jintai} item xs={12} sm={4}>
        <h4>イメージカラー</h4>
        <SentenJintai jinColor={jinColor} syugoColor={syugoColor} bodyColor={bodyColor} />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Button
          className={classes.link}
          size="large"
          variant="contained"
          color="primary"
          href=""
        >
          詳しく知りたい
        </Button>
      </Grid>
    </Grid>
  );
};
Senten.defaultProps = {
  dialog: {},
  cosName: '',
  birthDate: '1950-01-01',
};
Senten.propTypes = {
  dialog: PropTypes.object,
  cosName: PropTypes.string,
  birthDate: PropTypes.string,
};

export default Senten;
