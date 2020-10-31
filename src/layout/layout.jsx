import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './layout.header';
import Input from '../input/input';
import Button from './layout.button';
import Senten from '../senten/senten';
import Kouten from '../kouten/kouten';
import { teikeimeiCalc } from '../senten/senten.worker';
import { MutosProvider } from '../context';

const useStyles = makeStyles({
  wrapper: {
    maxWidth: '840px',
    padding: '10px',
  },
});


const Layout = () => {
  const reducer = (s, a) => a;
  const classes = useStyles();
  const [seinen, seinenDispatch] = useReducer(reducer, '1940-01-01');
  const [seibetu, seibetuDispatch] = useReducer(reducer, 'male');
  const [cosName, cosNameDispatch] = useReducer(reducer, '');
  const [contents, contentsDispatch] = useReducer(reducer, 'senten');
  const { teikeimei } = teikeimeiCalc({ seinen });
  console.log('お名前:', cosName.cosName);
  console.log('生年月日:', seinen);
  console.log('性別', seibetu.seibetu);
  console.log('提携命:', teikeimei);
  const titleKanji = {
    senten: '先天予定運',
    kouten: '後天予定運',
  };


  return (
    <MutosProvider value={{
      seinen,
      seibetu,
      cosName,
      seinenDispatch,
      seibetuDispatch,
      cosNameDispatch,
      teikeimei,
    }}
    >
      <Grid
        className={classes.wrapper}
        container
        justify="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <Header title={titleKanji[contents]} />
        </Grid>
        <Grid item xs={12}>
          <Input />
        </Grid>
        <Grid item xs={12}>
          {contents === 'senten'
            ? Senten({ teikeimei, seinen, seibetu })
            : Kouten()}
        </Grid>
        <Grid item xs={12}>
          <Button dispatch={contentsDispatch} />
        </Grid>
      </Grid>
    </MutosProvider>
  );
};

export default Layout;
