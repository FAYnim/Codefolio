# Codefolio - Company Profile

A freelance company profile landing page built with vanilla HTML/CSS/JavaScript and PHP. Designed to generate quality leads through WhatsApp consultations, targeting personal brands and SMEs in Indonesia.

## Features

- **Dark/Light Mode** - Theme switching with localStorage persistence
- **Fully Responsive** - Mobile-first design that works perfectly on all devices
- **Modern UI/UX** - Clean, professional, and conversion-focused
- **Fast Loading** - Optimized for maximum performance
- **WhatsApp Integration** - Direct CTA to WhatsApp for consultations
- **SEO Ready** - Meta tags and semantic HTML for SEO
- **Smooth Animations** - Intersection Observer for fade-in effects
- **Stats Counter** - Animated number counting for credibility

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Custom Properties
- **Vanilla JavaScript** - ES6+ for interactivity
- **PHP** - Server-side rendering
- **XAMPP/Apache** - Local development environment

## Project Structure

```
Codefolio/
├── index.php                     # Main landing page
├── src/
│   ├── css/
│   │   ├── theme.css            # Theme variables (light/dark)
│   │   ├── style.css            # Main styles
│   │   └── responsive.css       # Media queries
│   ├── js/
│   │   └── main.js              # JavaScript functionality
│   └── assets/
│       ├── images/              # Image assets
│       └── icons/               # Icons and favicon
└── .gitignore
```

## Getting Started

### Prerequisites

- XAMPP (or Apache + PHP)
- Modern web browser
- Text editor (VS Code recommended)

### Installation

1. Clone or download this repository
2. Move the folder to `C:\xampp\htdocs\faydev\`
3. Start Apache in XAMPP Control Panel
4. Open browser and access: `http://localhost/faydev/company-profile-2/`

## Customization

### Change Theme Colors

Edit `src/css/theme.css`:

```css
:root {
  --color-accent: #3b82f6; /* Primary color */
  --color-success: #10b981; /* Success color */
  /* ... */
}
```

### Change WhatsApp Number

In `index.php`, find all `wa-cta` classes and update `data-phone`:

```html
<a href="#" class="btn wa-cta" data-phone="628123456789">
```

## Sections

1. **Hero** - Problem-focused headline with CTA
2. **Problem** - 3 pain points of target audience
3. **Services** - 3 main services (Web, Chatbot, Custom Tools)
4. **Trust/Stats** - Credibility with numbers & tech stack
5. **Pricing** - 3 website development packages
6. **CTA** - Final conversion push
7. **Footer** - Contact and links

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is an individual project, but feedback and suggestions are welcome!

## License

All rights reserved - Codefolio © 2025

## Contact

- WhatsApp: +62 812-3456-7890 (replace with actual number)
- Email: hello@codefolio.com (replace with actual email)
- Website: [Coming Soon]

---

**Built for Personal Brands & SMEs**

## Credits

Created by **Faydev** - [https://faydev.my.id](https://faydev.my.id)
