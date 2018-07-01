import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Accomplishments from "./components/Accomplishments";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import "./styles/css/index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/nav" component={NavBar} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/accomplishments" component={Accomplishments} />
    </div>
  </Router>,
  document.getElementById("root")
);
