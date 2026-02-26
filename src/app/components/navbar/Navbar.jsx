'use client'
import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activePath, setActivePath] = useState('/');

    const menuItems = [
        { path: '/', label: 'Главная' },
        { path: '/showers', label: 'Душевые' },
        { path: '/radiators', label: 'Радиаторы' },
        { path: '/toilets', label: 'Унитазы' },
        { path: '/sinks', label: 'Раковины' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        setActivePath(window.location.pathname);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="/" className="nav-logo">
                    SANTEX OPTOM
                </a>

                {/* Десктоп меню */}
                <ul className="nav-menu">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <a
                                href={item.path}
                                className={`nav-link ${activePath === item.path ? 'active' : ''}`}
                            >
                                {item.label}
                                <span className="nav-link-indicator"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Бургер */}
                <button
                    className={`burger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Мобильное меню */}
                <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-nav-content">
                        {menuItems.map((item, index) => (
                            <a
                                key={item.path}
                                href={item.path}
                                className={`mobile-nav-link ${activePath === item.path ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;