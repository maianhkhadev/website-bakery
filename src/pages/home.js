import React, { Component } from 'react';
import '@/assets/scss/pages/home.scss';

class Page extends Component {
  render() {
    return (
      <div className="">
        <section className="section-04">
          <div className="section-header">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title">The Jibarito sandwich</div>
                  <div className="subtitle">the best sandwich you’ve ever tasted!</div>
                  <img className="deco-01" src="@/assets/images/pages/home/section-04/deco-01.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
          </div>
        </section>
      </div>
    )
  }
}

export default Page
