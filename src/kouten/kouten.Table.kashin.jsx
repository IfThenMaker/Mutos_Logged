import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { genJyunkashinArr } from '../worker';


const Kashin = ({ teikeimei }) => {
  const kashinArr = genJyunkashinArr({ teikeimei });

  return (
    <TableRow>
      <TableCell>巡華神</TableCell>
      {kashinArr.map((data) => (
        <TableCell key={nanoid()} align="center">
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
};
Kashin.propTypes = {
  teikeimei: PropTypes.string,
};


export default Kashin;
