import React, { useState, useEffect } from 'react';
import Items from './Items';
import Loading from './Loading';

const Popular = ({ isDarkMode }) => {
  const [womenpopular, setWomenPopular] = useState([]);

  useEffect(() => {
    let isMounted = true; 

    const fetchPopularInWomen = async () => {
      try {
        const response = await fetch('https://stylemartbackend.onrender.com/api/popularInwomen');
        const data = await response.json();
        if (isMounted) {
          setWomenPopular(data); 
        }
      } catch (error) {
        console.error('Error fetching popular women items:', error);
      }
    };

    fetchPopularInWomen();

    // Cleanup function
    return () => {
      isMounted = false; // Component will unmount, prevent state update
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <>
    {
     womenpopular.length===0?(<Loading/>):( 
    
    <div className="p-6 mt-10">
      <h2
        className={`text-4xl font-bold text-center mb-8 tracking-wide uppercase ${
          isDarkMode ? 'text-pink-400' : 'text-purple-700'
        }`}
      >
        Popular in Women
      </h2>

      <hr className={`mb-6 ${isDarkMode ? 'border-gray-600' : 'border-gray-300 h-1 font-bold bg-slate-600'}`} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6   md:bg-neutral-100 ">
        {womenpopular.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
    )}
    </>
    
  );
};

export default Popular;
