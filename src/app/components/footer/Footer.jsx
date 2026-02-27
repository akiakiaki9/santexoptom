'use client'
import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiInstagram } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-logo">Сантехника</h3>
                        <p className="footer-description">
                            Интернет-магазин сантехники в Бухаре. Лучшие товары в наличии.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Категории</h4>
                        <ul className="footer-links">
                            <li><a href="/showers">Душевые кабины</a></li>
                            <li><a href="/radiators">Радиаторы</a></li>
                            <li><a href="/toilets">Унитазы</a></li>
                            <li><a href="/rakovina">Раковины</a></li>
                            <li><a href="/squat-toilet">Чашогены</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Контакты</h4>
                        <ul className="footer-contacts">
                            <li className="contact-item">
                                <FiMapPin className="contact-icon" />
                                <span>Бухара, Калхоз бозор</span>
                            </li>
                            <li className="contact-item">
                                <FiPhone className="contact-icon" />
                                <a href="tel:+998957052002">+998 (95) 705-20-02</a>
                            </li>
                            <li className="contact-item">
                                <FiPhone className="contact-icon" />
                                <a href="tel:+998958682002">+998 (95) 868-20-02</a>
                            </li>
                            <li className="contact-item">
                                <FiPhone className="contact-icon" />
                                <a href="tel:+998999406060">+998 (99) 940-60-60</a>
                            </li>
                            <li className="contact-item">
                                <FiMail className="contact-icon" />
                                <a href="mailto:xakimkarimov2002@gmail.com">xakimkarimov2002@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Мы в сети</h4>
                        <div className="social-links">
                            <a href="https://t.me/CREATIVE6060" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
                                <FaTelegramPlane />
                            </a>
                            <a href="https://www.instagram.com/creative_buhara/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <FiInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2026 SANTEX OPTOM. Все права защищены.
                    </p>
                    <p className="developer">
                        Разработано в <a href="https://akbarsoft.uz">Akbar Soft</a>
                    </p>
                </div>
            </div>

            <button className="scroll-top" onClick={scrollToTop} aria-label="Наверх">
                ↑
            </button>
        </footer>
    );
};

export default Footer;