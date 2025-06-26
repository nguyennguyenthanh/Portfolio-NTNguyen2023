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
import nodejs from './../assets/images/nodejs.png';
import express from './../assets/images/express.png';
import mongo from './../assets/images/mongo.jpg';
import bunjs from './../assets/images/bunjs.png';
import postgresql from './../assets/images/postgresql.png';
import elysia from './../assets/images/elysia.png';
import nestjs from './../assets/images/nest.png';
import vietqr from './../assets/images/vietqr.png';
import googlePlayBilling from './../assets/images/googleBilling.png';
import appleSKit from './../assets/images/appleSKit.png';
import mqtt from './../assets/images/mqtt.png';
import rabbitmq from './../assets/images/rabbitmq.jpg';
import kafka from './../assets/images/kafka.png';
import redis from './../assets/images/redis.png';
import moleculer from './../assets/images/moleculer.jpg';
import minio from './../assets/images/minio.png';
import firebase from './../assets/images/firebase.png';



const Languages = () => {
  const data = [
    {
      title: "Software",
      contents: ['Vscode'],
      images: [htmlcss, vscode],
    },
    {
      title: "Languages",
      contents: ['Javascript', 'Typescript'],
      images: [htmlcss, Js, typescript],
    },
    {
      title: "Runtime Environments",
      contents: ['NodeJs', 'BunJs'],
      images: [htmlcss, nodejs, bunjs],
    },
    {
      title: "Framework/Lib",
      contents: ['NestJs', 'ElysiaJs', 'ExpressJs', 'ReactJs', 'NextJs', 'Ant Design', 'Redux', 'Axios'],
      images: [nestjs, elysia, express, reactjs, nextjs, Antd, redux, axios],
    },
    {
      title: "Database Management System",
      contents: ['PostgreSql', 'MongoDB', 'GraphQL', 'Hygraph'],
      images: [postgresql, mongo, graphql, hygraph],
    },
    {
      title: "Payment",
      contents: ['VietQR', 'Google', 'Apple'],
      images: [vietqr, googlePlayBilling, appleSKit],
    },
    {
      title: "Message Brokers/Event Streaming",
      contents: ['MQTT', 'RabbitMQ', 'Kafka', 'Redis'],
      images: [mqtt, rabbitmq, kafka, redis],
    },
    {
      title: "Microservices",
      contents: ['Moleculer'],
      images: [moleculer, ''],
    },
    {
      title: "Cloud Service",
      contents: ['MinIO', 'Firebase'],
      images: [minio, firebase],
    },
    {
      title: "UX/UI",
      contents: ['HTML/CSS', 'Bootstrap4', 'SASS', 'Tailwind CSS', 'Jquery'],
      images: [htmlcss, BS4, tailwind, sass, jquery],
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
                      case 'NodeJs': {
                        return <img src={nodejs} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'BunJs': {
                        return <img src={bunjs} alt="img" width={55} height={27} style={{ verticalAlign: 'middle', objectFit: 'cover', objectPosition: 'center' }} />
                      }
                      case 'ExpressJs': {
                        return <img src={express} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'MongoDB': {
                        return <img src={mongo} alt="img" width={55} height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'PostgreSql': {
                        return <img src={postgresql} alt="img" height={30} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'ElysiaJs': {
                        return <img src={elysia} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'NestJs': {
                        return <img src={nestjs} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'VietQR': {
                        return <img src={vietqr} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Google': {
                        return <img src={googlePlayBilling} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Apple': {
                        return <img src={appleSKit} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'MQTT': {
                        return <img src={mqtt} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'RabbitMQ': {
                        return <img src={rabbitmq} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Kafka': {
                        return <img src={kafka} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Redis': {
                        return <img src={redis} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Moleculer': {
                        return <img src={moleculer} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'MinIO': {
                        return <img src={minio} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
                      }
                      case 'Firebase': {
                        return <img src={firebase} alt="img" height={25} style={{ verticalAlign: 'middle' }} />
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