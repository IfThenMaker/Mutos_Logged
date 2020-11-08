import React, { useContext } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genDaijyunArr } from './kouten.worker';
import { genDaijyunEtoArr } from '../worker';
import MutosContext from '../context';


const Omeguri = () => {
  const { seinen, seibetu } = useContext(MutosContext);
  const daijyunArr = genDaijyunArr({ seinen, seibetu });
  const eto = genDaijyunEtoArr({ seinen, seibetu });
  return (
    <>
      <TableRow>
        <TableCell>大巡運</TableCell>
        <Cells index="daijyun" arr={daijyunArr} />
      </TableRow>
      <TableRow>
        <TableCell>大巡干支</TableCell>
        <Cells index="neneto" arr={eto} />
      </TableRow>
    </>
  );
};


export default Omeguri;
