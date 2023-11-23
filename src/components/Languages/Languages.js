import React from 'react';
import './languages.css';

const Languages = () => {
  const data = [
    {
      title: "Languages",
      contents: ['Python', 'Nodejs', 'SQL', 'Javascript']
    },
    {
      title: "Software",
      contents: ['Vscode', 'Tableau']
    },
    {
      title: "Database",
      contents: ['PostgresQL', 'AWS', 'MongoDB']
    },
  ]

  
  return (
    <section id="languages"  data-aos="fade">
      {
        data?.map((item, index) => (
          <div key={item.title} className="languages-box">
            <h3>{item.title}</h3>
            <ul>
              {
                item.contents.map(content => (
                  <li key={content}>{content}</li>
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