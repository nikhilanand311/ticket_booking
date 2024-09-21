import React from 'react'
import LoginFormORG from '../Components/RegisterformORG/LoginFormORG'
import NavComp from '../Components/Nav/NavComp';
import Register from '../Components/Register.json'
import Lottie from "lottie-react"

export default function RegisterformORG() {
  return (
    <div>
      <NavComp/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <div style={{width:'500px', position:'fixed', marginTop:'50px', marginLeft:'150px'}}> <Lottie animationData={Register} /> </div>

       <div style={{marginLeft:'40%'}}>  <LoginFormORG/> 
       
       <h1> 
       <p  style={{fontFamily:"cursive" , color: "white", fontSize:'14px'}}className="register-link"> Still not a Member? <a href="/registerorg">Register Now 👉</a>  </p>   </h1>
     

       
       </div>
    </div>
  )
}
