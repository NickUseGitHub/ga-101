import React from 'react'
import { logEvent } from './utils/ga'

function handleOnClick(event) {
  event.preventDefault()

  logEvent({
    dlCategory: 'nickcategory',
    dlAction: 'click',
    dlLabel: 'nickLabel',
  })
}

export default function AppBody() {
  return (
    <div className="body-container">
      <h2>Click me</h2>
      <button onClick={handleOnClick}>Buy it today!</button>
    </div>
  )
}
