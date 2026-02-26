import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import Footer from '../components/footer/Footer'
import ToiletsPage from './Toilets'

export default function page() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <ToiletsPage />
            <Footer />
        </div>
    )
};