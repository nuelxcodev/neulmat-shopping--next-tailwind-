"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderHistoryPage = () => {
  // Sample ordered history data
  const router = useRouter();
  const orderedHistory = [
    {
      id: 1,
      date: "2024-05-01",
      items: [
        { name: "Product A", quantity: 2, price: 20 },
        { name: "Product B", quantity: 1, price: 30 },
      ],
      total: 70,
    },
    {
      id: 2,
      date: "2024-04-25",
      items: [
        { name: "Product C", quantity: 1, price: 25 },
        { name: "Product D", quantity: 3, price: 15 },
      ],
      total: 70,
    },
  ];

  return (
    <div className=" flex flex-col justify-center items-center w-full">
      <div className=" w-full md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="my-4 flex justify-between w-full"></div>
        <h2 className="text-2xl font-semibold mb-4">Order History</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderedHistory.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.name} x{item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
