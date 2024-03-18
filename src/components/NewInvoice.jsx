import React from 'react'
import { useState } from 'react';

const NewInvoice = () => {

    const [formInputData, setFormInputData] = useState({
        homeAddress: '',
        city: '',
        postCode: '',
        country: '',
        clientName: '',
        clientAddress: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInputData({ ...formInputData, [name]: value })
    }

    const clearSubmit = () => {
        document.getElementById('addInvoice').reset();
    }

    const handleSubmit = () => {

    }

    return (
        <div className='flex items-center justify-center mx-auto'>
            <form id='addInvoice'>
                <div className='flex flex-col'>
                    <p className='text-[#7c5dfa]'>Bill From</p>
                    <label className=''>Street Address </label>
                    <input type='text' name='homeAddress' placeholder='8b Alignton' id='homeAddress' value={formInputData.homeAddress} onChange={handleChange} className='p-3 border-2 border-gray-700 rounded-md' />
                </div>
                <div className='flex mt-8'>
                    <div className='flex flex-col pr-2'>
                        <label className=''>City </label>
                        <input type='text' name='city' placeholder='Texas' id='city' value={formInputData.city} onChange={handleChange} className='p-3 border-2 border-gray-700 rounded-md' />
                    </div>
                    <div className='flex flex-col'>
                        <label className=''>PostCode</label>
                        <input type='text' name='postCode' id={postCode} value={formInputData.postCode} onChange={handleChange} placeholder='102105' className='p-3 border-2 border-gray-700 rounded-md' />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <label className=''>Country</label>
                        <input type='text' name='country' placeholder='Nigeria' id={country} value={formInputData.country} onChange={handleChange} className='p-3 border-2 border-gray-700 rounded-md' />
                    </div>
                </div>

                <div className='flex flex-col mt-8' >
                    <p className='text-[#7c5dfa]'>Bill To</p>
                    <label>Client Name</label>
                    <input type='text' name='clientName' id={clientName} value={formInputData.clientName} placeholder='Tee' className='p-3 border-2 border-gray-700 rounded-md' />
                </div>
                <div className='flex flex-col mt-8'>
                    <label className=''>Client Email</label>
                    <input type='text' name='email' id={email} value={formInputData.email} placeholder='tee@mail.com' className='p-3 border-2 border-gray-700 rounded-md' />
                </div>
                <div className='flex flex-col mt-8'>
                    <label className=''>Client Address</label>
                    <input type='text' name='clientAddress' id={clientAddress} value={formInputData.clientAddress} placeholder='14x Lekki' className='p-3 border-2 border-gray-700 rounded-md' />
                </div>

                {/* buttons */}
                <div className='flex mt-8 mb-8'>
                    <div className='flex flex-col items-center justify-center w-full p-3 m-2 text-white rounded-lg bg-slate-700'>
                        <button type='cancel' onClick={clearSubmit} >Cancel</button>
                    </div>
                    <div className='flex flex-col w-full items-center justify-center m-2 p-3 text-white rounded-lg bg-[#7c5dfa]'>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>



    )
}

export default NewInvoice