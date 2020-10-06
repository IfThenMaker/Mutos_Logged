import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InputData from '../components/atoms/textField.inputData';


const useStyles = makeStyles({
  date: {
    textAlign: 'end',
    margin: '0',
  },
});


const KoutenInput = ({
  dialog, cosName, seinen, seibetu,
}) => {
  const classes = useStyles();
  const today = new Date();
  const seibetuKanji = {
    male: '男性',
    female: '女性',
  };

  return (
    <div>
      <Grid item>
        <p className={classes.date}>
          診断日&emsp;
          {today.getMonth() + 1}
          &nbsp;月&emsp;
          {today.getDate()}
          &nbsp;
          日
        </p>
      </Grid>
      <Grid
        className={classes.input}
        container
        spacing={5}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8}>
          <InputData index="お名前" value={cosName} />
          <InputData index="生年月日" value={seinen} />
          <InputData index="性別" value={seibetuKanji[seibetu]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          {dialog}
        </Grid>
      </Grid>
    </div>
  );
};

KoutenInput.defaultProps = {
  dialog: {},
  cosName: 'お客様名',
  seinen: '1940-01-01',
  seibetu: 'male',
};
KoutenInput.propTypes = {
  dialog: PropTypes.object,
  cosName: PropTypes.string,
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
};


export default KoutenInput;
