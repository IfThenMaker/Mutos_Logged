import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Head from './kouten.HeadTable';
import KoutenTable from './kouten.Table';

const useStyles = makeStyles({

});


const Kouten = () => {

  return (
    <Grid
      container
      justify="center"
      spacing={3}
    >
      <Head />

    </Grid>
  );
};
Kouten.defaultProps = {
  // dialog: {},
  // cosName: '',
  // birthDate: '1950-01-01',
};
Kouten.propTypes = {
  // dialog: PropTypes.object,
  // cosName: PropTypes.string,
  // birthDate: PropTypes.string,
};

export default Kouten;
