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
            />
            <label>Email Address</label>
            <input 
                autoComplete='off'
                type='text'
                name='email'
                value={props.formDetails.email}
            />
            <label>Message</label>
            <textarea 
                autoComplete='off'
                name='message'
                value={props.formDetails.message}
            />
            <button>
                Send 
            </button>
        </form>
    )
}

export default ContactForm