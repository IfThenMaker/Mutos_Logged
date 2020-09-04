import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const NameField = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <TextField
      autoFocus
      required
      margin="dense"
      id="name"
      label="Name"
      type="text"
      fullWidth
    />
  );
};

export default NameField;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <Dialog />
// </MuiPickersUtilsProvider>
