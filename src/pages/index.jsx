import React, { useReducer, useEffect } from 'react';
// import DateFnsUtils from '@date-io/date-fns';

import SentenVisitor from '../components/sentenVisitor/index';
import SentenTuter from '../components/sentenTuter/index';
import Dialog from '../components/dialog/entryData';
import './index.scss';

import '../components/worker';

const reducer = (s) => s;

const IndexPage = () => {
  const [cosName, cosNameDispatch] = useReducer(reducer, 'hello');
  const [birthDate, birthDateDispatch] = useReducer(reducer, '1932-03-03');
  console.log('bir', birthDate);
  // console.log('ff', birthDateDispatch);
  // birthDateDispatch('1940-01-01');
  useEffect(() => {
    console.log('aft', birthDate);
    birthDateDispatch('1940-01-01');
  }, []);

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
