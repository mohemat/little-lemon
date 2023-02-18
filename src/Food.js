import React from 'react'
import './Food.css';

export default function Food({foodPic}) {
  return (
    <article className='food-card'>
          <img src={foodPic} className="food-pic" alt="food"/>
          <div className='food-titles'>
          <h4>greek salad</h4>
<h4 className='food-price'>$12.99</h4>
          </div>

<p>
  asduahsfuiahsfu
  dsgsdgg sdg sd gsd gsd gs dsgsdggsdg sdgsdg
  sdgsdgdsgds
</p>
<a href="/"> Order a delivery</a>
          </article>
  )
}
