import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Invoices from './components/Invoices'
import NewInvoice from './components/NewInvoice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider>
        <Navbar />
        <Invoices />
      </Provider>

      {/* <NewInvoice /> */}
      {/* <h1 className='text-center text-teal-700 '>Hello, how you doing?</h1> */}

    </>
  )
}

export default App