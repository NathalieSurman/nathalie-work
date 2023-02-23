import React from 'react'
import "./about.css"
import ME from "../../assets/me.jpg"

const About = () => {
  return (
    <section id='about' className='section__about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="me" />
        </div>
      </div>
      <div className='about__content'>
      <p>Hello! Thanks for scrolling this far!! 🤗 My name is Nathalie and I am a Web Developer with a recent background in Fashion Design.
        I recently got my Full Stack Web Development certificate from Concordia University(cohort 20).
        Other than coding, I spend most of my free time playing video games, reading manhwa, and baking. 🤓 
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    
    </section>
  )
}

export default About