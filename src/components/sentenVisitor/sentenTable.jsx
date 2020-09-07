import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  th: {
    borderStyle: 'solid',
    borderWidth: '1px',
  },
});

const createData = (title, value) => ({ title, value });


const SentenTable = (props) => {
  const { teikeimei, syugokashin, bodykashin } = props;
  const classes = useStyles();
  const rows = [
    createData('teikeimei', teikeimei),
    createData('syugokashin', syugokashin),
    createData('bodykashin', bodykashin),
  ];

  return (
    <TableContainer className={classes.th}>
      <Table>
        <TableBody>
          {rows.map(
            (row) => (
              <TableRow key={row.title}>
                <TableCell className={classes.th} component="th">
                  {row.title}
                </TableCell>
                <TableCell className={classes.th} align="left">{row.value}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SentenTable.defaultProps = {
  teikeimei: 'inochi',
  syugokashin: 'kashin',
  bodykashin: 'bodys',
};
SentenTable.propTypes = {
  teikeimei: PropTypes.string,
  syugokashin: PropTypes.string,
  bodykashin: PropTypes.string,
};


export default SentenTable;
