import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const NameField = ({ dispatch }) => (
  <TextField
    autoFocus
    required
    margin="dense"
    id="name"
    label="お名前"
    type="text"
    fullWidth
    onChange={(e) => dispatch(e.target.value)}
  />
);
NameField.defaultProps = {
  dispatch: (e) => e,
};
NameField.propTypes = {
  dispatch: PropTypes.func,
};

export default NameField;
