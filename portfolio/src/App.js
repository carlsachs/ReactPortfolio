import React from 'react';
import './App.css';

//router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import components
import HomeTop from "../src/components/HomeTop";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeTop />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
