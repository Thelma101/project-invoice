import React, { useState } from 'react';
import iconArrowRight from '../assets/icon-arrow-right.svg';
import { dataInvoice } from './Data';

const Invoices = () => {
    const [dataValue, setDataValue] = useState(dataInvoice)
    return (
        <div className='bg-[#141625]'>
            <div className="flex flex-col items-center justify-center pt-20">
                {dataValue.map((value, index) => (
                    <div className='justify-between md:w-3/5'>
                        <div className="flex items-center justify-between w-full px-3">
                            <div className="items-center justify-between ">
                                <h2 className="text-4xl font-bold text-white">Invoice</h2>
                                {/* <p className="hidden text-gray-500 md:block">There are 7 invoices</p>
                    <p className="text-gray-500 md:hidden">7 invoices</p> */}
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <div className="flex items-center justify-center gap-4">
                                    <p className="text-[12px] text-white w-full"> Filter <span className='hidden md:block'>  by status </span></p>
                                    <img src="" alt="" style={dropdownArrowStyle} />
                                </div>

                                <div class=" bg-[#7c5dfa] w-[5rem] h-[2rem] md:w-[10rem] md:h-[3rem] rounded-full flex items-center justify-evenly text-white">
                                    <div class="bg-white w-[20px] h-[20px] md:h-[40px] md:w-[40px] rounded-full  flex items-center justify-center text-[#7c5dfa]">
                                        +
                                    </div>
                                    <div className='flex items-center justify-center text-center text-white'>
                                        New&nbsp;<span className='hidden md:block'> Invoice</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div key={value.id} className= "md:mx-auto mt-10 mb-6 rounded-lg bg-[#1e2139] border-2 border-[#151d29] hover:cursor-pointer  hover:border-[#7c5dfa] hover:border-2 justify-center">
                            <div className="flex flex-col items-center justify-center pt-3 pb-[70px] md:p-3 md:justify-between md:flex-row">
                                <div className="flex flex-col gap-12 md:flex-row">
                                    <div className="hidden font-bold text-white md:block"> {value.id} </div>
                                    <div className="hidden md:flex text-slate-400">Due {value.paymentDue} </div>
                                    <div className=" text-slate-400 absolute flex left-[140px] md:hidden">Due {value.paymentDue} </div>
                                    <div className="hidden md:flex text-slate-500"> {value.clientEmail} </div>
                                    <div className="text-slate-500 absolute flex right-[140px] md:hidden">{value.clientEmail} </div>
                                </div>
                                <div className="flex items-start justify-start gap-4 md:items-center md:justify-center">
                                    <div className="hidden text-2xl font-bold text-white md:flex">$</div>
                                    <div className="font-bold text-white absolute md:hidden mt-10 text-sm flex left-[140px]">$</div>
                                    <div className="md:flex hidden items-center justify-between md:justify-center text-center bg-[#1F2C3F] px-5 py-3 gap-3 rounded-md text-white ">
                                        {/* <div className="hidden md:flex items-center justify-between md:justify-center text-center bg-[#1F2C3F] px-5 py-3 gap-3 rounded-md text-white"> */}
                                        <div className="w-2 h-2 bg-green-600 rounded-full md:w-2 md:h-2 justify-evenly" />
                                        <p className="text-sm text-green-500">{value.status}</p>
                                    </div>
                                    {/* <div className="flex relative right-18 mt-4 md:hidden items-center justify-end md:justify-center  bg-[#1F2C3F] px-4 py-1 gap-3 rounded-md text-white"> */}
                                    <div className='absolute flex right-[140px] mt-7 md:hidden items-center justify-end md:justify-center  bg-[#1F2C3F] px-4 py-1 gap-3 rounded-md text-white'>
                                        <div className="w-2 h-2 bg-green-600 rounded-full md:w-2 md:h-2 justify-evenly" />
                                        <p className={value.status === 'paid' ? 'text-green-300' : 'text-yellow-300'}>{value.status} </p>
                                    </div>

                                    <div className="hidden md:block">
                                        <img src={iconArrowRight} alt="" className="flex items-center justify-center text-center" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="mx-auto mt-10 mb-6 rounded-lg bg-[#1e2139] border-2 border-[#151d29] hover:cursor-pointer  hover:border-[#7c5dfa] hover:border-2 justify-center">
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex gap-12'>
                                    <div className='font-bold text-white'>#</div>
                                    <div className='text-slate-400'>Due 2024-03-20 </div>
                                    <div className='text-slate-500'>David Dunn</div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='text-2xl font-bold text-white'>$</div>
                                    <div className='flex items-center justify-center text-center bg-[#1F2C3F] px-5 py-3 gap-3 rounded-md text-white'>
                                        <div className='w-2 h-2 bg-green-600 rounded-full bg-custom-btn md:w-2 md:h-2 justify-evenly' />
                                        <p className='text-sm text-green-500'>Paid</p>
                                    </div>
                                    <div>
                                        <img src={iconArrowRight} alt="" className='flex items-center justify-center text-center' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Inline style for dropdown arrow
const dropdownArrowStyle = {
    border: 'solid #7c5dfa',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(45deg)',
    WebkitTransform: 'rotate(45deg)'
};

export default Invoices;
