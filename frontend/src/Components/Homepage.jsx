import React from 'react';
import img from "./Assets/girll.png";


function HomePage({ isDarkMode }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between min-h-screen 
        ${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white' : 'bg-gradient-to-r from-pink-100 via-pink-100 to-pink-200 text-black'}`}
    >
      {/* Left Section */}
     <br />
     <br />
     <br />
     <br />
     <br />
      <div className="flex-1 p-6 md:p-10 text-center md:text-left mt-16 md:mt-24 mb-16 md:mb-0">
        <h1
          className={`text-3xl md:text-4xl font-semibold text-transparent bg-clip-text 
            ${isDarkMode ? 'bg-gradient-to-r from-red-500 via-purple-600 to-indigo-100' : 'bg-gradient-to-r from-red-500 via-purple-900 to-indigo-800'} animate-gradient mt-10 md:mt-0 leading-normal md:leading-loose		`}
        >
          New Arrival Only
        </h1>
        <h2
  className={`mb-5 md:mb-5  text-3xl  md:text-5xl font-bold leading-snug ${isDarkMode ? 'text-white' : 'text-black'} animate-ping-once`}
>
  New Collection for Everyone
</h2>

        <p
          className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} invisible md:visible`}
        >
          Explore the latest trends and styles in fashion for men, women, and kids. 
          Refresh your wardrobe with our exclusive new arrivals that are perfect for every occasion.
        </p>
       
        {/* New Collection Prompts */}
        <div className="-mt-12  md:mt-12 ">
          <h3
            className={`text-2xl md:text-3xl font-semibold w-full md:w-[28rem] rounded-lg p-2 
              ${isDarkMode ? 'bg-gradient-to-r from-red-500 via-purple-600 to-indigo-100' : 'bg-gradient-to-r from-red-500 via-purple-100 to-indigo-100'} animate-gradient mb-6`}
          >
            Discover New Collections
          </h3>
          <ul className="space-y-4  text-lg md:text-xl">
            <li
              className={`font-semibold transition duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-black'}`}
            >
              <span role="img" aria-label="Man">👔</span> Latest Fashion for Men
            </li>
            <li
              className={`font-semibold transition duration-300 ${isDarkMode ? 'text-pink-300 hover:text-pink-500' : 'text-pink-600 hover:text-pink-800'}`}
            >
              <span role="img" aria-label="Woman">👗</span> Stylish Outfits for Women
            </li>
            <li
              className={`font-semibold transition duration-300 ${isDarkMode ? 'text-fuchsia-400 hover:text-fuchsia-600' : 'text-fuchsia-900 hover:text-pink-800'}`}
            >
              <span role="img" aria-label="Kid">👕</span> Trendy Wear for Kids
            </li>
          </ul>
          
        </div>
        
      </div>
              

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <img
          src={img}
          alt="Fashion Girl"
          className="w-full max-w-md  md:max-w-lg  object-cover"
        />
      </div>
      
    </div>
  );
}

export default HomePage;
