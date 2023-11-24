import { createContext, useEffect, useState } from "react";
import data  from "../data/db";

export const ProductContext = createContext({
	products: [],
	// success: true,
});

const ProductProvider = (props) => {
    
const [allProducts,setAllProducts] = useState(data);
	// const [products, addProducts] = useState([
	// 	// {
	// 	// 	name: "biscuits",
    //     //     amount :234.23
	// 	// },
	// 	// {
	// 	// 	name: "tea",
    //     //     amount :2.123
	// 	// },
	// ]);
useEffect(()=>{
// localStorage.setItem('transactions',JSON.stringify({'savedData':products}))
console.log('pro chng: =>'+JSON.stringify(allProducts))
},[allProducts]);

	// const [success, setSuccess] = useState(true);

	const value = {
		allProducts,
		setAllProducts: setAllProducts,
		// success,
		// setSuccess,
	};

	return (
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;

