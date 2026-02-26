'use client'
import React, { useState } from 'react';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';
import './contacts.css';

const Contacts = () => {
    const [activeLocation, setActiveLocation] = useState(0);

    const locations = [
        {
            id: 1,
            city: 'Бухара, Хазрати Имом',
            address: 'ул. Сулеймана Мурадова',
            phone: ['+998 (95) 705-20-02'],
            email: ['xakimkarimov2002@gmail.com'],
            hours: ['Пн-Вс: 8:30 - 19:00',],
            map: 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6132.233877821713!2d64.40718!3d39.781931!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzU1LjAiTiA2NMKwMjQnMjUuOSJF!5e0!3m2!1sru!2s!4v1772090754831!5m2!1sru!2s'
        },
        {
            id: 2,
            city: 'Бухара, Калхоз бозор',
            address: 'ул Афросийоб, дом 384',
            phone: ['+998 (95) 868-20-02'],
            email: ['xakimkarimov2002@gmail.com'],
            hours: ['Пн-Вс: 8:30 - 19:00',],
            map: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2578.5129125086996!2d64.39111204635766!3d39.77589430558942!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1772110095481!5m2!1sru!2s'
        },
        {
            id: 3,
            city: 'Бухара, Калхоз бозор',
            address: 'ул Ибн Сино, дом 19',
            phone: ['+998 (99) 940-60-60'],
            email: ['xakimkarimov2002@gmail.com'],
            hours: ['Пн-Вс: 8:30 - 19:00',],
            map: 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d406.05431904481486!2d64.40737578854055!3d39.781998993603224!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzU1LjQiTiA2NMKwMjQnMjYuNiJF!5e0!3m2!1sru!2s!4v1772109201055!5m2!1sru!2s'
        }
    ];

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
                        Два магазина в Бухаре для вашего удобства
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
                                        <p className="contact-address">{locations[activeLocation].address}</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <HiOutlinePhone className="contact-icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Телефоны</h4>
                                        {locations[activeLocation].phone.map((phone, i) => (
                                            <p key={i} className="contact-phone">
                                                <a className='contact-phone-a' href={`tel:${phone.replace(/\D/g, '')}`}>
                                                    {phone}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <HiOutlineMail className="contact-icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Email</h4>
                                        {locations[activeLocation].email.map((email, i) => (
                                            <p key={i} className="contact-email">
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
                                            <p key={i} className="contact-hours">{hour}</p>
                                        ))}
                                        <span className="contact-note">Без выходных</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Карта */}
                    <div className="map-wrapper">
                        <div className="map-card">
                            <iframe
                                src={locations[activeLocation].map}
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '24px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Карта ${locations[activeLocation].city}`}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;