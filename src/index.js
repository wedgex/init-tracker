import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import './index.css';
import 'bulma/css/bulma.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
