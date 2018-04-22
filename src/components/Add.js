import React, {Component} from 'react'
import BreadCrumbTitle from './BreadCrumbTitle'
import Centered from './Centered'

class Add extends Component {
  render() {
    return (
      <div className="App">
        <Centered>
          <BreadCrumbTitle title="Add"/>
        </Centered>
      </div>
    )
  }
}

export default Add
