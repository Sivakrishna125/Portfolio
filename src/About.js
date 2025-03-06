import React from 'react'
import about from './about.png'
import'./About.css'
function About() {
  return (
    <>
    <div className='about-section'>
    <h1>About:</h1>
    <p>
            Hi! I'm K. Thandava Siva Krishna, a B.Tech 2nd Year Computer Science And Data Science Student at
            Sasi Insititute of Technology and Engineering.
            I have a strong passion fro Python development and Full-Stack development,
            constantly exploring new technologies to build efficient and scalable solutions.

            I enjoy solving real-world problems through clean code and innovative design,
            whether it's backend logic,frontend interfaces or full-stack aplications. My goal is to blend
            data science and web development to create impactful projects.

            Currently, i'm honing my skills in Python,JavaScript,React,Node.js and databases while
            working on exciting projects. When I'm not coding, I love exploring new Frameworks
            and contributing to open-source communities
    </p>
    <img src={about} alt='logo'></img>
    </div>
    </>
  )
}

export default About