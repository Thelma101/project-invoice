import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Invoices />
      {/* <h1 className='text-center text-teal-700 '>Hello, how you doing?</h1> */}
      
    </>
  )
}

export default App
