/**
 * Main JavaScript - Company Profile
 * Handles theme toggle, mobile menu, smooth scroll, and animations
 */

// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggleBtn = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.currentTheme = this.getTheme();
    
    this.init();
  }
  
  init() {
    // Apply saved theme
    this.applyTheme(this.currentTheme);
    
    // Add event listener
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }
  }
  
  getTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeIcon(theme);
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.currentTheme = newTheme;
    this.applyTheme(newTheme);
  }
  
  updateThemeIcon(theme) {
    if (this.themeIcon) {
      this.themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }
}

// Mobile Menu Management
class MobileMenu {
  constructor() {
    this.menuToggle = document.getElementById('nav-toggle');
    this.menu = document.getElementById('nav-menu');
    this.menuLinks = document.querySelectorAll('.nav__link');
    
    this.init();
  }
  
  init() {
    if (this.menuToggle && this.menu) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());
      
      // Close menu when clicking on a link
      this.menuLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && this.menu.classList.contains('active')) {
          this.closeMenu();
        }
      });
    }
  }
  
  toggleMenu() {
    this.menu.classList.toggle('active');
    this.menuToggle.classList.toggle('active');
    document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
  }
  
  closeMenu() {
    this.menu.classList.remove('active');
    this.menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Smooth Scroll
class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.init();
  }
  
  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Ignore if it's just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Scroll Effects
class ScrollEffects {
  constructor() {
    this.header = document.querySelector('.header');
    this.init();
  }
  
  init() {
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.header?.classList.add('scrolled');
      } else {
        this.header?.classList.remove('scrolled');
      }
    });
    
    // Intersection Observer for fade-in animations
    this.setupIntersectionObserver();
  }
  
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements with fade-in-section class
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));
  }
}

// WhatsApp CTA Handler
class WhatsAppCTA {
  constructor() {
    this.whatsappLinks = document.querySelectorAll('.wa-cta');
    this.init();
  }
  
  init() {
    this.whatsappLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Track click (you can add analytics here)
        console.log('WhatsApp CTA clicked');
        
        // Optional: Add custom message based on button clicked
        const message = link.dataset.message || 'Halo, saya tertarik dengan jasa Anda';
        const phone = link.dataset.phone || '6281234567890'; // Replace with actual number
        
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        
        e.preventDefault();
      });
    });
  }
}

// Stats Counter Animation
class StatsCounter {
  constructor() {
    this.stats = document.querySelectorAll('.stat__number');
    this.hasAnimated = false;
    this.init();
  }
  
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateCounters();
          this.hasAnimated = true;
        }
      });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.trust');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }
  
  animateCounters() {
    this.stats.forEach(stat => {
      const target = parseInt(stat.dataset.count || stat.textContent);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current) + (stat.dataset.suffix || '');
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + (stat.dataset.suffix || '');
        }
      };
      
      updateCounter();
    });
  }
}

// Form Validation (if needed in future)
class FormValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    if (this.form) {
      this.init();
    }
  }
  
  init() {
    this.form.addEventListener('submit', (e) => {
      if (!this.validateForm()) {
        e.preventDefault();
      }
    });
  }
  
  validateForm() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        this.showError(input, 'Field ini wajib diisi');
        isValid = false;
      } else {
        this.clearError(input);
      }
    });
    
    return isValid;
  }
  
  showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--color-accent)';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    if (!input.parentElement.querySelector('.error-message')) {
      input.parentElement.appendChild(errorDiv);
    }
    
    input.style.borderColor = 'var(--color-accent)';
  }
  
  clearError(input) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
    input.style.borderColor = '';
  }
}

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme management
  new ThemeManager();
  
  // Initialize mobile menu
  new MobileMenu();
  
  // Initialize smooth scroll
  new SmoothScroll();
  
  // Initialize scroll effects
  new ScrollEffects();
  
  // Initialize WhatsApp CTA
  new WhatsAppCTA();
  
  // Initialize stats counter
  new StatsCounter();
  
  // Log initialization
  console.log('🚀 Company Profile initialized');
});

// Handle page visibility change (pause animations when tab is hidden)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden - animations paused');
  } else {
    console.log('Page visible - animations resumed');
  }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ThemeManager,
    MobileMenu,
    SmoothScroll,
    ScrollEffects,
    WhatsAppCTA,
    StatsCounter,
    FormValidator
  };
}
