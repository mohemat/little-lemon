import React from 'react'
import '../styles/TestimonialCard.css'
import userImage from "../icons_assets/user.jpg"

function TestimonialCard({rating, name, review}) {
  return (
    <div className='testi-div'>
      <h3 className='rating-text'>
        {rating}
      </h3>
      <img src={userImage} alt='user' className='user-image'/>
      <h3 className='name-text'>
        {name}
      </h3>
      <p className='review-text'>
      {review}
      </p>
    </div>
  )
}

export default TestimonialCard