import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import AppBody from './AppBody'
import { trackPageview, trackExperiment } from './utils/ga'

function App() {
  useEffect(function() {
    trackPageview({})

    setTimeout(function() {
      trackExperiment('event', 'optimize.callback', {
        name: 'xjXG2Ud0R-CkjKYc_EWsgw',
        callback: function(value) {
          console.log('value from ab value -', value)
        },
      })
    }, 1000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AppBody />
    </div>
  )
}

export default App
