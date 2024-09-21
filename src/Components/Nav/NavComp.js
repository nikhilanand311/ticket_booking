import React from 'react'
import "../Nav/Nav.css"
import zIndex from '@mui/material/styles/zIndex'
import { position } from '@chakra-ui/react'

export default function NavComp() {
  return (
    <div>
        <div class="nav-logo">
                                <a href="/"><img src="https://i.ibb.co/1bBxbPC/event-ticketlk-low-resolution-logo-color-on-transparent-background.png" style={{width:'210px', height:'130px', zIndex:'200', position:'absolute', marginTop:'20px'}} alt="logo"/></a>
                            </div>
       
<div class="menu-outer">
    <div class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <nav>
        <ul>
           <li><a href="/">Home</a></li>
           <li><a href="/upcomingevents"> All Events</a></li>
            <li><a href="/contact">Contact</a></li>                      
            <li><a href="/cart">Cart</a></li>
            
            <li><a href="/loginopt">Login</a></li> 
       </ul>
   </nav>
</div>
<a class="menu-close" onClick="return true">
    <div class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</a>
    </div>
  )
}
