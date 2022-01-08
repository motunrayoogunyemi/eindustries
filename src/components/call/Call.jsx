import React from 'react'
import { Link } from 'react-router-dom'
import "./call.css"

const Call = () => {
    return (
        <div className='e__call section__margin'>
            <div className='e__call-content'>
                <p>Request for a quote</p>
                <h3>Contact us today and request a quote for your Web Application</h3>
            </div>
            <div className='e__call-btn'>
                <Link className='call-btn' to="/contact">Contact Us</Link>
            </div>
        </div>
    )
}

export default Call

