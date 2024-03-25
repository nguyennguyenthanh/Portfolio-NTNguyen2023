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
          <p>I know programming because I like website design because I am exposed to it every day from study, entertainment and research. That makes me very excited and to make a website, I have to become a Dev.</p>
          <p>After becoming a FE dev, I realized that to have a complete project I need more knowledge about BE dev. I learned from many social media sources and learned more in-depth knowledge about what a website developer needs. I am in need of a suitable job to strengthen my knowledge of FE dev, from there I can upgrade my knowledge of BE and become a good full-stack programmer.</p>
        </div>
      </div>
    </section>
  )
}

export default About