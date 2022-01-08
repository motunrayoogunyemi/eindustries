import React from 'react'
import { Feature } from '../../components'
import "./ourproducts.css"

const OurProducts = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='ourproducts'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="Our Products" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='heading-text'>Here are some of our other products</h1>
                <p>explore now</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="e-errand" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm" />
                <Feature title="e-medic" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm" />
                <Feature title="e-lorem" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm" />
            </div>
        </div>
    )
}

export default OurProducts

