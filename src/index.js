import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import HomePage from './pages/HomePage'

import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './styles.css'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  rootElement
);
