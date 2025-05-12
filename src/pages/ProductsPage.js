import React from 'react';
import products from '../data';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import TopSlider from '../components/TopSlider';
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import MidSlider from '../components/MidSlider';


function ProductsPage({product, onAddToCart}) {

  const slides = [
    {url: slide1, id:1},
    {url: slide2, id:2},
    {url: slide3, id:3}
  ]



  return (
    <>

    <Header />

    <TopSlider slides={slides} />

    <MidSlider />
 
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