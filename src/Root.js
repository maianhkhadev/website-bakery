import React, { Component } from 'react'
import './Root.scss';
import Home from './pages/home'

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <header>
          <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={ require('@/assets/images/white-name.png') } alt=""/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Welcome</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Menu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Reservations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
                <span className="navbar-text">
                  <a className="icon" href="#">
                    <img src={ require('@/assets/images/icon-01.png') } alt=""/>
                  </a>
                  <a className="icon" href="#">
                    <img src={ require('@/assets/images/icon-02.png') } alt=""/>
                  </a>
                  <a className="icon" href="#">
                    <img src={ require('@/assets/images/icon-03.png') } alt=""/>
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </header>

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
                <img className="w-100" src={ require('@/assets/images/black-name.png') } alt=""/>
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
