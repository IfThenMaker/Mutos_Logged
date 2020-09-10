import React, { useReducer } from 'react';
// import DateFnsUtils from '@date-io/date-fns';

import SentenVisitor from '../components/sentenVisitor/index';
import SentenTuter from '../components/sentenTuter/index';
import Dialog from '../components/dialog/entryData';
import './index.scss';

import '../components/worker';

import Test from '../components/sentenVisitor/test';


const reducer = (s, a) => a;

const IndexPage = () => {
  const [cosName, cosNameDispatch] = useReducer(reducer, 'index');
  const [birthDate, birthDateDispatch] = useReducer(reducer, '1940-01-02');
  console.log('bir', birthDate);

  return (
    <div>
      <Dialog
        cosNameDispatch={cosNameDispatch}
        birthDateDispatch={birthDateDispatch}
      />
      <SentenVisitor
        cosName={cosName}
        birthDate={birthDate}
      />
    </div>
  );
};

export default IndexPage;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <Dialog />
// </MuiPickersUtilsProvider>
