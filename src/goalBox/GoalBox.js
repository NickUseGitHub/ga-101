import React, { useEffect } from 'react'

export default function GoalBox() {
  useEffect(function() {
    console.log('GoalBox')
  }, [])

  return <div>GoalBox</div>
}
