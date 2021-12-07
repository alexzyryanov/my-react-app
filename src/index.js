import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";


export let renderMainApp = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  )
}


renderMainApp()
store.subs(renderMainApp)


reportWebVitals()