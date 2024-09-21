import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroComp from '../Components/Hero/HeroComp';
import CardGrid from '../Components/CardGrid/CardGrid';
import HorizontalcardComp from '../Components/Horizontalcard/HorizontalcardComp';
import CategorycardComp from '../Components/Categorycard/CategorycardComp';
import CalendarComp from '../Components/EventCalendar/CalendarComp';
import NavComp from '../Components/Nav/NavComp';
import PadignationComp from '../Components/Padignation/PadignationComp';




export default function Home() {
  return (
    <div>
        <NavComp/>
     <HeroComp/><br></br><br></br>
     
     <CategorycardComp/><br></br><br></br>
     <h1 style={{fontFamily:"cursive" , color: "white"}}>Upcoming Events </h1> <br></br><br></br><br></br><br></br>
     
     <HorizontalcardComp/> <br></br>   <br></br><br></br><br></br>
     <h1 style={{fontFamily:"cursive" , color: "white"}}>Most Popular Events</h1> <br></br><br></br><br></br><br></br>
          <CardGrid/><br></br><PadignationComp/> <br></br><br></br>
         
      
          {/* <Googlemapcomp/>  */}  
            
    </div>
  )
}
