'use client';
import React, { useState, useEffect } from 'react';
import RADIATORS from '../utils/radiators';
import './radiators.css';

const RadiatorsPage = () => {
    const [filters, setFilters] = useState({
        size: [],
        height: [],
        width: [],
        series: []
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
    const sizes = [...new Set(RADIATORS.map(item => item.size))];
    const heights = [...new Set(RADIATORS.map(item => item.height))].sort((a, b) => a - b);
    const widths = [...new Set(RADIATORS.map(item => item.width))].sort((a, b) => a - b);
    const series = [...new Set(RADIATORS.map(item => item.series))].sort();

    // Фильтрация товаров
    const filteredProducts = RADIATORS.filter(product => {
        if (filters.size.length && !filters.size.includes(product.size)) return false;
        if (filters.height.length && !filters.height.includes(product.height)) return false;
        if (filters.width.length && !filters.width.includes(product.width)) return false;
        if (filters.series.length && !filters.series.includes(product.series)) return false;
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
            size: [],
            height: [],
            width: [],
            series: []
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
            <main className="radiators-main">
                <div className="radiators-container">
                    {/* Хлебные крошки */}
                    <div className="breadcrumbs">
                        <a href="/">Главная</a> / <span>Радиаторы</span>
                    </div>

                    <div className="radiators-header">
                        <h1 className="radiators-title">Радиаторы</h1>

                        {/* Кнопка фильтра для мобилок */}
                        <button
                            className="mobile-filter-btn"
                            onClick={() => setIsFilterModalOpen(true)}
                        >
                            <span>🔍</span>
                            Фильтр {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                        </button>
                    </div>

                    <div className="radiators-content">
                        {/* Фильтры для десктопа */}
                        <aside className="filters-sidebar desktop-filters">
                            <div className="filters-header">
                                <h3>Фильтры</h3>
                                <button onClick={clearFilters} className="clear-filters">Сбросить</button>
                            </div>

                            {/* Фильтр по серии */}
                            <div className="filter-group">
                                <h4>Серия</h4>
                                {series.map(serie => (
                                    <label key={serie} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.series.includes(serie)}
                                            onChange={() => handleFilterChange('series', serie)}
                                        />
                                        {serie === '60x' && 'Серия 60 см (высота)'}
                                        {serie === '50x' && 'Серия 50 см (высота)'}
                                        {serie === '40x' && 'Серия 40 см (высота)'}
                                        {serie === '30x' && 'Серия 30 см (высота)'}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по размеру */}
                            <div className="filter-group">
                                <h4>Размер (ВxШ)</h4>
                                {sizes.map(size => (
                                    <label key={size} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.size.includes(size)}
                                            onChange={() => handleFilterChange('size', size)}
                                        />
                                        {size}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по высоте */}
                            <div className="filter-group">
                                <h4>Высота, см</h4>
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

                            {/* Фильтр по ширине */}
                            <div className="filter-group">
                                <h4>Ширина, см</h4>
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
                                            <span className="product-brand">
                                                <img src="/images/creative.png" alt="creative" />
                                                Creative
                                            </span>
                                            <span className="product-series">{product.series}</span>
                                        </div>

                                        <div className="product-info">
                                            <h3 className="product-model">Радиатор {product.size}</h3>
                                            <p className="product-size">Размер: {product.height} x {product.width} см</p>
                                            <p className="product-details">
                                                Высота: {product.height} см<br />
                                                Ширина: {product.width} см<br />
                                                Глубина: {product.depth} см
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

                            {/* Фильтр по серии */}
                            <div className="filter-group">
                                <h4>Серия</h4>
                                {series.map(serie => (
                                    <label key={serie} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.series.includes(serie)}
                                            onChange={() => handleFilterChange('series', serie)}
                                        />
                                        {serie === '60x' && 'Серия 60 см (высота)'}
                                        {serie === '50x' && 'Серия 50 см (высота)'}
                                        {serie === '40x' && 'Серия 40 см (высота)'}
                                        {serie === '30x' && 'Серия 30 см (высота)'}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по размеру */}
                            <div className="filter-group">
                                <h4>Размер (ВxШ)</h4>
                                {sizes.map(size => (
                                    <label key={size} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.size.includes(size)}
                                            onChange={() => handleFilterChange('size', size)}
                                        />
                                        {size}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по высоте */}
                            <div className="filter-group">
                                <h4>Высота, см</h4>
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

                            {/* Фильтр по ширине */}
                            <div className="filter-group">
                                <h4>Ширина, см</h4>
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
                                    style={{ backgroundImage: `url(${selectedProduct.detailImage})` }}
                                ></div>
                                <div className="color-variants">
                                    <p className="color-text">✓ Доступен в разных цветах</p>
                                </div>
                            </div>

                            <div className="modal-info">
                                <h2>Радиатор {selectedProduct.size}</h2>

                                <table className="product-specs">
                                    <tbody>
                                        <tr>
                                            <td>Бренд:</td>
                                            <td className="brand-cell">
                                                <img src="/images/creative.png" alt="creative" className="brand-logo" />
                                                creative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Серия:</td>
                                            <td>{selectedProduct.series}</td>
                                        </tr>
                                        <tr>
                                            <td>Размер (В×Ш):</td>
                                            <td>{selectedProduct.size}</td>
                                        </tr>
                                        <tr>
                                            <td>Высота:</td>
                                            <td>{selectedProduct.height} см</td>
                                        </tr>
                                        <tr>
                                            <td>Ширина:</td>
                                            <td>{selectedProduct.width} см</td>
                                        </tr>
                                        <tr>
                                            <td>Глубина:</td>
                                            <td>{selectedProduct.depth} см</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="product-equipment">
                                    <h3>Описание:</h3>
                                    <p className="product-description">
                                        Стальной панельный радиатор. Подходит для систем центрального и автономного отопления.
                                        Высокая теплоотдача, надежность и долговечность.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RadiatorsPage;