// Sample location data for company sites across Egypt
const locations = [
    {
        "id": 1,
        "name": "Cairo Headquarters",
        "type": "Head Office",
        "address": "62 B, Service center, New Cairo ",
        "governorate": "Cairo",
        "coordinates": {
            "lat": 30.004,
            "lng": 31.423
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": "Sun-Thu: 9:00 AM - 5:00 PM"
    },
    {
        "id": 6,
        "name": "مزرعة تسمين السويس",
        "type": "Broiler Farm",
        "address": "جنيفة, Fifth Shyakha, Faisal, Suez Governorate",
        "governorate": "Suez",
        "coordinates": {
            "lat": 30.1166,
            "lng": 32.5318
        },
        "contactPerson": "To be Added",
        "contactInfo": {
            "phone": "",
            "email": "123@c3a.com"
        },
        "workingHours": "24/7 Operation"
    },
    {
        "id": 7,
        "name": "Dakahlia Warehouse",
        "type": "Warehouse",
        "address": "حي الاشجار - المنصورة-الدقهلية",
        "governorate": "Dakahlia",
        "coordinates": {
            "lat": 31.0212,
            "lng": 31.376
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": "Sat-Thu: 8:00 AM - 6:00 PM"
    },
    {
        "id": 12,
        "name": " 1 مزارع تسمين ريجوا",
        "type": "Broiler Farm",
        "address": "Rural Road 23, Benha, Qalyubia",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.2011,
            "lng": 30.6565
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": "24/7 Operation"
    },
    {
        "id": 1746130149661,
        "name": "المجزر",
        "type": "Processing Plant",
        "address": "5PFF+33Q, Monsha'et El Kanater, Giza Governorate 3601121",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.1728,
            "lng": 30.7229
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746130306858,
        "name": "ثلاجه الاسكندرية",
        "type": "Warehouse",
        "address": "طريق القاهرة الاسكندرية الزراعي",
        "governorate": "Alexandria",
        "coordinates": {
            "lat": 31.173313,
            "lng": 29.946913
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746130391607,
        "name": "ثلاجة اللوجستية",
        "type": "Warehouse",
        "address": "المنطقة الصناعية - ابورواش",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.0732,
            "lng": 31.0501
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746130494854,
        "name": "ثلاجة كفر الجبل",
        "type": "Warehouse",
        "address": "كفرالجبل - الهرم",
        "governorate": "Giza",
        "coordinates": {
            "lat": 29.9584,
            "lng": 31.1527
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746130616513,
        "name": "ثلاجة طنطا",
        "type": "Warehouse",
        "address": " طريق خرسيت الجديد، خرسيت، مركز طنطا، محافظة الغربية ",
        "governorate": "Gharbia",
        "coordinates": {
            "lat": 30.8161,
            "lng": 30.9839
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746130941755,
        "name": "مزارع تسمين الواحات",
        "type": "Broiler Farm",
        "address": "طريق الواحات البحرية",
        "governorate": "Giza",
        "coordinates": {
            "lat": 28.7032,
            "lng": 29.0679
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746131050351,
        "name": "مصنع علف الواحات",
        "type": "Feed Mill",
        "address": "طريق",
        "governorate": "Giza",
        "coordinates": {
            "lat": 28.7048,
            "lng": 29.0707
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746131280318,
        "name": "مصنع علف السادات",
        "type": "Feed Mill",
        "address": "مدينه السادات - المنطقة الصناعية - المنوفية",
        "governorate": "Monufia",
        "coordinates": {
            "lat": 30.4404,
            "lng": 30.6285
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746133760381,
        "name": "ثلاجة الغردقة",
        "type": "Warehouse",
        "address": "الغردقة - البحر الاحمر",
        "governorate": "Red Sea",
        "coordinates": {
            "lat": 27.1502,
            "lng": 33.8195
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746134146178,
        "name": "مزرعة تسمين بدر",
        "type": "Broiler Farm",
        "address": "الدلنجات - المنوفيه",
        "governorate": "Monufia",
        "coordinates": {
            "lat": 30.4833,
            "lng": 30.744
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746134621898,
        "name": "مزرعة مصر العربيه",
        "type": "Broiler Farm",
        "address": "بني سلامه - وادي النطرون - البحيرة",
        "governorate": "Beheira",
        "coordinates": {
            "lat": 30.2058,
            "lng": 30.5473
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746134875505,
        "name": "مزرعة تسمين كفر",
        "type": "Broiler Farm",
        "address": "زاوية ابو مسلم - ابو النمرس - الجيزة",
        "governorate": "Giza",
        "coordinates": {
            "lat": 29.948,
            "lng": 31.1492
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746135023641,
        "name": "مزرعه تسمين النبع",
        "type": "Broiler Farm",
        "address": "مركز وادي النطرون - البحيرة",
        "governorate": "Beheira",
        "coordinates": {
            "lat": 30.4135,
            "lng": 30.3038
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746135193879,
        "name": "مزرعة تسمين الشبراويشي",
        "type": "Broiler Farm",
        "address": "منشأة القناطر - الجيزة",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.2178,
            "lng": 30.7675
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746135346548,
        "name": "مزرعة تسمين القناطر",
        "type": "Broiler Farm",
        "address": "طريق المناشي التوفيقية - الجيزة",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.2405,
            "lng": 30.951
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746135675492,
        "name": "معمل تفريخ الواحات",
        "type": "Hatchery",
        "address": "طريق الواحات البحرية",
        "governorate": "Giza",
        "coordinates": {
            "lat": 28.7703,
            "lng": 29.0482
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746135846272,
        "name": "مزارع الامهات",
        "type": "Breeder Farm",
        "address": "طريق الواحات البحرية",
        "governorate": "Giza",
        "coordinates": {
            "lat": 28.7934,
            "lng": 29.0317
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746135978250,
        "name": "معمل تفريح كفر الجبل",
        "type": "Hatchery",
        "address": "كفر الجبل - المريوطية",
        "governorate": "Giza",
        "coordinates": {
            "lat": 29.9584,
            "lng": 31.1527
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746175178543,
        "name": "مزرعة تسمين سوهاج",
        "type": "Broiler Farm",
        "address": "اخميم الجديدة-  سوهاج",
        "governorate": "Sohag",
        "coordinates": {
            "lat": 26.4718,
            "lng": 31.4531
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746175622723,
        "name": "معمل بيطري السادات",
        "type": "Research Facility",
        "address": "بجوار مول دار مصر - السادات - المنوفية",
        "governorate": "Monufia",
        "coordinates": {
            "lat": 30.3891,
            "lng": 30.5392
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746177476461,
        "name": "مصنعات شهد",
        "type": "Processing Plant",
        "address": "منطقة 6 مليون - المنطقة الصناعيه - العاشر من رمضان",
        "governorate": "Sharqia",
        "coordinates": {
            "lat": 30.2272,
            "lng": 31.7745
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746182161584,
        "name": "معمل تفريخ الوطنية",
        "type": "Hatchery",
        "address": "مدينه الحمام - مرسي مطروح",
        "governorate": "Alexandria",
        "coordinates": {
            "lat": 30.8183,
            "lng": 29.2958
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746182344878,
        "name": "معمل تفريخ الجدود",
        "type": "Hatchery",
        "address": "مدينه رأس غارب - البحر الاحمر",
        "governorate": "Red Sea",
        "coordinates": {
            "lat": 27.9857,
            "lng": 33.1613
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746182556493,
        "name": "مزارع الجدود",
        "type": "GP Farm",
        "address": "مدينه رأس غارب - البحر الاحمر",
        "governorate": "Red Sea",
        "coordinates": {
            "lat": 27.9866,
            "lng": 33.1559
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746184326171,
        "name": "مزارع بياض طنطا",
        "type": "Egg Layer Farm",
        "address": "شارع جمال عبدالناصر - جنوب طنطا بجوار محطة كهرباء جنوب طنطا",
        "governorate": "Gharbia",
        "coordinates": {
            "lat": 30.7565,
            "lng": 30.9869
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746184603647,
        "name": "امزرعة امهات البدوي",
        "type": "Breeder Farm",
        "address": "ابو رواش - الجيزه ",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.0834,
            "lng": 31.0127
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746184889286,
        "name": "مزرعة امهات الاسد",
        "type": "Breeder Farm",
        "address": "طريق القاهرة الاسكندرية الصحراوي كيلو 113",
        "governorate": "Beheira",
        "coordinates": {
            "lat": 30.4576,
            "lng": 30.2667
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746185390128,
        "name": "2 مزارع تسمين ريجوا",
        "type": "Broiler Farm",
        "address": "الطريق الدائري الاقليمي",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.1638,
            "lng": 30.6752
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    },
    {
        "id": 1746185566950,
        "name": "مزارع امهات ريجوا",
        "type": "Breeder Farm",
        "address": "ريجوا - القاهره الاسكندرية الصحراوي",
        "governorate": "Giza",
        "coordinates": {
            "lat": 30.1809,
            "lng": 30.5995
        },
        "contactPerson": "",
        "contactInfo": {
            "phone": "",
            "email": ""
        },
        "workingHours": ""
    }
];

// Admin credentials (in a real application, this would be handled securely on the server)
const adminCredentials = {
    username: "admin",
    password: "admin123"
};
// data version — update this string each time you change `locations`
const DATA_VERSION = '2026-01-11-v1';
const DATA_VERSION_KEY = 'companyLocationsVersion';

// save / load
function saveLocations(locationData) {
  localStorage.setItem('companyLocations', JSON.stringify(locationData));
}
function loadLocations() {
  const saved = localStorage.getItem('companyLocations');
  return saved ? JSON.parse(saved) : locations;
}

// optional: merge saved + latest by id instead of full overwrite
function mergeLocations(savedArr, latestArr) {
  const map = new Map();
  (savedArr || []).forEach(item => map.set(item.id, item));
  (latestArr || []).forEach(item => map.set(item.id, item)); // latest wins
  return Array.from(map.values());
}

// ensure client has latest data (safe access)
(function ensureLatestData() {
  try {
    const savedVersion = localStorage.getItem(DATA_VERSION_KEY);

    if (savedVersion !== DATA_VERSION) {
      // Option A — overwrite completely:
      saveLocations(locations);

      // Option B — merge instead of overwrite (uncomment to use)
      // const existing = JSON.parse(localStorage.getItem('companyLocations') || '[]');
      // const merged = mergeLocations(existing, locations);
      // saveLocations(merged);

      localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION);
    }
  } catch (err) {
    // localStorage might be unavailable (e.g. strict privacy mode)
    console.warn('Could not update stored locations:', err);
  }
})();
