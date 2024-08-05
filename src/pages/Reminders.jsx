import React from 'react'
import Today from '../components/Today'
import Later from '../components/Later'

function reminders() {
  return (
    <>
      <div>
        TO DO:
      </div>
    <Today/>
    <Later/>
    </>
  )
}

export default reminders