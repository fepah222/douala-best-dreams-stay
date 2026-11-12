
/*
  DOUALA BEST DREAM STAY
  Main website JavaScript
  Corrected image paths for the existing folder structure.
*/

(() => {
    'use strict';

    const ROOT = document.body.dataset.page;
    const app = document.getElementById('app');

    const CONTACT = {
        phone1: '+237 671 300 185',
        phone1Tel: '+237671300185',
        phone2: '+237 675 535 727',
        phone2Tel: '+237675535727',
        email: 'gaetanfonka@gmail.com',
        tiktok1: 'https://www.tiktok.com/@etienne.gae.home?_r=1&_t=ZN-97wG3Br9R5C',
        tiktok2: 'https://www.tiktok.com/@etienne.gae.home?_r=1&_t=ZN-97wG5KfjTNe'
    };

    const ICONS = {
        languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/>',
        sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
        moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
        pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
        bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/><path d="M6 12h5"/>',
        building: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 21V9h6v12M7 7h.01M17 7h.01M7 11h.01M17 11h.01M7 15h.01M17 15h.01"/>',
        arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
        left: '<path d="m15 18-6-6 6-6"/>',
        right: '<path d="m9 18 6-6-6-6"/>',
        menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
        close: '<path d="m18 6-12 12M6 6l12 12"/>',
        wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
        shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
        zap: '<path d="m13 2-3 8h7l-6 12 1-9H5l8-11Z"/>',
        snow: '<path d="M12 2v20m8-16-16 8m16 0L4 6"/><path d="m8 4 4 2 4-2m-8 16 4-2 4 2M4 10l4 2-4 2m16-4-4 2 4 2"/>',
        tv: '<rect x="3" y="5" width="18" height="13" rx="2"/><path d="m8 21 4-3 4 3"/>',
        drops: '<path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z"/>',
        phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72l.45 2.7a2 2 0 0 1-.57 1.73L8.1 11a16 16 0 0 0 5.9 5.9l1.85-1.88a2 2 0 0 1 1.73-.57l2.7.45A2 2 0 0 1 22 16.92Z"/>',
        mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
        message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>'
    };

    const icon = (name, cls = '') =>
        `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

    const policy = [
        { title: 'Booking & Payment', items: ['Bookings confirmed by phone, email or in person. Payment in XAF (CFA) or by major credit/debit card.', 'Full payment or deposit may be required at check-in.'] },
        { title: 'Check-in / Check-out', items: ['Check-in from 2:00 PM. Check-out by 11:00 AM.'] },
        { title: 'Identification & Occupancy', items: ['Present a valid photo ID (passport, national ID) at check-in.', "Only registered guests may stay overnight. Do not exceed the room's maximum occupancy."] },
        { title: 'Cancellations', items: ['Notify us as soon as possible to cancel or change a booking. Cancellation terms given at booking apply.'] },
        { title: 'House Rules', items: ['Quiet hours: 10:00 PM — 7:00 AM. Please respect other guests.', 'No smoking inside rooms or enclosed areas. Use designated outdoor smoking areas.', 'Pets only by prior arrangement; fees and rules apply.', 'No parties or large gatherings without permission.'] },
        { title: 'Cleanliness & Damage', items: ['Keep your room tidy. Extra cleaning charges apply for excessive mess.', 'Guests are responsible for damage caused by them or their visitors.'] },
        { title: 'Facilities & Internet', items: ['Shared areas are for all guests — please leave them clean.', 'Wi-Fi is provided free for guest use. Illegal activities are not allowed.'] },
        { title: 'Safety & Security', items: ['Lock doors and windows when leaving. Use provided safe for valuables.', 'Report maintenance or safety problems immediately.'] },
        { title: 'Emergencies & Contacts', items: ['Emergency numbers and local contacts are posted at the reception.', 'Contact reception for help or information.'] },
        { title: 'Left Items', items: ['We keep lost items for a limited time. Return shipping charges apply if items are mailed.'] }
    ];

    const policyFr = [
        { title: 'Réservation et paiement', items: ['Réservations confirmées par téléphone, e-mail ou sur place. Paiement en XAF (FCFA) ou par carte bancaire.', "Le paiement intégral ou un acompte peut être demandé à l'arrivée."] },
        { title: 'Arrivée et départ', items: ['Arrivée à partir de 14 h. Départ avant 11 h.'] },
        { title: 'Identité et occupation', items: ['Présentez une pièce d’identité valide avec photo à l’arrivée.', 'Seuls les clients enregistrés peuvent passer la nuit. Respectez la capacité maximale du logement.'] },
        { title: 'Annulations', items: ['Prévenez-nous dès que possible pour annuler ou modifier une réservation. Les conditions communiquées lors de la réservation s’appliquent.'] },
        { title: 'Règlement intérieur', items: ['Heures de calme : 22 h à 7 h. Merci de respecter les autres clients.', 'Il est interdit de fumer dans les chambres et espaces fermés. Utilisez les zones extérieures prévues.', 'Les animaux sont acceptés uniquement sur accord préalable ; des frais et conditions peuvent s’appliquer.', 'Aucune fête ni grand rassemblement sans autorisation.'] },
        { title: 'Propreté et dommages', items: ['Gardez votre logement propre. Des frais supplémentaires s’appliquent en cas de saleté excessive.', 'Les clients sont responsables des dommages causés par eux-mêmes ou leurs visiteurs.'] },
        { title: 'Équipements et internet', items: ['Les espaces communs sont partagés : merci de les laisser propres.', 'Le Wi-Fi est gratuit pour les clients. Toute activité illégale est interdite.'] },
        { title: 'Sécurité', items: ['Fermez portes et fenêtres en partant. Utilisez le coffre prévu pour vos objets de valeur.', 'Signalez immédiatement tout problème d’entretien ou de sécurité.'] },
        { title: 'Urgences et contacts', items: ['Les numéros d’urgence et contacts locaux sont affichés à la réception.', 'Contactez la réception pour toute aide ou information.'] },
        { title: 'Objets oubliés', items: ['Nous conservons les objets trouvés pendant une durée limitée. Les frais d’expédition sont à la charge du client.'] }
    ];

    const properties = {

        bepanda: {
            brand: 'Bépanda',
            area: 'Bépanda · Clinique Etienno',
            other: 'Bonamoussadi',
            otherFile: 'bonamoussadi.html',

            title: ['Luxury & Comfort,', 'Fully Furnished'],
            titleFr: ['Luxe et confort,', 'Entièrement meublé'],

            intro: 'Two premium studios designed to international standards. Perfect for expatriates, tourists, and professionals seeking a secure, modern stay in Douala.',
            introFr: "Deux studios haut de gamme conçus selon les normes internationales. Parfaits pour les expatriés, touristes et professionnels à la recherche d'un séjour moderne et sécurisé à Douala.",

            stats: [
                ['24/7', 'Security', 'Sécurité'],
                ['2', 'Studios', 'Studios'],
                ['100%', 'Furnished', 'Meublés']
            ],

            carousel: [
                ['images/bepanda/living1.jpeg', 'Living Room', 'Salon'],
                ['images/bepanda/bedroom.jpeg', 'Bedroom', 'Chambre'],
                ['images/bepanda/kitchen2.jpeg', 'Kitchen', 'Cuisine'],
                ['images/bepanda/living2.jpeg', 'Lounge', 'Espace détente'],
                ['images/bepanda/bathroom.jpeg', 'Bathroom', 'Salle de bain'],
                ['images/bepanda/living3.jpeg', 'Sofa Suite', 'Canapé-lit'],
                ['images/bepanda/kitchen1.jpeg', 'Kitchenette', 'Kitchenette']
            ],

            features: [
                ['images/bepanda/living1.jpeg', 'Spacious Living Room', 'Comfortable sofa, Smart TV, and AC for relaxing or entertaining.', 'Salon spacieux', 'Canapé confortable, Smart TV et climatisation pour vous détendre ou recevoir.'],
                ['images/bepanda/bedroom.jpeg', 'Cozy Bedroom', 'Plush bed, premium bedding, AC, and built-in wooden wardrobes.', 'Chambre confortable', 'Lit douillet, literie haut de gamme, climatisation et placards intégrés en bois.'],
                ['images/bepanda/kitchen2.jpeg', 'Equipped Kitchen', 'Gas cooker, refrigerator, microwave, and essential utensils.', 'Cuisine équipée', 'Cuisinière à gaz, réfrigérateur, micro-ondes et ustensiles essentiels.'],
                ['images/bepanda/bathroom.jpeg', 'Modern Bathroom', 'Fully tiled with a functional hot-water shower system.', 'Salle de bain moderne', 'Entièrement carrelée avec un système de douche à eau chaude fonctionnel.']
            ],

            featuresTitle: ['Designed for ', 'comfort'],
            featuresTitleFr: ['Pensé pour votre ', 'confort'],

            featuresLead: 'Every detail considered. From the plush bedding to the equipped kitchen — your home away from home.',
            featuresLeadFr: 'Chaque détail a été pensé, de la literie douillette à la cuisine équipée : votre maison loin de chez vous.',

            galleryTitle: ['Inside the ', 'studios'],
            galleryTitleFr: ["À l'intérieur des ", 'studios'],

            galleryLead: 'Swipe or use the arrows to explore each room.',
            galleryLeadFr: 'Faites glisser ou utilisez les flèches pour découvrir chaque pièce.',

            amenitiesTitle: ['Premium ', 'amenities'],
            amenitiesTitleFr: ['Des équipements ', 'haut de gamme'],

            amenitiesLead: 'Everything included — so you can settle in and feel at home from day one.',
            amenitiesLeadFr: 'Tout est inclus pour que vous vous sentiez chez vous dès le premier jour.',

            amenities: [
                ['wifi', 'High-Speed Wi-Fi', 'Uninterrupted global connectivity', 'Wi-Fi haut débit', 'Connexion mondiale ininterrompue'],
                ['shield', '24/7 Security', 'On-site personnel around the clock', 'Sécurité 24 h/24', 'Personnel sur place en permanence'],
                ['zap', 'Standby Generator', 'Automatic backup — never lose power', 'Groupe électrogène', 'Alimentation de secours automatique'],
                ['snow', 'Air Conditioning', 'Cool comfort in every room', 'Climatisation', 'Fraîcheur dans chaque pièce'],
                ['tv', 'Smart TV', 'Flat-screen entertainment', 'Smart TV', 'Divertissement sur écran plat'],
                ['pin', 'Prime Access', 'On the paved main road', 'Accès privilégié', 'Sur la route principale goudronnée']
            ],

            contactBlurb: 'Contact us today for rates, availability, and reservations. We respond promptly.',
            contactBlurbFr: 'Contactez-nous dès aujourd’hui pour connaître les tarifs, les disponibilités et réserver. Nous répondons rapidement.',

            primaryTel: CONTACT.phone1Tel,
            primaryLabel: '671 300 185',
            secondaryLabel: '675 535 727',
            location: 'Bépanda, Clinique Etienno',
            whatsapp: 'https://wa.me/237671300185'
        },

        bonamoussadi: {
            brand: 'Bonamoussadi',
            area: 'Bonamoussadi · Santa Barbara',
            other: 'Bépanda',
            otherFile: 'bepanda.html',

            title: ['Premium Suites,', 'Redefined Hospitality'],
            titleFr: ['Suites haut de gamme,', "L'hospitalité réinventée"],

            intro: "14 ultra-modern studios or 3 luxury 2-bedroom apartments with panoramic city views, an onsite conference hall, and secure private parking in one of Douala's most sophisticated neighborhoods.",
            introFr: "14 studios ultramodernes ou 3 appartements luxueux de 2 chambres avec vue panoramique sur la ville, salle de conférence sur place et parking privé sécurisé dans l'un des quartiers les plus élégants de Douala.",

            stats: [
                ['14', 'Studios', 'Studios'],
                ['3', 'Apartments', 'Appartements'],
                ['24/7', 'Secure Parking', 'Parking sécurisé']
            ],

            carousel: [
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
                ['images/bonamoussadi/bona-bedroom1.jpeg', 'Ultra-Modern Studios', '14 elegant studios with premium finishes, private balcony, and panoramic city views.', 'Studios ultramodernes', '14 studios élégants avec finitions haut de gamme, balcon privé et vue panoramique sur la ville.'],
                ['images/bonamoussadi/bona-lounge.jpeg', 'Luxury 2-Bedroom Apartments', '3 spacious apartments — perfect for families or executive stays with full comfort.', 'Appartements luxueux de 2 chambres', '3 appartements spacieux, parfaits pour les familles ou les séjours professionnels tout confort.'],
                ['images/bonamoussadi/bona-salon.jpeg', 'Onsite Conference Hall', 'State-of-the-art, fully equipped venue for seminars, meetings, and events.', 'Salle de conférence sur place', 'Un espace moderne et entièrement équipé pour séminaires, réunions et événements.'],
                ['images/bonamoussadi/bona-balcony.jpeg', 'Secure Private Parking', 'Hassle-free parking in a prime, sophisticated neighborhood.', 'Parking privé sécurisé', 'Un stationnement facile dans un quartier privilégié et élégant.']
            ],

            featuresTitle: ['Built for ', 'every stay'],
            featuresTitleFr: ['Pensé pour ', 'chaque séjour'],

            featuresLead: 'From business travelers to vacationing families — choose the space that fits your journey.',
            featuresLeadFr: 'Du voyage d’affaires aux vacances en famille, choisissez l’espace adapté à votre séjour.',

            galleryTitle: ['Inside the ', 'property'],
            galleryTitleFr: ["À l'intérieur de la ", 'résidence'],

            galleryLead: 'Swipe or use the arrows to explore the spaces.',
            galleryLeadFr: 'Faites glisser ou utilisez les flèches pour découvrir les espaces.',

            amenitiesTitle: ['Top-tier ', 'amenities'],
            amenitiesTitleFr: ['Des équipements ', 'd’exception'],

            amenitiesLead: 'Everything included for comfort, autonomy, and luxury.',
            amenitiesLeadFr: 'Tout est inclus pour votre confort, votre autonomie et une expérience luxueuse.',

            amenities: [
                ['wifi', 'High-Speed Wi-Fi', 'Fast, uninterrupted connectivity', 'Wi-Fi haut débit', 'Connexion rapide et ininterrompue'],
                ['tv', 'Canal+ Subscription', 'Premium TV entertainment included', 'Abonnement Canal+', 'Divertissement TV haut de gamme inclus'],
                ['snow', 'Full Air Conditioning', 'Cool comfort in every room', 'Climatisation complète', 'Fraîcheur dans chaque pièce'],
                ['drops', 'Constant Hot Water', 'Reliable hot water day and night', 'Eau chaude permanente', 'Eau chaude fiable jour et nuit'],
                ['building', 'Panoramic Balconies', 'Private balconies with city views', 'Balcons panoramiques', 'Balcons privés avec vue sur la ville'],
                ['shield', '24/7 Security', 'Safe, sophisticated neighborhood', 'Sécurité 24 h/24', 'Quartier sûr et élégant']
            ],

            contactBlurb: 'Contact us today for rates, availability, and reservations. Experience hospitality redefined.',
            contactBlurbFr: 'Contactez-nous dès aujourd’hui pour connaître les tarifs, les disponibilités et réserver. Découvrez une nouvelle vision de l’hospitalité.',

            primaryTel: CONTACT.phone2Tel,
            primaryLabel: '675 535 727',
            secondaryLabel: '671 300 185',
            location: 'Bonamoussadi, Santa Barbara',
            whatsapp: 'https://wa.me/237675535727'
        }
    };

    function preferences() {
        let language = localStorage.getItem('guesthouse-language') || 'en';
        let theme = localStorage.getItem('guesthouse-theme') || 'dark';

        if (!['en', 'fr'].includes(language)) language = 'en';
        if (!['dark', 'light'].includes(theme)) theme = 'dark';

        document.documentElement.classList.toggle('light', theme === 'light');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.lang = language;

        return { language, theme };
    }

    let prefs = preferences();

    function preferenceMarkup() {
        return `<div class="preferences" aria-label="${prefs.language === 'fr' ? 'Préférences du site' : 'Site preferences'}">
            ${icon('languages', 'small')}
            <button class="pref-btn ${prefs.language === 'en' ? 'active' : ''}" data-language="en" aria-pressed="${prefs.language === 'en'}">EN</button>
            <button class="pref-btn ${prefs.language === 'fr' ? 'active' : ''}" data-language="fr" aria-pressed="${prefs.language === 'fr'}">FR</button>
            <span class="pref-divider"></span>
            <button class="theme-btn" data-theme aria-label="${prefs.theme === 'dark' ? 'Light mode' : 'Dark mode'}">${icon(prefs.theme === 'dark' ? 'sun' : 'moon', 'small')}</button>
        </div>`;
    }

    function footer() {
        const fr = prefs.language === 'fr';

        return `<footer class="footer">
            <div class="container footer-inner">
                <div class="footer-contact">
                    <a href="tel:${CONTACT.phone1Tel}">${icon('phone', 'small')} ${CONTACT.phone1}</a>
                    <a href="tel:${CONTACT.phone2Tel}">${icon('phone', 'small')} ${CONTACT.phone2}</a>
                    <a href="mailto:${CONTACT.email}">${icon('mail', 'small')} ${CONTACT.email}</a>
                </div>

                <div class="footer-social">
                    <a href="${CONTACT.tiktok1}" target="_blank" rel="noreferrer">TikTok · ${fr ? 'Visite 1' : 'Tour 1'}</a>
                    <a href="${CONTACT.tiktok2}" target="_blank" rel="noreferrer">TikTok · ${fr ? 'Visite 2' : 'Tour 2'}</a>
                </div>
            </div>
        </footer>`;
    }

    function header(p) {
        const fr = prefs.language === 'fr';

        const links = [
            ['features', fr ? 'Espaces' : 'Features'],
            ['gallery', fr ? 'Galerie' : 'Gallery'],
            ['amenities', fr ? 'Équipements' : 'Amenities'],
            ['policy', fr ? 'Règlement' : 'Policy'],
            ['contact', 'Contact']
        ];

        return `<header class="site-header">
            <div class="container header-inner">
                <a class="brand" href="index.html">${p.brand} <span>Guest House</span></a>

                <nav class="desktop-nav">
                    <a href="index.html">← ${fr ? 'Tous les établissements' : 'All Locations'}</a>
                    ${links.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}
                    <a href="${p.otherFile}">↔ ${p.other}</a>
                </nav>

                <div class="header-actions">
                    ${preferenceMarkup()}
                    <a class="gradient-button book-now" href="#contact">${fr ? 'Réserver' : 'Book Now'}</a>
                    <button class="menu-toggle" data-menu aria-label="${fr ? 'Ouvrir le menu' : 'Toggle menu'}">${icon('menu')}</button>
                </div>
            </div>

            <nav class="mobile-nav" data-mobile-nav>
                <a href="index.html">← ${fr ? 'Tous les établissements' : 'All Locations'}</a>
                ${links.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}
                <a href="${p.otherFile}">↔ ${p.other}</a>
                <a class="gradient-button" href="#contact">${fr ? 'Réserver' : 'Book Now'}</a>
            </nav>
        </header>`;
    }

    function homepage() {
        const fr = prefs.language === 'fr';

        const locations = [
            {
                href: 'bepanda.html',
                image: 'images/bepanda/living1.jpeg',
                alt: fr ? "Maison d'hôtes de Bépanda" : 'Bépanda Guest House',
                area: 'Bépanda · Clinique Etienno',
                meta: fr ? '2 studios meublés' : '2 Furnished Studios',
                title: fr ? "Maison d'hôtes de Bépanda" : 'Bépanda Guest House',
                text: fr ? 'Deux studios haut de gamme entièrement meublés sur la route principale goudronnée. Parfaits pour les expatriés, touristes et professionnels.' : 'Two premium fully furnished studios on the paved main road. Perfect for expatriates, tourists, and professionals.',
                icon: 'bed',
                button: fr ? 'Découvrir cet établissement' : 'Explore this location'
            },
            {
                href: 'bonamoussadi.html',
                image: 'images/bonamoussadi/bona-salon.jpeg',
                alt: fr ? "Maison d'hôtes de Bonamoussadi" : 'Bonamoussadi Guest House',
                area: 'Bonamoussadi · Santa Barbara',
                meta: fr ? '14 studios · 3 appartements · Salle de conférence' : '14 Studios · 3 Apartments · Conference Hall',
                title: fr ? "Maison d'hôtes de Bonamoussadi" : 'Bonamoussadi Guest House',
                text: fr ? 'Des studios ultramodernes et des appartements luxueux de 2 chambres avec vue panoramique sur la ville et salle de conférence sur place.' : 'Ultra-modern studios and luxury 2-bedroom apartments with panoramic city views and an onsite conference hall.',
                icon: 'building',
                button: fr ? 'Découvrir cet établissement' : 'Explore this location'
            }
        ];

        return `<header class="home-header">
            <div class="container header-inner">
                <span class="brand">Guest House</span>
                ${preferenceMarkup()}
            </div>
        </header>

        <main class="container home-main">
            <section class="home-intro">
                <span class="eyebrow">Douala · ${fr ? 'Cameroun' : 'Cameroon'}</span>

                <h1>
                    ${fr ? "Maison d'hôtes" : 'Guest House'}
                    <span class="gradient-text">${fr ? 'Choisissez votre établissement' : 'Choose your location'}</span>
                </h1>

                <p>${fr ? "Deux maisons d'hôtes haut de gamme à Douala, chacune avec son propre caractère. Choisissez le quartier qui correspond à votre séjour." : 'Two premium guest houses in Douala, each with its own character. Pick the neighborhood that fits your stay.'}</p>
            </section>

            <section class="location-grid" aria-label="${fr ? 'Nos établissements' : 'Our locations'}">
                ${locations.map(l => `
                    <article class="location-card">
                        <div class="location-image">
                            <img src="${l.image}" alt="${l.alt}" loading="lazy" decoding="async">
                            <span class="location-chip">${icon('pin', 'small')}${l.area}</span>
                        </div>

                        <div class="location-content">
                            <div class="location-meta">${icon(l.icon, 'small primary')}${l.meta}</div>
                            <h2>${l.title}</h2>
                            <p>${l.text}</p>
                            <a class="gradient-button" href="${l.href}">${l.button}${icon('arrow', 'small')}</a>
                        </div>
                    </article>
                `).join('')}
            </section>
        </main>

        ${footer()}`;
    }

    function propertyPage(key) {
        const p = properties[key];
        const fr = prefs.language === 'fr';

        const title = fr ? p.titleFr : p.title;
        const gallery = p.carousel;
        const feats = p.features;
        const amenities = p.amenities;
        const shownPolicy = fr ? policyFr : policy;

        return `${header(p)}
        <main class="property-main">

            <section class="container property-hero">
                <div class="property-copy">
                    <span class="eyebrow">Douala · ${p.area}</span>

                    <h1>
                        ${title[0]}
                        <span class="gradient-text">${title[1]}</span>
                    </h1>

                    <p>${fr ? p.introFr : p.intro}</p>

                    <div class="hero-actions">
                        <a class="gradient-button" href="#contact">${fr ? 'Réserver votre séjour' : 'Reserve Your Stay'}</a>
                        <a class="outline-button" href="#gallery">${fr ? 'Voir la galerie' : 'View Gallery'}</a>
                    </div>

                    <dl class="stats">
                        ${p.stats.map(s => `<div><dt>${s[0]}</dt><dd>${fr ? s[2] : s[1]}</dd></div>`).join('')}
                    </dl>
                </div>

                <div class="hero-carousel" data-carousel>
                    <img data-carousel-image src="${gallery[0][0]}" alt="${fr ? gallery[0][2] : gallery[0][1]}" fetchpriority="high" decoding="async">

                    <div class="carousel-shade"></div>

                    <span class="carousel-label" data-carousel-label>${fr ? gallery[0][2] : gallery[0][1]}</span>

                    <button class="carousel-arrow prev" data-prev aria-label="${fr ? 'Image précédente' : 'Previous image'}">${icon('left')}</button>
                    <button class="carousel-arrow next" data-next aria-label="${fr ? 'Image suivante' : 'Next image'}">${icon('right')}</button>
                </div>
            </section>

            <section id="features" class="container content-section">
                <h2 class="section-title">
                    ${(fr ? p.featuresTitleFr : p.featuresTitle)[0]}
                    <span class="gradient-text">${(fr ? p.featuresTitleFr : p.featuresTitle)[1]}</span>
                </h2>

                <p class="section-lead">${fr ? p.featuresLeadFr : p.featuresLead}</p>

                <div class="feature-grid">
                    ${feats.map(f => `
                        <article class="feature-card">
                            <img src="${f[0]}" alt="${fr ? f[3] : f[1]}" loading="lazy" decoding="async">

                            <div class="feature-card-copy">
                                <h3>${fr ? f[3] : f[1]}</h3>
                                <p>${fr ? f[4] : f[2]}</p>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section id="gallery" class="container gallery-section">
                <h2 class="section-title">
                    ${(fr ? p.galleryTitleFr : p.galleryTitle)[0]}
                    <span class="gradient-text">${(fr ? p.galleryTitleFr : p.galleryTitle)[1]}</span>
                </h2>

                <p class="section-lead">${fr ? p.galleryLeadFr : p.galleryLead}</p>

                <div class="gallery-grid">
                    ${gallery.map(g => `
                        <figure class="gallery-item">
                            <img src="${g[0]}" alt="${fr ? g[2] : g[1]}" loading="lazy" decoding="async">
                            <figcaption>${fr ? g[2] : g[1]}</figcaption>
                        </figure>
                    `).join('')}
                </div>
            </section>

            <section id="amenities" class="container content-section">
                <h2 class="section-title">
                    ${(fr ? p.amenitiesTitleFr : p.amenitiesTitle)[0]}
                    <span class="gradient-text">${(fr ? p.amenitiesTitleFr : p.amenitiesTitle)[1]}</span>
                </h2>

                <p class="section-lead">${fr ? p.amenitiesLeadFr : p.amenitiesLead}</p>

                <div class="amenity-grid">
                    ${amenities.map(a => `
                        <article class="amenity-card">
                            ${icon(a[0], 'primary')}
                            <h3>${fr ? a[3] : a[1]}</h3>
                            <p>${fr ? a[4] : a[2]}</p>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section id="policy" class="policy-section">
                <div class="container policy-inner">
                    <h2 class="section-title">${fr ? 'Règlement de la maison' : 'Guesthouse Policy'}</h2>

                    <p class="section-lead">${fr ? "Bienvenue et merci d'avoir choisi notre maison d'hôtes. Respectez ces règles simples pour le confort de tous." : 'Welcome — thank you for choosing our guesthouse. Please follow these simple rules to help everyone have a pleasant stay.'}</p>

                    <div class="policy-grid">
                        ${shownPolicy.map(group => `
                            <article class="policy-card">
                                <h3>${group.title}</h3>
                                <ul>${group.items.map(item => `<li>${item}</li>`).join('')}</ul>
                            </article>
                        `).join('')}
                    </div>

                    <p class="policy-note">${fr ? 'En séjournant ici, vous acceptez ce règlement. La direction peut refuser le service ou demander le départ en cas de violation grave.' : 'By staying here you agree to follow these rules. Management may refuse service or ask guests to leave for serious rule violations.'}</p>
                </div>
            </section>

            <section id="contact" class="container contact-section">
                <h2 class="section-title">${fr ? 'Réservez votre séjour' : 'Book your stay'}</h2>

                <p class="section-lead">${fr ? p.contactBlurbFr : p.contactBlurb}</p>

                <div class="contact-grid">
                    <a class="contact-card" href="tel:${p.primaryTel}">
                        ${icon('phone', 'primary')}
                        <p class="contact-label">${fr ? 'Téléphone / WhatsApp' : 'Phone / WhatsApp'}</p>
                        <p class="contact-value">${p.primaryLabel}</p>
                        <p class="contact-value">${p.secondaryLabel}</p>
                    </a>

                    <a class="contact-card" href="mailto:${CONTACT.email}">
                        ${icon('mail', 'primary')}
                        <p class="contact-label">Email</p>
                        <p class="contact-value">${CONTACT.email}</p>
                    </a>
                </div>

                <div class="contact-card contact-location">
                    ${icon('pin', 'primary')}
                    <p class="contact-label">${fr ? 'Adresse' : 'Location'}</p>
                    <p class="contact-value">${p.location}</p>
                    <p class="muted">Douala, ${fr ? 'Cameroun' : 'Cameroon'}</p>
                </div>

                <a class="gradient-button contact-cta" href="${p.whatsapp}" target="_blank" rel="noreferrer">
                    ${icon('message', 'small')}
                    ${fr ? 'Écrire sur WhatsApp' : 'Chat on WhatsApp'}
                </a>
            </section>

        </main>

        ${footer()}`;
    }

    function render() {
        if (!app) {
            console.error('Website container #app was not found.');
            return;
        }

        if (ROOT === 'home') {
            app.innerHTML = homepage();
        } else if (properties[ROOT]) {
            app.innerHTML = propertyPage(ROOT);
        } else {
            app.innerHTML = homepage();
        }

        bindControls();

        if (ROOT !== 'home' && properties[ROOT]) {
            bindCarousel();
        }
    }

    function bindControls() {

        document.querySelectorAll('[data-language]').forEach(btn => {
            btn.addEventListener('click', () => {
                prefs.language = btn.dataset.language;

                localStorage.setItem('guesthouse-language', prefs.language);
                document.documentElement.lang = prefs.language;

                render();
            });
        });

        const theme = document.querySelector('[data-theme]');

        if (theme) {
            theme.addEventListener('click', () => {
                prefs.theme = prefs.theme === 'dark' ? 'light' : 'dark';

                localStorage.setItem('guesthouse-theme', prefs.theme);

                document.documentElement.classList.toggle('light', prefs.theme === 'light');
                document.documentElement.classList.toggle('dark', prefs.theme === 'dark');

                render();
            });
        }

        const menu = document.querySelector('[data-menu]');

        if (menu) {
            menu.addEventListener('click', () => {
                const nav = document.querySelector('[data-mobile-nav]');
                const open = nav.classList.toggle('open');

                menu.innerHTML = icon(open ? 'close' : 'menu');
            });
        }

        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('[data-mobile-nav]')?.classList.remove('open');
            });
        });
    }

    function bindCarousel() {
        const p = properties[ROOT];
        let index = 0;

        const img = document.querySelector('[data-carousel-image]');
        const label = document.querySelector('[data-carousel-label]');

        if (!img || !label) return;

        const update = () => {
            const item = p.carousel[index];

            img.src = item[0];
            img.alt = prefs.language === 'fr' ? item[2] : item[1];

            label.textContent = prefs.language === 'fr' ? item[2] : item[1];
        };

        document.querySelector('[data-prev]').addEventListener('click', () => {
            index = (index - 1 + p.carousel.length) % p.carousel.length;
            update();
        });

        document.querySelector('[data-next]').addEventListener('click', () => {
            index = (index + 1) % p.carousel.length;
            update();
        });
    }

    render();

})();
