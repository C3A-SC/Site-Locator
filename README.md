# Interactive Map-Based Company Site Locator Website

## Project Overview
This is an interactive website that displays company sites across Egypt on a dynamic map. The platform facilitates easy access to location details for suppliers, customers, partners, and visitors, enhancing transparency, navigation, and engagement.

## Features

### Map Integration
- Interactive map of Egypt using Leaflet.js and OpenStreetMap
- Custom markers for different site types with unique colors and icons
- Marker clustering for better visualization when zoomed out
- Popup information on hover/click

### Location Data Display
Each site marker includes:
- Site name
- Site type (Feed Mill, Hatchery, Broiler Farm, etc.)
- Address with GPS coordinates
- Contact information
- Working hours
- Route button for directions via Google Maps

### Filtering and Search
- Search functionality to find specific sites by name or location
- Filter by site type (Feed Mill, Hatchery, etc.)
- Filter by governorate
- Reset filters option

### User Interface & Experience
- Professional and clean design
- Responsive layout for desktop, tablet, and mobile
- Bilingual support (Arabic/English) with RTL for Arabic
- Sidebar with location list that syncs with map

### Admin Panel
- Secure admin dashboard (username: admin, password: admin123)
- Add/edit/remove site locations
- Changes are stored in localStorage
- Live updates on the front-end map

## Technical Implementation
- HTML5, CSS3, and JavaScript
- Leaflet.js for map functionality
- LocalStorage for data persistence
- Responsive design using CSS Grid and Flexbox
- No external dependencies or build process required

## How to Use

### For Visitors
1. Browse the map to see all company locations
2. Use filters to narrow down locations by type or governorate
3. Search for specific locations
4. Click on markers to view details and get directions
5. Toggle between English and Arabic languages

### For Administrators
1. Click "Admin Login" and enter credentials
2. Use the admin panel to add, edit, or delete locations
3. All changes are immediately reflected on the map

## Getting Started
Simply open the `index.html` file in a web browser to start using the application.

## Note
This is a client-side only implementation. In a production environment, you would want to:
- Implement proper server-side authentication
- Store location data in a database
- Add proper error handling and validation
- Implement HTTPS for security
