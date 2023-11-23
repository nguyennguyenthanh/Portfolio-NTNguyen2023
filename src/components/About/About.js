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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis qui laborum tenetur in. Excepturi quod voluptas officiis iure reiciendis? Reiciendis eveniet nobis quae dicta ea error quidem provident commodi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis qui laborum tenetur in. Excepturi quod voluptas officiis iure reiciendis? Reiciendis eveniet nobis quae dicta ea error quidem provident commodi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis qui laborum tenetur in. Excepturi quod voluptas officiis iure reiciendis? Reiciendis eveniet nobis quae dicta ea error quidem provident commodi.</p>
        </div>
      </div>
    </section>
  )
}

export default About