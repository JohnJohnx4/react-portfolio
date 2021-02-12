import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/projects' component={ProjectsPage} />
      </Router>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
