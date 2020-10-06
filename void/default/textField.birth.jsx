import React from 'react';
import TextField from '@material-ui/core/TextField';


const BirthField = () => (
  <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="1940-01-01"
    fullWidth
  />
);

export default BirthField;
