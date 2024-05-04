import React, { useContext, useState } from 'react';
import leftArrow from '../assets/icon-arrow-left.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Invoices from './Invoices';
import { ThemeContext } from './context/ThemeContext';



const Details = () => {
    const { id } = useParams();
    const { dataValue } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [invoices, setInvoices] = useState(dataValue);
    const data = invoices.find(detail => detail.id === id);


    const handleEdit = (invoiceId) => {
        console.log(`Edit invoice with ID: ${invoiceId}`);
        navigate(`/${invoiceId}`); 
    };

    const handleDelete = (invoiceId) => {
        const isConfirmed = confirm(`Are you sure you want to delete invoice ${invoiceId}?`);
        if (isConfirmed) {
            const updatedInvoices = invoices.filter(invoice => invoice.id !== invoiceId);
            setInvoices(updatedInvoices);
            alert
            // Perform any additional actions, such as sending a request to the server to delete the invoice
            console.log(`Deleted invoice with ID: ${invoiceId}`);
            navigate('/');
        }
    };

    const handleMarkAsPaid = (invoiceId) => {
        const updatedInvoices = invoices.map(invoice =>
            invoice.id === invoiceId ? { ...invoice, status: 'Paid' } : invoice
        );
        setInvoices(updatedInvoices);
        console.log(`Invoice ${invoiceId} marked as paid.`);
    };


    return (
        <div className='mx-28 md:mx-[300px]'>
            <div className='mx-auto mb-6 text-gray-200'>
                <Link to={`/`} className="flex items-center justify-center gap-2">
                    <div className='justify-center text-center mt-14'>
                        <img src={leftArrow} alt='leftpointer' className='text-[#7c5dfa]] mx-auto cursor-pointer ' />
                    </div>
                    <div className='mt-14'>
                        <p className='mx-auto cursor-pointer text-text-access'>Back</p>
                    </div>
                </Link>

                <div className="flex items-center justify-center w-full mx-auto rounded-lg md:h-16 bg-card-bg">
                    <div className="flex items-center justify-between w-full mx-4">
                        <div className="flex items-center gap-3">
                            <h2 className='text-main-text'>Status</h2>
                            <div className={`flex items-center justify-end gap-3 px-3 py-2 rounded-lg ${data.status === 'Paid' ? 'bg-[#166534]' : data.status === 'Pending' ? 'bg-[#e3c949]' : 'bg-[#c64949]'}`}>
                                <div className={`w-2 h-2 rounded-full md:w-2 md:h-2 justify-evenly ${data.status === 'Paid' ? 'bg-text-paid' : data.status === 'Pending' ? 'bg-text-pending' : 'bg-text-draft'}`} />
                                <p className="text-sm font-light text-white">{data.status}</p>
                            </div>
                        </div>
                        {/* <div className="flex items-center gap-3">
                            <button onClick={handleEdit} className="px-3 py-1 text-sm text-gray-500 bg-gray-300 rounded-full">Edit</button>
                            <button onClick={handleDelete} className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">Delete</button>
                            <button onClick={handleMarkAsPaid} className="hidden px-3 py-1 text-sm text-white bg-purple-400 rounded-full md:block">Mark as Paid</button>
                        </div> */}

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

            {/* SENDER */}
            <div className="relative flex items-center justify-center w-full p-8 mb-8 rounded-lg bg-card-bg">
                <div className="flex flex-col justify-end w-full pt-6 mx-4 pb-7">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="font-bold text-gray-400">{data.id}</h2>
                            <p className="text-gray-400">{data.clientName}</p>
                        </div>
                        <div className="flex flex-col items-end justify-end text-main-text">
                            <p>{data.senderAddress.street}</p>
                            <p>{data.senderAddress.city}</p>
                            <p>{data.senderAddress.postCode}</p>
                            <p>{data.senderAddress.country}</p>
                        </div>
                    </div>

                    {/* CLIENT */}
                    <div className="grid items-start justify-start w-full grid-cols-4 mt-7 md:grid-cols-6">
                        <div className="grid w-full col-span-2 grid-rows-5">
                            <div className="font-light text-main-text">Invoice Date</div>
                            <div className="font-bold text-[0.9rem] text-main-text">{data.createdAt}</div>
                            <div></div>
                            <div className="font-light text-main-text">Payment Due</div>
                            <div className="font-bold text-[0.9rem] text-main-text">{data.paymentDue}</div>
                        </div>
                        <div className="grid w-full col-span-2 grid-row-5">
                            <div className="font-light text-main-text">Bill to</div>
                            <div className="text-[1.2rem] text-main-text mb-4">{data.clientName}</div>
                            <div className="font-thin text-main-text">{data.clientAddress.street}</div>
                            <div className="font-thin text-main-text">{data.clientAddress.city}</div>
                            <div className="font-thin text-main-text">{data.clientAddress.postCode}</div>
                            {/* <div className="font-thin text-gray-400">{data.clientAddress.country}</div> */}
                        </div>
                        <div className="grid w-full col-span-2 grid-row-5">
                            <div className="font-light text-main-text">Sent to</div>
                            <div className="col-span-5 text-main-text">{data.clientEmail}</div>
                        </div>
                    </div>

                    <div className='w-full mt-8 rounded-lg bg-main-bg'>
                        <div className="grid px-3 py-12 rounded bg-nav-bg">
                            {data.items.map((item, index) => (
                                <div key={index} className="grid grid-cols-4 mb-5 justify-items-center">
                                    <div className="">
                                        <h3 className="text-gray-400">Item name</h3>
                                        <p className='text-main-text'>{item.name}</p>
                                    </div>
                                    <div className="">
                                        <h3 className="text-gray-400">Qty</h3>
                                        <p>{item.quantity}</p>
                                    </div>
                                    <div className="">
                                        <h3 className="text-gray-400">Item price</h3>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="">
                                        <h3 className="text-gray-400">Total</h3>
                                        <p>£{item.total}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-total-bg rounded-b-lg h-[6rem] w-full">
                        <div className="flex items-start justify-between p-10 rounded-lg rounded-t-none">
                            <h2 className="text-2xl font-semibold text-white">Amount</h2>
                            <h2 Name="text-2xl font-semibold text-white">{data.amount}</h2>
                            <h2 className="text-2xl font-semibold text-white">£{data.total}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;