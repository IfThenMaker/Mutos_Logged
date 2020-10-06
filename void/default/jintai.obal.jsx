import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  base: {
    width: '200px',
    height: '350px',
    borderRadius: '10px',
  },
});

const JintaiObal = ({ backgroundColor }) => {
  const classes = useStyles();
  const color = { backgroundColor };

  return (
    <Grid container>
      <div className={classes.base} style={color}> </div>
    </Grid>
  );
};
JintaiObal.defaultProps = {
  backgroundColor: 'red',
};
JintaiObal.propTypes = {
  backgroundColor: PropTypes.string,
};

export default JintaiObal;
