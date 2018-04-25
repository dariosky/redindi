import React, {Component} from 'react'
import BreadCrumbTitle from './BreadCrumbTitle'
import Centered from './Centered'
import MainMenu from './MainMenu'
import {Route, Switch} from 'react-router-dom'
import Add from './Add'
import Settings from './Settings'
import Stats from './Stats'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Centered>
          <BreadCrumbTitle/>
          <Centered>
            <Switch>
              <Route exact path="/"><MainMenu/></Route>
              <Route path="/add"><Add/></Route>
              <Route path="/settings"><Settings/></Route>
              <Route path="/stats"><Stats/></Route>
            </Switch>
          </Centered>
        </Centered>
      </div>
    )
  }
}

export default App
