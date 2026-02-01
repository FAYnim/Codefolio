<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Jasa pembuatan website profesional untuk personal brand dan UMKM. Konsultasi gratis via WhatsApp.">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'Jasa Web Development - Professional Landing Pages'; ?></title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="src/css/theme.css">
    <link rel="stylesheet" href="src/css/style.css">
    <link rel="stylesheet" href="src/css/responsive.css">

    <link rel="icon" type="image/svg+xml" href="src/assets/icons/favicon.svg">
</head>
<body>

    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav-logo">
                <span class="logo-text">YourBrand</span>
            </a>

            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
                <svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            

            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item">
                    <a href="#services" class="nav-link">Layanan</a>
                </li>
                <li class="nav-item">
                    <a href="#portfolio" class="nav-link">Portofolio</a>
                </li>
                <li class="nav-item">
                    <a href="#pricing" class="nav-link">Harga</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link nav-link-cta">WhatsApp</a>
                </li>
            </ul>

            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
                <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
        </nav>
    </header>