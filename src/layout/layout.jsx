import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './layout.header';
import Input from '../input/input';
import Button from './layout.button';
import Senten from '../senten/senten';
import Kouten from '../kouten/kouten';
import { teikeimeiCalc } from '../senten/senten.worker';


const useStyles = makeStyles({
  wrapper: {
    maxWidth: '840px',
    margin: '0 auto',
    padding: '10px',
  },
  imput: {
    margin: '12px 0',
  },
  cap: {
    margin: '20px 0 0 0',
    '& h4': {
      marginBottom: '5px',
    },
  },
  table: {
    margin: '12px 0',
  },
  jintai: {
    minWidth: '320px',
    margin: '12px 0',
  },
  link: {
    backgroundColor: '#ffaa56',
    margin: '30px auto',
  },
});


const Layout = ({
  seinen, seibetu, cosName, dialog,
}) => {
  const reducer = (s, a) => a;
  const classes = useStyles();
  const [contents, contentsDispatch] = useReducer(reducer, 'senten');
  const { teikeimei } = teikeimeiCalc({ birthday: seinen });
  const titleKanji = {
    senten: '先天予定運',
    kouten: '後天予定運',
  };

  return (
    <Grid
      className={classes.wrapper}
      container
      justify="center"
      spacing={3}
    >
      <Grid className={classes.imput} item xs={12}>
        <Header title={titleKanji[contents]} />
      </Grid>
      <Grid className={classes.imput} item xs={12}>
        <Input
          seinen={seinen}
          seibetu={seibetu}
          cosName={cosName}
          dialog={dialog}
        />
      </Grid>
      <Grid className={classes.imput} item xs={12}>
        {contents === 'senten'
          ? Senten({ seinen })
          : Kouten({ teikeimei, seinen, seibetu })}
      </Grid>
      <Grid className={classes.imput} item xs={12}>
        <Button dispatch={contentsDispatch} />
      </Grid>
    </Grid>
  );
};
Layout.defaultProps = {
  seinen: '1940-01-01',
  seibetu: 'male',
  cosName: 'お客様名',
  dialog: {},
};
Layout.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
  cosName: PropTypes.string,
  dialog: PropTypes.object,
};

export default Layout;
