import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Star, ArrowRight, Filter, Clock, Shield, Search, Heart, 
  Map, Grid, ChevronDown, Check, SlidersHorizontal, HeartCrack, 
  Plane, Building, Car, Award, HelpCircle, Phone, Compass, Train
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// India-focused luxury destinations database
const destinations = [
  {
    id: 1,
    name: 'Manali',
    country: 'Himachal Pradesh',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 12999,
    durationDays: 4,
    visa: 'No Visa',
    bestSeason: 'Mar – Jun',
    tag: 'Adventure',
    desc: 'Snow-capped peaks, lush valleys, Solang Valley adventures, Rohtang Pass, and the enchanting Old Manali vibes.',
    flightsIncluded: false,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 8540,
    popularScore: 99,
    dateAdded: '2026-01-10',
    mapCoords: { x: 230, y: 120 }
  },
  {
    id: 2,
    name: 'Goa',
    country: 'Goa',
    region: 'West India',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 9999,
    durationDays: 4,
    visa: 'No Visa',
    bestSeason: 'Oct – Mar',
    tag: 'Beach',
    desc: 'Sun-kissed beaches, Portuguese heritage, vibrant nightlife, seafood shacks, and stunning sunset cruises.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Most Booked',
    travelersCount: 12820,
    popularScore: 100,
    dateAdded: '2026-02-15',
    mapCoords: { x: 195, y: 485 }
  },
  {
    id: 3,
    name: 'Jaipur',
    country: 'Rajasthan',
    region: 'West India',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 8999,
    durationDays: 3,
    visa: 'No Visa',
    bestSeason: 'Oct – Mar',
    tag: 'Heritage',
    desc: 'The Pink City — Hawa Mahal, Amber Fort, City Palace, colorful bazaars, and royal Rajasthani hospitality.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 6450,
    popularScore: 96,
    dateAdded: '2025-11-20',
    mapCoords: { x: 215, y: 245 }
  },
  {
    id: 4,
    name: 'Rishikesh',
    country: 'Uttarakhand',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 6999,
    durationDays: 3,
    visa: 'No Visa',
    bestSeason: 'Sep – Jun',
    tag: 'Adventure',
    desc: 'Yoga capital of the world — white water rafting, bungee jumping, Lakshman Jhula, Ganga Aarti, and spiritual retreats.',
    flightsIncluded: false,
    resort5Star: false,
    transfers: true,
    tagBadge: '',
    travelersCount: 7980,
    popularScore: 95,
    dateAdded: '2026-03-01',
    mapCoords: { x: 260, y: 170 }
  },
  {
    id: 5,
    name: 'Kerala',
    country: 'Kerala',
    region: 'South India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 15999,
    durationDays: 5,
    visa: 'No Visa',
    bestSeason: 'Sep – Mar',
    tag: 'Romantic',
    desc: 'God\'s Own Country — serene backwaters, Ayurveda spas, lush tea gardens, and pristine Malabar beaches.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 5890,
    popularScore: 97,
    dateAdded: '2025-12-05',
    mapCoords: { x: 220, y: 580 }
  },
  {
    id: 6,
    name: 'Leh-Ladakh',
    country: 'Jammu & Kashmir',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1614956933865-7cf3f08a2778?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 24999,
    durationDays: 7,
    visa: 'No Visa',
    bestSeason: 'Jun – Sep',
    tag: 'Adventure',
    desc: 'Land of high passes — Pangong Lake, Nubra Valley, Khardung La, ancient monasteries, and surreal landscapes.',
    flightsIncluded: true,
    resort5Star: false,
    transfers: true,
    tagBadge: 'Most Booked',
    travelersCount: 4120,
    popularScore: 93,
    dateAdded: '2026-04-12',
    mapCoords: { x: 250, y: 60 }
  },
  {
    id: 7,
    name: 'Varanasi',
    country: 'Uttar Pradesh',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    price: 5999,
    durationDays: 3,
    visa: 'No Visa',
    bestSeason: 'Oct – Mar',
    tag: 'Spiritual',
    desc: 'The oldest living city — mesmerizing Ganga Aarti, ancient ghats, Kashi Vishwanath, and deep spiritual energy.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: '',
    travelersCount: 9100,
    popularScore: 94,
    dateAdded: '2026-02-28',
    mapCoords: { x: 340, y: 260 }
  },
  {
    id: 8,
    name: 'Shimla',
    country: 'Himachal Pradesh',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    price: 7999,
    durationDays: 3,
    visa: 'No Visa',
    bestSeason: 'Mar – Jun',
    tag: 'Hill Station',
    desc: 'Queen of Hill Stations — The Ridge, Mall Road, Kufri adventures, Toy Train, and colonial British charm.',
    flightsIncluded: false,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 7200,
    popularScore: 92,
    dateAdded: '2026-01-20',
    mapCoords: { x: 240, y: 135 }
  },
  {
    id: 9,
    name: 'Udaipur',
    country: 'Rajasthan',
    region: 'West India',
    image: 'https://images.unsplash.com/photo-1602508513268-9c4e4644fa46?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 11999,
    durationDays: 3,
    visa: 'No Visa',
    bestSeason: 'Oct – Mar',
    tag: 'Romantic',
    desc: 'City of Lakes — Lake Pichola, City Palace, Jag Mandir, sunset boat rides, and Venice of the East.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: '',
    travelersCount: 4900,
    popularScore: 91,
    dateAdded: '2025-10-15',
    mapCoords: { x: 195, y: 290 }
  },
  {
    id: 10,
    name: 'Agra',
    country: 'Uttar Pradesh',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    price: 4999,
    durationDays: 2,
    visa: 'No Visa',
    bestSeason: 'Oct – Mar',
    tag: 'Heritage',
    desc: 'Home of the Taj Mahal — the world\'s greatest monument of love, Agra Fort, Fatehpur Sikri, and Mughal legacy.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Must Visit',
    travelersCount: 15000,
    popularScore: 98,
    dateAdded: '2026-01-05',
    mapCoords: { x: 280, y: 225 }
  },
  {
    id: 11,
    name: 'Darjeeling',
    country: 'West Bengal',
    region: 'East India',
    image: 'https://images.unsplash.com/photo-1622308644420-f7acbd149ea6?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    price: 8499,
    durationDays: 4,
    visa: 'No Visa',
    bestSeason: 'Mar – Jun',
    tag: 'Hill Station',
    desc: 'Queen of the Hills — Tiger Hill sunrise, Toy Train ride, tea gardens, and panoramic Kanchenjunga views.',
    flightsIncluded: false,
    resort5Star: true,
    transfers: true,
    tagBadge: '',
    travelersCount: 3200,
    popularScore: 87,
    dateAdded: '2026-03-10',
    mapCoords: { x: 415, y: 195 }
  },
  {
    id: 12,
    name: 'Andaman',
    country: 'Andaman & Nicobar',
    region: 'Islands',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 19999,
    durationDays: 5,
    visa: 'No Visa',
    bestSeason: 'Oct – May',
    tag: 'Beach',
    desc: 'Turquoise waters, pristine Radhanagar Beach, Cellular Jail history, scuba diving, and untouched coral reefs.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Premium',
    travelersCount: 2800,
    popularScore: 90,
    dateAdded: '2026-02-20',
    mapCoords: { x: 470, y: 480 }
  },
];

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Helper to format currency in Indian System
const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

export default function Destinations() {
  // Page states
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Initialize wishlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('safaryatri_wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    let updated;
    if (wishlist.includes(id)) {
      updated = wishlist.filter(item => item !== id);
    } else {
      updated = [...wishlist, id];
    }
    setWishlist(updated);
    localStorage.setItem('safaryatri_wishlist', JSON.stringify(updated));
  };

  // Filter and Sorting Logic
  const getFilteredDestinations = () => {
    return destinations
      .filter(d => {
        const matchQuery = 
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.bestSeason.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchRegion = selectedRegion === 'All' || d.region === selectedRegion;
        const matchTag = selectedTag === 'All' || d.tag === selectedTag;

        let matchBudget = true;
        if (selectedBudget === 'Under ₹5K') matchBudget = d.price < 5000;
        else if (selectedBudget === '₹5K–₹10K') matchBudget = d.price >= 5000 && d.price <= 10000;
        else if (selectedBudget === '₹10K–₹20K') matchBudget = d.price >= 10000 && d.price <= 20000;
        else if (selectedBudget === '₹20K+') matchBudget = d.price > 20000;

        let matchDuration = true;
        if (selectedDuration === '2–3 Days') matchDuration = d.durationDays >= 2 && d.durationDays <= 3;
        else if (selectedDuration === '4–5 Days') matchDuration = d.durationDays >= 4 && d.durationDays <= 5;
        else if (selectedDuration === '5–7 Days') matchDuration = d.durationDays >= 5 && d.durationDays <= 7;
        else if (selectedDuration === '7+ Days') matchDuration = d.durationDays > 7;

        return matchQuery && matchRegion && matchTag && matchBudget && matchDuration;
      })
      .sort((a, b) => {
        if (sortBy === 'Most Popular') return b.popularScore - a.popularScore;
        if (sortBy === 'Highest Rated') return b.rating - a.rating;
        if (sortBy === 'Price Low → High') return a.price - b.price;
        if (sortBy === 'Price High → Low') return b.price - a.price;
        if (sortBy === 'Newest') return new Date(b.dateAdded) - new Date(a.dateAdded);
        if (sortBy === 'Most Booked') return b.travelersCount - a.travelersCount;
        return 0;
      });
  };

  const filtered = getFilteredDestinations();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F8FAFC]">
      
      {/* ── Page Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="section-label mx-auto mb-3">✦ India Destination Hub</div>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-3 text-slate-900"
            style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1.5px' }}
          >
            Explore <span className="text-gradient">Incredible India</span>
          </h1>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base md:text-lg">
            Discover breathtaking destinations across India — from snow-capped Himalayas to sun-kissed beaches, ancient temples to vibrant cities.
          </p>
        </motion.div>

        {/* ── Search Bar Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl mx-auto relative z-30 mb-8"
        >
          <div className="glass-card p-3 rounded-2xl flex flex-col md:flex-row items-center gap-3 border border-white/80 shadow-xl shadow-slate-100">
            <div className="relative w-full flex-grow">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, states, seasons, or styles..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00CFC8] focus:bg-white transition-all text-sm font-medium"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Link
                to="/explore-india"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold border border-[#00CFC8]/40 bg-[#00CFC8]/10 text-[#00CFC8] hover:bg-[#00CFC8] hover:text-white transition-colors w-full md:w-auto shadow-sm"
              >
                <Compass className="w-4 h-4" /> Full India Guide
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── Quick Statistics Row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 py-6 border-t border-b border-slate-100 mb-10 text-center"
        >
          {[
            { label: '12 Destinations', val: 'Curated' },
            { label: '50,000+ Travelers', val: 'Satisfied' },
            { label: '200+ Experiences', val: 'India Wide' },
            { label: '4.9★ Customer Rating', val: 'Google Verified' },
            { label: 'Train & Flight', val: 'Options' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-extrabold text-[#0F172A] text-sm md:text-base leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {item.label}
              </span>
              <span className="text-[#64748B] text-[10px] uppercase font-bold tracking-wider mt-0.5">{item.val}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Premium Filtering & Sorting Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 mb-10 shadow-sm relative z-20"
        >
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-50">
            <SlidersHorizontal className="w-5 h-5 text-[#00CFC8]" />
            <h3 className="font-extrabold text-slate-800 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Refine Your Search
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Region Filter */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Region</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'North India', 'South India', 'West India', 'East India', 'Islands'].map(r => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedRegion === r
                        ? 'bg-[#00CFC8] text-white border-[#00CFC8] shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style Filter */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Travel Style</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Adventure', 'Beach', 'Heritage', 'Romantic', 'Spiritual', 'Hill Station'].map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTag(t)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedTag === t
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Filter */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Budget (Per Person)</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Under ₹5K', '₹5K–₹10K', '₹10K–₹20K', '₹20K+'].map(b => (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedBudget === b
                        ? 'bg-[#00CFC8] text-white border-[#00CFC8] shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Duration</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', '2–3 Days', '4–5 Days', '5–7 Days', '7+ Days'].map(d => (
                  <button
                    key={d}
                    onClick={() => setSelectedDuration(d)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedDuration === d
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sorting panel */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-5 border-t border-slate-100 gap-4">
            <span className="text-slate-500 text-xs font-semibold">
              Showing <span className="text-[#00CFC8] font-extrabold">{filtered.length}</span> destinations matching filters
            </span>
            <div className="relative">
              <span className="text-slate-500 text-xs font-bold mr-2 uppercase tracking-wide">Sort By:</span>
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="bg-slate-50 hover:bg-slate-100 text-[#0F172A] text-xs font-bold px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-1.5 transition-colors focus:outline-none"
              >
                {sortBy} <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden py-1.5"
                  >
                    {[
                      'Most Popular',
                      'Highest Rated',
                      'Price Low → High',
                      'Price High → Low',
                      'Newest',
                      'Most Booked'
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSortBy(opt);
                          setIsSortOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00CFC8] flex items-center justify-between"
                      >
                        {opt}
                        {sortBy === opt && <Check className="w-3.5 h-3.5 text-[#00CFC8]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ── Featured Destination of the Month Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-12 shadow-xl border border-white/20 min-h-[340px] flex items-center bg-slate-900"
        >
          <img
            src="https://images.unsplash.com/photo-1602508513268-9c4e4644fa46?q=80&w=1200&auto=format&fit=crop"
            alt="Udaipur"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute top-6 right-6">
            <span className="bg-[#00CFC8] text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-lg">
              Destination of the Month
            </span>
          </div>

          <div className="relative z-10 px-8 py-10 md:px-14 max-w-xl text-left">
            <span className="text-white/60 font-bold text-xs uppercase tracking-widest block mb-1">Exclusive Monsoon Offer</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Udaipur Royal Escape
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-6 font-medium">
              Lake Palace views, royal heritage walks, and sunset boat cruises on Lake Pichola. Save 25% when you book before month end.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest block">Starting from</span>
                <span className="text-2xl font-black text-[#00CFC8] block" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {formatINR(11999)} <span className="text-xs font-semibold text-white/70">/ 3 Nights</span>
                </span>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,207,200,0.4)' }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#00CFC8] hover:bg-[#00b5af] text-white text-xs font-extrabold px-6 py-3.5 rounded-full flex items-center gap-2 shadow-lg transition-all"
                >
                  Explore Offer <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── View Toggle: Grid / Map ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {filtered.length} Destinations Found
          </h2>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#00CFC8] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> Grid
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'map'
                  ? 'bg-[#00CFC8] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Map className="w-3.5 h-3.5" /> Map
            </button>
          </div>
        </div>
      </div>

      {/* ── India Map View ── */}
      <AnimatePresence mode="wait">
        {viewMode === 'map' && (
          <motion.div
            key="map-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
          >
            <div className="rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F8FAFC 100%)' }}>
              {/* Map Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00CFC8 0%, #0EA5E9 100%)', boxShadow: '0 4px 14px rgba(0,207,200,0.3)' }}>
                    <Map className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Interactive India Map
                    </h3>
                    <p className="text-slate-400 text-[11px] font-medium">Click any pin to explore destination details</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { color: '#00CFC8', label: 'Beach' },
                    { color: '#F59E0B', label: 'Heritage' },
                    { color: '#8B5CF6', label: 'Spiritual' },
                    { color: '#EF4444', label: 'Adventure' },
                    { color: '#EC4899', label: 'Romantic' },
                    { color: '#10B981', label: 'Hill Station' },
                  ].map(l => (
                    <span key={l.label} className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1">
                      <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ background: l.color }} />
                      <span className="text-[10px] font-bold text-slate-500">{l.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12" style={{ minHeight: '680px' }}>
                {/* ─── Map Canvas ─── */}
                <div
                  className="lg:col-span-8 relative flex items-center justify-center overflow-hidden"
                  style={{
                    background: `
                      radial-gradient(ellipse 80% 60% at 40% 50%, rgba(0,207,200,0.04) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 40% at 70% 30%, rgba(14,165,233,0.03) 0%, transparent 70%),
                      linear-gradient(180deg, #F8FDFD 0%, #F0F7FF 50%, #F8FAFC 100%)
                    `,
                  }}
                >
                  {/* Decorative grid dots */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />

                  <svg viewBox="0 0 600 720" className="w-full h-full" style={{ maxHeight: '660px', padding: '16px' }}>
                    <defs>
                      {/* India fill gradient */}
                      <linearGradient id="indiaFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00CFC8" stopOpacity="0.08" />
                        <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.04" />
                      </linearGradient>
                      {/* Glow filter */}
                      <filter id="markerGlow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                      {/* Shadow filter */}
                      <filter id="tooltipShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.12" />
                      </filter>
                    </defs>

                    {/* ── Detailed India Outline ── */}
                    <path
                      d="M245,30 L255,25 L270,30 L280,20 L295,28 L305,22 L315,35 L325,30 L340,42 L355,38 L365,48 L375,45 L385,55 L395,50 L400,60 L410,55 L420,65 L415,75 L405,80 L395,78 L385,85 L380,95 L370,90 L360,100 L365,110 L375,115 L385,108 L395,112 L410,105 L420,110 L430,118 L420,130 L410,125 L400,132 L390,128 L380,138 L370,135 L360,145 L365,155 L375,160 L385,155 L395,162 L405,158 L415,165 L420,175 L410,180 L400,178 L390,185 L380,180 L370,190 L375,200 L385,205 L395,200 L405,208 L410,218 L400,225 L390,222 L380,228 L370,225 L360,235 L355,245 L360,255 L370,260 L378,268 L372,278 L365,285 L358,292 L350,298 L345,310 L340,322 L335,335 L328,345 L320,355 L315,365 L310,378 L305,390 L298,400 L290,410 L285,420 L278,430 L272,442 L265,455 L260,468 L255,480 L252,490 L248,500 L245,510 L240,522 L238,535 L235,548 L232,560 L230,572 L228,582 L225,592 L222,600 L220,610 L218,618 L220,628 L225,635 L230,640 L228,648 L222,652 L215,648 L210,640 L205,632 L200,625 L195,618 L190,608 L186,598 L182,585 L180,575 L178,565 L175,555 L172,542 L170,530 L168,518 L165,505 L162,495 L160,485 L158,472 L160,462 L165,452 L168,440 L172,428 L175,418 L178,408 L180,398 L182,388 L180,375 L175,365 L170,355 L165,345 L160,338 L155,328 L150,318 L145,310 L140,302 L135,295 L130,285 L125,278 L120,270 L118,260 L120,248 L125,238 L130,228 L135,218 L140,210 L148,198 L155,188 L160,180 L168,172 L175,165 L180,155 L185,145 L188,135 L192,125 L195,115 L198,105 L200,95 L205,85 L210,78 L215,68 L218,58 L222,48 L228,40 L235,35 L245,30 Z"
                      fill="url(#indiaFill)"
                      stroke="#00CFC8"
                      strokeWidth="1.5"
                      strokeOpacity="0.3"
                      strokeLinejoin="round"
                    />
                    {/* Inner glow of India */}
                    <path
                      d="M245,30 L255,25 L270,30 L280,20 L295,28 L305,22 L315,35 L325,30 L340,42 L355,38 L365,48 L375,45 L385,55 L395,50 L400,60 L410,55 L420,65 L415,75 L405,80 L395,78 L385,85 L380,95 L370,90 L360,100 L365,110 L375,115 L385,108 L395,112 L410,105 L420,110 L430,118 L420,130 L410,125 L400,132 L390,128 L380,138 L370,135 L360,145 L365,155 L375,160 L385,155 L395,162 L405,158 L415,165 L420,175 L410,180 L400,178 L390,185 L380,180 L370,190 L375,200 L385,205 L395,200 L405,208 L410,218 L400,225 L390,222 L380,228 L370,225 L360,235 L355,245 L360,255 L370,260 L378,268 L372,278 L365,285 L358,292 L350,298 L345,310 L340,322 L335,335 L328,345 L320,355 L315,365 L310,378 L305,390 L298,400 L290,410 L285,420 L278,430 L272,442 L265,455 L260,468 L255,480 L252,490 L248,500 L245,510 L240,522 L238,535 L235,548 L232,560 L230,572 L228,582 L225,592 L222,600 L220,610 L218,618 L220,628 L225,635 L230,640 L228,648 L222,652 L215,648 L210,640 L205,632 L200,625 L195,618 L190,608 L186,598 L182,585 L180,575 L178,565 L175,555 L172,542 L170,530 L168,518 L165,505 L162,495 L160,485 L158,472 L160,462 L165,452 L168,440 L172,428 L175,418 L178,408 L180,398 L182,388 L180,375 L175,365 L170,355 L165,345 L160,338 L155,328 L150,318 L145,310 L140,302 L135,295 L130,285 L125,278 L120,270 L118,260 L120,248 L125,238 L130,228 L135,218 L140,210 L148,198 L155,188 L160,180 L168,172 L175,165 L180,155 L185,145 L188,135 L192,125 L195,115 L198,105 L200,95 L205,85 L210,78 L215,68 L218,58 L222,48 L228,40 L235,35 L245,30 Z"
                      fill="none"
                      stroke="#00CFC8"
                      strokeWidth="0.5"
                      strokeOpacity="0.15"
                      strokeDasharray="4,4"
                    />

                    {/* ── Sri Lanka (small shape) ── */}
                    <ellipse cx="252" cy="665" rx="15" ry="20" fill="rgba(0,207,200,0.04)" stroke="#00CFC8" strokeWidth="0.8" strokeOpacity="0.2" />
                    <text x="252" y="670" textAnchor="middle" fill="#94A3B8" fontSize="9" fontWeight="500" fontFamily="Outfit, sans-serif" opacity="0.5">Sri Lanka</text>

                    {/* ── Ocean Labels ── */}
                    <text x="80" y="420" fill="#0EA5E9" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif" opacity="0.18" letterSpacing="8">
                      ARABIAN
                    </text>
                    <text x="95" y="438" fill="#0EA5E9" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif" opacity="0.18" letterSpacing="8">
                      SEA
                    </text>
                    <text x="360" y="530" fill="#0EA5E9" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif" opacity="0.18" letterSpacing="8">
                      BAY OF
                    </text>
                    <text x="360" y="548" fill="#0EA5E9" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif" opacity="0.18" letterSpacing="8">
                      BENGAL
                    </text>
                    <text x="170" y="690" fill="#0EA5E9" fontSize="11" fontWeight="600" fontFamily="Outfit, sans-serif" opacity="0.15" letterSpacing="12">
                      INDIAN OCEAN
                    </text>

                    {/* ── Compass Rose ── */}
                    <g transform="translate(530, 60)">
                      <circle cx="0" cy="0" r="22" fill="white" fillOpacity="0.7" stroke="#CBD5E1" strokeWidth="0.5" />
                      <line x1="0" y1="-18" x2="0" y2="18" stroke="#CBD5E1" strokeWidth="0.5" />
                      <line x1="-18" y1="0" x2="18" y2="0" stroke="#CBD5E1" strokeWidth="0.5" />
                      <polygon points="0,-16 -3,-6 3,-6" fill="#EF4444" />
                      <polygon points="0,16 -3,6 3,6" fill="#CBD5E1" />
                      <text x="0" y="-20" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="800" fontFamily="Outfit, sans-serif">N</text>
                      <text x="0" y="28" textAnchor="middle" fill="#94A3B8" fontSize="7" fontWeight="600" fontFamily="Outfit, sans-serif">S</text>
                      <text x="24" y="3" textAnchor="middle" fill="#94A3B8" fontSize="7" fontWeight="600" fontFamily="Outfit, sans-serif">E</text>
                      <text x="-24" y="3" textAnchor="middle" fill="#94A3B8" fontSize="7" fontWeight="600" fontFamily="Outfit, sans-serif">W</text>
                    </g>

                    {/* ── Region Labels ── */}
                    <text x="260" y="100" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="700" fontFamily="Outfit, sans-serif" opacity="0.35" letterSpacing="4">NORTH INDIA</text>
                    <text x="210" y="360" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="700" fontFamily="Outfit, sans-serif" opacity="0.35" letterSpacing="4">WEST INDIA</text>
                    <text x="350" y="235" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="700" fontFamily="Outfit, sans-serif" opacity="0.35" letterSpacing="4">CENTRAL</text>
                    <text x="230" y="560" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="700" fontFamily="Outfit, sans-serif" opacity="0.35" letterSpacing="4">SOUTH INDIA</text>
                    <text x="410" y="195" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="700" fontFamily="Outfit, sans-serif" opacity="0.35" letterSpacing="4">EAST INDIA</text>

                    {/* ── Destination Markers ── */}
                    {filtered.map((dest) => {
                      const tagColors = {
                        'Beach': '#00CFC8', 'Adventure': '#EF4444', 'Heritage': '#F59E0B',
                        'Romantic': '#EC4899', 'Spiritual': '#8B5CF6', 'Hill Station': '#10B981',
                      };
                      const color = tagColors[dest.tag] || '#00CFC8';
                      const isSelected = selectedMarker === dest.id;
                      const cx = dest.mapCoords.x;
                      const cy = dest.mapCoords.y;

                      return (
                        <g
                          key={dest.id}
                          className="cursor-pointer"
                          onClick={() => setSelectedMarker(isSelected ? null : dest.id)}
                        >
                          {/* Outer pulse ring */}
                          <circle cx={cx} cy={cy} r="12" fill="none" stroke={color} strokeWidth="1" opacity="0.15">
                            <animate attributeName="r" from="12" to="24" dur="2.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" from="0.25" to="0" dur="2.5s" repeatCount="indefinite" />
                          </circle>

                          {/* Halo */}
                          <circle cx={cx} cy={cy} r={isSelected ? 16 : 10} fill={color} fillOpacity={isSelected ? 0.12 : 0.06} />

                          {/* White border ring */}
                          <circle cx={cx} cy={cy} r={isSelected ? 10 : 7} fill="white" stroke={color} strokeWidth={isSelected ? 2.5 : 1.5} filter="url(#markerGlow)" />

                          {/* Inner colored dot */}
                          <circle cx={cx} cy={cy} r={isSelected ? 5 : 3.5} fill={color} />

                          {/* Tooltip card (on selected) */}
                          {isSelected && (
                            <g>
                              {/* Connector line */}
                              <line x1={cx} y1={cy - 16} x2={cx} y2={cy - 28} stroke={color} strokeWidth="1.5" strokeDasharray="2,2" opacity="0.5" />
                              {/* Tooltip bg */}
                              <rect x={cx - 65} y={cy - 72} width="130" height="42" rx="8" fill="white" filter="url(#tooltipShadow)" />
                              <rect x={cx - 65} y={cy - 72} width="130" height="42" rx="8" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.25" />
                              {/* Accent stripe */}
                              <rect x={cx - 65} y={cy - 72} width="4" height="42" rx="8" fill={color} />
                              {/* Name */}
                              <text x={cx - 55} y={cy - 55} fill="#0F172A" fontSize="13" fontWeight="800" fontFamily="Outfit, sans-serif">
                                {dest.name}
                              </text>
                              {/* Price + tag */}
                              <text x={cx - 55} y={cy - 40} fill={color} fontSize="11" fontWeight="700" fontFamily="Outfit, sans-serif">
                                {formatINR(dest.price)}
                              </text>
                              <text x={cx + 10} y={cy - 40} fill="#94A3B8" fontSize="9" fontWeight="600" fontFamily="Outfit, sans-serif">
                                · {dest.tag}
                              </text>
                            </g>
                          )}

                          {/* Label (when NOT selected) */}
                          {!isSelected && (
                            <text
                              x={cx + 12}
                              y={cy + 4}
                              fill="#334155"
                              fontSize="11"
                              fontWeight="700"
                              fontFamily="Outfit, sans-serif"
                            >
                              {dest.name}
                            </text>
                          )}
                        </g>
                      );
                    })}

                    {/* ── Scale Bar ── */}
                    <g transform="translate(30, 680)">
                      <line x1="0" y1="0" x2="80" y2="0" stroke="#94A3B8" strokeWidth="1.5" />
                      <line x1="0" y1="-4" x2="0" y2="4" stroke="#94A3B8" strokeWidth="1" />
                      <line x1="80" y1="-4" x2="80" y2="4" stroke="#94A3B8" strokeWidth="1" />
                      <text x="40" y="14" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="600" fontFamily="Outfit, sans-serif">~500 km</text>
                    </g>
                  </svg>
                </div>

                {/* ─── Side Panel ─── */}
                <div className="lg:col-span-4 border-l border-slate-100 overflow-y-auto" style={{ maxHeight: '680px', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
                  {selectedMarker ? (() => {
                    const dest = destinations.find(d => d.id === selectedMarker);
                    if (!dest) return null;
                    const tagColors = {
                      'Beach': '#00CFC8', 'Adventure': '#EF4444', 'Heritage': '#F59E0B',
                      'Romantic': '#EC4899', 'Spiritual': '#8B5CF6', 'Hill Station': '#10B981',
                    };
                    const color = tagColors[dest.tag] || '#00CFC8';
                    return (
                      <motion.div
                        key={dest.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-5"
                      >
                        {/* Back button */}
                        <button
                          onClick={() => setSelectedMarker(null)}
                          className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#00CFC8] transition-colors mb-4 cursor-pointer"
                        >
                          <ArrowRight className="w-3.5 h-3.5 rotate-180" /> All Destinations
                        </button>

                        {/* Hero image */}
                        <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/10]">
                          <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="text-[9px] font-bold uppercase tracking-widest mb-0.5 block" style={{ color }}>{dest.country}</span>
                            <h3 className="text-2xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>{dest.name}</h3>
                          </div>
                          <span
                            className="absolute top-3 left-3 text-[9px] font-bold uppercase px-3 py-1.5 rounded-lg text-white shadow-md"
                            style={{ background: color }}
                          >
                            {dest.tag}
                          </span>
                          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>{dest.rating}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-500 text-[13px] leading-relaxed mb-5">{dest.desc}</p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-3 gap-2 mb-5">
                          {[
                            { label: 'Duration', value: `${dest.durationDays} Nights`, icon: '🌙' },
                            { label: 'Season', value: dest.bestSeason, icon: '☀️' },
                            { label: 'Bookings', value: `${(dest.travelersCount / 1000).toFixed(1)}K+`, icon: '✈️' },
                          ].map(s => (
                            <div key={s.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                              <span className="text-base mb-0.5 block">{s.icon}</span>
                              <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wide">{s.label}</span>
                              <span className="font-extrabold text-slate-700 text-[11px]" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Inclusions */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {dest.flightsIncluded && <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full">✓ Flights</span>}
                          {dest.resort5Star && <span className="text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-full">✓ 5★ Stay</span>}
                          {dest.transfers && <span className="text-[10px] font-bold bg-violet-50 text-violet-700 border border-violet-100 px-2.5 py-1 rounded-full">✓ Transfers</span>}
                          <span className="text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full">✓ No Visa</span>
                        </div>

                        {/* Price + CTA */}
                        <div className="rounded-2xl p-4 border border-slate-100 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #F0FDFA 0%, #F0F4FF 100%)' }}>
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase block">Starting from</span>
                            <span className="text-2xl font-black text-[#1E293B] block -mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>{formatINR(dest.price)}</span>
                            <span className="text-[10px] text-slate-400 font-medium">per person</span>
                          </div>
                          <Link to="/contact">
                            <motion.button
                              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,207,200,0.3)' }}
                              whileTap={{ scale: 0.97 }}
                              className="text-white text-xs font-extrabold px-6 py-3 rounded-xl flex items-center gap-1.5 shadow-lg cursor-pointer"
                              style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}
                            >
                              Book Now <ArrowRight className="w-3.5 h-3.5" />
                            </motion.button>
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })() : (
                    <div className="p-4">
                      <div className="flex items-center justify-between px-2 py-3 mb-3 border-b border-slate-100">
                        <h4 className="font-extrabold text-slate-700 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          All Destinations
                        </h4>
                        <span className="text-[10px] font-bold text-[#00CFC8] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                          {filtered.length} places
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {filtered.map((dest) => {
                          const tagColors = {
                            'Beach': '#00CFC8', 'Adventure': '#EF4444', 'Heritage': '#F59E0B',
                            'Romantic': '#EC4899', 'Spiritual': '#8B5CF6', 'Hill Station': '#10B981',
                          };
                          const color = tagColors[dest.tag] || '#00CFC8';
                          return (
                            <button
                              key={dest.id}
                              onClick={() => setSelectedMarker(dest.id)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-[#00CFC8]/50 hover:shadow-md transition-all text-left cursor-pointer group"
                            >
                              <div className="relative">
                                <img src={dest.image} alt={dest.name} className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-100" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white" style={{ background: color }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-extrabold text-slate-800 text-[13px] truncate group-hover:text-[#00CFC8] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>{dest.name}</h5>
                                <p className="text-[10px] text-slate-400 font-medium truncate">{dest.country}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-600">
                                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />{dest.rating}
                                  </span>
                                  <span className="text-[10px] text-slate-300">·</span>
                                  <span className="text-[10px] font-semibold" style={{ color }}>{dest.tag}</span>
                                </div>
                              </div>
                              <div className="text-right shrink-0">
                                <span className="font-extrabold text-sm text-[#1E293B] block" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                  {formatINR(dest.price)}
                                </span>
                                <span className="text-[9px] text-slate-400 font-medium">{dest.durationDays}N</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Grid View ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewMode === 'grid' && (
        <motion.div
          key="grid"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <HeartCrack className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-[#0F172A] text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>No Matches Found</h3>
              <p className="text-[#64748B] text-sm max-w-md mx-auto px-4">
                We couldn't find any destinations matching your selection. Try clearing search keywords or choosing another region.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((dest, idx) => {
                const isWishlisted = wishlist.includes(dest.id);
                return (
                  <motion.div
                    key={dest.id}
                    variants={fadeUp}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-100/60 cursor-pointer relative"
                    style={{ boxShadow: '0 4px 20px rgba(15,23,42,0.04)', transition: 'box-shadow 0.4s ease, transform 0.4s ease' }}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 24px 48px -12px rgba(15,23,42,0.12), 0 8px 24px -8px rgba(0,207,200,0.15)',
                    }}
                  >
                    {/* Image Frame */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent" />

                      <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                        {dest.tagBadge && (
                          <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#00CFC8] text-white shadow-md">
                            {dest.tagBadge}
                          </span>
                        )}
                        <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-white border border-white/20">
                          {dest.tag}
                        </span>
                      </div>

                      <button
                        onClick={(e) => toggleWishlist(dest.id, e)}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center shadow-md hover:bg-white text-slate-600 hover:text-red-500 transition-colors z-10 cursor-pointer"
                      >
                        <Heart className={`w-4 h-4 transition-all duration-300 ${isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-600'}`} />
                      </button>

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="flex items-center gap-1 text-[#00CFC8] text-[10px] font-bold uppercase tracking-widest mb-0.5">
                          <MapPin className="w-3.5 h-3.5" /> {dest.country}
                        </span>
                        <h3 className="text-2xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.5px' }}>
                          {dest.name}
                        </h3>
                      </div>
                    </div>

                    {/* Info Body */}
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4 font-medium line-clamp-2">
                          {dest.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {dest.flightsIncluded && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                              <Plane className="w-2.5 h-2.5 text-[#00CFC8]" /> Flights Incl.
                            </span>
                          )}
                          {dest.resort5Star && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                              <Building className="w-2.5 h-2.5 text-[#00CFC8]" /> Premium Stay
                            </span>
                          )}
                          {dest.transfers && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                              <Car className="w-2.5 h-2.5 text-[#00CFC8]" /> Transfers
                            </span>
                          )}
                        </div>

                        <div className="h-px bg-slate-100 mb-4" />

                        <div className="grid grid-cols-3 gap-2 text-center mb-4">
                          <div className="bg-slate-50/50 rounded-xl p-2 border border-slate-100">
                            <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Duration</span>
                            <span className="font-extrabold text-slate-800 text-xs flex items-center justify-center gap-1 mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                              <Clock className="w-3 h-3 text-[#00CFC8]" /> {dest.durationDays} Nts
                            </span>
                          </div>
                          <div className="bg-emerald-50 text-emerald-700 border-emerald-100 rounded-xl p-2 border">
                            <span className="block text-[9px] font-bold uppercase tracking-wider opacity-60">Visa</span>
                            <span className="font-extrabold text-xs flex items-center justify-center gap-1 mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                              <Shield className="w-3 h-3 text-current" /> None
                            </span>
                          </div>
                          <div className="bg-slate-50/50 rounded-xl p-2 border border-slate-100">
                            <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Best Season</span>
                            <span className="font-extrabold text-slate-800 text-[10px] mt-0.5 block truncate" style={{ fontFamily: 'Outfit, sans-serif' }}>
                              {dest.bestSeason}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <span className="flex items-center gap-1 text-slate-700">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {dest.rating} Rating
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <span>{dest.travelersCount.toLocaleString()}+ Bookings</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-50">
                        <div>
                          <span className="text-[#94A3B8] text-[9px] font-bold uppercase tracking-widest block">Starting from</span>
                          <span className="text-xl font-black text-[#1E293B] block" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {formatINR(dest.price)}
                          </span>
                        </div>
                        <Link to="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,207,200,0.3)' }}
                            whileTap={{ scale: 0.96 }}
                            className="bg-gradient-to-r from-[#00CFC8] to-[#0EA5E9] hover:from-[#00b5af] hover:to-[#0284c7] text-white text-xs font-extrabold px-4 py-3 rounded-full flex items-center gap-1.5 shadow-md shadow-teal-500/10 transition-all cursor-pointer"
                          >
                            Book Now <ArrowRight className="w-3.5 h-3.5" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
        )}
      </div>

      {/* ── Recommended Indian Journeys ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-10">
          <div className="section-label mx-auto mb-3">✦ Handpicked Journeys</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1px' }}>
            Curated <span className="text-gradient">For You</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base mt-2">
            Tailored itineraries designed around India's most popular travel styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Himalayan Adventures',
              desc: 'Snow peaks, river rafting, mountain treks, and valley camping under the stars.',
              image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
              accent: '#00CFC8',
              destinations: ['Manali', 'Rishikesh', 'Leh-Ladakh']
            },
            {
              title: 'Royal Heritage Trail',
              desc: 'Majestic forts, opulent palaces, golden deserts, and legendary Rajput hospitality.',
              image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
              accent: '#F59E0B',
              destinations: ['Jaipur', 'Udaipur', 'Jodhpur']
            },
            {
              title: 'Spiritual India',
              desc: 'Ancient ghats, sacred temples, Ganga Aarti, meditation retreats, and inner peace.',
              image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
              accent: '#8B5CF6',
              destinations: ['Varanasi', 'Rishikesh', 'Haridwar']
            }
          ].map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100/60 shadow-sm flex flex-col group"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {rec.title}
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between text-left">
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                  {rec.desc}
                </p>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">Featured Locations</span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {rec.destinations.map(loc => (
                      <span key={loc} className="bg-slate-50 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200/50">
                        {loc}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact">
                    <button
                      className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 hover:text-white transition-all flex items-center justify-center gap-1.5 group cursor-pointer"
                      style={{ '--hover-bg': rec.accent }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = rec.accent}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Plan Trip <Compass className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Explore India CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-16 text-center text-white border border-white/10"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #0A0F1E 100%)',
            boxShadow: '0 30px 60px -15px rgba(15,23,42,0.3)'
          }}
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-10 bg-teal-500 filter blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-sky-500 filter blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#00CFC8] font-bold text-xs uppercase tracking-[0.2em] block mb-3">✦ Complete India Guide</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1px' }}>
              Want the Full State-Wise <span className="text-gradient">India Guide?</span>
            </h2>
            <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8">
              Explore 7 states, 50+ cities, and 400+ tourist places — from Uttarakhand's sacred temples to Rajasthan's golden forts, with PDF download.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/explore-india">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,207,200,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-[#00CFC8] hover:bg-[#00b5af] text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  Explore India Guide <Compass className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
                >
                  Talk To An Expert <Phone className="w-4 h-4 text-[#00CFC8]" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}