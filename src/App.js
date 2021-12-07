import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Content from "./content/content";


function App(props) {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Content state={props.state} dispatch={props.dispatch}/>
      <Footer/>
    </div>
  );
}


export default App;