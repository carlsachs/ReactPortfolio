import React from 'react';
import './App.css';

//import components
import HomeTop from "../src/components/HomeTop";
import UnderTop from "./components/UnderTop";

function App() {
  return (
    <div className="AppWrap">
      <HomeTop />
      <UnderTop />
    </div>
  )
}

export default App;
