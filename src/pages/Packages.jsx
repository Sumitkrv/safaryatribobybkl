import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Clock, Star, ArrowRight, Heart, Search, Building, Plane, 
  Car, Award, Phone, Compass, Utensils, Shield, ChevronDown, 
  BookOpen, HeartCrack, Info, Users, ShieldAlert, Sparkles, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Enhanced curations database
const packages = [
  {
    id: 1,
    name: 'Silver Getaway',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    price: 19999,
    priceNote: 'per person',
    durationDays: 3,
    durationText: '3 Days / 2 Nights',
    tag: '⭐ Weekend Escape',
    tagClass: 'bg-slate-100 text-slate-800 border-slate-200',
    accentColor: '#00CFC8',
    hotelTier: '4-Star Beach Resort',
    flightsIncluded: false,
    mealsIncluded: true,
    transfersIncluded: true,
    visaSupport: false,
    rating: 4.6,
    travelersBooked: 4200,
    style: 'Beach',
    destination: 'Goa',
    features: [
      '4-Star Beach Resort Stay',
      'Daily Buffet Breakfast',
      'Airport Shared Transfers',
      'Old Goa Heritage Tour',
      'Standard Travel Insurance'
    ],
    highlighted: false,
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Beach Evening', desc: 'Check into your beachfront 4-star resort. Unwind at the pool and enjoy a sunset dinner at a beach shack on Baga Beach.' },
      { day: 'Day 2', title: 'Heritage & Spice Tour', desc: 'Visit Old Goa churches, Basilica of Bom Jesus (UNESCO), Fontainhas Latin Quarter, and explore a spice plantation with authentic Goan lunch.' },
      { day: 'Day 3', title: 'Water Sports & Departure', desc: 'Morning water sports at Calangute Beach — parasailing, jet skiing, and banana ride. Checkout and airport transfer.' }
    ],
    testimonials: [
      { author: 'Rahul & Neha', location: 'Pune', text: 'The Silver Getaway was perfect for our weekend in Goa. Amazing beach resort and the Old Goa heritage tour was a highlight!' }
    ]
  },
  {
    id: 2,
    name: 'Gold Experience',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    price: 39999,
    priceNote: 'per person',
    durationDays: 7,
    durationText: '7 Days / 6 Nights',
    tag: '🔥 Most Popular',
    tagClass: 'bg-[#00CFC8] text-white border-transparent',
    accentColor: '#00CFC8',
    hotelTier: '5-Star Heritage Resort',
    flightsIncluded: true,
    mealsIncluded: true,
    transfersIncluded: true,
    visaSupport: false,
    rating: 4.9,
    travelersBooked: 7500,
    style: 'Heritage',
    destination: 'Rajasthan',
    features: [
      '5-Star Heritage Palace Stay',
      'All-Inclusive Authentic Meals',
      'Private AC Car Transfers',
      'Desert Safari with Bonfire',
      'Complimentary Ayurvedic Spa',
      'Dedicated Tour Guide'
    ],
    highlighted: true,
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Jaipur — Pink City Welcome', desc: 'Arrive at Jaipur airport. Private transfer to your heritage palace hotel. Evening explore local markets and enjoy a traditional Rajasthani dinner.' },
      { day: 'Day 2', title: 'Jaipur — Amber Fort & City Palace', desc: 'Elephant ride up to Amber Fort. Visit City Palace, Hawa Mahal, and Jantar Mantar. Evening at Nahargarh Fort for sunset views.' },
      { day: 'Day 3', title: 'Jaipur to Jodhpur — Blue City', desc: 'Drive to Jodhpur. Visit Mehrangarh Fort, Jaswant Thada, and the vibrant blue streets of the old city. Stay at a haveli.' },
      { day: 'Day 4', title: 'Jodhpur to Jaisalmer — Golden City', desc: 'Drive through the Thar Desert. Check into a luxury desert camp. Evening camel ride on the Sam Sand Dunes with bonfire dinner.' },
      { day: 'Day 5', title: 'Jaisalmer Fort & Culture', desc: 'Explore the living Jaisalmer Fort, Patwon Ki Haveli, and Gadisar Lake. Enjoy local Rajasthani folk music and dance.' },
      { day: 'Day 6', title: 'Jaisalmer to Udaipur — City of Lakes', desc: 'Drive to Udaipur. Visit City Palace, Lake Pichola boat ride, and Saheliyon Ki Bari. Evening Dharohar folk dance show.' },
      { day: 'Day 7', title: 'Udaipur & Departure', desc: 'Visit Jagdish Temple and Fateh Sagar Lake. Checkout and transfer to Udaipur airport with premium lounge access.' }
    ],
    testimonials: [
      { author: 'Vikram Kapoor', location: 'Delhi', text: 'Gold Experience was outstanding. The Rajasthan circuit was flawlessly organized — from palace stays to desert camping, every moment was magical!' }
    ]
  },
  {
    id: 3,
    name: 'Platinum Journey',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?q=80&w=800&auto=format&fit=crop',
    price: 89999,
    priceNote: 'per person',
    durationDays: 14,
    durationText: '14 Days / 13 Nights',
    tag: '💎 Ultra-Premium',
    tagClass: 'bg-indigo-600 text-white border-transparent',
    accentColor: '#7C3AED',
    hotelTier: 'Private Luxury Suite',
    flightsIncluded: true,
    mealsIncluded: true,
    transfersIncluded: true,
    visaSupport: false,
    rating: 5.0,
    travelersBooked: 1250,
    style: 'Ultra-Luxury',
    destination: 'Multi-State',
    features: [
      'Private Luxury Suite at Every Stop',
      '24/7 Dedicated Chef & Butler',
      'Private Helicopter & Luxury Car',
      'Exclusive Cultural Experiences',
      'Unlimited Ayurvedic Treatments',
      'Personal Concierge Team',
      'Complete Trip Photography'
    ],
    highlighted: false,
    itinerary: [
      { day: 'Day 1-2', title: 'Kashmir — Paradise on Earth', desc: 'Fly to Srinagar. Private shikara ride on Dal Lake. Stay in a premium houseboat. Visit Mughal Gardens, Nishat & Shalimar Bagh.' },
      { day: 'Day 3-5', title: 'Kerala — God\'s Own Country', desc: 'Fly to Kochi. Private houseboat cruise on Alleppey backwaters. Munnar tea garden tour. Periyar wildlife safari. Ayurvedic spa retreat.' },
      { day: 'Day 6-8', title: 'Rajasthan — Royal Heritage', desc: 'Fly to Jaipur. Stay at a royal palace. Amber Fort, City Palace, desert camp in Jaisalmer with camel safari under the stars.' },
      { day: 'Day 9-11', title: 'Goa — Beach Paradise', desc: 'Fly to Goa. 5-star beachfront resort. Private yacht cruise, heritage churches, Dudhsagar Falls excursion, sunset beach dinner.' },
      { day: 'Day 12-13', title: 'Varanasi — Spiritual Heart', desc: 'Fly to Varanasi. Private Ganga Aarti experience, dawn boat ride on the Ganges, Sarnath Buddhist site, and silk weaving village.' },
      { day: 'Day 14', title: 'Delhi — Grand Finale & Departure', desc: 'Fly to Delhi. Private Mughal heritage tour — Red Fort, Humayun\'s Tomb, Qutub Minar. Farewell dinner at a rooftop restaurant.' }
    ],
    testimonials: [
      { author: 'Meera & Raj Khanna', location: 'Bangalore', text: 'The Platinum Journey is the pinnacle of India travel. Five states, world-class luxury, private flights, and a dedicated concierge team — absolutely incredible!' }
    ]
  }
];

// Add-on packages list
const addons = [
  { name: 'Kerala Backwater Bliss', price: 29999, durationText: '5 Days / 4 Nights', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=400&auto=format&fit=crop', destination: 'Kerala', style: 'Nature' },
  { name: 'Himalayan Adventure Trek', price: 24999, durationText: '6 Days / 5 Nights', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop', destination: 'Uttarakhand', style: 'Adventure' },
  { name: 'Kashmir Valley Tour', price: 27999, durationText: '5 Days / 4 Nights', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?q=80&w=400&auto=format&fit=crop', destination: 'Kashmir', style: 'Romantic' },
  { name: 'Varanasi Spiritual Journey', price: 15999, durationText: '3 Days / 2 Nights', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=400&auto=format&fit=crop', destination: 'Uttar Pradesh', style: 'Spiritual' },
];

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Format Currency
const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

export default function Packages() {
  // Page states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedDest, setSelectedDest] = useState('All');
  
  const [activePackageTab, setActivePackageTab] = useState(packages[1]); // Defaults to Gold
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localstorage
  useEffect(() => {
    const saved = localStorage.getItem('safaryatri_package_wishlist');
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
    localStorage.setItem('safaryatri_package_wishlist', JSON.stringify(updated));
  };

  // Filter logic
  const getFilteredPackages = () => {
    return packages.filter(p => {
      // Live search keywords (name, hotelTier, destination)
      const matchQuery = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.hotelTier.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.destination.toLowerCase().includes(searchQuery.toLowerCase());

      // Budget filter
      let matchBudget = true;
      if (selectedBudget === 'Under ₹1L') matchBudget = p.price < 100000;
      else if (selectedBudget === '₹1L–₹2L') matchBudget = p.price >= 100000 && p.price <= 200000;
      else if (selectedBudget === '₹2L+') matchBudget = p.price > 200000;

      // Duration filter
      let matchDuration = true;
      if (selectedDuration === '3-5 Days') matchDuration = p.durationDays >= 3 && p.durationDays <= 5;
      else if (selectedDuration === '5-7 Days') matchDuration = p.durationDays >= 5 && p.durationDays <= 7;
      else if (selectedDuration === '7-14 Days') matchDuration = p.durationDays >= 7 && p.durationDays <= 14;

      // Travel Style filter
      const matchStyle = selectedStyle === 'All' || p.style === selectedStyle;

      // Destination filter
      const matchDest = selectedDest === 'All' || p.destination === selectedDest;

      return matchQuery && matchBudget && matchDuration && matchStyle && matchDest;
    });
  };

  const filtered = getFilteredPackages();

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
          <div className="section-label mx-auto mb-3">✦ Curated Tiers</div>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-3 text-[#1E293B]"
            style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1.5px' }}
          >
            Exclusive Travel <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base md:text-lg">
            Choose an all-inclusive tier customized to your level of travel comfort. Every logistic organized flawlessly by our concierges.
          </p>
        </motion.div>

        {/* ── 1. Premium Search Experience ── */}
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
                placeholder="Search packages by destination, stays, or hotel level..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00CFC8] focus:bg-white transition-all text-sm font-medium"
              />
            </div>
          </div>
        </motion.div>

        {/* ── 3. Package Statistics Row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-slate-100 mb-10 text-center"
        >
          {[
            { label: '3 Premium Tiers', val: 'Silver, Gold & Platinum' },
            { label: '98% Score', val: 'Customer Satisfaction' },
            { label: '24/7 Butler Service', val: 'On Platinum Travel' },
            { label: '10,000+ Journeys', val: 'Flawlessly Organized' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-extrabold text-[#0F172A] text-sm md:text-base leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {item.label}
              </span>
              <span className="text-[#64748B] text-[10px] uppercase font-bold tracking-wider mt-0.5">{item.val}</span>
            </div>
          ))}
        </motion.div>

        {/* ── 2. Advanced Filters Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 mb-10 shadow-sm relative z-20"
        >
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-50">
            <Compass className="w-5 h-5 text-[#00CFC8]" />
            <h3 className="font-extrabold text-slate-800 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Refine Curated Packages
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Budget */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Budget Tiers</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Under ₹1L', '₹1L–₹2L', '₹2L+'].map(b => (
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

            {/* Duration */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Duration Tiers</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', '3-5 Days', '5-7 Days', '7-14 Days'].map(d => (
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

            {/* Style */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Travel Style</label>
              <div className="flex flex-wrap gap-1.5">
              {['All', 'Luxury', 'Romantic', 'Adventure', 'Beach', 'Heritage', 'Spiritual', 'Ultra-Luxury'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedStyle(s)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedStyle === s
                        ? 'bg-[#00CFC8] text-white border-[#00CFC8] shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2.5">Destinations</label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Goa', 'Rajasthan', 'Multi-State'].map(dest => (
                  <button
                    key={dest}
                    onClick={() => setSelectedDest(dest)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedDest === dest
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 4. Featured Offer Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-16 shadow-xl border border-white/20 min-h-[300px] flex items-center bg-slate-900"
        >
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"
            alt="Kerala Backwaters"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute top-6 right-6">
            <span className="bg-[#00CFC8] text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-lg">
              Featured Special Offer
            </span>
          </div>

          <div className="relative z-10 px-8 py-10 md:px-14 max-w-xl text-left text-white">
            <span className="text-[#00CFC8] font-bold text-xs uppercase tracking-widest block mb-1">Limited-Time Exclusive</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Kerala Backwater Luxury Escape
            </h2>
            <p className="text-white/75 text-xs md:text-sm mb-6">
              Book within the next 48 hours to secure premium houseboat upgrades and complimentary Ayurvedic spa sessions. Starting at ₹29,999.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#00CFC8] text-white text-xs font-extrabold px-6 py-3.5 rounded-full flex items-center gap-2 shadow-lg transition-colors"
              >
                Inquire Offer <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* ── 5. Enhanced Package Cards ── */}
        <div className="mb-20">
          <h2 className="text-2xl font-extrabold text-[#0F172A] mb-8 text-left" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Available Packages
          </h2>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <HeartCrack className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-[#0F172A] text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>No Packages Match</h3>
              <p className="text-[#64748B] text-sm max-w-md mx-auto px-4">
                We couldn't find any packages matching your filter parameters. Try resetting filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {filtered.map((pkg, idx) => {
                const isWishlisted = wishlist.includes(pkg.id);
                return (
                  <motion.div
                    key={pkg.id}
                    variants={fadeUp}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`relative flex flex-col rounded-3xl overflow-hidden transition-all ${
                      pkg.highlighted
                        ? 'shadow-2xl shadow-teal-200/50 ring-2 ring-[#00CFC8] scale-[1.03]'
                        : 'bg-white border border-slate-100 shadow-sm hover:shadow-md'
                    }`}
                    style={{ background: pkg.highlighted ? '#0F172A' : '#FFFFFF' }}
                  >
                    {/* Image frame */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                      
                      {/* Tags */}
                      {pkg.tag && (
                        <div className={`absolute top-4 left-4 border text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md ${pkg.tagClass}`}>
                          {pkg.tag}
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => toggleWishlist(pkg.id, e)}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 border border-slate-200/50 flex items-center justify-center shadow-md hover:bg-white text-slate-600 hover:text-red-500 transition-colors z-10 cursor-pointer"
                      >
                        <Heart className={`w-4 h-4 transition-all duration-300 ${isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-600'}`} />
                      </button>

                      {/* Header Overlaid */}
                      <div className="absolute bottom-4 left-5 right-5 text-left">
                        <span className="text-[#00CFC8] text-[9px] font-bold uppercase tracking-widest block mb-0.5">
                          {pkg.destination}
                        </span>
                        <h3 className="text-xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {pkg.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="flex flex-col flex-grow p-6 text-left justify-between">
                      <div>
                        {/* Highlights row */}
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-5">
                          <span className="flex items-center gap-1 text-slate-700">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {pkg.rating} Rating
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <span>{pkg.travelersBooked.toLocaleString()}+ Booked</span>
                        </div>

                        {/* Inclusions Icon Row */}
                        <div className="flex flex-wrap gap-2.5 mb-6 justify-start">
                          <div className={`flex items-center gap-1.5 border rounded-lg px-2.5 py-1 ${pkg.highlighted ? 'bg-white/10 border-white/5 text-white/90' : 'bg-slate-50 border-slate-100 text-slate-600'}`} title={pkg.hotelTier}>
                            <Building className="w-3.5 h-3.5 text-[#00CFC8]" />
                            <span className="text-[10px] font-bold">{pkg.hotelTier.split(' ')[0]}* Stay</span>
                          </div>
                          {pkg.flightsIncluded && (
                            <div className={`flex items-center gap-1.5 border rounded-lg px-2.5 py-1 ${pkg.highlighted ? 'bg-white/10 border-white/5 text-white/90' : 'bg-slate-50 border-slate-100 text-slate-600'}`} title="Flights Included">
                              <Plane className="w-3.5 h-3.5 text-[#00CFC8]" />
                              <span className="text-[10px] font-bold">Flights</span>
                            </div>
                          )}
                          {pkg.mealsIncluded && (
                            <div className={`flex items-center gap-1.5 border rounded-lg px-2.5 py-1 ${pkg.highlighted ? 'bg-white/10 border-white/5 text-white/90' : 'bg-slate-50 border-slate-100 text-slate-600'}`} title="All Meals Included">
                              <Utensils className="w-3.5 h-3.5 text-[#00CFC8]" />
                              <span className="text-[10px] font-bold">Meals</span>
                            </div>
                          )}
                          {pkg.transfersIncluded && (
                            <div className={`flex items-center gap-1.5 border rounded-lg px-2.5 py-1 ${pkg.highlighted ? 'bg-white/10 border-white/5 text-white/90' : 'bg-slate-50 border-slate-100 text-slate-600'}`} title="Transfers Included">
                              <Car className="w-3.5 h-3.5 text-[#00CFC8]" />
                              <span className="text-[10px] font-bold">Transfers</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Footer Actions / Pricing */}
                      <div className="pt-4 border-t" style={{ borderColor: pkg.highlighted ? 'rgba(255,255,255,0.1)' : '#F1F5F9' }}>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-[#94A3B8] text-[9px] font-bold uppercase tracking-widest block">Starting from</span>
                            <span className="text-xl font-black text-[#1E293B] block" style={{ color: pkg.highlighted ? '#00CFC8' : '#1E293B', fontFamily: 'Outfit, sans-serif' }}>
                              {formatINR(pkg.price)}
                            </span>
                          </div>
                          <span className={`text-[11px] font-bold ${pkg.highlighted ? 'text-white/60' : 'text-[#64748B]'}`}>
                            {pkg.durationText}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setActivePackageTab(pkg)}
                            className={`flex-1 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 cursor-pointer ${
                              pkg.highlighted
                                ? 'bg-white/10 border-white/10 hover:bg-white/20 text-white'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5 text-[#00CFC8]" /> Details
                          </button>
                          <Link to="/contact" className="flex-1">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.97 }}
                              className={`w-full py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                pkg.highlighted
                                  ? 'bg-[#00CFC8] hover:bg-[#00b5af] text-white border-transparent shadow-md'
                                  : 'bg-slate-900 hover:bg-slate-800 text-white'
                              }`}
                            >
                              Book Now <ArrowRight className="w-3.5 h-3.5" />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── 6. Package Comparison Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 mb-20 overflow-hidden text-left"
        >
          <div className="mb-6">
            <h3 className="text-xl font-extrabold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Compare Package Benefits
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">Compare features across our three main package tiers.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="py-3.5 px-4 font-bold text-slate-500 uppercase tracking-wider">Features</th>
                  <th className="py-3.5 px-4 font-extrabold text-slate-700">Silver Getaway</th>
                  <th className="py-3.5 px-4 font-extrabold text-[#00CFC8]">Gold Experience</th>
                  <th className="py-3.5 px-4 font-extrabold text-indigo-600">Platinum Journey</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-700">Starting Price</td>
                  <td className="py-3.5 px-4">{formatINR(19999)}</td>
                  <td className="py-3.5 px-4">{formatINR(39999)}</td>
                  <td className="py-3.5 px-4">{formatINR(89999)}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-700">Hotel Category</td>
                  <td className="py-3.5 px-4">4-Star Beach Resort</td>
                  <td className="py-3.5 px-4">5-Star Heritage Palace</td>
                  <td className="py-3.5 px-4">Private Luxury Suite</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-700">Flights Status</td>
                  <td className="py-3.5 px-4">Add-on Option</td>
                  <td className="py-3.5 px-4">Included (Economy)</td>
                  <td className="py-3.5 px-4">Included (Business / Private)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-700">Dining Cover</td>
                  <td className="py-3.5 px-4">Daily Breakfast</td>
                  <td className="py-3.5 px-4">All-Inclusive Meals</td>
                  <td className="py-3.5 px-4">24/7 Private Chef Service</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-700">Airport Transfers</td>
                  <td className="py-3.5 px-4">Shared AC Car</td>
                  <td className="py-3.5 px-4">Private AC Car</td>
                  <td className="py-3.5 px-4">Private Helicopter / Luxury Car</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-700">Trip Planning</td>
                  <td className="py-3.5 px-4">Pre-made Itinerary</td>
                  <td className="py-3.5 px-4">Customizable Itinerary</td>
                  <td className="py-3.5 px-4">Fully Bespoke Planning</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-700">Concierge Attention</td>
                  <td className="py-3.5 px-4">Local Helpline</td>
                  <td className="py-3.5 px-4">On-trip Representative</td>
                  <td className="py-3.5 px-4">Dedicated 24/7 Butler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── 8. Detailed Itinerary Timeline Section (Interactive) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start text-left">
          {/* Timeline side panel */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Day-by-Day Itinerary
            </h3>
            <p className="text-slate-500 text-xs mb-5">Select a tier package below to explore the detailed timeline.</p>
            <div className="flex flex-col gap-2">
              {packages.map(pkg => (
                <button
                  key={pkg.id}
                  onClick={() => setActivePackageTab(pkg)}
                  className={`px-4 py-3 rounded-2xl border text-xs font-bold transition-all text-left flex justify-between items-center cursor-pointer ${
                    activePackageTab.id === pkg.id
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {pkg.name}
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full ${activePackageTab.id === pkg.id ? 'bg-[#00CFC8] text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {pkg.durationDays} Days
                  </span>
                </button>
              ))}
            </div>
            
            {/* ── 7. Package Specific Testimonial ── */}
            <div className="mt-8 pt-6 border-t border-slate-100 bg-[#00CFC8]/5 rounded-2xl p-4 border border-[#00CFC8]/20">
              <span className="text-[#00CFC8] text-[9px] font-black uppercase tracking-wider block mb-2">Traveler Review</span>
              <p className="text-slate-700 text-xs italic leading-relaxed mb-3">
                "{activePackageTab.testimonials[0].text}"
              </p>
              <div className="text-[10px] font-bold text-slate-800">
                — {activePackageTab.testimonials[0].author}, <span className="text-[#00CFC8]">{activePackageTab.testimonials[0].location}</span>
              </div>
            </div>
          </div>

          {/* Timeline step visual */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#00CFC8]" />
              <h4 className="font-extrabold text-slate-900 text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {activePackageTab.name} Schedule
              </h4>
            </div>

            <div className="relative border-l border-slate-150 pl-6 space-y-6">
              {activePackageTab.itinerary.map((item, index) => (
                <div key={index} className="relative">
                  {/* Step pin */}
                  <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-[#00CFC8] flex items-center justify-center z-10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CFC8]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black tracking-wide text-[#00CFC8] uppercase block">
                      {item.day}
                    </span>
                    <h5 className="font-extrabold text-slate-800 text-sm mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {item.title}
                    </h5>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 9. Why Choose SafarYatri Section ── */}
        <div className="mb-20 text-left">
          <div className="text-center mb-10">
            <span className="section-label mx-auto mb-2">✦ Exclusive Standard</span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Why Book With SafarYatri?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Best Price Guarantee', icon: <CheckCircle2 className="w-6 h-6 text-[#00CFC8]" />, desc: 'Find any comparable luxury trip itinerary priced lower, and we will match it instantly.' },
              { title: 'Bespoke Adaptability', icon: <Sparkles className="w-6 h-6 text-indigo-500" />, desc: 'Customise hotel rooms, check-in flights, and dining preferences directly with your representative.' },
              { title: 'Full Visa Assistance', icon: <Award className="w-6 h-6 text-emerald-500" />, desc: 'Avoid scheduling queues. Our advisory handles all visa documents and visa embassy appointments.' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-150">
                  {benefit.icon}
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Destination Add-ons Grid ── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1E293B]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              More Indian Adventures
            </h3>
            <p className="text-slate-500 text-xs mt-1">Standalone boutique getaways curated for specific Indian destinations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((a, idx) => (
              <motion.div
                key={a.name}
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group text-left cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h4 className="font-extrabold text-[#1E293B] mb-1.5 text-xs truncate" style={{ fontFamily: 'Outfit, sans-serif' }}>{a.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00CFC8] font-black text-xs">{formatINR(a.price)}</span>
                    <span className="text-[9px] font-bold text-slate-500 bg-slate-50 border px-2 py-0.5 rounded-full">{a.durationText}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 10. Bespoke Conversion CTA Section before footer ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-14 text-center text-white border border-white/10"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #0A0F1E 100%)',
            boxShadow: '0 30px 60px -15px rgba(15,23,42,0.3)'
          }}
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-10 bg-teal-500 filter blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-indigo-500 filter blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#00CFC8] font-bold text-xs uppercase tracking-[0.2em] block mb-3">✦ Bespoke Package Builder</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1.5px' }}>
              Customize Your Holiday Package
            </h2>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-8">
              Cannot find a preset tier package matching your dates? Speak to our advisory team to build a customized package including personalized stays and flights.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-[#00CFC8] hover:bg-[#00b5af] text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  Plan Custom Trip <Compass className="w-4 h-4" />
                </motion.button>
              </Link>
              <a href="tel:+18005551234">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
                >
                  Speak with Advisors <Phone className="w-4 h-4 text-[#00CFC8]" />
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}