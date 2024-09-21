import React from 'react'
import './Detailbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faLocationDot, faUser, faTag } from '@fortawesome/free-solid-svg-icons'

export default function DetailboxComp() {
  return (
    <div>
        <div>
  <ul className="service-flex-container">
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faCalendarDays} size="2xl"/><br /><span class="textb">Date<br></br></span><span class="textp">21 June 2023</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faClock} size="2xl"/><br /><span class="textb">Time<br></br></span><span class="textp">6.30 PM - 9.30 PM</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faLocationDot}size="2xl" /><br /><span class="textb">Location<br></br></span><span class="textp">Tower Hall, Maradana.</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faUser} size="2xl"/><br /><span class="textb">Organizer<br></br></span><span class="textp">Music Lanka LTD</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faTag}size="2xl" /><br /><span class="textb">Category<br></br></span><span class="textp">Music Event / Indoor</span></p><p>
      </p></li>
  </ul>
  
</div>


    </div>
  )
}
