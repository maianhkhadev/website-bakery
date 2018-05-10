import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-05">
        <img className="deco-01 img-fluid" src={ require('@/assets/images/pages/home/section-05/deco-01.png') } alt=""/>

        <div className="section-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="title">The Jibarito sandwich</div>
                <div className="subtitle">the best sandwich you’ve ever tasted!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <div className="recipe">
                  <div className="thumbnail">
                    <img className="w-100" src={ require('@/assets/images/pages/home/section-05/im-02-small.jpg') } alt=""/>
                  </div>
                  <div className="name">Class aptent</div>
                  <div className="content">Quot alienum persecuti ut eam, nam ad atqui primis nusquam.</div>
                </div>
                <div className="recipe">
                  <div className="thumbnail">
                    <img className="w-100" src={ require('@/assets/images/pages/home/section-05/im-03-small.jpg') } alt=""/>
                  </div>
                  <div className="name">Nulla eget</div>
                  <div className="content">Nullam dictum felis eu pede mollis pretium Integer tincidunt.</div>
                </div>
                <div className="recipe">
                  <div className="thumbnail">
                    <img className="w-100" src={ require('@/assets/images/pages/home/section-05/im-04-small.jpg') } alt=""/>
                  </div>
                  <div className="name">Sed nibh purus</div>
                  <div className="content"> Aenean eleifend tellus leo ligula, porttitor eu, consequat vitae.</div>
                </div>
              </div>
              <div className="col-xl-8 offset-xl-1">
                <div className="main">
                  <div className="thumbnail">
                    <img className="w-100" src={ require('@/assets/images/pages/home/section-05/im-01.jpg') } alt=""/>

                    <div className="info">
                      <div className="data">
                        <div className="content">
                          <div className="name">Prep</div>
                          <div className="time">15</div>
                          <div className="unit">mins</div>
                        </div>
                      </div>
                      <div className="data">
                        <div className="content">
                          <div className="name">Cook</div>
                          <div className="time">15</div>
                          <div className="unit">mins</div>
                        </div>
                      </div>
                      <div className="data bc-white">
                        <div className="content">
                          <div className="name">Ready in</div>
                          <div className="time-2">50</div>
                          <div className="unit">mins</div>
                        </div>
                      </div>
                    </div>

                    <a className="view-detail">full recipe</a>
                  </div>
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
