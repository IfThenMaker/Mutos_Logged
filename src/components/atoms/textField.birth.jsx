import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const BirthField = ({ dispatch }) => {
  return (
    <TextField
      id="date"
      label="生年月日"
      type="date"
      defaultValue="1940-01-01"
      onChange={(e) => dispatch(e.target.value)}
      fullWidth
    />
  );
};
BirthField.defaultProps = {
  dispatch: (e) => e,
};
BirthField.propTypes = {
  dispatch: PropTypes.func,
};


export default BirthField;
