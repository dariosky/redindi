import React from 'react';

const MainMenu = (props) => (
  <div style={{
    backgroundColor: 'rgba(100,0,0, 0.3)',
    minWidth: '300px',
    minHeight: '300px'
  }}>
    {props.children}
  </div>
);

export default MainMenu;

