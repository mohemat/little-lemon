import React from 'react'
import BookingForm from "./BookingForm.js"
import { useReducer } from "react"

function BookingPage() {
  return (
    <div className='booking-content'>
      <BookingForm />
    </div>
  )
}

export default BookingPage