import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import Invoices from './components/Invoices'
import NewInvoice from './components/NewInvoice'
import { ThemeContext } from './components/context/ThemeContext'
import { Provider } from './components/context/ThemeContext'
import Details from './components/Details'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
const router = createBrowserRouter([
  {
    path : '/', element : <Invoices />
  },
  {
    path : '/:id', element : <Details />
  }
])

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

export default App;