import React from 'react'
import { Box } from '../../components'
import "./portfolio.css"
import skinsolpic from "../../assets/triangle.jpg"
import eerrandpic from "../../assets/random.jpg"

const Portfolio = () => {
    return (
        <div className='e__portfolio section__padding'>
            <div className='e__portfolio-content'>
                <h2>Applications we have built for our customers</h2>
                <p>We serve every industry</p>
            </div>
            <div className='e__portfolio-box'>
                <Box imagee={skinsolpic} title="Skinsol App" details="An e-commerce site that loreme ipsum is simply dummy text of the printing and typesetting industry" btn1="PHP" btn2="JavaScript" btn3="MySQL" btn4="html/css" />
                <Box imagee={eerrandpic} title="e-Errand" details="An errand application that loreme ipsum is simply dummy text of the printing and typesetting industry" btn1="Flask" btn2="JavaScript" btn3="MySQL" btn4="html/css" />
            </div>
        </div>
    )
}

export default Portfolio
