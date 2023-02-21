import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/me3.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
    <div className="wrapper">
      <div className="child">
      <h5>Hey I'm</h5>
      <h1>Nathalie Surman</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <div className="me__image">
          <img src={ME} alt="me" />
        </div>
      </div>
    </div>
{/* 
      <HeaderSocials/> */}
      {/* <div className='div__me'>
        <div className="me__image">
          <img src={ME} alt="me" />
        </div>
      </div> */}
      {/* <a href="#contact" className="scroll__down">Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header
