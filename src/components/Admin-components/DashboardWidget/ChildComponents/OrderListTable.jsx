import React from 'react'

const OrderListTable = ({timeButtons}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Order List</h2>
      <div className="flex gap-2">
        {timeButtons.map((button, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded transition-all duration-300 ${
              button.active
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">No</th>
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">ID</th>
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">Date</th>
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">Customer Name</th>
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">Location</th>
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">Amount</th>
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">Status Order</th>
            <th className="py-3 text-left text-gray-500 dark:text-gray-400">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y dark:divide-gray-700">
          {/* Add your table rows here */}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default OrderListTable