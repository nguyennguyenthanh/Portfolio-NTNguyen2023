import React from 'react';
import './process.css';

const Process = () => {
  const data = [
    {
      id: '01',
      title: 'Jra Software - 1 member',
      contents: ['Sign in/Sign Up', 'Home Page', 'Feature For Create Projects', 'Feature User Infomations', 'Feature Create Account', 'Feature Add/Remove/Edit/Update Members',],
      technicals: ['Typescript', 'ReactJs', 'Tailwind CSS', 'Ant Design', 'Bootstrap', 'SCSS', 'Restful API', 'Redux', 'Responsive', 'Router']
    },
    {
      id: '02',
      title: 'GraphCMSHygraph - 1 member',
      contents: ['Home Page', 'Search'],
      technicals: ['ReactJs', 'Javascript', 'HTML/CSS', 'Responsive', 'Router']
    },
    {
      id: '03',
      title: 'Travel Website - 1 member',
      contents: ['Home Page', 'Change Color'],
      technicals: ['NextJs', 'Javascript', 'HTML/CSS', 'Responsive']
    },
  ]

  return (
    <section id="process" data-aos="fade">
      <div className="process-heading" >
        <h3>Process</h3>
      </div>
      <div className="process-container">
        {
          data.map(process => (
            <div key={process.id} className="process-box">
              <span>{process.id}</span>
              <strong>{process.title}</strong>
              <ul style={{ fontSize: '20px' }}>
                -Contents:
                {
                  process.contents.map(content => (
                    <li key={content}>{content}</li>
                  ))
                }
              </ul>
              <ul style={{ fontSize: '20px' }}>
                -Technicals:
                {
                  process.technicals?.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Process