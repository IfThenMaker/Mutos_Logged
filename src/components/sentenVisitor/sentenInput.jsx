import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NameField from '../atoms/textField.name';
import BirthField from '../atoms/textField.birth';


const useStyles = makeStyles({
  // field: {
  //   maxWideth: '600px',
  //   backgroundColor: 'blue',
  // },
  date: {
    textAlign: 'end',
    margin: '0',
  },
});

const SentenInput = ({ name, birthday }) => {
  const classes = useStyles();
  const today = new Date();

  return (
    <div>
      <Grid container>
        <p className={classes.date}>
          診断日&emsp;
          {today.getMonth() + 1}
          月
          {today.getDate()}
          日
        </p>
      </Grid>
      <NameField name={name} />
      <BirthField birthday={birthday} />
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
