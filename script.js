// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 5999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 128,
        isBestSeller: true
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 15999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 256,
        isBestSeller: true
    },
    {
        id: 3,
        name: "Designer Jacket",
        price: 7299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 92
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 9999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 184,
        isBestSeller: true
    },
    {
        id: 5,
        name: "Organic Coffee",
        price: 1999,
        category: "grocery",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 73
    },
    {
        id: 6,
        name: "Premium Tea Set",
        price: 3599,
        category: "grocery",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 7,
        name: "Face Cream",
        price: 2999,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
        rating: 4.2,
        reviews: 234,
        isBestSeller: true
    },
    {
        id: 8,
        name: "Makeup Kit",
        price: 5499,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 187
    },
    {
        id: 9,
        name: "Air Purifier",
        price: 12999,
        category: "home",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 98
    },
    {
        id: 10,
        name: "Smart Thermostat",
        price: 19999,
        category: "home",
        image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa9?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 145,
        isBestSeller: true
    },
    {
        id: 11,
        name: "Bluetooth Speaker",
        price: 4599,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 112
    },
    {
        id: 12,
        name: "Casual T-Shirt",
        price: 1499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
        rating: 4.1,
        reviews: 67
    },
    {
        id: 13,
        name: "Robot Vacuum",
        price: 24999,
        category: "home",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 203
    },
    {
        id: 14,
        name: "Perfume Set",
        price: 6999,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 89
    },
    {
        id: 15,
        name: "Laptop Stand",
        price: 3899,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 134
    },
    {
        id: 16,
        name: "Gaming Mouse",
        price: 2499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 145,
        isBestSeller: false
    },
    {
        id: 17,
        name: "Wireless Keyboard",
        price: 3299,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 89,
        isBestSeller: false
    },
    {
        id: 18,
        name: "Smartphone",
        price: 25999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 342,
        isBestSeller: true
    },
    {
        id: 19,
        name: "Tablet",
        price: 18999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 178,
        isBestSeller: false
    },
    {
        id: 20,
        name: "Denim Jeans",
        price: 2799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
        rating: 4.2,
        reviews: 156,
        isBestSeller: false
    },
    {
        id: 21,
        name: "Formal Shirt",
        price: 1899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 94,
        isBestSeller: false
    },
    {
        id: 22,
        name: "Leather Wallet",
        price: 1299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 203,
        isBestSeller: true
    },
    {
        id: 23,
        name: "Sunglasses",
        price: 2199,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
        rating: 4.1,
        reviews: 67,
        isBestSeller: false
    },
    {
        id: 24,
        name: "Sports Shoes",
        price: 4999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 289,
        isBestSeller: true
    },
    {
        id: 25,
        name: "Basmati Rice (5kg)",
        price: 899,
        category: "grocery",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 234,
        isBestSeller: false
    },
    {
        id: 26,
        name: "Cooking Oil (1L)",
        price: 299,
        category: "grocery",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 145,
        isBestSeller: false
    },
    {
        id: 27,
        name: "Mixed Nuts (500g)",
        price: 799,
        category: "grocery",
        image: "https://images.unsplash.com/photo-1599599810694-57a2ca67c8bc?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 98,
        isBestSeller: false
    },
    {
        id: 28,
        name: "Honey (250g)",
        price: 599,
        category: "grocery",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 167,
        isBestSeller: false
    },
    {
        id: 29,
        name: "Shampoo",
        price: 449,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
        rating: 4.2,
        reviews: 189,
        isBestSeller: false
    },
    {
        id: 30,
        name: "Moisturizer",
        price: 899,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 145,
        isBestSeller: false
    },
    {
        id: 31,
        name: "Lipstick Set",
        price: 1299,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 234,
        isBestSeller: true
    },
    {
        id: 32,
        name: "Nail Polish Kit",
        price: 699,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop",
        rating: 4.1,
        reviews: 78,
        isBestSeller: false
    },
    {
        id: 33,
        name: "Electric Kettle",
        price: 1799,
        category: "home",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 156,
        isBestSeller: false
    },
    {
        id: 34,
        name: "Microwave Oven",
        price: 8999,
        category: "home",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 203,
        isBestSeller: false
    },
    {
        id: 35,
        name: "Bed Sheets Set",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 134,
        isBestSeller: false
    },
    {
        id: 36,
        name: "Table Lamp",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        rating: 4.2,
        reviews: 89,
        isBestSeller: false
    },
    {
        id: 37,
        name: "Wall Clock",
        price: 899,
        category: "home",
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=300&h=300&fit=crop",
        rating: 4.1,
        reviews: 67,
        isBestSeller: false
    },
    {
        id: 38,
        name: "Power Bank",
        price: 1999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1609592827568-9ef69fb8bb90?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 245,
        isBestSeller: true
    },
    {
        id: 39,
        name: "USB Cable",
        price: 299,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 123,
        isBestSeller: false
    },
    {
        id: 40,
        name: "Backpack",
        price: 2499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 178,
        isBestSeller: false
    }
];

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = 'all';

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const productGrid = document.getElementById('productGrid');
const bestSellersGrid = document.getElementById('bestSellersGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const backToTop = document.getElementById('backToTop');
const loadingScreen = document.getElementById('loading');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadProducts();
    loadBestSellers();
    updateCartCount();
    startCountdown();
    setupScrollAnimations();
    
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filtering
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', handleCategoryClick);
    });
    
    // Back to top button
    backToTop.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Mobile Menu Functions
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Theme Functions
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Product Functions
function loadProducts() {
    displayProducts(products);
}

function loadBestSellers() {
    const bestSellers = products.filter(product => product.isBestSeller);
    displayProducts(bestSellers, bestSellersGrid);
}

function displayProducts(productsToShow, container = productGrid) {
    container.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Add animation
    container.classList.add('fade-in');
}

function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">₹${formatIndianPrice(product.price)}</div>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    
    if (hasHalfStar) {
        stars += '⭐';
    }
    
    return stars;
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount();
    showNotification('Product added to cart!');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(product);
        showNotification('Added to wishlist');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update UI
    const wishlistBtn = document.querySelector(`[onclick="toggleWishlist(${productId})"]`);
    if (wishlistBtn) {
        wishlistBtn.classList.toggle('active');
    }
}

// Search Functions
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        loadProducts();
        return;
    }
    
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// Category Filter Functions
function handleCategoryFilter(e) {
    const category = e.target.dataset.filter;
    currentFilter = category;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

function handleCategoryClick(e) {
    const category = e.currentTarget.dataset.category;
    
    // Update filter buttons
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter and display products
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Countdown Timer
function startCountdown() {
    const countdownElements = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    
    // Set initial time (24 hours from now)
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            clearInterval(timer);
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElements.hours.textContent = hours.toString().padStart(2, '0');
        countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
        countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Scroll Functions
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--card-bg)';
        navbar.style.backdropFilter = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animation Functions
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.category-card, .product-card, .feature-card, .review-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Newsletter Functions
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing to our newsletter!');
        e.target.reset();
    }
}

// Notification System
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        z-index: 10001;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Utility Functions
function formatIndianPrice(price) {
    return price.toLocaleString('en-IN');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance Optimization
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Lazy Loading for Images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You could show a user-friendly error message here
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Additional Features

// Product Quick View Modal (can be expanded)
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    // Implementation for modal would go here
    console.log('Quick view for product:', product);
}

// Price Range Filter (can be implemented)
function filterByPriceRange(min, max) {
    const filteredProducts = products.filter(product => 
        product.price >= min && product.price <= max
    );
    displayProducts(filteredProducts);
}

// Sort Products
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }
    
    displayProducts(sortedProducts);
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    // Enter key on CTA button
    if (e.key === 'Enter' && e.target.classList.contains('cta-btn')) {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
});

// Touch/Swipe Support for Mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    // Swipe right to left to close mobile menu
    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 50 && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Analytics and Tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Here you would integrate with analytics services like Google Analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track product views, cart additions, etc.
function trackProductView(productId) {
    trackEvent('product_view', { product_id: productId });
}

function trackAddToCart(productId) {
    trackEvent('add_to_cart', { product_id: productId });
}

// Export functions for potential use in other files
window.ShopEase = {
    addToCart,
    toggleWishlist,
    openQuickView,
    sortProducts,
    filterByPriceRange
};