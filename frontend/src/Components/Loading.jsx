import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      {/* Message */}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">{message}</p>
    </div>
  );
};

export default Loading;
