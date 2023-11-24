import React from 'react';

const PriceRangeList = () => {
  return (
    <div className="space-y-4">
        <h3 className='text-lg font-bold pt-2'>Price:</h3>
      <label className="flex items-center space-x-2">
        <input type="radio" name="priceRange" className="form-radio" />
        <span>$0 - $10</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="radio" name="priceRange" className="form-radio" />
        <span>$10 - $50</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="radio" name="priceRange" className="form-radio" />
        <span>$50 - $100</span>
      </label>

      {/* Add more labels for additional price ranges */}
    </div>
  );
};

export default PriceRangeList;
