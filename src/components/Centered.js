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
    width: '100%',
  },
}

const Centered = (props) => {
  const {classes, padding} = props
  const style = {padding}
  return <div className={classes.centered}
              style={style}>
    {props.children}
  </div>
}

export default injectSheet(styles)(Centered)
