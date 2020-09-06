import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Jintai from '../../assets/jintai.svg';


const useStyles = makeStyles({
  base: {
    height: '56px',
    width: '100%',
    backgroundColor: 'blue',
    // color: 'blue',
  },
});

const SentenHeader = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <div className={classes.base}> </div>
    </Grid>
  );
};
// SentenJintai.defaultProps = {
//   base: 'gray',
//   obal: 'red',
//   jintai: 'blue',
// };
// SentenJintai.propTypes = {
//   base: PropTypes.string,
//   obal: PropTypes.string,
//   jintai: PropTypes.string,
// };


export default SentenHeader;
