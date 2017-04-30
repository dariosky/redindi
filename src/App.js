import React, {Component} from 'react';
import BreadCrumbTitle from './components/BreadCrumbTitle';
import Centered from './components/Centered';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Centered>
          <BreadCrumbTitle />
        </Centered>
      </div>
    );
  }
}

export default App;
