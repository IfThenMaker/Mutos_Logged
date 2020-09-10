import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import InputData from '../atoms/textField.inputData';


const useStyles = makeStyles({
  date: {
    textAlign: 'end',
    margin: '0',
  },
  input: {
    maxWidth: '600px',
    margin: '18px 0',
  },
});


const SentenInput = ({ cosName, birthDate }) => {
  const classes = useStyles();
  const today = new Date();
  console.log('sentenINp', birthDate);
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
      <Grid className={classes.input} item>
        <InputData index="namae" value={cosName} />
        <InputData index="tanjyoubi" value={birthDate} />
      </Grid>
    </div>
  );
};

SentenInput.defaultProps = {
  cosName: 'input',
  birthDate: '1950-03-01',
};
SentenInput.propTypes = {
  cosName: PropTypes.string,
  birthDate: PropTypes.string,
};


export default SentenInput;
