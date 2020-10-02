import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Cells from './kouten.Table.cells';
import {
  genGoujyunArr,
  genKaminashiNeniArr,
  genKaminashiTukiArr,
} from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
});


const Kaminashi = ({ seinen }) => {
  const classes = useStyles();
  const kaminashiNen = genKaminashiNeniArr({ seinen });
  const kaminashiTuki = genKaminashiTukiArr({ seinen });
  const goujyunArr = genGoujyunArr({ seinen });

  return (
    <>
      <TableRow>
        <TableCell>神無節年</TableCell>
        <Cells index="nashinen" arr={kaminashiNen} />
      </TableRow>
      <TableRow>
        <TableCell>神無節月</TableCell>
        <Cells index="nashituki" arr={kaminashiTuki} />
      </TableRow>
    </>
  );
};
Kaminashi.defaultProps = {
  seinen: '1940-01-01',
};
Kaminashi.propTypes = {
  seinen: PropTypes.string,
};

//
export default Kaminashi;
