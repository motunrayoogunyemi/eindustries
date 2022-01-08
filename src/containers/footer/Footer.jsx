import React from 'react'
// import { Link } from 'react-router-dom'
import "./footer.css"
import elogo from "../../assets/logo.png"

const Footer = () => {

    const currentYear =new Date().getFullYear()

    return (
        <div className='e__footer section__padding'>
            <div className='e__footer__heading'>
                <h1>View some of our projects and lorem lorem lorem lorem</h1>
            </div>
            <div className='e__footer-btn'>
                <p><a href='/our/work'>view our portfolio</a></p>
            </div>
            <div className='e__footer-links'>
                <div className='e__footer-links_logo'>
                    <img src={elogo} alt='logo'/>
                    <p>Full address</p>
                </div>
                <div className='e__footer-links_div'>
                    <h4>Links</h4>
                    <p><a href='jhsdg'>email</a></p>
                    <p><a href='jhsdg'>linkedin</a></p>
                    <p><a href='jhsdg'>Instagram</a></p>
                    <p><a href='jhsdg'>safdsgfsh</a></p>
                </div>
                <div className='e__footer-links_div'>
                    <h4>Company</h4>
                    <p><a href='jhsdg'>Company</a></p>
                    <p><a href='jhsdg'>Terms & Conditions</a></p>
                    <p><a href='jhsdg'>Privacy Policy</a></p>
                    <p><a href='jhsdg'>safdsgfsh</a></p>
                </div>
                <div className='e__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>address</p>
                    <p>phone</p>
                    <p>email</p>
                </div>
            </div>
            <div className='e__footer-copyright'>
                <p>copyright © {currentYear}, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer

