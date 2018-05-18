import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  centered: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100%',
  },
}

const Centered = (props) => {
  const {classes} = props
  return <div className={classes.centered}>
    {props.children}
  </div>
}

export default injectSheet(styles)(Centered)
