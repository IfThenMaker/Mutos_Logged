import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Theme from './theme';


const useStyles = makeStyles({
  link: {
    margin: '30px auto',
    fontWeight: 'bold',
    letterSpacing: '0.2em',
  },
});

const SenKou = ({ dispatch }) => {
  const classes = useStyles();
  const [onContents, setOncontents] = useState('senten');
  const onClick = (contents) => {
    setOncontents(contents);
    dispatch(contents);
  };

  return (
    <MuiThemeProvider theme={Theme}>
      <Grid container spacing={5} justify="center">
        <Grid item>
          <Button
            className={classes.link}
            size="large"
            variant="contained"
            color="primary"
            disabled={onContents === 'senten'}
            onClick={() => onClick('senten')}
          >
            先天予定運
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.link}
            size="large"
            variant="contained"
            color="primary"
            disabled={onContents === 'kouten'}
            onClick={() => onClick('kouten')}
          >
            後天予定運
          </Button>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};
SenKou.defaultProps = {
  dispatch: () => {},
};
SenKou.propTypes = {
  dispatch: PropTypes.func,
};

export default SenKou;
