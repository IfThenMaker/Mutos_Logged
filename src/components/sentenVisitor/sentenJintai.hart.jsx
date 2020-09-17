import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// import Jimage from './jintai.jintai';




const useStyles = makeStyles({
  number: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18px',
    height: '18px',
    fontSize: '17px',
    backgroundColor: 'white',
    borderRadius: '50%',
  },
});

const SentenHart = ({ number, styleSet }) => {
  const classes = useStyles();

  return (
    <FavoriteBorder />
  );
};
SentenHart.defaultProps = {
  number: '1',
  styleSet: {
    top: '90px',
    left: '160px',
  },
};
SentenHart.propTypes = {
  number: PropTypes.string,
  styleSet: PropTypes.object,
};


export default SentenHart;


// <Jintai className={classes.jintai} style={jintaiColor} />
