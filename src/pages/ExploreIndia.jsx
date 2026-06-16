import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Search, ChevronDown, ChevronRight, Download, Mountain,
  Compass, TreePine, Building2, Star, ArrowRight, Filter, X,
  Landmark, Church, Tent, Camera, Eye, Globe, Sparkles, Map,
  Heart, Users, TrendingUp, ChevronUp, Grid, List, Layers
} from 'lucide-react';
import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import indiaDestinations, { getStats } from '../data/indiaDestinations';
import { generateIndiaDestinationsPDF } from '../utils/generatePDF';

// Type icon map
const typeIcons = {
  'Temple': '🛕', 'Heritage': '🏛️', 'Nature': '🌿', 'Adventure': '🎯',
  'Lake': '💧', 'Fort': '🏰', 'Wildlife': '🐅', 'Monastery': '☸️',
  'Ghat': '🔱', 'Mountain': '⛰️', 'Trekking': '🥾', 'Village': '🏘️',
  'Shopping': '🛍️', 'Viewpoint': '👁️', 'Ashram': '🙏', 'Landmark': '📍',
  'Garden': '🌺', 'Museum': '🏛️', 'Gurudwara': '🕉️', 'Shrine': '⭐',
  'Mosque': '🕌', 'Market': '🛒', 'Pilgrimage': '🙏', 'Festival': '🎪',
  'Culture': '🎭', 'Desert': '🏜️', 'Town': '🏘️', 'Sports': '⛳',
  'Entertainment': '🎪', 'Unique': '✨', 'Temple/Ghat': '🛕',
  'Hill Station': '⛰️', 'Church': '⛪', 'Beach': '🏖️', 'Palace': '🏰',
  'Waterfall': '💦', 'Cave': '🕳️', 'Island': '🏝️',
};

// Color scheme for place types
const typeColors = {
  'Temple': { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  'Heritage': { bg: '#FCE7F3', text: '#9D174D', border: '#FBCFE8' },
  'Nature': { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
  'Adventure': { bg: '#FEE2E2', text: '#991B1B', border: '#FECACA' },
  'Lake': { bg: '#DBEAFE', text: '#1E40AF', border: '#BFDBFE' },
  'Fort': { bg: '#E0E7FF', text: '#3730A3', border: '#C7D2FE' },
  'Wildlife': { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
  'Monastery': { bg: '#EDE9FE', text: '#5B21B6', border: '#DDD6FE' },
  'Ghat': { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  'Mountain': { bg: '#CFFAFE', text: '#155E75', border: '#A5F3FC' },
  'Landmark': { bg: '#F3E8FF', text: '#6B21A8', border: '#E9D5FF' },
  'Ashram': { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  'Beach': { bg: '#CCFBF1', text: '#115E59', border: '#99F6E4' },
  'default': { bg: '#F1F5F9', text: '#475569', border: '#E2E8F0' },
};

const getTypeColor = (type) => typeColors[type] || typeColors['default'];

// Featured state images (high quality unsplash)
const stateImages = {
  'Uttarakhand': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
  'Himachal Pradesh': 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800&auto=format&fit=crop',
  'Jammu & Kashmir': 'https://images.unsplash.com/photo-1614956933865-7cf3f08a2778?q=80&w=800&auto=format&fit=crop',
  'Rajasthan': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
  'Uttar Pradesh': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
  'Madhya Pradesh': 'https://images.unsplash.com/photo-1590766940554-634827d0c3d0?q=80&w=800&auto=format&fit=crop',
  'Haryana': 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
  'Goa': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
  'Kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
  'Karnataka': 'https://images.unsplash.com/photo-1600100397608-ae33e1ebc2b2?q=80&w=800&auto=format&fit=crop',
  'Tamil Nadu': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
  'Andhra Pradesh': 'https://images.unsplash.com/photo-1621427642064-9dd4003e0e3f?q=80&w=800&auto=format&fit=crop',
  'Telangana': 'https://images.unsplash.com/photo-1604424848861-5f22e72d1fc8?q=80&w=800&auto=format&fit=crop',
  'Maharashtra': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop',
  'Gujarat': 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=800&auto=format&fit=crop',
  'Punjab': 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800&auto=format&fit=crop',
  'West Bengal': 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop',
  'Bihar': 'https://images.unsplash.com/photo-1591018653367-2a53ac555c6d?q=80&w=800&auto=format&fit=crop',
  'Jharkhand': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop',
  'Odisha': 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=800&auto=format&fit=crop',
  'Chhattisgarh': 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=800&auto=format&fit=crop',
  'Assam': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
  'Meghalaya': 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop',
  'Sikkim': 'https://images.unsplash.com/photo-1622308644420-f7acbd149ea6?q=80&w=800&auto=format&fit=crop',
  'Arunachal Pradesh': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
  'Nagaland': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
  'Manipur': 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop',
  'Mizoram': 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop',
  'Tripura': 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=800&auto=format&fit=crop',
};

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ExploreIndia() {
  const stats = getStats(indiaDestinations);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [expandedCities, setExpandedCities] = useState({});
  const [expandedStates, setExpandedStates] = useState({});
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [placeTypeFilter, setPlaceTypeFilter] = useState('All');
  const stateRefs = useRef({});
  const quickJumpRef = useRef(null);

  // Animated counter
  const [counters, setCounters] = useState({ states: 0, cities: 0, places: 0 });
  useEffect(() => {
    const dur = 2000;
    const steps = 60;
    const interval = dur / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters({
        states: Math.round(stats.totalStates * eased),
        cities: Math.round(stats.totalCities * eased),
        places: Math.round(stats.totalPlaces * eased),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Filter data
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return indiaDestinations;
    const q = searchQuery.toLowerCase();
    return indiaDestinations.map(state => {
      const stateMatch = state.state.toLowerCase().includes(q) || state.nickname.toLowerCase().includes(q);
      const filteredCities = state.cities.map(city => {
        const cityMatch = city.name.toLowerCase().includes(q) || city.type.toLowerCase().includes(q);
        const filteredPlaces = city.places.filter(p =>
          p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)
        );
        if (stateMatch || cityMatch || filteredPlaces.length > 0) {
          return { ...city, places: cityMatch || stateMatch ? city.places : filteredPlaces };
        }
        return null;
      }).filter(Boolean);
      if (stateMatch || filteredCities.length > 0) {
        return { ...state, cities: stateMatch ? state.cities : filteredCities };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  // Get unique place types
  const allPlaceTypes = useMemo(() => {
    const types = new Set();
    indiaDestinations.forEach(s => s.cities.forEach(c => c.places.forEach(p => types.add(p.type))));
    return ['All', ...Array.from(types).sort()];
  }, []);

  const toggleCity = (stateIdx, cityIdx) => {
    const key = `${stateIdx}-${cityIdx}`;
    setExpandedCities(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleState = (stateIdx) => {
    setExpandedStates(prev => ({ ...prev, [stateIdx]: !prev[stateIdx] }));
  };

  const expandAllCities = (stateIdx, cities) => {
    const newExpanded = { ...expandedCities };
    cities.forEach((_, cityIdx) => { newExpanded[`${stateIdx}-${cityIdx}`] = true; });
    setExpandedCities(newExpanded);
    setExpandedStates(prev => ({ ...prev, [stateIdx]: true }));
  };

  const scrollToState = (stateIdx) => {
    setSelectedState(stateIdx);
    setExpandedStates(prev => ({ ...prev, [stateIdx]: true }));
    setTimeout(() => {
      const el = stateRefs.current[stateIdx];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await new Promise(r => setTimeout(r, 100));
      generateIndiaDestinationsPDF();
    } catch (e) { console.error(e); }
    setIsGeneratingPDF(false);
  };

  const resultStats = useMemo(() => {
    let cities = 0, places = 0;
    filteredData.forEach(s => { cities += s.cities.length; s.cities.forEach(c => places += c.places.length); });
    return { states: filteredData.length, cities, places };
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>

      {/* ══════════════════════════════════════════ */}
      {/* HERO SECTION — Immersive Full-Width */}
      {/* ══════════════════════════════════════════ */}
      <div className="relative overflow-hidden pt-24" style={{ minHeight: '600px' }}>
        {/* Background layers */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #0A0F1E 0%, #0F172A 30%, #1A1F3A 60%, #0F172A 100%)'
        }} />
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #00CFC8, transparent 70%)', animation: 'pulse 8s ease-in-out infinite' }} />
        <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)', animation: 'pulse 10s ease-in-out infinite alternate' }} />
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }} />

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00CFC8]/30 bg-[#00CFC8]/10 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00CFC8]" />
                <span className="text-[11px] font-bold text-[#00CFC8] uppercase tracking-widest">Complete India Travel Guide</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5" style={{ letterSpacing: '-2px', lineHeight: 1.08 }}>
                Discover Every Corner of{' '}
                <span className="relative">
                  <span className="text-gradient">Incredible India</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C40 2 80 2 100 4C120 6 160 2 198 4" stroke="#00CFC8" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                  </svg>
                </span>
              </h1>

              <p className="text-white/50 text-base md:text-lg max-w-lg mb-10 font-medium leading-relaxed">
                Your ultimate state-by-state guide covering sacred temples, majestic forts, pristine beaches, mighty mountains, and hidden gems across India.
              </p>

              {/* Animated Counter Stats */}
              <div className="flex items-center gap-6 md:gap-10 mb-10">
                {[
                  { val: counters.states, label: 'States', color: '#00CFC8' },
                  { val: counters.cities, label: 'Cities', color: '#F59E0B' },
                  { val: `${counters.places}+`, label: 'Places', color: '#8B5CF6' },
                ].map((item, idx) => (
                  <div key={idx} className="text-left">
                    <span className="block text-4xl md:text-5xl font-black" style={{ color: item.color, fontFamily: 'Outfit, sans-serif' }}>
                      {item.val}
                    </span>
                    <span className="text-white/35 text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Search */}
              <div className="max-w-lg">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search temples, forts, lakes, cities..."
                    className="w-full pl-12 pr-12 py-4 rounded-2xl text-white placeholder-white/30 text-sm font-medium transition-all focus:outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(12px)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,207,200,0.5)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors cursor-pointer">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {searchQuery && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-white/40 text-xs font-semibold">
                    Found <span className="text-[#00CFC8]">{resultStats.places}</span> places in <span className="text-[#00CFC8]">{resultStats.cities}</span> cities across <span className="text-[#00CFC8]">{resultStats.states}</span> states
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Right — Visual Card Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-[4/3]">
                {/* Stack of cards */}
                {[
                  { img: stateImages['Kerala'], name: 'Kerala', nick: 'God\'s Own Country', offset: { x: 0, y: 0, rotate: -3 } },
                  { img: stateImages['Rajasthan'], name: 'Rajasthan', nick: 'Land of Kings', offset: { x: 30, y: -20, rotate: 2 } },
                  { img: stateImages['Jammu & Kashmir'], name: 'Kashmir', nick: 'Paradise on Earth', offset: { x: 60, y: -40, rotate: 5 } },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: card.offset.rotate }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                    className="absolute rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                    style={{
                      width: '85%',
                      aspectRatio: '4/3',
                      left: `${card.offset.x}px`,
                      top: `${card.offset.y + i * 20}px`,
                      zIndex: i + 1,
                    }}
                    whileHover={{ scale: 1.03, zIndex: 10, rotate: 0 }}
                  >
                    <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[#00CFC8] text-[9px] font-bold uppercase tracking-widest">{card.nick}</span>
                      <h3 className="text-2xl font-extrabold text-white">{card.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0,80 L0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,80 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* ACTION BAR — PDF Download + Filters */}
      {/* ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ boxShadow: '0 8px 30px -10px rgba(15,23,42,0.1)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="block text-sm font-extrabold text-slate-800">Showing {resultStats.states} States</span>
              <span className="text-[11px] text-slate-400 font-medium">{resultStats.cities} cities · {resultStats.places}+ places</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', color: '#fff', boxShadow: '0 4px 14px rgba(15,23,42,0.2)' }}
            >
              {isGeneratingPDF ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Download className="w-4 h-4" />}
              {isGeneratingPDF ? 'Generating...' : 'PDF Guide'}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* QUICK JUMP — Horizontal Scroll */}
      {/* ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-center">
              <Compass className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-800">Quick Jump to State</h2>
          </div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:block">← Scroll →</span>
        </div>

        <div ref={quickJumpRef} className="overflow-x-auto scrollbar-hide pb-2 -mx-1">
          <div className="flex gap-2 px-1" style={{ minWidth: 'max-content' }}>
            {indiaDestinations.map((state, idx) => (
              <motion.button
                key={idx}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToState(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold border transition-all cursor-pointer shrink-0 ${
                  selectedState === idx
                    ? 'text-white shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200/60 hover:border-slate-300 hover:shadow-sm'
                }`}
                style={selectedState === idx ? { background: state.gradient, borderColor: 'transparent' } : {}}
              >
                <span className="text-base">{state.icon}</span>
                <span>{state.state}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* STATE CARDS — Immersive Magazine Style */}
      {/* ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <AnimatePresence>
          {filteredData.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-5 text-4xl">🔍</div>
              <h3 className="font-extrabold text-slate-800 text-xl mb-2">No Results Found</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Try searching for a state, city, or place type like "temple", "lake", "fort", or "trek".
              </p>
              <button onClick={() => setSearchQuery('')} className="mt-6 px-6 py-2.5 bg-[#00CFC8] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-[#00b5af] transition-colors">
                Clear Search
              </button>
            </motion.div>
          ) : (
            <div className="relative">
              {/* Connecting timeline line */}
              <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-[#00CFC8]/30 via-slate-200 to-[#00CFC8]/30 z-0 hidden md:block" />

              <div className="space-y-10 relative z-10">
                {filteredData.map((state, stateIdx) => {
                  let totalPlaces = 0;
                  state.cities.forEach(c => totalPlaces += c.places.length);
                  const originalIdx = indiaDestinations.findIndex(s => s.state === state.state);
                  const isStateExpanded = expandedStates[originalIdx] !== false;
                  const heroImg = stateImages[state.state] || stateImages['Uttarakhand'];
                  const accentColor = state.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#00CFC8';

                  // Top place types
                  const placeTypeCounts = {};
                  state.cities.forEach(c => c.places.forEach(p => {
                    placeTypeCounts[p.type] = (placeTypeCounts[p.type] || 0) + 1;
                  }));
                  const topTypes = Object.entries(placeTypeCounts).sort((a, b) => b[1] - a[1]).slice(0, 4);

                  return (
                    <motion.div
                      key={state.state}
                      ref={el => stateRefs.current[originalIdx] = el}
                      variants={fadeUp}
                      custom={stateIdx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-50px' }}
                      className="scroll-mt-28"
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:flex items-center gap-4 mb-4 pl-[18px] md:pl-[28px]">
                        <div className="w-5 h-5 rounded-full border-[3px] border-white shadow-md z-10 shrink-0"
                          style={{ background: accentColor }} />
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                            State {String(originalIdx + 1).padStart(2, '0')} of {indiaDestinations.length}
                          </span>
                        </div>
                      </div>

                      <div className="md:ml-[52px]">
                        {/* ── Immersive State Card ── */}
                        <div className="rounded-[2rem] overflow-hidden group/card"
                          style={{ boxShadow: '0 8px 40px -12px rgba(15,23,42,0.12)' }}>

                          {/* Full-Bleed Hero Image with overlaid content */}
                          <div className="relative cursor-pointer" onClick={() => toggleState(originalIdx)}>
                            <div className="relative h-[320px] md:h-[360px] overflow-hidden">
                              <img
                                src={heroImg}
                                alt={state.state}
                                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover/card:scale-105"
                              />
                              {/* Multi-layer gradient overlay */}
                              <div className="absolute inset-0" style={{
                                background: `linear-gradient(180deg, transparent 0%, transparent 20%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 100%)`
                              }} />
                              <div className="absolute inset-0" style={{
                                background: `linear-gradient(135deg, ${accentColor}20, transparent 60%)`
                              }} />

                              {/* Top-right floating glassmorphic stats */}
                              <div className="absolute top-5 right-5 flex items-center gap-2">
                                <div className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl px-4 py-2.5 text-center shadow-lg">
                                  <span className="block text-white font-black text-xl leading-tight">{state.cities.length}</span>
                                  <span className="text-white/60 text-[8px] font-bold uppercase tracking-widest">Cities</span>
                                </div>
                                <div className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl px-4 py-2.5 text-center shadow-lg">
                                  <span className="block text-white font-black text-xl leading-tight">{totalPlaces}</span>
                                  <span className="text-white/60 text-[8px] font-bold uppercase tracking-widest">Places</span>
                                </div>
                              </div>

                              {/* Bottom content overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                {/* Nickname tag */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-3">
                                  <span className="text-base">{state.icon}</span>
                                  <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">{state.nickname}</span>
                                </div>

                                {/* Large cinematic state name */}
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-2xl"
                                  style={{ letterSpacing: '-2px', lineHeight: 1 }}>
                                  {state.state}
                                </h2>

                                {/* Description */}
                                <p className="text-white/60 text-sm font-medium max-w-2xl leading-relaxed mb-4">
                                  {state.description}
                                </p>

                                {/* Bottom bar — type tags + actions */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                  {/* Type tags */}
                                  <div className="flex flex-wrap gap-1.5">
                                    {topTypes.map(([type, count]) => (
                                      <span key={type} className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md bg-white/10 border border-white/15 text-white/80">
                                        {typeIcons[type] || '📍'} {type} <span className="text-white/40">({count})</span>
                                      </span>
                                    ))}
                                  </div>

                                  {/* Action buttons */}
                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      onClick={(e) => { e.stopPropagation(); expandAllCities(originalIdx, state.cities); }}
                                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer shadow-lg text-white"
                                      style={{ background: accentColor }}
                                    >
                                      <Layers className="w-3.5 h-3.5" /> Explore Cities
                                    </button>
                                    <motion.div
                                      animate={{ rotate: isStateExpanded ? 180 : 0 }}
                                      className="w-9 h-9 rounded-xl backdrop-blur-md bg-white/15 border border-white/20 flex items-center justify-center"
                                    >
                                      <ChevronDown className="w-4 h-4 text-white" />
                                    </motion.div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ── Expandable Cities Section ── */}
                          <AnimatePresence>
                            {isStateExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="bg-[#FAFBFC] border-t border-slate-100">
                                  {/* Cities grid header */}
                                  <div className="px-5 md:px-7 pt-5 pb-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                      <div className="w-1 h-6 rounded-full" style={{ background: state.gradient }} />
                                      <span className="text-sm font-extrabold text-slate-700">
                                        {state.cities.length} Cities in {state.state}
                                      </span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Click to explore</span>
                                  </div>

                                  {/* Cities as beautiful horizontal scrollable cards */}
                                  <div className="px-5 md:px-7 pb-4 overflow-x-auto scrollbar-hide">
                                    <div className="flex gap-3" style={{ minWidth: 'max-content' }}>
                                      {state.cities.map((city, cityIdx) => {
                                        const isExpanded = expandedCities[`${originalIdx}-${cityIdx}`];
                                        const cityTopTypes = {};
                                        city.places.forEach(p => { cityTopTypes[p.type] = (cityTopTypes[p.type] || 0) + 1; });
                                        const cityTypes = Object.entries(cityTopTypes).sort((a, b) => b[1] - a[1]).slice(0, 3);

                                        return (
                                          <motion.button
                                            key={city.name}
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => toggleCity(originalIdx, cityIdx)}
                                            className={`relative flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer text-left min-w-[200px] max-w-[240px] ${
                                              isExpanded
                                                ? 'bg-white border-[#00CFC8] shadow-lg shadow-teal-500/10'
                                                : 'bg-white border-transparent shadow-sm hover:shadow-md hover:border-slate-200'
                                            }`}
                                          >
                                            {/* Active indicator */}
                                            {isExpanded && (
                                              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-1.5 rounded-full" style={{ background: accentColor }} />
                                            )}

                                            <div className="flex items-center justify-between mb-2">
                                              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow-sm"
                                                style={{ background: state.gradient }}>
                                                {String(cityIdx + 1).padStart(2, '0')}
                                              </div>
                                              <div className="flex -space-x-1">
                                                {city.places.slice(0, 3).map((p, pi) => (
                                                  <span key={pi} className="w-6 h-6 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-xs">
                                                    {typeIcons[p.type] || '📍'}
                                                  </span>
                                                ))}
                                              </div>
                                            </div>

                                            <h4 className="font-extrabold text-slate-800 text-sm mb-0.5 truncate">{city.name}</h4>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{city.type}</span>

                                            <div className="flex items-center gap-1.5 mt-auto">
                                              <MapPin className="w-3 h-3 text-slate-300" />
                                              <span className="text-[11px] font-semibold text-slate-500">{city.places.length} places</span>
                                              {isExpanded && (
                                                <motion.span
                                                  initial={{ opacity: 0, x: -5 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  className="ml-auto text-[9px] font-bold uppercase tracking-wider"
                                                  style={{ color: accentColor }}
                                                >
                                                  Viewing ↓
                                                </motion.span>
                                              )}
                                            </div>
                                          </motion.button>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Expanded city places */}
                                  {state.cities.map((city, cityIdx) => {
                                    const isExpanded = expandedCities[`${originalIdx}-${cityIdx}`];
                                    if (!isExpanded) return null;

                                    return (
                                      <AnimatePresence key={city.name}>
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: 'auto' }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                          className="overflow-hidden"
                                        >
                                          <div className="px-5 md:px-7 pb-6">
                                            {/* City detail header */}
                                            <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-xl border border-slate-100">
                                              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                                                style={{ background: state.gradient }}>
                                                {String(cityIdx + 1).padStart(2, '0')}
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                <h3 className="font-extrabold text-slate-800 text-lg truncate" style={{ letterSpacing: '-0.3px' }}>
                                                  {city.name}
                                                </h3>
                                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                                                  style={{ background: '#F0F9FF', color: '#0284C7', border: '1px solid #BAE6FD' }}>
                                                  {city.type} · {city.places.length} places
                                                </span>
                                              </div>
                                              <button
                                                onClick={() => toggleCity(originalIdx, cityIdx)}
                                                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors"
                                              >
                                                <X className="w-4 h-4 text-slate-400" />
                                              </button>
                                            </div>

                                            {/* Places grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                              {city.places.map((place, placeIdx) => {
                                                const colors = getTypeColor(place.type);
                                                return (
                                                  <motion.div
                                                    key={place.name}
                                                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    transition={{ delay: placeIdx * 0.025 }}
                                                    className="group/place bg-white rounded-2xl border border-slate-100 hover:border-slate-200 overflow-hidden transition-all hover:shadow-lg cursor-default"
                                                  >
                                                    {/* Accent top */}
                                                    <div className="h-1" style={{ background: `linear-gradient(to right, ${colors.text}50, ${colors.text}15)` }} />
                                                    <div className="p-4">
                                                      <div className="flex items-start gap-3">
                                                        <div
                                                          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform group-hover/place:scale-110"
                                                          style={{ background: colors.bg, border: `1.5px solid ${colors.border}` }}
                                                        >
                                                          {typeIcons[place.type] || '📍'}
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                          <h4 className="font-bold text-slate-800 text-[13px] leading-tight mb-1.5">{place.name}</h4>
                                                          <p className="text-slate-400 text-[11px] leading-relaxed font-medium line-clamp-2">{place.desc}</p>
                                                          <span className="inline-flex items-center gap-1 mt-2 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg"
                                                            style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
                                                            {place.type}
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </motion.div>
                                                );
                                              })}
                                            </div>
                                          </div>
                                        </motion.div>
                                      </AnimatePresence>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* BOTTOM CTA — Download PDF */}
      {/* ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden"
          style={{ boxShadow: '0 30px 60px -15px rgba(15,23,42,0.25)' }}
        >
          {/* BG Image */}
          <div className="absolute inset-0">
            <img src={stateImages['Rajasthan']} alt="CTA BG" className="w-full h-full object-cover" style={{ filter: 'brightness(0.25) saturate(1.3)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-transparent" />
          </div>

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-10 bg-teal-500 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-amber-500 blur-[80px] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-10">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00CFC8]/30 bg-[#00CFC8]/10 mb-4">
                <Download className="w-3 h-3 text-[#00CFC8]" />
                <span className="text-[10px] font-bold text-[#00CFC8] uppercase tracking-widest">Free Download</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: '-1px' }}>
                Get the Complete India Guide as{' '}
                <span className="text-gradient">PDF</span>
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                The complete {stats.totalStates}-state, {stats.totalCities}-city, {stats.totalPlaces}+ places guide in a beautifully formatted PDF. Perfect for offline trip planning.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,207,200,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                  className="w-full sm:w-auto bg-[#00CFC8] hover:bg-[#00b5af] text-white text-sm font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-60 transition-all"
                >
                  {isGeneratingPDF ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Download className="w-5 h-5" />}
                  {isGeneratingPDF ? 'Generating...' : 'Download Free PDF'}
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
                  >
                    Plan My Trip <ArrowRight className="w-4 h-4 text-[#00CFC8]" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right — Visual stat cards */}
            <div className="grid grid-cols-3 gap-3 shrink-0">
              {[
                { icon: '🏛️', val: stats.totalStates, label: 'States', gradient: 'from-teal-500/20 to-cyan-500/20' },
                { icon: '🏙️', val: stats.totalCities, label: 'Cities', gradient: 'from-amber-500/20 to-orange-500/20' },
                { icon: '📍', val: `${stats.totalPlaces}+`, label: 'Places', gradient: 'from-violet-500/20 to-purple-500/20' },
              ].map((s, i) => (
                <div key={i} className={`bg-gradient-to-br ${s.gradient} backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center`}>
                  <span className="text-2xl mb-2 block">{s.icon}</span>
                  <span className="block text-2xl font-black text-white">{s.val}</span>
                  <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS for scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.07; }
          50% { transform: scale(1.1); opacity: 0.12; }
        }
      `}</style>
    </div>
  );
}
