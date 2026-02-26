import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import Footer from '../components/footer/Footer'
import Rakovina from './Rakovina'

export default function page() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Rakovina />
            <Footer />
        </div>
    )
};