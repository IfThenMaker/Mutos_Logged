import React, { useReducer } from 'react';
import { Link } from 'gatsby';

import Layout from '../layout/layout';
import Dialog from '../dialog/entry';

const IndexPage = () => {
  const reducer = (s, a) => a;
  const [seinen, seinenDispatch] = useReducer(reducer, '1940-01-02');
  const [seibetu, seibetuDispatch] = useReducer(reducer, 'male');
  const [cosName, cosNameDispatch] = useReducer(reducer, 'index');

  return (
    <Layout
      dialog={Dialog({
        seinenDispatch, seibetuDispatch, cosNameDispatch,
      })}
      seinen={seinen}
      seibetu={seibetu}
      cosName={cosName}
    />
  );
};


export default IndexPage;
