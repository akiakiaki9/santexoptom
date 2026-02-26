import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import Footer from '../components/footer/Footer'
import Chashagen from './Chashagen'

export default function page() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Chashagen />
            <Footer />
        </div>
    )
};