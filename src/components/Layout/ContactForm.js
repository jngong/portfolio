import React from 'react'

const ContactForm = (props) => {

    return(
        <form>
            <label>Full Name</label>
            <input 
                autoComplete='off'
                type='text'
                name='name'
                value={props.formDetails.name}
                onChange={props.handleChange}
            />
            <label>Email Address</label>
            <input 
                autoComplete='off'
                type='text'
                name='email'
                value={props.formDetails.email}
                onChange={props.handleChange}
            />
            <label>Message</label>
            <textarea 
                autoComplete='off'
                name='message'
                value={props.formDetails.message}
                onChange={props.handleChange}
            />
            <button>
                Send 
            </button>
        </form>
    )
}

export default ContactForm