import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import Jyunsu from './kouten.Table.jyunsu';
import Year from './kouten.Table.nen';
import Month from './kouten.Table.getu';
import Kashin from './kouten.Table.kashin';
import Omeguri from './kouten.Table.omeguri';
import Kaminashi from './kouten.Table.kaminashi';
import Goujyun from './kouten.Table.goujyun';


const useStyles = makeStyles({
  table: {
    '& td': {
      minWidth: '65px',
    },
  },
});


const KoutenTable = ({
  seinen, seibetu, teikeimei,
}) => {
  // console.log('table', seinen, seibetu);
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table size="small">
        <TableBody>
          <Jyunsu />
          <Kashin teikeimei={teikeimei} />
          <Year />
          <Month />
          <Omeguri seinen={seinen} seibetu={seibetu} />
          <Kaminashi seinen={seinen} seibetu={seibetu} />
          <Goujyun seinen={seinen} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

KoutenTable.defaultProps = {
  teikeimei: '厳山命',
  seinen: '1940-01-01',
  seibetu: 'male',
};
KoutenTable.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
  teikeimei: PropTypes.string,
};


export default KoutenTable;
