import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import injectSheet from 'react-jss'
import API from '../config'
import axios from 'axios/index'
import Progress from './common/Progress'
import Message from './common/Message'
import classNames from 'classnames'

const styles = {
  zone: {
    transition: 'all .5s ease',
    border: '2px solid #464545',
    background: 'white',
    padding: '5px 15px',
    maxHeight: '2em',
    cursor: 'pointer',

    '&.hidden': {
      overflow: 'hidden',
      height: 0,
      border: 0,
      padding: 0,
    },
  },

}


class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.messageDelay = 3000
    this.state = {
      uploading: false,
      progress: 0,
    }
  }


  clearMessage = () => {
    /* Clear the message and reallow-uploading*/
    this.setState({
      uploading: false,
      message: null,
      color: null,
    })
  }


  onDrop = acceptedFiles => {
    let data = new FormData()
    const uploader = this
    uploader.setState({
      uploading: true,
      progress: 0,
    })


    acceptedFiles.forEach(file => {
      console.info('Uploading', file)
      data.append('file', file)
    })
    const config = {
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        uploader.setState({
          progress: percentCompleted,
        })
      },
    }

    axios.post(API.uploadMini, data, config)
      .then(function (res) {
        uploader.setState({
          uploading: 'message',
          message: 'Upload done',
          background: 'green', color: 'white',
        })
        setTimeout(uploader.clearMessage, uploader.messageDelay)
        uploader.props.onUploadComplete(res.data)
      })
      .catch(function (err) {
        console.info(err.message)
        uploader.setState({
          uploading: 'message',
          message: `Error: ${err.message}`,
          background: 'tomato', color: 'white',
        })
        setTimeout(uploader.clearMessage, uploader.messageDelay)
      })

  }

  render() {
    const {classes, children} = this.props
    const state = this.state
    const dropzoneVisible = (state.uploading === false)
    const DEBUG = false
    return [
      <Dropzone key="dropzone" onDrop={this.onDrop}
                className={
                  classNames(classes.zone,
                    {'hidden': !dropzoneVisible})}>
        {children}
      </Dropzone>,
      <Progress key="progress" visible={state.uploading === true}
                progress={state.progress}/>,
      <Message key="msg" background={state.background}
               color={state.color}
               message={state.message}/>,
      DEBUG ? <div key="state" onClick={() => {
        this.setState((state) => {
          return {uploading: !state.uploading}
        })
      }}>
        {JSON.stringify(state)}
      </div> : '',
    ]
  }
}

FileUpload.propTypes = {
  onUploadComplete: PropTypes.func.isRequired,
}

export default injectSheet(styles)(FileUpload)
