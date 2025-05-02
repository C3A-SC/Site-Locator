// Map initialization and functionality
let map;
let markers = [];
let markerCluster;
const egyptCenter = [26.8206, 30.8025]; // Center of Egypt
const defaultZoom = 6;

// Initialize the map
function initMap() {
    // Create the map
    map = L.map('map').setView(egyptCenter, defaultZoom);
    
    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.cairo3apoultry.com/">C3A Website</a> SC Team',
        maxZoom: 19
    }).addTo(map);
    
    // Initialize marker cluster group
    markerCluster = L.markerClusterGroup();
    map.addLayer(markerCluster);
    
    // Add locations to the map
    addLocationsToMap(loadLocations());
}

// Add location markers to the map
function addLocationsToMap(locationData) {
    // Clear existing markers
    clearMarkers();
    
    // Add new markers
    locationData.forEach(location => {
        addMarker(location);
    });
}

// Add a single marker to the map
function addMarker(location) {
    const icon = L.divIcon({
        html: `<div class="custom-marker" style="color: ${siteTypeColors[location.type]}">
                <i class="fas ${siteTypeIcons[location.type]}"></i>
              </div>`,
        className: '',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
        icon: icon,
        title: location.name
    });
    
    // Create popup content
    const popupContent = `
        <div class="popup-content">
            <h3>${location.name}</h3>
            <p><strong data-lang="en">Type:</strong><strong data-lang="ar">النوع:</strong> 
               <span data-lang="en">${location.type}</span>
               <span data-lang="ar">${getArabicSiteType(location.type)}</span>
            </p>
            <p><strong data-lang="en">Address:</strong><strong data-lang="ar">العنوان:</strong> ${location.address}</p>
            <div class="popup-actions">
                <button class="btn view-details" data-id="${location.id}">
                    <span data-lang="en">View Details</span>
                    <span data-lang="ar">عرض التفاصيل</span>
                </button>
                <button class="btn get-directions" data-lat="${location.coordinates.lat}" data-lng="${location.coordinates.lng}">
                    <span data-lang="en">Get Directions</span>
                    <span data-lang="ar">الحصول على الاتجاهات</span>
                </button>
            </div>
        </div>
    `;
    
    // Bind popup to marker
    marker.bindPopup(popupContent);
    
    // Add marker to cluster group
    markerCluster.addLayer(marker);
    
    // Store marker reference
    markers.push({
        id: location.id,
        marker: marker
    });
    
    // Add event listeners to popup buttons after popup is opened
    marker.on('popupopen', function() {
        // View details button
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const locationId = parseInt(this.getAttribute('data-id'));
                showLocationDetails(locationId);
            });
        });
        
        // Get directions button
        document.querySelectorAll('.get-directions').forEach(button => {
            button.addEventListener('click', function() {
                const lat = this.getAttribute('data-lat');
                const lng = this.getAttribute('data-lng');
                openDirections(lat, lng);
            });
        });
        
        // Apply current language to popup
        applyLanguage(currentLanguage);
    });
    
    return marker;
}

// Clear all markers from the map
function clearMarkers() {
    markerCluster.clearLayers();
    markers = [];
}

// Filter markers based on type and governorate
function filterMarkers(typeFilter, governorateFilter, searchText) {
    const locations = loadLocations();
    let filteredLocations = locations;
    
    // Filter by type
    if (typeFilter && typeFilter !== 'all') {
        filteredLocations = filteredLocations.filter(location => location.type === typeFilter);
    }
    
    // Filter by governorate
    if (governorateFilter && governorateFilter !== 'all') {
        filteredLocations = filteredLocations.filter(location => location.governorate === governorateFilter);
    }
    
    // Filter by search text
    if (searchText && searchText.trim() !== '') {
        const searchLower = searchText.toLowerCase().trim();
        filteredLocations = filteredLocations.filter(location => 
            location.name.toLowerCase().includes(searchLower) ||
            location.address.toLowerCase().includes(searchLower) ||
            location.governorate.toLowerCase().includes(searchLower)
        );
    }
    
    // Update map with filtered locations
    addLocationsToMap(filteredLocations);
    
    // Update location list
    updateLocationsList(filteredLocations);
    
    return filteredLocations;
}

// Fly to a specific marker
function flyToMarker(locationId) {
    const location = loadLocations().find(loc => loc.id === locationId);
    if (location) {
        map.flyTo([location.coordinates.lat, location.coordinates.lng], 13);
        
        // Find and open the marker popup
        const markerObj = markers.find(m => m.id === locationId);
        if (markerObj) {
            markerObj.marker.openPopup();
        }
    }
}

// Open directions in Google Maps
function openDirections(lat, lng) {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
}

// Get Arabic translation for site type
function getArabicSiteType(type) {
    const index = siteTypes.indexOf(type);
    return index !== -1 ? siteTypesAr[index] : type;
}

// Get Arabic translation for governorate
function getArabicGovernorate(governorate) {
    const index = governorates.indexOf(governorate);
    return index !== -1 ? governoratesAr[index] : governorate;
}
