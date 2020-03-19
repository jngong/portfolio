import React, { useState } from 'react'
import ContactForm from './ContactForm'
import LinkedInIcon from '@material-ui/icons/LinkedIn'


const Contact = () => {

    const [formDetails, setFormDetails] = useState({ name: '', email: '', message: '' })

    const handleChange = e => {
        const { name, value } = e.target

        setFormDetails(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className='contact-container'>
            <div className='section-header' id='contact'>
                <h2> Contact Me </h2>
                <div className='header-line'></div>
            </div>
            <div className='contact-description'>
                <p>Thank you for taking the time to review my portfolio. I'm currently open to full-time, freelance and contract opportunities.</p>
                <p> You can connect with me on <a href="https://www.linkedin.com/in/jngong/" target="blank">LinkedIn</a> or send me a message via the form below. Talk to you soon!
            </p>
            </div>
            <ContactForm formDetails={formDetails} handleChange={handleChange} />
        </div>

    )
}

export default Contact