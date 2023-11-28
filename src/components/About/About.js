import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-heading"  data-aos="flip-left">
          <strong>About me</strong>
          <h3>Designing with passion for Problem Solving</h3>
          <a href="tel: 0974567975" className='btn-link'>
            097-4567-975 <i className="fa-solid fa-phone-flip"></i>
          </a>
        </div>
        <div className="about-details" data-aos="flip-right">
          <p>At first, I pursued programming because I liked website design because I was exposed to it every day from studying, entertainment and research. That made me very interested and I learned that to be able to design such a website, the first thing I need to do is become an FE dev.</p>
          <p>After designing a website from an FE dev position, I realized that to complete a website I need to know more knowledge about BE dev. I was fascinated by that and I learned a lot more. More in-depth knowledge of what a website programmer needs. I'm also learning BE for myself and hope it can be of some benefit to your company's goals.</p>
        </div>
      </div>
    </section>
  )
}

export default About