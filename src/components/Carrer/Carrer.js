import React from 'react';
import './carrer.css';
import CV from "./../assets/cv/cv.pdf";

const Carrer = () => {
  const carrers = [
    {
      title: "Fullstack Developer",
      name: 'Software Engineer',
      year: ''
    },
  ]


  const educations = [
    {
      title: "Uni. of Information Technology - UIT",
      name: 'Software Engineer',
      year: '2015 - 2020'
    },
    // {
    //   title: "CyberSoft Academy",
    //   name: 'Software Engineer',
    //   year: '2022 - 2023'
    // },
    // {
    //   title: "Van Lang University - VLU",
    //   name: '',
    //   year: '2015 - 2020'
    // },
  ]


  return (
    <section id="carrer">
      <div className="carrer-education">
        <div className="carrer" data-aos="fade-right">
          <h3>Carrer</h3>
          <div className="c-b-container">
            {
              carrers.map((carrer, index) => (
                <div className="c-box" key={index}>
                  <h4>{carrer.title}</h4>
                  <strong>{carrer.name}</strong>
                  <span>{carrer.year}</span>
                </div>
              ))
            }
          </div>
        </div>

        <div className="carrer edu" data-aos="fade-left">
          <h3>Education</h3>
          <div className="c-b-container">
            {
              educations.map((edu, index) => (
                <div className="c-box" key={index}>
                  <h4>{edu.title}</h4>
                  <strong>{edu.name}</strong>
                  <span>{edu.year}</span>
                </div>
              ))
            }
          </div>
        </div>


      </div>
      <div className="btn-c">
        <a href={CV} download className='btn-link'>
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </section>
  )
}

export default Carrer;

