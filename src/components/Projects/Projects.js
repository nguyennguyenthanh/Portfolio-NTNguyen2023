import React from 'react';
import './projects.css';
import jsphone from './../assets/images/js.jpg'
import reactjsmovie from './../assets/images/reactjs.jpg'
import typescriptjra from './../assets/images/typescript.jpg'
import nextjstravel from './../assets/images/nj.jpg'
import graphqlhygraph from './../assets/images/graphqlhygraph.jpg'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Projects = () => {
  const data = [
    {
      src: typescriptjra,
      url: 'https://bc50-capstone-jra.vercel.app/'
    },
    {
      src: graphqlhygraph,
      url: 'https://hygraph-cms-graphql.vercel.app/'
    },
    {
      src: nextjstravel,
      url: 'https://next-js-travel-xi.vercel.app/'
    },
  ]


  return (
    <section id="projects">
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map(project => (
            <SwiperSlide key={project.src}>
              <div className="project-box">
                <a href={project.url}>
                  <img src={project.src} alt="project-phone" />
                  <div className="p-overplayer">
                    <strong>Outserved Reports</strong>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="github-btn">
        <a href="https://github.com/nguyennguyenthanh?tab=repositories" className='btn-link'>
          My Github <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  )
}

export default Projects