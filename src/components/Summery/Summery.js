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
          Please take time to scroll till the end and have a look at my works. <br />
          <i class="fa-solid fa-arrows-split-up-and-left" style={{fontSize:'20px'}}/> Click on the button "Get CV" for details.
        </p>
      </div>
    </section>
  )
}


export default Summery