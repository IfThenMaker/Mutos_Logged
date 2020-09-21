import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles({

});

const TableA = ({
  seinenjyunsu, seigetujyunsu, seigetueto, seijitujyunsu, meisu,
}) => {
  const data = {
    生年巡数: seinenjyunsu,
    '生月巡数・大巡スタート数': seigetujyunsu,
    生月干支: seigetueto,
    生日巡数: seijitujyunsu,
    命数: meisu,
  };
  return (
    <Grid item>
      <Table>
        <TableBody>
          {Object.keys(data).map((k) => (
            <TableRow key={k}>
              <TableCell>
                {k}
              </TableCell>
              <TableCell>
                {data[k]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};
TableA.defaultProps = {
  seinenjyunsu: '8',
  seigetujyunsu: '7',
  seigetueto: '戌',
  seijitujyunsu: '1',
  meisu: '3',
};
TableA.propTypes = {
  seinenjyunsu: PropTypes.string,
  seigetujyunsu: PropTypes.string,
  seigetueto: PropTypes.string,
  seijitujyunsu: PropTypes.string,
  meisu: PropTypes.string,
};

const TableB = ({
  inyou, jyunsetu, kaminashisetu, goujyun,
}) => {
  const data = {
    '陽巡／陰巡': inyou,
    巡節: jyunsetu,
    神無節: kaminashisetu,
    合巡: goujyun,
  };
  return (
    <Grid item>
      <Table>
        <TableBody>
          {Object.keys(data).map((k) => (
            <TableRow key={k}>
              <TableCell>
                {k}
              </TableCell>
              <TableCell>
                {data[k]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};
TableB.defaultProps = {
  inyou: '8',
  jyunsetu: '7',
  kaminashisetu: '戌',
  goujyun: '1',
};
TableB.propTypes = {
  inyou: PropTypes.string,
  jyunsetu: PropTypes.string,
  kaminashisetu: PropTypes.string,
  goujyun: PropTypes.string,
};


const Head = ({
  seinenjyunsu, seigetujyunsu, seigetueto, seijitujyunsu, meisu,
  inyou, jyunsetu, kaminashisetu, goujyun,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h4>
          あなたの巡華神サイクル
        </h4>
      </Grid>
      {TableA({
        seinenjyunsu, seigetujyunsu, seigetueto, seijitujyunsu, meisu,
      })}
      {TableB({
        inyou, jyunsetu, kaminashisetu, goujyun,
      })}
    </Grid>
  );
};
Head.defaultProps = {
  seinenjyunsu: '8',
  seigetujyunsu: '7',
  seigetueto: '戌',
  seijitujyunsu: '1',
  meisu: '3',
  inyou: '8',
  jyunsetu: '7',
  kaminashisetu: '戌',
  goujyun: '1',
};
Head.propTypes = {
  seinenjyunsu: PropTypes.string,
  seigetujyunsu: PropTypes.string,
  seigetueto: PropTypes.string,
  seijitujyunsu: PropTypes.string,
  meisu: PropTypes.string,
  inyou: PropTypes.string,
  jyunsetu: PropTypes.string,
  kaminashisetu: PropTypes.string,
  goujyun: PropTypes.string,
};
// (
//   <Grid container>
//     <Grid item>
//
//     </Grid>
//     <Grid item>
//       <Table>
//         <TableBody>
//           <TableRow>
//             <TableCell>
//               生年巡数
//             </TableCell>
//             <TableCell>
//               {seinenjyunsu}
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>
//               生月巡数
//             </TableCell>
//             <TableCell>
//               {seigetujyunsu}
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>
//               生月干支
//             </TableCell>
//             <TableCell>
//               {seigetueto}
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>
//               生日巡数
//             </TableCell>
//             <TableCell>
//               {seijitujyunsu}
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>
//               命数
//             </TableCell>
//             <TableCell>
//               {meisu}
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </Grid>
//
//   </Grid>
// );
//




export default Head;
