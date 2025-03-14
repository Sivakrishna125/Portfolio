import React from 'react'
import './education.css'
import icon from './graduation.png'

function education() {
  return (
    <div className='mid-sec'>
    <div className='education'>
        <h1>Education:</h1>
        <div className='qualifications'>
            <h2>Bachelor of Technology in Computer Science & Data Science</h2>
            <ul>
                <h4>Sasi Institute of Technology and Engineering,Tadepalligudem</h4>
                <h4>Expected Graduation Year: 2027</h4>
            </ul>
        </div>
        <div className='qualifications'>
            <h2>Intermediate in Maths Physics Chemistry(M.P.C)</h2>
            <ul>
                <h4>V.S.N Junior College,Koyyalagudem</h4>
                <h4>2021-2023</h4>
            </ul>
        </div>
        <div className='qualifications'>
            <h2>High School</h2>
            <ul>
                <h4>V.S.N (E.M) High School</h4>
                <h4>2021</h4>
            </ul>
        </div>
    </div>
    <div className='img'>
        <img src={icon} alt=''></img>
    </div>
    </div>
  )
}

export default education