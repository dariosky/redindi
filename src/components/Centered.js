import React from 'react';
const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
};

const Centered = (props) => (
  <div style={centerStyle}>
    {props.children}
  </div>
);

export default Centered;
