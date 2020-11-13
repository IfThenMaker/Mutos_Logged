import React, { useContext } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

import {
  genUnseiData,
} from '../worker';
import MutosContext from '../context';


const Chart = () => {
  const { teikeimei, seinen, seibetu } = useContext(MutosContext);
  const unseiData = genUnseiData({ teikeimei, seinen, seibetu });
  const labelJa = {
    kashin: '巡華神',
    nen: '該当年',
    getuA: '該当月(後半)',
    getuB: '該当月(前半)',
    omeguri: '大巡運',
  };
  const formatter = (v, name) => [v || 0, labelJa[name]];
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


export default Chart;
