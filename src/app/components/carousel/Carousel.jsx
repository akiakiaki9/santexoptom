'use client'
import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Душевые кабины',
            description: 'Премиальное качество и современный дизайн для вашей ванной',
            image: '/images/carousel/1.jpg'
        },
        {
            id: 2,
            title: 'Радиаторы',
            description: 'Эффективное отопление и стильный интерьер',
            image: '/images/carousel/2.png'
        },
        {
            id: 3,
            title: 'Унитазы',
            description: 'Комфорт и надежность от ведущих производителей',
            image: '/images/carousel/3.jpg'
        },
        {
            id: 4,
            title: 'Раковины',
            description: 'Изысканные решения для любой ванной комнаты',
            image: '/images/carousel/4.jpg'
        },
        {
            id: 5,
            title: 'Чашагены',
            description: 'Инновационные технологии и безупречный стиль',
            image: '/images/carousel/5.jpg'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="carousel-section">
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="carousel-overlay">
                                <div className="carousel-content">
                                    <h2 className="carousel-title">{slide.title}</h2>
                                    <p className="carousel-description">{slide.description}</p>
                                    <a href="/#categories" className="carousel-button-more">
                                        Подробнее
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="carousel-button prev" onClick={prevSlide}>❮</button>
                    <button className="carousel-button next" onClick={nextSlide}>❯</button>

                    <div className="carousel-dots">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            >
                                —
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;