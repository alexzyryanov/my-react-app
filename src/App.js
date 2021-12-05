import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Content from "./content/content";
import { BrowserRouter } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar/>
        <Content data={props.data} printMessage={props.printMessage}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App;