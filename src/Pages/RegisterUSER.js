import React from 'react'


import RegisterFormUSER from '../Components/RegisterformUSER/RegisterFormUSER'
import NavComp from '../Components/Nav/NavComp';
import Login from '../Components/Login.json'
import Lottie from "lottie-react"

export default function RegisterformORG() {
  return (
    <div>
        <NavComp/><br></br><br></br><br></br><br></br><br></br>

       <div style={{width:'600px', position:'fixed', marginTop:'60px', marginLeft:'80px'}}> <Lottie animationData={Login} /> </div>
        

       <div style={{marginLeft:'40%'}}> <RegisterFormUSER/>
       
       

       </div> 
       
    </div>
  )
}
