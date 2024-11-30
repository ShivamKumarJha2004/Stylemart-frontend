import React, { useEffect, useState } from "react";
import Items from "./Items";
import Loading from "./Loading";

const NewCollection = ({ isDarkMode }) => {
  const [newcoll, setNewColl] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchNewCollection = async () => {
      try {
        const response = await fetch(
          "https://stylemartbackend.onrender.com/api/newcollection"
        );
        const data = await response.json();
        if (isMounted) {
          setNewColl(data);
        }
      } catch (error) {
        console.error("Error fetching new collection:", error);
      }
    };

    fetchNewCollection();

    // Cleanup function
    return () => {
      isMounted = false; // Prevent state updates after the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      {newcoll.length === 0 ? (
        <Loading />
      ) : (
        <div className="p-4">
          {/* Padding for some space around the container */}
          <h1
            className={`text-4xl font-bold mt-16 ml-5 text-center ${
              isDarkMode ? "text-amber-500" : "text-gray-900"
            }`}
          >
            NEW COLLECTION
          </h1>
          {/* Centered and styled heading */}
          <hr className="mt-10 h-1 bg-black" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-600">
            {/* Grid container */}
            {newcoll.length > 0 ? (
              newcoll.map((item, i) => (
                <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  isDarkMode={isDarkMode}
                />
              ))
            ) : (
              <p>No items in the new collection.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NewCollection;
