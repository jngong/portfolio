import React, {useState} from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    
    const [formDetails, setFormDetails ] = useState({name: '', email: '', message: ''})

    return(
        <div className='contact-container'>
            <ContactForm formDetails={formDetails} />
        </div>

    )
}

export default Contact