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

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <ul className="nav nav-fill">
                  <li className="nav-item">
                    <a className="nav-link" href="#section-01">Our menu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-01">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-01">Culture</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2">
                <img className="w-100" src={ require('@/assets/images/logo.png') } alt=""/>
              </div>
              <div className="col-xl-5">
                <ul className="nav nav-fill">
                  <li className="nav-item">
                    <a className="nav-link" href="#section-01">Events</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-01">Catering</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-01">Visit us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Root
