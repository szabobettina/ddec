// State management
const state = {
    isMobileMenuOpen: false,
    isGalleryModalOpen: false,
    selectedImageIndex: 0,
    showFullGallery: false,
    images: [], 
    contactForm: {
        name: "",
        email: "",
        package: "",
        attendees: "",
        location: "",
        date: "",
        message: ""
    }
};

// DOM elements
const elements = {
    mobileMenuButton: null,
    mobileMenu: null,
    mobileMenuOverlay: null,
    galleryGrid: null,
    showMoreButton: null,
    closeTopButton: null,
    closeBottomButton: null,
    galleryModal: null,
    modalImage: null,
    modalClose: null,
    modalPrev: null,
    modalNext: null,
    contactForm: null,
    packageButtons: null,
    heroCtaButton: null,
    navLinks: null,
    currentYearSpan: null,
    siteTitle: null,
    footerLogo: null,
    logoImage: null
};

// Initialize the application
function init() {
    // Get DOM elements
    elements.mobileMenuButton = document.querySelector('.mobile-menu-button');
    elements.mobileMenu = document.querySelector('.mobile-menu');
    elements.mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    elements.galleryGrid = document.getElementById('galleryGrid');
    elements.showMoreButton = document.getElementById('showMoreButton');
    elements.closeTopButton = document.getElementById('closeGalleryTop');
    elements.closeBottomButton = document.getElementById('closeGalleryBottom');
    elements.galleryModal = document.querySelector('.gallery-modal');
    elements.modalImage = document.getElementById('modalImage');
    elements.modalClose = document.getElementById('modalClose');
    elements.modalPrev = document.getElementById('modalPrev');
    elements.modalNext = document.getElementById('modalNext');
    elements.contactForm = document.getElementById('contactForm');
    elements.packageButtons = document.querySelectorAll('.package-button');
    elements.heroCtaButton = document.querySelector('.hero-cta-button');
    elements.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    elements.currentYearSpan = document.getElementById('currentYear');
    elements.siteTitle = document.querySelector('.site-title');
    elements.footerLogo = document.querySelector('.footer-logo');
    elements.logoImage = document.querySelector('.logo-container');

    // Set up event listeners
    setupEventListeners();

    fetch('images.json')
        .then(response => response.json())
        .then(imagesFromFile => {
        state.images = imagesFromFile;
        renderGallery();
    })
    .catch(err => {
        console.error('Hiba az images.json betöltésekor:', err);
        // Ha hiba van, fallback, hogy legalább valami legyen
        renderGallery();
    });

    // Initialize gallery
    renderGallery();

    // Set current year
    if (elements.currentYearSpan) {
        elements.currentYearSpan.textContent = new Date().getFullYear();
    }

    // Handle header scroll effect
    setupHeaderScroll();
    setMinDateForDateInput(); 
}

// Set up all event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (elements.mobileMenuButton) {
        elements.mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    if (elements.mobileMenuOverlay) {
        elements.mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Navigation links
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    [elements.siteTitle, elements.footerLogo, elements.logoImage].forEach(el => {
        if (el) {
            el.style.cursor = 'pointer';
            el.addEventListener('click', (e) => {
                e.preventDefault(); // csak ha <a> tag lenne
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });

    // Hero CTA button
    if (elements.heroCtaButton) {
        elements.heroCtaButton.addEventListener('click', () => {
            scrollToSection('contact');
        });
    }

    // Package buttons
    elements.packageButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const packages = ['bronze', 'silver', 'gold', 'platinum'];
            handlePackageSelection(packages[index]);
        });
    });

    // Gallery show more button
    if (elements.showMoreButton) {
        elements.showMoreButton.addEventListener('click', showFullGallery);
    }

    //Gallery vlose buttons
    if (elements.closeTopButton) {
        elements.closeTopButton.addEventListener('click', closeGallery);
    }
    
    if (elements.closeBottomButton) {
        elements.closeBottomButton.addEventListener('click', () => {
        closeGallery();
        scrollToGallery();
    });
    }

    // Gallery modal
    if (elements.modalClose) {
        elements.modalClose.addEventListener('click', closeGalleryModal);
    }

    if (elements.modalPrev) {
        elements.modalPrev.addEventListener('click', showPrevImage);
    }

    if (elements.modalNext) {
        elements.modalNext.addEventListener('click', showNextImage);
    }

    if (elements.galleryModal) {
        elements.galleryModal.addEventListener('click', (e) => {
            if (e.target === elements.galleryModal || e.target.classList.contains('modal-overlay')) {
                closeGalleryModal();
            }
        });
    }

    // Contact form
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Keyboard navigation for gallery modal
    document.addEventListener('keydown', handleKeyDown);

    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Mobile menu functions
function toggleMobileMenu() {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    updateMobileMenuUI();
    document.body.style.overflow = state.isMobileMenuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    updateMobileMenuUI();
    document.body.style.overflow = '';
}

function updateMobileMenuUI() {
    if (elements.mobileMenuButton) {
        elements.mobileMenuButton.classList.toggle('active', state.isMobileMenuOpen);
    }
    if (elements.mobileMenu) {
        elements.mobileMenu.classList.toggle('active', state.isMobileMenuOpen);
    }
    if (elements.mobileMenuOverlay) {
        elements.mobileMenuOverlay.classList.toggle('active', state.isMobileMenuOpen);
    }
}

// Navigation functions
function handleNavClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
        closeMobileMenu();
    }
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('.main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (header) {
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        lastScrollY = currentScrollY;
    });
}

// Gallery functions
function renderGallery() {
     const galleryGrid = elements.galleryGrid;
    galleryGrid.innerHTML = "";
    
    const imagesToShow = state.showFullGallery ? state.images : state.images.slice(0, 8);

    imagesToShow.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="gallery-image" loading="lazy">`;
        galleryItem.addEventListener('click', () => openGalleryModal(index));
        elements.galleryGrid.appendChild(galleryItem);
    });

    if (state.showFullGallery) {
        elements.showMoreButton.style.display = 'none';
        elements.closeTopButton.style.display = 'block';
        elements.closeBottomButton.style.display = 'block';
    } else {
        elements.showMoreButton.style.display = 'block';
        elements.closeTopButton.style.display = 'none';
        elements.closeBottomButton.style.display = 'none';
    }
}

function showFullGallery() {
    state.showFullGallery = true;
    renderGallery();
}

function closeGallery() {
    state.showFullGallery = false;
    renderGallery();
}

// Scroll to gallery top
function scrollToGallery() {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Open gallery modal
function openGalleryModal(index) {
    const image = state.images[index];
    elements.modalImage.src = image.src;
    elements.modalImage.alt = image.alt;
    elements.galleryModal.classList.add('active');
    state.isGalleryModalOpen = true;
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    state.isGalleryModalOpen = false;
    if (elements.galleryModal) {
        elements.galleryModal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

function showPrevImage() {
    state.selectedImageIndex = (state.selectedImageIndex - 1 + state.images.length) % state.images.length;
    updateGalleryModal();
}

function showNextImage() {
    state.selectedImageIndex = (state.selectedImageIndex + 1) % state.images.length;
    updateGalleryModal();
}

function updateGalleryModal() {
    if (elements.galleryModal && elements.modalImage) {
        elements.galleryModal.classList.toggle('active', state.isGalleryModalOpen);
        if (state.isGalleryModalOpen) {
            elements.modalImage.src = state.images[state.selectedImageIndex];
        }
    }
}

function handleKeyDown(e) {
    if (!state.isGalleryModalOpen) return;

    switch (e.key) {
        case 'ArrowLeft':
            showPrevImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
        case 'Escape':
            closeGalleryModal();
            break;
    }
}

// Package selection
function handlePackageSelection(packageType) {
    scrollToSection('contact');

    // Set the package in the form
    const packageSelect = document.getElementById('package');
    if (packageSelect) {
        packageSelect.value = packageType;
        state.contactForm.package = packageType;
    }
}

// Contact form handling
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name') || document.getElementById('name').value,
        email: formData.get('email') || document.getElementById('email').value,
        package: formData.get('package') || document.getElementById('package').value,
        attendees: formData.get('attendees') || document.getElementById('attendees').value,
        location: formData.get('location') || document.getElementById('location').value,
        date: formData.get('date') || document.getElementById('date').value,
        message: formData.get('message') || document.getElementById('message').value
    };

    // Validate required fields
    if (!data.name || !data.email || !data.package || !data.attendees || !data.location) {
        alert('Kérjük töltse ki az összes kötelező mezőt!');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Kérjük adjon meg egy érvényes email címet!');
        return;
    }

    // Format package name
    let packageName = "";
    switch (data.package) {
        case "bronze":
            packageName = "Mini Bronze";
            break;
        case "silver":
            packageName = "Silver";
            break;
        case "gold":
            packageName = "Maxi Gold";
            break;
        case "platinum":
            packageName = "Platina Deluxe";
            break;
        default:
            packageName = data.package;
    }

    // Create email content
    const emailSubject = `Ajánlatkérés - ${data.name}`;
    const emailBody = `Üdvözlöm!%0D%0A%0D%0AAjánlatot szeretnék kérni a "${packageName}" csomagra egy ${data.attendees} fős esküvőre, mely ${data.location} helyen lesz tartva.%0D%0A%0D%0A${data.date ? `Tervezett dátum: ${data.date}%0D%0A%0D%0A` : ''}${data.message ? `További információ: ${data.message}%0D%0A%0D%0A` : ''}Elérhetőségeim:%0D%0AEmail: ${data.email}%0D%0A%0D%0AÜdvözlettel,%0D%0A${data.name}`;

    // Open email client
    window.location.href = `mailto:mydreamlanddecor@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    // Reset form
    e.target.reset();
    alert('Köszönjük megkeresését! Az email kliens megnyitása után küldje el az üzenetet.');
}

function setMinDateForDateInput() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const minDate = `${yyyy}-${mm}-${dd}`;
        dateInput.setAttribute('min', minDate);
    }
}


// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && state.isMobileMenuOpen) {
        closeMobileMenu();
    }
});
