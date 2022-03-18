import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Params from './Praktikum/Params';
import NestingRouter from './Praktikum/NestingRouter';
import UseDirect from './Praktikum/UseRedirect';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Params />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <NestingRouter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <UseDirect />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
