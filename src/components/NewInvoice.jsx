import React from 'react'

const NewInvoice = () => {
    return (
        <div className='flex items-center justify-center mx-auto'>
            <form>
                <div className='flex flex-col'>
                    <p className='text-[#7c5dfa]'>Bill From</p>
                    <label className=''>Street Address </label>
                    <input type='text' name='street' id='' value='' placeholder=' 8b Alignton' className='p-3 border-2 border-gray-700 rounded-md' />
                </div>
                <div className='flex mt-8'>
                    <div className='flex flex-col pr-2'>
                        <label className=''>City </label>
                        <input type='text' name='street' id='' value='' placeholder='Texas' className='p-3 border-2 border-gray-700 rounded-md' />
                    </div>
                    <div className='flex flex-col'>
                        <label className=''>PostCode</label>
                        <input type='text' name='street' id='' value='' placeholder='102105' className='p-3 border-2 border-gray-700 rounded-md' />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <label className=''>Country</label>
                        <input type='text' name='street' id='' value='' placeholder='Nigeria' className='p-3 border-2 border-gray-700 rounded-md' />
                    </div>
                </div>

                <div className='flex flex-col mt-8' >
                    <p className='text-[#7c5dfa]'>Bill To</p>
                    <label>Client Name</label>
                    <input type='text' name='street' id='' value='' placeholder='Tee' className='p-3 border-2 border-gray-700 rounded-md' />
                </div>
                <div className='flex flex-col mt-8'>
                    <label className=''>Client Email</label>
                    <input type='text' name='street' id='' value='' placeholder='tee@mail.com' className='p-3 border-2 border-gray-700 rounded-md' />
                </div>
                <div className='flex flex-col mt-8'>
                    <label className=''>Client Address</label>
                    <input type='text' name='street' id='' value='' placeholder='14x Lekki' className='p-3 border-2 border-gray-700 rounded-md' />
                </div>
            </form>
        </div>
    )
}

export default NewInvoice