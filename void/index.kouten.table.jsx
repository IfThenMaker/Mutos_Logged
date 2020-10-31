import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// import Layout from '../layout/layout';
// import Dialog from '../dialog/entry';
import Kouten from '../kouten/kouten.Table';



const IndexPage = ({
  seinen, seibetu, teikeimei,
}) => {
  return (
    <Kouten
      seinen={seinen}
      seibetu={seibetu}
      teikeimei={teikeimei}
    />
  );
};
IndexPage.defaultProps = {
  teikeimei: '厳山命',
  seinen: '1940-01-01',
  seibetu: 'male',
};
IndexPage.propTypes = {
  seinen: PropTypes.string,
  seibetu: PropTypes.string,
  teikeimei: PropTypes.string,
};

export default IndexPage;
