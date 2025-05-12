import React from 'react';
import midSlide from "../assets/midSlide1.jpg";
import slidetext from "../assets/slidetext.svg"

function MidSlider() {

  return (
    <div className='mid-slider'>
        <div className='container mid'>

            <div className='swipper-slide'>
                <img src={slidetext} alt='text' className='text-pic'/>
                <img src={midSlide} alt='mid' className='mid-pic' />
                <a href='#'>
                    مشاهده همه  
                    <span>&gt;</span>		 
                </a>
            </div>

            <div className='swipper-card'>
            <p>پیشنهاد شگفت انگیز</p>
            <p>پیشنهاد شگفت انگیز</p>
            <p>پیشنهاد شگفت انگیز</p>
            </div>
        </div>
    </div>
  )
}

export default MidSlider;