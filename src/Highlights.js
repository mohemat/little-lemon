import React from 'react'
import Food from './Food'
import './Highlights.css';
import greekSalad from "./icons_assets/greek salad.jpg"
import bruchetta from "./icons_assets/bruchetta.svg"
import lemonDesert from "./icons_assets/lemon dessert.jpg"



function Highlights() {
  return (
    <section className='highlight-sec'>
      <div className='top-d'>
      <h1>This weeks specials!</h1>
          <button className='menu'>Online Menu</button>
      </div>
          <div className='food-div'>
          <Food foodPic={greekSalad}/>
          <Food foodPic={bruchetta}/>
          <Food foodPic={lemonDesert}/>
          </div>
          

        </section>
  )
}

export default Highlights