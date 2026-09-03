/* =========================================================
   BLACK EAGLE TRAVEL
   DATA.JS
   PART 1 / 4
   ========================================================= */

"use strict";

/*
 * =========================================================
 * APPLICATION CONFIGURATION
 * =========================================================
 */

const BLACK_EAGLE_CONFIG = {
    company: {
        nameAr: "بلاك إيجل للسفر والسياحة",
        nameEn: "Black Eagle Travel",
        shortName: "Black Eagle",
        currency: "USD",
        currencySymbol: "$",
        language: "ar",
        direction: "rtl"
    },

    contact: {
        phone: "+20 100 000 0000",
        email: "info@blackeagletravel.com",
        whatsapp: "+20 100 000 0000"
    },

    system: {
        version: "1.0.0",
        storagePrefix: "black_eagle_",
        defaultPageSize: 12
    }
};


/*
 * =========================================================
 * DESTINATIONS
 * =========================================================
 */

const destinationsData = [

    {
        id: "dest-001",
        nameAr: "تركيا",
        nameEn: "Turkey",
        countryAr: "تركيا",
        countryEn: "Turkey",
        cityAr: "إسطنبول",
        cityEn: "Istanbul",
        image: "assets/images/destinations/turkey.jpg",
        descriptionAr: "اكتشف إسطنبول بين التاريخ العريق والطبيعة الساحرة.",
        descriptionEn: "Discover Istanbul between rich history and beautiful nature.",
        startingPrice: 499,
        currency: "USD",
        featured: true,
        active: true
    },

    {
        id: "dest-002",
        nameAr: "اليابان",
        nameEn: "Japan",
        countryAr: "اليابان",
        countryEn: "Japan",
        cityAr: "طوكيو",
        cityEn: "Tokyo",
        image: "assets/images/destinations/japan.jpg",
        descriptionAr: "رحلة مميزة تجمع بين التكنولوجيا والثقافة اليابانية.",
        descriptionEn: "A unique journey combining technology and Japanese culture.",
        startingPrice: 1499,
        currency: "USD",
        featured: true,
        active: true
    },

    {
        id: "dest-003",
        nameAr: "سويسرا",
        nameEn: "Switzerland",
        countryAr: "سويسرا",
        countryEn: "Switzerland",
        cityAr: "زيورخ",
        cityEn: "Zurich",
        image: "assets/images/destinations/switzerland.jpg",
        descriptionAr: "استمتع بالجبال والبحيرات والطبيعة الأوروبية الخلابة.",
        descriptionEn: "Enjoy mountains, lakes and breathtaking European landscapes.",
        startingPrice: 1299,
        currency: "USD",
        featured: true,
        active: true
    },

    {
        id: "dest-004",
        nameAr: "المالديف",
        nameEn: "Maldives",
        countryAr: "المالديف",
        countryEn: "Maldives",
        cityAr: "ماليه",
        cityEn: "Male",
        image: "assets/images/destinations/maldives.jpg",
        descriptionAr: "جزر استوائية وشواطئ ساحرة لإجازة لا تنسى.",
        descriptionEn: "Tropical islands and stunning beaches for an unforgettable escape.",
        startingPrice: 1299,
        currency: "USD",
        featured: true,
        active: true
    }

];


/*
 * =========================================================
 * SPECIAL OFFERS
 * =========================================================
 */

const offersData = [

    {
        id: "offer-001",
        destinationId: "dest-004",
        titleAr: "عرض المالديف",
        titleEn: "Maldives Escape",
        locationAr: "جزر المالديف",
        locationEn: "Maldives",
        image: "assets/images/offers/maldives-offer.jpg",
        oldPrice: 1499,
        price: 999,
        discount: 20,
        durationAr: "7 أيام / 6 ليالي",
        durationEn: "7 Days / 6 Nights",
        active: true,
        featured: true
    },

    {
        id: "offer-002",
        destinationId: "dest-001",
        titleAr: "اكتشف تركيا",
        titleEn: "Discover Turkey",
        locationAr: "إسطنبول - تركيا",
        locationEn: "Istanbul - Turkey",
        image: "assets/images/offers/turkey-offer.jpg",
        oldPrice: 799,
        price: 599,
        discount: 25,
        durationAr: "6 أيام / 5 ليالي",
        durationEn: "6 Days / 5 Nights",
        active: true,
        featured: true
    },

    {
        id: "offer-003",
        destinationId: "dest-003",
        titleAr: "سويسرا الساحرة",
        titleEn: "Amazing Switzerland",
        locationAr: "سويسرا",
        locationEn: "Switzerland",
        image: "assets/images/offers/switzerland-offer.jpg",
        oldPrice: 1899,
        price: 1599,
        discount: 15,
        durationAr: "8 أيام / 7 ليالي",
        durationEn: "8 Days / 7 Nights",
        active: true,
        featured: true
    }

];


/*
 * =========================================================
 * TRAVEL SERVICES
 * =========================================================
 */

const servicesData = [

    {
        id: "service-001",
        type: "flights",
        titleAr: "حجز الطيران",
        titleEn: "Flight Booking",
        descriptionAr: "احجز رحلاتك الجوية بأفضل الخيارات والأسعار.",
        descriptionEn: "Book your flights with the best options and prices.",
        icon: "fa-solid fa-plane-departure",
        active: true
    },

    {
        id: "service-002",
        type: "hotels",
        titleAr: "حجز الفنادق",
        titleEn: "Hotel Booking",
        descriptionAr: "فنادق مختارة بعناية في أفضل الوجهات.",
        descriptionEn: "Carefully selected hotels in top destinations.",
        icon: "fa-solid fa-hotel",
        active: true
    },

    {
        id: "service-003",
        type: "visas",
        titleAr: "التأشيرات",
        titleEn: "Visa Services",
        descriptionAr: "خدمات وإجراءات التأشيرات لمختلف الوجهات.",
        descriptionEn: "Visa services and processing for different destinations.",
        icon: "fa-solid fa-passport",
        active: true
    },

    {
        id: "service-004",
        type: "tours",
        titleAr: "الجولات السياحية",
        titleEn: "Tours",
        descriptionAr: "جولات وتجارب سياحية مصممة بعناية.",
        descriptionEn: "Carefully designed tours and travel experiences.",
        icon: "fa-solid fa-map-location-dot",
        active: true
    }

];


/*
 * =========================================================
 * TRIP CATEGORIES
 * =========================================================
 */

const tripCategoriesData = [

    {
        id: "cat-001",
        nameAr: "رحلات عائلية",
        nameEn: "Family Trips",
        active: true
    },

    {
        id: "cat-002",
        nameAr: "شهر العسل",
        nameEn: "Honeymoon",
        active: true
    },

    {
        id: "cat-003",
        nameAr: "رحلات فاخرة",
        nameEn: "Luxury Trips",
        active: true
    },

    {
        id: "cat-004",
        nameAr: "رحلات المغامرات",
        nameEn: "Adventure Trips",
        active: true
    }

];


/*
 * =========================================================
 * HELPER FUNCTIONS
 * =========================================================
 */

function getDestinationById(id) {
    return destinationsData.find(
        destination => destination.id === id
    ) || null;
}


function getOfferById(id) {
    return offersData.find(
        offer => offer.id === id
    ) || null;
}


function getServiceById(id) {
    return servicesData.find(
        service => service.id === id
    ) || null;
}


function getFeaturedDestinations() {
    return destinationsData.filter(
        destination => destination.featured && destination.active
    );
}


function getFeaturedOffers() {
    return offersData.filter(
        offer => offer.featured && offer.active
    );
}


function getActiveServices() {
    return servicesData.filter(
        service => service.active
    );
}

/* =========================================================
   TRIPS
   ========================================================= */

const tripsData = [

    {
        id: "trip-001",
        destinationId: "dest-001",
        categoryId: "cat-001",

        titleAr: "إسطنبول العائلية",
        titleEn: "Family Istanbul",

        descriptionAr:
            "رحلة عائلية مميزة لاكتشاف أجمل معالم إسطنبول.",
        descriptionEn:
            "A special family journey to discover the highlights of Istanbul.",

        image: "assets/images/trips/istanbul.jpg",

        durationDays: 6,
        durationNights: 5,

        price: 499,
        currency: "USD",

        includes: [
            "flight",
            "hotel",
            "breakfast",
            "airport-transfer",
            "city-tour"
        ],

        featured: true,
        active: true
    },


    {
        id: "trip-002",
        destinationId: "dest-004",
        categoryId: "cat-002",

        titleAr: "شهر عسل في المالديف",
        titleEn: "Maldives Honeymoon",

        descriptionAr:
            "إجازة رومانسية فاخرة وسط مياه المالديف الساحرة.",
        descriptionEn:
            "A luxurious romantic escape surrounded by the beauty of the Maldives.",

        image: "assets/images/trips/maldives.jpg",

        durationDays: 7,
        durationNights: 6,

        price: 1299,
        currency: "USD",

        includes: [
            "flight",
            "hotel",
            "breakfast",
            "airport-transfer",
            "romantic-dinner"
        ],

        featured: true,
        active: true
    },


    {
        id: "trip-003",
        destinationId: "dest-003",
        categoryId: "cat-003",

        titleAr: "سويسرا الفاخرة",
        titleEn: "Luxury Switzerland",

        descriptionAr:
            "اكتشف جبال وبحيرات سويسرا في تجربة سفر راقية.",
        descriptionEn:
            "Discover Swiss mountains and lakes in a premium travel experience.",

        image: "assets/images/trips/switzerland.jpg",

        durationDays: 8,
        durationNights: 7,

        price: 1699,
        currency: "USD",

        includes: [
            "flight",
            "luxury-hotel",
            "breakfast",
            "private-transfer",
            "mountain-tour"
        ],

        featured: true,
        active: true
    },


    {
        id: "trip-004",
        destinationId: "dest-002",
        categoryId: "cat-003",

        titleAr: "اليابان الساحرة",
        titleEn: "Amazing Japan",

        descriptionAr:
            "رحلة تجمع بين طوكيو الحديثة والثقافة اليابانية الأصيلة.",
        descriptionEn:
            "A journey combining modern Tokyo with authentic Japanese culture.",

        image: "assets/images/trips/japan.jpg",

        durationDays: 9,
        durationNights: 8,

        price: 1999,
        currency: "USD",

        includes: [
            "flight",
            "hotel",
            "breakfast",
            "train-pass",
            "guided-tour"
        ],

        featured: false,
        active: true
    }

];


/* =========================================================
   HOTELS
   ========================================================= */

const hotelsData = [

    {
        id: "hotel-001",
        destinationId: "dest-001",

        nameAr: "فندق إسطنبول الفاخر",
        nameEn: "Istanbul Luxury Hotel",

        image: "assets/images/hotels/istanbul-hotel.jpg",

        stars: 5,

        roomTypeAr: "غرفة ديلوكس",
        roomTypeEn: "Deluxe Room",

        pricePerNight: 120,
        currency: "USD",

        facilities: [
            "wifi",
            "breakfast",
            "pool",
            "gym",
            "restaurant"
        ],

        active: true
    },


    {
        id: "hotel-002",
        destinationId: "dest-004",

        nameAr: "منتجع المالديف الفاخر",
        nameEn: "Maldives Luxury Resort",

        image: "assets/images/hotels/maldives-resort.jpg",

        stars: 5,

        roomTypeAr: "فيلا فوق الماء",
        roomTypeEn: "Overwater Villa",

        pricePerNight: 350,
        currency: "USD",

        facilities: [
            "wifi",
            "breakfast",
            "private-pool",
            "spa",
            "restaurant"
        ],

        active: true
    },


    {
        id: "hotel-003",
        destinationId: "dest-003",

        nameAr: "منتجع سويسرا الجبلي",
        nameEn: "Swiss Mountain Resort",

        image: "assets/images/hotels/switzerland-hotel.jpg",

        stars: 5,

        roomTypeAr: "جناح جبلي",
        roomTypeEn: "Mountain Suite",

        pricePerNight: 280,
        currency: "USD",

        facilities: [
            "wifi",
            "breakfast",
            "spa",
            "restaurant",
            "mountain-view"
        ],

        active: true
    }

];


/* =========================================================
   CUSTOM TRIP OPTIONS
   ========================================================= */

const customTripOptions = {

    accommodation: [
        {
            id: "acc-001",
            nameAr: "3 نجوم",
            nameEn: "3 Stars",
            priceMultiplier: 1
        },
        {
            id: "acc-002",
            nameAr: "4 نجوم",
            nameEn: "4 Stars",
            priceMultiplier: 1.35
        },
        {
            id: "acc-003",
            nameAr: "5 نجوم",
            nameEn: "5 Stars",
            priceMultiplier: 1.8
        },
        {
            id: "acc-004",
            nameAr: "فندق فاخر",
            nameEn: "Luxury Hotel",
            priceMultiplier: 2.5
        }
    ],

    transportation: [
        {
            id: "transport-001",
            nameAr: "اقتصادي",
            nameEn: "Economy",
            priceMultiplier: 1
        },
        {
            id: "transport-002",
            nameAr: "خاص",
            nameEn: "Private",
            priceMultiplier: 1.4
        },
        {
            id: "transport-003",
            nameAr: "فاخر",
            nameEn: "Luxury",
            priceMultiplier: 2
        }
    ],

    mealPlans: [
        {
            id: "meal-001",
            nameAr: "إفطار",
            nameEn: "Breakfast",
            dailyPrice: 15
        },
        {
            id: "meal-002",
            nameAr: "إفطار وعشاء",
            nameEn: "Breakfast & Dinner",
            dailyPrice: 35
        },
        {
            id: "meal-003",
            nameAr: "إقامة كاملة",
            nameEn: "Full Board",
            dailyPrice: 55
        }
    ]

};


/* =========================================================
   CUSTOM TRIP PRICE CALCULATOR
   ========================================================= */

function calculateCustomTripPrice(options = {}) {

    const basePrice = Number(options.basePrice) || 0;
    const travelers = Math.max(
        Number(options.travelers) || 1,
        1
    );

    const days = Math.max(
        Number(options.days) || 1,
        1
    );


    let accommodationMultiplier = 1;

    if (options.accommodation) {

        const accommodation =
            customTripOptions.accommodation.find(
                item => item.id === options.accommodation
            );

        if (accommodation) {
            accommodationMultiplier =
                accommodation.priceMultiplier;
        }
    }


    let transportationMultiplier = 1;

    if (options.transportation) {

        const transportation =
            customTripOptions.transportation.find(
                item => item.id === options.transportation
            );

        if (transportation) {
            transportationMultiplier =
                transportation.priceMultiplier;
        }
    }


    let mealPrice = 0;

    if (options.mealPlan) {

        const meal =
            customTripOptions.mealPlans.find(
                item => item.id === options.mealPlan
            );

        if (meal) {
            mealPrice = meal.dailyPrice * days;
        }
    }


    const adjustedBase =
        basePrice *
        accommodationMultiplier *
        transportationMultiplier;


    const totalPerTraveler =
        adjustedBase + mealPrice;


    const total =
        totalPerTraveler * travelers;


    return {
        basePrice,
        travelers,
        days,
        accommodationMultiplier,
        transportationMultiplier,
        mealPrice,
        totalPerTraveler,
        total,
        currency: BLACK_EAGLE_CONFIG.company.currency
    };
}


/* =========================================================
   DATA HELPERS
   ========================================================= */

function getTripById(id) {

    return tripsData.find(
        trip => trip.id === id
    ) || null;
}


function getHotelById(id) {

    return hotelsData.find(
        hotel => hotel.id === id
    ) || null;
}


function getTripsByDestination(destinationId) {

    return tripsData.filter(
        trip =>
            trip.destinationId === destinationId &&
            trip.active
    );
}


function getHotelsByDestination(destinationId) {

    return hotelsData.filter(
        hotel =>
            hotel.destinationId === destinationId &&
            hotel.active
    );
}


function getFeaturedTrips() {

    return tripsData.filter(
        trip =>
            trip.featured &&
            trip.active
    );
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchDestinations(keyword) {

    if (!keyword) {
        return destinationsData.filter(
            destination => destination.active
        );
    }


    const searchTerm =
        String(keyword)
            .trim()
            .toLowerCase();


    return destinationsData.filter(destination => {

        const values = [
            destination.nameAr,
            destination.nameEn,
            destination.countryAr,
            destination.countryEn,
            destination.cityAr,
            destination.cityEn
        ];


        return values.some(value =>
            String(value)
                .toLowerCase()
                .includes(searchTerm)
        );

    });
}


function searchTrips(keyword) {

    if (!keyword) {
        return tripsData.filter(
            trip => trip.active
        );
    }


    const searchTerm =
        String(keyword)
            .trim()
            .toLowerCase();


    return tripsData.filter(trip => {

        const values = [
            trip.titleAr,
            trip.titleEn,
            trip.descriptionAr,
            trip.descriptionEn
        ];


        return values.some(value =>
            String(value)
                .toLowerCase()
                .includes(searchTerm)
        );

    });
}

/* =========================================================
   CUSTOMERS
   ========================================================= */

const customersData = [

    {
        id: "CUS-0001",
        customerNumber: "10001",

        nameAr: "أحمد محمد",
        nameEn: "Ahmed Mohamed",

        phone: "+20 100 000 0000",
        email: "ahmed@example.com",

        nationality: "EG",
        passportNumber: "",
        address: "",

        customerType: "individual",

        totalBookings: 0,
        totalPaid: 0,
        totalDue: 0,

        currency: "USD",

        status: "active",

        createdAt: "2026-09-03T10:00:00"
    }

];


/* =========================================================
   SUPPLIERS
   ========================================================= */

const suppliersData = [

    {
        id: "SUP-0001",
        supplierNumber: "20001",

        nameAr: "شركة الطيران الدولية",
        nameEn: "International Airlines",

        phone: "",
        email: "",

        serviceType: "airline",

        currency: "USD",

        totalPurchases: 0,
        totalPaid: 0,
        totalDue: 0,

        status: "active",

        createdAt: "2026-09-03T10:00:00"
    },

    {
        id: "SUP-0002",
        supplierNumber: "20002",

        nameAr: "فنادق وشركات سياحية",
        nameEn: "Hotels & Tourism Suppliers",

        phone: "",
        email: "",

        serviceType: "hotel",

        currency: "USD",

        totalPurchases: 0,
        totalPaid: 0,
        totalDue: 0,

        status: "active",

        createdAt: "2026-09-03T10:00:00"
    }

];


/* =========================================================
   BOOKINGS
   ========================================================= */

const bookingsData = [

    {
        id: "BK-0001",

        bookingNumber: "BE-2026-0001",

        customerId: "CUS-0001",

        type: "trip",

        destinationId: "dest-001",

        tripId: "trip-001",

        travelDate: "",
        returnDate: "",

        travelers: 2,

        adults: 2,
        children: 0,
        infants: 0,

        status: "pending",

        paymentStatus: "unpaid",

        currency: "USD",

        subtotal: 998,
        discount: 0,
        tax: 0,
        total: 998,

        paidAmount: 0,
        dueAmount: 998,

        notes: "",

        createdAt: "2026-09-03T10:30:00",
        updatedAt: "2026-09-03T10:30:00"
    }

];


/* =========================================================
   BOOKING ITEMS
   ========================================================= */

const bookingItemsData = [

    {
        id: "BI-0001",

        bookingId: "BK-0001",

        type: "trip",

        referenceId: "trip-001",

        descriptionAr: "رحلة إسطنبول العائلية",
        descriptionEn: "Family Istanbul Trip",

        quantity: 2,

        unitPrice: 499,

        discount: 0,

        tax: 0,

        total: 998,

        currency: "USD"
    }

];


/* =========================================================
   PAYMENTS
   ========================================================= */

const paymentsData = [

    /*
     * مثال:
     * {
     *     id: "PAY-0001",
     *     paymentNumber: "PM-2026-0001",
     *     bookingId: "BK-0001",
     *     customerId: "CUS-0001",
     *     amount: 500,
     *     method: "cash",
     *     status: "completed",
     *     currency: "USD",
     *     date: "2026-09-03T12:00:00",
     *     reference: "",
     *     notes: ""
     * }
     */

];


/* =========================================================
   EXPENSES
   ========================================================= */

const expensesData = [

    /*
     * المصروفات سيتم ربطها لاحقًا
     * بالحجز أو المورد أو الحساب المحاسبي.
     *
     * مثال:
     *
     * {
     *     id: "EXP-0001",
     *     expenseNumber: "EX-2026-0001",
     *     bookingId: "BK-0001",
     *     supplierId: "SUP-0001",
     *
     *     category: "flight",
     *
     *     descriptionAr: "تكلفة تذاكر الطيران",
     *     descriptionEn: "Flight ticket cost",
     *
     *     amount: 700,
     *     currency: "USD",
     *
     *     paymentStatus: "unpaid",
     *
     *     paidAmount: 0,
     *     dueAmount: 700,
     *
     *     date: "2026-09-03T12:00:00",
     *
     *     notes: ""
     * }
     */

];


/* =========================================================
   BOOKING STATUS
   ========================================================= */

const bookingStatuses = {

    pending: {
        nameAr: "قيد الانتظار",
        nameEn: "Pending"
    },

    confirmed: {
        nameAr: "مؤكد",
        nameEn: "Confirmed"
    },

    completed: {
        nameAr: "مكتمل",
        nameEn: "Completed"
    },

    cancelled: {
        nameAr: "ملغي",
        nameEn: "Cancelled"
    }

};


/* =========================================================
   PAYMENT STATUS
   ========================================================= */

const paymentStatuses = {

    unpaid: {
        nameAr: "غير مدفوع",
        nameEn: "Unpaid"
    },

    partial: {
        nameAr: "مدفوع جزئيًا",
        nameEn: "Partially Paid"
    },

    paid: {
        nameAr: "مدفوع بالكامل",
        nameEn: "Paid"
    },

    refunded: {
        nameAr: "مسترد",
        nameEn: "Refunded"
    }

};


/* =========================================================
   PAYMENT METHODS
   ========================================================= */

const paymentMethods = {

    cash: {
        nameAr: "نقدي",
        nameEn: "Cash"
    },

    bank: {
        nameAr: "تحويل بنكي",
        nameEn: "Bank Transfer"
    },

    card: {
        nameAr: "بطاقة بنكية",
        nameEn: "Card"
    },

    online: {
        nameAr: "دفع إلكتروني",
        nameEn: "Online Payment"
    },

    other: {
        nameAr: "أخرى",
        nameEn: "Other"
    }

};


/* =========================================================
   ID GENERATOR
   ========================================================= */

function generateId(prefix) {

    const timestamp = Date.now();

    const random =
        Math.floor(
            Math.random() * 1000
        )
        .toString()
        .padStart(3, "0");


    return `${prefix}-${timestamp}-${random}`;
}


/* =========================================================
   BOOKING NUMBER
   ========================================================= */

function generateBookingNumber() {

    const year =
        new Date().getFullYear();

    const number =
        bookingsData.length + 1;

    return `BE-${year}-${String(number).padStart(4, "0")}`;
}


/* =========================================================
   PAYMENT NUMBER
   ========================================================= */

function generatePaymentNumber() {

    const year =
        new Date().getFullYear();

    const number =
        paymentsData.length + 1;

    return `PM-${year}-${String(number).padStart(4, "0")}`;
}


/* =========================================================
   CUSTOMER HELPERS
   ========================================================= */

function getCustomerById(id) {

    return customersData.find(
        customer =>
            customer.id === id
    ) || null;
}


function getCustomerBookings(customerId) {

    return bookingsData.filter(
        booking =>
            booking.customerId === customerId
    );
}


function getCustomerPayments(customerId) {

    return paymentsData.filter(
        payment =>
            payment.customerId === customerId
    );
}


/* =========================================================
   BOOKING HELPERS
   ========================================================= */

function getBookingById(id) {

    return bookingsData.find(
        booking =>
            booking.id === id
    ) || null;
}


function getBookingItems(bookingId) {

    return bookingItemsData.filter(
        item =>
            item.bookingId === bookingId
    );
}


function getBookingPayments(bookingId) {

    return paymentsData.filter(
        payment =>
            payment.bookingId === bookingId
    );
}


function getBookingExpenses(bookingId) {

    return expensesData.filter(
        expense =>
            expense.bookingId === bookingId
    );
}


/* =========================================================
   BOOKING PROFIT
   ========================================================= */

function calculateBookingProfit(bookingId) {

    const booking =
        getBookingById(bookingId);

    if (!booking) {
        return null;
    }


    const expenses =
        getBookingExpenses(bookingId);


    const totalExpenses =
        expenses.reduce(
            (sum, expense) =>
                sum + Number(expense.amount || 0),
            0
        );


    const revenue =
        Number(booking.total || 0);


    const profit =
        revenue - totalExpenses;


    const profitMargin =
        revenue > 0
            ? (profit / revenue) * 100
            : 0;


    return {

        bookingId,

        revenue,

        expenses: totalExpenses,

        profit,

        profitMargin,

        currency:
            booking.currency ||
            BLACK_EAGLE_CONFIG.company.currency

    };
}


/* =========================================================
   PAYMENT SUMMARY
   ========================================================= */

function calculateBookingPaymentSummary(bookingId) {

    const booking =
        getBookingById(bookingId);

    if (!booking) {
        return null;
    }


    const payments =
        getBookingPayments(bookingId);


    const paid =
        payments
            .filter(
                payment =>
                    payment.status === "completed"
            )
            .reduce(
                (sum, payment) =>
                    sum + Number(payment.amount || 0),
                0
            );


    const total =
        Number(booking.total || 0);


    const due =
        Math.max(
            total - paid,
            0
        );


    let status = "unpaid";


    if (paid >= total && total > 0) {
        status = "paid";
    }

    else if (paid > 0) {
        status = "partial";
    }


    return {

        bookingId,

        total,

        paid,

        due,

        status,

        currency:
            booking.currency ||
            BLACK_EAGLE_CONFIG.company.currency

    };
}

/* =========================================================
   BLACK EAGLE TRAVEL
   DATA.JS
   PART 4 / 4
   ACCOUNTING DATA & REPORTING
   ========================================================= */


/* =========================================================
   ACCOUNTING CHART OF ACCOUNTS
   ========================================================= */

const accountsData = [

    /* الأصول */

    {
        id: "ACC-1000",
        code: "1000",
        nameAr: "الأصول",
        nameEn: "Assets",
        type: "asset",
        parentId: null,
        level: 1,
        active: true
    },

    {
        id: "ACC-1100",
        code: "1100",
        nameAr: "الصندوق",
        nameEn: "Cash",
        type: "asset",
        parentId: "ACC-1000",
        level: 2,
        active: true
    },

    {
        id: "ACC-1200",
        code: "1200",
        nameAr: "البنك",
        nameEn: "Bank",
        type: "asset",
        parentId: "ACC-1000",
        level: 2,
        active: true
    },

    {
        id: "ACC-1300",
        code: "1300",
        nameAr: "العملاء",
        nameEn: "Accounts Receivable",
        type: "asset",
        parentId: "ACC-1000",
        level: 2,
        active: true
    },


    /* الالتزامات */

    {
        id: "ACC-2000",
        code: "2000",
        nameAr: "الالتزامات",
        nameEn: "Liabilities",
        type: "liability",
        parentId: null,
        level: 1,
        active: true
    },

    {
        id: "ACC-2100",
        code: "2100",
        nameAr: "الموردون",
        nameEn: "Accounts Payable",
        type: "liability",
        parentId: "ACC-2000",
        level: 2,
        active: true
    },


    /* حقوق الملكية */

    {
        id: "ACC-3000",
        code: "3000",
        nameAr: "حقوق الملكية",
        nameEn: "Equity",
        type: "equity",
        parentId: null,
        level: 1,
        active: true
    },

    {
        id: "ACC-3100",
        code: "3100",
        nameAr: "رأس المال",
        nameEn: "Capital",
        type: "equity",
        parentId: "ACC-3000",
        level: 2,
        active: true
    },


    /* الإيرادات */

    {
        id: "ACC-4000",
        code: "4000",
        nameAr: "الإيرادات",
        nameEn: "Revenue",
        type: "revenue",
        parentId: null,
        level: 1,
        active: true
    },

    {
        id: "ACC-4100",
        code: "4100",
        nameAr: "إيرادات الرحلات",
        nameEn: "Trip Revenue",
        type: "revenue",
        parentId: "ACC-4000",
        level: 2,
        active: true
    },

    {
        id: "ACC-4200",
        code: "4200",
        nameAr: "إيرادات الفنادق",
        nameEn: "Hotel Revenue",
        type: "revenue",
        parentId: "ACC-4000",
        level: 2,
        active: true
    },

    {
        id: "ACC-4300",
        code: "4300",
        nameAr: "إيرادات التأشيرات",
        nameEn: "Visa Revenue",
        type: "revenue",
        parentId: "ACC-4000",
        level: 2,
        active: true
    },


    /* المصروفات */

    {
        id: "ACC-5000",
        code: "5000",
        nameAr: "المصروفات",
        nameEn: "Expenses",
        type: "expense",
        parentId: null,
        level: 1,
        active: true
    },

    {
        id: "ACC-5100",
        code: "5100",
        nameAr: "تكلفة تذاكر الطيران",
        nameEn: "Flight Costs",
        type: "expense",
        parentId: "ACC-5000",
        level: 2,
        active: true
    },

    {
        id: "ACC-5200",
        code: "5200",
        nameAr: "تكلفة الفنادق",
        nameEn: "Hotel Costs",
        type: "expense",
        parentId: "ACC-5000",
        level: 2,
        active: true
    },

    {
        id: "ACC-5300",
        code: "5300",
        nameAr: "المواصلات",
        nameEn: "Transportation Costs",
        type: "expense",
        parentId: "ACC-5000",
        level: 2,
        active: true
    },

    {
        id: "ACC-5400",
        code: "5400",
        nameAr: "المصروفات التشغيلية",
        nameEn: "Operating Expenses",
        type: "expense",
        parentId: "ACC-5000",
        level: 2,
        active: true
    }

];


/* =========================================================
   INVOICES
   ========================================================= */

const invoicesData = [

    {
        id: "INV-0001",

        invoiceNumber: "INV-2026-0001",

        bookingId: "BK-0001",

        customerId: "CUS-0001",

        issueDate: "2026-09-03",

        dueDate: "2026-09-10",

        status: "issued",

        currency: "USD",

        subtotal: 998,

        discount: 0,

        tax: 0,

        total: 998,

        paidAmount: 0,

        dueAmount: 998,

        items: [
            {
                descriptionAr: "رحلة إسطنبول العائلية",
                descriptionEn: "Family Istanbul Trip",
                quantity: 2,
                unitPrice: 499,
                total: 998
            }
        ],

        notes: ""
    }

];


/* =========================================================
   ACCOUNTING JOURNAL ENTRIES
   ========================================================= */

const journalEntriesData = [

    /*
     * القيود ستتم إضافتها تلقائيًا
     * عند تنفيذ عمليات مالية.
     *
     * مثال:
     *
     * {
     *     id: "JE-0001",
     *     entryNumber: "JE-2026-0001",
     *     date: "2026-09-03",
     *     descriptionAr: "إثبات فاتورة حجز",
     *     descriptionEn: "Booking invoice entry",
     *     referenceType: "invoice",
     *     referenceId: "INV-0001",
     *
     *     lines: [
     *
     *         {
     *             accountId: "ACC-1300",
     *             debit: 998,
     *             credit: 0
     *         },
     *
     *         {
     *             accountId: "ACC-4100",
     *             debit: 0,
     *             credit: 998
     *         }
     *
     *     ]
     * }
     */

];


/* =========================================================
   ACCOUNTING HELPERS
   ========================================================= */

function getAccountById(id) {

    return accountsData.find(
        account => account.id === id
    ) || null;
}


function getAccountByCode(code) {

    return accountsData.find(
        account => account.code === String(code)
    ) || null;
}


function getAccountsByType(type) {

    return accountsData.filter(
        account =>
            account.type === type &&
            account.active
    );
}


/* =========================================================
   INVOICE HELPERS
   ========================================================= */

function getInvoiceById(id) {

    return invoicesData.find(
        invoice =>
            invoice.id === id
    ) || null;
}


function getInvoiceByBookingId(bookingId) {

    return invoicesData.find(
        invoice =>
            invoice.bookingId === bookingId
    ) || null;
}


function generateInvoiceNumber() {

    const year =
        new Date().getFullYear();

    const number =
        invoicesData.length + 1;

    return `INV-${year}-${String(number).padStart(4, "0")}`;
}


/* =========================================================
   JOURNAL ENTRY NUMBER
   ========================================================= */

function generateJournalEntryNumber() {

    const year =
        new Date().getFullYear();

    const number =
        journalEntriesData.length + 1;

    return `JE-${year}-${String(number).padStart(4, "0")}`;
}


/* =========================================================
   FINANCIAL TOTALS
   ========================================================= */

function calculateTotalRevenue() {

    return bookingsData
        .filter(
            booking =>
                booking.status !== "cancelled"
        )
        .reduce(
            (total, booking) =>
                total + Number(booking.total || 0),
            0
        );
}


function calculateTotalPaid() {

    return paymentsData
        .filter(
            payment =>
                payment.status === "completed"
        )
        .reduce(
            (total, payment) =>
                total + Number(payment.amount || 0),
            0
        );
}


function calculateTotalExpenses() {

    return expensesData
        .reduce(
            (total, expense) =>
                total + Number(expense.amount || 0),
            0
        );
}


function calculateTotalDue() {

    return bookingsData
        .filter(
            booking =>
                booking.status !== "cancelled"
        )
        .reduce(
            (total, booking) =>
                total + Number(booking.dueAmount || 0),
            0
        );
}


/* =========================================================
   FINANCIAL DASHBOARD SUMMARY
   ========================================================= */

function getFinancialSummary() {

    const revenue =
        calculateTotalRevenue();

    const paid =
        calculateTotalPaid();

    const expenses =
        calculateTotalExpenses();

    const due =
        calculateTotalDue();

    const profit =
        revenue - expenses;


    const profitMargin =
        revenue > 0
            ? (profit / revenue) * 100
            : 0;


    return {

        revenue,

        paid,

        due,

        expenses,

        profit,

        profitMargin,

        bookings:
            bookingsData.length,

        customers:
            customersData.length,

        suppliers:
            suppliersData.length,

        invoices:
            invoicesData.length,

        currency:
            BLACK_EAGLE_CONFIG.company.currency

    };
}


/* =========================================================
   CUSTOMER BALANCES
   ========================================================= */

function calculateCustomerBalance(customerId) {

    const customerBookings =
        getCustomerBookings(customerId);


    const total =
        customerBookings.reduce(
            (sum, booking) =>
                sum + Number(booking.total || 0),
            0
        );


    const paid =
        customerBookings.reduce(
            (sum, booking) =>
                sum + Number(booking.paidAmount || 0),
            0
        );


    return {

        customerId,

        total,

        paid,

        due: Math.max(
            total - paid,
            0
        ),

        currency:
            BLACK_EAGLE_CONFIG.company.currency

    };
}


/* =========================================================
   SUPPLIER BALANCES
   ========================================================= */

function calculateSupplierBalance(supplierId) {

    const supplierExpenses =
        expensesData.filter(
            expense =>
                expense.supplierId === supplierId
        );


    const total =
        supplierExpenses.reduce(
            (sum, expense) =>
                sum + Number(expense.amount || 0),
            0
        );


    const paid =
        supplierExpenses.reduce(
            (sum, expense) =>
                sum + Number(expense.paidAmount || 0),
            0
        );


    return {

        supplierId,

        total,

        paid,

        due: Math.max(
            total - paid,
            0
        ),

        currency:
            BLACK_EAGLE_CONFIG.company.currency

    };
}


/* =========================================================
   DASHBOARD STATISTICS
   ========================================================= */

function getDashboardStatistics() {

    const summary =
        getFinancialSummary();


    const confirmedBookings =
        bookingsData.filter(
            booking =>
                booking.status === "confirmed"
        ).length;


    const pendingBookings =
        bookingsData.filter(
            booking =>
                booking.status === "pending"
        ).length;


    const completedBookings =
        bookingsData.filter(
            booking =>
                booking.status === "completed"
        ).length;


    const cancelledBookings =
        bookingsData.filter(
            booking =>
                booking.status === "cancelled"
        ).length;


    return {

        ...summary,

        confirmedBookings,

        pendingBookings,

        completedBookings,

        cancelledBookings

    };
}


/* =========================================================
   LOCAL STORAGE KEYS
   ========================================================= */

const STORAGE_KEYS = {

    customers:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}customers`,

    suppliers:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}suppliers`,

    bookings:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}bookings`,

    bookingItems:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}booking_items`,

    payments:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}payments`,

    expenses:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}expenses`,

    invoices:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}invoices`,

    journalEntries:
        `${BLACK_EAGLE_CONFIG.system.storagePrefix}journal_entries`

};


/* =========================================================
   SAFE STORAGE HELPERS
   ========================================================= */

function saveDataToStorage(key, data) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(data)
        );

        return true;

    } catch (error) {

        console.error(
            "Black Eagle Storage Error:",
            error
        );

        return false;
    }
}


function loadDataFromStorage(key, fallback = []) {

    try {

        const data =
            localStorage.getItem(key);


        if (!data) {
            return fallback;
        }


        return JSON.parse(data);

    } catch (error) {

        console.error(
            "Black Eagle Storage Read Error:",
            error
        );

        return fallback;
    }
}


/* =========================================================
   INITIAL DATA STORAGE
   ========================================================= */

function initializeBlackEagleData() {

    if (!localStorage.getItem(STORAGE_KEYS.customers)) {
        saveDataToStorage(
            STORAGE_KEYS.customers,
            customersData
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.suppliers)) {
        saveDataToStorage(
            STORAGE_KEYS.suppliers,
            suppliersData
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.bookings)) {
        saveDataToStorage(
            STORAGE_KEYS.bookings,
            bookingsData
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.bookingItems)) {
        saveDataToStorage(
            STORAGE_KEYS.bookingItems,
            bookingItemsData
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.payments)) {
        saveDataToStorage(
            STORAGE_KEYS.payments,
            paymentsData
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.expenses)) {
        saveDataToStorage(
            STORAGE_KEYS.expenses,
            expensesData
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.invoices)) {
        saveDataToStorage(
            STORAGE_KEYS.invoices,
            invoicesData
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.journalEntries)) {
        saveDataToStorage(
            STORAGE_KEYS.journalEntries,
            journalEntriesData
        );
    }
}


/* =========================================================
   FORMAT CURRENCY
   ========================================================= */

function formatCurrency(
    amount,
    currency = BLACK_EAGLE_CONFIG.company.currency
) {

    const numericAmount =
        Number(amount) || 0;


    return new Intl.NumberFormat(
        "en-US",
        {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }
    ).format(numericAmount)
        + " "
        + (
            currency === "USD"
                ? "$"
                : currency
        );
}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(date) {

    if (!date) {
        return "";
    }


    const parsedDate =
        new Date(date);


    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }


    return new Intl.DateTimeFormat(
        "ar-EG",
        {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).format(parsedDate);
}


/* =========================================================
   INITIALIZE
   ========================================================= */

initializeBlackEagleData();


/* =========================================================
   DATA.JS READY
   ========================================================= */

console.log(
    "Black Eagle Travel Data System initialized successfully."
);
