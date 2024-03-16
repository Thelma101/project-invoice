import React from 'react';

const Invoices = () => {
    return (
        <div className="flex flex-col items-center justify-end mx-[200px]">
            <div className="relative flex items-center justify-center w-full p-4 my-12 mb-8 md:p-16">
                <div className="absolute left-3">
                    <h2 className="text-4xl font-bold">Invoice</h2>
                    <p className="hidden text-gray-500 md:block">There are 7 invoices</p>
                    <p className="text-gray-500 md:hidden">7 invoices</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <p className="hidden md:block">Filter by status</p>
                        <p className="md:hidden">Filter</p>
                        <img src="" alt="" style={dropdownArrowStyle} />
                    </div>
                    <div className="flex items-center w-20 h-8 rounded-full bg-custom-btn md:w-40 md:h-12 justify-evenly bg-slate-600">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:h-14 md:w-14">
                            +
                        </div>
                        New invoice
                    </div>
                </div>
            </div>
            <div className="w-full mb-6 bg-gray-200 rounded-lg md:h-20 hover:cursor-pointer hover:border-2 hover:border-purple-600">
                <div className="hidden w-full bg-white rounded-lg md:block">
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
                </div>
                <div className="flex items-center justify-between w-full p-5 md:hidden">
                    <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:gap-6">
                        <p className="font-bold"></p>
                        <p className="text-sm font-bold">$</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="flex items-center justify-end gap-3 pt-3 pb-3 pl-5 pr-6 bg-green-500 rounded-lg">
                            <p className="w-4 h-4 bg-green-500 rounded-full"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Inline style for dropdown arrow
const dropdownArrowStyle = {
  border: 'solid black',
  borderWidth: '0 3px 3px 0',
  display: 'inline-block',
  padding: '3px',
  transform: 'rotate(45deg)',
  WebkitTransform: 'rotate(45deg)'
};

export default Invoices;
