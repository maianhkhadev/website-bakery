import React from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/index.scss'
import Root from './Root'
// import registerServiceWorker from './registerServiceWorker';

/**
* jQuery and Bootstrap includes
*/
window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

ReactDOM.render(<Root />, document.getElementById('root'))
// registerServiceWorker()
