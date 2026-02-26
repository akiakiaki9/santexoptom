'use client'
import React from 'react';
import { TbTruckDelivery, TbTools, TbCertificate, TbCreditCard } from 'react-icons/tb';
import './features.css';

const Features = () => {
    const features = [
        {
            id: 1,
            icon: <TbTruckDelivery />,
            title: 'Доставка по Узбекистану',
            highlight: '50 000₽'
        },
        {
            id: 2,
            icon: <TbTools />,
            title: 'Проф. монтаж',
            highlight: '2 года'
        },
        {
            id: 3,
            icon: <TbCertificate />,
            title: 'Гарантия качества',
            highlight: 'сертификаты'
        },
        {
            id: 4,
            icon: <TbCreditCard />,
            title: 'Удобная оплата',
            highlight: '0%'
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                {features.map((feature, index) => (
                    <div key={feature.id} className="feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon-bg"></div>
                            <div className="feature-icon">{feature.icon}</div>
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">
                        </p>
                        <div className="feature-shine"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;