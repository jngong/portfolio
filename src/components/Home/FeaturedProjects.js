import React from 'react'
import {projectData} from '../../data/projects'
import FeaturedProjectCard from './FeaturedProjectCard'

const FeaturedProjects = () => {

    const projects = projectData.map((project, i) => {
        return(
            <FeaturedProjectCard 
                key={i} 
                project={project} 
            />
        )
    })

    return (
        <div className='section-container projects'>
            <div className='section-header' id='projects'>
                <h2>Featured Projects</h2>
                <div className='header-line'></div>
            </div>
            <div className='featured-projects-container'>
                {projects}
            </div>
        </div>
    )
}

export default FeaturedProjects