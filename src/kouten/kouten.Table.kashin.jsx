import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import Grid from '@material-ui/core/Grid';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { genJyunkashinArr } from '../worker';
import MutosContext from '../context';


const Kashin = () => {
  const { teikeimei } = useContext(MutosContext);
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


export default Kashin;
