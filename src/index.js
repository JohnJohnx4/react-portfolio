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
        <MainPage />
        <ProjectsPage />
        <AboutPage />
        <ContactPage />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
