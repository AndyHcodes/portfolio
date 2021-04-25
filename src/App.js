import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";
import AboutMe from "./components/Aboutme";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact-me" exact component={Contactme} />
          <Route path="/about-me" exact component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
