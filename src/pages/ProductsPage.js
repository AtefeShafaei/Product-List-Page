import React from 'react';
import products from '../data';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';


function ProductsPage({product, onAddToCart}) {



  return (
    <>
    <Header />
 
    <div className='container'>
        <div className='row product-page'>
            {products.map(prod => (
                <div key={prod.id} className="col-sm-6 col-md-3 mb-4">
                    <ProductCard product={prod} onAddToCart={onAddToCart} />
                </div>
            ))}

        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default ProductsPage