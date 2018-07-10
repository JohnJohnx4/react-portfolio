import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import "./styles/css/index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/experience" component={Experience} />
    </div>
  </Router>,
  document.getElementById("root")
);
