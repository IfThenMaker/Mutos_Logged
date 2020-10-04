import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

import {
  genUnseiData,
} from './kouten.worker';


const useStyles = makeStyles({
  keisen: {
    borderBottom: 'double 2px rgba(0,0,0,0.55)',
  },
});


// const data = [
//   { jyunsu: 1, value: 3 },
//   { jyunsu: 2, value: 5 },
//   { jyunsu: 3, value: 2 },
// ];

const Chart = ({ teikeimei, seinen, seibetu }) => {
  console.log('chart', teikeimei, seinen, seibetu);
  const unseiData = genUnseiData({ teikeimei, seinen, seibetu });
  // console.log('un', unseiData);
  // const data = genKashinData({ teikeimei });
  // const kashinData = genKashinData( {kashinData} )
  // const nenData = genNenData({ teikeimei });
  // console.log('nendata', nenData);
  // const getuData = genGetuData({ teikeimei });
  // console.log('getuData', getuData);
  // const omeguriData = genOmeguriData({ teikeimei, seinen, seibetu });
  // console.log('omeguri', omeguriData);

  return (
    <LineChart
      width={1361}
      height={250}
      data={unseiData}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="colmn" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line dataKey="kashin" stroke="black" />
      <Line dataKey="nen" stroke="red" />
      <Line dataKey="getu" stroke="green" />
      <Line dataKey="omeguri" stroke="blue" />
    </LineChart>
  );
};
Chart.defaultProps = {
  teikeimei: '厳山命',
  seinen: '2010-01-01',
  seibetu: 'male',
};
Chart.propTypes = {
  teikeimei: PropTypes.string,
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
};

export default Chart;
