import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NameField from '../atoms/textField.name';
import BirthField from '../atoms/textField.birth';


const useStyles = makeStyles({
  date: {
    textAlign: 'end',
    margin: '0',
  },
  input: {
    margin: '15px 0',
  },
});

const SentenInput = ({ name, birthday }) => {
  const classes = useStyles();
  const today = new Date();

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
        <NameField name={name} />
      </Grid>
      <Grid className={classes.input} item>
        <BirthField birthday={birthday} />
      </Grid>
    </div>
  );
};

SentenInput.defaultProps = {
  name: 'some one you loved',
  birthday: '1940-01-01',
};
SentenInput.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.string,
};


export default SentenInput;
