import React from 'react';
import './languages.css';
import BS4 from './../assets/images/Bs4.jpg';
import Antd from './../assets/images/Antd.jpg';


const Languages = () => {
  const data = [
    {
      title: "Software",
      contents: ['Vscode'],
      images: [BS4, Antd],
    },
    {
      title: "Languages",
      contents: ['Javascript'],
      images: [BS4, Antd],
    },
    {
      title: "HTML/CSS",
      contents: ['Bootstrap4', 'SCSS', 'Tailwind CSS'],
      images: [BS4, Antd],
    },
    {
      title: "Framework/Lib",
      contents: ['ReactJs', 'NextJs', 'Ant Design', 'Styled-component', 'Masterial UI'],
      images: [BS4, Antd],
    },
  ]


  return (
    <section id="languages" data-aos="fade">
      {
        data?.map(item => (
          <div key={item.title} className="languages-box">
            <h3>{item.title}</h3>
            <ul>
              {
                item.contents.map(content => (
                  <li key={content}>{item.images.map(img => (<img key={img} src={img} alt="img" width={20} />))}{content}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </section>
  )
}

export default Languages;