// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#" or empty
        if (!href || href === '#' || href.length <= 1) {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        try {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (window.innerWidth < 768) {
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('active');
                    }
                }
            }
        } catch (error) {
            console.warn('Invalid selector:', href);
        }
    });
});

// Navbar Scroll Effect with smooth resize animation
const navbar = document.getElementById('navbar');
let lastScroll = 0;
let ticking = false;

function updateNavbar() {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolled down more than 50px
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateNavbar();
        });
        ticking = true;
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in-scroll class
document.querySelectorAll('.fade-in-scroll').forEach(el => {
    observer.observe(el);
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Counter Animation
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
};

// Trigger counter animation when in view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.text-3xl');
            counters.forEach(counter => {
                const target = counter.textContent.replace(/[^0-9]/g, '');
                if (target) {
                    animateCounter(counter, parseInt(target));
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-content .mt-12');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show success message
        showNotification('success', 'Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất có thể.');
        
        // Reset form
        contactForm.reset();
    });
}

// Notification Function
function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl transform translate-x-0 transition-all duration-500 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white font-semibold`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Product Card Hover Effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});


// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-shapes .shape');
    
    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Testimonial Slider Auto-play (Optional)
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonialCards.length > 3) {
        testimonialCards.forEach((card, index) => {
            card.style.opacity = '0.5';
            card.style.transform = 'scale(0.9)';
        });
        
        const activeIndex = testimonialIndex % testimonialCards.length;
        testimonialCards[activeIndex].style.opacity = '1';
        testimonialCards[activeIndex].style.transform = 'scale(1)';
        
        testimonialIndex++;
    }
}

// Start testimonial rotation every 5 seconds
setInterval(rotateTestimonials, 5000);

// Mouse Cursor Effect (Optional - Cool effect)
// const cursor = document.createElement('div');
// cursor.className = 'custom-cursor';
// cursor.style.cssText = `
//     width: 20px;
//     height: 20px;
//     border: 2px solid #8B4789;
//     border-radius: 50%;
//     position: fixed;
//     pointer-events: none;
//     z-index: 9999;
//     transition: transform 0.2s ease;
//     display: none;
// `;
// document.body.appendChild(cursor);

// document.addEventListener('mousemove', (e) => {
//     if (window.innerWidth > 768) {
//         cursor.style.display = 'block';
//         cursor.style.left = e.clientX - 10 + 'px';
//         cursor.style.top = e.clientY - 10 + 'px';
//     }
// });

// Cursor grow on clickable elements
// document.querySelectorAll('a, button').forEach(el => {
//     el.addEventListener('mouseenter', () => {
//         cursor.style.transform = 'scale(1.5)';
//         cursor.style.background = 'rgba(139, 71, 137, 0.2)';
//     });
    
//     el.addEventListener('mouseleave', () => {
//         cursor.style.transform = 'scale(1)';
//         cursor.style.background = 'transparent';
//     });
// });

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        mobileMenu.classList.remove('active');
    }
    
    // Arrow keys for product navigation (optional)
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        // Add product carousel navigation if needed
    }
});

// Performance: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy operations
window.addEventListener('scroll', debounce(() => {
    // Heavy scroll operations here
}, 10));

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate elements on page load
    document.querySelectorAll('.animate-fade-in-up').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

// Console Easter Egg
console.log('%c🎉 Welcome to Gừng Đen Volten! 🎉', 'color: #8B4789; font-size: 24px; font-weight: bold;');
console.log('%cLooking for something? Contact us at info@volten.vn', 'color: #E91E63; font-size: 14px;');

// Print friendly
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Service Worker Registration (for PWA - optional)
if ('serviceWorker' in navigator) {
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(reg => console.log('Service Worker registered'))
    //         .catch(err => console.log('Service Worker registration failed'));
    // });
}

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
    // Send to analytics service
    console.log('Event tracked:', category, action, label);
}

// Track button clicks
document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        const text = this.textContent.trim();
        trackEvent('Button', 'Click', text);
    });
});

// Track form submissions
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('Form', 'Submit', 'Contact Form');
    });
}

// Error handling for images
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('error', function() {
//         this.src = '';
//     });
// });

// Accessibility: Focus visible
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

console.log('🚀 Landing page initialized successfully!');

// ===================================
// Testimonials Slider - Center Mode with Infinity Loop
// ===================================
let currentTestimonialIndex = 0;
let testimonialInterval;
let isTransitioning = false;

function initTestimonialSlider() {
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    if (!track || !slides.length || !dotsContainer) return;
    
    const totalSlides = slides.length;
    
    // Clone first and last few slides for infinity effect
    const slidesToClone = 2; // Clone 2 slides on each side
    
    // Clone last slides and prepend
    for (let i = totalSlides - slidesToClone; i < totalSlides; i++) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('cloned');
        track.insertBefore(clone, track.firstChild);
    }
    
    // Clone first slides and append
    for (let i = 0; i < slidesToClone; i++) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('cloned');
        track.appendChild(clone);
    }
    
    // Update currentIndex to account for prepended clones
    currentTestimonialIndex = slidesToClone;
    
    // Create dots for each original slide
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Chuyển đến testimonial ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToTestimonial(i + slidesToClone, true);
        });
        dotsContainer.appendChild(dot);
    }
    
    // Initialize position
    updateSliderPosition(false);
    
    // Start autoplay
    startTestimonialAutoplay();
}

function updateSliderPosition(animate = true) {
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonials-track .testimonial-slide');
    const container = document.querySelector('.testimonials-slider');
    const dots = document.querySelectorAll('#testimonial-dots button');
    
    if (!track || !slides.length || !container) return;
    
    // Calculate offset to center the active slide
    const containerWidth = container.offsetWidth;
    const slideWidth = slides[0].offsetWidth;
    
    let offset;
    if (window.innerWidth >= 768) {
        offset = (containerWidth / 2) - (slideWidth / 2) - (currentTestimonialIndex * slideWidth);
    } else {
        offset = -currentTestimonialIndex * slideWidth;
    }
    
    if (!animate) {
        track.style.transition = 'none';
    } else {
        track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    track.style.transform = `translateX(${offset}px)`;
    
    // Update active class on slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentTestimonialIndex);
    });
    
    // FIX: Tính realIndex chính xác
    const originalSlides = document.querySelectorAll('.testimonial-slide:not(.cloned)');
    const totalOriginalSlides = originalSlides.length;
    const slidesToClone = 2;
    
    // Đơn giản hóa: trừ đi offset của cloned slides
    let realIndex = currentTestimonialIndex - slidesToClone;
    
    // Normalize về range 0 -> totalOriginalSlides-1
    if (realIndex < 0) {
        realIndex = totalOriginalSlides + realIndex;
    } else if (realIndex >= totalOriginalSlides) {
        realIndex = realIndex - totalOriginalSlides;
    }
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === realIndex);
    });
}

function goToTestimonial(index, resetAutoplay = false) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    currentTestimonialIndex = index;
    
    updateSliderPosition(true);
    
    // Get slide info
    const originalSlides = document.querySelectorAll('.testimonial-slide:not(.cloned)');
    const totalOriginalSlides = originalSlides.length;
    const slidesToClone = 2;
    
    // Check if we need to jump after transition
    const needsJump = currentTestimonialIndex < slidesToClone || 
                      currentTestimonialIndex >= totalOriginalSlides + slidesToClone;
    
    if (needsJump) {
        // FIX: Set timeout reference để có thể cancel nếu cần
        setTimeout(() => {
            // Jump to the real slide without animation
            if (currentTestimonialIndex < slidesToClone) {
                // At the beginning clones, jump to end
                currentTestimonialIndex = totalOriginalSlides + currentTestimonialIndex;
            } else if (currentTestimonialIndex >= totalOriginalSlides + slidesToClone) {
                // At the end clones, jump to beginning  
                currentTestimonialIndex = currentTestimonialIndex - totalOriginalSlides;
            }
            updateSliderPosition(false);
            
            // FIX: Đợi thêm 1 frame để DOM update xong mới unlock
            requestAnimationFrame(() => {
                isTransitioning = false;
            });
        }, 500);
    } else {
        // Release lock after transition
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
    
    if (resetAutoplay) {
        resetTestimonialAutoplay();
    }
}

function nextTestimonial() {
    const slides = document.querySelectorAll('.testimonials-track .testimonial-slide');
    const maxIndex = slides.length - 1;
    
    // Cho phép next ngay cả khi đang ở slide cuối
    const nextIndex = currentTestimonialIndex + 1;
    
    if (nextIndex <= maxIndex) {
        goToTestimonial(nextIndex, true);
    }
    // Nếu vượt quá, không làm gì (đã ở clone cuối)
}

function prevTestimonial() {
    // Cho phép prev ngay cả khi đang ở slide đầu
    const prevIndex = currentTestimonialIndex - 1;
    
    if (prevIndex >= 0) {
        goToTestimonial(prevIndex, true);
    }
    // Nếu < 0, không làm gì (đã ở clone đầu)
}

function startTestimonialAutoplay() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialAutoplay() {
    clearInterval(testimonialInterval);
}

function resetTestimonialAutoplay() {
    stopTestimonialAutoplay();
    startTestimonialAutoplay();
}

// Pause on hover
const sliderContainer = document.querySelector('.testimonials-slider');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopTestimonialAutoplay);
    sliderContainer.addEventListener('mouseleave', startTestimonialAutoplay);
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateSliderPosition(false);
    }, 250);
});

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

if (sliderContainer) {
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextTestimonial();
        } else {
            prevTestimonial();
        }
    }
}

// Initialize slider
initTestimonialSlider();

// Combo Dialog Functions
function openComboDialog(comboId) {
    const combo = combosData.find(c => c.id === comboId);
    if (!combo) return;
    
    const dialogContent = document.getElementById('combo-dialog-content');
    
    let benefitsHtml = combo.details.benefits.map(benefit => 
        `<div class="flex items-start space-x-3 mb-2">
            <i class="fas fa-check-circle text-primary text-lg mt-1"></i>
            <span class="text-gray-700">${benefit}</span>
        </div>`
    ).join('');
    
    let ingredientsHtml = combo.details.ingredients.map(ingredient => 
        `<span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-2 mr-2">${ingredient}</span>`
    ).join('');
    
    dialogContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Left side - Image -->
            <div class="flex flex-col items-center">
                <div class="w-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 flex items-center justify-center h-96">
                    <img src="${combo.detailImage}" alt="${combo.name}" class="max-h-full max-w-full object-contain">
                </div>
                <div class="mt-6 text-center w-full">
                    <div class="inline-block">
                        <h3 class="text-3xl font-bold text-gray-900 mb-2">${combo.name}</h3>
                        <div class="flex items-center justify-center gap-2 mb-4">
                            <div class="text-yellow-400 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-600 text-sm">(5.0 - 1000+ Đánh giá)</span>
                        </div>
                        <div class="flex items-center justify-center gap-3">
                            <span class="text-4xl font-bold text-primary">${combo.price}</span>
                            <span class="text-xl text-gray-400 line-through">${combo.originalPrice}</span>
                            <span class="bg-red-500 text-white px-3 py-1 rounded-full font-bold">${combo.discount}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right side - Details -->
            <div>
                <div class="mb-8">
                    <h4 class="text-2xl font-bold text-primary mb-4">
                        <i class="fas fa-info-circle mr-2"></i>${combo.details.title}
                    </h4>
                    <p class="text-gray-700 text-lg leading-relaxed mb-4">${combo.details.description}</p>
                </div>
                
                <div class="mb-8">
                    <h4 class="text-xl font-bold text-gray-900 mb-4">
                        <i class="fas fa-heart text-red-500 mr-2"></i>Lợi Ích Chính
                    </h4>
                    <div class="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl">
                        ${benefitsHtml}
                    </div>
                </div>
                
                <div class="mb-8">
                    <h4 class="text-xl font-bold text-gray-900 mb-4">
                        <i class="fas fa-flask mr-2"></i>Thành Phần
                    </h4>
                    <div class="flex flex-wrap">
                        ${ingredientsHtml}
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <button onclick="closeComboDialog()" class="px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                        <i class="fas fa-arrow-left mr-2"></i>Quay Lại
                    </button>
                    <button class="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors duration-300">
                        <i class="fas fa-shopping-cart mr-2"></i>Mua Ngay
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const dialog = document.getElementById('combo-dialog');
    dialog.classList.remove('hidden');
    dialog.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeComboDialog() {
    const dialog = document.getElementById('combo-dialog');
    dialog.classList.add('hidden');
    dialog.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close combo dialog when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const comboDialog = document.getElementById('combo-dialog');
    if (comboDialog) {
        comboDialog.addEventListener('click', function(e) {
            if (e.target === comboDialog) {
                closeComboDialog();
            }
        });
    }
});

