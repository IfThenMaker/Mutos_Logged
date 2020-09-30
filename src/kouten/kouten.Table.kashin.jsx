import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { genJyunkashinArr } from './kouten.worker';


const useStyles = makeStyles({

});


const Kashin = ({ teikeimei }) => {
  const kashinArr = genJyunkashinArr({ teikeimei });
  console.log('kashin', kashinArr);
  return (
    <TableRow>
      <TableCell>巡華神</TableCell>
      {kashinArr.map((data, num) => (
        <TableCell key={`kami${num}`} align="center">
          <Grid>
            {data.kashin}
          </Grid>
          <Grid>
            {data.keikaku}
          </Grid>
        </TableCell>
      ))}
    </TableRow>
  );
};
Kashin.defaultProps = {
  teikeimei: '厳山命',
  // inyou: true,
};
Kashin.propTypes = {
  teikeimei: PropTypes.string,
  // inyou: PropTypes.bool,
};

export default Kashin;
