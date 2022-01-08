import React from 'react'
import { Footer, Why, OurProcess, Whatwedo, Hero, OurProducts } from "../containers"
import { Call, Brand, Navbar } from "../components"
import "./pages.css"

const Home = () => {
    return (
        <div>
            <div className='container'>
                <Navbar />
                <Hero />
            </div>
            <Whatwedo />
            <OurProducts />
            <OurProcess />
            <Why />
            <Call />
            <Brand />
            <Footer />
        </div>
    )
}

export default Home
