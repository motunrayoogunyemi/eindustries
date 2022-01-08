import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.png"

import "./navbar.css"

const Menu = () => (
    <>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About Us</Link></p>
        <p><Link to="/our/work">Our Works</Link></p>
        {/* <p><a href="#blog">Blog</a></p> */}
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='e__navbar'>
            <div className='e__navbar-links'>
                <div className='e__navbar-links_logo'>
                    <img src={logo} alt='logo' /><p>eIndustries</p>
                </div>
                <div className='e__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='e_navbar-btn'>
                <p><Link to="/contact">Contact Us</Link></p>
            </div>
            <div className='e_navbar-menu'>
                {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> 
                }
                {toggleMenu && (
                    <div className='e_navbar-menu_container scale-up-center'>
                        <div className='e_navbar-menu_container-links'>
                            <Menu />
                            <div className='e_navbar-menu_container-links-btn'>
                                <button type='button'>Get Started</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar

