import React from 'react';
import category1 from '../assets/Category1.jpg';
import category2 from '../assets/Category2.jpg';
import category3 from '../assets/Category3.jpg';
import category4 from '../assets/Category4.jpg';


function Category() {

    const Category = [
        {id:1, url:category1, name:"category1", title:"سلامت"},
        {id:2, url:category2, name:"category2", title:"مکمل"},
        {id:3, url:category3, name:"category3", title:"ضد آفتاب"},
        {id:4, url:category4, name:"category4", title:"بهداشتی"}
      ]

  return (
    <section className='category'>
      <div className='container category-content'>

        <h5>خرید بر اساس دسته بندی</h5>

          <div className='category-items'>

            {Category.map((item, index) => (
                <div className='category-item' key={index}>
                    <img src={item.url} alt={item.name}/>
                    <p>{item.title}</p>
              </div>
            ))}

          </div>
      </div>
    </section>
  )
}

export default Category