import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-04">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="block">
                  <div className="block-header">
                    <div className="title">Breakfast</div>
                    <div className="subtitle">7AM Breakfast? We are open!</div>
                  </div>
                  <div className="block-content">
                    <div className="dish">
                      <div className="name">Full breakfast</div>
                      <div className="desc">Duis ut tortor, et risus, vulputate pretium</div>
                      <div className="value">$12.49</div>
                    </div>
                    <div className="dish">
                      <div className="name">Toast & Jam</div>
                      <div className="desc">Suspendisse, tempus, nterdum</div>
                      <div className="value">$4.90</div>
                    </div>
                    <div className="dish">
                      <div className="name">Muffins</div>
                      <div className="desc">Fusce eget dui sodales est</div>
                      <div className="value">$3.95</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 mx-auto">
                <div className="stack stack--mawar">
                  <div className="stack__item">
                    <div className="menu">
                      <div className="menu-content">
                        <div className="title">Your morning Escape with Flair</div>
                        <div className="content">Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.</div>
                        <button className="btn btn-outline-black">Read</button>
                      </div>
                    </div>
                  </div>
                  <div className="stack__item">
                    <div className="menu">
                      <div className="menu-content">
                        <div className="title">Your morning Escape with Flair</div>
                        <div className="content">Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.</div>
                        <button className="btn btn-outline-black">Read</button>
                      </div>
                    </div>
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
