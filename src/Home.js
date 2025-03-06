import React,{useState} from 'react'
import Skills from './Skills'
import Contact from './Contact'
import About from './About'
import Certifications from './Certifications'
import './Home.css'
import myphoto from './my-photo.jpg'

function Home() {
  let home_data='Hi! I am Siva Krishna';
  const [vSection,setVSection]=useState();
  return (
    <>
    <div className='welcome-slide'>
      <label><h1>{home_data}</h1></label>
      <br></br>
      <br></br>
      <label><h2>Wait....</h2></label>
    </div>
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
            {!vSection && <p className='intro'>
              <img src={myphoto} alt='myphoto'></img><br></br>
              Welcome to my Portfolio</p>}
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