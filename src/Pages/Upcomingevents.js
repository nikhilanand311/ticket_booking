import CardGrid from '../Components/CardGrid/CardGrid';
import React from 'react'
import HeroComp from '../Components/Hero/HeroComp';
import NavComp from '../Components/Nav/NavComp';


export default function Upcomingevents() {
  return (
    <div>
      <NavComp/>
        <HeroComp/><br></br><br></br><br></br><br></br><br></br>
        <h1 style={{ fontFamily: "cursive", color: "white" }}>Upcoming Events</h1>
<br /><br /><br /><br />

        <CardGrid/> <CardGrid/><br></br><br></br>   <br></br><br></br><br></br>
    </div>
  )
}
