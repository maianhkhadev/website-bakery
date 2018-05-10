import React, { Component } from 'react'
import Slick from '@/libraries/slick'

class Section extends Component {

  constructor(props) {
    super(props)

    this.state = {
      options: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  }

  render() {
    return (
      <section className="section-03">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 ml-auto">
                <div className="thumbnail">
                  <img className="" src={ require('@/assets/images/pages/home/section-03/im-01.jpg') } alt=""/>
                </div>
              </div>
              <div className="col-xl-5 mr-auto">
                <div className="block">
                  <img className="deco-01 img-fluid" src={ require('@/assets/images/pages/home/section-03/deco-01.png') } alt=""/>

                  <div className="name">Tasty pancakes</div>
                  <div className="notice">season favourite</div>
                  <p className="content">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.</p>
                  <Slick options={ this.state.options }>
                    <div className="slick-item">
                      <div className="thumbnail">
                        <img className="w-100" src={ require('@/assets/images/pages/home/section-03/slide-01.jpg') } alt=""/>
                       </div>
                    </div>
                    <div className="slick-item">
                      <div className="thumbnail">
                        <img className="w-100" src={ require('@/assets/images/pages/home/section-03/slide-01.jpg') } alt=""/>
                       </div>
                    </div>
                    <div className="slick-item">
                      <div className="thumbnail">
                        <img className="w-100" src={ require('@/assets/images/pages/home/section-03/slide-01.jpg') } alt=""/>
                       </div>
                    </div>
                    <div className="slick-item">
                      <div className="thumbnail">
                        <img className="w-100" src={ require('@/assets/images/pages/home/section-03/slide-01.jpg') } alt=""/>
                       </div>
                    </div>
                    <div className="slick-item">
                      <div className="thumbnail">
                        <img className="w-100" src={ require('@/assets/images/pages/home/section-03/slide-01.jpg') } alt=""/>
                       </div>
                    </div>
                    <div className="slick-item">
                      <div className="thumbnail">
                        <img className="w-100" src={ require('@/assets/images/pages/home/section-03/slide-01.jpg') } alt=""/>
                       </div>
                    </div>
                  </Slick>
                </div>
              </div>
            </div>

            <div className="test">
              <div className="time-to-cook">
                <div className="content">
                  <div className="name">Ready in</div>
                  <div className="time">50</div>
                  <div className="unit">mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section
