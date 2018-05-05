import React, {Component} from 'react'
import FileUpload from './FileUpload'

class Add extends Component {
  mini$Upload = (data) => {
    console.info('Upload completed', data)
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <p>You have your options</p>
        <div>
          <FileUpload onUploadComplete={this.mini$Upload}>
            Add transactions from mini$...
          </FileUpload>
        </div>
      </div>

    )
  }
}

export default Add
