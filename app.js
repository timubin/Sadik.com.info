/**
 * Sadik.com.info - Core Application Logic
 * Supports Home Mistry, Car Rental, House Rent / To-Let & Open Community Listing
 */

// Initial realistic seed dataset
const INITIAL_SERVICES = [
  {
    id: "srv-1",
    title: "দক্ষ ইলেকট্রিশিয়ান ও হোম ওয়্যারিং সার্ভিস",
    category: "mistry",
    categoryLabel: "মিস্ত্রি সেবা",
    provider: "মোঃ রহিম ইলেকট্রিক ওয়ার্কস",
    phone: "01711223344",
    whatsapp: "8801711223344",
    location: "মিরপুর ১০, ঢাকা",
    area: "মিরপুর",
    rate: "৳৫০০ / ভিজিট",
    availability: "সকাল ৮টা - রাত ১০টা (জরুরি ২৪ ঘণ্টা)",
    rating: 4.9,
    reviewsCount: 38,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
    description: "বাসা-বাড়ির শর্ট সার্কিট সমাধান, ফ্যান/লাইট ফিটিংস, নতুন সার্কিট ব্রেকার ও ডিস্ট্রিবিউশন বোর্ড স্থাপন, আইপিএস কানেকশন এবং যেকোনো ইলেকট্রিক্যাল কাজের অভিজ্ঞ মিস্ত্রি।"
  },
  {
    id: "srv-2",
    title: "জরুরি প্লাম্বার ও পানির পাইপ ফিটিংস",
    category: "mistry",
    categoryLabel: "মিস্ত্রি সেবা",
    provider: "সুমন স্যানিটারি ও প্লাম্বিং",
    phone: "01822334455",
    whatsapp: "8801822334455",
    location: "ধানমন্ডি, ঢাকা",
    area: "ধানমন্ডি",
    rate: "৳৬০০ / কাজ শুরু",
    availability: "সকাল ৯টা - রাত ৯টা",
    rating: 4.8,
    reviewsCount: 26,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80",
    description: "বাথরুমের পাইপ লিক ঠিক করা, বেসিন ও কমোড ফিটিংস, পানির মোটর ইনস্টল ও লাইন ওয়াশ করার আধুনিক যন্ত্রপাতি সহ দ্রুততম সেবা।"
  },
  {
    id: "srv-3",
    title: "এসি ও ফ্রিজ মেরামত, গ্যাস রিফিল সার্ভিস",
    category: "mistry",
    categoryLabel: "মিস্ত্রি সেবা",
    provider: "কুল মাস্টার কুলিং সলিউশন",
    phone: "01933445566",
    whatsapp: "8801933445566",
    location: "উত্তরা সেক্টর ৭, ঢাকা",
    area: "উত্তরা",
    rate: "৳৮০০ / বেসিক সার্ভিসিং",
    availability: "২৪/৭ জরুরি সাপোর্ট",
    rating: 5.0,
    reviewsCount: 52,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    description: "ইনভার্টার ও নন-ইনভার্টার এসি ইন্সটলেশন, মাস্টার ওয়াশ, গ্যাস রিফিল এবং কম্প্রেসার মেরামত। ডিপ ফ্রিজ ও নরমাল ফ্রিজের যেকোনো সমস্যা সমাধান।"
  },
  {
    id: "srv-4",
    title: "নোয়াহ / হাইয়েস মাইক্রোবাস ও কার রেন্ট-এ-কার",
    category: "car",
    categoryLabel: "গাড়ি ভাড়া",
    provider: "গ্রিন লাইন রেন্ট-এ-কার ও ট্যুরস",
    phone: "01755667788",
    whatsapp: "8801755667788",
    location: "বনানী ও গুলশান, ঢাকা",
    area: "বনানী",
    rate: "৳৩,৫০০ / দিন (গ্যাস/তেল বাদে)",
    availability: "সারাদেশে ট্রিপ দেওয়া হয়",
    rating: 4.9,
    reviewsCount: 74,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    description: "পরিবার নিয়ে ভ্রমণ, অফিস ডিউটি, এয়ারপোর্ট পিক অ্যান্ড ড্রপ বা যেকোনো জেলায় যাওয়ার জন্য পরিচ্ছন্ন নোয়া/হাইয়েস মাইক্রোবাস ও এক্স করোলা কার।"
  },
  {
    id: "srv-5",
    title: "বাসা ও অফিস শিফটিং পিকআপ সার্ভিস (১ টন / ২ টন)",
    category: "car",
    categoryLabel: "গাড়ি ভাড়া",
    provider: "দ্রুত পরিবহন ও শিফটিং",
    phone: "01677889900",
    whatsapp: "8801677889900",
    location: "তেজগাঁও ও মহাখালী, ঢাকা",
    area: "অন্যান্য",
    rate: "৳১,৮০০ / লোকাল ট্রিপ",
    availability: "২৪ ঘণ্টা প্রস্তুত",
    rating: 4.7,
    reviewsCount: 41,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80",
    description: "বাসা বদল, অফিস ফার্নিচার বা মালামাল বহনে খোলা ও কাভার্ড ভ্যান পিকআপ। অভিজ্ঞ লোডার ও ড্রাইভার সহ ঝামেলাহীন শিফটিং।"
  },
  {
    id: "srv-6",
    title: "জরুরি আইসিইউ ও নরমাল অ্যাম্বুলেন্স সেবা",
    category: "car",
    categoryLabel: "গাড়ি ভাড়া",
    provider: "লাইফ কেয়ার অ্যাম্বুলেন্স সার্ভিস",
    phone: "01799001122",
    whatsapp: "8801799001122",
    location: "ঢাকা মেডিকেল ও সমগ্র বাংলাদেশ",
    area: "মতিঝিল",
    rate: "৳২,০০০ / ঢাকা সিটি",
    availability: "২৪ ঘণ্টা জরুরি সেবা",
    rating: 5.0,
    reviewsCount: 89,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=600&q=80",
    description: "অক্সিজেন ও ভেন্টিলেটরযুক্ত আইসিইউ অ্যাম্বুলেন্স, ফ্রিজিং অ্যাম্বুলেন্স ও এসি সাধারণ অ্যাম্বুলেন্স। সারাদেশের যেকোনো প্রান্তে দ্রুত রোগী স্থানান্তর।"
  },
  {
    id: "srv-7",
    title: "৩ বেডরুমের আলো-বাতাসপূর্ণ লাক্সারি ফ্ল্যাট ভাড়া (টু-লেট)",
    category: "rent",
    categoryLabel: "বাসা ভাড়া / টু-লেট",
    provider: "বাড়িওয়ালা (আলহাজ্ব মোস্তফা কামাল)",
    phone: "01744556677",
    whatsapp: "8801744556677",
    location: "সেক্টর ১১, রোড ৩, উত্তরা, ঢাকা",
    area: "উত্তরা",
    rate: "৳২২,০০০ / মাস",
    availability: "পরবর্তী মাসের ১ তারিখ থেকে খালি",
    rating: 4.9,
    reviewsCount: 12,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    description: "১৪৫০ বর্গফুট, ৩ বেড, ৩ বাথ, ৩ বারান্দা, ড্রয়িং-ডাইনিং, লিফট, জেনারেটর ব্যাকআপ, ২৪ ঘণ্টা সিকিউরিটি গার্ড ও গ্যারেজ সুবিধা।"
  },
  {
    id: "srv-8",
    title: "চাকরিজীবী/ছাত্রদের জন্য নিরিবিলি ব্যাচেলর রুম ও সিট ভাড়া",
    category: "rent",
    categoryLabel: "বাসা ভাড়া / টু-লেট",
    provider: "হাউস ম্যানেজার (জাহিদ হাসান)",
    phone: "01855667788",
    whatsapp: "8801855667788",
    location: "মিরপুর ২ (স্টেডিয়ামের কাছে), ঢাকা",
    area: "মিরপুর",
    rate: "৳৩,৫০০ / সিট (ওয়াইফাই ও পানি সহ)",
    availability: "বর্তমানে ২টি সিট খালি আছে",
    rating: 4.7,
    reviewsCount: 18,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    description: "পর্যাপ্ত আলো-বাতাস, খাবার পানির ফিল্টার, হাই-স্পিড ওয়াইফাই, বুয়া ব্যবস্থা ও পড়ার জন্য শান্ত পরিবেশ।"
  },
  {
    id: "srv-9",
    title: "মেইন রোডে আধুনিক শোরুম / অফিস স্পেস ভাড়া",
    category: "rent",
    categoryLabel: "বাসা ভাড়া / টু-লেট",
    provider: "প্রপার্টি ওনার (সাদিক হোসেন)",
    phone: "01722338899",
    whatsapp: "8801722338899",
    location: "মতিঝিল বাণিজ্যিক এলাকা, ঢাকা",
    area: "মতিঝিল",
    rate: "৳৪৫,০০০ / মাস",
    availability: "এখনই ব্যবহারের উপযোগী",
    rating: 4.8,
    reviewsCount: 9,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    description: "১২০০ স্কয়ার ফিট কমার্শিয়াল স্পেস, আইটি অফিস, শোরুম বা ডায়াগনস্টিক সেন্টারের জন্য উপযুক্ত। লিফট ও ফায়ার সেফটি অনুমোদিত।"
  },
  {
    id: "srv-10",
    title: "বাড়ি ও অফিস ডিপ ক্লিনিং এবং পেস্ট কন্ট্রোল",
    category: "others",
    categoryLabel: "অন্যান্য সেবা",
    provider: "ক্লিনসিটি ক্লিনিং সলিউশনস",
    phone: "01911223399",
    whatsapp: "8801911223399",
    location: "গুলশান ও বাড্ডা, ঢাকা",
    area: "গুলশান",
    rate: "৳১,৫০০ / প্যাকেজ শুরু",
    availability: "সপ্তাহে ৭ দিন",
    rating: 4.8,
    reviewsCount: 31,
    isVerified: true,
    isMyListing: false,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    description: "সোফা, কার্পেট ও কিচেন ডিপ ওয়াশ। তেলাপোকা ও ছারপোকা দমনে কার্যকর স্প্রে ও নিরাপদ পেস্ট কন্ট্রোল সার্ভিস।"
  }
];

// Presets mapping for image selection
const PRESET_IMAGES = {
  "mistry-electric": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
  "mistry-plumber": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80",
  "car": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
  "house": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80"
};

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
  const stored = localStorage.getItem('sadik_services');
  if (stored) {
    try {
      services = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored services, loading initial data", e);
      services = [...INITIAL_SERVICES];
    }
  } else {
    services = [...INITIAL_SERVICES];
    saveServices();
  }
}

// Save services to LocalStorage
function saveServices() {
  localStorage.setItem('sadik_services', JSON.stringify(services));
}

// Setup Event Listeners
function setupEventListeners() {
  // Realtime keyword search input listener
  const searchInput = document.getElementById('searchKeyword');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchKeyword = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Realtime category select change listener
  const catSelect = document.getElementById('searchCategory');
  if (catSelect) {
    catSelect.addEventListener('change', (e) => {
      currentCategoryFilter = e.target.value;
      updateActiveTabUI();
      applyFilters();
    });
  }

  // Realtime area select change listener
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

  // Update counter
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
    // Category pill icon & color
    let catIcon = 'fa-wrench';
    let catColor = 'bg-amber-100 text-amber-800 border-amber-200';
    if (item.category === 'car') {
      catIcon = 'fa-car';
      catColor = 'bg-blue-100 text-blue-800 border-blue-200';
    } else if (item.category === 'rent') {
      catIcon = 'fa-house-chimney';
      catColor = 'bg-emerald-100 text-emerald-800 border-emerald-200';
    } else if (item.category === 'others') {
      catIcon = 'fa-box-open';
      catColor = 'bg-purple-100 text-purple-800 border-purple-200';
    }

    const cleanWhatsapp = item.whatsapp ? item.whatsapp.replace(/[^0-9]/g, '') : item.phone.replace(/[^0-9]/g, '');
    const defaultImg = item.image || PRESET_IMAGES['mistry-electric'];

    return `
      <div class="service-card bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between group">
        <div>
          <!-- Card Image & Floating Badges -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-100">
            <img 
              src="${defaultImg}" 
              alt="${item.title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onerror="this.src='https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80'"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            
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
                <span class="bg-purple-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow">
                  <i class="fa-solid fa-user"></i> আমার বিজ্ঞাপন
                </span>
              ` : ''}
              ${item.isVerified ? `
                <span class="bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <i class="fa-solid fa-circle-check text-emerald-600"></i> ভেরিফাইড
                </span>
              ` : ''}
            </div>

            <!-- Price Tag at bottom of image -->
            <div class="absolute bottom-3 left-3 text-white">
              <span class="text-xs text-slate-200 block">চার্জ / ভাড়া:</span>
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
            <h3 class="font-bold text-slate-900 text-base leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
              ${item.title}
            </h3>

            <!-- Provider info -->
            <div class="mt-2.5 flex items-center gap-2 text-xs text-slate-600">
              <div class="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[10px]">
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
              href="tel:${item.phone}" 
              class="col-span-1 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 border border-brand-200"
              title="সরাসরি কল করুন"
            >
              <i class="fa-solid fa-phone text-xs"></i>
              <span>কল</span>
            </a>

            <!-- WhatsApp Chat Button -->
            <a 
              href="https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(`সালাম, Sadik.com.info তে আপনার "${item.title}" বিজ্ঞাপনটি দেখে যোগাযোগ করছি।`)}" 
              target="_blank" 
              class="col-span-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
              title="হোয়াটসঅ্যাপে মেসেজ পাঠান"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>চ্যাট</span>
            </a>

            <!-- Details / Book Button -->
            <button 
              onclick="showServiceDetails('${item.id}')" 
              class="col-span-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1"
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
    // 1. My Listings filter
    if (isMyListingsOnly && !item.isMyListing) {
      return false;
    }

    // 2. Category filter
    if (!isMyListingsOnly && currentCategoryFilter !== 'all') {
      if (item.category !== currentCategoryFilter) {
        return false;
      }
    }

    // 3. Area filter
    if (currentAreaFilter !== 'all') {
      const matchArea = (item.area && item.area.includes(currentAreaFilter)) || 
                        (item.location && item.location.includes(currentAreaFilter));
      if (!matchArea) return false;
    }

    // 4. Keyword search (Title, Description, Provider, Location)
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

  // Update filter info display bar
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

// Filter by category directly from tabs or nav
function filterByCategory(cat) {
  isMyListingsOnly = false;
  currentCategoryFilter = cat;

  // Sync select element if present
  const catSelect = document.getElementById('searchCategory');
  if (catSelect) catSelect.value = cat;

  updateActiveTabUI();
  applyFilters();

  // Scroll smoothly to section
  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Filter by location directly from footer/links
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

// Quick Search from hero tag pills
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
      tab.classList.remove('text-slate-600', 'bg-purple-50');
    } else {
      tab.classList.remove('active-tab');
      if (cat === 'my') {
        tab.classList.add('text-purple-700', 'bg-purple-50');
      } else {
        tab.classList.add('text-slate-600');
      }
    }
  });

  // Also update navbar active class
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

    // Visual button selection
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

  // Fallback image based on category
  let image = customImg;
  if (!image) {
    if (category === 'mistry') image = PRESET_IMAGES['mistry-electric'];
    else if (category === 'car') image = PRESET_IMAGES['car'];
    else if (category === 'rent') image = PRESET_IMAGES['house'];
    else image = PRESET_IMAGES['mistry-plumber'];
  }

  // Detect simple area keyword from location
  let area = "অন্যান্য";
  ['মিরপুর', 'ধানমন্ডি', 'উত্তরা', 'গুলশান', 'বনানী', 'মোহাম্মদপুর', 'বাড্ডা', 'মতিঝিল', 'চট্টগ্রাম', 'সিলেট'].forEach(a => {
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

  // Add to top of list
  services.unshift(newService);
  saveServices();

  // Reset form & close modal
  document.getElementById('addServiceForm').reset();
  closeModal('addServiceModal');

  // Re-render and show toast
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
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      
      <div class="absolute bottom-4 left-6 right-6 text-white">
        <span class="text-xs bg-brand-500 text-white font-bold px-2.5 py-0.5 rounded-full inline-block mb-1">
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
        <div class="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center text-xl font-bold">
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
          href="tel:${item.phone}" 
          class="bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-md"
        >
          <i class="fa-solid fa-phone"></i>
          <span>সরাসরি কল: ${item.phone}</span>
        </a>

        <a 
          href="https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(`সালাম, Sadik.com.info তে আপনার "${item.title}" বিজ্ঞাপনটি দেখে যোগাযোগ করছি।`)}" 
          target="_blank" 
          class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-md"
        >
          <i class="fa-brands fa-whatsapp text-lg"></i>
          <span>হোয়াটসঅ্যাপ চ্যাট</span>
        </a>
      </div>

      <!-- Booking Request Form Opener -->
      <button 
        onclick="openBookingModal('${item.id}', '${item.title.replace(/'/g, "\\'")}')" 
        class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 rounded-2xl transition flex items-center justify-center gap-2"
      >
        <i class="fa-solid fa-calendar-check text-brand-400"></i>
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

  // Store booking
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

  // Reset form and close
  document.getElementById('bookingForm').reset();
  closeModal('bookingModal');

  // Success toast
  showToast(
    "রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে!", 
    `${targetProvider} এর সাথে আপনার রিকোয়েস্ট নিশ্চিত করা হয়েছে। শীঘ্রই কল দেওয়া হবে।`
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
