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
        // if (text.toLowerCase() === 'all' || text.toLowerCase() === 'All') {
        //     setSelectedOptions(['Sneakers','Sandals','Heels','Flats']);
        // } else {
        //     setSelectedOptions((prev) => [...prev, text]);
        // }

        setSelectedOptions((prev) => {
            // If 'All' is selected, set selectedOptions to an empty array (show all products)
            if (text.toLowerCase() === 'all' || prev.includes('all')) {
                return ['Sneakers','Sandals','Heels','Flats'];
            }
    
            // If the text already exists in the array, remove it; otherwise, add it
            if (prev.includes(text)) {
                return prev.filter((category) => category !== text);
            } else {
                return [...prev, text];
            }
        });
    };
      
  return (
    <div className="space-y-4">
        <h3 className='py-2 text-lg font-bold'>Category:</h3>
        <label className={`flex items-center space-x-2 ${selectedOptions.includes('All') ? 'font-bold' : ''}`}>
        <input
          type="checkbox"
          className="form-checkbox"
        //   checked={selectedOptions.includes('All')}
          onChange={() => handleCheckboxChange('All')}
        />
        <span>All</span>
      </label>

      <label className={`flex items-center space-x-2 ${selectedOptions.includes('Sneakers') ? 'font-bold' : ''}`}>
        <input
          type="checkbox"
          className="form-checkbox"
        //   checked={selectedOptions.includes('Sneakers')}
          onChange={() => handleCheckboxChange('Sneakers')}
        />
        <span>Sneakers</span>
      </label>

      <label className={`flex items-center space-x-2 ${selectedOptions.includes('Sandals') ? 'font-bold' : ''}`}>
        <input
          type="checkbox"
          className="form-checkbox"
        //   checked={selectedOptions.includes('Sandals')}
          onChange={() => handleCheckboxChange('Sandals')}
        />
        <span>Sandals</span>
      </label>

    

      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox" 
        //  checked={selectedOptions.includes('Heels')}
          onChange={() => handleCheckboxChange('Heels')} />
        <span>Heels</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox" 
        //  checked={selectedOptions.includes('Flats')}
          onChange={() => handleCheckboxChange('Flats')}/>
        <span>Flats</span>
      </label>
      <p>Selected Options: {selectedOptions.join(',')}</p>
      {/* Add more labels for additional checkboxes */}
    </div>
  );
};

export default CategoryList;
