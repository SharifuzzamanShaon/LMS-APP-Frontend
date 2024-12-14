import React from 'react';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 hidden lg:block">
          Welcome to the Chat Room!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 hidden lg:block" >
          Connect with your fellow students, share ideas, and collaborate on your learning journey.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 hidden lg:block">
          How It Works
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 hidden lg:block">
          <li className="mb-2">🌟 Start a conversation with your classmates.</li>
          <li className="mb-2">📅 Schedule study sessions together.</li>
          <li className="mb-2">🤝 Collaborate on group projects.</li>
        </ul>
      </div>
      
      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200">
        Start Chatting
      </button>
    </div>
  );
};

export default WelcomePage;
