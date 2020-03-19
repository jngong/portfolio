import React from 'react'
import AboutMe from './AboutMe'
import Hero from '../Layout/Hero'
import '../../styles/Home.css'
import Skills from './Skills'

const Home = (props) => {
    return(
        <div className='main-container'>
            <Hero />
            <AboutMe />
            <Skills />
        </div>
    )
}

export default Home