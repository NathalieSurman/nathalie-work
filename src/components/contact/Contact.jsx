import React from 'react'
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  //NOTE: We have to npm install emailjs-com --save to use the email.js //
  const form = useRef()

  //NOTE: we got this code from https://www.emailjs.com/docs/examples/reactjs/  if you need this again
  //NOTE: GO HERE for step-by-step guidelines ---> https://devjoe.medium.com/contact-form-with-react-using-emailjs-5bdd8bf1524b   ////
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,  form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

  return (
    <section id='contact' className='section__contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>onepiecenat@hotmail.com</h5>
          <a href="mailto:onepiecenat@hotmail.com" target="_blank"> Send a Message</a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact