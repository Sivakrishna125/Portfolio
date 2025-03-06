import React,{useState} from 'react'
import Skills from './Skills'
import Contact from './Contact'
import About from './About'
import Certifications from './Certifications'
import './Home.css'
import myphoto from './my-photo.jpg'

function Home() {
  const [vSection,setVSection]=useState();
  return (
    <>
    <div className='Home'>
        <div className='header'>
            <label className='name'><h1>Siva Krishna</h1></label>
            <div className='dp'><img src={myphoto} alt=''></img></div>
        </div>
        <div className='ribbon'>
              <button onClick={()=> setVSection('About')}>About</button>
              <button onClick={()=> setVSection('skills')}>Skills</button>
              <button onClick={()=> setVSection('contact')}>Contact</button>
              <button onClick={()=> setVSection('Certifications')}>Certifications</button>
        </div>
        <div className='Middle-section'>
          
            {!vSection && <div className='intro'>
              <img src={myphoto} alt='myphoto' className='side-right'></img>
              <pre className='slide-left'>
                <h3>Hi!
                I am</h3><h1>Siva Krishna.</h1>
                <h3>From</h3><h1>2<sup>nd</sup> Year CSE_DS</h1><br></br>
                <h3>Welcome to</h3><h1>My Portfolio</h1> 
              </pre></div>}
            {vSection==='skills' && <Skills/>}
            {vSection==='contact' && <Contact/>}
            {vSection==='About' && <About/>}
            {vSection==='Certifications' && <Certifications/>}
            
        </div>
    </div>
    </>
  )
}

export default Home