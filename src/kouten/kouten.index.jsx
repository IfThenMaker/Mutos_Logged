import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Header from './kouten.Header';
import KoutenTable from './kouten.Table';


const useStyles = makeStyles({

});


const Kouten = ({
  // megurihanagami, megurinen, megurituki,
}) => {
  return (
    <Grid>
      <Header />
      <KoutenTable />
    </Grid>
  );
};
// Kouten.defaultProps = {
//   megurihanagami: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
//   megurinen: 'kashin',
//   megurituki: 'bodys',
// };
// Kouten.propTypes = {
//   megurihanagami: PropTypes.object,
//   megurinen: PropTypes.object,
//   megurituki: PropTypes.object,
// };

export default Kouten;
// <Head />
// <KoutenTable
//   megurihanagami={megurihanagami}
//   megurinen={megurinen}
//   megurituki={megurituki}
// />
