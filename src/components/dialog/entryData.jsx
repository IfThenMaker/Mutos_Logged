import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
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
    <Grid>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        訂正
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <NameField dispatch={cosNameDispatch} />
          <BirthField dispatch={birthDateDispatch} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
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
