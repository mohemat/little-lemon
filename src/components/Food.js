import React from 'react'
import '../styles/Food.css';

export default function Food({foodPic, foodDesc, foodPrice, foodTitle}) {
  return (
    <article className='food-card'>
      <div className='food-pic-div'>
      <img src={foodPic} className="food-pic" alt="food"/>

      </div>
          <div className='food-titles'>
          <h4>{foodTitle}</h4>
<h4 className='food-price'>${foodPrice}</h4>
          </div>

<p>
  {foodDesc}
</p>  
<a href="/"> Order a delivery</a>
          </article>
  )
}
