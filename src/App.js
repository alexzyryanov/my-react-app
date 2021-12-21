import React from "react";
import s from "./app.module.css";
import Header from "./header/header";
import Content from "./content/content";


function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Content/>
    </div>
  );
}


export default App;