import React from 'react';
const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100%'
};

const Centered = (props) => (
  <div style={centerStyle}>
    {props.children}
  </div>
);

export default Centered;
