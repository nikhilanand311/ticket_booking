import React from 'react'
import './contact.css'

export default function ContactformComp() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <form class="my-custom-form">
    <div class="my-custom-flex">
        <label>
            <input required="" placeholder="" type="text" class="my-custom-input"/>
            <span>first name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="my-custom-input"/>
            <span>last name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="my-custom-input"/>
        <span>email</span>
    </label> 
        
    <label>
        <input required="" type="tel" placeholder="" class="my-custom-input"/>
        <span>contact number</span>
    </label>
    <label>
        <textarea required="" rows="3" placeholder="" class="my-custom-textarea"></textarea>
        <span>message</span>
    </label>
    
    <button class="my-custom-fancy" href="#">
      <span class="my-custom-top-key"></span>
      <span class="my-custom-text">submit</span>
      <span class="my-custom-bottom-key-1"></span>
      <span class="my-custom-bottom-key-2"></span>
    </button>
</form>

    </div>
  )
}
