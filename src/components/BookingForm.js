import React, { useState } from 'react'
import "../styles/BookingForm.css"

function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]);


    const isDisabled = date === "";

    let currentDate = new Date().toJSON().slice(0, 10);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, currentDate);
        alert("You Compeleted Your Reservation")
    }

  return (
    <div className='booking-form'>
      <h1>Book Your Table</h1>
    <form onSubmit={handleSubmit}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" min={currentDate} required="required" id="res-date" value={date} on onChange={(e) => setDate(e.target.value)} aria-label="Choose Date"/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" required="required" value={time} onChange={(e) => setTime(e.target.value)} aria-label="Choose Time">

      {availableTimes.map((availableTimes) => {
        return <option>{availableTimes}</option>
    })}
    
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" required="required" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} aria-label="Number of Guests"/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" required="required" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" disabled={isDisabled}/>
</form>
    </div>
  )
}

export default BookingForm