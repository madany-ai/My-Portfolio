/**
 * Mohamed Madany Portfolio - Enhanced JavaScript
 * Vanilla JS with animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initThemeToggle();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initSmoothScroll();
    initTypingEffect();
    initContactForm();
    initParallax();
});

/**
 * Theme Toggle (Dark/Light Mode)
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/**
 * Navigation (Mobile Menu & Scroll Effects)
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = navLinks.querySelectorAll('a');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    const updateActiveLink = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

/**
 * Scroll Animations (Intersection Observer)
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Trigger hero animations immediately
    setTimeout(() => {
        document.querySelectorAll('.hero .animate-fade-up, .hero .animate-fade-left').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

/**
 * Skill Bars Animation
 */
function initSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate progress bars
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.getPropertyValue('--width');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    skillCategories.forEach(category => {
        observer.observe(category);
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Typing Effect for Hero
 */
function initTypingEffect() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const words = [
        'تحقق أهدافك',
        'سريعة وآمنة',
        'تزيد مبيعاتك',
        'احترافية ومميزة',
        'تخدم نمو أعمالك'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typedElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

/**
 * Contact Form Handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validation
        const requiredFields = ['name', 'email', 'service', 'message'];
        let isValid = true;
        
        requiredFields.forEach(field => {
            const input = form.querySelector(`[name="${field}"]`);
            if (!data[field] || data[field].trim() === '') {
                isValid = false;
                input.style.borderColor = '#FF0628';
                shakeElement(input);
            } else {
                input.style.borderColor = '';
            }
        });
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInput = form.querySelector('[name="email"]');
        
        if (!emailRegex.test(data.email)) {
            isValid = false;
            emailInput.style.borderColor = '#FF0628';
            shakeElement(emailInput);
        }
        
        if (isValid) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>جاري الإرسال...</span>';
            submitBtn.disabled = true;
            
            // Simulate submission
            setTimeout(() => {
                submitBtn.innerHTML = '<span>✓ تم الإرسال بنجاح!</span>';
                submitBtn.style.background = 'linear-gradient(135deg, #27c93f, #1fa830)';
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    showNotification('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.', 'success');
                }, 2000);
            }, 1500);
            
            console.log('Form submitted:', data);
        }
    });
    
    // Clear error styling on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '';
        });
    });
}

/**
 * Shake animation for invalid inputs
 */
function shakeElement(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = 'shake 0.5s ease';
    
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Add shake animation
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-10px); }
    80% { transform: translateX(10px); }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = shakeKeyframes;
document.head.appendChild(styleSheet);

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: ${type === 'success' ? '#27c93f' : '#FFB50F'};
        color: #000;
        padding: 15px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const notificationStyles = `
@keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(-100%); opacity: 0; }
}
`;

const notificationStyleSheet = document.createElement('style');
notificationStyleSheet.textContent = notificationStyles;
document.head.appendChild(notificationStyleSheet);

/**
 * Parallax Effect
 */
function initParallax() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
    
    // Floating cards parallax
    const floatingCards = document.querySelectorAll('.floating-card');
    
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 0.3;
            const baseTransform = card.style.transform || '';
            card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

/**
 * Counter Animation for Stats
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = '+' + target;
            clearInterval(timer);
        } else {
            element.textContent = '+' + Math.floor(current);
        }
    }, 16);
}

// Animate trust numbers when visible
const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.trust-number');
            numbers.forEach(num => {
                const value = parseInt(num.textContent.replace(/\D/g, ''));
                if (value) {
                    animateCounter(num, value);
                }
            });
            trustObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroTrust = document.querySelector('.hero-trust');
if (heroTrust) {
    trustObserver.observe(heroTrust);
}

/**
 * Preloader
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

/**
 * Back to Top Button Visibility
 */
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
}
