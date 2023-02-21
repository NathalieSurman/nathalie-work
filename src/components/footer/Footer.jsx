import React from 'react'
import "./footer.css"
import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nathalie</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/NathalieSurman"><AiOutlineGithub/></a>
        <a href="https://www.linkedin.com/in/nathaliesurman/"><AiOutlineLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer