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


const Chart = ({ teikeimei, seinen, seibetu }) => {
  // console.log('chart', teikeimei, seinen, seibetu);
  const unseiData = genUnseiData({ teikeimei, seinen, seibetu });
  console.log('un', unseiData);
  const labelJa = {
    kashin: '巡華神',
    nen: '該当年',
    getuA: '該当月(後半)',
    getuB: '該当月(前半)',
    omeguri: '大巡運',
  };
  const formatter = (v, name) => [v || 0, labelJa[name]];
  const ticFormatter = (v) => (v > 11 ? v % 10 : `ore${v}`);
  const colorText = (value, entry) => {
    const { color } = entry;
    return (
      <span style={{ color, margin: '0 10px 0 3px' }}>{labelJa[value]}</span>
    );
  };

  return (
    <LineChart
      width={1361}
      height={250}
      data={unseiData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="colmn" ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '1', '2']} />
      <YAxis />
      <Tooltip
        formatter={formatter}
      />
      <Legend
        align="left"
        formatter={colorText}
      />
      <Line dataKey="kashin" stroke="black" />
      <Line dataKey="nen" stroke="red" />
      <Line dataKey="getuA" stroke="yellowgreen" connectNulls />
      <Line dataKey="getuB" stroke="green" connectNulls />
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
