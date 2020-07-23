import React from 'react'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import GitHubIcon from '@material-ui/icons/GitHub'

const FeaturedProjectCard = (props) => {

    const {title, overview, tech_stack, image, site_link, github_link} = props.project
    return(
        <div className='featured-project-card'>
            <a href={site_link} target="_blank">
                <img src={image} alt={title} className='featured-project-card-image'/>
            </a>
            <h2>{title}</h2>
            <p>{overview}</p>
            <h4>Tech Stack:</h4>
            <p>{tech_stack}</p>
            <div className='icon-row'>
                <a href={site_link} target="_blank"> <OpenInNewIcon /></a>
                <a href={github_link} target="_blank"> <GitHubIcon /></a>
            </div>
        </div>
    )
}

export default FeaturedProjectCard