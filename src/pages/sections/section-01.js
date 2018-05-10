import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-01">
        <div className="section-content">
        </div>
        <img className="deco-01" src={ require('@/assets/images/pages/home/section-01/deco-01.png') } alt=""/>
      </section>
    )
  }
}

export default Section
