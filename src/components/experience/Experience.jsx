import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience' className='section__experience'>
      <h5>My Skill</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>React</h4>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>Adobe Photoshop</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>Adobe Illustrator</h4>
            </article>
          </div>
        </div>
        {/* THIS IS THE END OF THE FRONTEND PART */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>MongoDB</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>Express</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>Node.js</h4>
            </article>
    
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience