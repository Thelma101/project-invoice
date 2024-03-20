import React from 'react';
import '../assets/icon-arrow-right.svg';
import iconArrowRight from '../assets/icon-arrow-right.svg';
import sun from '../assets/icon-sun.svg';

const Invoices = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#1f2c3f]">
            <div className='justify-between w-3/5'>
                <div className="flex items-center justify-between w-full mt-[120px] ">
                    <div className="items-center justify-between ">
                        <h2 className="text-4xl font-bold">Invoice</h2>
                        {/* <p className="hidden text-gray-500 md:block">There are 7 invoices</p>
                    <p className="text-gray-500 md:hidden">7 invoices</p> */}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <p className="hidden md:block">Filter by status</p>
                            {/* <p className="md:hidden">Filter</p> */}
                            <img src="" alt="" style={dropdownArrowStyle} />
                        </div>

                        <div className="flex items-center rounded-full bg-custom-btn md:w-40 md:h-14 justify-evenly bg-[#7c5dfa]">
                            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full cursor-pointer md:h-10 md:w-10">
                                <div className='text-[#7c5dfa] text-2xl cursor-pointer'>+</div>
                            </div>
                            <div className='flex items-center justify-center text-center text-white'>
                                New invoice
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-10 mb-6 rounded-lg bg-[#1e2139] border-2 border-[#1f2c3f] hover:cursor-pointer  hover:border-[#7c5dfa] hover:border-2 justify-center">
                    <div className='flex items-center justify-between p-3'>
                        <div className='flex gap-12'>
                            <div className='font-bold '>#</div>
                            <div className='text-slate-400'>Due 2024-03-20 </div>
                            <div className='text-slate-500'>David Dunn</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='text-2xl font-bold'>$</div>
                            <div className='flex items-center justify-center text-center bg-[#1F2C3F] px-5 py-3 gap-3 rounded-md text-white'>
                                <div className='w-2 h-2 bg-green-600 rounded-full bg-custom-btn md:w-2 md:h-2 justify-evenly' />
                                <p className='text-sm text-green-500'>Paid</p>
                            </div>
                            <div>
                                <img src={iconArrowRight} alt="" className='flex items-center justify-center text-center' />
                            </div>
                        </div>
                    </div>


                    {/* <div className="hidden w-full bg-white rounded-lg md:block">
                        <div className="flex items-center justify-between w-full p-3">
                            <div className="flex flex-col items-center justify-start gap-2 md:flex-row md:gap-6">
                                <p className="font-bold"><span className="text-blue-500">#</span></p>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <p className="text-2xl font-bold">$</p>
                                <div className="flex items-center justify-end gap-3 pt-3 pb-3 pl-5 pr-6 bg-green-500 rounded-lg">
                                    <p className="w-4 h-4 bg-green-500 rounded-full"></p>
                                </div>
                                <p><img src="./icon-arrow-right.svg" alt="" /></p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="flex items-center justify-between w-full p-5 md:hidden">
                        <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:gap-6">
                            <p className="font-bold"></p>
                            <p className="text-sm font-bold">$</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5">
                            <div className="flex items-center justify-end gap-3 pt-3 pb-3 pl-5 pr-6 bg-green-500 rounded-lg">
                                <p className="w-4 h-4 bg-green-500 rounded-full"></p>
                            </div>
                        </div>
                    </div> */}
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
