import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Star, ArrowRight, Filter, Clock, Shield, Search, Heart, 
  Map, Grid, ChevronDown, Check, SlidersHorizontal, HeartCrack, 
  Plane, Building, Car, Award, HelpCircle, Phone, Compass 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Enhanced luxury destinations database
const destinations = [
  {
    id: 1,
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 109999,
    durationDays: 5,
    visa: 'Schengen Visa',
    bestSeason: 'Jun – Sep',
    tag: 'Romantic',
    desc: 'Iconic blue-domed churches, volcanic beaches, and legendary Mediterranean sunsets over the caldera.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 2540,
    popularScore: 98,
    dateAdded: '2026-01-10',
    mapCoords: { x: 49, y: 36 } // Percentage on SVG
  },
  {
    id: 2,
    name: 'Maldives',
    country: 'Indian Ocean',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    price: 89999,
    durationDays: 4,
    visa: 'Visa Free',
    bestSeason: 'Nov – Apr',
    tag: 'Luxury',
    desc: 'Overwater bungalows surrounded by crystal-clear turquoise lagoons and vibrant coral reefs.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Most Booked',
    travelersCount: 3820,
    popularScore: 100,
    dateAdded: '2026-02-15',
    mapCoords: { x: 62, y: 55 }
  },
  {
    id: 3,
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 129999,
    durationDays: 7,
    visa: 'Visa on Arrival',
    bestSeason: 'Mar – May',
    tag: 'Culture',
    desc: 'Ancient temples, serene bamboo groves, and traditional geisha culture in Japan\'s cultural capital.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: false,
    tagBadge: '',
    travelersCount: 1450,
    popularScore: 90,
    dateAdded: '2025-11-20',
    mapCoords: { x: 78, y: 39 }
  },
  {
    id: 4,
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 54999,
    durationDays: 5,
    visa: 'Visa on Arrival',
    bestSeason: 'Apr – Oct',
    tag: 'Adventure',
    desc: 'Lush rice terraces, ancient cliffside temples, and breathtaking sunsets over the Indian Ocean.',
    flightsIncluded: false,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 2980,
    popularScore: 95,
    dateAdded: '2026-03-01',
    mapCoords: { x: 74, y: 57 }
  },
  {
    id: 5,
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    price: 139999,
    durationDays: 6,
    visa: 'Schengen Visa',
    bestSeason: 'May – Sep',
    tag: 'Romantic',
    desc: 'Dramatic cliffside villages, azure seas, and exceptional Italian cuisine on the UNESCO coastline.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: '',
    travelersCount: 1890,
    popularScore: 89,
    dateAdded: '2025-12-05',
    mapCoords: { x: 47, y: 33 }
  },
  {
    id: 6,
    name: 'Banff',
    country: 'Canada',
    region: 'Americas',
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    price: 119999,
    durationDays: 5,
    visa: 'e-TA Required',
    bestSeason: 'Jun – Sep',
    tag: 'Adventure',
    desc: 'Pristine turquoise lakes, dramatic Rocky Mountain peaks, and untouched pine wilderness.',
    flightsIncluded: true,
    resort5Star: false,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 1120,
    popularScore: 92,
    dateAdded: '2026-04-12',
    mapCoords: { x: 23, y: 28 }
  },
  {
    id: 7,
    name: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 79999,
    durationDays: 5,
    visa: 'Visa on Arrival',
    bestSeason: 'Nov – Mar',
    tag: 'Luxury',
    desc: 'Futuristic skylines, golden desert dunes, world records and ultra-luxury hospitality.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Most Booked',
    travelersCount: 3100,
    popularScore: 96,
    dateAdded: '2026-02-28',
    mapCoords: { x: 58, y: 45 }
  },
  {
    id: 8,
    name: 'Switzerland',
    country: 'Europe',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    price: 149999,
    durationDays: 6,
    visa: 'Schengen Visa',
    bestSeason: 'Dec – Mar',
    tag: 'Adventure',
    desc: 'Majestic Alpine peaks, pristine mountain lakes, and charming villages draped in snow.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: true,
    tagBadge: 'Best Seller',
    travelersCount: 2200,
    popularScore: 94,
    dateAdded: '2026-01-20',
    mapCoords: { x: 46, y: 30 }
  },
  {
    id: 9,
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    price: 119999,
    durationDays: 4,
    visa: 'Schengen Visa',
    bestSeason: 'Apr – Jun',
    tag: 'Culture',
    desc: 'The city of light — timeless art, world-class cuisine, haute couture and romance on the Seine.',
    flightsIncluded: true,
    resort5Star: true,
    transfers: false,
    tagBadge: '',
    travelersCount: 2900,
    popularScore: 93,
    dateAdded: '2025-10-15',
    mapCoords: { x: 44, y: 32 }
  }
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

// Premium trust chips style helper
function visaStyle(visa) {
  if (visa === 'Visa Free') return { bg: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500' };
  if (visa === 'Visa on Arrival') return { bg: 'bg-sky-50 text-sky-700 border-sky-100', dot: 'bg-sky-500' };
  return { bg: 'bg-amber-50 text-amber-700 border-amber-100', dot: 'bg-amber-500' };
}

export default function Destinations() {
  // Page states
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'map'
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
        // Text search (name, country, region, bestSeason, tag)
        const matchQuery = 
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.bestSeason.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Region filter
        const matchRegion = selectedRegion === 'All' || d.region === selectedRegion;

        // Travel style filter
        const matchTag = selectedTag === 'All' || d.tag === selectedTag;

        // Budget filter
        let matchBudget = true;
        if (selectedBudget === 'Under ₹50K') matchBudget = d.price < 50000;
        else if (selectedBudget === '₹50K–₹1L') matchBudget = d.price >= 50000 && d.price <= 100000;
        else if (selectedBudget === '₹1L–₹2L') matchBudget = d.price >= 100000 && d.price <= 200000;
        else if (selectedBudget === '₹2L+') matchBudget = d.price > 200000;

        // Duration filter
        let matchDuration = true;
        if (selectedDuration === '3–5 Days') matchDuration = d.durationDays >= 3 && d.durationDays <= 5;
        else if (selectedDuration === '5–7 Days') matchDuration = d.durationDays >= 5 && d.durationDays <= 7;
        else if (selectedDuration === '7–10 Days') matchDuration = d.durationDays >= 7 && d.durationDays <= 10;
        else if (selectedDuration === '10+ Days') matchDuration = d.durationDays > 10;

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
          <div className="section-label mx-auto mb-3">✦ Destination Hub</div>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-3 text-slate-900"
            style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1.5px' }}
          >
            Explore Luxury <span className="text-gradient">Gateways</span>
          </h1>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base md:text-lg">
            Discover once-in-a-lifetime journeys, handpicked 5-star retreats, and itineraries designed for the premium explorer.
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
                placeholder="Search destinations, countries, seasons, or styles..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00CFC8] focus:bg-white transition-all text-sm font-medium"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold border border-slate-200 bg-white text-slate-700 hover:text-[#00CFC8] hover:border-[#00CFC8]/40 transition-colors w-full md:w-auto shadow-sm"
              >
                {viewMode === 'grid' ? (
                  <>
                    <Map className="w-4 h-4" /> Map View
                  </>
                ) : (
                  <>
                    <Grid className="w-4 h-4" /> Grid View
                  </>
                )}
              </button>
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
            { label: '26 Destinations', val: 'Curated' },
            { label: '10,000+ Travelers', val: 'Satisfied' },
            { label: '150+ Experiences', val: 'Luxury' },
            { label: '4.9★ Customer Rating', val: 'Google Verified' },
            { label: 'Visa Support', val: 'Available' }
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
                {['All', 'Asia', 'Europe', 'Americas', 'Middle East'].map(r => (
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
                {['All', 'Luxury', 'Romantic', 'Adventure', 'Culture'].map(t => (
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
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Budget (INR)</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Under ₹50K', '₹50K–₹1L', '₹1L–₹2L', '₹2L+'].map(b => (
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
                {['All', '3–5 Days', '5–7 Days', '7–10 Days', '10+ Days'].map(d => (
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
          {/* Background image & linear overlays */}
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop"
            alt="Maldives"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute top-6 right-6">
            <span className="bg-[#00CFC8] text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-lg">
              Destination of the Month
            </span>
          </div>

          <div className="relative z-10 px-8 py-10 md:px-14 max-w-xl text-left">
            <span className="text-white/60 font-bold text-xs uppercase tracking-widest block mb-1">Exclusive Seasonal Offer</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Maldives Luxury Escape
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-6 font-medium">
              Overwater villas, private yacht transfers, and 24/7 butler service. Save 20% when you plan your journey before the end of the month.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest block">Starting from</span>
                <span className="text-2xl font-black text-[#00CFC8] block" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {formatINR(79999)} <span className="text-xs font-semibold text-white/70">/ 4 Nights</span>
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

      {/* ── Main View Panel (Grid vs Map) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <HeartCrack className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-[#0F172A] text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>No Matches Found</h3>
                  <p className="text-[#64748B] text-sm max-w-md mx-auto px-4">
                    We couldn't find any luxury destinations matching your selection. Try clearing search keywords or choosing another region.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((dest, idx) => {
                    const vs = visaStyle(dest.visa);
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

                          {/* Float Tags */}
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

                          {/* Wishlist button */}
                          <button
                            onClick={(e) => toggleWishlist(dest.id, e)}
                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center shadow-md hover:bg-white text-slate-600 hover:text-red-500 transition-colors z-10 cursor-pointer"
                          >
                            <Heart className={`w-4 h-4 transition-all duration-300 ${isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-600'}`} />
                          </button>

                          {/* Destination overlay text */}
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
                            {/* Descriptive Copy */}
                            <p className="text-slate-500 text-xs leading-relaxed mb-4 font-medium line-clamp-2">
                              {dest.desc}
                            </p>

                            {/* Inclusion Badges */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {dest.flightsIncluded && (
                                <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                  <Plane className="w-2.5 h-2.5 text-[#00CFC8]" /> Flights Incl.
                                </span>
                              )}
                              {dest.resort5Star && (
                                <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                  <Building className="w-2.5 h-2.5 text-[#00CFC8]" /> 5-Star Stay
                                </span>
                              )}
                              {dest.transfers && (
                                <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                  <Car className="w-2.5 h-2.5 text-[#00CFC8]" /> Transfers
                                </span>
                              )}
                            </div>

                            {/* Mini Divider */}
                            <div className="h-px bg-slate-100 mb-4" />

                            {/* Travel Details Row */}
                            <div className="grid grid-cols-3 gap-2 text-center mb-4">
                              <div className="bg-slate-50/50 rounded-xl p-2 border border-slate-100">
                                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Duration</span>
                                <span className="font-extrabold text-slate-800 text-xs flex items-center justify-center gap-1 mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                  <Clock className="w-3 h-3 text-[#00CFC8]" /> {dest.durationDays} Nts
                                </span>
                              </div>
                              <div className={`rounded-xl p-2 border ${vs.bg}`}>
                                <span className="block text-[9px] font-bold uppercase tracking-wider opacity-60">Visa Required</span>
                                <span className="font-extrabold text-xs flex items-center justify-center gap-1 mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                  <Shield className="w-3 h-3 text-current" /> {dest.visa.split(' ')[0]}
                                </span>
                              </div>
                              <div className="bg-slate-50/50 rounded-xl p-2 border border-slate-100">
                                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Best Season</span>
                                <span className="font-extrabold text-slate-800 text-[10px] mt-0.5 block truncate" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                  {dest.bestSeason}
                                </span>
                              </div>
                            </div>

                            {/* Reviews / Booking Statistics */}
                            <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <span className="flex items-center gap-1 text-slate-700">
                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                {dest.rating} Rating
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                              <span>{dest.travelersCount.toLocaleString()}+ Bookings</span>
                            </div>
                          </div>

                          {/* Price and Action Button */}
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
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden relative z-10"
            >
              {/* Map instructions banner */}
              <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between flex-wrap gap-2 text-white">
                <div>
                  <h4 className="font-extrabold text-sm tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>Interactive Worldwide Destination Map</h4>
                  <p className="text-xs text-white/60">Click the glowing luxury hotspots to explore itineraries.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-bold text-[#00CFC8] bg-[#00CFC8]/10 border border-[#00CFC8]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00CFC8] animate-ping" /> {filtered.length} Active Hotspots
                  </span>
                </div>
              </div>

              {/* Schematic Map Container */}
              <div className="relative aspect-[16/8] min-h-[400px] w-full bg-[#0A0F1E] flex items-center justify-center p-6 select-none overflow-hidden">
                {/* Visual grid / dot matrix map art background */}
                <svg viewBox="0 0 1000 500" className="w-full h-full pointer-events-none">
                  {/* Styled Grid */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
                  </pattern>
                  <rect width="1000" height="500" fill="url(#grid)" opacity="0.4" />
                  
                  {/* Dynamic Flight Paths Connecting All Visible Destinations */}
                  <defs>
                    <linearGradient id="flight-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#00CFC8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00CFC8" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {filtered.map((dest, i) => {
                    if (i === filtered.length - 1) return null;
                    const nextDest = filtered[i + 1];
                    const startX = (dest.mapCoords.x / 100) * 1000;
                    const startY = (dest.mapCoords.y / 100) * 500;
                    const endX = (nextDest.mapCoords.x / 100) * 1000;
                    const endY = (nextDest.mapCoords.y / 100) * 500;
                    
                    // Calculate a majestic curve arc
                    const cx = (startX + endX) / 2;
                    const cy = Math.min(startY, endY) - (Math.abs(endX - startX) * 0.35) - 40;
                    const pathData = `M ${startX} ${startY} Q ${cx} ${cy} ${endX} ${endY}`;
                    
                    return (
                      <g key={`flight-${dest.id}-${nextDest.id}`}>
                        {/* Glowing curved trajectory line */}
                        <path 
                          d={pathData} 
                          fill="none" 
                          stroke="url(#flight-grad)" 
                          strokeWidth="2" 
                          strokeDasharray="6 6"
                          opacity="0.7"
                        />
                        {/* Animated traveling light point (Airplane representation) */}
                        <circle r="4" fill="#FFF" filter="url(#glow)">
                          <animateMotion 
                            dur={`${2.5 + (i % 2)}s`} 
                            repeatCount="indefinite" 
                            path={pathData} 
                          />
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {/* Hotspot Markers */}
                {filtered.map((dest) => {
                  const isActive = selectedMarker?.id === dest.id;
                  return (
                    <div
                      key={dest.id}
                      className="absolute group"
                      style={{ left: `${dest.mapCoords.x}%`, top: `${dest.mapCoords.y}%` }}
                    >
                      {/* Pulsing indicator */}
                      <button
                        onClick={() => setSelectedMarker(dest)}
                        className="relative z-10 w-6 h-6 flex items-center justify-center cursor-pointer"
                      >
                        <span className={`absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping ${isActive ? 'bg-[#00CFC8]' : 'bg-white'}`} />
                        <span className={`relative rounded-full w-3.5 h-3.5 border ${isActive ? 'bg-[#00CFC8] border-white scale-125' : 'bg-white/80 border-[#00CFC8] group-hover:bg-[#00CFC8] group-hover:scale-110'} transition-all duration-300`} />
                      </button>

                      {/* Tooltip Label */}
                      <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {dest.name}
                      </div>
                    </div>
                  );
                })}

                {/* Floating Preview Card inside map */}
                <AnimatePresence>
                  {selectedMarker && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white shadow-2xl z-20 flex gap-4"
                    >
                      <img
                        src={selectedMarker.image}
                        alt={selectedMarker.name}
                        className="w-20 h-20 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex flex-col justify-between flex-grow text-left">
                        <div>
                          <div className="flex justify-between items-start gap-1">
                            <h4 className="font-extrabold text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>{selectedMarker.name}</h4>
                            <button
                              onClick={() => setSelectedMarker(null)}
                              className="text-white/40 hover:text-white text-xs cursor-pointer"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="text-white/60 text-[10px] mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#00CFC8]" /> {selectedMarker.country}
                          </p>
                          <div className="flex items-center gap-1.5 mt-2">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="font-bold text-xs">{selectedMarker.rating}</span>
                            <span className="text-white/40 text-[10px]">•</span>
                            <span className="text-white/60 text-[10px]">{selectedMarker.durationDays} Nights</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10">
                          <div>
                            <span className="text-white/40 text-[8px] uppercase font-bold tracking-widest block">From</span>
                            <span className="text-[#00CFC8] font-bold text-xs">{formatINR(selectedMarker.price)}</span>
                          </div>
                          <Link to="/contact">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="bg-[#00CFC8] text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1"
                            >
                              Book <ArrowRight className="w-3 h-3" />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Live Route Status Panel (Bottom Overlay) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/90 to-transparent pt-20 pb-6 px-6 md:px-10 pointer-events-none">
                  <div className="flex flex-col md:flex-row items-end justify-between gap-4 w-full">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5 pointer-events-auto shadow-2xl">
                        <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest block mb-1">Global Reach</span>
                        <div className="flex items-center gap-2">
                          <Compass className="w-4 h-4 text-[#00CFC8]" />
                          <span className="text-white font-black text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>5 Continents</span>
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5 pointer-events-auto shadow-2xl hidden sm:block">
                        <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest block mb-1">Active Flights</span>
                        <div className="flex items-center gap-2">
                          <Plane className="w-4 h-4 text-[#00CFC8]" />
                          <span className="text-white font-black text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>{Math.max(0, filtered.length - 1)} Routes Live</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right pointer-events-auto hidden md:block">
                      <div className="inline-flex items-center gap-2 bg-[#00CFC8]/10 border border-[#00CFC8]/30 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-teal-900/20">
                        <span className="w-2 h-2 rounded-full bg-[#00CFC8] animate-pulse" />
                        <span className="text-[#00CFC8] text-[10px] font-bold uppercase tracking-widest">Network Status: Optimal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Personalized Recommendation Carousel ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-10">
          <div className="section-label mx-auto mb-3">✦ Handpicked Packages</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1px' }}>
            Recommended <span className="text-gradient">For You</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base mt-2">
            Tailored itineraries designed specifically around three popular premium vacation styles.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Luxury Beach Escapes',
              desc: 'Sun-drenched private islands, overwater villas, and crystal lagoons.',
              image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop',
              accent: '#00CFC8',
              destinations: ['Maldives', 'Bali', 'Santorini']
            },
            {
              title: 'Adventure Lovers',
              desc: 'Glacial hiking trails, mountain helicopter rides, and Alpine chalets.',
              image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=600&auto=format&fit=crop',
              accent: '#0EA5E9',
              destinations: ['Switzerland', 'Banff', 'Kyoto']
            },
            {
              title: 'Romantic Getaways',
              desc: 'Sunset cruise dinners, historical landmarks, and private estate tours.',
              image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
              accent: '#F43F5E',
              destinations: ['Paris', 'Santorini', 'Amalfi Coast']
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

      {/* ── Conversion CTA Section ── */}
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
          {/* Subtle animated/glowing visual blobs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-10 bg-teal-500 filter blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-sky-500 filter blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#00CFC8] font-bold text-xs uppercase tracking-[0.2em] block mb-3">✦ Bespoke Itinerary Design</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1px' }}>
              Ready For Your Next Adventure?
            </h2>
            <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8">
              Let our team of luxury travel experts craft a personalized travel route complete with luxury stays, private guides, and exclusive VIP access tailored precisely to you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,207,200,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-[#00CFC8] hover:bg-[#00b5af] text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  Plan My Journey <Compass className="w-4 h-4" />
                </motion.button>
              </Link>
              <a href="tel:+18005551234">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
                >
                  Talk To An Expert <Phone className="w-4 h-4 text-[#00CFC8]" />
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}