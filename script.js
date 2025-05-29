document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.createElement('div');
    menuOverlay.classList.add('menu-overlay');
    document.body.appendChild(menuOverlay);

    function toggleMenu() {
        menuButton.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    menuButton.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        lastScroll = currentScroll;
    });

    // Gallery functionality
    const galleryGrid = document.querySelector('.gallery-grid');
    const loadMoreButton = document.querySelector('.load-more-button');
    let currentPage = 0;
    const imagesPerPage = 8;
    const totalImages = 60;

    const images = Array(totalImages).fill().map((_, i) =>
        [`https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F848ba5999cef46e99ebcb64419ba0719`, `https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F705e1539ea3b4cdb8b676b2583f8d195`, `https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc882af9d197b4040900fd87e3e9a881a`, `https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7ef9d15071404e228b991801d3cfef12`, `https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F82bfcec3549041f2a6555f662707f394`, `https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fcd1fcc2429404a4c89291546a1058a39`, `https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fe6b2ff97edad440a85d31d8ad2fb4929`, `https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ff3d53fb5190a4e9cae74ad7e6cfe73b7`][i % 8]
    );

    function loadGalleryImages(page) {
        const start = page * imagesPerPage;
        const end = start + imagesPerPage;

        images.slice(start, end).forEach(src => {
            const item = document.createElement('div');
            item.classList.add('gallery-item');

            const img = document.createElement('img');
            img.src = src;
            img.classList.add('gallery-image');
            img.alt = 'Gallery Image';

            item.appendChild(img);
            galleryGrid.appendChild(item);
        });

        if (end >= totalImages) {
            loadMoreButton.style.display = 'none';
        }
    }

    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadGalleryImages(currentPage);
    });

    // Initial load
    loadGalleryImages(0);

    // Form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const required = contactForm.querySelectorAll('[required]');
            let isValid = true;

            required.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                alert('Kérjük töltse ki az összes kötelező mezőt!');
                return;
            }

            // Form submission logic here
            alert('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.');
            contactForm.reset();
        });
    }

    // Update copyright year
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
