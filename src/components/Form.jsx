import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="header w-full h-20 bg-blue-300 flex items-center justify-center">
        <h1 className="text-xl font-semibold text-white">Invoice Details</h1>
      </div>
      <form className="mt-6 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="invoice-number"
                className="block text-gray-700 font-medium required"
              >
                Actual Invoice Number
              </label>
              <input
                type="text"
                id="invoice-number"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="invoice-date"
                className="block text-gray-700 font-medium required"
              >
                Invoice Date
              </label>
              <input
                type="date"
                id="invoice-date"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="buyer-address1"
                className="block text-gray-700 font-medium required"
              >
                Buyer Address 1
              </label>
              <input
                type="text"
                id="buyer-address1"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="buyer-address2"
                className="block text-gray-700 font-medium"
              >
                Buyer Address 3
              </label>
              <input
                type="text"
                id="buyer-address3"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-20">
              <div className="w-full">
                <label
                  htmlFor="invoice-currency"
                  className="block text-gray-700 font-medium required"
                >
                  Invoice Currency
                </label>
                <select
                  id="invoice-currency"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="nature-of-contract"
                  className="block text-gray-700 font-medium required"
                >
                  Nature Of Contract
                </label>
                <select
                  id="nature-of-contract"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="Sales">Sales</option>
                  <option value="Service">Service</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="buyer-name"
                className="block text-gray-700 font-medium required"
              >
                Buyer Name
              </label>
              <input
                type="text"
                id="buyer-name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="buyer-name"
                className="block text-gray-700 font-medium "
              >
                Buyer Address 2
              </label>
              <input
                type="text"
                id="buyer-name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="buyer-name"
                className="block text-gray-700 font-medium"
              >
                Buyer Address 4
              </label>
              <input
                type="text"
                id="buyer-name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
