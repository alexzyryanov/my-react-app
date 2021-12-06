import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from "./DataForApp.js";
import { printMessage } from "./DataForApp.js";
import { BrowserRouter } from "react-router-dom";


export let renderEntireTree = (data) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App data={data} printMessage={printMessage} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  )
}


renderEntireTree(data)
reportWebVitals()