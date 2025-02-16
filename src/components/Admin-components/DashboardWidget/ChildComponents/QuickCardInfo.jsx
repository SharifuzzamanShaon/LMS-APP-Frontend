"use client"
import React, { useState } from 'react';
import ModalForDashboardInfo from './ModalForDashboardInfo';
const QuickInfoCard = ({ title, value, icon, percentage, color, onExpand }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={`${color} p-6 rounded-lg shadow-lg transition-all duration-300 relative group cursor-pointer`} 
        onClick={() => setIsModalOpen(true)}
      >
        {/* Hover expand icon overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-lg">
          <svg 
            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6m0 0v6m0-6L13 11M9 21H3m0 0v-6m0 6l8-8" />
          </svg>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{value}</h2>
            <p className="text-gray-300 dark:text-gray-400">{title}</p>
          </div>
          <div className="bg-opacity-20 bg-white dark:bg-gray-800 p-3 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-700 dark:bg-gray-600 rounded-full h-2">
            <div 
              className="bg-white dark:bg-gray-300 rounded-full h-2 transition-all duration-300" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span>0%</span>
            <span>{percentage}%</span>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && <ModalForDashboardInfo title={title} value={value} percentage={percentage} setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default QuickInfoCard;