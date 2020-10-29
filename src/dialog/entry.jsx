import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import NameField from './entry.textField.name';
import BirthField from './entry.textField.seinen';
import SexField from './entry.textField.seibetu';
import MutosContext from '../context';


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


const EntryData = () => {
  // const {
  //   seinenDispatch,
  //   seibetuDispatch,
  //   cosNameDispatch,
  // } = props;
  const {
    seinen, seibetu, cosName,
    seinenDispatch, seibetuDispatch, cosNameDispatch,
  } = useContext(MutosContext);
  const [name, setName] = useState(cosName);
  const [birth, setBirth] = useState(seinen);
  const [sex, setSex] = useState(seibetu);
  const [open, setOpen] = useState(true);

  // console.log('n,b', name, birth);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    cosNameDispatch({ cosName: name });
    seibetuDispatch({ seibetu: sex });
    const check = dateValidate({ seinen: birth });
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
          <NameField defaultValue={name} dispatch={setName} />
          <SexField defaultValue={sex} dispatch={setSex} />
          <BirthField defaultValue={birth} dispatch={setBirth} />
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
