import React, { useContext } from 'react';
import leftArrow from '../assets/icon-arrow-left.svg';
import { Link, useParams } from 'react-router-dom';
import Invoices from './Invoices';
import { ThemeContext } from './context/ThemeContext';


const Details = () => {
    const {id} = useParams();
    const dataValue = useContext(ThemeContext); 
console.log(dataValue);
    const data = dataValue.find(detail => detail.id === id)
    console.log(data);
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

                <div className="flex items-center justify-center w-full mx-auto rounded-lg md:h-16 bg-[#1e2139]">
                    <div className="flex items-center justify-between w-full mx-4">
                        <div className="flex items-center gap-3">
                            <h2>Status</h2>
                            <div className="flex items-center justify-end gap-3 px-3 py-2 bg-green-900 rounded-lg ">
                                {/* <p className="text-sm font-light text-gray-300">{data.id}</p> */}
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

            <div className="w-full p-8 flex justify-center relative items-center mb-8 bg-[#1e2139] rounded-lg">
                <div className="flex flex-col justify-end w-full pt-6 mx-4 pb-7">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="font-bold text-gray-400"># FA98C</h2>
                            <p className="text-gray-400">providence Reaseach limited</p>
                        </div>
                        <div className="flex flex-col items-end justify-end text-gray-400">
                            <p>flat 23, Peter Odili Road</p>
                            <p>Port Harcourt</p>
                            <p>50032</p>
                            <p>Nigeria</p>
                        </div>
                    </div>
                    <div className="grid items-start justify-start w-full grid-cols-4 mt-10 md:grid-cols-6">
                        <div className="grid w-full col-span-2 grid-rows-5">
                            <div className="font-light text-gray-400">Invoice Date</div>
                            <div className="font-bold text-[1.2rem]">2023-08-19</div>
                            <div></div>
                            <div className="font-light text-gray-400">Payment Due</div>
                            <div className="font-bold text-[1.2rem]">2023-08-30</div>
                        </div>
                        <div className="grid w-full col-span-2 grid-row-5">
                            <div className="font-light text-gray-400">Bill to</div>
                            <div className="text-[1.2rem]">providence Reaseach limited</div>
                            <div className="font-thin text-gray-400">74, Joyce B</div>
                            <div className="font-thin text-gray-400">Ibadan</div>
                            <div className="font-thin text-gray-400">23401</div>
                            <div className="font-thin text-gray-400"></div>
                        </div>
                        <div className="grid w-full col-span-2 grid-row-5">
                            <div className="font-light text-gray-400">Sent to</div>
                            <div className="col-span-5">provider@gmail.com</div>
                        </div>
                    </div>
                    <div className="grid bg-[#1e2139] w-full items-center pt-6 rounded-t-lg rounded-b-lg mt-20">
                        <div className="grid grid-cols-4 md:grid-cols-8 bg-[#1e2139] mx-auto w-full pb-7">
                            <div className="flex flex-col items-center justify-start w-full col-span-2 text-start">
                                <h3 className="text-gray-400 text-start">Item name</h3>
                                <p className="text-center"></p>
                            </div>
                            <div className="hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                                <h3 className="text-gray-400">Qty</h3>
                                <p>1</p>
                            </div>
                            <div className="hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                                <h3 className="text-gray-400">Item price</h3>
                                <p>300</p>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                                <h3 className="text-gray-400">Total</h3>
                                <p>£300</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-8 bg-[#1e2139] mx-auto w-full pb-7">
                            <div className="flex flex-col items-center justify-start w-full col-span-2 text-start">
                                <h3 className="text-gray-400 text-start">Item name</h3>
                                <p className="text-center"></p>
                            </div>
                            <div className="hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                                <h3 className="text-gray-400">Qty</h3>
                                <p>2</p>
                            </div>
                            <div className="hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                                <h3 className="text-gray-400">Item price</h3>
                                <p>199</p>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                                <h3 className="text-gray-400">Total</h3>
                                <p>£398</p>
                            </div>
                        </div>
                        <div className="bg-[#070a1a] rounded-b-lg h-[6rem] w-full mt-8">
                            <div className="flex items-start justify-between p-10 rounded-lg rounded-t-none">
                                <h2 className="text-2xl font-semibold text-white">Amount</h2>
                                <h2 className="text-2xl font-semibold text-white">£698</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


//         <div className="relative flex items-center justify-center w-full p-8 mb-8 rounded-lg bg-custom-base">


export default Details;