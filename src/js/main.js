/* Main JavaScript - Core functionality for the landing page */

(function() {
    'use strict';

    // ============================================
    // DOM Elements
    // ============================================
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // ============================================
    // Theme Management
    // ============================================
    const theme = {
        key: 'theme',
        defaultValue: 'light',
        
        init() {
            const savedTheme = localStorage.getItem(this.key);
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            // Use saved theme or system preference
            const theme = savedTheme || (prefersDark ? 'dark' : 'light');
            this.setTheme(theme);
        },
        
        setTheme(themeName) {
            html.setAttribute('data-theme', themeName);
            localStorage.setItem(this.key, themeName);
        },
        
        toggle() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        }
    };

    // ============================================
    // Mobile Navigation
    // ============================================
    const nav = {
        isOpen: false,
        
        init() {
            if (navToggle && navMenu) {
                navToggle.addEventListener('click', () => this.toggle());
                
                // Close menu when clicking on a link
                navMenu.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', () => this.close());
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                        this.close();
                    }
                });
            }
        },
        
        toggle() {
            this.isOpen = !this.isOpen;
            navMenu.classList.toggle('active', this.isOpen);
            navToggle.classList.toggle('active', this.isOpen);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = this.isOpen ? 'hidden' : '';
        },
        
        close() {
            this.isOpen = false;
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ============================================
    // Header Scroll Effect
    // ============================================
    const headerScroll = {
        lastScroll: 0,
        
        init() {
            window.addEventListener('scroll', () => this.handleScroll());
        },
        
        handleScroll() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
            
            this.lastScroll = currentScroll;
        }
    };

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    const smoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const targetId = anchor.getAttribute('href');
                    
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        e.preventDefault();
                        
                        const headerHeight = header.offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        nav.close();
                    }
                });
            });
        }
    };

    // ============================================
    // Animate on Scroll
    // ============================================
    const animateOnScroll = {
        init() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            // Observe elements with animation class
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }
    };

    // ============================================
    // Contact Form Handler (if added later)
    // ============================================
    const formHandler = {
        init() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // Add form submission logic here
                    console.log('Form submitted');
                });
            });
        }
    };

    // ============================================
    // Initialize All Modules
    // ============================================
    function init() {
        theme.init();
        nav.init();
        headerScroll.init();
        smoothScroll.init();
        animateOnScroll.init();
        formHandler.init();
        
        // Event listeners
        if (themeToggle) {
            themeToggle.addEventListener('click', () => theme.toggle());
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();