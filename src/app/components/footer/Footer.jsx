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
                            Интернет-магазин сантехники с 2010 года. Более 5000 товаров в наличии.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Категории</h4>
                        <ul className="footer-links">
                            <li><a href="/showers">Душевые кабины</a></li>
                            <li><a href="/radiators">Радиаторы</a></li>
                            <li><a href="/toilets">Унитазы</a></li>
                            <li><a href="/rakovina">Раковины</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Контакты</h4>
                        <ul className="footer-contacts">
                            <li className="contact-item">
                                <FiMapPin className="contact-icon" />
                                <span>Москва, ул. Строителей, 15</span>
                            </li>
                            <li className="contact-item">
                                <FiPhone className="contact-icon" />
                                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                            </li>
                            <li className="contact-item">
                                <FiMail className="contact-icon" />
                                <a href="mailto:info@santehnika.ru">info@santehnika.ru</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Мы в сети</h4>
                        <div className="social-links">
                            <a href="https://t.me/santehnika" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
                                <FaTelegramPlane />
                            </a>
                            <a href="https://instagram.com/santehnika" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <FiInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2024 Сантехника. Все права защищены.
                    </p>
                    <p className="developer">
                        Разработано в <a href="">Akbar Soft</a>
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