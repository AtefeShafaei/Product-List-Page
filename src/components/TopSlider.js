import React, { useEffect, useState } from 'react';


function TopSlider({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startAuto, setStartAuto] = useState(true);

    useEffect(() => {
        if (!startAuto) return;
      
        const timeout = setTimeout(() => {
          goToNext();
        }, 5000);
      
        return () => clearTimeout(timeout);

      }, [currentIndex, startAuto]);
      





    const goToPrev = () => {
        setStartAuto(false);
        setCurrentIndex(prev => (prev === 0 ? slides.length-1 : prev - 1));
        setTimeout(() => setStartAuto(true), 100);
    }

    const goToNext = () => {
        setStartAuto(false);
        setCurrentIndex(prev => (prev === slides.length-1 ? 0 : prev + 1));
        setTimeout(() => setStartAuto(true), 100);
    }

    const goCurrent = (index) => {
        setStartAuto(false);
        setCurrentIndex(index);
        setTimeout(() => setStartAuto(true), 100);
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


            <div className='next-slide' onClick={goToNext}>
            
            ❰
            </div>

            <div className='prev-slide' onClick={goToPrev}>
            ❱
            </div>


            <div className='dots'>
                {slides.map((j, index) =>  (
                    <span className={`${index === currentIndex ? 'dot active' : 'dot'}`} onClick={() => goCurrent(index)}></span>
                ))}
            </div>

            

        </div>
    </div>
  )
}

export default TopSlider;