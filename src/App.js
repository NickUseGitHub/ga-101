import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import AppBody from './AppBody'
import trackPageview from './utils/ga/trackPageview'

function App() {
  useEffect(function() {
    trackPageview({})
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
