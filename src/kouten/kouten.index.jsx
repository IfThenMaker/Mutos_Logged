import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from './kouten.Header';
import KoutenTable from './kouten.Table';
import KoutenChart from './kouten.chart';


const useStyles = makeStyles({

});


const Kouten = ({
  teikeimei, seinen, seibetu
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
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
  seinen: '1940-01-01',
  seibetu: 'male',
};
Kouten.propTypes = {
  teikeimei: PropTypes.string,
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
};

export default Kouten;
// <Head />
// <KoutenTable
//   megurihanagami={megurihanagami}
//   megurinen={megurinen}
//   megurituki={megurituki}
// />
