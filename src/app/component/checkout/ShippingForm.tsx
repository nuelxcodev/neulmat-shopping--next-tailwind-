"use client";
import { useContext, useEffect, useState } from "react";

const ShippingForm: React.FC = ({ get, method }: any) => {
  const [edit, onedit] = useState(false);
  // State variables to store input values
  const [text, settext] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZip] = useState<string>("");
  const [country, setCountry] = useState<string>("United States"); // Default value

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("/api/checkoutprocess", {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        address,
        city,
        zipCode,
        country,
      }),
    })
      .then((response) => response.json())
      .then((data) => get(data));

    // You can also navigate to the next step or perform other actions
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-[90%] md:w-[70%] mx-auto p-3">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full border-b p-2 sm:text-sm border-gray-300 rounded-md"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 focus:ring-indigo-500 outline-none border-b p-2 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="123 Main St"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 focus:ring-indigo-500 outline-none border-b p-2 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="New York"
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={zipCode}
              onChange={(e) => setZip(e.target.value)}
              className="mt-1 focus:ring-indigo-500 border-b p-2 focus:border-indigo-500 outline-none block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="10001"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
              {/* Add more countries here */}
            </select>
          </div>
          <div className="flex justify-end gap-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              save
            </button>

           
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
