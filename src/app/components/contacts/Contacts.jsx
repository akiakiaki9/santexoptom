'use client'
import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';
import './contacts.css';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeLocation, setActiveLocation] = useState(0);

    const locations = [
        {
            id: 1,
            city: 'Москва',
            address: 'ул. Строителей, 15',
            metro: 'м. Строителей, выход №2',
            phone: ['+7 (495) 123-45-67', '+7 (495) 765-43-21'],
            email: ['info@msk.santehnika.ru', 'sales@msk.santehnika.ru'],
            hours: ['Пн-Пт: 9:00 - 20:00', 'Сб-Вс: 10:00 - 18:00'],
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.777292299721!2d37.615315315915295!3d55.75222098055263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5b2c7b9c9f%3A0x9b8b3b8b3b8b3b8b!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1620000000000!5m2!1sru!2sru'
        },
        {
            id: 2,
            city: 'Санкт-Петербург',
            address: 'пр. Невский, 45',
            metro: 'м. Невский проспект',
            phone: ['+7 (812) 234-56-78', '+7 (812) 876-54-32'],
            email: ['info@spb.santehnika.ru', 'sales@spb.santehnika.ru'],
            hours: ['Пн-Пт: 10:00 - 21:00', 'Сб-Вс: 11:00 - 19:00'],
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.123456789!2d30.315123!3d59.934123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310b5b8b8b8b%3A0x9b8b3b8b3b8b3b8b!2z0J3QtdCy0YHQutC40Lkg0L_RgC4!5e0!3m2!1sru!2sru!4v1620000000001!5m2!1sru!2sru'
        },
        {
            id: 3,
            city: 'Казань',
            address: 'ул. Баумана, 22',
            metro: 'м. Кремлевская',
            phone: ['+7 (843) 345-67-89', '+7 (843) 987-65-43'],
            email: ['info@kzn.santehnika.ru', 'sales@kzn.santehnika.ru'],
            hours: ['Пн-Пт: 9:00 - 20:00', 'Сб-Вс: 10:00 - 18:00'],
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.987654321!2d49.123456!3d55.789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4158890b5b8b8b8b%3A0x9b8b3b8b3b8b3b8b!2z0YPQuy4g0JHRg9C80LDQvdCw!5e0!3m2!1sru!2sru!4v1620000000002!5m2!1sru!2sru'
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section className="contacts-section">
            <div className="contacts-bg">
                <div className="bg-circle circle1"></div>
                <div className="bg-circle circle2"></div>
                <div className="bg-dots"></div>
            </div>

            <div className="contacts-container">
                <div className="contacts-header">
                    <span className="contacts-badge">Свяжитесь с нами</span>
                    <h2 className="contacts-title">
                        <span className="title-word">Наши</span>
                        <span className="title-word">контакты</span>
                    </h2>
                    <p className="contacts-subtitle">
                        3 магазина в разных городах для вашего удобства
                    </p>
                </div>

                {/* Селектор локаций */}
                <div className="locations-tabs">
                    {locations.map((location, index) => (
                        <button
                            key={location.id}
                            className={`location-tab ${activeLocation === index ? 'active' : ''}`}
                            onClick={() => setActiveLocation(index)}
                        >
                            <HiOutlineLocationMarker className="tab-icon" />
                            <span>{location.city}</span>
                        </button>
                    ))}
                </div>

                <div className="contacts-grid">
                    {/* Информация */}
                    <div className="contacts-info">
                        <div className="info-card">
                            <h3 className="info-card-title">{locations[activeLocation].city}</h3>
                            
                            <div className="contact-items">
                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <HiOutlineLocationMarker className="contact-icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Адрес</h4>
                                        <p>{locations[activeLocation].address}</p>
                                        <span className="contact-note">{locations[activeLocation].metro}</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <HiOutlinePhone className="contact-icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Телефон</h4>
                                        {locations[activeLocation].phone.map((phone, i) => (
                                            <p key={i}>
                                                <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
                                            </p>
                                        ))}
                                        <span className="contact-note">Круглосуточно</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <HiOutlineMail className="contact-icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Email</h4>
                                        {locations[activeLocation].email.map((email, i) => (
                                            <p key={i}>
                                                <a href={`mailto:${email}`}>{email}</a>
                                            </p>
                                        ))}
                                        <span className="contact-note">Ответим в течение часа</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <HiOutlineClock className="contact-icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Режим работы</h4>
                                        {locations[activeLocation].hours.map((hour, i) => (
                                            <p key={i}>{hour}</p>
                                        ))}
                                        <span className="contact-note">Без выходных</span>
                                    </div>
                                </div>
                            </div>

                            {/* Социальные сети */}
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </a>
                                <a href="#" className="social-link">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.26-11.738c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                                <a href="#" className="social-link">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Карта для выбранной локации */}
                        <div className="map-card">
                            <iframe 
                                src={locations[activeLocation].map}
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title={`Карта ${locations[activeLocation].city}`}
                            ></iframe>
                        </div>
                    </div>

                    {/* Форма обратной связи */}
                    <div className="contacts-form-wrapper">
                        <div className="form-card">
                            <h3 className="form-title">Обратная связь</h3>
                            <p className="form-subtitle">Заполните форму и мы свяжемся с вами</p>

                            <form onSubmit={handleSubmit} className="contacts-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ваше имя"
                                        required
                                        className="form-input"
                                    />
                                    <span className="input-focus"></span>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                        className="form-input"
                                    />
                                    <span className="input-focus"></span>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Ваше сообщение"
                                        rows="5"
                                        required
                                        className="form-textarea"
                                    ></textarea>
                                    <span className="input-focus"></span>
                                </div>

                                <button 
                                    type="submit" 
                                    className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}
                                >
                                    <span className="btn-text">Отправить сообщение</span>
                                    <FiSend className="btn-icon" />
                                    <span className="btn-success">✓ Отправлено!</span>
                                </button>
                            </form>

                            <p className="form-policy">
                                Нажимая кнопку, вы соглашаетесь с 
                                <a href="/privacy"> политикой конфиденциальности</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;