import React, { useContext, useState } from 'react';
import iconArrowRight from '../assets/icon-arrow-right.svg';
import { dataInvoice } from './Data';
import { ThemeContext } from './context/ThemeContext';
import { Link } from 'react-router-dom';

const Invoices = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [dataValue, setDataValue] = useState(dataInvoice);
    return (
        <div className='bg-main-bg'>
            <div className="flex flex-col items-center justify-center pt-20">
                <div className='flex justify-between w-3/5'>
                    <div className="flex items-center justify-between w-full">
                        <div className="items-center justify-between">
                            <h2 className="text-4xl font-bold text-white">Invoice</h2>
                            {/* <p className="hidden text-gray-500 md:block">There are 7 invoices</p>
                    <p className="text-gray-500 md:hidden">7 invoices</p> */}
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center gap-4">
                                <p className="text-[12px] text-white w-full"> Filter <span className='hidden md:block'>  by status </span></p>
                                <img src="" alt="" style={dropdownArrowStyle} />
                            </div>

                            <div className=" bg-[#7c5dfa] w-[5rem] h-[2rem] md:w-[10rem] md:h-[3rem] rounded-full flex items-center justify-evenly text-white">
                                <div className="bg-white w-[20px] h-[20px] md:h-[40px] md:w-[40px] rounded-full  flex items-center justify-center text-[#7c5dfa]">
                                    +
                                </div>
                                <div className='flex items-center justify-center text-center text-white'>
                                    New&nbsp;<span className='hidden md:block'> Invoice</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {dataValue.map((value, index) => (
                <Link to={`/${value.id}`} key={value.id}>
                    <div className="md:mx-48">
                        <div className="md:mx-auto mt-10 mb-6 rounded-lg bg-card-bg border-2 border-[#151d29] hover:cursor-pointer  hover:border-[#7c5dfa] hover:border-2 justify-center">
                            <div className="flex flex-col items-center justify-center pt-3 pb-[70px] md:p-3 md:justify-between md:flex-row">
                                <div className="flex flex-col gap-12 md:flex-row">
                                    <div className="hidden font-bold text-white md:block ">{value.id}</div>
                                    <div className="hidden md:flex text-slate-400">Due {value.paymentDue}</div>
                                    <div className=" text-slate-400 absolute flex left-[140px] md:hidden">Due {value.paymentDue}</div>
                                    <div className="hidden md:flex text-slate-500">{value.clientEmail}</div>
                                    <div className="text-slate-500 absolute flex right-[140px] md:hidden">{value.clientEmail}</div>
                                </div>

                                <div className="flex items-start justify-start gap-4 md:items-center md:justify-center">
                                    <div className="hidden text-2xl font-bold text-white md:flex">$</div>
                                    <div className="font-bold text-white absolute md:hidden mt-10 text-sm flex left-[140px]">$</div>
                                    <div className="md:flex hidden items-center justify-between md:justify-center text-center bg-[#1F2C3F] px-5 py-3 gap-3 rounded-md text-white ">
                                        {/* <div className={`w-2 h-2 rounded-full md:w-2 md:h-2 justify-evenly ${value.status === 'paid' ? 'text-text-paid' : 'text-text-pending'}`} /> */}
                                        <div className={`w-2 h-2 rounded-full md:w-2 md:h-2 justify-evenly ${value.status === 'paid' ? 'bg-green-600' : value.status === 'pending' ? 'bg-yellow-400' : 'bg-red-600'}`} />


                                        {/* <p className={value.status === 'paid' ? 'text-text-paid' : 'text-text-pending'}>{value.status}</p> */}
                                        <p className={value.status === 'paid' ? 'text-text-paid' : value.status === 'pending' ? 'text-text-pending' : 'text-text-draft'}>{value.status}</p>

                                    </div>
                                    <div className='absolute flex right-[140px] mt-7 md:hidden items-center justify-end md:justify-center  bg-[#1F2C3F] px-4 py-1 gap-3 rounded-md text-white'>
                                        <div className={`w-2 h-2 rounded-full md:w-2 md:h-2 justify-evenly ${value.status === 'paid' ? 'bg-green-600' : value.status === 'pending' ? 'bg-yellow-400' : 'bg-red-600'}`} />
                                        <p className={value.status === 'paid' ? 'text-text-paid' : value.status === 'pending' ? 'text-text-pending' : 'text-text-draft'}>{value.status}</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <img src={iconArrowRight} alt="" className="flex items-center justify-center text-center" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Link>

            ))}
        </div >
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


