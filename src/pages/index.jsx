import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import SentenVisitor from '../components/sentenVisitor/index';
import Dialog from '../components/dialog/entryData';
import './index.scss';


const IndexPage = () => (
  <div>
    <SentenVisitor />
    <Dialog />
  </div>
);

export default IndexPage;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <Dialog />
// </MuiPickersUtilsProvider>
