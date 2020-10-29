import React from 'react';
import { nanoid } from 'nanoid';
import TableCell from '@material-ui/core/TableCell';


const Cells = ({ arr }) => (
  arr.map((value) => (
    <TableCell key={nanoid()} align="center">{value}</TableCell>
  ))
);


export default Cells;
