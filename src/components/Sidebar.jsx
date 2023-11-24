import React from 'react';
import CategoryList from './CategoryList';
import PriceRangeList from './PriceRangeList';
import ColorOptionsList from './ColorOptionsList';

const Sidebar = () => {
    return (
        <div className="col-span-1 bg-gray-200 p-4 rounded-md">
        {/* Content for the first column */}
        <CategoryList/>
        <PriceRangeList/>
        <ColorOptionsList/>
      </div>
    );
};

export default Sidebar;