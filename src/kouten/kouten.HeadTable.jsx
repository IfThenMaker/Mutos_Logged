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
    生月巡数: seigetujyunsu,
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


const Head = ({
  seinenjyunsu, seigetujyunsu, seigetueto, seijitujyunsu, meisu,
}) => {
  return (
    <Grid container>
      <Grid item>
        <h4>
          あなたの巡華神サイクル
        </h4>
      </Grid>
      {TableA({
        seinenjyunsu, seigetujyunsu, seigetueto, seijitujyunsu, meisu,
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
};
Head.propTypes = {
  seinenjyunsu: PropTypes.string,
  seigetujyunsu: PropTypes.string,
  seigetueto: PropTypes.string,
  seijitujyunsu: PropTypes.string,
  meisu: PropTypes.string,
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
