import React from 'react';
import Productdisplay from '../Productdisplay';

const Navigate = (props,{ isDarkMode }) => {
    const { product } = props;
      
    // Check if product is received correctly
    console.log(product);

    return (
        <div className='relative md:top-[8rem] top-[16rem] mx-10 text-[14px] md:text-base '>
            <nav className='flex items-center space-x-2 text-gray-700 mb-4 dark:text-white'>
                <span className='hover:text-blue-500 cursor-pointer'>HOME</span>
                <i className="fa-solid fa-chevron-right" />
                <span className='hover:text-blue-500 cursor-pointer'>SHOP</span>
                <i className="fa-solid fa-chevron-right" />
                {product ? (
                    <>
                        <span className='hover:text-blue-500 cursor-pointer'>{product.category}</span>
                        <i className="fa-solid fa-chevron-right" />
                        <span className='font-semibold md:w-full md:text-[18px] '>{product.name}</span>
                    </>
                ) : (
                    <span>Loading...</span>
                )}
            </nav>
             {console.log(product)}
             
            {product && <Productdisplay product={product} isDarkMode={{ isDarkMode }} />}
        </div>
    );
};

export default Navigate;
