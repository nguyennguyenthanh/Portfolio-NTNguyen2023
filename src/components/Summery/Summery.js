import React from 'react';
import './summery.css';
import CV from './../assets/cv/cv.pdf';

const Summery = () => {
  return (
    <section id="summery">
      <div className="summery-heading" data-aos="fade-right">
        <strong>My Skillset</strong>

        <h2>Below is my CV <br /> Hope you take a look it</h2>
        <a href={CV} download className='btn-link'>
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>

      <div className="summery-details" data-aos="fade-left">
        <p>
          Even though my skills aren't that impressive yet, I still hope that you can check it out. And I firmly believe that in the future I will always improve my skill set to make it better, to achieve my own goals as well as the goals and achievements that the company wants to achieve.
        </p>
      </div>
    </section>
  )
}

export default Summery