import React from 'react'

import LoginFormUSER from '../Components/RegisterformUSER/LoginFormUSER'

import NavComp from '../Components/Nav/NavComp';
import Login from '../Components/Login.json'
import Lottie from "lottie-react"



export default function RegisterformORG() {



  return (
    <div>
        <NavComp/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

       <div style={{width:'600px', position:'absolute', marginTop:'0px', marginLeft:'80px'}}> <Lottie animationData={Login} /> </div>
        

       <div style={{marginLeft:'40%'}}><LoginFormUSER/> 
       
       <h1> 
       <p  style={{fontFamily:"cursive" , color: "white", fontSize:'14px'}}className="register-link"> Still not a Member? <a href="/registeru">Register Now 👉</a>  </p>   </h1>
       
       <br></br><br></br><br></br>



 </div> 
       
    </div>
  )
}
