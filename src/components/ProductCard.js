import React from 'react';

function ProductCard({product, onAddToCart}) {
  return (
    <div className='card h-100 cards'>
        <img src={product.image} alt={product.name} className='card-img-top' />
        <div className='card-body d-flex flex-column'>
            <h6 className='card-title'>{product.name}</h6>
            <p className='card-text mt-3'>{product.price} تومان </p>
            <button className='btn btn-primary mt-auto' onClick={() => onAddToCart(product)}> افزودن به سبد خرید </button>
        </div>
    </div>
  )
}

export default ProductCard