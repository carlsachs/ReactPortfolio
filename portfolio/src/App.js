import React from 'react';
import './App.css';

//router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import components
import Home from "../src/components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
