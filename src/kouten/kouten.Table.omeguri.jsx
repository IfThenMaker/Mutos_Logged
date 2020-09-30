import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { genDaijyunArr } from './kouten.worker';


const useStyles = makeStyles({

});


const Kashin = ({ seinen, seibetu, teikeimei }) => {
  // const kashinArr = genJyunkashinArr({ teikeimei });
  console.log('seibe', seibetu);
  const dai = genDaijyunArr({ seinen, seibetu });
  return <div> </div>
};
Kashin.defaultProps = {
  seinen: '2010-01-01',
  seibetu: 'male',
  teikeimei: 'åŽ³å±±å‘½',
  inyou: true,
};
Kashin.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
  teikeimei: PropTypes.string,
  inyou: PropTypes.bool,
};

export default Kashin;
