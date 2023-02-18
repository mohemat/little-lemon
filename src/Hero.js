import React from 'react'
import './Hero.css';
import heroImage from "./icons_assets/restauranfood.jpg"


function Hero() {
  return (
    <div className='hero'>
    <section>
          <h1 className='primary-color'>Little Lemon</h1>
          <h2 className='white-text'>Chicago</h2>
          <p className='white-text'>
            We are a family owned mediterreanean restaurant, focused on traditional recipes served with a modren twist.

          </p>
          <button className='reserve'>Reserve a Table</button>
    </section>
        <aside>
          <div className='image-div'>
          <img src={heroImage} width={250} alt="food"/>
          </div>
          
        </aside>
        </div>
  )
}

export default Hero