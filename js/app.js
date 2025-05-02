// Main application functionality
let currentLanguage = 'en';
let isAdmin = false;
let currentEditId = null;

// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resetFiltersButton = document.getElementById('reset-filters');
const typeFiltersContainer = document.getElementById('type-filters');
const governorateFiltersContainer = document.getElementById('governorate-filters');
const locationsList = document.getElementById('locations-list');
const languageToggle = document.getElementById('language-toggle');
const adminLoginButton = document.getElementById('admin-login');
const loginModal = document.getElementById('login-modal');
const locationModal = document.getElementById('location-modal');
const loginForm = document.getElementById('login-form');
const rtlStylesheet = document.getElementById('rtl-stylesheet');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    initMap();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize filters
    initializeFilters();
    
    // Initialize location list
    updateLocationsList(loadLocations());
    
    // Check if user is already logged in
    checkAdminLogin();
    
    // Set default language
    setLanguage('en');
});

// Set up event listeners
function setupEventListeners() {
    // Search
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // Reset filters
    resetFiltersButton.addEventListener('click', resetFilters);
    
    // Language toggle
    languageToggle.addEventListener('click', toggleLanguage);
    
    // Admin login
    adminLoginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });
    
    // Login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin();
    });
    
    // Close modals when clicking on X
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            locationModal.style.display = 'none';
            document.getElementById('admin-panel')?.remove();
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === locationModal) {
            locationModal.style.display = 'none';
        }
        const adminPanel = document.getElementById('admin-panel');
        if (adminPanel && event.target === adminPanel) {
            adminPanel.remove();
        }
    });
}

// Initialize filters
function initializeFilters() {
    // Type filters
    let typeFiltersHTML = `
        <div class="filter-option active" data-type="all">
            <span data-lang="en">All Types</span>
            <span data-lang="ar">كل الأنواع</span>
        </div>
    `;
    
    siteTypes.forEach(type => {
        typeFiltersHTML += `
            <div class="filter-option" data-type="${type}">
                <span data-lang="en">${type}</span>
                <span data-lang="ar">${getArabicSiteType(type)}</span>
            </div>
        `;
    });
    
    typeFiltersContainer.innerHTML = typeFiltersHTML;
    
    // Governorate filters
    let governorateFiltersHTML = `
        <div class="filter-option active" data-governorate="all">
            <span data-lang="en">All Governorates</span>
            <span data-lang="ar">كل المحافظات</span>
        </div>
    `;
    
    governorates.forEach(governorate => {
        governorateFiltersHTML += `
            <div class="filter-option" data-governorate="${governorate}">
                <span data-lang="en">${governorate}</span>
                <span data-lang="ar">${getArabicGovernorate(governorate)}</span>
            </div>
        `;
    });
    
    governorateFiltersContainer.innerHTML = governorateFiltersHTML;
    
    // Add event listeners to filter options
    document.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', function() {
            // Deactivate all options in the same group
            const isTypeFilter = this.hasAttribute('data-type');
            const container = isTypeFilter ? typeFiltersContainer : governorateFiltersContainer;
            
            container.querySelectorAll('.filter-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Activate selected option
            this.classList.add('active');
            
            // Apply filters
            applyFilters();
        });
    });
}

// Apply filters
function applyFilters() {
    const activeTypeFilter = typeFiltersContainer.querySelector('.filter-option.active');
    const activeGovernorateFilter = governorateFiltersContainer.querySelector('.filter-option.active');
    
    const typeFilter = activeTypeFilter.getAttribute('data-type');
    const governorateFilter = activeGovernorateFilter.getAttribute('data-governorate');
    const searchText = searchInput.value;
    
    // Apply filters to map
    filterMarkers(
        typeFilter === 'all' ? null : typeFilter,
        governorateFilter === 'all' ? null : governorateFilter,
        searchText
    );
}

// Perform search
function performSearch() {
    applyFilters();
}

// Reset filters
function resetFilters() {
    // Reset type filter
    typeFiltersContainer.querySelectorAll('.filter-option').forEach(option => {
        option.classList.remove('active');
    });
    typeFiltersContainer.querySelector('[data-type="all"]').classList.add('active');
    
    // Reset governorate filter
    governorateFiltersContainer.querySelectorAll('.filter-option').forEach(option => {
        option.classList.remove('active');
    });
    governorateFiltersContainer.querySelector('[data-governorate="all"]').classList.add('active');
    
    // Clear search input
    searchInput.value = '';
    
    // Apply filters (reset)
    applyFilters();
}

// Update locations list
function updateLocationsList(locations) {
    let listHTML = '';
    
    if (locations.length === 0) {
        listHTML = `
            <li class="no-results">
                <p data-lang="en">No locations found</p>
                <p data-lang="ar">لم يتم العثور على مواقع</p>
            </li>
        `;
    } else {
        locations.forEach(location => {
            listHTML += `
                <li class="location-item" data-id="${location.id}">
                    <h4>${location.name}</h4>
                    <p>
                        <span data-lang="en">${location.type}</span>
                        <span data-lang="ar">${getArabicSiteType(location.type)}</span>
                        - ${location.governorate}
                    </p>
                </li>
            `;
        });
    }
    
    locationsList.innerHTML = listHTML;
    
    // Add event listeners to location items
    document.querySelectorAll('.location-item').forEach(item => {
        item.addEventListener('click', function() {
            const locationId = parseInt(this.getAttribute('data-id'));
            flyToMarker(locationId);
        });
    });
    
    // Apply current language
    applyLanguage(currentLanguage);
}

// Show location details
function showLocationDetails(locationId) {
    const location = loadLocations().find(loc => loc.id === locationId);
    if (!location) return;
    
    const detailsContainer = document.getElementById('location-details');
    
    let detailsHTML = `
        <h2>${location.name}</h2>
        <div class="detail-item">
            <strong data-lang="en">Type:</strong>
            <strong data-lang="ar">النوع:</strong>
            <span data-lang="en">${location.type}</span>
            <span data-lang="ar">${getArabicSiteType(location.type)}</span>
        </div>
        <div class="detail-item">
            <strong data-lang="en">Address:</strong>
            <strong data-lang="ar">العنوان:</strong>
            ${location.address}
        </div>
        <div class="detail-item">
            <strong data-lang="en">Governorate:</strong>
            <strong data-lang="ar">المحافظة:</strong>
            <span data-lang="en">${location.governorate}</span>
            <span data-lang="ar">${getArabicGovernorate(location.governorate)}</span>
        </div>
        <div class="detail-item">
            <strong data-lang="en">Coordinates:</strong>
            <strong data-lang="ar">الإحداثيات:</strong>
            ${location.coordinates.lat}, ${location.coordinates.lng}
        </div>
    `;
    
    if (location.contactPerson) {
        detailsHTML += `
            <div class="detail-item">
                <strong data-lang="en">Contact Person:</strong>
                <strong data-lang="ar">الشخص المسؤول:</strong>
                ${location.contactPerson}
            </div>
        `;
    }
    
    if (location.contactInfo) {
        if (location.contactInfo.phone) {
            detailsHTML += `
                <div class="detail-item">
                    <strong data-lang="en">Phone:</strong>
                    <strong data-lang="ar">الهاتف:</strong>
                    ${location.contactInfo.phone}
                </div>
            `;
        }
        
        if (location.contactInfo.email) {
            detailsHTML += `
                <div class="detail-item">
                    <strong data-lang="en">Email:</strong>
                    <strong data-lang="ar">البريد الإلكتروني:</strong>
                    ${location.contactInfo.email}
                </div>
            `;
        }
    }
    
    if (location.workingHours) {
        detailsHTML += `
            <div class="detail-item">
                <strong data-lang="en">Working Hours:</strong>
                <strong data-lang="ar">ساعات العمل:</strong>
                ${location.workingHours}
            </div>
        `;
    }
    
    detailsHTML += `
        <div class="action-buttons">
            <button class="btn get-directions" data-lat="${location.coordinates.lat}" data-lng="${location.coordinates.lng}">
                <span data-lang="en">Get Directions</span>
                <span data-lang="ar">الحصول على الاتجاهات</span>
            </button>
            ${isAdmin ? `
                <button class="btn edit-location" data-id="${location.id}">
                    <span data-lang="en">Edit</span>
                    <span data-lang="ar">تعديل</span>
                </button>
                <button class="btn delete-location" data-id="${location.id}">
                    <span data-lang="en">Delete</span>
                    <span data-lang="ar">حذف</span>
                </button>
            ` : ''}
        </div>
    `;
    
    detailsContainer.innerHTML = detailsHTML;
    
    // Add event listeners to buttons
    detailsContainer.querySelector('.get-directions').addEventListener('click', function() {
        const lat = this.getAttribute('data-lat');
        const lng = this.getAttribute('data-lng');
        openDirections(lat, lng);
    });
    
    if (isAdmin) {
        detailsContainer.querySelector('.edit-location').addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            editLocation(id);
            locationModal.style.display = 'none';
        });
        
        detailsContainer.querySelector('.delete-location').addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            if (confirm(translations[currentLanguage].confirmDelete)) {
                deleteLocation(id);
                locationModal.style.display = 'none';
            }
        });
    }
    
    // Apply current language
    applyLanguage(currentLanguage);
    
    // Show modal
    locationModal.style.display = 'block';
}

// Toggle language
function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
}

// Set language
function setLanguage(language) {
    currentLanguage = language;
    
    // Update search placeholder
    searchInput.placeholder = translations[language].search;
    
    // Update RTL stylesheet
    if (language === 'ar') {
        rtlStylesheet.removeAttribute('disabled');
        document.dir = 'rtl';
    } else {
        rtlStylesheet.setAttribute('disabled', 'disabled');
        document.dir = 'ltr';
    }
    
    // Apply language to all elements
    applyLanguage(language);
}

// Apply language to all elements
function applyLanguage(language) {
    // Hide all language elements
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show elements for current language
    document.querySelectorAll(`[data-lang="${language}"]`).forEach(el => {
        el.style.display = 'inline-block';
    });
}

// Handle login
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Set admin status
        isAdmin = true;
        
        // Store admin status in session storage
        sessionStorage.setItem('isAdmin', 'true');
        
        // Update admin button
        updateAdminButton();
        
        // Close login modal
        loginModal.style.display = 'none';
        
        // Show admin panel
        showAdminPanel();
    } else {
        alert(translations[currentLanguage].error);
    }
}

// Check if user is already logged in
function checkAdminLogin() {
    if (sessionStorage.getItem('isAdmin') === 'true') {
        isAdmin = true;
        updateAdminButton();
    }
}

// Update admin button
function updateAdminButton() {
    if (isAdmin) {
        adminLoginButton.innerHTML = `
            <span data-lang="en">Admin Panel</span>
            <span data-lang="ar">لوحة الإدارة</span>
        `;
        // Remove old event listeners and add new one
        adminLoginButton.onclick = null;
        adminLoginButton.addEventListener('click', function() {
            showAdminPanel();
        });
    } else {
        adminLoginButton.innerHTML = `
            <span data-lang="en">Admin Login</span>
            <span data-lang="ar">تسجيل دخول المسؤول</span>
        `;
        // Remove old event listeners and add new one
        adminLoginButton.onclick = null;
        adminLoginButton.addEventListener('click', function() {
            showLoginModal();
        });
    }
    
    // Apply current language
    applyLanguage(currentLanguage);
}

// Show login modal
function showLoginModal() {
    loginModal.style.display = 'block';
}

// Show admin panel
function showAdminPanel() {
    // Remove existing admin panel if it exists
    const existingPanel = document.getElementById('admin-panel');
    if (existingPanel) {
        existingPanel.remove();
    }
    
    // Create admin panel
    const adminPanel = document.createElement('div');
    adminPanel.id = 'admin-panel';
    adminPanel.className = 'admin-panel';
    adminPanel.style.display = 'block'; // Ensure it's visible
    
    // Admin panel header
    adminPanel.innerHTML = `
        <div class="admin-header">
            <h2 class="admin-title">
                <span data-lang="en">Admin Panel</span>
                <span data-lang="ar">لوحة الإدارة</span>
            </h2>
            <span class="admin-close">&times;</span>
        </div>
        <div class="admin-actions">
            <button id="add-location" class="btn">
                <span data-lang="en">Add New Location</span>
                <span data-lang="ar">إضافة موقع جديد</span>
            </button>
            <button id="admin-logout" class="btn">
                <span data-lang="en">Logout</span>
                <span data-lang="ar">تسجيل الخروج</span>
            </button>
        </div>
        <div class="admin-form">
            <h3 data-lang="en">Manage Locations</h3>
            <h3 data-lang="ar">إدارة المواقع</h3>
            <form id="location-form">
                <div class="form-group">
                    <label for="location-name" data-lang="en">Site Name</label>
                    <label for="location-name" data-lang="ar">اسم الموقع</label>
                    <input type="text" id="location-name" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="location-type" data-lang="en">Site Type</label>
                        <label for="location-type" data-lang="ar">نوع الموقع</label>
                        <select id="location-type" required>
                            ${siteTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="location-governorate" data-lang="en">Governorate</label>
                        <label for="location-governorate" data-lang="ar">المحافظة</label>
                        <select id="location-governorate" required>
                            ${governorates.map(gov => `<option value="${gov}">${gov}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="location-address" data-lang="en">Address</label>
                    <label for="location-address" data-lang="ar">العنوان</label>
                    <input type="text" id="location-address" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="location-lat" data-lang="en">Latitude</label>
                        <label for="location-lat" data-lang="ar">خط العرض</label>
                        <input type="number" id="location-lat" step="0.0001" required>
                    </div>
                    <div class="form-group">
                        <label for="location-lng" data-lang="en">Longitude</label>
                        <label for="location-lng" data-lang="ar">خط الطول</label>
                        <input type="number" id="location-lng" step="0.0001" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="location-contact" data-lang="en">Contact Person</label>
                    <label for="location-contact" data-lang="ar">الشخص المسؤول</label>
                    <input type="text" id="location-contact">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="location-phone" data-lang="en">Phone</label>
                        <label for="location-phone" data-lang="ar">الهاتف</label>
                        <input type="text" id="location-phone">
                    </div>
                    <div class="form-group">
                        <label for="location-email" data-lang="en">Email</label>
                        <label for="location-email" data-lang="ar">البريد الإلكتروني</label>
                        <input type="email" id="location-email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="location-hours" data-lang="en">Working Hours</label>
                    <label for="location-hours" data-lang="ar">ساعات العمل</label>
                    <input type="text" id="location-hours">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn">
                        <span data-lang="en">Save Location</span>
                        <span data-lang="ar">حفظ الموقع</span>
                    </button>
                    <button type="button" id="cancel-form" class="btn">
                        <span data-lang="en">Cancel</span>
                        <span data-lang="ar">إلغاء</span>
                    </button>
                </div>
            </form>
        </div>
    `;
    
    // Add admin panel to the body
    document.body.appendChild(adminPanel);
    
    // Add event listeners
    adminPanel.querySelector('.admin-close').addEventListener('click', function() {
        adminPanel.remove();
    });
    
    adminPanel.querySelector('#admin-logout').addEventListener('click', function() {
        isAdmin = false;
        sessionStorage.removeItem('isAdmin');
        updateAdminButton();
        adminPanel.remove();
    });
    
    adminPanel.querySelector('#add-location').addEventListener('click', function() {
        // Reset form
        resetLocationForm();
        // Show form
        adminPanel.querySelector('.admin-form').style.display = 'block';
    });
    
    adminPanel.querySelector('#cancel-form').addEventListener('click', function() {
        resetLocationForm();
    });
    
    adminPanel.querySelector('#location-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveLocation();
    });
    
    // Initially hide the form
    adminPanel.querySelector('.admin-form').style.display = 'none';
    
    // Apply current language
    applyLanguage(currentLanguage);
}

// Reset location form
function resetLocationForm() {
    const form = document.getElementById('location-form');
    form.reset();
    currentEditId = null;
    
    // Update form title
    const formTitle = document.querySelector('.admin-form h3[data-lang="en"]');
    if (formTitle) {
        formTitle.textContent = 'Add New Location';
    }
    
    const formTitleAr = document.querySelector('.admin-form h3[data-lang="ar"]');
    if (formTitleAr) {
        formTitleAr.textContent = 'إضافة موقع جديد';
    }
    
    // Apply current language
    applyLanguage(currentLanguage);
}

// Save location
function saveLocation() {
    // Get form values
    const name = document.getElementById('location-name').value;
    const type = document.getElementById('location-type').value;
    const governorate = document.getElementById('location-governorate').value;
    const address = document.getElementById('location-address').value;
    const lat = parseFloat(document.getElementById('location-lat').value);
    const lng = parseFloat(document.getElementById('location-lng').value);
    const contactPerson = document.getElementById('location-contact').value;
    const phone = document.getElementById('location-phone').value;
    const email = document.getElementById('location-email').value;
    const workingHours = document.getElementById('location-hours').value;
    
    // Get current locations
    const locations = loadLocations();
    
    // Create new location object
    const newLocation = {
        id: currentEditId || Date.now(),
        name,
        type,
        address,
        governorate,
        coordinates: {
            lat,
            lng
        },
        contactPerson,
        contactInfo: {
            phone,
            email
        },
        workingHours
    };
    
    if (currentEditId) {
        // Update existing location
        const index = locations.findIndex(loc => loc.id === currentEditId);
        if (index !== -1) {
            locations[index] = newLocation;
        }
        alert(translations[currentLanguage].successEdit);
    } else {
        // Add new location
        locations.push(newLocation);
        alert(translations[currentLanguage].successAdd);
    }
    
    // Save locations
    saveLocations(locations);
    
    // Update map
    addLocationsToMap(locations);
    
    // Update location list
    updateLocationsList(locations);
    
    // Reset form
    resetLocationForm();
    
    // Hide form
    document.querySelector('.admin-form').style.display = 'none';
}

// Edit location
function editLocation(locationId) {
    const location = loadLocations().find(loc => loc.id === locationId);
    if (!location) return;
    
    // Set current edit ID
    currentEditId = locationId;
    
    // Show admin panel if not already visible
    if (!document.getElementById('admin-panel')) {
        showAdminPanel();
    }
    
    // Show form
    document.querySelector('.admin-form').style.display = 'block';
    
    // Update form title
    const formTitle = document.querySelector('.admin-form h3[data-lang="en"]');
    if (formTitle) {
        formTitle.textContent = 'Edit Location';
    }
    
    const formTitleAr = document.querySelector('.admin-form h3[data-lang="ar"]');
    if (formTitleAr) {
        formTitleAr.textContent = 'تعديل الموقع';
    }
    
    // Fill form with location data
    document.getElementById('location-name').value = location.name;
    document.getElementById('location-type').value = location.type;
    document.getElementById('location-governorate').value = location.governorate;
    document.getElementById('location-address').value = location.address;
    document.getElementById('location-lat').value = location.coordinates.lat;
    document.getElementById('location-lng').value = location.coordinates.lng;
    document.getElementById('location-contact').value = location.contactPerson || '';
    document.getElementById('location-phone').value = location.contactInfo?.phone || '';
    document.getElementById('location-email').value = location.contactInfo?.email || '';
    document.getElementById('location-hours').value = location.workingHours || '';
    
    // Apply current language
    applyLanguage(currentLanguage);
}

// Delete location
function deleteLocation(locationId) {
    // Get current locations
    let locations = loadLocations();
    
    // Filter out the location to delete
    locations = locations.filter(loc => loc.id !== locationId);
    
    // Save locations
    saveLocations(locations);
    
    // Update map
    addLocationsToMap(locations);
    
    // Update location list
    updateLocationsList(locations);
    
    alert(translations[currentLanguage].successDelete);
}

// Function to show login modal
function showLoginModal() {
    loginModal.style.display = 'block';
}
