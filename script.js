useStore({
  filters: ["Összes", "Főasztal", "Vendégasztal", "Fotósarok", "Ceremónia"],
  currentFilter: "Összes",
  currentPage: 0,
  imagesPerPage: 60,
  showFullGallery: window.location.pathname === "/gallery",
  showHero: window.location.pathname !== "/gallery",
  selectedImage: null,
  images: Array(60)
    .fill()
    .map((_, i) =>
      i < 60
        ? [
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F848ba5999cef46e99ebcb64419ba0719",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F705e1539ea3b4cdb8b676b2583f8d195",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc882af9d197b4040900fd87e3e9a881a",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7ef9d15071404e228b991801d3cfef12",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F82bfcec3549041f2a6555f662707f394",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fcd1fcc2429404a4c89291546a1058a39",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fe6b2ff97edad440a85d31d8ad2fb4929",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ff3d53fb5190a4e9cae74ad7e6cfe73b7",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F34e605d9a1ce4fb582fa37892a19f97d",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F240e59c18d724c2eacd8ebd4801e9d9e",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc4e82bc3c43e4e9db72561b543954e04",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F520534c04361414a9889ab0b58a04885",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7476992275524d46a1d2aeb4c3e26a29",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Faf5c4b7979c743a8a001a3b1fc80a675",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F8db3377377c44107893b5e928850c714",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc5066de6fd4243c380466c12814eb4c0",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fe265ccd48e284bdeb2cc8c1256d3eee0",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F4d2c0e16ce9843aeb8da49a2304b0581",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F783531c815814cc6ad962ff9ca660dca",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F5f4ffa1117c34561abdfe20038174ffb",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ffdf963867c174c9886028cc98758910d",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fa304a2f1052a4a8aad0bb8d3b3d90e4b",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fa6f10740839b4d17aea6f13e9b732ae6",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F38be0ee320d64fb485f452ef116fd7d6",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F1058fdacf5e6464390e134c1fae6410b",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fcfb94c00f7384ed1b4863fbc7b5ebbd8",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Faac936fcb0304afdb8fdd77fcb6dbb75",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F371a21e82dde45b093d5f5fb8c53fe99",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc8d0a50cc991445e8ef7eb4e04f11196",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F8170e0c69ba640ac8b0fa1bd17445b3a",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F8ed171dc4f064b9d90a309690a229e0c",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F0987fc58bd23496c89c03c8e5c6e811d",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7cd00df919dc451ab9939f496ec50531",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc7d8783890664ba189351d16bfc64e56",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ffd06352275884ceea5295859644f64c5",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F9d02e6a3b96d4d3fb34626cf1065baf2",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F07cffae9812549baa6ba8df1b269a9ca",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F82078492784e46c3bc2183a63be00f5b",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc24d96ff440e4738b973fd603537ff73",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fdc7c8fce900441e78884fbed9c2f9948",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F2a235834343d49bcab216ffd06b926d7",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F89eab33690b94f3ebd15268aefe9bc42",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fa949e99dd5fc49209b6ca6f974b116f1",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F33c7ec03b1c946ceafade3b5267fc5c9",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F6d69d51e5f2a41689b3c26f702e214e9",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F3a8b91d77811499b8add466e1df2c3fb",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F3e6c9f9ff2e14bc4a7fa5f3219e16424",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ff2c3cee107f34688b28aa327d82692e3",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Feb0fa9b827534cb3821cb88f146b2065",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F7753ca97ff9148b29a27a4841cbff211",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F37312cc2ae1c4cd3a01f948dbde3c145",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fb885a4bf0a5742cfb482a615ebd9d384",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fda76d1d9dd234a2fb6b8b3b78a017aca",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F0fd4cbb327964262baea1616be9cd34f",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc7702a1e173f46a9a31c7d7fd2fcc134",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Ff0cc093dcd8747c08ea169c101b6553c",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fd7fca496a29a46669b0abed90cb1ec8b",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2F28276bfc379b466e97af3255d9d3c4f1",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fbf204dc9145a4dbd8360ddbd1eab691c",
            "https://cdn.builder.io/api/v1/image/assets%2Fd517c881a5d04d1d9cc0328265132531%2Fc0cb78bb548b4cd4a33826ce626fef27",
          ][i]
        : `https://images.pexels.com/photos/30396793/pexels-photo-30396793.jpeg`
    ),
  imageCategories: {
    Főasztal: [0, 1, 2, 3],
    Vendégasztal: [4, 5, 6, 7],
    Fotósarok: [8, 9, 10, 11],
    Ceremónia: [12, 13],
  },
  isMobileMenuOpen: false,
  isGalleryModalOpen: false,
  selectedImageIndex: 0,
  currentSlideIndex: 0,
  sliderImages: [
    "https://cdn.builder.io/api/v1/image/assets%2Fab633e6929724bc5a19d855a6a0958a0%2F5cfb619912c2491cabe31ee463b4e924",
    "https://cdn.builder.io/api/v1/image/assets%2Fab633e6929724bc5a19d855a6a0958a0%2Ffb8cc51bbd6e435f9b651bed3a55e7ef",
    "https://cdn.builder.io/api/v1/image/assets%2Fab633e6929724bc5a19d855a6a0958a0%2F3042f9d45d884f7f87e3b7c6e81b48b9",
  ],
  toggleMobileMenu() {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = state.isMobileMenuOpen ? "hidden" : "";
  },
  openGalleryModal(index) {
    state.selectedImageIndex = index;
    state.isGalleryModalOpen = true;
    document.body.style.overflow = "hidden";
  },
  closeGalleryModal() {
    state.isGalleryModalOpen = false;
    document.body.style.overflow = "";
  },
  nextImage() {
    state.selectedImageIndex =
      (state.selectedImageIndex + 1) % state.images.length;
  },
  prevImage() {
    state.selectedImageIndex =
      (state.selectedImageIndex - 1 + state.images.length) %
      state.images.length;
  },
  handleKeyDown(event) {
    if (!state.isGalleryModalOpen) return;
    switch (event.key) {
      case "ArrowRight":
        state.nextImage();
        break;
      case "ArrowLeft":
        state.prevImage();
        break;
      case "Escape":
        state.closeGalleryModal();
        break;
    }
  },
  setSelectedImage(url) {
    state.selectedImage = url;
  },
  nextPage() {
    const maxPages = Math.ceil(state.images.length / state.imagesPerPage);
    state.currentPage = (state.currentPage + 1) % maxPages;
  },
  prevPage() {
    const maxPages = Math.ceil(state.images.length / state.imagesPerPage);
    state.currentPage = (state.currentPage - 1 + maxPages) % maxPages;
  },
  closeMenu() {
    state.isMobileMenuOpen = false;
  },
  contactForm: {
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    message: "",
  },
  updateContactForm(field, value) {
    state.contactForm[field] = value;
  },
  services: [
    {
      title: "Bronze Package",
      price: "100,000 HUF",
      description: "Perfect for intimate celebrations",
      features: [
        "Elegant Table Settings",
        "Fresh Floral Centerpieces",
        "Chair Decorations",
        "Welcome Area Setup",
        "Basic Lighting Design",
      ],
      image: "https://placehold.co/400x300",
    },
    {
      title: "Silver Package",
      price: "200,000 HUF",
      description: "Enhanced elegance for your special day",
      features: [
        "All Bronze Package Features",
        "Premium Floral Arrangements",
        "Backdrop & Photo Area",
        "Dance Floor Decoration",
        "Ceiling Draping",
        "Enhanced Lighting Package",
      ],
      image: "https://placehold.co/400x300",
    },
    {
      title: "Gold Package",
      price: "300,000 HUF",
      description: "The ultimate luxury experience",
      features: [
        "All Silver Package Features",
        "Custom Theme Design",
        "Premium Floral Installations",
        "LED Dance Floor",
        "Luxury Lounge Areas",
        "Complete Venue Transformation",
        "Day-of Coordination",
      ],
      image: "https://placehold.co/400x300",
    },
  ],
  scrollToGallery() {
    const gallerySection = document.querySelector("#gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
  handleSubmit(event) {
    event.preventDefault();

    // Check if all required fields are filled
    if (
      !state.contactForm.name ||
      !state.contactForm.email ||
      !state.contactForm.package ||
      !state.contactForm.location ||
      !state.contactForm.attendees
    ) {
      alert("Kérjük töltse ki az összes kötelező mezőt!");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.contactForm.email)) {
      alert("Kérjük adjon meg egy érvényes email címet!");
      return;
    }

    // Format package name
    let packageName = "";
    switch (state.contactForm.package) {
      case "bronze":
        packageName = "Bronz csomag";
        break;
      case "gold":
        packageName = "Arany csomag";
        break;
      case "platinum":
        packageName = "Platina csomag";
        break;
      case "custom":
        packageName = "Egyedi csomag";
        break;
      default:
        packageName = state.contactForm.package;
    }

    // Create email content with proper line breaks
    const emailSubject = `Ajánlatkérés - ${state.contactForm.name}`;
    const emailBody = `Üdvözlöm!%0D%0A%0D%0AAjánlatot szeretnék kérni a "${packageName}"-ra egy ${state.contactForm.attendees} fős esküvőre, mely ${state.contactForm.location} helyen lesz tartva.%0D%0A%0D%0A${state.contactForm.message}%0D%0A%0D%0AÜdvözlettel,%0D%0A${state.contactForm.name}`;

    // Open default email client with pre-filled content
    window.location.href = `mailto:mydreamlanddecor@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${emailBody}`;

    // Reset form after opening email client
    state.contactForm = {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      package: "",
      attendees: "",
    };
    alert(
      "Köszönjük megkeresését! Az email kliens megnyitása után küldje el az üzenetet."
    );
  },
});

onMount(() => {
  const interval = setInterval(() => {
    state.currentSlideIndex = (state.currentSlideIndex + 1) % 3;
  }, 5000);
  return () => clearInterval(interval);
});
