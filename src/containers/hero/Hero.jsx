import React from 'react'
import { Link } from 'react-router-dom'
import "./hero.css"
import hero1 from "../../assets/hero2222.png"

const Hero = () => {
    return (
        <div>
            <div className='e__header section__padding'>
                <div className='e__header-content'>
                    <h1 className='header-text'>Creating scalable products for clients, startups and all</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy</p>
                    <div className='e__header__btn'>
                        <Link className='header-btn' to="/contact">Get Started</Link>
                    </div>
                </div>
                <div className='e__header-img'>
                        <img src={hero1} alt="tech" />
                </div>
            </div>
        </div>
    )
}

export default Hero

