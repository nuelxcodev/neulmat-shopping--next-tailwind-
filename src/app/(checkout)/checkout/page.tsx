import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Checkout</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Name
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
            <textarea
              id="address"
              name="address"
              rows="4"
              className="w-full border rounded-md py-2 px-3 mt-1"
            ></textarea>
          </div>
          <div>
            <label htmlFor="card" className="block text-gray-600">
              Credit Card
            </label>
            <input
              type="text"
              id="card"
              name="card"
              className="w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="expiry" className="block text-gray-600">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              className="w-1/2 border rounded-md py-2 px-3 mt-1"
            />
            <label htmlFor="cvv" className="block text-gray-600">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="w-1/2 border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
