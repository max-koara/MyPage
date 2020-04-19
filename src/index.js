import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'

// もともとのコード
//ReactDOM.render(
//  <h1>Hello, React! my hands on </h1>,
//  document.getElementById('root')
//);
//　新しいコード
const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
  <h1>Hello, React! my hands on </h1>
  <App />
  </>,
  rootElement
);