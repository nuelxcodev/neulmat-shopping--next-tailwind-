import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-neutral-900 text-gray-300 py-8 px-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Connect With Us</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Customer Service</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Shipping
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold">Subscribe to Our Newsletter</h2>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-400 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-yellow-600 focus:outline-none focus:ring focus:bg-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
