import React from 'react';
import leftbanner from "../assets/leftbanner.jpg";
import rightbanner from "../assets/rightbanner.jpg";

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-container'>

            <div className='left-banner'>
                <img src={rightbanner} alt='leftbanner' />
            </div>


            <div className='right-banner'>
                <img src={leftbanner} alt='rightbanner' />
            </div>

        </div>
    </div>
  )
}

export default Banner