import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  base: {
    height: '50px',
    width: '100%',
    margin: '20px 0',
    background: 'linear-gradient(to right, #CCFFCC, #CCFFFF, #FFCCCC, #FFFFCC, #FFCCCC, #CCFFFF, #CCFFCC)',
    [theme.breakpoints.up('sm')]: {
      height: '56px',
    },
  },
  caption: {
    margin: 0,
    color: 'red',
    lineHeight: '50px',
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '0.5em',
    [theme.breakpoints.up('sm')]: {
      lineHeight: '56px',
    },
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid className={classes.base} container justify="center">
        <p className={classes.caption}>{title}</p>
      </Grid>
    </Grid>
  );
};
Header.defaultProps = {
  title: 'title',
};
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
