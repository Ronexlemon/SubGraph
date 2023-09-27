import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubQuerry from './components/Subquery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div  className='w-full h-screen bg-red-200 '>
<SubQuerry/>
        </div>
    </>
  )
}

export default App
