import React from 'react';

function ProductCard({product, onAddToCart, variant= "default"}) {

  const cardClass = 
  variant === 'mid-slider' ? 'card mid-slider-card' : 'card h-100 cards shadow-sm rounded-3';


  return (
    <div className={cardClass}>
        <img src={product.image} alt={product.name} className='card-img-top' />
        <div className='card-body d-flex flex-column'>
          {variant === 'mid-slider' ? (
            <>
            <p className='card-text text-center text-danger fw-bold mt-2' style={{ fontSize: '12px' }}> {product.price} تومان </p>

            <button className='btn btn-success btn-sm mt-2' style={{ fontSize: '8px'}} onClick={() => onAddToCart(product)}> افزودن به سبد خرید </button>
            </>
          ) : (
            <>
            <h6 className='card-title'>{product.name}</h6>
            <p className='card-text mt-3 fw-bold text-success'>{product.price} تومان </p>
            <button className='btn btn-primary mt-auto' onClick={() => onAddToCart(product)}> افزودن به سبد خرید </button>
            </>
          )}

        </div>
    </div>
  )
}

export default ProductCard