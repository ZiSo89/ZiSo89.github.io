/**
 * Modern Resume - Interactive JavaScript
 * Features: Dark Mode, Smooth Scrolling, Animations
 */

// ============================================
// STATE MANAGEMENT
// ============================================
let isDarkMode = false;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    initDarkMode();
    initSmoothScrolling();
    initBackToTop();
    initSkillBars();
    initScrollAnimations();
    initNavHighlight();
    initContactForm();
    initFloatingContact();
    initMobileNavCollapse();
    
    console.log('🚀 Modern Resume initialized successfully!');
});

// ============================================
// LOADING SCREEN
// ============================================
function initLoadingScreen() {
    // Create loading screen element
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = '<div class="loader"></div>';
    document.body.insertBefore(loadingScreen, document.body.firstChild);
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 500);
    });
}

// ============================================
// DARK MODE
// ============================================
function initDarkMode() {
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        isDarkMode = true;
    }
    
    // Add to control buttons container
    let controlButtons = document.querySelector('.control-buttons');
    if (!controlButtons) {
        controlButtons = document.createElement('div');
        controlButtons.className = 'control-buttons';
        document.body.appendChild(controlButtons);
    }
    
    // Create language toggle button
    const langBtn = document.createElement('div');
    langBtn.className = 'control-btn';
    langBtn.id = 'languageToggle';
    langBtn.innerHTML = '🇬🇧 EN';
    langBtn.title = 'Switch to English';
    controlButtons.appendChild(langBtn);
    
    // Create dark mode button
    const darkModeBtn = document.createElement('div');
    darkModeBtn.className = 'control-btn';
    darkModeBtn.id = 'darkModeToggle';
    darkModeBtn.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    darkModeBtn.title = 'Toggle Dark Mode';
    controlButtons.appendChild(darkModeBtn);
    
    // Language toggle handler
    langBtn.addEventListener('click', function() {
        const newLang = currentLanguage === 'gr' ? 'en' : 'gr';
        updateLanguage(newLang);
    });
    
    // Toggle dark mode
    darkModeBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // Mobile language toggle handler
    const langBtnMobile = document.getElementById('lang-toggle-mobile');
    if (langBtnMobile) {
        langBtnMobile.addEventListener('click', function() {
            const newLang = currentLanguage === 'gr' ? 'en' : 'gr';
            updateLanguage(newLang);
        });
    }
    
    // Mobile dark mode toggle handler
    const darkModeBtnMobile = document.getElementById('dark-mode-toggle-mobile');
    if (darkModeBtnMobile) {
        darkModeBtnMobile.addEventListener('click', function() {
            isDarkMode = !isDarkMode;
            
            if (isDarkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                darkModeBtnMobile.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                darkModeBtnMobile.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // Sync initial state with mobile button
        if (isDarkMode) {
            darkModeBtnMobile.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    // Initialize language from saved preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'gr';
    updateLanguage(savedLang);
}



// ============================================
// SMOOTH SCROLLING
// ============================================
function initSmoothScrolling() {
    document.querySelectorAll('a.js-scroll-trigger').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
function initBackToTop() {
    const backToTop = document.createElement('div');
    backToTop.id = 'backToTop';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.title = 'Back to Top';
    document.body.appendChild(backToTop);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SKILL BARS ANIMATION
// ============================================
function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all resume items and cards
    document.querySelectorAll('.resume-item, .project-card, .certification-card, .wordpress-card').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// NAVIGATION HIGHLIGHT
// ============================================
function initNavHighlight() {
    const sections = document.querySelectorAll('section.resume-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
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
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: form.querySelector('[name="name"]').value,
                email: form.querySelector('[name="email"]').value,
                message: form.querySelector('[name="message"]').value
            };
            
            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(formData.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            setTimeout(() => {
                showNotification('Message sent successfully!', 'success');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = currentLanguage === 'en' ? 'Send Message' : 'Αποστολή Μηνύματος';
            }, 1500);
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// FLOATING CONTACT CARD
// ============================================
function initFloatingContact() {
    const floatingCard = document.getElementById('floatingContact');
    const floatingToggle = document.getElementById('floatingToggle');
    
    if (floatingToggle && floatingCard) {
        floatingToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            floatingCard.classList.toggle('active');
        });
        
        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!floatingCard.contains(e.target)) {
                floatingCard.classList.remove('active');
            }
        });
    }
}

// ============================================
// MOBILE NAVBAR AUTO-COLLAPSE
// ============================================
function initMobileNavCollapse() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Close navbar when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInside = navbarCollapse.contains(e.target) || navbarToggler.contains(e.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show') && window.innerWidth < 992) {
            navbarToggler.click();
        }
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ============================================
// GITHUB CONTRIBUTIONS (Optional - requires API key)
// ============================================
function loadGitHubContributions() {
    const username = 'ZiSo89';
    const contributionsContainer = document.querySelector('#github-contributions');
    
    if (contributionsContainer) {
        // This would require GitHub API integration
        // For now, showing a placeholder
        contributionsContainer.innerHTML = `
            <a href="https://github.com/${username}" target="_blank" class="github-link">
                <i class="fab fa-github"></i> View GitHub Profile
            </a>
        `;
    }
}

// ============================================
// EXPORT FUNCTIONS
// ============================================
window.resumeModern = {
    updateLanguage,
    currentLanguage: () => currentLanguage,
    isDarkMode: () => isDarkMode
};

console.log('✨ Modern Resume JS loaded successfully!');
