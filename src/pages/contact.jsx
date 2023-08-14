import React from 'react'
import '../styles/Contact/Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-inner">
        <div className="left">
          <div>
            <h1>Get your free consultation now!</h1>
            <h5>Small or big, your business will love our financial help and business <br /> consultations! We are happy when our clients are too…</h5>
          </div>
          <h3>New York, 4456 Parker Rd. Allentown, <br />
          New Mexico 4567</h3>
          <h4>+1(505) 556-9999 <br />
          namecompany@example.com</h4>
        </div>
        <div className="right">
          <div className="top">
            <h3>FREE CONSULTATION</h3>
          </div>
          <div className="bottom">
            <h2>Sign me up!</h2>
            <h5>Actually, this is quite simple to achieve – because each time <br /> we help them in sorting out different accounting intricacies <br /> or save the day before filing the taxes, they are happy <br /> indeed.</h5>
            <div className="email">
              <input placeholder='Enter a valid email address' type="text" className="email-input" />
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
