import React, {Component} from 'react';
import BreadCrumbTitle from './BreadCrumbTitle';
import Centered from './Centered';
import MainMenu from './MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Centered>
          <BreadCrumbTitle />
          <MainMenu />
        </Centered>
      </div>
    );
  }
}

export default App;
