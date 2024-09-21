import HeroComp from '../Components/Hero/HeroComp';
import React from 'react'
import NavComp from '../Components/Nav/NavComp';
import ContactformComp from '../Components/Contactform/ContactformComp';

export default function Contact() {
  return (
    <div><NavComp/><HeroComp/>
    
    <br></br><br></br><br></br>
    <ContactformComp/>
    </div>
  )
}
