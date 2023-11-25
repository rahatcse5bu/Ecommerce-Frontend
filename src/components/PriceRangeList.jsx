import  { useContext,useEffect,useState } from 'react';
import { ProductContext } from '../context/Products';

const PriceRangeList = () => {
    const {allProducts,setFilteredProducts,filteredProducts} = useContext(ProductContext)
    const [selectedLower, setLower] = useState(0);
    const [selectedUpper, setUpper] = useState(100);
// Utility function to check if two arrays are equal
const arraysAreEqual = (array1, array2) => {
    return JSON.stringify(array1) === JSON.stringify(array2);
};
    useEffect(() => {
        const filteredProductList = allProducts.filter((product) => {

            // Check if the product's category matches any selected category (case-insensitive)
       
            const productPrice = parseFloat(product.newPrice); // Assuming 'price' is a string, convert it to a number if needed

            return (
                (!selectedLower || productPrice >= selectedLower) &&
                (!selectedUpper || productPrice <= selectedUpper)
            );      
    
           
        });
    console.log('vhghtest=>'+JSON.stringify(filteredProductList))
        // setFilteredProducts(filteredProductList);
            // Check if the filtered list is different before updating the state
    if (!arraysAreEqual(filteredProductList, allProducts)) {
        setFilteredProducts(() => filteredProductList);
    }
    
    }, [allProducts, selectedLower, selectedUpper, setFilteredProducts]);
    
    const handleProductPriceChange = async (lower,upper) => {
       await setLower(lower);
      await  setUpper(upper);
    };
      
  return (
    <div className="space-y-4">
        <h3 className='text-lg font-bold pt-2'>Price:</h3>
      <label className="flex items-center space-x-2">
        <input onClick={()=>handleProductPriceChange(0,200)} type="radio" name="priceRange" className="form-radio" />
        <span>$0 - $200</span>
      </label>
      <label className="flex items-center space-x-2">
        <input onClick={()=>handleProductPriceChange(0,50)} type="radio" name="priceRange" className="form-radio" />
        <span>$0 - $50</span>
      </label>

      <label className="flex items-center space-x-2">
        <input onClick={()=>handleProductPriceChange(51,100)} type="radio" name="priceRange" className="form-radio" />
        <span>$51 - $100</span>
      </label>

      <label className="flex items-center space-x-2">
        <input onClick={()=>handleProductPriceChange(101,200)} type="radio" name="priceRange" className="form-radio" />
        <span>$101 - $200</span>
      </label>
<p>{selectedLower} - {selectedUpper}</p>
      {/* Add more labels for additional price ranges */}
    </div>
  );
};

export default PriceRangeList;
