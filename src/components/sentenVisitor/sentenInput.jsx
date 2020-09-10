import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import InputData from '../atoms/textField.inputData';
import BirthField from '../atoms/textField.birth';


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

const TextField = ({ index, value }) => {
  return (
    <Grid>
      <p>{index}</p>
      <p>{value}</p>
      <Divider />
    </Grid>
  );
};

const SentenInput = ({ name, birthDate }) => {
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
        <InputData index="namae" value="gomber" />
        <InputData index="tanjyoubi" value="1-1-1" />
      </Grid>
      <Grid className={classes.input} item>

      </Grid>
    </div>
  );
};

SentenInput.defaultProps = {
  name: 'some one you loved',
  birthDate: '1940-01-01',
};
SentenInput.propTypes = {
  name: PropTypes.string,
  birthDate: PropTypes.string,
};
// <NameField name={name} />

export default SentenInput;
