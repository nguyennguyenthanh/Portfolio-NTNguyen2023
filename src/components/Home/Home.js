import React from 'react'
import "./home.css";
import avatar from "./../assets/images/apply.jpg";


const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, it's me</strong>
        <h1>DevN.N VietNam</h1>
        <p>I am a software engineer with a strong background in JavaScript and NodeJs, my strength is learning new projects, products and technologies quickly. I strive to meet deadlines and deliver outstanding results. My short term goal is to become a senior person in the software field, my long term goal is to become an excellent project manager to bring core values ​​to the company.</p>
        <a href="#summery" className='btn-link'>Scroll For Me</a>
      </div>
      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={avatar} alt="avatar" />

          <h2>DevN.N-VietNam <br /> <span>Full-stack Developer</span></h2>

          <div className="social">
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
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