import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pridhi Virmani</a>
      <ul className='perlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/pridhi_virmani/"><FiInstagram/></a>
        {/* <a href="https://twitter.com/SujalGera"><FiSnapChat/></a> */}
        <a href="https://www.linkedin.com/in/pridhi-virmani-12054b205/"><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made with &#10084; by Pridhi Virmani</small>
      </div>
    </footer>
  )
}

export default Footer