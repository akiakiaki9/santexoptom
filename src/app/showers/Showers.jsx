'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import KABINA from '../utils/kabina';
import './showers.css';

const ShowersPage = () => {
    const [filters, setFilters] = useState({
        brand: [],
        form: [],
        palletType: [],
        size: [],
        glassPattern: []
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
    const getUniqueValues = (key) => {
        const values = KABINA.map(item => item[key]).filter(Boolean);
        return [...new Set(values)];
    };

    const brands = getUniqueValues('brand');
    const forms = getUniqueValues('form');
    const palletTypes = getUniqueValues('palletType');
    const sizes = [...new Set(KABINA.map(item => item.size))];
    const glassPatterns = getUniqueValues('glassPattern');

    // Фильтрация товаров
    const filteredProducts = KABINA.filter(product => {
        if (filters.brand.length && !filters.brand.includes(product.brand)) return false;
        if (filters.form.length && !filters.form.includes(product.form)) return false;
        if (filters.palletType.length && !filters.palletType.includes(product.palletType)) return false;
        if (filters.size.length && !filters.size.includes(product.size)) return false;
        if (filters.glassPattern.length && !filters.glassPattern.includes(product.glassPattern)) return false;
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
            brand: [],
            form: [],
            palletType: [],
            size: [],
            glassPattern: []
        });
    };

    const activeFiltersCount = Object.values(filters).flat().length;

    return (
        <>
            <main className="showers-main">
                <div className="showers-container">
                    {/* Хлебные крошки */}
                    <div className="breadcrumbs">
                        <a href="/">Главная</a> / <span>Душевые кабины</span>
                    </div>

                    <div className="showers-header">
                        <h1 className="showers-title">Душевые кабины</h1>
                        
                        {/* Кнопка фильтра для мобилок */}
                        <button 
                            className="mobile-filter-btn"
                            onClick={() => setIsFilterModalOpen(true)}
                        >
                            <span>🔍</span>
                            Фильтр {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                        </button>
                    </div>

                    <div className="showers-content">
                        {/* Фильтры для десктопа */}
                        <aside className="filters-sidebar desktop-filters">
                            <div className="filters-header">
                                <h3>Фильтры</h3>
                                <button onClick={clearFilters} className="clear-filters">Сбросить</button>
                            </div>

                            {/* Фильтр по бренду */}
                            <div className="filter-group">
                                <h4>Бренд</h4>
                                {brands.map(brand => (
                                    <label key={brand} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.brand.includes(brand)}
                                            onChange={() => handleFilterChange('brand', brand)}
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по форме */}
                            <div className="filter-group">
                                <h4>Форма</h4>
                                {forms.map(form => (
                                    <label key={form} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.form.includes(form)}
                                            onChange={() => handleFilterChange('form', form)}
                                        />
                                        {form}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по типу поддона */}
                            <div className="filter-group">
                                <h4>Тип поддона</h4>
                                {palletTypes.map(type => (
                                    <label key={type} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.palletType.includes(type)}
                                            onChange={() => handleFilterChange('palletType', type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по размеру */}
                            <div className="filter-group">
                                <h4>Размер</h4>
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

                            {/* Фильтр по рисунку стекла */}
                            <div className="filter-group">
                                <h4>Рисунок стекла</h4>
                                {glassPatterns.map(pattern => (
                                    <label key={pattern} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.glassPattern.includes(pattern)}
                                            onChange={() => handleFilterChange('glassPattern', pattern)}
                                        />
                                        {pattern}
                                    </label>
                                ))}
                            </div>
                        </aside>

                        {/* Сетка товаров */}
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
                                            backgroundImage: `url(${
                                                hoveredProduct === product.id && product.image_2 
                                                    ? product.image_2 
                                                    : product.image_1
                                            })` 
                                        }}
                                    >
                                        <span className="product-brand">{product.brand}</span>
                                    </div>

                                    <div className="product-info">
                                        <h3 className="product-model">{product.model}</h3>
                                        <p className="product-size">Размер: {product.size}</p>
                                        <p className="product-details">
                                            Форма: {product.form}<br />
                                            Поддон: {product.palletType}<br />
                                            Стекло: {product.glassThickness}мм, {product.glassPattern}
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

                            {/* Фильтр по бренду */}
                            <div className="filter-group">
                                <h4>Бренд</h4>
                                {brands.map(brand => (
                                    <label key={brand} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.brand.includes(brand)}
                                            onChange={() => handleFilterChange('brand', brand)}
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по форме */}
                            <div className="filter-group">
                                <h4>Форма</h4>
                                {forms.map(form => (
                                    <label key={form} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.form.includes(form)}
                                            onChange={() => handleFilterChange('form', form)}
                                        />
                                        {form}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по типу поддона */}
                            <div className="filter-group">
                                <h4>Тип поддона</h4>
                                {palletTypes.map(type => (
                                    <label key={type} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.palletType.includes(type)}
                                            onChange={() => handleFilterChange('palletType', type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>

                            {/* Фильтр по размеру */}
                            <div className="filter-group">
                                <h4>Размер</h4>
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

                            {/* Фильтр по рисунку стекла */}
                            <div className="filter-group">
                                <h4>Рисунок стекла</h4>
                                {glassPatterns.map(pattern => (
                                    <label key={pattern} className="filter-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.glassPattern.includes(pattern)}
                                            onChange={() => handleFilterChange('glassPattern', pattern)}
                                        />
                                        {pattern}
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
                                    style={{ backgroundImage: `url(${selectedProduct.image_1})` }}
                                ></div>
                                {selectedProduct.image_2 && (
                                    <div
                                        className="modal-secondary-image"
                                        style={{ backgroundImage: `url(${selectedProduct.image_2})` }}
                                    ></div>
                                )}
                            </div>

                            <div className="modal-info">
                                <h2>{selectedProduct.brand} {selectedProduct.model}</h2>

                                <table className="product-specs">
                                    <tbody>
                                        <tr>
                                            <td>Бренд:</td>
                                            <td>{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Модель:</td>
                                            <td>{selectedProduct.model}</td>
                                        </tr>
                                        <tr>
                                            <td>Размер:</td>
                                            <td>{selectedProduct.size}</td>
                                        </tr>
                                        <tr>
                                            <td>Форма:</td>
                                            <td>{selectedProduct.form}</td>
                                        </tr>
                                        <tr>
                                            <td>Тип поддона:</td>
                                            <td>{selectedProduct.palletType}</td>
                                        </tr>
                                        <tr>
                                            <td>Толщина стекла:</td>
                                            <td>{selectedProduct.glassThickness} мм</td>
                                        </tr>
                                        <tr>
                                            <td>Рисунок стекла:</td>
                                            <td>{selectedProduct.glassPattern}</td>
                                        </tr>
                                        <tr>
                                            <td>Количество дверей:</td>
                                            <td>{selectedProduct.doorsCount}</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет профиля:</td>
                                            <td>{selectedProduct.profileColor}</td>
                                        </tr>
                                        <tr>
                                            <td>Тип открывания:</td>
                                            <td>{selectedProduct.doorDesign}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="product-equipment">
                                    <h3>Комплектация:</h3>
                                    <ul>
                                        {selectedProduct.equipment.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default ShowersPage;