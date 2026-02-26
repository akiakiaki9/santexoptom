'use client';
import React, { useState, useEffect } from 'react';
import TOILETS from '../utils/toilets';
import './toilets.css';

const ToiletsPage = () => {
    const [filters, setFilters] = useState({
        type: [],
        height: [],
        length: [],
        width: [],
        lid: [],
        fittings: []
    });

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    // Блокировка скролла при открытой модалке
    useEffect(() => {
        if (selectedProduct || isFilterModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProduct, isFilterModalOpen]);

    // Получаем уникальные значения для фильтров
    const types = [...new Set(TOILETS.map(item => item.type))];
    const heights = [...new Set(TOILETS.map(item => item.height))].sort((a, b) => a - b);
    const lengths = [...new Set(TOILETS.map(item => item.length))].sort((a, b) => a - b);
    const widths = [...new Set(TOILETS.map(item => item.width))].sort((a, b) => a - b);
    const lids = [...new Set(TOILETS.map(item => item.lid))];
    const fittings = [...new Set(TOILETS.map(item => item.fittings))];

    // Фильтрация товаров
    const filteredProducts = TOILETS.filter(product => {
        if (filters.type.length && !filters.type.includes(product.type)) return false;
        if (filters.height.length && !filters.height.includes(product.height)) return false;
        if (filters.length.length && !filters.length.includes(product.length)) return false;
        if (filters.width.length && !filters.width.includes(product.width)) return false;
        if (filters.lid.length && !filters.lid.includes(product.lid)) return false;
        if (filters.fittings.length && !filters.fittings.includes(product.fittings)) return false;
        return true;
    });

    const handleFilterChange = (category, value) => {
        setFilters(prev => {
            const updated = { ...prev };
            if (updated[category].includes(value)) {
                updated[category] = updated[category].filter(v => v !== value);
            } else {
                updated[category] = [...updated[category], value];
            }
            return updated;
        });
    };

    const clearFilters = () => {
        setFilters({
            type: [],
            height: [],
            length: [],
            width: [],
            lid: [],
            fittings: []
        });
    };

    const activeFiltersCount = Object.values(filters).flat().length;

    return (
        <>
            <main className="toilets-main">
                <div className="toilets-container">
                    {/* Хлебные крошки */}
                    <div className="breadcrumbs">
                        <a href="/">Главная</a> / <span>Унитазы и биде</span>
                    </div>

                    <div className="toilets-header">
                        <h1 className="toilets-title">Унитазы и биде</h1>

                        {/* Кнопка фильтра для мобилок */}
                        <button
                            className="mobile-filter-btn"
                            onClick={() => setIsFilterModalOpen(true)}
                        >
                            <span>🔍</span>
                            Фильтр {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                        </button>
                    </div>

                    <div className="toilets-content">
                        {/* Фильтры для десктопа */}
                        <aside className="filters-sidebar desktop-filters">
                            <div className="filters-header">
                                <h3>Фильтры</h3>
                                <button onClick={clearFilters} className="clear-filters">Сбросить</button>
                            </div>

                            {/* Фильтр по типу */}
                            <div className="filter-group">
                                <h4>Тип</h4>
                                {types.map(type => (
                                    <label key={type} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.type.includes(type)}
                                            onChange={() => handleFilterChange('type', type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по высоте */}
                            <div className="filter-group">
                                <h4>Высота, мм</h4>
                                {heights.map(height => (
                                    <label key={height} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.height.includes(height)}
                                            onChange={() => handleFilterChange('height', height)}
                                        />
                                        {height}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по длине */}
                            <div className="filter-group">
                                <h4>Длина, мм</h4>
                                {lengths.map(length => (
                                    <label key={length} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.length.includes(length)}
                                            onChange={() => handleFilterChange('length', length)}
                                        />
                                        {length}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по ширине */}
                            <div className="filter-group">
                                <h4>Ширина, мм</h4>
                                {widths.map(width => (
                                    <label key={width} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.width.includes(width)}
                                            onChange={() => handleFilterChange('width', width)}
                                        />
                                        {width}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по крышке */}
                            <div className="filter-group">
                                <h4>Крышка</h4>
                                {lids.map(lid => (
                                    <label key={lid} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.lid.includes(lid)}
                                            onChange={() => handleFilterChange('lid', lid)}
                                        />
                                        {lid}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по арматуре */}
                            <div className="filter-group">
                                <h4>Арматура</h4>
                                {fittings.map(fitting => (
                                    <label key={fitting} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.fittings.includes(fitting)}
                                            onChange={() => handleFilterChange('fittings', fitting)}
                                        />
                                        {fitting}
                                    </label>
                                ))}
                            </div>
                        </aside>

                        {/* Сетка товаров */}
                        <div className="products-section">
                            <div className="products-grid">
                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id}
                                        className="product-card"
                                        onMouseEnter={() => setHoveredProduct(product.id)}
                                        onMouseLeave={() => setHoveredProduct(null)}
                                    >
                                        <div
                                            className="product-image"
                                            style={{
                                                backgroundImage: `url(${product.image})`
                                            }}
                                        >
                                            <span className="product-brand">{product.type}</span>
                                            <span className="product-model-badge">{product.model}</span>
                                        </div>

                                        <div className="product-info">
                                            <h3 className="product-model">{product.model}</h3>
                                            <p className="product-size">{product.length} x {product.width} x {product.height} мм</p>
                                            <p className="product-details">
                                                Глазурь: {product.glaze}<br />
                                                Цвет: {product.color}<br />
                                            </p>
                                            <button
                                                className="product-details-btn"
                                                onClick={() => setSelectedProduct(product)}
                                            >
                                                Подробнее
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="no-products">
                                    <p>Товары не найдены</p>
                                    <button onClick={clearFilters}>Сбросить фильтры</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Модальное окно фильтров для мобилок */}
            {isFilterModalOpen && (
                <div className="filter-modal" onClick={() => setIsFilterModalOpen(false)}>
                    <div className="filter-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="filter-modal-header">
                            <h3>Фильтры</h3>
                            <button className="filter-modal-close" onClick={() => setIsFilterModalOpen(false)}>×</button>
                        </div>

                        <div className="filter-modal-body">
                            <button onClick={clearFilters} className="clear-filters-mobile">Сбросить все фильтры</button>

                            {/* Фильтр по типу */}
                            <div className="filter-group">
                                <h4>Тип</h4>
                                {types.map(type => (
                                    <label key={type} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.type.includes(type)}
                                            onChange={() => handleFilterChange('type', type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по высоте */}
                            <div className="filter-group">
                                <h4>Высота, мм</h4>
                                {heights.map(height => (
                                    <label key={height} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.height.includes(height)}
                                            onChange={() => handleFilterChange('height', height)}
                                        />
                                        {height}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по длине */}
                            <div className="filter-group">
                                <h4>Длина, мм</h4>
                                {lengths.map(length => (
                                    <label key={length} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.length.includes(length)}
                                            onChange={() => handleFilterChange('length', length)}
                                        />
                                        {length}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по ширине */}
                            <div className="filter-group">
                                <h4>Ширина, мм</h4>
                                {widths.map(width => (
                                    <label key={width} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.width.includes(width)}
                                            onChange={() => handleFilterChange('width', width)}
                                        />
                                        {width}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по крышке */}
                            <div className="filter-group">
                                <h4>Крышка</h4>
                                {lids.map(lid => (
                                    <label key={lid} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.lid.includes(lid)}
                                            onChange={() => handleFilterChange('lid', lid)}
                                        />
                                        {lid}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по арматуре */}
                            <div className="filter-group">
                                <h4>Арматура</h4>
                                {fittings.map(fitting => (
                                    <label key={fitting} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.fittings.includes(fitting)}
                                            onChange={() => handleFilterChange('fittings', fitting)}
                                        />
                                        {fitting}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-modal-footer">
                            <button
                                className="apply-filters-btn"
                                onClick={() => setIsFilterModalOpen(false)}
                            >
                                Применить фильтры
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Модальное окно с деталями товара */}
            {selectedProduct && (
                <div className="modal" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>

                        <div className="modal-grid">
                            <div className="modal-images">
                                <div
                                    className="modal-main-image"
                                    style={{ backgroundImage: `url(${selectedProduct.image})` }}
                                ></div>
                            </div>

                            <div className="modal-info">
                                <h2>{selectedProduct.model}</h2>

                                <table className="product-specs">
                                    <tbody>
                                        <tr>
                                            <td>Тип:</td>
                                            <td>{selectedProduct.type}</td>
                                        </tr>
                                        <tr>
                                            <td>Модель:</td>
                                            <td>{selectedProduct.model}</td>
                                        </tr>
                                        <tr>
                                            <td>Размеры (Д×Ш×В):</td>
                                            <td>{selectedProduct.length} x {selectedProduct.width} x {selectedProduct.height} мм</td>
                                        </tr>
                                        <tr>
                                            <td>Глазурь:</td>
                                            <td>{selectedProduct.glaze}</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет:</td>
                                            <td>{selectedProduct.color}</td>
                                        </tr>
                                        <tr>
                                            <td>Крышка:</td>
                                            <td>{selectedProduct.lid}</td>
                                        </tr>
                                        <tr>
                                            <td>Арматура:</td>
                                            <td>{selectedProduct.fittings}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ToiletsPage;