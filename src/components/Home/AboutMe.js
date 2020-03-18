import React from 'react'
import Profile from '../../images/jennifer-gong.jpg'

const AboutMe = () => {
    return(
        <div className='section-container'>
            <div className='section-header'>
                <h2>About Me</h2>
                <div className='line'><hr/></div>
            </div>
            <div className='about-text'>
                <p>Diligent and detail-oriented software developer with a strong background in content and digital marketing and a passion for creating intuitive, engaging user experiences.</p>
                <p>As a seasoned marketer, I took pride in my ability to communicate the value of great products to customers and prospects, but had always been curious about what it took to build them. Now as a software developer, I’m learning new technologies everyday that enable me to build products that can help people live their lives better.</p>
                <p>I take a thoughtful and strategic approach to making decisions and solving complex coding problems, and strive to work in a collaborative, creative and purpose-driven environment where I can make a positive impact.</p>
            </div>
            <div className='profile-image'>
                <img src={Profile} alt="Jennifer Gong Profile Picture"/>
            </div>
        </div>
    )
}

export default AboutMe