import React from 'react'
import "./home.css";
import avatar from "./../assets/images/apply.jpg";


const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, it's me</strong>
        <h1>DevN.N VietNam</h1>
        <p>Having passion with computer, I chose to become a professional programmer. I approached and developed my skillset starting with coding a website and I was fascinated by that. My goal in the next 2 years is to become a senior FE dev. Beside that, i will also try to learn and  improve BE knowledge to become a basic full-stack dev.</p>
        <a href="#summery" className='btn-link'>Scroll For Me</a>
      </div>
      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={avatar} alt="avatar" />

          <h2>DevN.N-VietNam <br /> <span>Front-end Developer</span></h2>

          <div className="social">
            <a href="https://www.facebook.com/nguyen.nguyenthanh.334">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC6_eB5n4pTheDSuJxqGeeAw">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://github.com/nguyennguyenthanh?tab=repositories">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <a href="#summery" className='hire-me'>Hire me</a>
        </div>
      </div>
    </section>
  )
}

export default Home;