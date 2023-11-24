import {useContext, useEffect, useState} from 'react';
import { ProductContext } from '../context/Products';

const CategoryList = () => {
    const {allProducts,setFilteredProducts} = useContext(ProductContext)
    const [selectedOptions, setSelectedOptions] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filteredProductList = allProducts.filter((product) => {
            // If no category is selected, show all products
            if (selectedOptions.length === 0 || selectedOptions.includes('all')) {
                return true;
            }
    
            // Check if the product's category matches any selected category (case-insensitive)
            const matchesCategory = selectedOptions.some((selectedCategory) => {
                return product.category.toLowerCase().includes(selectedCategory.toLowerCase());
            });
    
            return matchesCategory;
        });
    
        setFilteredProducts(filteredProductList);
    
    }, [selectedOptions, allProducts]);
    
    const handleCheckboxChange = (text) => {
        // If 'All' is selected, set selectedOptions to an empty array (show all products)
        if (text.toLowerCase() === 'all') {
            setSelectedOptions([]);
        } else {
            setSelectedOptions((prev) => [...prev, text]);
        }
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
