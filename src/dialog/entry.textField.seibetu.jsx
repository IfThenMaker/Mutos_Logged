import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles({
  gender: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    margin: '15px 0px 10px 0',
  },
});

const SexField = ({ defaultValue, dispatch }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    dispatch(e.target.value);
  };

  return (
    <RadioGroup
      className={classes.gender}
      aria-label="gender"
      name="gender1"
      value={defaultValue}
      onChange={handleChange}
    >
      <FormControlLabel value="male" control={<Radio />} label="男性" />
      <FormControlLabel value="female" control={<Radio />} label="女性" />
    </RadioGroup>
  );
};
SexField.defaultProps = {
  defaultValue: 'male',
  dispatch: (e) => e,
};
SexField.propTypes = {
  defaultValue: PropTypes.string,
  dispatch: PropTypes.func,
};

export default SexField;
