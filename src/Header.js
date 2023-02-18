import React from 'react'
import './Header.css';
import logo from './icons_assets/Logo.svg'


function Header() {
  return (
    <header>
        <nav>
          <img src={logo} alt="logo"/>
        <ul>
    <li><a href="/home">Home</a></li>        
    <li><a href="/about">About Us</a></li>
    <li><a href="/menu">Menu</a></li>  
    <li><a href="/reservation">Reservation</a></li>        
    <li><a href="/order">Order Online</a></li>
    <li><a href="/login">Login</a></li>  
  </ul>
        </nav>
      </header>
  )
}

export default Header