import Hero_Home from '@/components/HomePages/Hero_Home'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Home = () => {
    return (
        <div className='py-10 px-8' style={{
            backgroundImage: "url('/assets/Home/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            
        }} id='home'>
            <Hero_Home />
        </div>
    )
}

export default Home