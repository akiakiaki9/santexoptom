'use client'
import React, { useState, useEffect } from 'react';
import { FiPhone, FiX } from 'react-icons/fi';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activePath, setActivePath] = useState('/');

    const menuItems = [
        { path: '/', label: 'Главная' },
        { path: '/showers', label: 'Душевые' },
        { path: '/radiators', label: 'Радиаторы' },
        { path: '/toilets', label: 'Унитазы' },
        { path: '/rakovina', label: 'Раковины' },
        { path: '/squat-toilet', label: 'Чашагены' },
    ];

    const phoneNumbers = [
        { 
            number: '+998 (95) 868-20-02', 
            link: 'tel:+998958682002',
            location: 'Калхоз Бозор'
        },
        { 
            number: '+998 (95) 705-20-02', 
            link: 'tel:+998957052002',
            location: 'Хазрати Имом'
        }
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
        if (isMenuOpen || isPhoneModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen, isPhoneModalOpen]);

    return (
        <>
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

                    {/* Телефоны для ПК */}
                    <div className="nav-phones">
                        <div className="nav-phone-wrapper">
                            <span className="nav-phone-location">Калхоз Бозор</span>
                            <a href="tel:+998958682002" className="nav-phone">
                                <FiPhone className="phone-icon-desktop" />
                                +998 (95) 868-20-02
                            </a>
                        </div>
                        <div className="nav-phone-wrapper">
                            <span className="nav-phone-location">Хазрати Имом</span>
                            <a href="tel:+998957052002" className="nav-phone">
                                +998 (95) 705-20-02
                            </a>
                        </div>
                    </div>

                    <div className="nav-actions">
                        {/* Иконка телефона для мобилок */}
                        <button
                            className="phone-icon-mobile"
                            onClick={() => setIsPhoneModalOpen(true)}
                            aria-label="Позвонить"
                        >
                            <FiPhone />
                        </button>

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
                    </div>

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

            {/* Модальное окно с телефонами для мобилок */}
            <div className={`phone-modal ${isPhoneModalOpen ? 'active' : ''}`} onClick={() => setIsPhoneModalOpen(false)}>
                <div className="phone-modal-content" onClick={e => e.stopPropagation()}>
                    <button className="phone-modal-close" onClick={() => setIsPhoneModalOpen(false)}>
                        <FiX />
                    </button>

                    <h3 className="phone-modal-title">Позвоните нам</h3>

                    <div className="phone-list">
                        {phoneNumbers.map((phone, index) => (
                            <a
                                key={index}
                                href={phone.link}
                                className="phone-item"
                                onClick={() => setIsPhoneModalOpen(false)}
                            >
                                <FiPhone className="phone-item-icon" />
                                <div className="phone-item-content">
                                    <span className="phone-item-location">{phone.location}</span>
                                    <span className="phone-item-number">{phone.number}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <p className="phone-modal-hint">
                        Работаем ежедневно с 8:30 до 19:00
                    </p>
                </div>
            </div>
        </>
    );
};

export default Navbar;