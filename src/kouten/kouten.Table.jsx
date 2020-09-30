import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Divider from '@material-ui/core/Divider';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';

import Year from './kouten.Table.nen';
import Month from './kouten.Table.getu';
import Kashin from './kouten.Table.kashin';
import Omeguri from './kouten.Table.omeguri';

const useStyles = makeStyles({
  table: {
    '& td': {
      minWidth: '65px',
    },
  },
});


const KoutenTable = ({
  seinen, seibetu,
}) => {
  const classes = useStyles();

  return (
    <Paper>
      <TableContainer className={classes.table}>
        <Table size="small">
          <TableBody>
            <Year />
            <Month />
            <Omeguri seinen={seinen} seibetu={seibetu} />
            <Kashin />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

KoutenTable.defaultProps = {
  seinen: '1940-01-01',
  seibetu: 'male',
  teikeimei: '微風命',
};
KoutenTable.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
  teikeimei: PropTypes.string,
};


export default KoutenTable;
