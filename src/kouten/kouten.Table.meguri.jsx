import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import meguriData from './datas/tukijyun';
import { nenjyun } from './kouten.worker';

const useStyles = makeStyles({

});

const indexes = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
];

const Meguri = ({ meguri }) => {
  console.log('megi', meguriData);
  return (
    <TableRow>
      <TableCell>index</TableCell>


    </TableRow>
  );
};
Meguri.defaultProps = {
  meguri: {},
};
Meguri.propTypes = {
  meguri: PropTypes.object,
};

export default Meguri;
// export const MeguriNen = () => {
//     return <Meguri meguri={}/>
// };

//
// {indexes.map((index) => (
//   <TableCell key={`nen${index}`}>
//     {meguriData[Nuindex].year}
//   </TableCell>
// ))}
