import React from 'react'
import Lottie from "lottie-react"
import Dash from '../Dash.json'

export default function LoginComp() {
  return (
    <div style={{width:'600px',  margin:'30px 0px 0px 350px',height:'400px'}}><Lottie animationData={Dash} /></div>
  )
}
