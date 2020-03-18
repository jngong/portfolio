import React from 'react'
import AboutMe from './AboutMe'
import Hero from '../Layout/Hero'

const Home = (props) => {
    return(
        <div className='main-container'>
            <Hero />
            <AboutMe />
        </div>
    )
}

export default Home