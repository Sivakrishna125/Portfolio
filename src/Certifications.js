import React from 'react'
import oops from './oops.jpg'
import mern_workshop from './mern_workshop.png'
import codechef from './codechef.jpg'
import './Certifications.css'

function Certifications() {
  return (
    <><h1>Certificatoins:</h1>
    <div className='certificates'>
      
      <div className='card'>
        <img src={oops} alt='python OOPS'></img>
        <label>Python OOPS</label>
      </div>
      <div className='card'>
        <img src={mern_workshop} alt='MERN Workshop'></img>
        <label>MERN Workshop</label>
      </div>
      <div className='card'>
        <img src={codechef} alt='codechef'></img>
        <label>Codechef 500 Difficulty</label>
      </div>
    </div>
    </>
  )
}

export default Certifications