import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import NameField from './entry.textField.name';
import BirthField from './entry.textField.seinen';
import SexField from './entry.textField.seibetu';


const dateValidate = (dateStr) => {
  const stDate = new Date('1912');
  const endDate = new Date('2040');
  const chDate = new Date(dateStr);
  if (chDate < stDate) {
    alert('1912年～2040年の範囲で入力してください');
  } else if (chDate > endDate) {
    alert('1912年～2040年の範囲で入力してください');
  } else {
    return true;
  }
  return false;
};


const EntryData = (props) => {
  const {
    seinenDispatch,
    seibetuDispatch,
    cosNameDispatch,
  } = props;
  const [name, setName] = useState();
  const [birth, setBirth] = useState();
  const [sex, setSex] = useState();
  const [open, setOpen] = useState(true);

  // console.log('n,b', name, birth);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    cosNameDispatch(name);
    seibetuDispatch(sex);
    const check = dateValidate(birth);
    if (check) {
      seinenDispatch(birth);
      setOpen(false);
    }
  };
  // console.log('cosNameDispatch', birthDateDispatch);


  return (
    <Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClickOpen}
        style={{ fontWeight: 'bold', letterSpacing: '0.2em' }}
      >
        変更
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <NameField dispatch={setName} />
          <SexField dispatch={setSex} />
          <BirthField dispatch={setBirth} />
        </DialogContent>
        <DialogActions style={{
          justifyContent: 'center',
          marginBottom: '20px',
        }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ fontWeight: 'bold', letterSpacing: '0.2em' }}
            onClick={handleClose}
          >
            結果を見る
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
EntryData.defaultProps = {
  seinenDispatch: () => {},
  seibetuDispatch: () => {},
  cosNameDispatch: () => {},
};
EntryData.propTypes = {
  seinenDispatch: PropTypes.func,
  seibetuDispatch: PropTypes.func,
  cosNameDispatch: PropTypes.func,
};


export default EntryData;
