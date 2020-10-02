import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Favorite from '@material-ui/icons/Favorite';

import Cells from './kouten.Table.cells';
import {
  genKaminashiNeniArr,
  genKaminashiTukiArr,
} from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
  nen: {
    fill: 'gray',
  },
  tuki: {
    fill: 'green',
  },
  nichi: {
    fill: 'blue',
  },
});


const Kaminashi = ({ seinen }) => {
  const classes = useStyles();
  const ToP = (i) => {
    if (i === '●') { return <Favorite key="a1" className={classes.nen} />; }
    if (i === 'tuki') { return <Favorite key="a2" className={classes.tuki} />; }
    if (i === 'nichi') { return <Favorite key="a3" className={classes.nichi} />; }
    return '';
  };
  const InCell = (v) => {
    if (v) { return ToP(v); }
    return ' ';
  };
  const kaminashiNen = genKaminashiNeniArr({ seinen }).map((v) => InCell(v));
  const kaminashiTuki = genKaminashiTukiArr({ seinen });

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
