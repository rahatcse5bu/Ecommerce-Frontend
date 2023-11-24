import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from '../../context/Products';

const ProductGrid = () => {
    const {allProducts} = useContext(ProductContext);
    // console.log('all pro=>'+allProducts)
    // console.log('products'+products)
    return (
        <div className=' grid grid-cols-4 gap-4'>
{allProducts.map((product,index)=>(
     <Product key={index} product={product}/>)
)}
            {/* <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/> */}
        </div>
    );
};

export default ProductGrid;