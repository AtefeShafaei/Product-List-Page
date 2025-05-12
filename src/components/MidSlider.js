import React, { useRef } from 'react';
import midSlide from "../assets/midSlide1.jpg";
import slidetext from "../assets/slidetext.svg";
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';

function MidSlider({product, onAddToCart}) {

    const {products} = useProducts();
    const scrollRef = useRef(null);

    const goToNextPro = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    const goToPrevPro = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }

  return (
    <div className='mid-slider'>
        <div className='container mid'>

            <div className='swipper-slide'>
                <img src={slidetext} alt='text' className='text-pic'/>
                <img src={midSlide} alt='mid' className='mid-pic' />
                <a href='#'>
                    مشاهده همه  
                    <span> &gt; </span>		 
                </a>
            </div>

            <div className='swipper-card'>
                <div className='mid-card' ref={scrollRef}>
                    {products.map(prod => (
                        <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart} variant='mid-slider' />
                    ))}
                </div>



                <div className='prev-pro' onClick={goToPrevPro}>
                    &gt;
                </div>

                <div className='next-pro' onClick={goToNextPro}>
                    &lt;
                </div>


            </div>
        </div>
    </div>
  )
}

export default MidSlider;