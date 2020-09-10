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
  },
});

const SentenJintai = ({
  jinColor, syugoColor, bodyColor,
}) => {
  const classes = useStyles();
  const baseColor = { background: syugoColor };
  const obalColor = { background: bodyColor };
  const jintaiColor = { fill: jinColor };

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
  jinColor: '#AAAAAA',
  syugoColor: '#EEEEEE',
  bodyColor: '#CCCCCC',
};
SentenJintai.propTypes = {
  jinColor: PropTypes.string,
  syugoColor: PropTypes.string,
  bodyColor: PropTypes.string,
};


export default SentenJintai;


// <Jintai className={classes.jintai} style={jintaiColor} />
