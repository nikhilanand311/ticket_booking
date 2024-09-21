import React from 'react'
import RegisterFormORG from '../Components/RegisterformORG/RegisterFormORG'
import NavComp from '../Components/Nav/NavComp';
import Register from '../Components/Register.json'
import Lottie from "lottie-react"

export default function RegisterformORG() {
  return (
    <div>
      <NavComp/><br></br><br></br><br></br><br></br>

      <div style={{width:'500px', position:'fixed', marginTop:'150px', marginLeft:'150px'}}> <Lottie animationData={Register} /> </div>

       <div style={{marginLeft:'40%'}}>  
       <br></br>
       
       <RegisterFormORG/> 
       
       </div>
    </div>
  )
}
