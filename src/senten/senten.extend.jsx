import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import {
  genDaijyunKashin,
  genNenjyunKashin,
  genTukijyunKashin,
  genKana,
} from '../kouten/kouten.worker';

const useStyles = makeStyles({
  num: {
    margin: '0',
    paddingLeft: '15px',
  },
  main: {
    margin: '0',
  },
  sub: {
    margin: '0',
    fontSize: '0.8em',
  },
});


const SentenTable = ({
  seinen, seibetu, teikeimei,
}) => {
  const classes = useStyles();
  const daijyun = genDaijyunKashin({ teikeimei, seinen, seibetu });
  console.log('daijyun', daijyun);
  const nenjyun = genNenjyunKashin({ teikeimei });
  console.log('nenjyun', nenjyun);
  const tukijyun = genTukijyunKashin({ teikeimei });
  console.log('tukijyun', tukijyun);
  const kanna = genKana({ seinen });
  console.log('kanna', kanna);

  const Cells = (props) => {
    const { title, index, value } = props;
    return (
      <TableRow>
        <TableCell className={classes.th} component="th">{title}</TableCell>
        <TableCell>{index}</TableCell>
        <TableCell>{value}</TableCell>
      </TableRow>
    );
  };


  return (
    <Paper variant="outlined">
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={5}>
          <TableContainer className={classes.th}>
            <Table>
              <TableBody>
                <Cells {...daijyun} />
                <Cells {...nenjyun} />
                <Cells {...tukijyun} />
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={5}>
          <TableContainer className={classes.th}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    className={classes.th}
                    component="th"
                  >
                    {kanna.title}
                  </TableCell>
                  <TableCell>{kanna.tuki}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={1} />
                  <TableCell>{kanna.eto}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

SentenTable.defaultProps = {
  seinen: '1950-01-01',
  seibetu: 'male',
  teikeimei: 'inochi',
  syugokashin: 'kashin',
  bodykashin: 'bodys',
};
SentenTable.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
  teikeimei: PropTypes.string,
  syugokashin: PropTypes.string,
  bodykashin: PropTypes.string,
};


export default SentenTable;
