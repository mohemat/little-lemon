import React from 'react'
import '../styles/Testimonials.css';
import TestimonialCard from './TestimonialCard';


function Testimonials() {
  return (
    <>
    <section className='testimonial-sec'>
        <h1>
        Testimonials
        </h1>
        <div className='test-div'>
        <TestimonialCard rating={"4.5"} name={"nick"} review={" ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet est ac arcu suscipit elementum. Sed vel odio fringilla, ultrices"}/>
        <TestimonialCard rating={"4"} name={"liam"} review={"mauris quis, viverra lacus. Cras vitae tempor urna. Donec diam lacus, vehicula vitae dapibus at, tincidunt ac magna. Cras ut massa at es"}/>
        <TestimonialCard rating={"4.9"} name={"sarah"} review={"tincidunt id eu quam. Phasellus massa purus, dignissim non consectetur sit amet, dignissim et turpis. Vestibulum maximus at velit"}/>
        {/* <TestimonialCard rating={"3.8"} name={"frank"} review={"et varius. Duis tristique erat nisl, id aliquam tortor efficitur at. Nulla sed tellus in augue dapibus cursus. Nulla posuere vehicula nisl id"}/> */}
        </div>
    </section>
    </>
  )
}

export default Testimonials