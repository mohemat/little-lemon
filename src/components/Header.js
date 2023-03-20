import React from 'react'
import '../styles/Header.css';
import logo from '../icons_assets/Logo.svg'
import { Link } from "react-router-dom";



function Header() {
  return (
    <header>
        <nav>
          <img src={logo} alt="logo"/>
        <ul>
    <li><Link to="/">Home</Link></li>        
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/menu">Menu</Link></li>  
    <li><Link to="/booking">Reservation</Link></li>        
    <li><Link to="/order">Order Online</Link></li>
    <li><Link to="/login">Login</Link></li>  
  </ul>
        </nav>

      </header>

  )
}

export default Header