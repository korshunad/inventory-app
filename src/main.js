import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import 'babel-polyfill'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  api  from './redux/modules/api'

const inventoryState = combineReducers({
 api
});

let store = createStore(inventoryState, applyMiddleware(thunk));


render(
  <Provider store={store} key='provider'>
    <App/>
  </Provider>,
  document.getElementById('container')
)


