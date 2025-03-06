import React from 'react'
import './contact.css'
import contact from './contact.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import codechef from './codechef.png'
import gmail from './gmail.png'
import whatsapp from './whatsapp.png'

function Contact() {
    const links={
        'Linkedin':"https://www.linkedin.com/in/siva-krishna-9a1ab02a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        'Instagram':"https://www.instagram.com/_call_me_siva_125?igsh=NWhncWo3OTEza2h3",
        'Whatsapp':'+91 94914 85423',
        'Codechef':'https://www.codechef.com/users/sivakrishna125',
        'mail':'sivakrishna.kolagani@sasi.ac.in'
    }
  return (
    <>
    <div className='Contact'>
        <b><h1>Contact:</h1></b>
        <ul className='content'>
            <li><img className='inner' src={linkedin} alt=''></img><a href={links.Linkedin}>Linkedin</a></li>
            <li><img className='inner' src={instagram} alt=''></img><a href={links.Instagram}>Instagram</a></li>
            <li><img className='inner' src={codechef} alt=''></img><a href={links.Codechef}>Codechef</a></li>
            <li><img className='inner' src={gmail} alt=''></img><a href={links.mail}>Mail</a></li>
            <li><img className='inner' src={whatsapp} alt=''></img>{links.Whatsapp}</li>
        </ul>
        <img className='contact-us' src={contact} alt='contact'></img>
        
    </div>
    <p>
      Click on above text to reach me!<br></br>
      For any inquiries or collaboration opportunities, please don't hesitate to reach out. I'm excited to connect and explore new possibilities together!
      
    </p>
    </>
  )
}

export default Contact