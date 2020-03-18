import React, {useState} from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    
    const [formDetails, setFormDetails ] = useState({name: '', email: '', message: ''})

    const handleChange = e => {
        const {name, value } = e.target

        setFormDetails(prevState => ({...prevState, [name]: value}))
    }

    return(
        <div className='contact-container'>
            <ContactForm formDetails={formDetails} handleChange={handleChange} />
        </div>

    )
}

export default Contact