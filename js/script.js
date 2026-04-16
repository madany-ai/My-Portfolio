/**
 * Mohamed Madany Portfolio - Enhanced JavaScript
 * Vanilla JS with animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initLangToggle();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initSmoothScroll();
    initTypingEffect();
    initContactForm();
    initParallax();
});

/**
 * Language Toggle (Arabic / English)
 */
function initLangToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    const html = document.documentElement;
    // Always start in Arabic
    html.setAttribute('data-lang', 'ar');
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');

    langToggle.addEventListener('click', () => {
        const currentLang = html.getAttribute('data-lang');
        const newLang = currentLang === 'ar' ? 'en' : 'ar';

        html.setAttribute('data-lang', newLang);
        html.setAttribute('lang', newLang);
        html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');

        // Swap all translatable elements
        document.querySelectorAll('[data-ar][data-en]').forEach(el => {
            const content = el.getAttribute(`data-${newLang}`);
            // If content contains HTML tags, use innerHTML
            if (content.includes('<') && content.includes('>')) {
                el.innerHTML = content;
            } else {
                el.textContent = content;
            }
        });

        // Update toggle button labels
        const labelAr = langToggle.querySelector('.lang-ar');
        const labelEn = langToggle.querySelector('.lang-en');
        if (newLang === 'en') {
            labelAr.style.display = 'none';
            labelEn.style.display = 'inline';
        } else {
            labelAr.style.display = 'inline';
            labelEn.style.display = 'none';
        }

        // Update page title
        document.title = newLang === 'en'
            ? 'AI Automation Consultant & Implementer | Mohamed Madany'
            : 'مستشار ومطور أتمتة الأعمال بالذكاء الاصطناعي | محمد مدني';

        // Update typing words based on language
        updateTypingWords(newLang);
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
    
    // Navbar scroll effect - optimized with requestAnimationFrame
    let ticking = false;
    
    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveLink(currentScroll);
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });
    
    // Active nav link based on scroll position
    // Cache section positions to avoid forced reflow
    const sections = document.querySelectorAll('section[id]');
    let sectionData = [];
    
    const cacheSectionPositions = () => {
        sectionData = Array.from(sections).map(section => ({
            id: section.getAttribute('id'),
            top: section.offsetTop - 150,
            bottom: section.offsetTop + section.offsetHeight - 150
        }));
    };
    
    // Cache positions on load and resize (debounced)
    cacheSectionPositions();
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(cacheSectionPositions, 250);
    }, { passive: true });
    
    const updateActiveLink = (scrollY) => {
        for (const section of sectionData) {
            if (scrollY > section.top && scrollY <= section.bottom) {
                const navLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
                if (navLink && !navLink.classList.contains('active')) {
                    navItems.forEach(item => item.classList.remove('active'));
                    navLink.classList.add('active');
                }
                break;
            }
        }
    };
    
    // Initial update
    updateActiveLink(window.pageYOffset);
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

let currentTypingLang = 'ar';
const typingWords = {
    ar: ['نظام يوفّر 15+ ساعة', 'ميزة تنافسية حقيقية', 'حل رقمي يعمل 24/7'],
    en: ['saves you 15+ hrs/week', 'works while you sleep', 'scales without hiring']
};

function updateTypingWords(lang) {
    currentTypingLang = lang;
}

function initTypingEffect() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const words = typingWords[currentTypingLang];
        const currentWord = words[wordIndex % words.length];

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
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
}

/**
 * Contact Form Handling with Netlify Forms Support
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    // Validation rules
    const validationRules = {
        name: (value) => value.trim().length >= 2,
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        service: (value) => value !== '',
        message: (value) => value.trim().length >= 10
    };
    
    // Show error state
    function showError(field) {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
    
    // Show success state
    function showSuccess(field) {
        field.classList.remove('invalid');
        field.classList.add('valid');
    }
    
    // Clear field state
    function clearFieldState(field) {
        field.classList.remove('invalid', 'valid');
    }
    
    // Validate single field
    function validateField(field) {
        const rule = validationRules[field.name];
        if (!rule) return true;
        
        if (rule(field.value)) {
            showSuccess(field);
            return true;
        } else {
            showError(field);
            return false;
        }
    }
    
    // Validate all fields
    function validateForm() {
        let isValid = true;
        let firstInvalidField = null;
        
        Object.keys(validationRules).forEach(fieldName => {
            const field = form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                const fieldValid = validateField(field);
                if (!fieldValid && isValid) {
                    firstInvalidField = field;
                }
                isValid = isValid && fieldValid;
            }
        });
        
        // Focus on first invalid field
        if (firstInvalidField) {
            firstInvalidField.focus();
            shakeElement(firstInvalidField);
        }
        
        return isValid;
    }
    
    // Real-time validation on blur
    const fields = form.querySelectorAll('input, textarea, select');
    fields.forEach(field => {
        // Skip honeypot and hidden fields
        if (field.name === 'bot-field' || field.type === 'hidden') return;
        
        // Validate on blur
        field.addEventListener('blur', () => {
            if (field.value.trim() !== '' || field.classList.contains('invalid')) {
                validateField(field);
            }
        });
        
        // Clear error on input (if was invalid)
        field.addEventListener('input', () => {
            if (field.classList.contains('invalid')) {
                validateField(field);
            } else if (field.classList.contains('valid')) {
                validateField(field);
            }
        });
        
        // Handle select change
        if (field.tagName === 'SELECT') {
            field.addEventListener('change', () => {
                validateField(field);
            });
        }
    });
    
    // Form submission with Netlify Forms
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check honeypot - if filled, it's a bot
        const honeypot = form.querySelector('[name="bot-field"]');
        if (honeypot && honeypot.value) {
            // Silently reject bot submissions
            console.log('Bot detected');
            return;
        }
        
        if (!validateForm()) {
            showNotification('⚠️ يرجى ملء جميع الحقول بشكل صحيح', 'error');
            return;
        }
        
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        
        // Loading state
        submitBtn.innerHTML = '<span class="loading-spinner"></span><span>جاري الإرسال...</span>';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.8';
        
        try {
            // Submit to Netlify Forms
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            if (response.ok) {
                // Success
                submitBtn.innerHTML = '<span>✓ تم الإرسال بنجاح!</span>';
                submitBtn.style.background = 'linear-gradient(135deg, #27c93f, #1fa830)';
                
                setTimeout(() => {
                    form.reset();
                    // Clear all field states
                    fields.forEach(field => clearFieldState(field));
                    
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                    submitBtn.style.opacity = '';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    showNotification('🎉 تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.', 'success');
                }, 2500);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Error state
            submitBtn.innerHTML = originalHTML;
            submitBtn.style.opacity = '';
            submitBtn.disabled = false;
            
            showNotification('❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر WhatsApp.', 'error');
        }
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
    
    // Define colors based on type
    let bgColor;
    switch(type) {
        case 'success':
            bgColor = 'linear-gradient(135deg, #27c93f, #1fa830)';
            break;
        case 'error':
            bgColor = 'linear-gradient(135deg, #FF4757, #FF0628)';
            break;
        default:
            bgColor = 'linear-gradient(135deg, #FFB50F, #FF9500)';
    }
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: ${bgColor};
        color: #fff;
        padding: 15px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-weight: 500;
        font-size: 14px;
        max-width: 350px;
    `;
    
    // Style the close button
    const closeBtn = notification.querySelector('button');
    closeBtn.style.cssText = `
        background: rgba(255,255,255,0.2);
        border: none;
        color: #fff;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
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
