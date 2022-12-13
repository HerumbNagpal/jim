import React from 'react'
import './Footer.css'
import fb from '../../assets/fb.png'
import ig from '../../assets/instagram.png'
import logo from '../../assets/logoComplex.jpg'
import www from '../../assets/www.png'
const Footer = () => {
  return (
    <div className='Footer-container' id='footer'>
      <hr />
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
      <div className="footer">
        <div className='social-link'>
          <a href="https://www.instagram.com/pacificsportsrohini/?hl=en"><img className='socials' src={ig} alt="" /></a>
          <a href="http://www.pacificsportscomplex.in/"><img src={www} className='socials' alt="" /></a>
          <a href="https://www.facebook.com/pacificsportsrohini/"><img className='socials' src={fb} alt="" /></a>
        </div>

        <div className='logo-f'>
          <img className='complex' src={logo} alt="" />
        </div>
        <div className="add">
        <span>Ⓒ Pacific Sports Complex</span>
        <span></span>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
