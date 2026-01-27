# Codefolio - Company Profile

A freelance company profile landing page built with vanilla HTML/CSS/JavaScript and PHP. Designed to generate quality leads through WhatsApp consultations, targeting personal brands and SMEs in Indonesia.

## 🚀 Features

- ✅ **Dark/Light Mode** - Theme switching with localStorage persistence
- ✅ **Fully Responsive** - Mobile-first design that works perfectly on all devices
- ✅ **Modern UI/UX** - Clean, professional, and conversion-focused
- ✅ **Fast Loading** - Optimized for maximum performance
- ✅ **WhatsApp Integration** - Direct CTA to WhatsApp for consultations
- ✅ **SEO Ready** - Meta tags and semantic HTML for SEO
- ✅ **Smooth Animations** - Intersection Observer for fade-in effects
- ✅ **Stats Counter** - Animated number counting for credibility

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Custom Properties
- **Vanilla JavaScript** - ES6+ for interactivity
- **PHP** - Server-side rendering
- **XAMPP/Apache** - Local development environment

## 📁 Project Structure

```
company-profile-2/
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
├── PRD-company-profile-individual-Faris.md
├── AGENTS.md                     # Developer guidelines
├── README.md                     # This file
└── .gitignore
```

## 🚦 Getting Started

### Prerequisites

- XAMPP (or Apache + PHP)
- Modern web browser
- Text editor (VS Code recommended)

### Installation

1. Clone or download this repository
2. Move the folder to `C:\xampp\htdocs\faydev\`
3. Start Apache in XAMPP Control Panel
4. Open browser and access: `http://localhost/faydev/company-profile-2/`

### Development

```bash
# No build step required - just edit files and refresh browser

# Check PHP syntax (optional)
php -l index.php

# Test with browser DevTools
# - Lighthouse for performance audit
# - Responsive mode for mobile testing
# - Console for JavaScript errors
```

## 🎨 Customization

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

### Change Content

All content is in `index.php`. Edit directly in that file.

## 📱 Sections

1. **Hero** - Problem-focused headline with CTA
2. **Problem** - 3 pain points of target audience
3. **Services** - 3 main services (Web, Chatbot, Custom Tools)
4. **Trust/Stats** - Credibility with numbers & tech stack
5. **Pricing** - 3 website development packages
6. **CTA** - Final conversion push
7. **Footer** - Contact and links

## 🎯 Key Features Explained

### Dark/Light Mode
- Auto-detect system preference
- Manual toggle with button
- Saved in localStorage
- Smooth transition animations

### Mobile Menu
- Hamburger menu for mobile
- Slide-in animation
- Auto-close when clicking links
- Body scroll lock when menu is open

### WhatsApp CTA
- Pre-filled message based on context
- Click tracking (ready for analytics)
- Custom message per button

### Smooth Scroll
- Native smooth scroll
- Offset for fixed header
- Auto-close mobile menu

### Stats Counter
- Animated counting on scroll to section
- Intersection Observer
- One-time animation

## 📊 Performance

- **Lighthouse Score Target:** 90+ all categories
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Mobile-friendly:** 100%

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Guidelines

Following the PRD:
- **Tone:** Professional yet friendly
- **Language:** To the point, benefit-focused
- **CTA:** Low-friction ("Let's discuss", "Free consultation")
- **Copy:** Problem → Solution → Proof → Action

## 🔒 Security Notes

- Output escaped with `htmlspecialchars()` (for PHP dynamic content)
- No inline scripts for CSP compliance
- Input validation when adding forms in the future

## 🚀 Deployment

### To Production

1. Update WhatsApp number in all CTA buttons
2. Update meta tags (description, OG tags)
3. Add real social media links
4. Minify CSS/JS (optional)
5. Optimize images (WebP format)
6. Test on real devices
7. Upload to hosting

### Recommended Hosting
- Shared hosting with PHP 7.4+
- cPanel or Plesk
- SSL certificate (Let's Encrypt)

## 📈 Future Enhancements

- [ ] Portfolio pages with case studies
- [ ] Blog section for SEO
- [ ] Testimonials carousel
- [ ] Contact form with validation
- [ ] Google Analytics integration
- [ ] Image optimization & lazy loading improvements
- [ ] Service worker for offline support

## 🤝 Contributing

This is an individual project, but feedback and suggestions are welcome!

## 📄 License

All rights reserved - Codefolio © 2025

## 📞 Contact

- WhatsApp: +62 812-3456-7890 (replace with actual number)
- Email: hello@codefolio.com (replace with actual email)
- Website: [Coming Soon]

---

**Built with ❤️ for Personal Brands & SMEs**

## 👨‍💻 Credits

Created by **Faydev** - [https://faydev.my.id](https://faydev.my.id)
