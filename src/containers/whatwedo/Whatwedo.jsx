import React from 'react'
import { Services } from '../../components'
import webimg from "../../assets/webb.jpg"
import appimg from "../../assets/mobile.jpg"
import automationimg from "../../assets/automation.jpg"
import softwareimg from "../../assets/software.jpg"
import "./whatwedo.css"

const Whatwedo = (props) => {
    return (
        <div className='e__what '>
            <div className='e__what-title'>
                <h1>What We Do</h1>
            </div>
            <div className='e__what-large'>
                <Services title="Web Development" details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" imgurl={webimg} />
                <Services title="Mobile Development" details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" imgurl={appimg} isReversed />
                <Services title="Process Automation" details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" imgurl={automationimg} />
                <Services title="Software Development" details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" imgurl={softwareimg} isReversed />
            </div>
        </div>
    )
}

export default Whatwedo

