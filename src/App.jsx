import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Invoices from './components/Invoices';
import NewInvoice from './components/NewInvoice';
import { Provider } from './components/context/ThemeContext';
import Layout from './components/Layout';
import Details from './components/Details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  <Layout>
    <RouterProvider router = {router} />
  </Layout>
</Provider>
    
      {/* <Provider>
        <Navbar />
        <Invoices />
      </Provider> */}

      {/* <NewInvoice /> */}
      {/* <h1 className='text-center text-teal-700 '>Hello, how you doing?</h1> */}

    </>
  )
}

export default App;