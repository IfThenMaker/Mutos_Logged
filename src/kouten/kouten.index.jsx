import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Head from './kouten.HeadTable';
import KoutenTable from './kouten.Table';
import meruikashinData from './datas/megurikashin';

const useStyles = makeStyles({

});


const Kouten = ({
  megurihanagami, megurinen, megurituki,
}) => {

  return (
    <Grid
      container
      justify="center"
      spacing={3}
    >
      <Head />
      <KoutenTable
        megurihanagami={megurihanagami}
        megurinen={megurinen}
        megurituki={megurituki}
      />
    </Grid>
  );
};
Kouten.defaultProps = {
  megurihanagami: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
  megurinen: 'kashin',
  megurituki: 'bodys',
};
Kouten.propTypes = {
  megurihanagami: PropTypes.object,
  megurinen: PropTypes.object,
  megurituki: PropTypes.object,
};

export default Kouten;
