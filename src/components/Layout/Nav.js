import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

const Nav = () => {
    return(
        <nav>
            <div>About Me</div>
            <div>Projects</div>
            <div><a href="https://docdro.id/N5Wca5U" target="blank">Resume</a></div>
            <div><a href="https://www.linkedin.com/in/jngong/" target="blank"><LinkedInIcon /></a></div>
            <div><a href="https://github.com/jngong" target="blank"><GitHubIcon /></a></div>
            <div><EmailIcon /></div>
        </nav>
    )
}
export default Nav