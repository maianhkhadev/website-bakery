import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-02">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="block">
                  <div className="block-header">
                    <div className="title">Art of cakes</div>
                    <div className="subtitle">We create delicious memories</div>
                  </div>
                  <p className="content">Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed.</p>
                  <div className="title">Chef Cook</div>
                  <ul className="chef-info">
                    <li className="name">Benito</li>
                    <li className="avatar"><img className="w-100" src={ require('@/assets/images/pages/home/section-02/chef.jpg') } alt=""/></li>
                    <li className="name">Gaspare</li>
                  </ul>
                  <div className="ty">
                    Unique creations for unique occasions.
                    <img className="start-text" src={ require('@/assets/images/pages/home/section-02/icon-01.png') } alt=""/>
                    <img className="end-text" src={ require('@/assets/images/pages/home/section-02/icon-02.png') } alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <img className="w-100" src={ require('@/assets/images/pages/home/section-02/im-01.png') } alt=""/>
              </div>
            </div>
          </div>
        </div>
        <img className="deco-01" src={ require('@/assets/images/pages/home/section-02/deco-01.png') } alt=""/>
      </section>
    )
  }
}

export default Section
