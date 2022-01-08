import React from 'react'
import "./brand.css"
import { google, microsoft, shopify, apple, stripe } from "./imports"

const Brand = () => {
    return (
        <div className='e__brand section__padding'>
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={microsoft} alt="microsoft" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
            <div>
                <img src={apple} alt="apple" />
            </div>
            <div>
                <img src={stripe} alt="stripe" />
            </div>
        </div>
    )
}

export default Brand

