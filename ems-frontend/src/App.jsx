import { useState } from 'react'
import ListEmployeeComponent from './ListEmployeeComponent'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListEmployeeComponent />
    </>
  )
}

export default App
