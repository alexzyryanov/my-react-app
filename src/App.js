import React from "react";
import s from "./app.module.css";
import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";


function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}


export default App;