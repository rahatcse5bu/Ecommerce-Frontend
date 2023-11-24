import React from 'react';

const ColorOptionsList = () => {
  const colorOptions = [
    { id: 1, label: 'All', color: 'gray' },
    { id: 2, label: 'Black', color: 'black' },
    { id: 3, label: 'Blue', color: 'blue' },
    { id: 4, label: 'Red', color: 'red' },
    { id: 5, label: 'Green', color: 'green' },
    { id: 6, label: 'White', color: 'white' },
  ];

  return (
    <div className="space-y-4">
           <h3 className='text-lg font-bold pt-2'>Color:</h3>
      {colorOptions.map((option) => (
        <label key={option.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className={`form-checkbox ${option.color === 'gray' ? 'text-gray-500' : option.color === 'black' ? 'text-black-500' : option.color === 'blue' ? 'text-blue-500' : option.color === 'red' ? 'text-red-500' : option.color === 'green' ? 'text-green-500' : option.color === 'white' ? 'text-white-500' : ''}`}
          />
          <span className={`text-${option.color}-500`}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default ColorOptionsList;
