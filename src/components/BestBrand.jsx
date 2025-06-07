import React, { useRef } from 'react';
import brand1 from "../assets/bran1.jpg";
import brand2 from "../assets/brand2.jpg";
import brand3 from "../assets/brand3.jpg";
import brand4 from "../assets/brand4.jpg";
import brand5 from "../assets/brand5.jpg";
import brand6 from "../assets/brand6.jpg";

function BestBrand() {

    const brands = [
        {src: brand1},
        {src: brand2},
        {src: brand3},
        {src: brand4},
        {src: brand5},
        {src: brand6}
    ]

  return (


    <div className='best-slider'>
        <div className='container best'>
            <h5>محبوب ترین برند ها</h5>

            <div className='brand-card'>
                    {brands.map(brand => (
                        <div className='brand-item'>
                            <img src={brand.src} alt='brand' />
                        </div>
                    ))}
                
            </div>    
        </div>
    </div>
  )
}

export default BestBrand;