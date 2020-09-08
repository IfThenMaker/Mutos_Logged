import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const NameField = ({ name }) => (
  <TextField
    autoFocus
    required
    margin="dense"
    id="name"
    label="お名前"
    type="text"
    value={name}
    fullWidth
  />
);
NameField.defaultProps = {
  name: 'some one you loved',
};
NameField.propTypes = {
  name: PropTypes.string,
};

export default NameField;
