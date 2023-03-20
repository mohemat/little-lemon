import React from 'react'
import '../styles/Chicago.css';
import chicagoImage1 from "../icons_assets/restaurant.jpg"
import chicagoImage2 from "../icons_assets/restaurant chef B.jpg"



function Chicago() {
  return (
    <div className='chicago'>
    <section>
          <h1 className='primary-color'>Little Lemon</h1>
          <h2 className='white-text'>Chicago</h2>
          <p className='white-text'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </p>
    </section>
        <aside>
          <div className='chicago-image'>
          <img className='image1' src={chicagoImage1} width={350} alt="food"/>
          <img className='image2' src={chicagoImage2} width={350} alt="food"/>

          </div>
          
        </aside>
        </div>
  )
}

export default Chicago