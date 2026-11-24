/**
 * Sadik.com.info - Core Application Logic
 * Supports Home Mistry, Car Rental, House Rent / To-Let & Open Community Listing
 * Color Theme: Deep Blue
 * Official Contact: 01617-723455
 * Address: ৫৮, সাতমসজিদ রোড, লেভেল: ৭, গ্রীন সিটি সেন্টার, ধানমন্ডি, ঢাকা, বাংলাদেশ।
 * Images: 100% Local Authentic Bangladeshi Service Photos
 */

// Initial realistic dataset with authentic Bangladeshi images
const INITIAL_SERVICES = [
  {
    id: "srv-1",
    title: "দক্ষ ইলেকট্রিশিয়ান ও হোম ওয়্যারিং সার্ভিস",
    category: "mistry",
    categoryLabel: "মিস্ত্রি সেবা",
    provider: "সাদিক ইলেকট্রিক ও সার্ভিস কেয়ার",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "ধানমন্ডি (সাতমসজিদ রোড), ঢাকা",
    area: "ধানমন্ডি",
    rate: "৳৫০০ / ভিজিট",
    availability: "সকাল ৮টা - রাত ১০টা (জরুরি ২৪ ঘণ্টা)",
    rating: 4.9,
    reviewsCount: 42,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/electrician.jpg",
    description: "বাসা-বাড়ির শর্ট সার্কিট সমাধান, ফ্যান/লাইট ফিটিংস, নতুন সার্কিট ব্রেকার ও ডিস্ট্রিবিউশন বোর্ড স্থাপন, আইপিএস কানেকশন এবং যেকোনো ইলেকট্রিক্যাল কাজের অভিজ্ঞ মিস্ত্রি।"
  },
  {
    id: "srv-2",
    title: "জরুরি প্লাম্বার ও পানির পাইপ ফিটিংস",
    category: "mistry",
    categoryLabel: "মিস্ত্রি সেবা",
    provider: "সুমন স্যানিটারি ও প্লাম্বিং",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "গ্রীন সিটি সেন্টার, ধানমন্ডি, ঢাকা",
    area: "ধানমন্ডি",
    rate: "৳৬০০ / কাজ শুরু",
    availability: "সকাল ৯টা - রাত ৯টা",
    rating: 4.8,
    reviewsCount: 31,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/plumber.jpg",
    description: "বাথরুমের পাইপ লিক ঠিক করা, বেসিন ও কমোড ফিটিংস, পানির মোটর ইনস্টল ও লাইন ওয়াশ করার আধুনিক যন্ত্রপাতি সহ দ্রুততম সেবা।"
  },
  {
    id: "srv-3",
    title: "এসি ও ফ্রিজ মেরামত, গ্যাস রিফিল সার্ভিস",
    category: "mistry",
    categoryLabel: "মিস্ত্রি সেবা",
    provider: "কুল মাস্টার কুলিং সলিউশন",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "মিরপুর ও ধানমন্ডি, ঢাকা",
    area: "মিরপুর",
    rate: "৳৮০০ / বেসিক সার্ভিসিং",
    availability: "২৪/৭ জরুরি সাপোর্ট",
    rating: 5.0,
    reviewsCount: 58,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/ac-repair.jpg",
    description: "ইনভার্টার ও নন-ইনভার্টার এসি ইন্সটলেশন, মাস্টার ওয়াশ, গ্যাস রিফিল এবং কম্প্রেসার মেরামত। ডিপ ফ্রিজ ও নরমাল ফ্রিজের যেকোনো সমস্যা সমাধান।"
  },
  {
    id: "srv-4",
    title: "নোয়াহ / হাইয়েস মাইক্রোবাস ও কার রেন্ট-এ-কার",
    category: "car",
    categoryLabel: "গাড়ি ভাড়া",
    provider: "সাদিক রেন্ট-এ-কার ও ট্রাভেলস",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "ধানমন্ডি ও সমগ্র বাংলাদেশ",
    area: "ধানমন্ডি",
    rate: "৳৩,৫০০ / দিন (তেল/গ্যাস আলোচনা সাপেক্ষে)",
    availability: "সারাদেশে ট্রিপ দেওয়া হয়",
    rating: 4.9,
    reviewsCount: 84,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/microbus.jpg",
    description: "পরিবার নিয়ে ভ্রমণ, অফিস ডিউটি, এয়ারপোর্ট পিক অ্যান্ড ড্রপ বা যেকোনো জেলায় যাওয়ার জন্য পরিচ্ছন্ন নোয়া/হাইয়েস মাইক্রোবাস ও এক্স করোলা কার।"
  },
  {
    id: "srv-5",
    title: "বাসা ও অফিস শিফটিং পিকআপ সার্ভিস (১ টন / ২ টন)",
    category: "car",
    categoryLabel: "গাড়ি ভাড়া",
    provider: "দ্রুত পরিবহন ও শিফটিং",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "তেজগাঁও, ধানমন্ডি ও মোহাম্মদপুর",
    area: "মোহাম্মদপুর",
    rate: "৳১,৮০০ / লোকাল ট্রিপ",
    availability: "২৪ ঘণ্টা প্রস্তুত",
    rating: 4.7,
    reviewsCount: 45,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/pickup.jpg",
    description: "বাসা বদল, অফিস ফার্নিচার বা মালামাল বহনে খোলা ও কাভার্ড ভ্যান পিকআপ। অভিজ্ঞ লোডার ও ড্রাইভার সহ ঝামেলাহীন শিফটিং।"
  },
  {
    id: "srv-6",
    title: "জরুরি আইসিইউ ও নরমাল অ্যাম্বুলেন্স সেবা",
    category: "car",
    categoryLabel: "গাড়ি ভাড়া",
    provider: "লাইফ কেয়ার অ্যাম্বুলেন্স সার্ভিস",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "ধানমন্ডি, ঢাকা মেডিকেল ও সমগ্র বাংলাদেশ",
    area: "ধানমন্ডি",
    rate: "৳২,০০০ / ঢাকা সিটি",
    availability: "২৪ ঘণ্টা জরুরি সেবা",
    rating: 5.0,
    reviewsCount: 96,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/ambulance.jpg",
    description: "অক্সিজেন ও ভেন্টিলেটরযুক্ত আইসিইউ অ্যাম্বুলেন্স, ফ্রিজিং অ্যাম্বুলেন্স ও এসি সাধারণ অ্যাম্বুলেন্স। সারাদেশের যেকোনো প্রান্তে দ্রুত রোগী স্থানান্তর।"
  },
  {
    id: "srv-7",
    title: "৩ বেডরুমের আলো-বাতাসপূর্ণ লাক্সারি ফ্ল্যাট ভাড়া (টু-লেট)",
    category: "rent",
    categoryLabel: "বাসা ভাড়া / টু-লেট",
    provider: "বাড়িওয়ালা (আলহাজ্ব মোস্তফা কামাল)",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "সাতমসজিদ রোড, ধানমন্ডি, ঢাকা",
    area: "ধানমন্ডি",
    rate: "৳২৮,০০০ / মাস",
    availability: "পরবর্তী মাসের ১ তারিখ থেকে খালি",
    rating: 4.9,
    reviewsCount: 16,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/flat-rent.jpg",
    description: "১৫৫০ বর্গফুট, ৩ বেড, ৩ বাথ, ৩ বারান্দা, ড্রয়িং-ডাইনিং, লিফট, জেনারেটর ব্যাকআপ, ২৪ ঘণ্টা সিকিউরিটি গার্ড ও নিজস্ব কার পার্কিং।"
  },
  {
    id: "srv-8",
    title: "চাকরিজীবী/ছাত্রদের জন্য নিরিবিলি ব্যাচেলর রুম ও সিট ভাড়া",
    category: "rent",
    categoryLabel: "বাসা ভাড়া / টু-লেট",
    provider: "হাউস ম্যানেজার (জাহিদ হাসান)",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "মিরপুর ১০ (মেট্রোরেল স্টেশনের কাছে), ঢাকা",
    area: "মিরপুর",
    rate: "৳৩,৮০০ / সিট (ওয়াইফাই ও পানি সহ)",
    availability: "বর্তমানে ২টি সিট খালি আছে",
    rating: 4.7,
    reviewsCount: 22,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/bachelor-room.jpg",
    description: "পর্যাপ্ত আলো-বাতাস, ফিল্টার পানি, হাই-স্পিড ওয়াইফাই, মিল ও বুয়া ব্যবস্থা এবং পড়ার জন্য শান্ত ও মনোরম পরিবেশ।"
  },
  {
    id: "srv-9",
    title: "গ্রীন সিটি সেন্টারে বাণিজ্যিক অফিস / শোরুম স্পেস ভাড়া",
    category: "rent",
    categoryLabel: "বাসা ভাড়া / টু-লেট",
    provider: "প্রপার্টি ম্যানেজমেন্ট",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "৫৮, সাতমসজিদ রোড, লেভেল: ৭, ধানমন্ডি, ঢাকা",
    area: "ধানমন্ডি",
    rate: "৳৪৫,০০০ / মাস",
    availability: "এখনই ব্যবহারের উপযোগী",
    rating: 4.9,
    reviewsCount: 14,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/commercial-space.jpg",
    description: "১২৫০ স্কয়ার ফিট বাণিজ্যিক স্পেস, কর্পোরেট অফিস, আইটি ফার্ম বা শোরুমের জন্য উপযুক্ত। লিফট, সিকিউরিটি ও ব্যাকআপ জেনারেটর রয়েছে।"
  },
  {
    id: "srv-10",
    title: "বাড়ি ও অফিস ডিপ ক্লিনিং এবং পেস্ট কন্ট্রোল",
    category: "others",
    categoryLabel: "অন্যান্য সেবা",
    provider: "সাদিক ক্লিনিং সলিউশনস",
    phone: "01617-723455",
    whatsapp: "8801617723455",
    location: "ধানমন্ডি ও গুলশান, ঢাকা",
    area: "ধানমন্ডি",
    rate: "৳১,৫০০ / প্যাকেজ শুরু",
    availability: "সপ্তাহে ৭ দিন",
    rating: 4.8,
    reviewsCount: 37,
    isVerified: true,
    isMyListing: false,
    image: "assets/images/cleaning.jpg",
    description: "সোফা, কার্পেট ও কিচেন ডিপ ওয়াশ। তেলাপোকা ও ছারপোকা দমনে কার্যকর স্প্রে ও নিরাপদ পেস্ট কন্ট্রোল সার্ভিস।"
  }
];

// Presets mapping for image selection using local assets
const PRESET_IMAGES = {
  "mistry-electric": "assets/images/electrician.jpg",
  "mistry-plumber": "assets/images/plumber.jpg",
  "car": "assets/images/microbus.jpg",
  "house": "assets/images/flat-rent.jpg"
};

// Current Storage Key Version
const STORAGE_KEY = 'sadik_services_v3';

// State Variables
let services = [];
let currentCategoryFilter = 'all';
let currentSearchKeyword = '';
let currentAreaFilter = 'all';
let isMyListingsOnly = false;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadServices();
  renderServices();
  setupEventListeners();
});

// Load services from LocalStorage or seed data
function loadServices() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      services = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored services, loading initial data", e);
      services = [...INITIAL_SERVICES];
    }
  } else {
    // Clear old versions if present
    localStorage.removeItem('sadik_services');
    localStorage.removeItem('sadik_services_v2');
    services = [...INITIAL_SERVICES];
    saveServices();
  }
}

// Save services to LocalStorage
function saveServices() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('searchKeyword');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchKeyword = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  const catSelect = document.getElementById('searchCategory');
  if (catSelect) {
    catSelect.addEventListener('change', (e) => {
      currentCategoryFilter = e.target.value;
      updateActiveTabUI();
      applyFilters();
    });
  }

  const areaSelect = document.getElementById('searchArea');
  if (areaSelect) {
    areaSelect.addEventListener('change', (e) => {
      currentAreaFilter = e.target.value;
      applyFilters();
    });
  }
}

// Render Services to Grid
function renderServices(filteredData = null) {
  const dataToRender = filteredData || getFilteredServices();
  const grid = document.getElementById('servicesGrid');
  const emptyState = document.getElementById('emptyState');
  const countBadge = document.getElementById('itemsCountBadge');

  if (!grid) return;

  if (countBadge) {
    countBadge.textContent = `${dataToRender.length}টি পাওয়া গেছে`;
  }

  if (dataToRender.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  grid.innerHTML = dataToRender.map(item => {
    let catIcon = 'fa-wrench';
    let catColor = 'bg-amber-100 text-amber-800 border-amber-200';
    if (item.category === 'car') {
      catIcon = 'fa-car';
      catColor = 'bg-blue-100 text-brand-800 border-blue-200';
    } else if (item.category === 'rent') {
      catIcon = 'fa-house-chimney';
      catColor = 'bg-emerald-100 text-emerald-800 border-emerald-200';
    } else if (item.category === 'others') {
      catIcon = 'fa-box-open';
      catColor = 'bg-indigo-100 text-indigo-800 border-indigo-200';
    }

    const cleanWhatsapp = item.whatsapp ? item.whatsapp.replace(/[^0-9]/g, '') : item.phone.replace(/[^0-9]/g, '');
    const defaultImg = item.image || PRESET_IMAGES['mistry-electric'];

    return `
      <div class="service-card bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
        <div>
          <!-- Card Image & Floating Badges -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-100">
            <img 
              src="${defaultImg}" 
              alt="${item.title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onerror="this.src='assets/images/electrician.jpg'"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            
            <!-- Category Tag -->
            <div class="absolute top-3 left-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${catColor}">
                <i class="fa-solid ${catIcon} text-[11px]"></i>
                ${item.categoryLabel || getCategoryLabel(item.category)}
              </span>
            </div>

            <!-- Verified / My Listing Badge -->
            <div class="absolute top-3 right-3 flex items-center gap-1.5">
              ${item.isMyListing ? `
                <span class="bg-indigo-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow">
                  <i class="fa-solid fa-user"></i> আমার বিজ্ঞাপন
                </span>
              ` : ''}
              ${item.isVerified ? `
                <span class="bg-white/95 backdrop-blur-md text-brand-800 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 border border-brand-200">
                  <i class="fa-solid fa-circle-check text-brand-600"></i> ভেরিফাইড
                </span>
              ` : ''}
            </div>

            <!-- Price Tag at bottom of image -->
            <div class="absolute bottom-3 left-3 text-white">
              <span class="text-xs text-blue-200 block">চার্জ / ভাড়া:</span>
              <span class="text-lg font-extrabold text-amber-300 drop-shadow-sm">${item.rate}</span>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-5">
            <!-- Location & Rating -->
            <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
              <div class="flex items-center gap-1.5 text-slate-700 font-medium truncate">
                <i class="fa-solid fa-location-dot text-rose-500 text-xs"></i>
                <span class="truncate">${item.location}</span>
              </div>
              <div class="flex items-center gap-1 text-amber-500 font-bold shrink-0">
                <i class="fa-solid fa-star text-xs"></i>
                <span>${item.rating || '4.9'}</span>
                <span class="text-slate-400 font-normal">(${item.reviewsCount || 10})</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="font-bold text-slate-900 text-base leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">
              ${item.title}
            </h3>

            <!-- Provider info -->
            <div class="mt-2.5 flex items-center gap-2 text-xs text-slate-600">
              <div class="w-6 h-6 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-[10px]">
                <i class="fa-solid fa-user-tie"></i>
              </div>
              <span class="font-medium text-slate-800">${item.provider}</span>
            </div>

            <!-- Short description -->
            <p class="mt-3 text-xs text-slate-500 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>

        <!-- Card Action Footer -->
        <div class="p-5 pt-0">
          <div class="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2">
            <!-- Call Button -->
            <a 
              href="tel:${item.phone.replace(/[^0-9]/g, '')}" 
              class="col-span-1 bg-brand-50 hover:bg-brand-100 text-brand-800 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 border border-brand-200"
              title="সরাসরি কল করুন"
            >
              <i class="fa-solid fa-phone text-xs"></i>
              <span>কল</span>
            </a>

            <!-- WhatsApp Chat Button -->
            <a 
              href="https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(`সালাম, Sadik.com.info তে আপনার "${item.title}" বিজ্ঞাপনটি দেখে যোগাযোগ করছি।`)}" 
              target="_blank" 
              class="col-span-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
              title="হোয়াটসঅ্যাপে মেসেজ পাঠান"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>চ্যাট</span>
            </a>

            <!-- Details / Book Button -->
            <button 
              onclick="showServiceDetails('${item.id}')" 
              class="col-span-1 bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1"
            >
              <span>বিস্তারিত</span>
              <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </div>

          <!-- If it's user's own listing: option to delete -->
          ${item.isMyListing ? `
            <div class="mt-2 text-right">
              <button onclick="deleteMyListing('${item.id}')" class="text-[11px] text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 ml-auto">
                <i class="fa-solid fa-trash-can"></i> বিজ্ঞাপন মুছুন
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Helper to get category bangla label
function getCategoryLabel(cat) {
  switch (cat) {
    case 'mistry': return 'মিস্ত্রি সেবা';
    case 'car': return 'গাড়ি ভাড়া';
    case 'rent': return 'বাসা ভাড়া';
    case 'others': return 'অন্যান্য সেবা';
    default: return 'সকল সেবা';
  }
}

// Filter calculations
function getFilteredServices() {
  return services.filter(item => {
    if (isMyListingsOnly && !item.isMyListing) {
      return false;
    }

    if (!isMyListingsOnly && currentCategoryFilter !== 'all') {
      if (item.category !== currentCategoryFilter) {
        return false;
      }
    }

    if (currentAreaFilter !== 'all') {
      const matchArea = (item.area && item.area.includes(currentAreaFilter)) || 
                        (item.location && item.location.includes(currentAreaFilter));
      if (!matchArea) return false;
    }

    if (currentSearchKeyword) {
      const textToSearch = `${item.title} ${item.description} ${item.provider} ${item.location} ${item.categoryLabel || ''}`.toLowerCase();
      if (!textToSearch.includes(currentSearchKeyword)) {
        return false;
      }
    }

    return true;
  });
}

// Apply active filters and refresh UI
function applyFilters() {
  const filtered = getFilteredServices();
  renderServices(filtered);

  const filterInfo = document.getElementById('activeFilterInfo');
  const filterText = document.getElementById('activeFilterText');

  if (currentCategoryFilter !== 'all' || currentAreaFilter !== 'all' || currentSearchKeyword || isMyListingsOnly) {
    let parts = [];
    if (isMyListingsOnly) parts.push("আমার বিজ্ঞাপিত তালিকা");
    if (currentCategoryFilter !== 'all') parts.push(`ক্যাটাগরি: ${getCategoryLabel(currentCategoryFilter)}`);
    if (currentAreaFilter !== 'all') parts.push(`এলাকা: ${currentAreaFilter}`);
    if (currentSearchKeyword) parts.push(`কি-ওয়ার্ড: "${currentSearchKeyword}"`);

    filterText.textContent = `ফিল্টার কার্যকর: ${parts.join(' | ')}`;
    filterInfo.classList.remove('hidden');
  } else {
    filterInfo.classList.add('hidden');
  }
}

// Filter by category
function filterByCategory(cat) {
  isMyListingsOnly = false;
  currentCategoryFilter = cat;

  const catSelect = document.getElementById('searchCategory');
  if (catSelect) catSelect.value = cat;

  updateActiveTabUI();
  applyFilters();

  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Filter by location
function filterByLocation(loc) {
  currentAreaFilter = loc;
  const areaSelect = document.getElementById('searchArea');
  if (areaSelect) areaSelect.value = loc;

  applyFilters();
  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Quick Search
function quickSearch(keyword) {
  currentSearchKeyword = keyword.toLowerCase();
  const searchInput = document.getElementById('searchKeyword');
  if (searchInput) searchInput.value = keyword;

  applyFilters();
  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Handle Hero Search form submit
function handleSearch(e) {
  e.preventDefault();
  const keyword = document.getElementById('searchKeyword').value.trim();
  const cat = document.getElementById('searchCategory').value;
  const area = document.getElementById('searchArea').value;

  currentSearchKeyword = keyword.toLowerCase();
  currentCategoryFilter = cat;
  currentAreaFilter = area;
  isMyListingsOnly = false;

  updateActiveTabUI();
  applyFilters();

  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Reset all filters
function resetFilters() {
  currentCategoryFilter = 'all';
  currentSearchKeyword = '';
  currentAreaFilter = 'all';
  isMyListingsOnly = false;

  const searchInput = document.getElementById('searchKeyword');
  if (searchInput) searchInput.value = '';

  const catSelect = document.getElementById('searchCategory');
  if (catSelect) catSelect.value = 'all';

  const areaSelect = document.getElementById('searchArea');
  if (areaSelect) areaSelect.value = 'all';

  updateActiveTabUI();
  applyFilters();
}

// Show only user-added listings
function showMyListings() {
  isMyListingsOnly = true;
  updateActiveTabUI();
  applyFilters();

  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Update Active Tab UI styles
function updateActiveTabUI() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    const cat = tab.getAttribute('data-cat');
    if ((isMyListingsOnly && cat === 'my') || (!isMyListingsOnly && cat === currentCategoryFilter)) {
      tab.classList.add('active-tab');
      tab.classList.remove('text-slate-600', 'bg-brand-50');
    } else {
      tab.classList.remove('active-tab');
      if (cat === 'my') {
        tab.classList.add('text-brand-700', 'bg-brand-50');
      } else {
        tab.classList.add('text-slate-600');
      }
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const cat = link.getAttribute('data-category');
    if (!isMyListingsOnly && cat === currentCategoryFilter) {
      link.classList.add('active-nav');
    } else {
      link.classList.remove('active-nav');
    }
  });
}

// Modal management
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  ['addServiceModal', 'serviceDetailsModal', 'bookingModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal && e.target === modal) {
      closeModal(id);
    }
  });
});

// Image preset selection in Add Service form
function selectPresetImage(presetKey) {
  const url = PRESET_IMAGES[presetKey];
  if (url) {
    const input = document.getElementById('formImageUrl');
    if (input) input.value = url;

    document.querySelectorAll('.preset-img-btn').forEach(btn => btn.classList.remove('preset-active'));
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('preset-active');
    }
  }
}

// Handle New Service / Provider Submission
function handleNewServiceSubmit(e) {
  e.preventDefault();

  const category = document.getElementById('formCategory').value;
  const title = document.getElementById('formTitle').value.trim();
  const provider = document.getElementById('formProvider').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const whatsapp = document.getElementById('formWhatsapp').value.trim() || phone;
  const location = document.getElementById('formLocation').value.trim();
  const rate = document.getElementById('formRate').value.trim();
  const availability = document.getElementById('formAvailability').value.trim() || "সকাল ৯টা - রাত ৮টা";
  const description = document.getElementById('formDescription').value.trim();
  const customImg = document.getElementById('formImageUrl').value.trim();

  let image = customImg;
  if (!image) {
    if (category === 'mistry') image = PRESET_IMAGES['mistry-electric'];
    else if (category === 'car') image = PRESET_IMAGES['car'];
    else if (category === 'rent') image = PRESET_IMAGES['house'];
    else image = PRESET_IMAGES['mistry-plumber'];
  }

  let area = "অন্যান্য";
  ['ধানমন্ডি', 'মিরপুর', 'উত্তরা', 'গুলশান', 'বনানী', 'মোহাম্মদপুর', 'বাড্ডা', 'মতিঝিল', 'চট্টগ্রাম', 'সিলেট'].forEach(a => {
    if (location.includes(a)) area = a;
  });

  const newService = {
    id: 'srv-user-' + Date.now(),
    title,
    category,
    categoryLabel: getCategoryLabel(category),
    provider,
    phone,
    whatsapp,
    location,
    area,
    rate,
    availability,
    rating: 5.0,
    reviewsCount: 1,
    isVerified: true,
    isMyListing: true,
    image,
    description
  };

  services.unshift(newService);
  saveServices();

  document.getElementById('addServiceForm').reset();
  closeModal('addServiceModal');

  applyFilters();
  showToast("সফলভাবে যোগ হয়েছে!", "আপনার বিজ্ঞাপনটি সাদিক পোর্টালে যুক্ত হয়েছে।");
}

// Delete user's created listing
function deleteMyListing(id) {
  if (confirm("আপনি কি নিশ্চিত এই বিজ্ঞাপনটি মুছে ফেলতে চান?")) {
    services = services.filter(item => item.id !== id);
    saveServices();
    applyFilters();
    showToast("বিজ্ঞাপন মুছে ফেলা হয়েছে", "তালিকায় পরিবর্তন কার্যকর হয়েছে।");
  }
}

// Show Service Details Modal
function showServiceDetails(id) {
  const item = services.find(s => s.id === id);
  if (!item) return;

  const modalContent = document.getElementById('detailsModalContent');
  const cleanWhatsapp = item.whatsapp ? item.whatsapp.replace(/[^0-9]/g, '') : item.phone.replace(/[^0-9]/g, '');

  modalContent.innerHTML = `
    <!-- Header with Image -->
    <div class="relative h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 rounded-t-3xl overflow-hidden mb-6 bg-slate-100">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.src='assets/images/electrician.jpg'">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
      
      <div class="absolute bottom-4 left-6 right-6 text-white">
        <span class="text-xs bg-brand-700 text-white font-bold px-2.5 py-0.5 rounded-full inline-block mb-1 border border-brand-500">
          ${item.categoryLabel || getCategoryLabel(item.category)}
        </span>
        <h3 class="text-xl sm:text-2xl font-bold text-white leading-snug drop-shadow-md">
          ${item.title}
        </h3>
      </div>
    </div>

    <!-- Provider Bio & Rating -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-brand-100 text-brand-800 flex items-center justify-center text-xl font-bold">
          <i class="fa-solid fa-user-tie"></i>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">${item.provider}</h4>
          <p class="text-xs text-slate-500 flex items-center gap-1">
            <i class="fa-solid fa-location-dot text-rose-500"></i> ${item.location}
          </p>
        </div>
      </div>
      <div class="text-right">
        <div class="text-xs text-slate-400">চার্জ / ভাড়া</div>
        <div class="text-lg font-extrabold text-brand-700">${item.rate}</div>
      </div>
    </div>

    <!-- Key Info Badges -->
    <div class="grid grid-cols-2 gap-3 mb-5 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100">
      <div>
        <span class="text-slate-400 block">উপলব্ধতা / সময়:</span>
        <span class="font-bold text-slate-800">${item.availability || '২৪ ঘণ্টা সেবা'}</span>
      </div>
      <div>
        <span class="text-slate-400 block">রেটিং ও রিভিউ:</span>
        <span class="font-bold text-amber-500 flex items-center gap-1">
          <i class="fa-solid fa-star"></i> ${item.rating || '4.9'} (${item.reviewsCount || 10}টি রিভিউ)
        </span>
      </div>
    </div>

    <!-- Description -->
    <div class="mb-6">
      <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">সেবার বিবরণ</h5>
      <p class="text-sm text-slate-700 leading-relaxed bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
        ${item.description}
      </p>
    </div>

    <!-- Direct Action Buttons -->
    <div class="space-y-2.5">
      <div class="grid grid-cols-2 gap-3">
        <a 
          href="tel:${item.phone.replace(/[^0-9]/g, '')}" 
          class="bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-md"
        >
          <i class="fa-solid fa-phone"></i>
          <span>কল: ${item.phone}</span>
        </a>

        <a 
          href="https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(`সালাম, Sadik.com.info তে আপনার "${item.title}" বিজ্ঞাপনটি দেখে যোগাযোগ করছি।`)}" 
          target="_blank" 
          class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-md"
        >
          <i class="fa-brands fa-whatsapp text-lg"></i>
          <span>হোয়াটসঅ্যাপ চ্যাট</span>
        </a>
      </div>

      <!-- Booking Request Form Opener -->
      <button 
        onclick="openBookingModal('${item.id}', '${item.title.replace(/'/g, "\\'")}')" 
        class="w-full bg-slate-900 hover:bg-brand-900 text-white font-bold text-sm py-3 rounded-2xl transition flex items-center justify-center gap-2"
      >
        <i class="fa-solid fa-calendar-check text-blue-400"></i>
        <span>বুকিং / সার্ভিসের জন্য রিকোয়েস্ট পাঠান</span>
      </button>
    </div>
  `;

  openModal('serviceDetailsModal');
}

// Open Booking Modal for specific item
function openBookingModal(serviceId, serviceTitle) {
  closeModal('serviceDetailsModal');
  document.getElementById('bookingServiceId').value = serviceId;
  document.getElementById('bookingTargetName').textContent = `সার্ভিস: ${serviceTitle}`;
  openModal('bookingModal');
}

// Handle Booking Form Submission
function handleBookingSubmit(e) {
  e.preventDefault();

  const serviceId = document.getElementById('bookingServiceId').value;
  const name = document.getElementById('clientName').value.trim();
  const phone = document.getElementById('clientPhone').value.trim();
  const address = document.getElementById('clientAddress').value.trim();
  const date = document.getElementById('clientDate').value.trim();
  const notes = document.getElementById('clientNotes').value.trim();

  const item = services.find(s => s.id === serviceId);
  const targetProvider = item ? item.provider : "প্রোভাইডার";

  const bookings = JSON.parse(localStorage.getItem('sadik_bookings') || '[]');
  const newBooking = {
    id: 'book-' + Date.now(),
    serviceId,
    serviceTitle: item ? item.title : '',
    clientName: name,
    clientPhone: phone,
    clientAddress: address,
    clientDate: date,
    notes,
    createdAt: new Date().toISOString()
  };
  bookings.unshift(newBooking);
  localStorage.setItem('sadik_bookings', JSON.stringify(bookings));

  document.getElementById('bookingForm').reset();
  closeModal('bookingModal');

  showToast(
    "রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে!", 
    `${targetProvider} এর সাথে আপনার রিকোয়েস্ট নিশ্চিত করা হয়েছে। শীঘ্রই 01617-723455 থেকে বা প্রোভাইডার কল করবে।`
  );
}

// Toast notification helper
function showToast(title, message) {
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  if (!toast) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  toast.classList.add('toast-visible');

  setTimeout(() => {
    toast.classList.remove('toast-visible');
  }, 4000);
}
