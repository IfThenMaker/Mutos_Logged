import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Svg from '../../assets/jintai.svg';


const useStyles = makeStyles({
  base: {
    width: '140px',
    height: '330px',
    backgroundImage: 'url(./assets/jintai.svg)',
  },
  // svg: {
  //   fill: 'gary',
  // },

});


const Jintai = ({ background }) => {
  const classes = useStyles();
  const color = { background };

  const data = useStaticQuery(graphql`
    {
      allFile(filter: {name: {eq: "jintai"}}) {
        nodes {
          publicURL
        }
      }
    }
  `);
  // const data = useStaticQuery(graphql`
  //   {
  //     allImageSharp(filter: {fixed: {originalName: {eq: "human.png"}}}) {
  //       edges {
  //         node {
  //           fixed {
  //             src
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  console.log('dddasa', data);
  // const imgpath = data.allImageSharp.edges[0].node.fixed.src;
  // console.log('im', imgpath);
  const imgpath = data.allFile.nodes[0].publicURL;
  const imgStyle = {
    // background: '#E48227 url(./images/si-glyph-magnifier.svg) 15px center no-repeat',
    background: 'url(imgpath) 15px center no-repeat, linear-gradient(top, #F29A30 5%, #E48227 50%)',
  };

  return (
    <Grid container>
      <linearGradient id="gradient1">
        <stop style={{ color: 'blue' }} offset="0%" />
        <stop style={{ color: 'red' }} offset="100%" />
      </linearGradient>
      <Svg style={{ fill: 'url(#gradient1)' }} />
      <div className={classes.base} style={color}> </div>
      <img className={classes.img} style={imgStyle} src={imgpath} alt="att" />
    </Grid>
  );
};
Jintai.defaultProps = {
  background: 'red',
};
Jintai.propTypes = {
  background: PropTypes.string,
};




export default Jintai;
