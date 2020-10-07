import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import KoutenTable from './kouten.Table';
import KoutenChart from './kouten.chart';


const useStyles = makeStyles({

});

const Kouten = ({
  teikeimei, seinen, seibetu,
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <KoutenTable
          teikeimei={teikeimei}
          seinen={seinen}
          seibetu={seibetu}
        />
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
