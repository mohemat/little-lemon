import React from 'react'
import Food from './Food'
import '../styles/Highlights.css';
import greekSalad from "../icons_assets/greek salad.jpg"
import bruchetta from "../icons_assets/bruchetta.svg"
import lemonDesert from "../icons_assets/lemon dessert.jpg"



function Highlights() {
  return (
    <section className='highlight-sec'>
      <div className='top-d'>
      <h1>This weeks specials!</h1>
          <button className='menu'>Online Menu</button>
      </div>
          <div className='food-div'>
          <Food foodPic={greekSalad} foodTitle={"Greek Salad"} foodPrice={12.99} foodDesc={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." }/>
          <Food foodPic={bruchetta} foodTitle={"Bruchetta"} foodPrice={5.99} foodDesc={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "}/>
          <Food foodPic={lemonDesert} foodTitle={"Lemon Dessert"} foodPrice={5.00} foodDesc={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}/>
          </div>
          

        </section>
  )
}

export default Highlights