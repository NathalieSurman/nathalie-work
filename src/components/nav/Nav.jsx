
import "./nav.css"
import{AiOutlineHome, AiOutlineUser, AiOutlineMessage} from "react-icons/ai"
import {RiContactsBookLine} from "react-icons/ri"
import {MdWorkOutline} from "react-icons/md"
import { useState } from "react"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      {/* {We want to display when the user clicks on a icon/link it is shown if it is active NOTE: in our CSS Nav we have a className called active} */}
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><RiContactsBookLine/></a>
      <a href="#portfolio"  onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav