import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-01">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mx-auto text-center">
              <div className="title">Pastry with love</div>
              <div className="line"></div>
              <div className="subtitle">We’re bringing you fresh ingredients every day in ways you can’t resist.</div>
              <button className="btn btn-black">Our Menu</button>
            </div>
          </div>
        </div>
        <img className="deco-01" src={ require('@/assets/images/pages/home/section-01/deco-01.png') } alt=""/>
      </section>
    )
  }
}

export default Section
