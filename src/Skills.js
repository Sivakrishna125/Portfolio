import React from 'react'
import skills from './skills.png'
import './skills.css'

function Skills() {
    const tech_skills={
        'Programming_languages':"C,Python,JAVA",
        'Frontend':'Frontend Technologies : HTML,CSS,JavaScript',
        'Frameworks':'Frameworks : React,Flask'
    }
  return (
    <>
    <div className='Skills'>
        <h1>Skills:</h1>
        <ul className='content'>
          
          <li><b><h2>Technical Skills:</h2></b></li>
            <ul>
              <li><b>Programming Languages:</b>
                <ul>
                  <li>{tech_skills.Programming_languages}</li>
                </ul> </li>
              <li><b>Web Devlopment:</b>
                <ul>
                  <li>{tech_skills['Frontend']}</li>
                  <li>{tech_skills['Frameworks']}</li>
                </ul>
              </li>
            </ul><br></br>
            <li><h2><b>Non-Technical Skills:</b></h2></li>
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