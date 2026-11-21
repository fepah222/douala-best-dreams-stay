/*
 * NEHTAN — Guest House Website
 * HTML, CSS and Vanilla JavaScript
 */

(() => {
  'use strict';

  const ROOT = document.body.dataset.page || 'home';
  const app = document.getElementById('app');

  if (!app) {
    console.error('[NEHTAN] Missing #app element.');
    return;
  }

  const CONTACT = {
    phone1: '+237 671 300 185',
    phone1Tel: '+237671300185',
    phone2: '+237 675 535 727',
    phone2Tel: '+237675535727',
    email: 'gaetanfonka@gmail.com',
    whatsapp1: 'https://wa.me/237671300185',
    whatsapp2: 'https://wa.me/237675535727'
  };

  const ICONS = {
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
    building: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 21V9h6v12M7 7h.01M17 7h.01"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>',
    zap: '<path d="m13 2-3 8h7l-6 12 1-9H5l8-11Z"/>',
    snow: '<path d="M12 2v20m8-16-16 8m16 0L4 6"/>',
    tv: '<rect x="3" y="5" width="18" height="13" rx="2"/><path d="m8 21 4-3 4 3"/>',
    drops: '<path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72l.45 2.7a2 2 0 0 1-.57 1.73L8.1 11a16 16 0 0 0 5.9 5.9l1.85-1.88a2 2 0 0 1 1.73-.57l2.7.45A2 2 0 0 1 22 16.92Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    languages: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>'
  };

  function icon(name, cls = '') {
    return `<svg class="icon ${cls}" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">${ICONS[name] || ''}</svg>`;
  }

  let language = localStorage.getItem('nehtan-language') || 'en';
  let theme = localStorage.getItem('nehtan-theme') || 'dark';

  if (!['en', 'fr'].includes(language)) language = 'en';
  if (!['dark', 'light'].includes(theme)) theme = 'dark';

  document.documentElement.classList.toggle('light', theme === 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.lang = language;

  // ==========================================
  // PROPERTY INFORMATION AND IMAGE REFERENCES
  // ==========================================

  const properties = {

    bepanda: {
      name: 'Bépanda',
      area: 'Bépanda · Clinique Etienno',

      title: ['Luxury & Comfort,', 'Fully Furnished'],
      titleFr: ['Luxe et confort,', 'Entièrement meublé'],

      intro: 'Two premium studios designed to international standards. Perfect for expatriates, tourists, and professionals seeking a secure, modern stay in Douala.',
      introFr: 'Deux studios haut de gamme conçus selon les normes internationales. Parfaits pour les expatriés, touristes et professionnels.',

      stats: [
        ['24/7', 'Security', 'Sécurité'],
        ['2', 'Studios', 'Studios'],
        ['100%', 'Furnished', 'Meublés']
      ],

      images: [
        ['images/bepanda/living1.jpeg', 'Living Room', 'Salon'],
        ['images/bepanda/bedroom.jpeg', 'Bedroom', 'Chambre'],
        ['images/bepanda/kitchen2.jpeg', 'Kitchen', 'Cuisine'],
        ['images/bepanda/living2.jpeg', 'Lounge', 'Espace détente'],
        ['images/bepanda/bathroom.jpeg', 'Bathroom', 'Salle de bain'],
        ['images/bepanda/living3.jpeg', 'Sofa Suite', 'Canapé-lit'],
        ['images/bepanda/kitchen1.jpeg', 'Kitchenette', 'Kitchenette']
      ],

      features: [
        ['images/bepanda/living1.jpeg', 'Spacious Living Room', 'Comfortable sofa, Smart TV and AC.', 'Salon spacieux', 'Canapé confortable, Smart TV et climatisation.'],
        ['images/bepanda/bedroom.jpeg', 'Cozy Bedroom', 'Plush bed, premium bedding and wardrobes.', 'Chambre confortable', 'Lit douillet, literie haut de gamme et placards.'],
        ['images/bepanda/kitchen2.jpeg', 'Equipped Kitchen', 'Gas cooker, refrigerator and microwave.', 'Cuisine équipée', 'Cuisinière à gaz, réfrigérateur et micro-ondes.'],
        ['images/bepanda/bathroom.jpeg', 'Modern Bathroom', 'Fully tiled bathroom with shower.', 'Salle de bain moderne', 'Salle de bain carrelée avec douche.']
      ],

      amenities: [
        ['wifi', 'High-Speed Wi-Fi', 'Uninterrupted connectivity', 'Wi-Fi haut débit', 'Connexion ininterrompue'],
        ['shield', '24/7 Security', 'On-site security personnel', 'Sécurité 24 h/24', 'Personnel de sécurité sur place'],
        ['zap', 'Standby Generator', 'Backup electricity supply', 'Groupe électrogène', 'Alimentation électrique de secours'],
        ['snow', 'Air Conditioning', 'Cool comfort in every room', 'Climatisation', 'Fraîcheur dans chaque pièce'],
        ['tv', 'Smart TV', 'Entertainment in your room', 'Smart TV', 'Divertissement dans votre chambre'],
        ['pin', 'Prime Access', 'Located on the paved main road', 'Accès privilégié', 'Situé sur la route principale goudronnée']
      ],

      location: 'Bépanda, Clinique Etienno',
      phone: CONTACT.phone1,
      phoneTel: CONTACT.phone1Tel,
      whatsapp: CONTACT.whatsapp1,

      other: 'Bonamoussadi',
      otherPage: 'bonamoussadi.html'
    },

    bonamoussadi: {
      name: 'Bonamoussadi',
      area: 'Bonamoussadi · Santa Barbara',

      title: ['Premium Suites,', 'Redefined Hospitality'],
      titleFr: ['Suites haut de gamme,', 'Hospitalité réinventée'],

      intro: '14 ultra-modern studios or 3 luxury two-bedroom apartments with panoramic city views, conference facilities and secure private parking.',
      introFr: '14 studios ultramodernes ou 3 appartements luxueux de deux chambres avec vue panoramique, salle de conférence et parking privé sécurisé.',

      stats: [
        ['14', 'Studios', 'Studios'],
        ['3', 'Apartments', 'Appartements'],
        ['24/7', 'Secure Parking', 'Parking sécurisé']
      ],

      images: [
        ['images/bonamoussadi/bona-living1.jpeg', 'Sitting Room', 'Séjour'],
        ['images/bonamoussadi/bona-bedroom1.jpeg', 'Master Bedroom', 'Chambre principale'],
        ['images/bonamoussadi/bona-lounge.jpeg', 'Living Room', 'Salon'],
        ['images/bonamoussadi/bona-kitchen.jpeg', 'Open Kitchen', 'Cuisine ouverte'],
        ['images/bonamoussadi/bona-suite1.jpeg', 'Studio Bedroom', 'Chambre du studio'],
        ['images/bonamoussadi/bona-balcony.jpeg', 'Panoramic Balcony', 'Balcon panoramique'],
        ['images/bonamoussadi/bona-living2.jpeg', 'TV Lounge', 'Salon TV'],
        ['images/bonamoussadi/bona-bedroom2.jpeg', 'Bedroom View', 'Vue de la chambre'],
        ['images/bonamoussadi/bona-salon.jpeg', 'Grand Salon', 'Grand salon']
      ],

      features: [
        ['images/bonamoussadi/bona-bedroom1.jpeg', 'Ultra-Modern Studios', '14 elegant studios with premium finishes and balconies.', 'Studios ultramodernes', '14 studios élégants avec finitions haut de gamme et balcons.'],
        ['images/bonamoussadi/bona-lounge.jpeg', 'Luxury Apartments', 'Three spacious two-bedroom apartments.', 'Appartements luxueux', 'Trois appartements spacieux de deux chambres.'],
        ['images/bonamoussadi/bona-salon.jpeg', 'Conference Hall', 'A venue for seminars, meetings and events.', 'Salle de conférence', 'Un espace pour séminaires, réunions et événements.'],
        ['images/bonamoussadi/bona-balcony.jpeg', 'Private Parking', 'Secure parking for guests.', 'Parking privé', 'Parking sécurisé pour les clients.']
      ],

      amenities: [
        ['wifi', 'High-Speed Wi-Fi', 'Fast internet connectivity', 'Wi-Fi haut débit', 'Connexion internet rapide'],
        ['tv', 'Canal+ Subscription', 'Premium television entertainment', 'Abonnement Canal+', 'Divertissement télévisé premium'],
        ['snow', 'Air Conditioning', 'Air conditioning in every room', 'Climatisation', 'Climatisation dans chaque pièce'],
        ['drops', 'Hot Water', 'Hot water facilities', 'Eau chaude', 'Installations d’eau chaude'],
        ['building', 'Balconies', 'Balconies with city views', 'Balcons', 'Balcons avec vue sur la ville'],
        ['shield', '24/7 Security', 'Secure property', 'Sécurité 24 h/24', 'Résidence sécurisée']
      ],

      location: 'Bonamoussadi, Santa Barbara',
      phone: CONTACT.phone2,
      phoneTel: CONTACT.phone2Tel,
      whatsapp: CONTACT.whatsapp2,

      other: 'Bépanda',
      otherPage: 'bepanda.html'
    },

    logbessou: {
      name: 'Logbessou',
      area: 'Logbessou',

      title: ['Welcome to', 'Logbessou'],
      titleFr: ['Bienvenue à', 'Logbessou'],

      intro: 'Explore our Logbessou guest house through its furnished living room, bedrooms, kitchen and bathroom.',
      introFr: 'Découvrez notre maison d’hôtes de Logbessou, son séjour meublé, ses chambres, sa cuisine et sa salle de bain.',

      stats: [
        ['9', 'Photographs', 'Photos'],
        ['1', 'Location', 'Emplacement'],
        ['24/7', 'Contact', 'Contact']
      ],

      images: [
        ['images/logbessou/living-room-main.jpg.jpeg', 'Living Room', 'Salon'],
        ['images/logbessou/living-room-2.jpg.jpeg', 'Living Room', 'Salon'],
        ['images/logbessou/living-room3.jpg.jpeg', 'Living Room', 'Salon'],
        ['images/logbessou/bedroom-blue.jpg.jpeg', 'Blue Bedroom', 'Chambre bleue'],
        ['images/logbessou/bedroom-blue-2.jpg.jpeg', 'Blue Bedroom', 'Chambre bleue'],
        ['images/logbessou/bedroom-cream.jpg.jpeg', 'Cream Bedroom', 'Chambre beige'],
        ['images/logbessou/kitchen.jpg.jpeg', 'Kitchen', 'Cuisine'],
        ['images/logbessou/shower.jpg.jpeg', 'Shower', 'Douche'],
        ['images/logbessou/toilet.jpg.jpeg', 'Bathroom', 'Salle de bain']
      ],

      features: [
        ['images/logbessou/living-room-main.jpg.jpeg', 'Furnished Living Room', 'A comfortable furnished living space.', 'Salon meublé', 'Un espace de vie confortable et meublé.'],
        ['images/logbessou/bedroom-blue.jpg.jpeg', 'Bedrooms', 'Explore the furnished bedrooms.', 'Chambres', 'Découvrez les chambres meublées.'],
        ['images/logbessou/kitchen.jpg.jpeg', 'Kitchen', 'A kitchen space for everyday use.', 'Cuisine', 'Un espace cuisine pour un usage quotidien.'],
        ['images/logbessou/toilet.jpg.jpeg', 'Bathroom', 'Bathroom and shower facilities.', 'Salle de bain', 'Salle de bain et douche.']
      ],

      amenities: [
        ['building', 'Furnished Living Area', 'A furnished space for relaxing.', 'Espace de vie meublé', 'Un espace meublé pour se détendre.'],
        ['bed', 'Bedrooms', 'Furnished sleeping spaces.', 'Chambres', 'Des espaces de repos meublés.'],
        ['building', 'Kitchen', 'A kitchen area for everyday needs.', 'Cuisine', 'Un espace cuisine.'],
        ['drops', 'Bathroom and Shower', 'Bathroom and shower facilities.', 'Salle de bain et douche', 'Installations de salle de bain et de douche.']
      ],

      location: 'Logbessou, Douala',
      phone: CONTACT.phone1,
      phoneTel: CONTACT.phone1Tel,
      whatsapp: CONTACT.whatsapp1,

      other: 'All Locations',
      otherPage: 'index.html'
    }
  };

  // ==========================================
  // LANGUAGE AND THEME CONTROLS
  // ==========================================

  function preferencesMarkup() {
    return `
      <div class="preferences">
        ${icon('languages', 'small')}

        <button class="pref-btn ${language === 'en' ? 'active' : ''}"
                data-language="en">EN</button>

        <button class="pref-btn ${language === 'fr' ? 'active' : ''}"
                data-language="fr">FR</button>

        <span class="pref-divider"></span>

        <button class="theme-btn" data-theme aria-label="Toggle theme">
          ${icon(theme === 'dark' ? 'sun' : 'moon', 'small')}
        </button>
      </div>`;
  }

  // ==========================================
  // FOOTER
  // ==========================================

  function footer() {
    return `
      <footer class="footer">
        <div class="container footer-inner">

          <strong class="brand">NEHTAN</strong>

          <div class="footer-contact">
            <a href="tel:${CONTACT.phone1Tel}">
              ${icon('phone', 'small')} ${CONTACT.phone1}
            </a>

            <a href="tel:${CONTACT.phone2Tel}">
              ${icon('phone', 'small')} ${CONTACT.phone2}
            </a>

            <a href="mailto:${CONTACT.email}">
              ${icon('mail', 'small')} ${CONTACT.email}
            </a>
          </div>

          <p>© ${new Date().getFullYear()} NEHTAN. All rights reserved.</p>

        </div>
      </footer>`;
  }

  // ==========================================
  // HOMEPAGE
  // ==========================================

  function homepage() {
    const fr = language === 'fr';

    const locations = [
      {
        href: 'bepanda.html',
        image: 'images/bepanda/living1.jpeg',
        area: 'Bépanda · Clinique Etienno',
        meta: fr ? '2 studios meublés' : '2 Furnished Studios',
        title: 'Bépanda',
        description: fr
          ? 'Deux studios haut de gamme entièrement meublés.'
          : 'Two premium fully furnished studios.',
        icon: 'bed'
      },

      {
        href: 'bonamoussadi.html',
        image: 'images/bonamoussadi/bona-salon.jpeg',
        area: 'Bonamoussadi · Santa Barbara',
        meta: fr ? '14 studios · 3 appartements' : '14 Studios · 3 Apartments',
        title: 'Bonamoussadi',
        description: fr
          ? 'Des studios ultramodernes et des appartements luxueux.'
          : 'Ultra-modern studios and luxury apartments.',
        icon: 'building'
      },

      {
        href: 'logbessou.html',
        image: 'images/logbessou/living-room-main.jpg.jpeg',
        area: 'Logbessou',
        meta: fr ? 'Espaces meublés · 9 photos' : 'Furnished Spaces · 9 Photos',
        title: 'Logbessou',
        description: fr
          ? 'Découvrez nos espaces meublés à Logbessou.'
          : 'Explore our furnished spaces in Logbessou.',
        icon: 'bed'
      }
    ];

    return `
      <header class="home-header">
        <div class="container header-inner">

          <a class="brand" href="index.html">NEHTAN</a>

          <nav class="desktop-nav home-nav" aria-label="Main navigation">
            <a href="bepanda.html">Bépanda</a>
            <a href="bonamoussadi.html">Bonamoussadi</a>
            <a href="logbessou.html">Logbessou</a>
          </nav>

          <div class="header-actions">
            ${preferencesMarkup()}
            <button class="menu-toggle" type="button" data-menu aria-label="Open navigation menu" aria-controls="home-mobile-nav" aria-expanded="false">
              ${icon('menu')}
            </button>
          </div>
        </div>
        <nav class="mobile-nav" id="home-mobile-nav" data-mobile-nav aria-label="Mobile navigation">
          <a href="bepanda.html">Bépanda</a>
          <a href="bonamoussadi.html">Bonamoussadi</a>
          <a href="logbessou.html">Logbessou</a>
        </nav>
      </header>

      <main class="container home-main">

        <section class="home-intro">
          <span class="eyebrow">Douala · Cameroon</span>

          <h1>
            ${fr ? 'Bienvenue chez' : 'Welcome to'}
            <span class="gradient-text">NEHTAN</span>
          </h1>

          <p>
            ${fr
              ? 'Trois établissements à Douala. Choisissez celui qui correspond à votre séjour.'
              : 'Three guest house locations in Douala. Choose the location that suits your stay.'}
          </p>
        </section>

        <section class="location-grid">

          ${locations.map(location => `
            <article class="location-card">

              <div class="location-image">

                <img
                  src="${location.image}"
                  alt="${location.title}"
                  loading="lazy"
                >

                <span class="location-chip">
                  ${icon('pin', 'small')}
                  ${location.area}
                </span>

              </div>

              <div class="location-content">

                <div class="location-meta">
                  ${icon(location.icon, 'small primary')}
                  ${location.meta}
                </div>

                <h2>${location.title}</h2>

                <p>${location.description}</p>

                <a class="gradient-button" href="${location.href}">
                  ${fr ? 'Découvrir' : 'Explore Location'}
                  ${icon('arrow', 'small')}
                </a>

              </div>

            </article>
          `).join('')}

        </section>

      </main>

      ${footer()}`;
  }

  // ==========================================
  // PROPERTY PAGES
  // ==========================================

  function propertyPage(key) {
    const p = properties[key];

    if (!p) {
      return `
        <main class="container home-main">
          <h1>Page not found</h1>
          <a class="gradient-button" href="index.html">
            Back to NEHTAN
          </a>
        </main>`;
    }

    const fr = language === 'fr';
    const title = fr ? p.titleFr : p.title;

    return `
      ${header(p)}

      <main class="property-main">

        <!-- PROPERTY HERO -->

        <section class="container property-hero">

          <div class="property-copy">

            <span class="eyebrow">
              Douala · ${p.area}
            </span>

            <h1>
              ${title[0]}
              <span class="gradient-text">${title[1]}</span>
            </h1>

            <p>${fr ? p.introFr : p.intro}</p>

            <div class="hero-actions">

              <a class="gradient-button" href="#contact">
                ${fr ? 'Réserver votre séjour' : 'Book Your Stay'}
              </a>

              <a class="outline-button" href="#gallery">
                ${fr ? 'Voir la galerie' : 'View Gallery'}
              </a>

            </div>

            <dl class="stats">

              ${p.stats.map(stat => `
                <div>
                  <dt>${stat[0]}</dt>
                  <dd>${fr ? stat[2] : stat[1]}</dd>
                </div>
              `).join('')}

            </dl>

          </div>

          <!-- IMAGE CAROUSEL -->

          <div class="hero-carousel" data-carousel>

            <img
              data-carousel-image
              src="${p.images[0][0]}"
              alt="${fr ? p.images[0][2] : p.images[0][1]}"
            >

            <div class="carousel-shade"></div>

            <span class="carousel-label" data-carousel-label>
              ${fr ? p.images[0][2] : p.images[0][1]}
            </span>

            <button class="carousel-arrow prev"
                    data-prev
                    aria-label="Previous image">
              ${icon('left')}
            </button>

            <button class="carousel-arrow next"
                    data-next
                    aria-label="Next image">
              ${icon('right')}
            </button>

          </div>

        </section>

        <!-- FEATURES -->

        <section id="features" class="container content-section">

          <h2 class="section-title">
            ${fr ? 'Découvrez nos' : 'Discover our'}
            <span class="gradient-text">
              ${fr ? 'espaces' : 'Spaces'}
            </span>
          </h2>

          <p class="section-lead">
            ${fr
              ? 'Découvrez les principaux espaces de cet établissement.'
              : 'Explore the main spaces available at this property.'}
          </p>

          <div class="feature-grid">

            ${p.features.map(feature => `
              <article class="feature-card">

                <img
                  src="${feature[0]}"
                  alt="${fr ? feature[3] : feature[1]}"
                  loading="lazy"
                >

                <div class="feature-card-copy">

                  <h3>${fr ? feature[3] : feature[1]}</h3>

                  <p>${fr ? feature[4] : feature[2]}</p>

                </div>

              </article>
            `).join('')}

          </div>

        </section>

        <!-- GALLERY -->

        <section id="gallery" class="container gallery-section">

          <h2 class="section-title">
            ${fr ? 'Explorez notre' : 'Explore our'}
            <span class="gradient-text">
              ${fr ? 'galerie' : 'Gallery'}
            </span>
          </h2>

          <p class="section-lead">
            ${fr
              ? 'Découvrez les photographies de la résidence.'
              : 'Browse the property photographs.'}
          </p>

          <div class="gallery-grid">

            ${p.images.map(image => `
              <figure class="gallery-item">

                <img
                  src="${image[0]}"
                  alt="${fr ? image[2] : image[1]}"
                  loading="lazy"
                >

                <figcaption>
                  ${fr ? image[2] : image[1]}
                </figcaption>

              </figure>
            `).join('')}

          </div>

        </section>

        <!-- AMENITIES -->

        <section id="amenities" class="container content-section">

          <h2 class="section-title">
            ${fr ? 'Nos' : 'Our'}
            <span class="gradient-text">
              ${fr ? 'équipements' : 'Amenities'}
            </span>
          </h2>

          <div class="amenity-grid">

            ${p.amenities.map(a => `
              <article class="amenity-card">

                ${icon(a[0], 'primary')}

                <h3>${fr ? a[3] : a[1]}</h3>

                <p>${fr ? a[4] : a[2]}</p>

              </article>
            `).join('')}

          </div>

        </section>

        <!-- CONTACT -->

        <section id="contact" class="container contact-section">

          <h2 class="section-title">
            ${fr ? 'Contactez' : 'Contact'}
            <span class="gradient-text">NEHTAN</span>
          </h2>

          <p class="section-lead">
            ${fr
              ? 'Contactez-nous pour les tarifs, les disponibilités et les réservations.'
              : 'Contact us for rates, availability and reservations.'}
          </p>

          <div class="contact-grid">

            <a class="contact-card" href="tel:${p.phoneTel}">

              ${icon('phone', 'primary')}

              <p class="contact-label">
                ${fr ? 'Téléphone' : 'Phone'}
              </p>

              <p class="contact-value">${p.phone}</p>

            </a>

            <a class="contact-card" href="mailto:${CONTACT.email}">

              ${icon('mail', 'primary')}

              <p class="contact-label">Email</p>

              <p class="contact-value">${CONTACT.email}</p>

            </a>

          </div>

          <div class="contact-card contact-location">

            ${icon('pin', 'primary')}

            <p class="contact-label">
              ${fr ? 'Adresse' : 'Location'}
            </p>

            <p class="contact-value">${p.location}</p>

            <p class="muted">Douala, Cameroon</p>

          </div>

          <a class="gradient-button contact-cta"
             href="${p.whatsapp}"
             target="_blank"
             rel="noopener noreferrer">

            ${icon('message', 'small')}

            ${fr ? 'Contacter sur WhatsApp' : 'Contact on WhatsApp'}

          </a>

        </section>

      </main>

      ${footer()}`;
  }

  // ==========================================
  // IMAGE ERROR DIAGNOSTICS
  // ==========================================

  function installImageDiagnostics(img) {

    if (img.dataset.diagnosticsInstalled) return;

    img.dataset.diagnosticsInstalled = 'true';

    img.addEventListener('error', function () {

      const failedPath = this.getAttribute('src') || '(empty src)';

      this.classList.add('image-load-error');

      console.error(
        `[NEHTAN] Image failed to load: ${failedPath}`,
        {
          page: ROOT,
          expectedLocation:
            'Check the path and filename relative to the website root.'
        }
      );

      this.setAttribute(
        'aria-label',
        `Image unavailable: ${failedPath}`
      );

    });

    // Detect images that failed before the listener was installed.

    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {

      const failedPath = img.getAttribute('src');

      img.classList.add('image-load-error');

      console.error(
        `[NEHTAN] Image failed to load: ${failedPath}`
      );

    }
  }

  function monitorImages() {

    document.querySelectorAll('#app img').forEach(
      installImageDiagnostics
    );

  }

  // ==========================================
  // HEADER
  // ==========================================

  function header(p) {

    const fr = language === 'fr';

    const links = [
      ['features', fr ? 'Espaces' : 'Features'],
      ['gallery', fr ? 'Galerie' : 'Gallery'],
      ['amenities', fr ? 'Équipements' : 'Amenities'],
      ['contact', 'Contact']
    ];

    return `
      <header class="site-header">

        <div class="container header-inner">

          <a class="brand" href="index.html">
            NEHTAN <span>${p.name}</span>
          </a>

          <nav class="desktop-nav">

            <a href="index.html">
              ← ${fr ? 'Tous les établissements' : 'All Locations'}
            </a>

            ${links.map(([id, label]) => `
              <a href="#${id}">${label}</a>
            `).join('')}

          </nav>

          <div class="header-actions">

            ${preferencesMarkup()}

            <a class="gradient-button book-now" href="#contact">
              ${fr ? 'Réserver' : 'Book Now'}
            </a>

            <button class="menu-toggle"
                    type="button"
                    data-menu
                    aria-label="Open navigation menu"
                    aria-controls="property-mobile-nav"
                    aria-expanded="false">
              ${icon('menu')}
            </button>

          </div>

        </div>

        <nav class="mobile-nav" id="property-mobile-nav" data-mobile-nav aria-label="Mobile navigation">

          <a href="index.html">
            ← ${fr ? 'Tous les établissements' : 'All Locations'}
          </a>

          ${links.map(([id, label]) => `
            <a href="#${id}">${label}</a>
          `).join('')}

        </nav>

      </header>`;
  }

  // ==========================================
  // BUTTON CONTROLS
  // ==========================================

  function bindControls() {

    // LANGUAGE SWITCHER

    document.querySelectorAll('[data-language]').forEach(button => {

      button.addEventListener('click', () => {

        language = button.dataset.language;

        localStorage.setItem('nehtan-language', language);

        document.documentElement.lang = language;

        render();

      });

    });

    // DARK / LIGHT THEME

    const themeButton = document.querySelector('[data-theme]');

    if (themeButton) {

      themeButton.addEventListener('click', () => {

        theme = theme === 'dark' ? 'light' : 'dark';

        localStorage.setItem('nehtan-theme', theme);

        document.documentElement.classList.toggle(
          'light',
          theme === 'light'
        );

        document.documentElement.classList.toggle(
          'dark',
          theme === 'dark'
        );

        render();

      });

    }

    // MOBILE MENU

    const menuButton = document.querySelector('[data-menu]');

    if (menuButton) {

      menuButton.addEventListener('click', () => {

        const nav = document.querySelector('[data-mobile-nav]');

        if (!nav) return;

        const open = nav.classList.toggle('open');

        menuButton.innerHTML = icon(open ? 'close' : 'menu');

        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');

      });

    }

    // CLOSE MOBILE MENU AFTER NAVIGATION

    document.querySelectorAll('.mobile-nav a').forEach(link => {

      link.addEventListener('click', () => {

        const nav = document.querySelector('[data-mobile-nav]');
        nav?.classList.remove('open');
        const button = document.querySelector('[data-menu]');
        if (button) {
          button.innerHTML = icon('menu');
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-label', 'Open navigation menu');
        }
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      const nav = document.querySelector('[data-mobile-nav]');
      const button = document.querySelector('[data-menu]');
      if (!nav || !button || !nav.classList.contains('open')) return;
      nav.classList.remove('open');
      button.innerHTML = icon('menu');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation menu');
      button.focus();
    });

  }

  // ==========================================
  // IMAGE CAROUSEL
  // ==========================================

  function bindCarousel() {

    const p = properties[ROOT];

    if (!p) return;

    let index = 0;

    const image = document.querySelector('[data-carousel-image]');

    const label = document.querySelector('[data-carousel-label]');

    if (!image || !label) return;

    function update() {

      const item = p.images[index];

      image.src = item[0];

      image.alt = language === 'fr' ? item[2] : item[1];

      label.textContent = language === 'fr' ? item[2] : item[1];

    }

    document.querySelector('[data-prev]')?.addEventListener('click', () => {

      index = (index - 1 + p.images.length) % p.images.length;

      update();

    });

    document.querySelector('[data-next]')?.addEventListener('click', () => {

      index = (index + 1) % p.images.length;

      update();

    });

  }

  // ==========================================
  // MAIN RENDER FUNCTION
  // ==========================================

  function render() {

    app.innerHTML = ROOT === 'home'
      ? homepage()
      : propertyPage(ROOT);

    monitorImages();

    bindControls();

    if (ROOT !== 'home') {

      bindCarousel();

    }

  }

  // ==========================================
  // START WEBSITE
  // ==========================================

  render();

})();