import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const BirthField = ({ birthday }) => (
  <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue={birthday}
    fullWidth
  />
);
BirthField.defaultProps = {
  birthday: '1940-01-01',
};
BirthField.propTypes = {
  birthday: PropTypes.string,
};
export default BirthField;
