import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Theme from './datas/theme';


const useStyles = makeStyles({
  link: {
    margin: '30px auto',
  },
});

const SenKou = ({ onPage }) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={Theme}>
      <Grid container spacing={5} justify="center">
        <Grid item>
          <Button
            className={classes.link}
            size="large"
            variant="contained"
            color={onPage ? 'primary' : 'secondary'}
            href=""
          >
            先天予定運
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.link}
            size="large"
            variant="contained"
            color={onPage ? 'secondary' : 'primary'}
            href=""
          >
            後天予定運
          </Button>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};
SenKou.defaultProps = {
  onPage: true,
};
SenKou.propTypes = {
  onPage: PropTypes.bool,
};

export default SenKou;
