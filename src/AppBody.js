import React from 'react'
import trackEvent from './utils/ga/trackEvent'

function handleOnClickButtonHello(event) {
  event.preventDefault()

  alert('TrackEvent Hello!')

  trackEvent({
    eventCategory: 'EventHello',
    eventAction: 'click',
    eventLabel: 'Ga101',
  })
}

export default function AppBody() {
  return (
    <div>
      <h2>This Component just for complete goal</h2>
      <button onClick={handleOnClickButtonHello}>Click Hello Event</button>
    </div>
  )
}
