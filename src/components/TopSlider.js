import React, { useState } from 'react';


function TopSlider({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        
    }

    const goToNext = () => {

    }



  return (
    <div className='slider'>
        <div className='slider-container'>

            {slides.map((slide, index) => (
                <div
                style={{ backgroundImage: `url(${slide.url})` }} 
                key={index}
                className= {`slide ${index === currentIndex ? 'active' : ''}`}
                >
                </div>
            ))}


            <div className='prev-slide' onClick={goToPrev}>
            ❰
            </div>
            
            <div className='next-slide' onClick={goToNext}>
            ❱
            </div>

            <div className='dots'>
                <span className='dot active'></span>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>

        </div>
    </div>
  )
}

export default TopSlider;