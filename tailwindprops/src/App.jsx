import { useState } from 'react'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-800 text-black p-4 rounded-xl font-bold'>Rajparno Dhar</h1>
    <Card/>
    </>
  )
}

export default App
