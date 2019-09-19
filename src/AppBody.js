import React from 'react'
import AppGoalBox from './goalBox/AppGoalBox'
import trackEvent from './utils/ga/trackEvent'

function handleOnClickButtonHello(event) {
  event.preventDefault()
  trackEvent({
    dlCategory: 'EventHello',
    dlAction: 'click',
    dlLabel: 'Ga101',
  })
}

export default function AppBody() {
  return (
    <div>
      <h2>This Component just for complete goal</h2>
      <button onClick={handleOnClickButtonHello}>Click Hello Event</button>
      <AppGoalBox />
    </div>
  )
}
