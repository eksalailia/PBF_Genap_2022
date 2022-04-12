// import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose } from 'redux'
// import MainReducer from './reducers/MainReducer'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import MainReducer from "./reducers/MainReducer";
import CreateTodo from "./containers/CreateTodo/CreateTodo";
import Table from "./containers/CreateTodo/Table";
// ./react-dom.js
export {unstable_batchedUpdates} from "react-dom"


const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
  
reportWebVitals();