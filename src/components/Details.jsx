import React, { useContext, useState } from 'react';
import leftArrow from '../assets/icon-arrow-left.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';

const Details = () => {
  const { id } = useParams();
  const { dataValue } = useContext(ThemeContext);
  const navigate = useNavigate(); // Correct usage of useNavigate
  const [invoices, setInvoices] = useState(dataValue); // Initialize with the proper data
  const data = invoices.find(detail => detail.id === id);

  // Corrected handleEdit function
  const handleEdit = (invoiceId) => {
    console.log(`Edit invoice with ID: ${invoiceId}`);
    // Additional code for editing can be added here
  };

  // Corrected handleDelete function with navigate
  const handleDelete = (invoiceId) => {
    const updatedInvoices = invoices.filter(invoice => invoice.id !== invoiceId);
    setInvoices(updatedInvoices);
    alert(`Invoice ${invoiceId} has been deleted`);
    console.log(`Deleted invoice with ID: ${invoiceId}`);
    navigate('/'); // Navigate back after deletion
  };

  const handleMarkAsPaid = (invoiceId) => {
    const updatedInvoices = invoices.map(invoice =>
      invoice.id === invoiceId ? { ...invoice, status: 'Paid' } : invoice
    );
    setInvoices(updatedInvoices);
    alert(`Invoice ${invoiceId} marked as Paid.`);
    console.log(`Invoice ${invoiceId} marked as Paid.`);
  };

  return (
    <div className='mx-28 md:mx-[300px]'>
      <div className='mx-auto mb-6 text-gray-200'>
        <Link to="/" className="flex items-center justify-center gap-2">
          <div className='justify-center text-center mt-14'>
            <img src={leftArrow} alt='leftpointer' className='text-[#7c5dfa] mx-auto cursor-pointer' />
          </div>
          <div className='mt-14'>
            <p className='mx-auto cursor-pointer text-text-access'>Back</p>
          </div>
        </Link>

        <div className="flex items-center justify-between w-full mx-auto rounded-lg md:h-16 bg-card-bg">
          <div className="flex items-center justify-between w-full mx-4">
            <div className="flex items-center gap-3">
              <h2 className='text-main-text'>Status</h2>
              <div className={`flex items-center justify-end gap-3 px-3 py-2 rounded-lg ${data.status === 'Paid' ? 'bg-[#166534]' : data.status === 'Pending' ? 'bg-[#e3c949]' : 'bg-[#c64949]'}`}>
                <div className={`w-2 h-2 rounded-full md:w-2 md:h-2 justify-evenly ${data.status === 'Paid' ? 'bg-text-paid' : data.status === 'Pending' ? 'bg-text-pending' : 'bg-text-draft'}`} />
                <p className="text-sm font-light text-white">{data.status}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => handleEdit(id)} className="px-3 py-1 text-sm text-gray-500 bg-gray-300 rounded-full">Edit</button>
              <button onClick={() => handleDelete(id)} className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">Delete</button>
              <button
                onClick={() => handleMarkAsPaid(id)}
                className="px-3 py-1 text-sm text-white bg-purple-400 rounded-full"
              >
                Mark as Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
