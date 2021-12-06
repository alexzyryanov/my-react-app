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
      <Content data={props.data} printMessage={props.printMessage}/>
      <Footer/>
    </div>
  );
}


export default App;