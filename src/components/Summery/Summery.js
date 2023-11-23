import React from 'react';
import './summery.css';
import CV from './../assets/cv/cv.pdf';

const Summery = () => {
  return (
    <section id="summery">
      <div className="summery-heading"  data-aos="fade-right">
        <strong>My Skillset</strong>

        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <a href={CV} download className='btn-link'>
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>

      <div className="summery-details"  data-aos="fade-left">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatum alias quasi, exercitationem rem distinctio facere hic rerum ullam eligendi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatum alias quasi, exercitationem rem distinctio facere hic rerum ullam eligendi.
          Fugit, cumque! Repudiandae doloribus nostrum quidem quisquam id perferendis debitis, unde repellendus ipsa quibusdam harum asperiores, laudantium aliquam blanditiis similique.
          Doloremque ea reiciendis facere veritatis delectus enim impedit, id facilis quis quia nisi suscipit aspernatur, nemo aliquam reprehenderit dolor qui!
        </p>
      </div>
    </section>
  )
}

export default Summery