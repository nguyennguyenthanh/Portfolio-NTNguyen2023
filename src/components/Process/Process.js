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
      title: 'Movie Theather - 2 members',
      contents: ['Sign in/Sign Up', 'Home Page', 'Admin Page', 'Feature Booking Ticket', 'Feature Create Schedule Films', 'Feature Create Accounts', 'Feature Add/Remove/Edit/Update Films'],
      technicals: ['Javascript', 'ReactJs', 'Tailwind Css', 'Ant Design', 'Bootstrap', 'SCSS', 'Restful API', 'Redux', 'Responsive', 'Router']
    },
    {
      id: '03',
      title: 'Phone Shop - 2 members',
      contents: ['Home Page', 'Admin Page', 'Store Page', 'Feature Add/Remove/Edit/Update Products', 'Feature Shopping Cart'],
      technicals: ['Javascript', 'Bootstrap', 'SCSS', 'API json', 'Redux', 'Responsive']
    },
    {
      id: '04',
      title: 'GraphCMSHygraph - 1 member',
      contents: ['Home Page', 'Search'],
      technicals: ['ReactJs', 'Javascript', 'HTML/CSS', 'Responsive', 'Router']
    },
    {
      id: '05',
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