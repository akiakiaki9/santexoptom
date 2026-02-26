import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import RadiatorsPage from './Radiators'
import Footer from '../components/footer/Footer'

export default function page() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <RadiatorsPage />
            <Footer />
        </div>
    )
};