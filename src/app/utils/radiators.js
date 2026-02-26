// data/radiators.js
const RADIATORS = [
    // 60x серия (высота x ширина) - ИСПРАВЛЕНО: height это высота, width это ширина
    // Размер 60x200 означает: высота 60 см, ширина 200 см
    { id: 1, size: '60x200', height: 60, width: 200, depth: 8, series: '60x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 2, size: '60x180', height: 60, width: 180, depth: 8, series: '60x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 3, size: '60x140', height: 60, width: 140, depth: 8, series: '60x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 4, size: '60x120', height: 60, width: 120, depth: 8, series: '60x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 5, size: '60x80', height: 60, width: 80, depth: 8, series: '60x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 6, size: '60x60', height: 60, width: 60, depth: 8, series: '60x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 7, size: '60x40', height: 60, width: 40, depth: 8, series: '60x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },

    // 50x серия (высота x ширина)
    { id: 8, size: '50x200', height: 50, width: 200, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 9, size: '50x180', height: 50, width: 180, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 10, size: '50x160', height: 50, width: 160, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 11, size: '50x140', height: 50, width: 140, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 12, size: '50x120', height: 50, width: 120, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 13, size: '50x100', height: 50, width: 100, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 14, size: '50x80', height: 50, width: 80, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 15, size: '50x60', height: 50, width: 60, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 16, size: '50x40', height: 50, width: 40, depth: 8, series: '50x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },

    // 40x серия (высота x ширина)
    { id: 17, size: '40x200', height: 40, width: 200, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 18, size: '40x180', height: 40, width: 180, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 19, size: '40x160', height: 40, width: 160, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 20, size: '40x140', height: 40, width: 140, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 21, size: '40x120', height: 40, width: 120, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 22, size: '40x100', height: 40, width: 100, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 23, size: '40x80', height: 40, width: 80, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 24, size: '40x60', height: 40, width: 60, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 25, size: '40x40', height: 40, width: 40, depth: 8, series: '40x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },

    // 30x серия (высота x ширина)
    { id: 26, size: '30x200', height: 30, width: 200, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 27, size: '30x180', height: 30, width: 180, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 28, size: '30x160', height: 30, width: 160, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 29, size: '30x140', height: 30, width: 140, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 30, size: '30x120', height: 30, width: 120, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 31, size: '30x100', height: 30, width: 100, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 32, size: '30x80', height: 30, width: 80, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 33, size: '30x60', height: 30, width: 60, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' },
    { id: 34, size: '30x40', height: 30, width: 40, depth: 8, series: '30x', image: '/images/radiators/3.jpg', detailImage: '/images/radiators/2.jpg', brand: 'creative' }
];

export default RADIATORS;