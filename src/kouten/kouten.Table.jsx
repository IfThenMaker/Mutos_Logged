import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';

import Year from './kouten.Table.nen';
import Month from './kouten.Table.getu';
import Kashin from './kouten.Table.kashin';

const useStyles = makeStyles({

});


const KoutenTable = ({
  // teikeimei, megurinen, megurituki,
}) => {
  const classes = useStyles();

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <Year />
          </TableHead>
          <TableBody>
            <Month />
            <Kashin />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

// KoutenTable.defaultProps = {
//   teikeimei: '豪風命',
//   megurikashin: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
//   megurinen: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
//   megurituki: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
// };
// KoutenTable.propTypes = {
//   teikeimei: PropTypes.string,
//   megurikashin: PropTypes.object,
//   megurinen: PropTypes.object,
//   megurituki: PropTypes.object,
// };


export default KoutenTable;
