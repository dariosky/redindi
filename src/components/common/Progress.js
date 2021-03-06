import React, {Component} from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  progress: `
    overflow: hidden;
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
  `,
  complete: `
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-attachment: fixed;
    background: repeating-linear-gradient(
      -55deg,
      #aaa,
      #bbb 10px,
      #bbb 10px,
      #aaa 20px
    );
  `,
  text: `
    position: absolute;
    color: black;
    font-weight: bolder;
  `
}

class Progress extends Component {
  render() {
    const {progress, classes, visible} = this.props
    const text = visible ? <div className={classes.text}>
      Uploading: {progress}%
    </div> : null

    return <div className={classes.progress}
                style={{height: visible ? '40px' : 0}}
    >
      <div className={classes.complete}
           style={{width: `${progress}%`}}/>
      {text}
    </div>
  }
}

Progress.propTypes = {
  visible: PropTypes.bool,
  progress: PropTypes.number.isRequired,
}

export default injectSheet(styles)(Progress)
