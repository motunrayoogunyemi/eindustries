import React from 'react'
import { Icons } from "../../components"
import "./integrity.css"
import pic1 from "../../assets/experience.png"
import pic2 from "../../assets/security.png"
import pic3 from "../../assets/clock.png"

const Integrity = () => {
    return (
        <div className='e__integrity'>
            <Icons img={pic1} title="Experienced" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" />
            <Icons img={pic2} title="Security" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" />
            <Icons img={pic3} title="Early Delivery" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" />
        </div>
    )
}

export default Integrity
