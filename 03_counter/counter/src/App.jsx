import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, ra] = useState(0)
  // let counter = 15
  const addValue=() =>{
    console.log("Clicked",counter)
    ra(counter+1)
  }
  const minValue=() =>{
    console.log("Clicked",counter)
    ra(counter-1)
  }

  return (
    <>
      <h1>
        Chai Aur React
      </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={minValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
