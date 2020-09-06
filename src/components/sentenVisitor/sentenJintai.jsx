import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  base: {
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
    height: '400px',
    borderRadius: '10px',
    backgroundColor: 'blue',
  },
  obal: {
    width: '220px',
    height: '370px',
    borderRadius: '105px / 185px',
  },
  jintai: {

  }
});

const SentenJintai = ({ base, obal }) => {
  const classes = useStyles();
  const baseColor = { backgroundColor: base };
  const obalColor = { backgroundColor: obal };

  return (
    <Grid container>
      <Grid container>
        <div className={classes.base} style={baseColor}>
          <div className={classes.obal} style={obalColor}>
            io
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
SentenJintai.defaultProps = {
  base: 'gray',
  obal: 'red',
};
SentenJintai.propTypes = {
  base: PropTypes.string,
  obal: PropTypes.string,
};


export default SentenJintai;
