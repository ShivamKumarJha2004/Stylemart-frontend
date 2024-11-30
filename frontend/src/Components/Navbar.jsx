import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from '../Pages/LoginSignup';
import { ShopContext } from '../Context/ShopContext';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext); // Getting the total cart items
  
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 fixed md: w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-700 ">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-4">
        {/* Upper Section: Logo and Heading */}
        <div className="flex items-center justify-between w-full mb-4 md:mb-0">
          <a href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-200">
              <img
                src="https://as1.ftcdn.net/v2/jpg/03/20/81/06/1000_F_320810684_Nuz9z2kpHSNyS4RVLqkOpD6bddOwZjem.jpg"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">StyleMart</span>
          </a>
        </div>

        {/* Lower Section: Navigation Items */}
        <div className="flex flex-col md:flex-row w-full md:justify-between items-center">
                    <ul className="hidden md:flex flex-col md:flex-row w-full font-medium border rounded-lg md:space-x-8 md:border-0 dark:border-gray-700 text-xl">
            <li>
              <Link to="/">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Shop
                </a>
              </Link>
            </li>
            <li>
              <Link to="/mens">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Men
                </a>
              </Link>
            </li>
            <li>
              <Link to="/womens">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Women
                </a>
              </Link>
            </li>
            <li>
              <Link to="/kids">
                <a className="block py-2 px-3 text-gray-900 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">
                  Kids
                </a>
              </Link>
            </li>
          </ul>

          {/* Right section with buttons */}
          <div className="flex items-center md:order-2 space-x-3 mb-4 md:mb-0">
            <button
              onClick={toggleDarkMode}
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2.5"
            >
              {isDarkMode ? (
                <i className="fa-solid fa-sun fa-2x"></i>
              ) : (
                <i className="fa-solid fa-moon fa-2x"></i>
              )}
            </button>
            <Link to="/cart">
              <button
                type="button"
                className="relative text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2.5"
              >
                <i className="fa-solid fa-cart-shopping fa-2x"></i>
                {/* Cart item count displayed in red */}
                {getTotalCartItems() > 0 && (
                  <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full text-xs">
                    {getTotalCartItems()}
                  </span>
                )}
              </button>
            </Link>
             {localStorage.getItem('auth-token')?
            <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={()=>{
              localStorage.removeItem('auth-token'),window.location.replace('/')
            }}
          >
            LogOut
          </button> 
            :
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                
              >
                Login
              </button>
            </Link>
            }
             
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 font-bold w-10 h-10 justify-center text-xl bg-transparent dark:text-white dark:bg-transparent rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div
              className={`absolute left-0 top-full w-[94%] bg-gray-200 dark:bg-gray-900 border-2 dark: border-1 border-green-600 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
              id="navbar-sticky"
            >
              <div className='flex flex-col bg-transparent dark:bg-transparent p-4 rounded-md'>              {/* Close Button */}
              <button
                onClick={closeMenu}
                type="button"
                className="self-end mb-2 p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <i className="fa-solid fa-xmark fa-2x"></i>
              </button>

              {/* Menu Items with Full Left Alignment */}
              <ul className="flex flex-col w-full space-y-2 text-center">
                <li>
                  <Link to="/">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Shop
                    </a>
                  </Link>
                  <hr className='bg-red-800' />
                </li>
                <li>
                  <Link to="/mens">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Men
                    </a>
                  </Link>
                  <hr className='bg-orange-600' />
                </li>
                <li>
                  <Link to="/womens">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Women
                    </a>
                  </Link>
                  <hr className='bg-pink-900' />
                </li>
                <li>
                  <Link to="/kids">
                    <a className="block w-full py-2 px-4 text-2xl font-semibold text-gray-900 dark:text-gray-300 bg-clip-text hover:bg-gray-200 dark:hover:bg-gray-800">
                      Kids
                    </a>
                  </Link>
                  <hr className='bg-black' />
                </li>
              </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
