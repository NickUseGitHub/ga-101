import React, { useState } from 'react'
import trackEvent from '../utils/ga/trackEvent'
import GoalBox from './GoalBox'

export default function AppGoalBox() {
  const [isShowInnerBox, setIsShowInnerBox] = useState(false)
  const handleOnclickToShowInnerBox = event => {
    event.preventDefault()

    setIsShowInnerBox(!isShowInnerBox)

    isShowInnerBox === false &&
      trackEvent({
        dlCategory: 'ButtonBuyClick',
        dlAction: 'click',
        dlLabel: 'ButtonBuyClick',
        dlValue: 1,
      })
  }

  return (
    <div>
      <h2 onClick={handleOnclickToShowInnerBox}>AppGoalBox</h2>
      {isShowInnerBox === true && <GoalBox />}
    </div>
  )
}
