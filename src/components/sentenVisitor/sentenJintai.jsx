import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Jintai from '../../assets/jintai.svg';
// import Jimage from './jintai.jintai';


const useStyles = makeStyles({
  base: {
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
    height: '400px',
    margin: 'auto',
    borderRadius: '10px',
    background: 'linear-gradient(#e66465, #9198e5)',
  },
  obal: {
    display: 'flex',
    justifyContent: 'center',
    width: '220px',
    height: '370px',
    borderRadius: '105px / 185px',
    margin: 'auto',
  },
  jintai: {
    width: '140px',
    height: '330px',
    // backgroundColor: ' transparent',
    fill: 'gray',
  },
});

const SentenJintai = ({ base, obal, jintai }) => {
  const classes = useStyles();
  const baseColor = { background: base };
  const obalColor = { background: obal };
  const jintaiColor = { fill: jintai };

  return (
    <Grid container>
      <div className={classes.base} style={baseColor}>
        <div className={classes.obal} style={obalColor}>
          <Jintai className={classes.jintai} style={jintaiColor} />
        </div>
      </div>
    </Grid>
  );
};
SentenJintai.defaultProps = {
  // base: '#EEEEEE',
  base: 'radial-gradient(silver, skyblue)',
  // obal: '#CCCCCC',
  obal: 'linear-gradient(black, cornsilk)',
  // jintai: '#AAAAAA',
  jintai: 'radial-gradient(silver, skyblue)',
};
SentenJintai.propTypes = {
  base: PropTypes.string,
  obal: PropTypes.string,
  jintai: PropTypes.string,
};


export default SentenJintai;


// <Jintai className={classes.jintai} style={jintaiColor} />
