import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
return (
    <div className="header__socials">
        {/* {the target="_blank" is so that it can it opens a new tab when clicked} */}
        <a href="https://www.linkedin.com/in/nathaliesurman/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/NathalieSurman" target="_blank"><BsGithub/></a>
    </div>
)
}

export default HeaderSocials