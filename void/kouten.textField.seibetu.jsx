import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const SexField = ({ dispatch }) => (
  <TextField
    autoFocus
    required
    margin="dense"
    id="sex"
    label="性別"
    type="text"
    fullWidth
    onChange={(e) => dispatch(e.target.value)}
  />
);
SexField.defaultProps = {
  dispatch: (e) => e,
};
SexField.propTypes = {
  dispatch: PropTypes.func,
};

export default SexField;
