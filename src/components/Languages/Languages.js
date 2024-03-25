import React from 'react';
import './languages.css';
import BS4 from './../assets/images/Bs4.jpg';
import Antd from './../assets/images/Antd.jpg';
import tailwind from './../assets/images/tailwind.jpg';
import sass from './../assets/images/sass.jpg';
import reactjs from './../assets/images/RJs.jpg';
import Js from './../assets/images/JS.png';
import vscode from './../assets/images/vscode.jpg';
import typescript from './../assets/images/ts.png';
import redux from './../assets/images/redux.jpg';
import axios from './../assets/images/axios.jpg';
import htmlcss from './../assets/images/htmlcss.jpg';
import jquery from "./../assets/images/jquery.png";
import graphql from "./../assets/images/graphql.png";
import hygraph from "./../assets/images/hygraph.jpg";
import nextjs from "./../assets/images/nextjs.png";
import reactrouter from './../assets/images/rjrouter.png';
import nodejs from './../assets/images/nodejs.png';
import express from './../assets/images/express.png';
import mongo from './../assets/images/mongo.jpg';



const Languages = () => {
  const data = [
    {
      title: "Software",
      contents: ['Vscode'],
      images: [htmlcss, BS4, Antd, tailwind, sass, reactjs, Js, vscode, typescript, axios, jquery, graphql, hygraph, nextjs, reactrouter, express, nodejs, mongo],
    },
    {
      title: "Languages",
      contents: ['Javascript', 'Typescript'],
      images: [htmlcss, BS4, Antd, tailwind, sass, reactjs, Js, vscode, typescript, axios, jquery, graphql, hygraph, nextjs, reactrouter, express, nodejs, mongo],
    },
    {
      title: "UX/UI",
      contents: ['HTML/CSS', 'Bootstrap4', 'SASS', 'Tailwind CSS', 'Jquery', 'GraphQL', 'Hygraph', 'MongoDB'],
      images: [htmlcss, BS4, Antd, tailwind, sass, reactjs, Js, vscode, typescript, axios, jquery, graphql, hygraph, nextjs, reactrouter, express, nodejs, mongo],
    },
    {
      title: "Framework/Lib",
      contents: ['ReactJs', 'NextJs', 'NodeJs', 'ExpressJs', 'Ant Design', 'Redux', 'Axios', 'Router'],
      images: [htmlcss, BS4, Antd, tailwind, sass, reactjs, Js, vscode, typescript, axios, jquery, graphql, hygraph, nextjs, reactrouter, express, nodejs, mongo],
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
                  <li key={content}>{item.images.reduce(() => {
                    switch (content) {
                      case 'HTML/CSS': {
                        return <img src={htmlcss} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Bootstrap4': {
                        return <img src={BS4} alt="img" className='logoLang' />
                      }
                      case 'Ant Design': {
                        return <img src={Antd} alt="img" className='logoLang' />
                      }
                      case 'Tailwind CSS': {
                        return <img src={tailwind} alt="img" className='logoLang' />
                      }
                      case 'SASS': {
                        return <img src={sass} alt="img" className='logoLang' />
                      }
                      case 'ReactJs': {
                        return <img src={reactjs} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Javascript': {
                        return <img src={Js} alt="img" width={40} style={{ verticalAlign: 'middle', objectFit: 'cover', objectPosition: 'center' }} />
                      }
                      case 'Vscode': {
                        return <img src={vscode} alt="img" className='logoLang' />
                      }
                      case 'Typescript': {
                        return <img src={typescript} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Redux': {
                        return <img src={redux} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Axios': {
                        return <img src={axios} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Jquery': {
                        return <img src={jquery} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Hygraph': {
                        return <img src={hygraph} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'GraphQL': {
                        return <img src={graphql} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'NextJs': {
                        return <img src={nextjs} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Router': {
                        return <img src={reactrouter} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'NodeJs': {
                        return <img src={nodejs} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'ExpressJs': {
                        return <img src={express} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'MongoDB': {
                        return <img src={mongo} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      default:
                        break;
                    }
                  })} {content}</li>
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