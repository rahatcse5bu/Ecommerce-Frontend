import React,{useContext, useState} from 'react';
import { ProductContext } from '../context/Products';

const CategoryList = () => {
    const {allProducts,setAllProducts } = useContext(ProductContext)
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (text) => {
        // Toggle the selected option
        const updatedOptions = selectedOptions.includes(text)
          ? selectedOptions.filter((option) => option !== text)
          : [...selectedOptions, text];
      
        // Update selectedOptions state
        setSelectedOptions(updatedOptions);
      
        // Filter products based on selected categories
        const filteredProducts = allProducts.filter((product) => {
          // If no category is selected, show all products
          if (updatedOptions.length === 0 || updatedOptions.includes('all')) {
            return true;
          }
      
          // Check if all selected categories are present in the product's categories (case-insensitive)
          return updatedOptions.every((selectedCategory) =>
            product.category.toLowerCase().includes(selectedCategory.toLowerCase())
          );
        });
      
        // Update allProducts state with the filtered products
        setAllProducts(filteredProducts);
      };
      
  return (
    <div className="space-y-4">
        <h3 className='py-2 text-lg font-bold'>Category:</h3>
        <label className={`flex items-center space-x-2 ${selectedOptions.includes('All') ? 'font-bold' : ''}`}>
        <input
          type="checkbox"
          className="form-checkbox"
          checked={selectedOptions.includes('All')}
          onChange={() => handleCheckboxChange('All')}
        />
        <span>All</span>
      </label>

      <label className={`flex items-center space-x-2 ${selectedOptions.includes('Sneakers') ? 'font-bold' : ''}`}>
        <input
          type="checkbox"
          className="form-checkbox"
          checked={selectedOptions.includes('Sneakers')}
          onChange={() => handleCheckboxChange('Sneakers')}
        />
        <span>Sneakers</span>
      </label>

      <label className={`flex items-center space-x-2 ${selectedOptions.includes('Sandals') ? 'font-bold' : ''}`}>
        <input
          type="checkbox"
          className="form-checkbox"
          checked={selectedOptions.includes('Sandals')}
          onChange={() => handleCheckboxChange('Sandals')}
        />
        <span>Sandals</span>
      </label>

      <p>Selected Options: {selectedOptions.join(', ')}</p>

      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox"  checked={selectedOptions.includes('Heels')}
          onChange={() => handleCheckboxChange('Heels')} />
        <span>Heels</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox"  checked={selectedOptions.includes('Flats')}
          onChange={() => handleCheckboxChange('Flats')}/>
        <span>Flats</span>
      </label>

      {/* Add more labels for additional checkboxes */}
    </div>
  );
};

export default CategoryList;
