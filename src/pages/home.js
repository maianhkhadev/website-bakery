import React, { Component } from 'react'
import '@/assets/scss/pages/home/index.scss'
import Section01 from './sections/section-01'
import Section02 from './sections/section-02'
import Section03 from './sections/section-03'
import Section04 from './sections/section-04'
import Section05 from './sections/section-05'

class Page extends Component {
  render() {
    return (
      <div>
        <Section01 />

        <Section02 />

        <Section03 />

        <Section04 />

        <Section05 />
      </div>
    )
  }
}

export default Page
