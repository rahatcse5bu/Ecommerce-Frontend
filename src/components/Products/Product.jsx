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
       <div className='flex flex-row align-middle justify-center items-center py-2'>
        <RatingStar rating={singleProduct.rating}/> <div className='ml-2'>{singleProduct.reviews}</div>
        </div>
<div className='flex flex-row align-middle justify-center items-center py-2'>
<span className='line-through mr-4'>{singleProduct.prevPrice} </span> <span> ${singleProduct.newPrice}</span>
        </div>
        {/* <div className='brand text-center bg-slate-400 text-white mx-auto rounded-sm p-1 flex items-center justify-center'>Brand: {singleProduct.company}</div> */}
        </div>
    );
};

export default Product;