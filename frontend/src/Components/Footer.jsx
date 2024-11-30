import React from 'react';
import { Link } from 'react-router-dom';
const Footer = ({ isDarkMode }) => {
  
  return (
    <div
      className={` ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} mt-5 `}
    >
      

<footer class="bg-slate-200 rounded-lg shadow mt-4 dark:bg-gray-800  ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between  ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">StyleMart™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
         <Link to='/mens'>  <a class="hover:underline me-4 md:me-6">Mens</a>
         </Link> 
        </li>
        <li>
            <Link to='/womens'><a  class="hover:underline me-4 md:me-6">Women</a>
            </Link>
        </li>
        <li>
           <Link to='/kids'><a  class="hover:underline me-4 md:me-6">Kids</a>
           </Link> 
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  );
}

export default Footer;
