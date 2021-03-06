import React, {Component} from 'react'
import BreadCrumbTitle from './BreadCrumbTitle'
import Centered from './Centered'
import MainMenu from './MainMenu'
import {Route, Switch} from 'react-router-dom'
import Add from './Add'
import Settings from './Settings'
import Stats from './Stats'
import AuthChecker from './auth/AuthChecker'
import UnAuthenticated from './UnAuthenticated'
import injectStyles from 'react-jss'
import {hot} from 'react-hot-loader'

const styles = {
  content: `
    padding:20px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `,

  app: `
    height: 100%;
  `,

  '@font-face': `
    font-family: 'Purisa';
    src: url('/public/fonts/Purisa.eof'); /* For IE */
    src: local('Purisa'),
      url('/public/fonts/Purisa.ttf') format('truetype');
  `
};

class App extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.app}>
        <Centered>
          <BreadCrumbTitle/>
          <div className={classes.content}>
            {/*do the login form if not logged */}
            <AuthChecker UnAuthenticated={UnAuthenticated}>
              <Switch>
                <Route exact path="/"><MainMenu/></Route>
                <Route path="/add"><Add/></Route>
                <Route path="/settings"><Settings/></Route>
                <Route path="/stats"><Stats/></Route>
              </Switch>
            </AuthChecker>
          </div>
        </Centered>
      </div>
    )
  }
}

const styledApp = injectStyles(styles)(App);
export default hot(module)(styledApp)
