import React from 'react'
import oops from './oops.jpg'
import acm from './ACM_web.jpg'
import mern_workshop from './mern_workshop.png'
import codechef from './codechef.jpg'
import './Certifications.css'

function Certifications() {
  return (
    <><h1>Certificatoins:</h1>
    <div className='certificates'>
      
      <div className='card'>
        <img src={oops} alt='python OOPS'></img><br></br>
        <label>Python OOPS</label>
      </div>
      <div className='card'>
        <img src={mern_workshop} alt='MERN Workshop'></img><br></br>
        <label>MERN Workshop</label>
      </div>
      <div className='card'>
        <img src={codechef} alt='codechef'></img><br></br>
        <label>Codechef 500 Difficulty</label>
      </div>
      <div className='card'>
        <img src={acm} alt='acm'></img><br></br>
        <label>ACM Web Development Worjshop</label>
      </div>
    </div>
    </>
  )
}

export default Certifications