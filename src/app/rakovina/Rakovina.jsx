'use client';
import React, { useState, useEffect } from 'react';
import SINKS from '../utils/rakovina';
import './rakovina.css';

const Rakovina = () => {
    const [filters, setFilters] = useState({
        type: [],
        length: [],
        width: [],
        withPedestal: []
    });

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

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
    const types = [...new Set(SINKS.map(item => item.type))];
    const lengths = [...new Set(SINKS.map(item => item.length))].sort((a, b) => a - b);
    const widths = [...new Set(SINKS.map(item => item.width))].sort((a, b) => a - b);

    // Фильтрация товаров
    const filteredProducts = SINKS.filter(product => {
        if (filters.type.length && !filters.type.includes(product.type)) return false;
        if (filters.length.length && !filters.length.includes(product.length)) return false;
        if (filters.width.length && !filters.width.includes(product.width)) return false;
        return true;
    });

    // Пагинация
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setFilters({
            type: [],
            length: [],
            width: [],
            withPedestal: []
        });
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const activeFiltersCount = Object.values(filters).flat().length;

    return (
        <>
            <main className="sinks-main">
                <div className="sinks-container">
                    {/* Хлебные крошки */}
                    <div className="breadcrumbs">
                        <a href="/">Главная</a> / <span>Раковины</span>
                    </div>

                    <div className="sinks-header">
                        <h1 className="sinks-title">Раковины</h1>

                        {/* Кнопка фильтра для мобилок */}
                        <button
                            className="mobile-filter-btn"
                            onClick={() => setIsFilterModalOpen(true)}
                        >
                            <span>🔍</span>
                            Фильтр {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                        </button>
                    </div>

                    <div className="sinks-content">
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
                        </aside>

                        {/* Сетка товаров */}
                        <div className="products-section">
                            <div className="products-grid">
                                {currentProducts.map(product => (
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
                                            <span className="product-brand">ANGOLLO</span>
                                            <span className="product-type">{product.type}</span>
                                        </div>

                                        <div className="product-info">
                                            <h3 className="product-model">{product.model}</h3>
                                            <p className="product-size">{product.length} x {product.width} мм</p>
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

                            {/* Пагинация */}
                            {totalPages > 1 && (
                                <div className="pagination">
                                    <button
                                        className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        ←
                                    </button>

                                    {[...Array(totalPages)].map((_, index) => {
                                        const pageNumber = index + 1;
                                        if (
                                            pageNumber === 1 ||
                                            pageNumber === totalPages ||
                                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                        ) {
                                            return (
                                                <button
                                                    key={pageNumber}
                                                    className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
                                                    onClick={() => handlePageChange(pageNumber)}
                                                >
                                                    {pageNumber}
                                                </button>
                                            );
                                        }
                                        if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                                            return <span key={pageNumber} className="pagination-dots">...</span>;
                                        }
                                        return null;
                                    })}

                                    <button
                                        className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        →
                                    </button>
                                </div>
                            )}

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
                                            <td>Модель:</td>
                                            <td>{selectedProduct.model}</td>
                                        </tr>
                                        <tr>
                                            <td>Тип:</td>
                                            <td>{selectedProduct.type}</td>
                                        </tr>
                                        <tr>
                                            <td>Длина:</td>
                                            <td>{selectedProduct.length} мм</td>
                                        </tr>
                                        <tr>
                                            <td>Ширина:</td>
                                            <td>{selectedProduct.width} мм</td>
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
                                            <td>Цена:</td>
                                            <td>${selectedProduct.price}</td>
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

export default Rakovina;