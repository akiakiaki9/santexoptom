import React from 'react'
import ShowersPage from './Showers'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'

export default function page() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <ShowersPage />
        </div>
    )
};