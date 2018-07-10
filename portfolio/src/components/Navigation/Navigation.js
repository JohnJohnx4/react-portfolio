import React, { Component } from 'react';
import ApplicationBar from './ApplicationBar';
import FloatingActionButtons from './FloatingActionButtons';


class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
      <ApplicationBar />
      <FloatingActionButtons />
      </div>
    );
  }
}

export default Navigation;

