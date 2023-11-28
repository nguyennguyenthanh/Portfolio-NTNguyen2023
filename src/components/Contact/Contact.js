import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-down">
      <strong>What's Next</strong>
      <h3>Let's Work Together!</h3>
      <p>Hopefully my sharing above will provide you with all the necessary information about me. If suitable, please send me an email. I hope to receive a good response from you soon</p>
      <a href="mailto:thanhnguyennguyen1228@gmail.com" className='btn-link contact-btn'>
        Write Me An Email <i className="fa-solid fa-envelope"></i>
      </a>
    </section>
  )
}

export default Contact