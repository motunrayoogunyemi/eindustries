import React from 'react'
import "./form.css"

const Form = () => {
    return (
        <div className='e__form'>
           <div className='e__form-top-container'>
               <div className='e__form-backdrop'></div>
               <div className='e__form-header'>
                   <h2>Leave Us a Message</h2>
                   <p>Talk to us about your project</p>
               </div>
           </div>
           <div className='e__form-house'>
               <div className='e__form-box'>
                   <input type="text" placeholder="Fullname" className='form-control' />
                   <input type="email" placeholder="Email Address" />
                   <textarea placeholder='Message'></textarea>
                   <button className='submit-btn'>Send Message</button>
               </div>
           </div>
        </div>
    )
}

export default Form
