import { useState } from 'react'
// import './App.css'
import HelloHi from './HelloHi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloHi />
    </>
  )
}

export default App
