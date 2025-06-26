import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-heading" data-aos="flip-left">
          <strong>About me</strong>
          <h3>Designing with passion for Problem Solving</h3>
          <a href="tel: 0974567975" className='btn-link'>
            097-4567-975 <i className="fa-solid fa-phone-flip"></i>
          </a>
        </div>
        <div className="about-details" data-aos="flip-right">
          <p>I know programming and I like software engineering because I am exposed to it every day through learning, entertainment and research. It makes me very excited and creating a web/app product has given me more motivation to improve myself and become a real software developer.</p>
          <p>After accumulating experience and developing programming skills in many projects. I have learned from many documents and have more in-depth knowledge of what a software developer needs. I am looking for a suitable job to enhance my own experience and also to contribute positively to the development of the company.</p>
        </div>
      </div>
    </section>
  )
}

export default About