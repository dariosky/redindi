import React from 'react';
import Root from './components/Root';
import {render} from 'react-dom';
import './styles/index.css';
import store from './store/Store';
import registerServiceWorker from './registerServiceWorker';


render(
  <Root store={store}/>,
  document.getElementById('root')
);

registerServiceWorker();
