import React, { useState } from 'react'
import ContactForm from './ContactForm'

const Contact = () => {

    const [formDetails, setFormDetails] = useState({ name: '', _replyto: '', message: '' })
    const [status, setStatus] = useState('')

    const handleChange = e => {
        const { name, value } = e.target

        setFormDetails(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader("Accept", "application/json")
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                form.reset()
                setStatus("SUCCESS")
            } else {
                setStatus("ERROR")
            }
        }
        xhr.send(data)
    }

    return (
        <div className='contact-container'>
            <div className='section-header' id='contact'>
                <h2> Contact Me </h2>
                <div className='header-line'></div>
            </div>
            <div className='contact-description'>
                <p>
                    Thank you for taking the time to review my portfolio. You can connect with me on <a href="https://www.linkedin.com/in/jngong/" target="blank">LinkedIn</a> or send me a message via the form below. Hope to speak with you soon!
                </p>
            </div>
            <ContactForm formDetails={formDetails} handleChange={handleChange} handleSubmit={handleSubmit} status={status} />
        </div>

    )
}

export default Contact