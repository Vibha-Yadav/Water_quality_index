import React from 'react';

function Contact() {
  return (
    <div id='contact'>
        <h3>
            Send Us mail.
        </h3>
        <div className='contact-input'>
           <input type='email' placeholder='example@gmail.com'>
            <a href='#'>Contact</a>
           </input>
        </div>
    </div>
  )
}

export default Contact;