import React from 'react';
import RatingStar from './RatingStar';

const Product = (product) => {
    const singleProduct = product.product;
    // console.log('single pro=>'+JSON.stringify(singleProduct))
    return (
        <div className='product relative rounded-md bg-gray-200 p-4'>
            <div className='absolute top-0 right-0 bg-blue-900 text-white px-2 py-0 rounded-[200px]' >{singleProduct.category}</div>
            <img className='rounded-md' src={singleProduct.img}/>
            <h4 className='font-bold text-lg text-center'>{singleProduct.title}</h4>
       <div className='flex flex-row align-middle justify-center items-center'> <RatingStar rating={singleProduct.rating}/> <span className='ml-2'>{singleProduct.reviews}</span></div>
<div className='flex flex-row align-middle justify-center items-center'>
<span className='line-through mr-2'>{singleProduct.prevPrice} </span> <span> {singleProduct.newPrice}</span>
        </div>
        </div>
    );
};

export default Product;