import React, {useContext, createContext} from "react";
import products from '../data';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    return (
        <ProductContext.Provider value={{products:products}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext);