import  { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/Products';

const ColorOptionsList = () => {
  const colorOptions = [
    { id: 1, label: 'All', color: 'gray' },
    { id: 2, label: 'Black', color: 'black' },
    { id: 3, label: 'Blue', color: 'blue' },
    { id: 4, label: 'Red', color: 'red' },
    { id: 5, label: 'Green', color: 'green' },
    { id: 6, label: 'White', color: 'white' },
  ];

  const {allProducts,setFilteredProducts,filteredProducts} = useContext(ProductContext)
  const [selectedColor, setColor] = useState(['all']);

// Utility function to check if two arrays are equal
const arraysAreEqual = (array1, array2) => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};
  useEffect(() => {
      const filteredProductList = allProducts.filter((product) => {
          // Check if the product's color matches any selected color (case-insensitive)
          const productColor = product.color; 
           const matchedColor = selectedColor.some((color)=>{
return productColor.toLowerCase().includes(color.toLowerCase());
           });
          // return (productColor.toLowerCase()===selectedColor.toLowerCase())      
  return matchedColor;
         
      });
  // console.log('color=>'+JSON.stringify(filteredProductList))
      // setFilteredProducts(filteredProductList);
          // Check if the filtered list is different before updating the state
  if (!arraysAreEqual(filteredProductList, filteredProducts)) {
      // setFilteredProducts(() => filteredProductList);
      setFilteredProducts(filteredProductList.length > 0 ? filteredProductList : allProducts);

  }
  
  }, [allProducts, selectedColor]);
  
  const handleProductColorChange =  (color) => {
setColor((prev)=>{
                // If the color already exists in the array, remove it; otherwise, add it
                if (prev.includes(color)) {
                  return prev.filter((category) => category !== color);
              } else {
                  return [...prev, color];
              }
            });
      // setColor(color);

  
  };
    

  return (
    
    <div className="space-y-4">
           <h3 className='text-lg font-bold pt-2'>Color:</h3>
      {colorOptions.map((option) => (
        <label key={option.id} className="flex items-center space-x-2">
          <input
            type="checkbox" 
            onClick={()=>handleProductColorChange(option.label)}
            className={`form-checkbox ${option.color === 'gray' ? 'text-gray-500' : option.color === 'black' ? 'text-black-500' : option.color === 'blue' ? 'text-blue-500' : option.color === 'red' ? 'text-red-500' : option.color === 'green' ? 'text-green-500' : option.color === 'white' ? 'text-white-500' : ''}`}
          />
          <span className={`text-${option.color}-500`}>{option.label}</span>
        </label>
      ))}
      <p>{selectedColor}</p>
    </div>
  );
};

export default ColorOptionsList;
