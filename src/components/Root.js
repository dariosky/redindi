import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {history} from '../store/Store'
import {ConnectedRouter} from 'react-router-redux'

import App from './App'

const Root = ({store}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
