import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, MapPin, Calendar, Users, Star, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import indiaDestinations from '../data/indiaDestinations';
import { getAutocompleteSuggestions, toSlug, normaliseQuery } from '../utils/searchDestinations';
import heroImage from '../assets/hero-india.png';

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
    <div
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: '100vh' }}
    >

      {/* ── Background ───────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient — clears at top, fades in at bottom */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.82) 100%)' }}
        />
        {/* Incredible India hero collage */}
        <img
          src={heroImage}
          alt="Incredible India — Taj Mahal, Hawa Mahal, Kerala Backwaters and more"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Main Content — anchored to bottom ──── */}
      <div className="relative z-10 w-full flex flex-col justify-end flex-1 pb-12 pt-20 sm:pt-24">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 text-center">

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.22)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
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
        </div>
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