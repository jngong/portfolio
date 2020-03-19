import React from 'react'
import { skillsData } from '../../data/skills'

const Skills = () => {

    const skills = skillsData.map((skill, i) => {
        return(
            <div key={i} className='skill'>
                <i className={`${skill.icon} devicon`}></i>
                <div className='skill-label'>{skill.name}</div>
            </div>
        )
    })

    return (
        <div className='section-container skills'>
            <div className='section-header' id='skills'>
                <h2>Technical Skills</h2>
                <div className='header-line'></div>
            </div>
            <div className='skills-container'>
                {skills}
            </div>
        </div>
    )
}

export default Skills