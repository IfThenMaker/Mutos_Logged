import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Dialog from './kouten.dialog.input';
import Header from './kouten.Header';
import KoutenInput from './kouten.input';
import KoutenTable from './kouten.Table';
import KoutenChart from './kouten.chart';


const useStyles = makeStyles({

});

const reducer = (s, a) => a;

const Kouten = ({
  teikeimei
}) => {
  const classes = useStyles();
  const [cosName, cosNameDispatch] = useReducer(reducer, 'index');
  const [seinen, seinenDispatch] = useReducer(reducer, '1940-01-02');
  const [seibetu, seibetuDispatch] = useReducer(reducer, 'male');
  const birthDateDispatch = seinenDispatch;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <KoutenInput
          birthDate={seinen}
          cosName={cosName}
          dialog={Dialog({
            cosNameDispatch, birthDateDispatch, seibetuDispatch,
          })}
        />
      </Grid>
      <Grid item xs={12}>
        <KoutenTable />
      </Grid>
      <Grid item xs={12} style={{ overflow: 'auto' }}>
        <KoutenChart
          teikeimei={teikeimei}
          seinen={seinen}
          seibetu={seibetu}
        />
      </Grid>
    </Grid>
  );
};
Kouten.defaultProps = {
  teikeimei: '厳山命',
  seibetu: 'male',
};
Kouten.propTypes = {
  teikeimei: PropTypes.string,
  seibetu: PropTypes.string,
};

export default Kouten;
