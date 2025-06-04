// State management
const state = {
    isMobileMenuOpen: false,
    isGalleryModalOpen: false,
    selectedImageIndex: 0,
    showFullGallery: false,
    images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F848ba5999cef46e99ebcb64419ba0719", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F705e1539ea3b4cdb8b676b2583f8d195", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc882af9d197b4040900fd87e3e9a881a", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7ef9d15071404e228b991801d3cfef12", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F82bfcec3549041f2a6555f662707f394", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fcd1fcc2429404a4c89291546a1058a39",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fe6b2ff97edad440a85d31d8ad2fb4929", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ff3d53fb5190a4e9cae74ad7e6cfe73b7", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F34e605d9a1ce4fb582fa37892a19f97d", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F240e59c18d724c2eacd8ebd4801e9d9e", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc4e82bc3c43e4e9db72561b543954e04", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F520534c04361414a9889ab0b58a04885",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7476992275524d46a1d2aeb4c3e26a29", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Faf5c4b7979c743a8a001a3b1fc80a675", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F8db3377377c44107893b5e928850c714", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc5066de6fd4243c380466c12814eb4c0", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fe265ccd48e284bdeb2cc8c1256d3eee0", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F4d2c0e16ce9843aeb8da49a2304b0581",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F783531c815814cc6ad962ff9ca660dca", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F5f4ffa1117c34561abdfe20038174ffb", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ffdf963867c174c9886028cc98758910d", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fa304a2f1052a4a8aad0bb8d3b3d90e4b", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fa6f10740839b4d17aea6f13e9b732ae6", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F38be0ee320d64fb485f452ef116fd7d6",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F1058fdacf5e6464390e134c1fae6410b", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fcfb94c00f7384ed1b4863fbc7b5ebbd8", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Faac936fcb0304afdb8fdd77fcb6dbb75", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F371a21e82dde45b093d5f5fb8c53fe99", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc8d0a50cc991445e8ef7eb4e04f11196", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F8170e0c69ba640ac8b0fa1bd17445b3a",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F8ed171dc4f064b9d90a309690a229e0c", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F0987fc58bd23496c89c03c8e5c6e811d", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7cd00df919dc451ab9939f496ec50531", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc7d8783890664ba189351d16bfc64e56", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ffd06352275884ceea5295859644f64c5", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F9d02e6a3b96d4d3fb34626cf1065baf2",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F07cffae9812549baa6ba8df1b269a9ca", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F82078492784e46c3bc2183a63be00f5b", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc24d96ff440e4738b973fd603537ff73", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fdc7c8fce900441e78884fbed9c2f9948", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F2a235834343d49bcab216ffd06b926d7", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F89eab33690b94f3ebd15268aefe9bc42",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fa949e99dd5fc49209b6ca6f974b116f1", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F33c7ec03b1c946ceafade3b5267fc5c9", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F6d69d51e5f2a41689b3c26f702e214e9", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F3a8b91d77811499b8add466e1df2c3fb", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F3e6c9f9ff2e14bc4a7fa5f3219e16424", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ff2c3cee107f34688b28aa327d82692e3",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Feb0fa9b827534cb3821cb88f146b2065", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7753ca97ff9148b29a27a4841cbff211", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F37312cc2ae1c4cd3a01f948dbde3c145", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fb885a4bf0a5742cfb482a615ebd9d384", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fda76d1d9dd234a2fb6b8b3b78a017aca", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F0fd4cbb327964262baea1616be9cd34f",
        "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc7702a1e173f46a9a31c7d7fd2fcc134", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ff0cc093dcd8747c08ea169c101b6553c", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fd7fca496a29a46669b0abed90cb1ec8b", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F28276bfc379b466e97af3255d9d3c4f1", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fbf204dc9145a4dbd8360ddbd1eab691c", "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc0cb78bb548b4cd4a33826ce626fef27"
    ],
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
    elements.galleryGrid = document.getElementById('galleryGrid');
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

    // Initialize gallery
    renderGallery();

    // Set current year
    if (elements.currentYearSpan) {
        elements.currentYearSpan.textContent = new Date().getFullYear();
    }

    // Handle header scroll effect
    setupHeaderScroll();
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
    if (!elements.galleryGrid) return;

    const imagesToShow = state.showFullGallery ? state.images : state.images.slice(0, 8);

    elements.galleryGrid.innerHTML = '';

    imagesToShow.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${imageUrl}" alt="Gallery Image ${index + 1}" class="gallery-image">
        `;
        galleryItem.addEventListener('click', () => openGalleryModal(index));
        elements.galleryGrid.appendChild(galleryItem);
    });

    updateButtonsVisibility();

    // Update show more button visibility
    if (elements.showMoreButton) {
        elements.showMoreButton.style.display = state.showFullGallery ? 'none' : 'block';
    }
}

function showFullGallery() {
    state.showFullGallery = true;
    renderGallery();
}

// Scroll to gallery top
function scrollToGallery() {
document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// Update buttons visibility
function updateButtonsVisibility() {
closeTopButton.style.display = state.showFullGallery ? 'block' : 'none';
closeBottomButton.style.display = state.showFullGallery ? 'block' : 'none';
loadMoreButton.style.display = state.showFullGallery ? 'none' : 'block';
}

// Open gallery modal
function openGalleryModal(index) {
    state.selectedImageIndex = index;
    state.isGalleryModalOpen = true;
    updateGalleryModal();
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && state.isMobileMenuOpen) {
        closeMobileMenu();
    }
});
