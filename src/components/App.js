import React, {Component} from 'react'
import BreadCrumbTitle from './BreadCrumbTitle'
import Centered from './Centered'
import MainMenu from './MainMenu'
import Add from './Add'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Centered>
          <BreadCrumbTitle/>
          <Switch>
            <Route path="/"><MainMenu/></Route>
            <Route path="/add"><Add/></Route>
          </Switch>
        </Centered>
      </div>
    )
  }
}

export default App
