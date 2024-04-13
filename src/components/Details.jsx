import React, { useContext } from 'react';
import leftArrow from '../assets/icon-arrow-left.svg';
import { Link, useParams } from 'react-router-dom';
import Invoices from './Invoices';
import { ThemeContext } from './context/ThemeContext';


const Details = () => {
    const { id } = useParams();
    const { dataValue } = useContext(ThemeContext);

    const data = dataValue.find(detail => detail.id === id)

    return (
        <div className='mx-32 md:mx-[300px]  mt-14'>
            <div className='mx-auto mb-8 text-gray-200'>
                <Link to={`/`} className="flex items-center justify-center gap-2">
                    <div className='justify-center text-center'>
                        <img src={leftArrow} alt='leftpointer' className='text-[#7c5dfa]] mx-auto cursor-pointer ' />
                    </div>
                    <div className=''>
                        <p className='mx-auto cursor-pointer text-text-access'>Back</p>
                    </div>
                </Link>

                <div className="flex items-center justify-center w-full mx-auto rounded-lg md:h-16 bg-main-bg">
                    <div className="flex items-center justify-between w-full mx-4">
                        <div className="flex items-center gap-3">
                            <h2>Status</h2>
                            <div className="flex items-center justify-end gap-3 px-3 py-2 bg-green-900 rounded-lg ">
                                <p className="text-sm font-light text-gray-300">{data.status}</p>
                                {/* <p className="text-sm font-light text-gray-300">Paid</p> */}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-3 py-1 text-sm text-gray-500 bg-gray-300 rounded-full">Edit</button>
                            <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">Delete</button>
                            <button className="hidden px-3 py-1 text-sm text-white bg-purple-400 rounded-full md:block">Mark as paid</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SENDER */}
            <div className="relative flex items-center justify-center w-full p-8 mb-8 rounded-lg bg-main-bg">
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
                    <div className="grid items-start justify-start w-full grid-cols-4 mt-10 md:grid-cols-6">
                        <div className="grid w-full col-span-2 grid-rows-5">
                            <div className="font-light text-main-text">Invoice Date</div>
                            <div className="font-bold text-[1.2rem]">{data.createdAt}</div>
                            <div></div>
                            <div className="font-light text-main-text">Payment Due</div>
                            <div className="font-bold text-[1.2rem]">{data.paymentDue}</div>
                        </div>
                        <div className="grid w-full col-span-2 grid-row-5">
                            <div className="font-light text-main-text">Bill to</div>
                            <div className="text-[1.2rem]">{data.clientName}</div>
                            <div className="font-thin text-main-text">{data.clientAddress.street}</div>
                            <div className="font-thin text-main-text">{data.clientAddress.city}</div>
                            <div className="font-thin text-main-text">{data.clientAddress.postCode}</div>
                            {/* <div className="font-thin text-gray-400">{data.clientAddress.country}</div> */}
                        </div>
                        <div className="grid w-full col-span-2 grid-row-5">
                            <div className="font-light textmain-text">Sent to</div>
                            <div className="col-span-5">{data.clientEmail}</div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between w-full mx-4 mt-10 flex-cols-4 pb-7">
                            {data.items.map((item, index) => (
                                <div key={index} className='flex gap-10 flex-cols-4'>
                                    <div className='' >
                                        <h3 className="text-gray-400 text-start">Item name</h3>
                                        <p className="text-center">{item.name}</p>

                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-start">Item name</h3>
                                        <p className="text-center">{item.name}</p>

                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-start">Item name</h3>
                                        <p className="text-center">{item.name}</p>

                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-start">Item name</h3>
                                        <p className="text-center">{item.name}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>





                    <div className="bg-total-bg rounded-b-lg h-[6rem] w-full mt-8">
                        <div className="flex items-start justify-between p-10 rounded-lg rounded-t-none">
                            <h2 className="text-2xl font-semibold text-white">{data.amount}</h2>
                            <h2 className="text-2xl font-semibold text-white">£{data.total}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Details;