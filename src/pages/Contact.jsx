import React from 'react'
import { Footer } from "../containers"
import { Navbar, Form } from "../components"
import "./pages.css"

const Contact = () => {
    return (
        <div className='e__contact'>
            <div className='nav-container'>
                <Navbar />
            </div>
            <Form />
            <div className='e__foot-links'> 
                <div className='e__foot-links_div'>
                    <h4><i class="fas fa-envelope"></i>Email</h4>
                    <p>abc@bbb.com</p>
                </div>
                <div className='e__foot-links_div'>
                    <h4><i class="fas fa-phone-alt"></i>Phone</h4>
                    <p>+23451675541</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
