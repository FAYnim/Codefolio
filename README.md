# Codefolio - Freelance Company Profile Landing Page

Professional freelance landing page for web development services targeting personal brands and SMEs (UMKM) in Indonesia.

## Overview

Codefolio is a single-page company profile landing page built with vanilla HTML/CSS/JavaScript and PHP. The primary goal is to generate quality leads through WhatsApp consultations.

**Live Demo:** https://app.faydev.my.id/codefolio

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, mobile-first design
- **JavaScript ES6+** - Vanilla JS, no jQuery
- **PHP** - Server-side templating
- **Font Awesome 6** - Icons via CDN
- **Google Fonts** - Inter font family

## Project Structure

```
codefolio/
├── index.php                    # Main landing page
├── includes/
│   ├── header.php               # Header partial
│   └── footer.php               # Footer partial
├── src/
│   ├── css/
│   │   ├── theme.css           # CSS variables & theming
│   │   ├── style.css           # Main styles
│   │   └── responsive.css      # Responsive design
│   ├── js/
│   │   └── main.js             # Core functionality
│   └── assets/
│       ├── icons/              # SVG icons
│       └── images/             # Project images
└── README.md
```

## Features

- **Dark/Light Mode** - User preference with localStorage persistence
- **Mobile-First Design** - Optimized for all screen sizes
- **Responsive Navigation** - Hamburger menu on mobile
- **Scroll Animations** - Intersection Observer based
- **WhatsApp Integration** - Direct links with pre-filled messages
- **SEO Ready** - Meta tags, semantic HTML, proper heading hierarchy
- **Accessibility** - ARIA labels, keyboard navigation, reduced motion support

## Sections

1. **Hero** - Value proposition with CTA buttons
2. **Problem** - Common pain points addressed
3. **Services** - Web Development, Chatbot, Custom Tools
4. **Trust** - Developer credentials and statistics
5. **Portfolio** - Project showcase
6. **Pricing** - Three-tier pricing (Basic, Standard, Premium)
7. **CTA** - Final conversion push
8. **Footer** - Quick links and social media

## Getting Started

### Prerequisites

- XAMPP/Apache with PHP 7+
- Web browser for testing

### Installation

1. Place the project in your XAMPP htdocs folder:
   ```
   C:\xampp\htdocs\codefolio\
   ```

2. Start Apache in XAMPP Control Panel

3. Access via browser:
   ```
   http://localhost/codefolio/
   ```

### No Build Step Required

This is a plain HTML/CSS/JS/PHP project with no build process. Simply edit the files and refresh the browser.

## Customization

### Colors

Edit `src/css/theme.css` to change the color scheme:

```css
:root {
  --color-primary: #3b82f6;
  --color-accent: #10b981;
  --color-whatsapp: #25d366;
}
```

### Content

Edit `index.php` to modify:
- Hero headline and subtext
- Service descriptions and pricing
- Portfolio projects
- Contact information

### WhatsApp Links

Search for `wa.me` in the codebase to find all WhatsApp integration points and update the phone number.

## Development

### Responsive Breakpoints

```css
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Dark Mode

Theme is handled via CSS custom properties in `theme.css` and toggled in `main.js`. User preference is stored in `localStorage`.

## Performance

- Lazy loading images with `loading="lazy"`
- Minimal dependencies (no frameworks)
- CSS custom properties for efficient theming
- Google Fonts with `font-display: swap`

## License

MIT License - See LICENSE file for details.

## Contact

- **Developer:** Faris Adillah Yufiansyah
- **WhatsApp:** Integrated throughout the site
- **Email:** Via WhatsApp consultation

---

Built with modern web technologies for fast, professional, and conversion-focused landing pages.
