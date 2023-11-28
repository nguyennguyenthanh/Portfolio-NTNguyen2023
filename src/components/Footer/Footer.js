import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <span>Copyright &copy;2023</span>
      <div className="social-links">
        <a href="#!">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="#!">
          <i className="fa-brands fa-instagram"></i>

        </a>

        <a href="https://www.youtube.com/channel/UC6_eB5n4pTheDSuJxqGeeAw">
          <i className="fa-brands fa-youtube"></i>
        </a>

        <a href="https://github.com/nguyennguyenthanh">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <a href="#!" className='footer-logo'>DevN.N-VietNam</a>
    </footer>
  )
}

export default Footer