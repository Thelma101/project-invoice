import React, { useState } from 'react';


const initialFormState = {
    homeAddress: '',
    city: '',
    postCode: '',
    country: '',
    clientName: '',
    clientAddress: '',
    email: '',
    description: '',
    paymentDue: '',
    paymentTerms: '',
    items: [
        {
            name: '',
            quantity: 0,
            price: 0,
            total: 0,
        },
    ],
};


const deliveryPeriod = [
    { text: 'Select', value: 0 },
    { text: 'Next 1 day', value: 1 },
    { text: 'Next 7 days', value: 7 },
    { text: 'Next 14 days', value: 14 },
    { text: 'Next 30 days', value: 30 },
];

const NewInvoice = () => {
    const [formInputData, setFormInputData] = useState(initialFormState);
    const [error, setError] = useState({});

    // Function to handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInputData({ ...formInputData, [name]: value });
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...formInputData.items];
        updatedItems[index][field] = field === "quantity" || field === "price" ? parseFloat(value) : value;
      
        // Update 
        if (field === "quantity" || field === "price") {
          updatedItems[index].total = updatedItems[index].quantity * updatedItems[index].price;
        }
      
        setFormInputData({ ...formInputData, items: updatedItems });
      };

    // clear the form
    const clearSubmit = () => {
        setFormInputData(initialFormState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkError = {};

        for (const key in formInputData) {
            if (!formInputData[key]) {
                checkError[key] = 'Field cannot be empty';
            }
        }

        const post = /^\d{6}$/;
        if (!post.test(formInputData.postCode)) {
            checkError.postCode = 'Postal code must be a 6-digit number';
        }

        const validateEmail = (email) => {
            const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regEx.test(email);
        };
        if (!validateEmail(formInputData.email)) {
            checkError.email = 'Invalid email format';
        }

        setError(checkError);

        if (Object.keys(checkError).length === 0) {
            alert('Form submitted successfully');
            clearSubmit();
        }
    };

    return (
        <div className='flex items-center justify-center mx-auto text-main-text'>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-8">
                    <p className="text-[#7c5dfa]">Bill From</p>
                    <label>Street Address</label>
                    <input
                        type="text"
                        name="homeAddress"
                        placeholder="8b Alignton"
                        value={formInputData.homeAddress}
                        onChange={handleChange}
                        className="p-2 border-[.8px] border-gray-700 rounded-md text-[#626161]"
                    />
                    {error.homeAddress && <p className="text-xs text-red-700">{error.homeAddress}</p>}
                </div>

                {/* Section: Payment Information */}
                <div className="grid grid-cols-3 gap-2 mt-8">
                    <div className="flex flex-col">
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Texas"
                            value={formInputData.city}
                            onChange={handleChange}
                            className="p-2 border-[.8px] text-[#626161] border-gray-700  rounded-md"
                        />
                        {error.city && <p className="text-xs text-red-700">{error.city}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label>PostCode</label>
                        <input
                            type="text"
                            name="postCode"
                            placeholder="102105"
                            value={formInputData.postCode}
                            onChange={handleChange}
                            className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md ml-3"
                        />
                        {error.postCode && <p className="text-xs text-red-700">{error.postCode}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label>Country</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Nigeria"
                            value={formInputData.country}
                            onChange={handleChange}
                            className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md ml-3"
                        />
                        {error.country && <p className="text-xs text-red-700">{error.country}</p>}
                    </div>
                </div>

                <div className="flex flex-col mt-8">
                    <p className="text-[#7c5dfa]">Bill To</p>
                    <label>Client Name</label>
                    <input
                        type="text"
                        name="clientName"
                        placeholder="Parry Obaseki"
                        value={formInputData.clientName}
                        onChange={handleChange}
                        className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md"
                    />
                    {error.clientName && <p className="text-xs text-red-700">{error.clientName}</p>}
                </div>

                <div className="flex flex-col mt-8">
                    <label>Client Email</label>
                    <input
                        type="text"
                        name="clientEmail"
                        placeholder="po@mail.com"
                        value={formInputData.email}
                        onChange={handleChange}
                        className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md"
                    />
                    {error.email && <p className="text-xs text-red-700">{error.email}</p>}
                </div>
                <div className="flex flex-col mt-8">
                    <label>Client Address</label>
                    <input
                        type="text"
                        name="clienAddress"
                        placeholder="Benin city, Brussels"
                        value={formInputData.clienAddress}
                        onChange={handleChange}
                        className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md"
                    />
                    {error.clientAddress && <p className="text-xs text-red-700">{error.clientAddress}</p>}
                </div>


                <div className="grid grid-cols-3 gap-2 mt-8">
                    <div className="flex flex-col">
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Texas"
                            value={formInputData.city}
                            onChange={handleChange}
                            className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md"
                        />
                        {error.city && <p className="text-xs text-red-700">{error.city}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label>PostCode</label>
                        <input
                            type="text"
                            name="postCode"
                            placeholder="102105"
                            value={formInputData.postCode}
                            onChange={handleChange}
                            className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md ml-3"
                        />
                        {error.postCode && <p className="text-xs text-red-700">{error.postCode}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label>Country</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Nigeria"
                            value={formInputData.country}
                            onChange={handleChange}
                            className="p-2 border-[.8px] text-[#626161] border-gray-700 rounded-md ml-3]"
                        />
                        {error.country && <p className="text-xs text-red-700">{error.country}</p>}
                    </div>
                </div>

                {/* Section: Payment Terms */}
                <div className="col-span-3 mt-8">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-1 flex flex-col">
                            <label>Invoice Date</label>
                            <input
                                required
                                name="paymentDue"
                                value={formInputData.paymentDue}
                                onChange={handleChange}
                                type="date"
                                className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-gray-700 border-[.8px]"
                            />
                            {error.country && <p className="text-xs text-red-700">{error.country}</p>}
                        </div>
                        <div className="col-span-1 flex flex-col">
                            <label>Payment Terms</label>
                            <select
                                name="paymentTerms"
                                value={formInputData.paymentTerms}
                                onChange={handleChange}
                                className="p-2.5 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.8px]"
                            >
                                {deliveryPeriod.map((period, index) => (
                                    <option key={index} value={period.value}>
                                        {period.text}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                {/* Section: Description */}
                <div className="col-span-3 flex flex-col mb-3 mt-8">
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formInputData.description}
                        onChange={handleChange}
                        className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.8px]"
                    />
                    {error.description && <p class="text-xs text-red-700">{error.description}</p>}
                </div>

                <div className="col-span-3 flex flex-col mb-3 mt-8 text-[#626161]">
                    <h1 className='text-[#7c5dfa]'>Items List</h1>
                    {formInputData.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-start items-center flex-wrap gap-3"
                        >
                            <div className="flex flex-col justify-start items-start">
                                <label>Item Name</label>
                                <input
                                    required
                                    value={item.name}
                                    onChange={(e) => handleItemChange(index, "name", e.target.value)}
                                    placeholder="Item name"
                                    className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.8px]"
                                />
                            </div>

                            <div className="flex flex-col justify-center items-start">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value))}
                                    className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.8px]"
                                />
                            </div>

                            <div className="flex flex-col justify-center items-start">
                                <label>Price</label>
                                <input
                                    type="number"
                                    value={item.price}
                                    onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))}
                                    className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.8px]"
                                />
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <label>Total</label>
                                <input
                                    type="text"
                                    disabled
                                    placeholder={item.total}
                                    value={item.total}
                                    className="p-2 mt-2 rounded-md bg-gray-200 focus:outline-purple-400 border-[.8px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Submit Button */}
                <div className="flex mt-8 mb-8">
                    <div className="flex flex-col items-center justify-center w-full p-3 m-2 text-white rounded-lg cursor-pointer bg-slate-700" onClick={clearSubmit}>
                        <button type='button'>Cancel</button>
                    </div>
                    <div className='flex flex-col w-full items-center justify-center m-2 p-3 text-white rounded-lg bg-[#7c5dfa] cursor-pointer' onClick={handleSubmit}>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewInvoice;
