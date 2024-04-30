import React, { useState } from 'react';

// Initial form state
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

  // Function to clear the form
  const clearSubmit = () => {
    setFormInputData(initialFormState); // Reset to initial state
  };

  // Function to handle form submission
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
    <div>
      <form onSubmit={handleSubmit}>
        {/* Section: Bill From */}
        <div className="flex flex-col">
          <p className="text-[#7c5dfa]">Bill From</p>
          <label>Street Address</label>
          <input
            type="text"
            name="homeAddress"
            placeholder="8b Alignton"
            value={formInputData.homeAddress}
            onChange={handleChange}
            className="p-3 border-2 border-gray-700 rounded-md"
          />
          {error.homeAddress && <p className="text-xs text-red-700">{error.homeAddress}</p>}
        </div>

        {/* Section: Payment Information */}
        <div className="flex mt-8">
          <div className="flex flex-col">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Texas"
              value={formInputData.city}
              onChange={handleChange}
              className="p-3 border-2 border-gray-700 rounded-md"
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
              className="p-3 border-2 border-gray-700 rounded-md"
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
              className="p-3 border-2 border-gray-700 rounded-md"
            />
            {error.country && <p class-class="text-xs text-red-700">{error.country}</p>}
          </div>
        </div>

        {/* Section: Payment Terms */}
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1 flex flex-col">
              <label>Invoice Date</label>
              <input
                required
                name="paymentDue"
                value={formInputData.paymentDue}
                onChange={handleChange}
                type="date"
                className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px]"
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <label>Payment Terms</label>
              <select
                name="paymentTerms"
                value={formInputData.paymentTerms}
                onChange={handleChange}
                className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px]"
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

        {/* Section: Client Details */}
        <div className="flex flex-col mt-8">
          <label>Client Name</label>
          <input
            type="text"
            name="clientName"
            placeholder="Tee"
            value={formInputData.clientName}
            onChange={handleChange}
            className="p-3 border-2 border-gray-700 rounded-md"
          />
          {error.clientName && <p class="text-xs text-red-700">{error.clientName}</p>}
        </div>

        {/* Section: Description */}
        <div className="col-span-3 flex flex-col mb-3">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formInputData.description}
            onChange={handleChange}
            className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px]"
          />
          {error.description && <p class="text-xs text-red-700">{error.description}</p>}
        </div>

        {/* Section: Items List */}
        <div className="col-span-3 flex flex-col mb-3">
          <h1>Items List</h1>
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
                  className="p-2 mt-2 bg-custom-card rounded-md focus:outline-purple-400 border-[.3px]"
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <label>Quantity</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px]"
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <label>Price</label>
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, "price", e.target.value)}
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px]"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label>Total</label>
                <input
                  disabled
                  placeholder={item.total}
                  value={item.total}
                  className="p-2 mt-2 rounded-md bg-custom-card focus:outline-purple-400 border-[.3px]"
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
