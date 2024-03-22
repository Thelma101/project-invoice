
import React from 'react';
import iconArrowRight from '../assets/icon-arrow-right.svg';


const Invoices = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#141625] min-h-screen">
            <div className='justify-between w-3/5 mt-[-200px]'>
                <div className="flex items-center justify-between w-full">
                    <div className="items-center justify-between ">
                        <h2 className="text-4xl font-bold text-white">Invoice</h2>
                        {/* <p className="hidden text-gray-500 md:block">There are 7 invoices</p>
                    <p className="text-gray-500 md:hidden">7 invoices</p> */}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <p className="hidden text-white md:block"> Filter <span className='hidden md:block'>  by status </span></p>
                            <img src="" alt="" style={dropdownArrowStyle} />
                        </div>

                        <div className="flex items-center rounded-full bg-custom-btn md:w-40 md:h-14 justify-evenly bg-[#7c5dfa]">
                            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full cursor-pointer md:h-10 md:w-10">
                                <div className='text-[#7c5dfa] text-2xl cursor-pointer'>+</div>
                            </div>
                            <div className='flex items-center justify-center w-24 p-4 text-center text-white'>
                                New <span className='hidden md:block'>Invoice</span> 
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
