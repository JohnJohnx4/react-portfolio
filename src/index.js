import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Layout from './layout/Layout';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router>
      <Fade in={true}><Route exact path='/' component={MainPage} /></Fade>
        <Fade in={true}><Route path='/about' component={AboutPage} /></Fade>
        <Fade in={true}><Route path='/contact' component={ContactPage} /></Fade>
        <Fade in={true}><Route path='/projects' component={ProjectsPage} /></Fade>
      </Router>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
