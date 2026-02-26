'use client';
import React, { useState } from 'react';
import './orderModal.css';

const OrderModal = ({ product, onClose }) => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет отправка данных на сервер
        console.log('Заказ:', { product, name, phone });
        setSubmitted(true);
    };

    return (
        <div className="order-modal-overlay" onClick={onClose}>
            <div className="order-modal-content" onClick={e => e.stopPropagation()}>
                <button className="order-modal-close" onClick={onClose}>×</button>

                {!submitted ? (
                    <>
                        <h2 className="order-modal-title">Заказать товар</h2>

                        <div className="order-product-info">
                            <div
                                className="order-product-image"
                                style={{ backgroundImage: `url(${product.image_1})` }}
                            ></div>
                            <div>
                                <h3>{product.brand} {product.model}</h3>
                                <p>Размер: {product.size}</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="order-form">
                            <div className="form-group">
                                <label htmlFor="name">Ваше имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Введите ваше имя"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Номер телефона</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    placeholder="+7 (___) ___-__-__"
                                />
                            </div>

                            <div className="order-actions">
                                <button type="submit" className="order-submit-btn">
                                    Позвоните мне
                                </button>
                                <p className="order-hint">
                                    Наш менеджер свяжется с вами в ближайшее время
                                </p>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="order-success">
                        <div className="success-icon">✓</div>
                        <h3>Спасибо за заказ!</h3>
                        <p>Наш менеджер скоро свяжется с вами по телефону</p>
                        <button onClick={onClose} className="success-btn">
                            Закрыть
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderModal;