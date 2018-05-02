import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import injectSheet from 'react-jss'

const styles = {
  zone: `
    border: 2px solid #464545;
    background: white;
    padding: 5px 15px;
    maxHeight: 2em;
    cursor: pointer;
  `,
}

class FileUpload extends Component {
  render() {
    const {onDrop, classes, children} = this.props
    return <Dropzone onDrop={onDrop} className={classes.zone}>
      {children}
    </Dropzone>
  }
}

FileUpload.propTypes = {
  onDrop: PropTypes.func.isRequired,
}

export default injectSheet(styles)(FileUpload)
