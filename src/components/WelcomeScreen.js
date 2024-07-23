import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-500 ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact😅👉👈</h1>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-700"
      >
        Vào Thôi!
      </button>
    </div>
  );
};

export default WelcomeScreen;
