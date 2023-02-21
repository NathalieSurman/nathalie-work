import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/myproject.png"
import IMG2 from "../../assets/myproject2.png"
import IMG3 from "../../assets/animeprj.png"
import IMG4 from "../../assets/animeprj1.png"
import IMG5 from "../../assets/groupprj.png"
import IMG6 from "../../assets/groupprj2.png"

const Portfolio = () => {
  return (
    <section id='portfolio' className='section__portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="myfinalprj" />
          </div>
          <h3>Just The Scraps</h3>
          <p>Just the Scraps is a free market place for fashion designers or people who love to sew but don't know what to do with their extra fabrics to donate these fabrics back to the community. 
            This website allows you to post your fabrics, rolls of fabric, or scraps of fabric in hopes that others can make something out of nothing.</p>
          <a href="https://github.com/NathalieSurman/Just-The-Scraps" className='btn' target="_blank">Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="myfinalprj" />
          </div>
          <p> ⚙️ Users can get items once they have login, they can also post their own fabric/scraps, Users can add their image and they can delete
            what they have posted.
          </p>
          <p> ⚙️ Technologies used: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git, GitHub</p>
          <p> ⚙️ API used: Auth0, and Cloudinary</p>
          <a href="https://github.com/NathalieSurman/Just-The-Scraps" className='btn' target="_blank">Github</a>
        </article>
        {/* {HERE IS THE END OF MY FINAL PROJECT} */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="anime" />
          </div>
          <h3>Anime Restaurant</h3>
          <p>Anime Restaurant is a place for anime lovers who wish to order some yummy anime food.</p>
          <a href="https://github.com/NathalieSurman/react-fetch" className='btn' target="_blank">Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="animefood" />
          </div>
            <p> ⚙️ Users can choose which anime food they wish to order, Uses can fill out their information, select which food, place the order
              and finally the user will be redirected to a confirmation page</p>
            <p> ⚙️ Technologies used: HTML, CSS, JavaScript, React, Git, GitHub</p>
            <a href="https://github.com/NathalieSurman/react-fetch" className='btn' target="_blank">Github</a>
        </article>
        {/* {HERE IS THE END OF THE ANIME RESTAURANT} */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="group" />
          </div>
          <h3>The Night Watchers</h3>
          <p>The night watchers is a E-commerce shop for watches and other tech. This was a group project, and due to privacy concerns,
            the source code is kept private.
          </p>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="groupprj" />
          </div>
          <p> ⚙️ Users can view all items, add items to cart, add more to their cart or delete an item,
            users can fill out their information before checkout, which will redirected them to a confirmation page once
            the order is place.
          </p>
          <p> ⚙️ Technologies used: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git, GitHub</p>
        </article>
      </div>
    </section>
  )
}

export default Portfolio