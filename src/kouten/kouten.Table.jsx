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

import kashinData from './datas/megurikashin';

const useStyles = makeStyles({

});

const heads = [
  'index', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
];

console.log(heads.slice(1));

const bodys = {}

const createData = (title, value) => ({ title, value });

const Kami = ({ teikeimei }) => {
  console.log('kaka', kashinData);
  console.log('teikei', teikeimei);
  console.log('tete', kashinData[teikeimei]);
  return (
    <TableRow>
      <TableCell>index</TableCell>
      {heads.slice(1).map((num) => {
        const index = `0${num}`.slice(-2);
        // const index = num.slice(0, 1) === '0' ? num.slice(1, 2) : num;
        return (
          <TableCell key={`kami${index}`}>
            <Grid>
              {kashinData[teikeimei][index].kashin}
            </Grid>
            <Grid>
              {kashinData[teikeimei][index].megurikashin}
            </Grid>
            <Grid>
              {kashinData[teikeimei][index].saikuru}
            </Grid>
          </TableCell>
        );
      })}
    </TableRow>
  );
};


const KoutenTable = ({
  teikeimei, megurinen, megurituki,
}) => {
  const classes = useStyles();

  return (
    <Paper>
      <TableContainer>
        <TableHead>
          <TableRow>
            {heads.map((h) => (
              <TableCell
                key={`kt${h}`}
              >
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <Kami teikeimei={teikeimei} />
        </TableBody>
      </TableContainer>
    </Paper>
  );
};

KoutenTable.defaultProps = {
  teikeimei: '豪風命',
  megurikashin: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
  megurinen: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
  megurituki: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
};
KoutenTable.propTypes = {
  teikeimei: PropTypes.string,
  megurikashin: PropTypes.object,
  megurinen: PropTypes.object,
  megurituki: PropTypes.object,
};


export default KoutenTable;
