import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InputData from './input.textField';
import MutosContext from '../context';


const useStyles = makeStyles({
  date: {
    textAlign: 'end',
  },
});


const Input = ({
  seinen, seibetu, cosName, dialog,
}) => {
  const classes = useStyles();
  const today = new Date();
  const seibetuKanji = {
    male: '男性',
    female: '女性',
  };
  const { sex } = useContext(MutosContext);
  console.log('sex', sex);

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
        className="MuiGrid-justify-xs-center"
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
        <Grid className="MuiGrid-justify-xs-center" item xs={12} sm={4}>
          {dialog}
        </Grid>
      </Grid>
    </div>
  );
};

Input.defaultProps = {
  seinen: '1940-01-01',
  seibetu: 'male',
  cosName: 'お客様名',
  dialog: {},
};
Input.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
  cosName: PropTypes.string,
  dialog: PropTypes.object,
};


export default Input;
