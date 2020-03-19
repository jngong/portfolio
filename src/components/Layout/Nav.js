import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

const Nav = () => {
    return(
        <nav>
            <div className='navlink'><a href="#about-me">About Me</a></div>
            <div className='navlink'><a href="#projects">Projects</a></div>
            <div className='navlink'><a href="https://docdro.id/N5Wca5U" target="blank">Resume</a></div>
            <div className='navlink'><a href="https://www.linkedin.com/in/jngong/" target="blank"><LinkedInIcon /></a></div>
            <div className='navlink'><a href="https://github.com/jngong" target="blank"><GitHubIcon /></a></div>
            <div className='navlink'><a href="#contact"><EmailIcon /></a></div>
        </nav>
    )
}
export default Nav