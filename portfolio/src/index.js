import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import ExperiencePage from "./components/Experience/ExperiencePage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import Navigation from "./components/Navigation/Navigation";
import ContactPage from "./components/Contact/ContactPage";
import "./styles/css/index.css";

ReactDOM.render(
  <Router basename="/portfolio">
    <div>
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/experience" component={ExperiencePage} />
      <Route exact path="/contact" component={ContactPage} />
    </div>
  </Router>,
  document.getElementById("root")
);
