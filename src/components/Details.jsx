import React from 'react';
import leftArrow from '../assets/icon-arrow-left.svg';
import { Link } from 'react-router-dom';
import Invoices from './Invoices';

const Details = () => {
    return (
        <div className='mx-[300px]  mt-14'>
            <div className='mx-auto text-gray-200 '>
                <Link to={`'/' ${<Invoices />}`} className="flex items-center justify-center gap-2">
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
                            <div className="flex items-center justify-end gap-3 pt-3 pb-3 pl-5 pr-6 bg-green-900 rounded-lg ">
                                <p className="text-sm font-light text-gray-300">Paid</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-3 py-1 text-gray-500 rounded-full bg-custom-nav">Edit</button>
                            <button className="px-3 py-1 text-white bg-red-500 rounded-full">Delete</button>
                            <button className="hidden px-3 py-1 text-white bg-purple-400 rounded-full md:block">Mark as paid</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// return (
//   <div className="md:mt-[3rem] gap-3 flex flex-col justify-center items-center w-full relative">
//         <Link to="/" className="flex items-center justify-center gap-2">
//             <img src="./icon-arrow-left.svg" alt="Back" />
//             Back
//         </Link>
//         <div className="w-full md:h-[4.5rem] flex justify-center items-center bg-custom-base rounded-lg">
//             <div className="flex items-center justify-between w-full mx-4">
//                 <div className="flex items-center gap-3">
//                     <h2>Status</h2>
//                     <div className="flex items-center justify-end gap-3 pt-3 pb-3 pl-5 pr-6 rounded-lg bg-custom-paid_1">
//                         <p className="h-[10px] w-[10px] bg-custom-paid_2 rounded-full"></p>
//                         <p className="text-sm font-light text-custom-paid">Paid</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <button className="px-3 py-1 text-gray-500 rounded-full bg-custom-nav">Edit</button>
//                     <button className="px-3 py-1 text-white bg-red-500 rounded-full">Delete</button>
//                     <button className="hidden px-3 py-1 text-white bg-purple-400 rounded-full md:block">Mark as paid</button>
//                 </div>
//             </div>
//         </div>
//         <div className="relative flex items-center justify-center w-full p-8 mb-8 rounded-lg bg-custom-base">
//             {/* Invoice content goes here */}
//         </div>
//     </div>
// );

export default Details;