import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
}));


const ContactForm = (props) => {
    const classes = useStyles();
    return(
        <form 
            action='https://formspree.io/xdodleop'
            method='POST'
            className={classes.root} 
            autoComplete='off'
            onSubmit={props.handleSubmit}
        >
            <TextField 
                id='filled-name'
                name='name'
                label='Name'
                value={props.formDetails.name}
                onChange={props.handleChange}
                variant='filled'
            />
            <TextField 
                id='filled-email'
                name='_replyto'
                label='Email Address'
                value={props.formDetails._replyto}
                onChange={props.handleChange}
                variant='filled'
            />
            <TextField 
                id='filled-message'
                name='message'
                label='Let me know what you are interested in speaking about.'
                value={props.formDetails.message}
                onChange={props.handleChange}
                multiline
                rows='3'
                variant='filled'
            />
            {props.status === 'SUCCESS' ? <p>Thanks! I'll be in touch soon</p> : 
            <Button variant='contained' color='primary' size='medium' type='submit' value='Send'>
                Send Message
            </Button>}
            {props.status === 'ERROR' && <p>'Sorry, there was an error. Please try again.'</p>}
        </form>
    )
}

export default ContactForm