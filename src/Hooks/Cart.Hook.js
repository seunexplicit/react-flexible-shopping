import React { useState, createContext } from 'react';

export const CartContext = createContext();

export default function cartHook({children}){

	const cart = useState([]);
	return(
		<CartContext.Provider value={cart}>
			{children}
		</CartContext.Provider>
		)
}