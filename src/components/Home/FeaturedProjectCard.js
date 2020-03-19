import React from 'react'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import GitHubIcon from '@material-ui/icons/GitHub'

const FeaturedProjectCard = (props) => {

    const {title, overview, tech_stack, image, site_link, github_link} = props.project
    return(
        <div className='featured-project-card'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{overview}</p>
            <h4>Tech Stack:</h4>
            <p>{tech_stack}</p>
            <div>
                <a href={site_link} target="blank"><OpenInNewIcon /></a>
                <a href={github_link} target="blank"><GitHubIcon /></a>
            </div>
        </div>
    )
}

export default FeaturedProjectCard