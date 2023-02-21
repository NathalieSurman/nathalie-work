import React from 'react'
import CV from "../../assets/resume.pdf"


//--CTA stands for CALL TO ACTION ----//
const CTA = () => {
  return (
    <div className='cta'>
    {/* {This is how you can make something on your website downloadable}*/}
        {/* <a href={CV} download className="btn"> Download CV</a> */}
        <a href="https://www.linkedin.com/in/nathaliesurman/" className='btn'>Linkedin</a>
        <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        <a href="https://github.com/NathalieSurman" className='btn' target="_blank">Github</a>
    </div>
  )
}

export default CTA