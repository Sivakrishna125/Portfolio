import React from 'react'
import skills from './skills.png'
import './skills.css'

function Skills() {
    const tech_skills={
        'Programming_languages':"C,Python,JAVA",
        'Frontend':'Frontend Technologies : HTML,CSS,JavaScript',
        'Backend':'Backend : Python',
        'Frameworks':'Frameworks : React,Flask'
    }
  return (
    <>
    <div className='Skills'>
        <h1>Skills</h1><br></br>
        <ul className='content'>
          <li>Technical Skills:</li><br></br>
            <ul>
              <li>Programming Languages:
                <ul>
                  <li>{tech_skills.Programming_languages}</li>
                </ul> </li><br></br>
              <li>Web Devlopment:
                <ul>
                  <li>{tech_skills['Frontend']}</li>
                  <li>{tech_skills['Backend']}</li>
                  <li>{tech_skills['Frameworks']}</li>
                </ul>
              </li>
            </ul><br></br>
            <li>Non-Technical Skills:</li><br></br>
            <ul>
              <li>Problem Solving</li>
              <li>Fast Learning</li>
              <li>Active Listening</li>
              <li>Work Ethic</li>
            </ul>
        </ul>
      <img src={skills} alt='skills'></img>
    </div>
    </>
  )
  
}

export default Skills