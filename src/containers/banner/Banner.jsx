import React from 'react'
import img from "../../assets/about2.jpg"
import "./banner.css"

const Banner = () => {
    return (
        <div className='e__banner'>
            <div className='e__banner-content'>
                <h1>EINDUSTRIES, A LEADING SOFTWARE COMPANY IN NIGERIA</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='e__banner-img'>
                <img src={img} alt="about-pic" />
            </div>
        </div>
    )
}

export default Banner
