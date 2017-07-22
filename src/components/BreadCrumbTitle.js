import React from 'react';
import PropTypes from 'prop-types';

const style = {
  // background: 'darkorange',
  color: 'black',
  textAlign: 'center',
};

const BreadCrumbTitle = () => (
  <div style={style}>
    <h1>Dindi</h1>
    <div style={{marginBottom: '20px'}}>
      being obsessed with finance flows
    </div>
  </div>
);

BreadCrumbTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default BreadCrumbTitle;
