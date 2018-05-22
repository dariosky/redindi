import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Root from './components/Root'
import './styles/index.css'
import store from './store/Store'

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root'),
)

registerServiceWorker()
