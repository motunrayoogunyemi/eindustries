import React from 'react'
import { Feature } from '../../components'
import "./ourprocess.css"

const processes = [
    {title: "Research", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
    {title: "Design", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
    {title: "Development", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
    {title: "Deploy", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
]
const OurProcess = () => {
    return (
        <div className='e__ourprocess section__padding'>
            <div className='e__ourprocess-heading'>
                <h1>Our Steps and Processes make us unique as we lorem lorem lorem lorem lorem lorem</h1>
                <p>See our steps arrow</p>
            </div>
            <div className='e__ourprocess-container'>
                {processes.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default OurProcess

