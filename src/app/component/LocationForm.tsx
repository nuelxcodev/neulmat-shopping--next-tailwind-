import React from "react";

const LocationForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Shipping Information</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-600">
              Address
            </label>
            <input
              id="address"
              name="address"
              className="w-full border rounded-md py-2 px-3 mt-1"
            ></input>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 mr-2">
              <label htmlFor="city" className="block text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="state" className="block text-gray-600">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 mr-2">
              <label htmlFor="postal_code" className="block text-gray-600">
                Postal Code
              </label>
              <input
                type="text"
                id="postal_code"
                name="postal_code"
                className="w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="country" className="block text-gray-600">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationForm;
