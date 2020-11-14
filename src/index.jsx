import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import { App } from './App'
// import 'react-tabs/style/react-tabs.scss'
import 'react-datepicker/dist/react-datepicker.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
