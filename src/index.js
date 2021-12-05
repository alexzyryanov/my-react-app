import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from "./DataForApp.js"
import {printMessage} from "./DataForApp.js"


ReactDOM.render(
  <React.StrictMode>
    <App data={data} printMessage={printMessage} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();