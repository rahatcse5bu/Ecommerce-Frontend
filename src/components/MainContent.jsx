import React from 'react';
import ProductGrid from './Products/ProductGrid';

const MainContent = () => {
    return (
        <div className="col-span-3 bg-white p-4">
        {/* Content for the second column */}
        <h2 className="text-lg font-bold">Products</h2>
        <div className='h-5'>
        </div>
        <ProductGrid/>
      </div>
    );
};

export default MainContent;