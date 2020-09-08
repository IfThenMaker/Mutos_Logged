import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const BirthField = ({ birthDate, dispatch }) => {
  console.log('dis', dispatch);
  dispatch('esto');
  return (
    <TextField
      id="date"
      label="birthDate"
      type="date"
      defaultValue={birthDate}
      onChange={(e) => {
        console.log('ee', e.target.value);
        dispatch(e.target.value);
        console.log(dispatch);
      }}
      fullWidth
    />
  );
};
BirthField.defaultProps = {
  birthDate: '1950-01-01',
  dispatch: () => {},
};
BirthField.propTypes = {
  birthDate: PropTypes.string,
  dispatch: PropTypes.func,
};


export default BirthField;
