import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import { genDaijyunArr, genDaijyunEtoArr } from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
});


const Omeguri = ({ seinen, seibetu }) => {
  // console.log('omeguri', seinen, seibetu);
  const classes = useStyles();
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
Omeguri.defaultProps = {
  seinen: '2010-01-01',
  seibetu: 'male',
};
Omeguri.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
};

export default Omeguri;
