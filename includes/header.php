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
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav-logo">
                <span class="logo-text">YourBrand</span>
            </a>

            <div class="nav-right">
                <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
                    <i class="fas fa-bars icon-menu"></i>
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
                    <i class="fas fa-sun icon-sun"></i>
                    <i class="fas fa-moon icon-moon"></i>
                </button>
            </div>
        </nav>
    </header>