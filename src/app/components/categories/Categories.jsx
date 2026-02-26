'use client'
import React from 'react';
import './categories.css';

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: 'Душевые кабины',
            image: '/images/categories/shower.jpeg',
            link: '/showers'
        },
        {
            id: 2,
            title: 'Радиаторы',
            image: '/images/categories/radiator.jpg',
            link: '/radiators'
        },
        {
            id: 3,
            title: 'Унитазы',
            image: '/images/categories/toilet.jpeg',
            link: '/toilets'
        },
        {
            id: 4,
            title: 'Раковины',
            image: '/images/categories/rakovina.jpg',
            link: '/rakovina'
        },
        {
            id: 5,
            title: 'Чашагены',
            image: '/images/categories/chashagen.webp',
            link: '/squat-toilet'
        }
    ];

    return (
        <section className="categories-section" id='categories'>
            <div className="categories-container">
                {categories.map((category) => (
                    <a key={category.id} href={category.link} className="category-card">
                        <div className="category-image" style={{ backgroundImage: `url(${category.image})` }}>
                            <div className="category-overlay">
                                <span className="category-title">{category.title}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Categories;