import React, { Component } from 'react';
import './Root.scss';
import Home from './pages/home'

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <main className="main">
          <Home />
        </main>
      </div>
    )
  }
}

export default Root
