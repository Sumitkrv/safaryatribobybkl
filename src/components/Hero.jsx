import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, MapPin, Calendar, Users, Star, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import indiaDestinations from '../data/indiaDestinations';
import { getAutocompleteSuggestions, toSlug, normaliseQuery } from '../utils/searchDestinations';

/* ─── Animation variants ─────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  // Autocomplete state
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggIndex, setActiveSuggIndex] = useState(-1);
  const debounceRef = useRef(null);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  // Debounced autocomplete (300 ms)
  const updateSuggestions = useCallback((value) => {
    clearTimeout(debounceRef.current);
    if (!normaliseQuery(value)) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    debounceRef.current = setTimeout(() => {
      const results = getAutocompleteSuggestions(value, indiaDestinations, 7);
      setSuggestions(results);
      setShowSuggestions(results.length > 0);
      setActiveSuggIndex(-1);
    }, 300);
  }, []);

  const handleDestinationChange = (e) => {
    const val = e.target.value;
    setDestination(val);
    updateSuggestions(val);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // ─── Keyboard navigation in dropdown ──────────────
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggIndex >= 0 && suggestions[activeSuggIndex]) {
        pickSuggestion(suggestions[activeSuggIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // ─── Pick from autocomplete ───────────────────────
  const pickSuggestion = (sugg) => {
    setDestination(sugg.name);
    setShowSuggestions(false);
    navigate(`/destination/${sugg.slug}?date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`);
  };

  // ─── Main search handler ──────────────────────────
  const handleSearch = () => {
    const q = normaliseQuery(destination);

    if (!q) {
      // Blank query → show popular destinations page
      navigate(`/search?date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`);
      return;
    }

    // Try to find an exact / prefix match first for instant navigation
    const suggestions = getAutocompleteSuggestions(q, indiaDestinations, 1);
    if (suggestions.length === 1) {
      navigate(`/destination/${suggestions[0].slug}?date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`);
    } else if (suggestions.length > 1 && suggestions[0].isExact) {
      navigate(`/destination/${suggestions[0].slug}?date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`);
    } else {
      // Multiple / no results → go to search results page
      navigate(`/search?destination=${encodeURIComponent(destination.trim())}&date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background ───────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50))' }}
        />
        {/* Taj Mahal / India landscape hero image */}
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2970&auto=format&fit=crop"
          alt="Taj Mahal, India"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Main Content ─────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-44">

        {/* Rating row */}
        <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span
            className="text-white/80 text-sm font-medium tracking-wide"
            style={{ letterSpacing: '0.04em' }}
          >
            4.9 Rating&nbsp;&nbsp;·&nbsp;&nbsp;Trusted by 10,000+ Indian Travelers
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
          className="text-white font-extrabold leading-none mb-6"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
            letterSpacing: '-2px',
            lineHeight: 1.05,
          }}
        >
          Discover
          <br />
          <span
            style={{
              backgroundImage: 'linear-gradient(135deg, #00CFC8 0%, #67E8F9 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Incredible India
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          {...fadeUp(0.22)}
          className="text-white/75 font-light leading-relaxed mx-auto mb-10"
          style={{ fontSize: '1.2rem', maxWidth: '700px' }}
        >
          From the snow-capped Himalayas to serene Kerala backwaters, royal Rajasthan forts to pristine Goa beaches — explore 29 states, 127 cities, and 732+ destinations.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.32)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link to="/explore-india">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 36px rgba(0,207,200,0.55)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-[0.9375rem] transition-all"
              style={{
                background: 'linear-gradient(135deg, #00CFC8 0%, #0EA5E9 100%)',
                boxShadow: '0 4px 24px rgba(0,207,200,0.35)',
              }}
            >
              Explore All States <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link to="/packages">
            <motion.button
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.18)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-[0.9375rem] border border-white/30 transition-all"
              style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)' }}
            >
              View Packages
            </motion.button>
          </Link>
        </motion.div>

        {/* ── Search Bar ───────────────────────────── */}
        <motion.div
          {...fadeUp(0.44)}
          className="w-full mx-auto"
          style={{ maxWidth: '950px' }}
        >
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl overflow-visible relative"
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)',
            }}
          >
            {/* Destination input + autocomplete */}
            <div
              ref={wrapperRef}
              className="relative flex items-center gap-3 flex-1 px-5 py-4 sm:py-0 sm:h-20 border-b sm:border-b-0 sm:border-r border-white/15"
            >
              <MapPin className="w-5 h-5 shrink-0" style={{ color: '#00CFC8' }} />
              <div className="text-left flex-1 min-w-0">
                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Destination</p>
                <div className="flex items-center gap-1">
                  <input
                    ref={inputRef}
                    id="hero-destination-input"
                    type="text"
                    placeholder="Goa, Kerala, Rajasthan..."
                    value={destination}
                    onChange={handleDestinationChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => destination && setShowSuggestions(suggestions.length > 0)}
                    className="bg-transparent text-white text-sm font-medium w-full focus:outline-none placeholder-white/40"
                    autoComplete="off"
                  />
                  {destination && (
                    <button
                      type="button"
                      onClick={() => { setDestination(''); setSuggestions([]); setShowSuggestions(false); inputRef.current?.focus(); }}
                    >
                      <X className="w-4 h-4 text-white/40 hover:text-white/80 transition-colors shrink-0" />
                    </button>
                  )}
                </div>
              </div>

              {/* Autocomplete dropdown */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-50"
                    style={{
                      background: 'rgba(15,23,42,0.97)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {suggestions.map((sugg, idx) => (
                      <motion.button
                        key={sugg.slug}
                        type="button"
                        whileHover={{ background: 'rgba(0,207,200,0.12)' }}
                        onClick={() => pickSuggestion(sugg)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                        style={{
                          background: activeSuggIndex === idx ? 'rgba(0,207,200,0.12)' : 'transparent',
                          borderBottom: idx < suggestions.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                        }}
                      >
                        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(0,207,200,0.15)' }}>
                          <MapPin className="w-3.5 h-3.5" style={{ color: '#00CFC8' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold truncate">{sugg.name}</p>
                          <p className="text-white/40 text-xs truncate">{sugg.icon} {sugg.state}</p>
                        </div>
                        {sugg.isPrefix && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0"
                            style={{ background: 'rgba(0,207,200,0.2)', color: '#00CFC8' }}>
                            Best match
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 flex-1 px-5 py-4 sm:py-0 sm:h-20 border-b sm:border-b-0 sm:border-r border-white/15">
              <Calendar className="w-5 h-5 shrink-0" style={{ color: '#00CFC8' }} />
              <div className="text-left">
                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Date</p>
                <input
                  id="hero-date-input"
                  type="text"
                  placeholder="Choose date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onFocus={(e) => { e.target.type = 'date'; }}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                  className="bg-transparent text-white text-sm font-medium focus:outline-none placeholder-white/40 [color-scheme:dark] w-full"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 flex-1 px-5 py-4 sm:py-0 sm:h-20 border-b sm:border-b-0 sm:border-r border-white/15">
              <Users className="w-5 h-5 shrink-0" style={{ color: '#00CFC8' }} />
              <div className="text-left">
                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Guests</p>
                <select
                  id="hero-guests-select"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
                >
                  {['1 Guest', '2 Guests', '3 Guests', '4+ Guests'].map((g) => (
                    <option key={g} value={g} className="text-slate-900 bg-white">{g}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search button */}
            <div className="px-3 py-3 sm:py-0 sm:h-20 flex items-center justify-center">
              <motion.button
                id="hero-search-btn"
                whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(0,207,200,0.6)' }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSearch}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all w-full sm:w-auto justify-center"
                style={{
                  background: 'linear-gradient(135deg, #00CFC8 0%, #0EA5E9 100%)',
                  boxShadow: '0 4px 20px rgba(0,207,200,0.4)',
                }}
              >
                <Search className="w-4 h-4" />
                Search
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Subtle scroll indicator ───────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-white/25 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full" style={{ background: '#00CFC8' }} />
        </motion.div>
        <span className="text-white/30 text-[10px] font-medium tracking-[0.15em] uppercase">Scroll</span>
      </motion.div>
    </div>
  );
}