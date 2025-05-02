// Translations for English and Arabic
const translations = {
    en: {
        siteTitle: "Company Site Locator",
        search: "Search locations...",
        filterByType: "Filter by Type",
        filterByGovernorate: "Filter by Governorate",
        resetFilters: "Reset Filters",
        locations: "Locations",
        adminLogin: "Admin Login",
        username: "Username",
        password: "Password",
        login: "Login",
        logout: "Logout",
        viewDetails: "View Details",
        getDirections: "Get Directions",
        siteName: "Site Name",
        siteType: "Site Type",
        address: "Address",
        governorate: "Governorate",
        coordinates: "Coordinates",
        contactPerson: "Contact Person",
        contactInfo: "Contact Info",
        workingHours: "Working Hours",
        close: "Close",
        addLocation: "Add New Location",
        editLocation: "Edit Location",
        deleteLocation: "Delete Location",
        save: "Save",
        cancel: "Cancel",
        adminPanel: "Admin Panel",
        manageLocations: "Manage Locations",
        latitude: "Latitude",
        longitude: "Longitude",
        phone: "Phone",
        email: "Email",
        copyright: "© 2025 Company Name. All Rights Reserved.",
        feedMill: "Feed Mill",
        hatchery: "Hatchery",
        broilerFarm: "Broiler Farm",
        warehouse: "Warehouse",
        headOffice: "Head Office",
        processingPlant: "Processing Plant",
        distributionCenter: "Distribution Center",
        breederFarm: "Breeder Farm",
        gpFarm: "GP Farm",
        researchFacility: "Research Facility",
        eggLayerFarm: "Egg Layer Farm",
        confirmDelete: "Are you sure you want to delete this location?",
        yes: "Yes",
        no: "No",
        successAdd: "Location added successfully!",
        successEdit: "Location updated successfully!",
        successDelete: "Location deleted successfully!",
        error: "An error occurred. Please try again."
    },
    ar: {
        siteTitle: "محدد مواقع الشركة",
        search: "البحث عن المواقع...",
        filterByType: "تصفية حسب النوع",
        filterByGovernorate: "تصفية حسب المحافظة",
        resetFilters: "إعادة ضبط الفلاتر",
        locations: "المواقع",
        adminLogin: "تسجيل دخول المسؤول",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        login: "تسجيل الدخول",
        logout: "تسجيل الخروج",
        viewDetails: "عرض التفاصيل",
        getDirections: "الحصول على الاتجاهات",
        siteName: "اسم الموقع",
        siteType: "نوع الموقع",
        address: "العنوان",
        governorate: "المحافظة",
        coordinates: "الإحداثيات",
        contactPerson: "الشخص المسؤول",
        contactInfo: "معلومات الاتصال",
        workingHours: "ساعات العمل",
        close: "إغلاق",
        addLocation: "إضافة موقع جديد",
        editLocation: "تعديل الموقع",
        deleteLocation: "حذف الموقع",
        save: "حفظ",
        cancel: "إلغاء",
        adminPanel: "لوحة الإدارة",
        manageLocations: "إدارة المواقع",
        latitude: "خط العرض",
        longitude: "خط الطول",
        phone: "الهاتف",
        breederFarm: "مزرعة أمهات",
        gpFarm: "مزرعة جدود",
        email: "البريد الإلكتروني",
        copyright: "© 2025 اسم الشركة. جميع الحقوق محفوظة.",
        feedMill: "مطحنة أعلاف",
        hatchery: "مفرخة",
        broilerFarm: "مزرعة دواجن",
        warehouse: "مستودع",
        headOffice: "المكتب الرئيسي",
        processingPlant: "مصنع معالجة",
        distributionCenter: "مركز توزيع",
        researchFacility: "منشأة بحثية",
        eggLayerFarm: "مزرعة دجاج بياض",
        confirmDelete: "هل أنت متأكد أنك تريد حذف هذا الموقع؟",
        yes: "نعم",
        no: "لا",
        successAdd: "تمت إضافة الموقع بنجاح!",
        successEdit: "تم تحديث الموقع بنجاح!",
        successDelete: "تم حذف الموقع بنجاح!",
        error: "حدث خطأ. يرجى المحاولة مرة أخرى."
    }
};

// Egyptian Governorates
const governorates = [
    "Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", 
    "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", 
    "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", 
    "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", 
    "Sohag", "South Sinai", "Suez"
];

// Egyptian Governorates in Arabic
const governoratesAr = [
    "الإسكندرية", "أسوان", "أسيوط", "البحيرة", "بني سويف", "القاهرة",
    "الدقهلية", "دمياط", "الفيوم", "الغربية", "الجيزة", "الإسماعيلية",
    "كفر الشيخ", "الأقصر", "مطروح", "المنيا", "المنوفية", "الوادي الجديد",
    "شمال سيناء", "بورسعيد", "القليوبية", "قنا", "البحر الأحمر", "الشرقية",
    "سوهاج", "جنوب سيناء", "السويس"
];

// Site Types
const siteTypes = [
    "Feed Mill", "Hatchery", "Broiler Farm", "Warehouse", 
    "Head Office", "Processing Plant", "Distribution Center", "Research Facility",
    "Breeder Farm", "GP Farm", "Egg Layer Farm"
];

// Site Types in Arabic
const siteTypesAr = [
    "مصنع أعلاف", "معمل تفريخ", "مزرعة تسمين", "مركز توزيع",
    "المكتب الرئيسي", "مصنع", "جراش", "معمل بيطري",
    "مزرعة أمهات", "مزرعة جدود", "مزرعة دجاج بياض"
];

// Site Type Icons (Font Awesome)
const siteTypeIcons = {
    "Feed Mill": "fa-industry",
    "Hatchery": "fa-egg",
    "Broiler Farm": "fa-drumstick-bite",
    "Warehouse": "fa-warehouse",
    "Head Office": "fa-building",
    "Processing Plant": "fa-cogs",
    "Distribution Center": "fa-truck",
    "Research Facility": "fa-flask",
    "Breeder Farm": "fa-feather",
    "GP Farm": "fa-feather-alt",
    "Egg Layer Farm": "fa-egg"
};

// Site Type Colors
const siteTypeColors = {
    "Feed Mill": "#e74c3c",
    "Hatchery": "#3498db",
    "Broiler Farm": "#ff4e00",
    "Warehouse": "#f39c12",
    "Head Office": "#9b59b6",
    "Processing Plant": "#1abc9c",
    "Distribution Center": "#e67e22",
    "Research Facility": "#34495e",
    "Breeder Farm": "#8e44ad",
    "GP Farm": "#16a085",
    "Egg Layer Farm": "#d35400"
};
