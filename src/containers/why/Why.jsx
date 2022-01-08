import React from 'react'
import whyimg from "../../assets/whyy14.png"
import "./why.css"

const Why = () => {
    return (
        <div className='e__why'>
            <div className='e__why-img'>
                <img src={whyimg} alt="why choose us" />
            </div>
            <div className='e__why-content'>
                <h4>Find out more about us</h4>
                <h1>Why Choose eIndustries</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <h4 className='bottom-h4'>Find out more about us</h4>
            </div>
        </div>
    )
}

export default Why

