import React, { Component } from 'react'
import '@/assets/scss/libraries/slick.scss'

require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
require('slick-carousel/slick/slick.js')

class Slick extends Component {

  constructor(props) {
    super(props)

    this.state = {
      options: {

      }
    }
  }

  componentDidMount() {
    let self = this
    let options = self.props.options ? self.props.options : self.state.options
    window.$(self.refs.slick).slick(options)
  }

  render() {
    let self = this

    return (
      <div ref="slick">
        {self.props.children}
      </div>
    )
  }
}

export default Slick
