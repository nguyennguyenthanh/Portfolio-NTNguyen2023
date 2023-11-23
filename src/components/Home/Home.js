import React from 'react'
import "./home.css";
import avatar from "./../assets/images/apply.jpg";


const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, it's me</strong>
        <h1>DevT.N VietNam</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iure deleniti dolores autem aliquid officia expedita quasi quibusdam cumque repudiandae hic officiis dolorem magnam dignissimos eos, illum odio debitis veniam.</p>
        <a href="#summery" className='btn-link'>Scroll For Me</a>
      </div>
      <div className="home-img"  data-aos="fade-up">
        <div className="img-box">
          <img src={avatar} alt="avatar"  />

          <h2>DevT.N-VietNam <br /> <span>Front-end Developer</span></h2>

          <div className="social">
            <a href="#!">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC6_eB5n4pTheDSuJxqGeeAw">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://github.com/nguyennguyenthanh">
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