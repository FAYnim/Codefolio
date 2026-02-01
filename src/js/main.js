(function() {
    'use strict';

    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    let navIsOpen = false;
    let headerLastScroll = 0;

    // Theme
    const THEME_KEY = 'theme';

    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(theme);
    }

    function setTheme(themeName) {
        html.setAttribute('data-theme', themeName);
        localStorage.setItem(THEME_KEY, themeName);
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Navigation
    function initNav() {
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', toggleNav);
            
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', closeNav);
            });
            
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                    closeNav();
                }
            });
        }
    }

    function toggleNav() {
        navIsOpen = !navIsOpen;
        navMenu.classList.toggle('active', navIsOpen);
        navToggle.classList.toggle('active', navIsOpen);
        document.body.style.overflow = navIsOpen ? 'hidden' : '';
    }

    function closeNav() {
        navIsOpen = false;
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Header scroll
    function initHeaderScroll() {
        window.addEventListener('scroll', handleScroll);
    }

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        
        headerLastScroll = currentScroll;
    }

    // Smooth scroll
    function initSmoothScroll() {
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
                    
                    closeNav();
                }
            });
        });
    }

    // Animate on scroll
    function initAnimateOnScroll() {
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
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Forms
    function initForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Form submitted');
            });
        });
    }

    // Init
    function init() {
        initTheme();
        initNav();
        initHeaderScroll();
        initSmoothScroll();
        initAnimateOnScroll();
        initForms();
        
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }

    // DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
