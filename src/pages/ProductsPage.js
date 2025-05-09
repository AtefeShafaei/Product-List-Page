import React from 'react';
import products from '../data';
import ProductCard from '../components/ProductCard';

function ProductsPage({product, onAddToCart}) {



  return (
    <>
 
    <div className='container'>
        <div className='row'>
            {products.map(prod => (
                <div key={prod.id} className="col-sm-6 col-md-4 mb-4">
                    <ProductCard product={prod} onAddToCart={onAddToCart} />
                </div>
            ))}

        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default ProductsPage