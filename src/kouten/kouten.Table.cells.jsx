import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';


const useStyles = makeStyles({

});


const Cells = ({ index, arr }) => (
  arr.map((value) => (
    <TableCell key={`${index}${value}`}>{value}</TableCell>
  ))
);
Cells.defaultProps = {
  index: 'test',
  arr: [...Array(12).keys()],
};
Cells.propTypes = {
  index: PropTypes.string,
  arr: PropTypes.array,
};


export default Cells;
