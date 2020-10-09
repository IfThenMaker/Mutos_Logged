import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Favorite from '@material-ui/icons/Favorite';

import Cells from './kouten.Table.cells';
import { genGoujyunArr, OldgenGoujyunArr } from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
  gou: {
    fill: 'pink',
  },
  nen: {
    fill: 'red',
  },
  tuki: {
    fill: 'green',
  },
  nichi: {
    fill: 'blue',
  },
});


const Kaminashi = ({ seinen }) => {
  // console.log('kaminashi', seinen);
  const classes = useStyles();
  const ToP = (i) => {
    if (i === 'nen') { return <Favorite key="a1" className={classes.nen} />; }
    if (i === 'tuki') { return <Favorite key="a2" className={classes.tuki} />; }
    if (i === 'nichi') { return <Favorite key="a3" className={classes.nichi} />; }
    return '';
  };
  const InCell = (arr) => {
    // if (arr.length) { return arr.map((data) => ToP(data)); }
    if (arr.length) {
      return arr.map((data, i) => (data !== ' '
        ? <Favorite key={`ore${i}`} style={{ fill: 'pink' }} />
        : ' '
      ));
    }
    return ' ';
  };
  const goujyunArr = OldgenGoujyunArr({ seinen }).map((v) => InCell(v));
  const gouArr = genGoujyunArr({ seinen }).map((v, i) => (v
    ? <Favorite key={`gou${i}`} className={classes.gou} /> : ''
  ));

  return (
    <TableRow>
      <TableCell>合巡</TableCell>
      <Cells index="nashinen" arr={gouArr} />
    </TableRow>
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
