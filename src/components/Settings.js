import React, {Component} from 'react'
import FileUpload from './FileUpload'
import axios from 'axios'
import API from '../config'

class Add extends Component {
  mini$Upload = acceptedFiles => {
    let data = new FormData()
    acceptedFiles.forEach(file => {
      console.info('Uploading', file)
      data.append('file', file)
    })
    const config = {
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.debug(percentCompleted)
      },
    }

    axios.post(API.uploadMini, data, config)
      .then(function (res) {
        console.info('Upload done')
        // output.className = 'container'
        // output.innerHTML = res.data
      })
      .catch(function (err) {
        console.info(err.message)
      })

  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <p>You have your options</p>
        <div>
          <FileUpload onDrop={this.mini$Upload}>
            Add transactions from mini$...
          </FileUpload>
        </div>
      </div>

    )
  }
}

export default Add
