import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const NameField = ({ defaultValue, dispatch }) => (
  <TextField
    autoFocus
    required
    margin="dense"
    id="name"
    label="お名前"
    type="text"
    fullWidth
    defaultValue={defaultValue}
    onChange={(e) => dispatch(e.target.value)}
  />
);
NameField.defaultProps = {
  defaultValue: '1940-01-01',
  dispatch: (e) => e,
};
NameField.propTypes = {
  defaultValue: PropTypes.string,
  dispatch: PropTypes.func,
};

export default NameField;
