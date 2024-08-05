import { useState } from 'react'
import './App.css'
import Reminders from './pages/Reminders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Reminders/>
    </>
  )
}

export default App
