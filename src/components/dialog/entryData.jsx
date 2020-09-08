import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import NameField from '../atoms/textField.name';
import BirthField from '../atoms/textField.birth';


const EntryData = (props) => {
  const {
    cosNameDispatch,
    birthDateDispatch,
  } = props;
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log('cosNameDispatch', birthDateDispatch);


  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <NameField dispatch={cosNameDispatch} />
          <BirthField dispatch={birthDateDispatch} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
EntryData.defaultProps = {
  cosNameDispatch: () => {},
  birthDateDispatch: () => {},
};
EntryData.propTypes = {
  cosNameDispatch: PropTypes.func,
  birthDateDispatch: PropTypes.func,
};


export default EntryData;
