/* =========================================================
   BLACK EAGLE TRAVEL
   Main JavaScript
   Part 1 / 4
   ========================================================= */

"use strict";

/* =========================================================
   1. GLOBAL APPLICATION OBJECT
   ========================================================= */

const BlackEagleApp = {

    initialized: false,

    elements: {},

    state: {
        mobileMenuOpen: false,
        isScrolled: false,
        currentGalleryIndex: 0,
        currentTestimonialIndex: 0
    },

    init() {

        if (this.initialized) {
            return;
        }

        this.cacheElements();

        this.bindEvents();

        this.initializeLoader();

        this.initializeHeader();

        this.initializeCurrentYear();

        this.initialized = true;

        console.log(
            "Black Eagle Travel website initialized successfully."
        );
    },


    /* =====================================================
       2. CACHE HTML ELEMENTS
       ===================================================== */

    cacheElements() {

        this.elements = {

            body:
                document.body,

            loader:
                document.getElementById("pageLoader"),

            header:
                document.querySelector(".site-header"),

            mobileMenuButton:
                document.querySelector(".mobile-menu-btn"),

            mobileNav:
                document.querySelector(".mobile-nav"),

            backToTop:
                document.getElementById("backToTop"),

            notification:
                document.getElementById("notification"),

            notificationMessage:
                document.getElementById("notificationMessage"),

            galleryLightbox:
                document.getElementById("galleryLightbox"),

            galleryLightboxImage:
                document.getElementById("galleryLightboxImage"),

            galleryClose:
                document.querySelector(".gallery-close"),

            currentYear:
                document.getElementById("currentYear")
        };
    },


    /* =====================================================
       3. EVENT BINDINGS
       ===================================================== */

    bindEvents() {

        /* Window scroll */
        window.addEventListener(
            "scroll",
            () => this.handleScroll(),
            { passive: true }
        );


        /* Mobile menu */
        if (this.elements.mobileMenuButton) {

            this.elements.mobileMenuButton.addEventListener(
                "click",
                () => this.toggleMobileMenu()
            );
        }


        /* Mobile navigation links */
        if (this.elements.mobileNav) {

            const links =
                this.elements.mobileNav.querySelectorAll("a");

            links.forEach(link => {

                link.addEventListener(
                    "click",
                    () => this.closeMobileMenu()
                );

            });
        }


        /* Back to top */
        if (this.elements.backToTop) {

            this.elements.backToTop.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    this.scrollToTop();

                }
            );
        }


        /* Close mobile menu with Escape */
        document.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

                    this.closeMobileMenu();

                }

            }
        );


        /* Close mobile menu when clicking outside */
        document.addEventListener(
            "click",
            event => {

                if (!this.elements.mobileNav) {
                    return;
                }

                if (!this.elements.mobileMenuButton) {
                    return;
                }

                const clickedInsideMenu =
                    this.elements.mobileNav.contains(event.target);

                const clickedButton =
                    this.elements.mobileMenuButton.contains(event.target);

                if (
                    this.state.mobileMenuOpen &&
                    !clickedInsideMenu &&
                    !clickedButton
                ) {

                    this.closeMobileMenu();

                }

            }
        );
    }


    /* =====================================================
       4. PAGE LOADER
       ===================================================== */

    initializeLoader() {

        const loader =
            this.elements.loader;

        if (!loader) {
            return;
        }

        const hideLoader = () => {

            loader.classList.add("hidden");

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);
        };


        if (document.readyState === "complete") {

            setTimeout(
                hideLoader,
                350
            );

        } else {

            window.addEventListener(
                "load",
                () => {

                    setTimeout(
                        hideLoader,
                        350
                    );

                },
                { once: true }
            );
        }
    }


    /* =====================================================
       5. HEADER
       ===================================================== */

    initializeHeader() {

        this.handleScroll();

    },


    handleScroll() {

        const scrollPosition =
            window.scrollY || window.pageYOffset;

        const shouldBeScrolled =
            scrollPosition > 60;


        if (
            shouldBeScrolled !==
            this.state.isScrolled
        ) {

            this.state.isScrolled =
                shouldBeScrolled;


            if (this.elements.header) {

                this.elements.header.classList.toggle(
                    "scrolled",
                    shouldBeScrolled
                );

            }
        }


        /* Back to top visibility */

        if (this.elements.backToTop) {

            this.elements.backToTop.classList.toggle(
                "visible",
                scrollPosition > 500
            );

        }
    }


    /* =====================================================
       6. MOBILE MENU
       ===================================================== */

    toggleMobileMenu() {

        if (!this.elements.mobileNav) {
            return;
        }

        this.state.mobileMenuOpen =
            !this.state.mobileMenuOpen;


        this.elements.mobileNav.classList.toggle(
            "active",
            this.state.mobileMenuOpen
        );


        if (this.elements.mobileMenuButton) {

            this.elements.mobileMenuButton.classList.toggle(
                "active",
                this.state.mobileMenuOpen
            );

        }


        this.elements.body.classList.toggle(
            "menu-open",
            this.state.mobileMenuOpen
        );
    }


    closeMobileMenu() {

        if (!this.state.mobileMenuOpen) {
            return;
        }


        this.state.mobileMenuOpen =
            false;


        if (this.elements.mobileNav) {

            this.elements.mobileNav.classList.remove(
                "active"
            );

        }


        if (this.elements.mobileMenuButton) {

            this.elements.mobileMenuButton.classList.remove(
                "active"
            );

        }


        this.elements.body.classList.remove(
            "menu-open"
        );
    }


    /* =====================================================
       7. SCROLL TO TOP
       ===================================================== */

    scrollToTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });
    }


    /* =====================================================
       8. CURRENT YEAR
       ===================================================== */

    initializeCurrentYear() {

        if (!this.elements.currentYear) {
            return;
        }

        this.elements.currentYear.textContent =
            new Date().getFullYear();
    }

};


/* =========================================================
   START APPLICATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        BlackEagleApp.init();

    }
);

/* =========================================================
   BLACK EAGLE TRAVEL
   Main JavaScript
   Part 2 / 4
   Search + Booking
   ========================================================= */


/* =========================================================
   9. WEBSITE SEARCH
   ========================================================= */

BlackEagleApp.initializeSearch = function () {

    const searchForm =
        document.getElementById("heroSearchForm");

    if (!searchForm) {
        return;
    }


    searchForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const destinationInput =
                document.getElementById("searchDestination");

            const travelTypeInput =
                document.getElementById("searchTravelType");

            const travelDateInput =
                document.getElementById("searchDate");


            const destination =
                destinationInput
                    ? destinationInput.value.trim()
                    : "";

            const travelType =
                travelTypeInput
                    ? travelTypeInput.value.trim()
                    : "";

            const travelDate =
                travelDateInput
                    ? travelDateInput.value
                    : "";


            /* No search criteria */

            if (
                !destination &&
                !travelType &&
                !travelDate
            ) {

                this.showNotification(
                    "يرجى اختيار وجهة أو نوع الرحلة",
                    "warning"
                );

                return;
            }


            /* Save search */

            const searchData = {

                destination:
                    destination,

                travelType:
                    travelType,

                travelDate:
                    travelDate,

                createdAt:
                    new Date().toISOString()

            };


            try {

                localStorage.setItem(
                    "blackEagle_lastSearch",
                    JSON.stringify(searchData)
                );

            } catch (error) {

                console.warn(
                    "Unable to save search data.",
                    error
                );
            }


            /*
             * Redirect to trips page.
             * Parameters will allow the trips page
             * to read the user's search later.
             */

            const params =
                new URLSearchParams();


            if (destination) {

                params.set(
                    "destination",
                    destination
                );

            }


            if (travelType) {

                params.set(
                    "type",
                    travelType
                );

            }


            if (travelDate) {

                params.set(
                    "date",
                    travelDate
                );

            }


            const queryString =
                params.toString();


            window.location.href =
                "pages/trips.html" +
                (
                    queryString
                        ? "?" + queryString
                        : ""
                );
        }
    );
};


/* =========================================================
   10. BOOKING FORM
   ========================================================= */

BlackEagleApp.initializeBookingForm = function () {

    const bookingForm =
        document.getElementById("bookingForm");

    if (!bookingForm) {
        return;
    }


    bookingForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const formData =
                new FormData(bookingForm);


            const customerName =
                this.getFormValue(
                    formData,
                    "name"
                );


            const customerEmail =
                this.getFormValue(
                    formData,
                    "email"
                );


            const customerPhone =
                this.getFormValue(
                    formData,
                    "phone"
                );


            const destination =
                this.getFormValue(
                    formData,
                    "destination"
                );


            const travelDate =
                this.getFormValue(
                    formData,
                    "travelDate"
                );


            const travelers =
                parseInt(
                    this.getFormValue(
                        formData,
                        "travelers"
                    ),
                    10
                ) || 1;


            /* Basic validation */

            if (!customerName) {

                this.showNotification(
                    "يرجى إدخال الاسم",
                    "error"
                );

                return;
            }


            if (!customerEmail) {

                this.showNotification(
                    "يرجى إدخال البريد الإلكتروني",
                    "error"
                );

                return;
            }


            if (!customerPhone) {

                this.showNotification(
                    "يرجى إدخال رقم الهاتف",
                    "error"
                );

                return;
            }


            if (!destination) {

                this.showNotification(
                    "يرجى اختيار الوجهة",
                    "error"
                );

                return;
            }


            if (!travelDate) {

                this.showNotification(
                    "يرجى اختيار تاريخ السفر",
                    "error"
                );

                return;
            }


            /*
             * Build booking request.
             * This is the bridge between the website
             * and the accounting/data system.
             */

            const bookingRequest = {

                id:
                    typeof generateId === "function"
                        ? generateId("REQ")
                        : "REQ-" + Date.now(),

                customer: {

                    name:
                        customerName,

                    email:
                        customerEmail,

                    phone:
                        customerPhone

                },

                destination:
                    destination,

                travelDate:
                    travelDate,

                travelers:
                    travelers,

                status:
                    "pending",

                createdAt:
                    new Date().toISOString()

            };


            this.saveBookingRequest(
                bookingRequest
            );


            /* Confirmation */

            this.showNotification(
                "تم استلام طلب الحجز بنجاح، وسنتواصل معك قريبًا.",
                "success"
            );


            bookingForm.reset();


            /*
             * Keep the form visible.
             * We do NOT redirect immediately so the user
             * can see the confirmation message.
             */

        }
    );
};


/* =========================================================
   11. FORM VALUE HELPER
   ========================================================= */

BlackEagleApp.getFormValue = function (
    formData,
    fieldName
) {

    const value =
        formData.get(fieldName);


    if (value === null) {
        return "";
    }


    return String(value).trim();
};


/* =========================================================
   12. SAVE BOOKING REQUEST
   ========================================================= */

BlackEagleApp.saveBookingRequest = function (
    bookingRequest
) {

    const storageKey =
        "blackEagle_bookingRequests";


    let requests = [];


    try {

        const saved =
            localStorage.getItem(
                storageKey
            );


        if (saved) {

            const parsed =
                JSON.parse(saved);


            if (Array.isArray(parsed)) {

                requests = parsed;

            }

        }

    } catch (error) {

        console.warn(
            "Unable to read booking requests.",
            error
        );

    }


    requests.push(
        bookingRequest
    );


    try {

        localStorage.setItem(
            storageKey,
            JSON.stringify(requests)
        );

    } catch (error) {

        console.error(
            "Unable to save booking request.",
            error
        );

    }


    /*
     * Dispatch a custom event.
     * Accounting pages can listen for this event
     * when website and accounting are running together.
     */

    window.dispatchEvent(
        new CustomEvent(
            "blackEagleBookingCreated",
            {
                detail:
                    bookingRequest
            }
        )
    );


    return bookingRequest;
};


/* =========================================================
   13. DESTINATION LINKS
   ========================================================= */

BlackEagleApp.initializeDestinationLinks = function () {

    const links =
        document.querySelectorAll(
            "[data-destination-id]"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const destinationId =
                    link.getAttribute(
                        "data-destination-id"
                    );


                if (!destinationId) {
                    return;
                }


                const destination =
                    typeof getDestinationById === "function"
                        ? getDestinationById(
                            destinationId
                        )
                        : null;


                if (!destination) {
                    return;
                }


                /*
                 * Store selected destination.
                 */

                try {

                    localStorage.setItem(
                        "blackEagle_selectedDestination",
                        JSON.stringify(
                            destination
                        )
                    );

                } catch (error) {

                    console.warn(
                        "Unable to save selected destination.",
                        error
                    );

                }

            }
        );

    });
};


/* =========================================================
   14. TRIP LINKS
   ========================================================= */

BlackEagleApp.initializeTripLinks = function () {

    const links =
        document.querySelectorAll(
            "[data-trip-id]"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                const tripId =
                    link.getAttribute(
                        "data-trip-id"
                    );


                if (!tripId) {
                    return;
                }


                const trip =
                    typeof getTripById === "function"
                        ? getTripById(
                            tripId
                        )
                        : null;


                if (!trip) {
                    return;
                }


                try {

                    localStorage.setItem(
                        "blackEagle_selectedTrip",
                        JSON.stringify(
                            trip
                        )
                    );

                } catch (error) {

                    console.warn(
                        "Unable to save selected trip.",
                        error
                    );

                }

            }
        );

    });
};


/* =========================================================
   15. INITIALIZE PART 2
   ========================================================= */

const originalBlackEagleInit =
    BlackEagleApp.init;


BlackEagleApp.init = function () {

    originalBlackEagleInit.call(
        this
    );


    this.initializeSearch();

    this.initializeBookingForm();

    this.initializeDestinationLinks();

    this.initializeTripLinks();

};

/* =========================================================
   BLACK EAGLE TRAVEL
   Main JavaScript
   Part 3 / 4
   Notifications + Gallery + Testimonials
   ========================================================= */


/* =========================================================
   16. NOTIFICATION SYSTEM
   ========================================================= */

BlackEagleApp.showNotification = function (
    message,
    type = "info",
    duration = 4500
) {

    const notification =
        this.elements.notification;

    const notificationMessage =
        this.elements.notificationMessage;


    if (!notification) {

        console.log(
            `[${type}] ${message}`
        );

        return;
    }


    if (notificationMessage) {

        notificationMessage.textContent =
            message;

    }


    /*
     * Remove previous notification types.
     */

    notification.classList.remove(
        "success",
        "error",
        "warning",
        "info",
        "show",
        "active"
    );


    /*
     * Add current notification type.
     */

    notification.classList.add(
        type
    );


    /*
     * Support both possible CSS class names.
     */

    notification.classList.add(
        "show"
    );

    notification.classList.add(
        "active"
    );


    /*
     * Automatically hide.
     */

    clearTimeout(
        this.notificationTimer
    );


    this.notificationTimer =
        setTimeout(
            () => {

                this.hideNotification();

            },
            duration
        );
};


/* =========================================================
   17. HIDE NOTIFICATION
   ========================================================= */

BlackEagleApp.hideNotification = function () {

    const notification =
        this.elements.notification;


    if (!notification) {
        return;
    }


    notification.classList.remove(
        "show"
    );

    notification.classList.remove(
        "active"
    );
};


/* =========================================================
   18. GALLERY SYSTEM
   ========================================================= */

BlackEagleApp.initializeGallery = function () {

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );


    if (!galleryItems.length) {
        return;
    }


    this.galleryItems =
        Array.from(
            galleryItems
        );


    this.galleryItems.forEach(
        (item, index) => {

            item.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    this.openGallery(
                        index
                    );

                }
            );

        }
    );


    /*
     * Close button.
     */

    if (this.elements.galleryClose) {

        this.elements.galleryClose.addEventListener(
            "click",
            () => {

                this.closeGallery();

            }
        );
    }


    /*
     * Close by clicking the background.
     */

    if (this.elements.galleryLightbox) {

        this.elements.galleryLightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    this.elements.galleryLightbox
                ) {

                    this.closeGallery();

                }

            }
        );
    }


    /*
     * Keyboard navigation.
     */

    document.addEventListener(
        "keydown",
        event => {

            if (
                !this.elements.galleryLightbox ||
                !this.elements.galleryLightbox.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (event.key === "Escape") {

                this.closeGallery();

            }


            if (event.key === "ArrowRight") {

                this.nextGalleryImage();

            }


            if (event.key === "ArrowLeft") {

                this.previousGalleryImage();

            }

        }
    );
};


/* =========================================================
   19. OPEN GALLERY
   ========================================================= */

BlackEagleApp.openGallery = function (
    index
) {

    if (
        !this.galleryItems ||
        !this.galleryItems.length
    ) {

        return;
    }


    if (!this.elements.galleryLightbox) {
        return;
    }


    this.state.currentGalleryIndex =
        index;


    this.updateGalleryImage();


    this.elements.galleryLightbox.classList.add(
        "active"
    );


    this.elements.body.classList.add(
        "lightbox-open"
    );


    /*
     * Prevent page scrolling while lightbox
     * is open.
     */

    this.elements.body.style.overflow =
        "hidden";
};


/* =========================================================
   20. UPDATE GALLERY IMAGE
   ========================================================= */

BlackEagleApp.updateGalleryImage = function () {

    if (
        !this.galleryItems ||
        !this.galleryItems.length
    ) {

        return;
    }


    const item =
        this.galleryItems[
            this.state.currentGalleryIndex
        ];


    if (!item) {
        return;
    }


    let image =
        item.querySelector(
            "img"
        );


    /*
     * Some gallery structures may use
     * background-image instead of img.
     */

    if (image) {

        const source =
            image.currentSrc ||
            image.src;


        if (
            this.elements.galleryLightboxImage
        ) {

            this.elements.galleryLightboxImage.src =
                source;


            this.elements.galleryLightboxImage.alt =
                image.alt || "Black Eagle Travel";

        }

        return;
    }


    const backgroundImage =
        item.style.backgroundImage;


    if (
        backgroundImage &&
        this.elements.galleryLightboxImage
    ) {

        const source =
            backgroundImage
                .replace(
                    /^url\(["']?/,
                    ""
                )
                .replace(
                    /["']?\)$/,
                    ""
                );


        this.elements.galleryLightboxImage.src =
            source;

    }
};


/* =========================================================
   21. NEXT GALLERY IMAGE
   ========================================================= */

BlackEagleApp.nextGalleryImage = function () {

    if (
        !this.galleryItems ||
        !this.galleryItems.length
    ) {

        return;
    }


    this.state.currentGalleryIndex =
        (
            this.state.currentGalleryIndex + 1
        ) %
        this.galleryItems.length;


    this.updateGalleryImage();
};


/* =========================================================
   22. PREVIOUS GALLERY IMAGE
   ========================================================= */

BlackEagleApp.previousGalleryImage = function () {

    if (
        !this.galleryItems ||
        !this.galleryItems.length
    ) {

        return;
    }


    this.state.currentGalleryIndex =
        (
            this.state.currentGalleryIndex -
            1 +
            this.galleryItems.length
        ) %
        this.galleryItems.length;


    this.updateGalleryImage();
};


/* =========================================================
   23. CLOSE GALLERY
   ========================================================= */

BlackEagleApp.closeGallery = function () {

    if (
        !this.elements.galleryLightbox
    ) {

        return;
    }


    this.elements.galleryLightbox.classList.remove(
        "active"
    );


    this.elements.body.classList.remove(
        "lightbox-open"
    );


    this.elements.body.style.overflow =
        "";
};


/* =========================================================
   24. TESTIMONIAL SLIDER
   ========================================================= */

BlackEagleApp.initializeTestimonials = function () {

    const slider =
        document.querySelector(
            ".testimonials-slider"
        );


    if (!slider) {
        return;
    }


    const items =
        slider.querySelectorAll(
            ".testimonial-item"
        );


    if (!items.length) {
        return;
    }


    this.testimonialItems =
        Array.from(
            items
        );


    /*
     * Hide all items initially.
     */

    this.testimonialItems.forEach(
        item => {

            item.classList.remove(
                "active"
            );

        }
    );


    /*
     * Show first item.
     */

    this.state.currentTestimonialIndex =
        0;


    this.testimonialItems[0].classList.add(
        "active"
    );


    /*
     * Slider controls.
     */

    const nextButton =
        slider.querySelector(
            ".testimonial-next"
        );


    const previousButton =
        slider.querySelector(
            ".testimonial-prev"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                this.nextTestimonial();

            }
        );

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                this.previousTestimonial();

            }
        );

    }


    /*
     * Automatic slider.
     */

    this.testimonialTimer =
        setInterval(
            () => {

                this.nextTestimonial();

            },
            6000
        );


    /*
     * Pause while mouse is over slider.
     */

    slider.addEventListener(
        "mouseenter",
        () => {

            clearInterval(
                this.testimonialTimer
            );

        }
    );


    slider.addEventListener(
        "mouseleave",
        () => {

            this.testimonialTimer =
                setInterval(
                    () => {

                        this.nextTestimonial();

                    },
                    6000
                );

        }
    );
};


/* =========================================================
   25. NEXT TESTIMONIAL
   ========================================================= */

BlackEagleApp.nextTestimonial = function () {

    if (
        !this.testimonialItems ||
        !this.testimonialItems.length
    ) {

        return;
    }


    this.testimonialItems[
        this.state.currentTestimonialIndex
    ].classList.remove(
        "active"
    );


    this.state.currentTestimonialIndex =
        (
            this.state.currentTestimonialIndex + 1
        ) %
        this.testimonialItems.length;


    this.testimonialItems[
        this.state.currentTestimonialIndex
    ].classList.add(
        "active"
    );
};


/* =========================================================
   26. PREVIOUS TESTIMONIAL
   ========================================================= */

BlackEagleApp.previousTestimonial = function () {

    if (
        !this.testimonialItems ||
        !this.testimonialItems.length
    ) {

        return;
    }


    this.testimonialItems[
        this.state.currentTestimonialIndex
    ].classList.remove(
        "active"
    );


    this.state.currentTestimonialIndex =
        (
            this.state.currentTestimonialIndex -
            1 +
            this.testimonialItems.length
        ) %
        this.testimonialItems.length;


    this.testimonialItems[
        this.state.currentTestimonialIndex
    ].classList.add(
        "active"
    );
};


/* =========================================================
   27. SMOOTH ANCHOR LINKS
   ========================================================= */

BlackEagleApp.initializeSmoothLinks = function () {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const headerHeight =
                        this.elements.header
                            ? this.elements.header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.pageYOffset -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });


                    /*
                     * Close mobile menu
                     * after navigation.
                     */

                    this.closeMobileMenu();

                }
            );

        }
    );
};


/* =========================================================
   28. IMAGE ERROR HANDLING
   ========================================================= */

BlackEagleApp.initializeImageFallbacks = function () {

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-error"
                    );

                    /*
                     * Do not repeatedly trigger
                     * the same failed source.
                     */

                    image.removeAttribute(
                        "srcset"
                    );

                },
                {
                    once: true
                }
            );

        }
    );
};


/* =========================================================
   29. EXTEND APPLICATION INITIALIZATION
   ========================================================= */

const previousBlackEagleInit =
    BlackEagleApp.init;


BlackEagleApp.init = function () {

    previousBlackEagleInit.call(
        this
    );


    this.initializeGallery();

    this.initializeTestimonials();

    this.initializeSmoothLinks();

    this.initializeImageFallbacks();

};

/* =========================================================
   BLACK EAGLE TRAVEL
   Main JavaScript
   Part 4 / 4
   Data Rendering + Counters + Booking Bridge
   ========================================================= */


/* =========================================================
   30. RENDER FEATURED DESTINATIONS
   ========================================================= */

BlackEagleApp.renderFeaturedDestinations = function () {

    const container =
        document.querySelector(
            "#featuredDestinations"
        );


    if (!container) {
        return;
    }


    if (
        typeof getFeaturedDestinations !==
        "function"
    ) {
        return;
    }


    const destinations =
        getFeaturedDestinations();


    if (!Array.isArray(destinations)) {
        return;
    }


    container.innerHTML = "";


    destinations.forEach(
        destination => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "destination-card";


            card.setAttribute(
                "data-destination-id",
                destination.id
            );


            card.innerHTML = `

                <div class="destination-image">

                    <img
                        src="${destination.image}"
                        alt="${destination.name}"
                        loading="lazy"
                    >

                </div>

                <div class="destination-content">

                    <span class="destination-country">
                        ${destination.country || ""}
                    </span>

                    <h3>
                        ${destination.name}
                    </h3>

                    <p>
                        ${destination.description || ""}
                    </p>

                    <div class="destination-footer">

                        <span>
                            ${destination.priceFrom
                                ? `ابتداءً من ${formatCurrency(destination.priceFrom)}`
                                : ""}
                        </span>

                        <a
                            href="pages/destinations.html?id=${encodeURIComponent(destination.id)}"
                            class="text-link"
                        >
                            اكتشف المزيد
                        </a>

                    </div>

                </div>
            `;


            container.appendChild(
                card
            );
        }
    );
};


/* =========================================================
   31. RENDER FEATURED OFFERS
   ========================================================= */

BlackEagleApp.renderFeaturedOffers = function () {

    const container =
        document.querySelector(
            "#featuredOffers"
        );


    if (!container) {
        return;
    }


    if (
        typeof getFeaturedOffers !==
        "function"
    ) {
        return;
    }


    const offers =
        getFeaturedOffers();


    if (!Array.isArray(offers)) {
        return;
    }


    container.innerHTML = "";


    offers.forEach(
        offer => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "offer-card";


            card.innerHTML = `

                <div class="offer-image">

                    <img
                        src="${offer.image}"
                        alt="${offer.title}"
                        loading="lazy"
                    >

                    ${
                        offer.discount
                            ? `
                                <span class="offer-badge">
                                    خصم ${offer.discount}%
                                </span>
                              `
                            : ""
                    }

                </div>

                <div class="offer-content">

                    <span class="offer-location">
                        ${offer.destination || ""}
                    </span>

                    <h3>
                        ${offer.title}
                    </h3>

                    <p>
                        ${offer.description || ""}
                    </p>

                    <div class="offer-price">

                        ${
                            offer.oldPrice
                                ? `
                                    <del>
                                        ${formatCurrency(offer.oldPrice)}
                                    </del>
                                  `
                                : ""
                        }

                        <strong>
                            ${formatCurrency(
                                offer.price || 0
                            )}
                        </strong>

                    </div>

                    <a
                        href="pages/bookings.html?offer=${encodeURIComponent(offer.id)}"
                        class="gold-btn"
                    >
                        احجز الآن
                    </a>

                </div>
            `;


            container.appendChild(
                card
            );
        }
    );
};


/* =========================================================
   32. UPDATE STATISTICS
   ========================================================= */

BlackEagleApp.updateStatistics = function () {

    const statistics =
        typeof getDashboardStatistics ===
        "function"
            ? getDashboardStatistics()
            : null;


    if (!statistics) {
        return;
    }


    const mappings = {

        totalBookings:
            statistics.totalBookings,

        totalCustomers:
            statistics.totalCustomers,

        totalRevenue:
            statistics.totalRevenue,

        totalExpenses:
            statistics.totalExpenses

    };


    Object.keys(mappings).forEach(
        key => {

            const elements =
                document.querySelectorAll(
                    `[data-stat="${key}"]`
                );


            elements.forEach(
                element => {

                    const value =
                        mappings[key];


                    if (
                        key === "totalRevenue" ||
                        key === "totalExpenses"
                    ) {

                        element.textContent =
                            formatCurrency(
                                value || 0
                            );

                    } else {

                        element.textContent =
                            value || 0;

                    }

                }
            );
        }
    );
};


/* =========================================================
   33. ANIMATED COUNTERS
   ========================================================= */

BlackEagleApp.initializeCounters = function () {

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    if (!counters.length) {
        return;
    }


    const animateCounter =
        element => {

            const target =
                Number(
                    element.getAttribute(
                        "data-counter"
                    )
                );


            if (
                Number.isNaN(target)
            ) {

                return;
            }


            const duration =
                1500;


            const startTime =
                performance.now();


            const update =
                currentTime => {

                    const elapsed =
                        currentTime -
                        startTime;


                    const progress =
                        Math.min(
                            elapsed / duration,
                            1
                        );


                    const easedProgress =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    const currentValue =
                        Math.floor(
                            target *
                            easedProgress
                        );


                    element.textContent =
                        currentValue.toLocaleString(
                            "ar-EG"
                        );


                    if (progress < 1) {

                        requestAnimationFrame(
                            update
                        );

                    }

                };


            requestAnimationFrame(
                update
            );
        };


    /*
     * Use IntersectionObserver so counters
     * start when they become visible.
     */

    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                animateCounter(
                                    entry.target
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.35
                }
            );


        counters.forEach(
            counter => {

                observer.observe(
                    counter
                );

            }
        );

    } else {

        counters.forEach(
            counter => {

                animateCounter(
                    counter
                );

            }
        );
    }
};


/* =========================================================
   34. BOOKING → ACCOUNTING BRIDGE
   ========================================================= */

BlackEagleApp.initializeAccountingBridge = function () {

    window.addEventListener(
        "blackEagleBookingCreated",
        event => {

            if (
                !event.detail
            ) {

                return;
            }


            const booking =
                event.detail;


            /*
             * Keep a synchronized queue.
             * The accounting system will process
             * this queue in its own JavaScript layer.
             */

            const storageKey =
                "blackEagle_accountingQueue";


            let queue = [];


            try {

                const saved =
                    localStorage.getItem(
                        storageKey
                    );


                if (saved) {

                    const parsed =
                        JSON.parse(
                            saved
                        );


                    if (
                        Array.isArray(parsed)
                    ) {

                        queue =
                            parsed;

                    }

                }

            } catch (error) {

                console.warn(
                    "Accounting queue could not be loaded.",
                    error
                );

            }


            queue.push({

                type:
                    "NEW_BOOKING",

                booking:
                    booking,

                timestamp:
                    new Date().toISOString(),

                processed:
                    false

            });


            try {

                localStorage.setItem(
                    storageKey,
                    JSON.stringify(
                        queue
                    )
                );

            } catch (error) {

                console.error(
                    "Accounting queue could not be saved.",
                    error
                );

            }


            console.log(
                "New booking sent to accounting bridge:",
                booking.id
            );
        }
    );
};


/* =========================================================
   35. RESTORE LAST SEARCH
   ========================================================= */

BlackEagleApp.restoreLastSearch = function () {

    let savedSearch = null;


    try {

        const raw =
            localStorage.getItem(
                "blackEagle_lastSearch"
            );


        if (raw) {

            savedSearch =
                JSON.parse(
                    raw
                );

        }

    } catch (error) {

        console.warn(
            "Unable to restore last search.",
            error
        );

    }


    if (!savedSearch) {
        return;
    }


    const destination =
        document.getElementById(
            "searchDestination"
        );


    const travelType =
        document.getElementById(
            "searchTravelType"
        );


    const travelDate =
        document.getElementById(
            "searchDate"
        );


    if (
        destination &&
        savedSearch.destination
    ) {

        destination.value =
            savedSearch.destination;

    }


    if (
        travelType &&
        savedSearch.travelType
    ) {

        travelType.value =
            savedSearch.travelType;

    }


    if (
        travelDate &&
        savedSearch.travelDate
    ) {

        travelDate.value =
            savedSearch.travelDate;

    }
};


/* =========================================================
   36. CONTACT FORM
   ========================================================= */

BlackEagleApp.initializeContactForm = function () {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const formData =
                new FormData(
                    form
                );


            const messageData = {

                name:
                    this.getFormValue(
                        formData,
                        "name"
                    ),

                email:
                    this.getFormValue(
                        formData,
                        "email"
                    ),

                phone:
                    this.getFormValue(
                        formData,
                        "phone"
                    ),

                subject:
                    this.getFormValue(
                        formData,
                        "subject"
                    ),

                message:
                    this.getFormValue(
                        formData,
                        "message"
                    ),

                createdAt:
                    new Date().toISOString(),

                status:
                    "new"

            };


            if (
                !messageData.name ||
                !messageData.email ||
                !messageData.message
            ) {

                this.showNotification(
                    "يرجى إكمال البيانات المطلوبة.",
                    "warning"
                );

                return;
            }


            let messages = [];


            try {

                const saved =
                    localStorage.getItem(
                        "blackEagle_contactMessages"
                    );


                if (saved) {

                    const parsed =
                        JSON.parse(
                            saved
                        );


                    if (
                        Array.isArray(parsed)
                    ) {

                        messages =
                            parsed;

                    }

                }

            } catch (error) {

                console.warn(
                    "Unable to read contact messages.",
                    error
                );

            }


            messages.push(
                messageData
            );


            try {

                localStorage.setItem(
                    "blackEagle_contactMessages",
                    JSON.stringify(
                        messages
                    )
                );

            } catch (error) {

                console.error(
                    "Unable to save contact message.",
                    error
                );

            }


            this.showNotification(
                "تم إرسال رسالتك بنجاح. شكرًا لتواصلك معنا.",
                "success"
            );


            form.reset();
        }
    );
};


/* =========================================================
   37. PROTECT EXTERNAL ACTIONS
   ========================================================= */

BlackEagleApp.initializeExternalActions = function () {

    const whatsappLinks =
        document.querySelectorAll(
            '[data-action="whatsapp"]'
        );


    whatsappLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    if (
                        typeof BLACK_EAGLE_CONFIG !==
                        "undefined" &&
                        BLACK_EAGLE_CONFIG.contact &&
                        BLACK_EAGLE_CONFIG.contact.whatsapp
                    ) {

                        const number =
                            BLACK_EAGLE_CONFIG
                                .contact
                                .whatsapp;


                        const url =
                            `https://wa.me/${number}`;


                        link.setAttribute(
                            "href",
                            url
                        );

                    }

                }
            );

        }
    );
};


/* =========================================================
   38. FINAL APPLICATION INITIALIZATION
   ========================================================= */

const finalBlackEagleInit =
    BlackEagleApp.init;


BlackEagleApp.init = function () {

    finalBlackEagleInit.call(
        this
    );


    this.renderFeaturedDestinations();

    this.renderFeaturedOffers();

    this.updateStatistics();

    this.initializeCounters();

    this.initializeAccountingBridge();

    this.restoreLastSearch();

    this.initializeContactForm();

    this.initializeExternalActions();


    console.log(
        "Black Eagle main.js loaded successfully - Part 4/4."
    );
};
