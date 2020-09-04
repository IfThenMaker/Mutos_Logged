import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import SentenVisitor from '../components/sentenVisitor/sentenVisitor'
import Dialog from '../components/dialog/entryData';


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
