import React from 'react'
import '../styles/Footer.css'
import footerImage from '../icons_assets/Mario and Adrian A.jpg'

function Footer() {
  return (
    <div className='footer'>
        <section>
          <img src={footerImage} width={180} className='footer-image' />
    </section>
        <aside className='foot-side'>
          <div className='foot-nav'>
            <h5>
            Doormat Navigation
            </h5>
            <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservation</a></li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Login</a></li>
    </ul>

          </div>
          <div className='foot-contact'>
          <h5>
            Contact
            </h5>
            <ul>
      <li><a href="#">Address</a></li>
      <li><a href="#">Phone Number</a></li>
      <li><a href="#">Email</a></li>
    </ul>


          </div>
          <div className='foot-social'>
          <h5>
            Social Media Links
            </h5>
            <ul>
      <li><a href="#">Address</a></li>
      <li><a href="#">Phone Number</a></li>
      <li><a href="#">Email</a></li>
    </ul>


          </div>
          
        </aside>
    </div>
  )
}

export default Footer