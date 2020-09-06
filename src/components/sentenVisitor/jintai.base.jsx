import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  base: {
    width: '300px',
    height: '400px',
    borderRadius: '10px',
    backgroundColor: 'blue',
  },
});

const JintaiBase = ({ backgroundColor }) => {
  const classes = useStyles();
  const color = { backgroundColor };

  return (
    <Grid container>
      <div className={classes.base} style={color}> </div>
    </Grid>
  );
};
JintaiBase.defaultProps = {
  backgroundColor: 'gray',
};
JintaiBase.propTypes = {
  backgroundColor: PropTypes.string,
};

export default JintaiBase;
