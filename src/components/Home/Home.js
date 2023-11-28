import React from 'react'
import "./home.css";
import avatar from "./../assets/images/apply.jpg";


const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, it's me</strong>
        <h1>DevN.N VietNam</h1>
        <p>I have a passion for programming and I want to start with an FE position. My goal in the next 3 years is to become a Senior dev and improve my BE knowledge to become a basic full-stack dev. To achieve that, I will always upgrade my knowledge and hope to have a long-term workplace</p>
        <a href="#summery" className='btn-link'>Scroll For Me</a>
      </div>
      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={avatar} alt="avatar" />

          <h2>DevT.N-VietNam <br /> <span>Front-end Developer</span></h2>

          <div className="social">
            <a href="#!">
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