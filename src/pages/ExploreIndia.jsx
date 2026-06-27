import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Search, ChevronDown, ChevronRight, Download, Mountain,
  Compass, TreePine, Building2, Star, ArrowRight, Filter, X,
  Landmark, Church, Tent, Camera, Eye, Globe, Sparkles, Map,
  Heart, Users, TrendingUp, ChevronUp, Grid, List, Layers,
  Check, Plus, Send, Loader2, AlertCircle, CheckCheck, Info,
  ListChecks, Phone, FileText, Car, User, Trash2
} from 'lucide-react';
import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import indiaDestinations, { getStats } from '../data/indiaDestinations';
import { generateIndiaDestinationsPDF } from '../utils/generatePDF';

// ─────────────────────────────────────────────────────────────
// 🔑  Web3Forms Access Key — paste your key here
// ─────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'c92fc004-6520-4c3f-81c6-86cf71ccdc87';

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

// Featured state images
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

// ─── Toast ────────────────────────────────────────────────────
function Toast({ message, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, [onClose]);
  const colors = {
    success: { bg: '#059669', icon: <CheckCheck className="w-5 h-5" /> },
    error: { bg: '#DC2626', icon: <AlertCircle className="w-5 h-5" /> },
    info: { bg: '#0EA5E9', icon: <Info className="w-5 h-5" /> },
  };
  const c = colors[type] || colors.info;
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="fixed top-24 right-6 z-[200] flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl max-w-sm"
      style={{ background: c.bg, color: '#fff' }}
    >
      <span className="shrink-0 mt-0.5">{c.icon}</span>
      <p className="text-sm font-medium leading-relaxed flex-1">{message}</p>
      <button onClick={onClose} className="shrink-0 opacity-70 hover:opacity-100 ml-1">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

// ─── Styled form helpers ──────────────────────────────────────
const inputBase = {
  width: '100%', padding: '10px 14px', borderRadius: '10px',
  border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#1E293B',
  background: '#F8FAFC', outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};
const inputError = { borderColor: '#F87171', background: '#FFF5F5' };
const inputFocus = { borderColor: '#00CFC8', boxShadow: '0 0 0 3px rgba(0,207,200,0.12)' };

function StyledInput({ error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input {...props}
      style={{ ...inputBase, ...(error ? inputError : {}), ...(focused ? inputFocus : {}) }}
      onFocus={e => { setFocused(true); props.onFocus?.(e); }}
      onBlur={e => { setFocused(false); props.onBlur?.(e); }}
    />
  );
}

function StyledSelect({ error, children, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <select {...props}
      style={{
        ...inputBase, ...(error ? inputError : {}), ...(focused ? inputFocus : {}),
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '36px', cursor: 'pointer',
      }}
      onFocus={e => { setFocused(true); props.onFocus?.(e); }}
      onBlur={e => { setFocused(false); props.onBlur?.(e); }}
    >
      {children}
    </select>
  );
}

function StyledTextarea({ error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea {...props}
      style={{ ...inputBase, ...(error ? inputError : {}), ...(focused ? inputFocus : {}), resize: 'vertical', minHeight: '90px' }}
      onFocus={e => { setFocused(true); props.onFocus?.(e); }}
      onBlur={e => { setFocused(false); props.onBlur?.(e); }}
    />
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}{required && <span className="text-rose-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 shrink-0" /> {error}
        </motion.p>
      )}
    </div>
  );
}

function RadioGroup({ name, options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer" onClick={() => onChange(opt)}>
          <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
            style={{ borderColor: value === opt ? '#00CFC8' : '#CBD5E1', background: value === opt ? '#00CFC8' : '#fff' }}>
            {value === opt && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          <span className="text-sm font-medium transition-colors" style={{ color: value === opt ? '#00CFC8' : '#475569' }}>
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

// ─── FormSection wrapper ──────────────────────────────────────
function FormSection({ icon, title, subtitle, children }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E2E8F0', background: '#fff' }}>
      <div className="px-6 py-4 flex items-center gap-3"
        style={{ borderBottom: '1px solid #F1F5F9', background: 'linear-gradient(135deg, #F8FAFC, #F0FDFA)' }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
          <span className="text-white">{icon}</span>
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── Trip Summary Card ────────────────────────────────────────
function TripSummaryCard({ selectedPlaces, removePlace, onScrollToForm, destination }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid #E2E8F0', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
      <div className="px-5 py-4" style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
        <div className="flex items-center gap-2 mb-1">
          <ListChecks className="w-5 h-5 text-white" />
          <h3 className="font-bold text-white text-sm">Your Trip</h3>
        </div>
        <p className="text-white/80 text-xs">{destination || 'Select attractions below'}</p>
      </div>
      <div className="p-4">
        {selectedPlaces.length === 0 ? (
          <div className="text-center py-5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2.5" style={{ background: '#F1F5F9' }}>
              <MapPin className="w-4 h-4 text-slate-300" />
            </div>
            <p className="text-xs text-slate-400 font-medium">No places selected yet</p>
            <p className="text-[11px] text-slate-300 mt-0.5">Tap any attraction to add</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Selected Places</p>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', color: '#fff' }}>
                {selectedPlaces.length}
              </span>
            </div>
            <div className="space-y-1.5 mb-4 max-h-64 overflow-y-auto pr-1">
              <AnimatePresence>
                {selectedPlaces.map(({ name }) => (
                  <motion.div key={name} layout
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10, height: 0 }}
                    className="flex items-center gap-2 group">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-xs text-slate-700 font-medium flex-1 leading-snug">{name}</p>
                    <button onClick={() => removePlace(name)}
                      className="w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                      style={{ background: '#FEE2E2' }}>
                      <X className="w-2.5 h-2.5 text-rose-500" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-400">Total Selected</span>
                <span className="text-sm font-bold" style={{ color: '#00CFC8' }}>{selectedPlaces.length} Places</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,207,200,0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onScrollToForm}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                <Send className="w-3.5 h-3.5" /> Fill Trip Details
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════
export default function ExploreIndia() {
  const stats = getStats(indiaDestinations);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [expandedCities, setExpandedCities] = useState({});
  const [expandedStates, setExpandedStates] = useState({});
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const stateRefs = useRef({});
  const quickJumpRef = useRef(null);
  const formRef = useRef(null);

  // ── Global selected places: { name, city, state } ─────────
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  // ── Mobile summary drawer ──────────────────────────────────
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  // ── Inquiry form ───────────────────────────────────────────
  const [tripForm, setTripForm] = useState({
    days: '', travelers: '', vehicle: '',
    hotelRequired: 'Yes', guideRequired: 'No',
    pickupLocation: '', specialRequirements: '',
  });
  const [customerForm, setCustomerForm] = useState({
    name: '', phone: '', whatsapp: '', email: '', city: '',
  });
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle');
  const [toast, setToast] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleOpenBookingForm = () => {
    if (selectedPlaces.length === 0) {
      setToast({ message: 'Please select at least one attraction first to begin booking.', type: 'error' });
      return;
    }
    setFormOpen(true);
  };

  const handlePlanTripForState = (stateObj) => {
    const hasExistingFromState = selectedPlaces.some(p => p.state === stateObj.state);
    
    if (!hasExistingFromState) {
      const originalIdx = indiaDestinations.findIndex(s => s.state === stateObj.state);
      setSelectedState(originalIdx);
      setExpandedStates({ [originalIdx]: true });
      setToast({ message: `Please select at least one attraction in ${stateObj.state} first to plan your trip!`, type: 'error' });
      
      setTimeout(() => {
        quickJumpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }

    setFormOpen(true);
  };

  const handlePlanMyTripBottom = () => {
    if (selectedPlaces.length === 0) {
      setToast({ message: 'Please select at least one attraction first to plan your trip!', type: 'error' });
      quickJumpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setFormOpen(true);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('book') === 'true') {
      // Strip URL parameter immediately to prevent automatic opens on future selection additions
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);

      if (selectedPlaces.length === 0) {
        setToast({ message: 'Please select at least one attraction first to begin booking.', type: 'error' });
      } else {
        setFormOpen(true);
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [formOpen]);

  // Animated counter
  const [counters, setCounters] = useState({ states: 0, cities: 0, places: 0 });
  useEffect(() => {
    const dur = 2000; const steps = 60; const interval = dur / steps; let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCounters({ states: Math.round(stats.totalStates * eased), cities: Math.round(stats.totalCities * eased), places: Math.round(stats.totalPlaces * eased) });
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

  const resultStats = useMemo(() => {
    let cities = 0, places = 0;
    filteredData.forEach(s => { cities += s.cities.length; s.cities.forEach(c => places += c.places.length); });
    return { states: filteredData.length, cities, places };
  }, [filteredData]);

  const stateToRender = useMemo(() => {
    if (selectedState === null) return null;
    const targetStateName = indiaDestinations[selectedState]?.state;
    return filteredData.find(s => s.state === targetStateName);
  }, [selectedState, filteredData]);

  // ── Place selection helpers ────────────────────────────────
  const togglePlace = (place, cityName, stateName) => {
    const key = place.name;
    setSelectedPlaces(prev =>
      prev.find(p => p.name === key)
        ? prev.filter(p => p.name !== key)
        : [...prev, { name: place.name, city: cityName, state: stateName }]
    );
  };
  const removePlace = (name) => setSelectedPlaces(prev => prev.filter(p => p.name !== name));

  // ── Group selected by city for summary ────────────────────
  const destinationLabel = useMemo(() => {
    if (selectedPlaces.length === 0) return '';
    const cities = [...new Set(selectedPlaces.map(p => p.city))];
    return cities.slice(0, 2).join(', ') + (cities.length > 2 ? ` +${cities.length - 2} more` : '');
  }, [selectedPlaces]);

  const toggleCity = (stateIdx, cityIdx) => {
    const key = `${stateIdx}-${cityIdx}`;
    setExpandedCities(prev => ({ ...prev, [key]: !prev[key] }));
  };
  const toggleState = (stateIdx) => {
    setExpandedStates(prev => {
      const isCurrentlyExpanded = prev[stateIdx] === true;
      return isCurrentlyExpanded ? {} : { [stateIdx]: true };
    });
  };
  const expandAllCities = (stateIdx, cities) => {
    const newExpanded = { ...expandedCities };
    cities.forEach((_, cityIdx) => { newExpanded[`${stateIdx}-${cityIdx}`] = true; });
    setExpandedCities(newExpanded);
    setExpandedStates({ [stateIdx]: true });
  };
  const scrollToState = (stateIdx) => {
    setSelectedState(stateIdx);
    setExpandedStates({ [stateIdx]: true });
    setTimeout(() => {
      quickJumpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try { await new Promise(r => setTimeout(r, 100)); generateIndiaDestinationsPDF(); }
    catch (e) { console.error(e); }
    setIsGeneratingPDF(false);
  };

  // ── Validation ─────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    if (!tripForm.days) errs.days = 'Required';
    if (!tripForm.travelers) errs.travelers = 'Required';
    if (!tripForm.vehicle) errs.vehicle = 'Required';
    if (!tripForm.pickupLocation.trim()) errs.pickupLocation = 'Pickup location is required';
    if (!customerForm.name.trim()) errs.name = 'Full name is required';
    if (!customerForm.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(customerForm.phone.replace(/\s/g, ''))) errs.phone = 'Enter valid 10-digit number';
    if (!customerForm.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerForm.email)) errs.email = 'Enter valid email';
    if (!customerForm.city.trim()) errs.city = 'Your city is required';
    return errs;
  };

  // ── Submit ─────────────────────────────────────────────────
  const handleSubmit = async () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setToast({ message: 'Please fix the highlighted fields.', type: 'error' });
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (selectedPlaces.length === 0) {
      setToast({ message: 'Please select at least one attraction first.', type: 'error' });
      return;
    }
    setSubmitState('loading');
    const now = new Date();
    const submittedAt = now.toLocaleString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
    const cities = [...new Set(selectedPlaces.map(p => p.city))].join(', ');
    const states = [...new Set(selectedPlaces.map(p => p.state))].join(', ');
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Trip Inquiry — ${cities} (${states})`,
      from_name: customerForm.name,
      name: customerForm.name,
      email: customerForm.email,
      'Customer Name': customerForm.name,
      'Phone Number': customerForm.phone,
      'WhatsApp Number': customerForm.whatsapp || 'Not provided',
      'Email Address': customerForm.email,
      'Customer City': customerForm.city,
      'Destination(s)': cities,
      'State(s)': states,
      'Selected Attractions': selectedPlaces.map(p => `${p.name} (${p.city})`).join(', '),
      'Number of Days': tripForm.days,
      'Number of Travelers': tripForm.travelers,
      'Vehicle Required': tripForm.vehicle,
      'Hotel Required': tripForm.hotelRequired,
      'Guide Required': tripForm.guideRequired,
      'Pickup Location': tripForm.pickupLocation,
      'Special Requirements': tripForm.specialRequirements || 'None',
      'Submitted At': submittedAt,
    };
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) { setSubmitState('success'); }
      else throw new Error(data.message);
    } catch (err) {
      console.error(err);
      setSubmitState('error');
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  // ── Success state ──────────────────────────────────────────
  if (submitState === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: '#F8FAFC' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="text-center max-w-lg w-full mx-auto">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 14 }}
            className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', boxShadow: '0 20px 60px rgba(0,207,200,0.4)' }}>
            <CheckCheck className="w-14 h-14 text-white" />
          </motion.div>
          <h1 className="text-3xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Thank You! 🎉</h1>
          <p className="text-lg font-semibold text-slate-600 mb-3">Your trip inquiry has been sent successfully.</p>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Our travel expert will contact you via <strong>phone or WhatsApp</strong> to discuss your itinerary and pricing.
          </p>
          <div className="rounded-2xl p-5 mb-8 text-left" style={{ background: '#F0FDFA', border: '1px solid #99F6E4' }}>
            <p className="text-sm font-semibold text-teal-700 mb-3">Your selected attractions ({selectedPlaces.length})</p>
            <div className="flex flex-wrap gap-2">
              {selectedPlaces.map(p => (
                <span key={p.name} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: '#CCFBF1', color: '#0F766E' }}>
                  ✓ {p.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/"><motion.button whileHover={{ scale: 1.04 }} className="px-7 py-3 rounded-full font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>Back to Home</motion.button></Link>
            <button onClick={() => { setSubmitState('idle'); setSelectedPlaces([]); setFormOpen(false); }}
              className="px-7 py-3 rounded-full font-semibold text-slate-600"
              style={{ background: '#fff', border: '1.5px solid #E2E8F0' }}>Explore More</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>

      {/* ─── Toast ─────────────────────────────────────────── */}
      <AnimatePresence>
        {toast && <Toast key="toast" message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>

      {/* ══════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ══════════════════════════════════════════ */}
      <div className="relative overflow-hidden pt-24" style={{ minHeight: '600px' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #0F172A 30%, #1A1F3A 60%, #0F172A 100%)' }} />
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #00CFC8, transparent 70%)', animation: 'pulse 8s ease-in-out infinite' }} />
        <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)', animation: 'pulse 10s ease-in-out infinite alternate' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                Select attractions, build your itinerary, and send us a trip inquiry — all in one place.
              </p>
              <div className="flex items-center gap-6 md:gap-10 mb-10">
                {[
                  { val: counters.states, label: 'States', color: '#00CFC8' },
                  { val: counters.cities, label: 'Cities', color: '#F59E0B' },
                  { val: `${counters.places}+`, label: 'Places', color: '#8B5CF6' },
                ].map((item, idx) => (
                  <div key={idx} className="text-left">
                    <span className="block text-4xl md:text-5xl font-black" style={{ color: item.color, fontFamily: 'Outfit, sans-serif' }}>{item.val}</span>
                    <span className="text-white/35 text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="max-w-lg">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search temples, forts, lakes, cities..."
                    className="w-full pl-12 pr-12 py-4 rounded-2xl text-white placeholder-white/30 text-sm font-medium transition-all focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,207,200,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {searchQuery && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-white/40 text-xs font-semibold">
                    Found <span className="text-[#00CFC8]">{resultStats.places}</span> places in <span className="text-[#00CFC8]">{resultStats.cities}</span> cities
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/3]">
                {[
                  { img: stateImages['Kerala'], name: 'Kerala', nick: "God's Own Country", offset: { x: 0, y: 0, rotate: -3 } },
                  { img: stateImages['Rajasthan'], name: 'Rajasthan', nick: 'Land of Kings', offset: { x: 30, y: -20, rotate: 2 } },
                  { img: stateImages['Jammu & Kashmir'], name: 'Kashmir', nick: 'Paradise on Earth', offset: { x: 60, y: -40, rotate: 5 } },
                ].map((card, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, rotate: card.offset.rotate }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                    className="absolute rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                    style={{ width: '85%', aspectRatio: '4/3', left: `${card.offset.x}px`, top: `${card.offset.y + i * 20}px`, zIndex: i + 1 }}
                    whileHover={{ scale: 1.03, zIndex: 10, rotate: 0 }}>
                    <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <span className="text-[#00CFC8] text-[9px] font-bold uppercase tracking-widest">{card.nick}</span>
                      <h3 className="text-2xl font-extrabold text-white">{card.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0,80 L0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,80 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* ACTION BAR */}
      {/* ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8 relative z-20">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ boxShadow: '0 8px 30px -10px rgba(15,23,42,0.1)' }}>
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
            {selectedPlaces.length > 0 && (
              <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                onClick={handleOpenBookingForm}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                <ListChecks className="w-4 h-4" /> {selectedPlaces.length} Selected · Send Inquiry
              </motion.button>
            )}
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={handleDownloadPDF} disabled={isGeneratingPDF}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', color: '#fff' }}>
              {isGeneratingPDF ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Download className="w-4 h-4" />}
              {isGeneratingPDF ? 'Generating...' : 'PDF Guide'}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* QUICK JUMP */}
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
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedState(null)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold border transition-all cursor-pointer shrink-0 ${selectedState === null ? 'text-white shadow-lg' : 'bg-white text-slate-600 border-slate-200/60'}`}
              style={selectedState === null ? { background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', borderColor: 'transparent' } : {}}>
              <Globe className="w-4 h-4" />
              <span>All States</span>
            </motion.button>
            {indiaDestinations.map((state, idx) => (
              <motion.button key={idx} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => scrollToState(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold border transition-all cursor-pointer shrink-0 ${selectedState === idx ? 'text-white shadow-lg' : 'bg-white text-slate-600 border-slate-200/60'}`}
                style={selectedState === idx ? { background: state.gradient, borderColor: 'transparent' } : {}}>
                <span className="text-base">{state.icon}</span>
                <span>{state.state}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* STATE CARDS + TRIP PLANNER LAYOUT */}
      {/* ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── LEFT: States listing / Grid ───────────────── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {filteredData.length === 0 ? (
                <motion.div key="no-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-5 text-4xl">🔍</div>
                  <h3 className="font-extrabold text-slate-800 text-xl mb-2">No Results Found</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">Try searching for a state, city, or place type like "temple", "lake", or "fort".</p>
                  <button onClick={() => setSearchQuery('')} className="mt-6 px-6 py-2.5 bg-[#00CFC8] text-white text-xs font-bold rounded-xl cursor-pointer">Clear Search</button>
                </motion.div>
              ) : selectedState === null ? (
                <motion.div key="grid-view" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredData.map((state) => {
                      const originalIdx = indiaDestinations.findIndex(s => s.state === state.state);
                      const heroImg = stateImages[state.state] || stateImages['Uttarakhand'];
                      let totalPlaces = 0;
                      state.cities.forEach(c => totalPlaces += c.places.length);
                      const accentColor = state.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#00CFC8';

                      return (
                        <motion.div
                          key={state.state}
                          whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(15,23,42,0.12)' }}
                          onClick={() => scrollToState(originalIdx)}
                          className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer flex flex-col h-full group transition-all"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img src={heroImg} alt={state.state} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/15 border border-white/20">
                              <span className="text-base">{state.icon}</span>
                              <span className="text-[9px] font-bold text-white/90 uppercase tracking-widest">{state.nickname}</span>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-[#00CFC8] transition-colors">{state.state}</h3>
                              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">{state.description}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-50 flex items-center justify-between mt-auto">
                              <div className="flex gap-4">
                                <div className="text-left">
                                  <span className="block text-sm font-extrabold text-slate-800">{state.cities.length}</span>
                                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Cities</span>
                                </div>
                                <div className="text-left">
                                  <span className="block text-sm font-extrabold text-slate-800">{totalPlaces}</span>
                                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Places</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePlanTripForState(state);
                                  }}
                                  className="px-3 py-1.5 rounded-xl text-[10px] font-bold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-md transition-all shrink-0 cursor-pointer"
                                >
                                  Plan Trip
                                </button>
                                <span className="text-[11px] font-bold flex items-center gap-1 text-slate-400 group-hover:text-[#00CFC8] transition-colors">
                                  Explore <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                /* Single state detailed layout */
                <motion.div key="detail-view" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
                  <div className="mb-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedState(null)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer shadow-sm hover:shadow transition-all"
                    >
                      ← Back to All States
                    </button>
                    <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                      State {String(selectedState + 1).padStart(2, '0')} of {indiaDestinations.length}
                    </span>
                  </div>

                  {(() => {
                    const state = stateToRender;
                    if (!state) {
                      return (
                        <div className="text-center py-16 bg-white rounded-3xl border border-slate-100">
                          <h3 className="font-extrabold text-slate-800 text-lg mb-2">No matching attractions in this state</h3>
                          <p className="text-slate-400 text-sm mb-4">Clear your search query to explore all of {indiaDestinations[selectedState]?.state}.</p>
                          <button onClick={() => setSearchQuery('')} className="px-5 py-2 bg-[#00CFC8] text-white text-xs font-bold rounded-xl cursor-pointer">Clear Search</button>
                        </div>
                      );
                    }
                    const originalIdx = selectedState;
                    const isStateExpanded = true;
                    const heroImg = stateImages[state.state] || stateImages['Uttarakhand'];
                    const accentColor = state.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#00CFC8';
                    const placeTypeCounts = {};
                    state.cities.forEach(c => c.places.forEach(p => { placeTypeCounts[p.type] = (placeTypeCounts[p.type] || 0) + 1; }));
                    const topTypes = Object.entries(placeTypeCounts).sort((a, b) => b[1] - a[1]).slice(0, 4);
                    let totalPlaces = 0;
                    state.cities.forEach(c => totalPlaces += c.places.length);

                    return (
                      <div className="rounded-[2rem] overflow-hidden bg-white border border-slate-100" style={{ boxShadow: '0 8px 40px -12px rgba(15,23,42,0.08)' }}>
                        {/* Hero image */}
                        <div className="relative">
                          <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                            <img src={heroImg} alt={state.state} className="w-full h-full object-cover" />
                            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 0%, transparent 20%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 100%)` }} />
                            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accentColor}20, transparent 60%)` }} />
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
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-3">
                                <span className="text-base">{state.icon}</span>
                                <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">{state.nickname}</span>
                              </div>
                              <h2 className="text-4xl md:text-5xl font-black text-white mb-2" style={{ letterSpacing: '-2px', lineHeight: 1 }}>{state.state}</h2>
                              <p className="text-white/60 text-sm font-medium max-w-2xl leading-relaxed mb-4">{state.description}</p>
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <div className="flex flex-wrap gap-1.5">
                                  {topTypes.map(([type, count]) => (
                                    <span key={type} className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md bg-white/10 border border-white/15 text-white/80">
                                      {typeIcons[type] || '📍'} {type} <span className="text-white/40">({count})</span>
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handlePlanTripForState(state);
                                    }}
                                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[11px] font-bold cursor-pointer shadow-lg text-white"
                                    style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                                    <Send className="w-3.5 h-3.5" /> Plan Trip
                                  </button>
                                  <button onClick={(e) => { e.stopPropagation(); expandAllCities(originalIdx, state.cities); }}
                                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[11px] font-bold cursor-pointer shadow-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                                    <Layers className="w-3.5 h-3.5 text-slate-500" /> Explore Cities
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Expandable Cities Section */}
                        <div className="bg-[#FAFBFC]">
                          <div className="px-5 md:px-7 pt-5 pb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-1 h-6 rounded-full" style={{ background: state.gradient }} />
                              <span className="text-sm font-extrabold text-slate-700">{state.cities.length} Cities in {state.state}</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Click to explore & select</span>
                          </div>

                          {/* City cards (horizontal scroll) */}
                          <div className="px-5 md:px-7 pb-4 overflow-x-auto scrollbar-hide">
                            <div className="flex gap-3" style={{ minWidth: 'max-content' }}>
                              {state.cities.map((city, cityIdx) => {
                                const isExpanded = expandedCities[`${originalIdx}-${cityIdx}`];
                                const cityTopTypes = {};
                                city.places.forEach(p => { cityTopTypes[p.type] = (cityTopTypes[p.type] || 0) + 1; });
                                const citySelectedCount = selectedPlaces.filter(p => p.city === city.name).length;

                                return (
                                  <motion.button key={city.name} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}
                                    onClick={() => toggleCity(originalIdx, cityIdx)}
                                    className={`relative flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer text-left min-w-[200px] max-w-[240px] ${isExpanded ? 'bg-white border-[#00CFC8] shadow-lg shadow-teal-500/10' : 'bg-white border-transparent shadow-sm hover:shadow-md hover:border-slate-200'}`}>
                                    {isExpanded && <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-1.5 rounded-full" style={{ background: accentColor }} />}
                                    {citySelectedCount > 0 && (
                                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                                        style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                                        {citySelectedCount}
                                      </div>
                                    )}
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shadow-sm" style={{ background: state.gradient }}>
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
                                        <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                                          className="ml-auto text-[9px] font-bold uppercase tracking-wider" style={{ color: accentColor }}>
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
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden">
                                  <div className="px-5 md:px-7 pb-6">
                                    {/* City header */}
                                    <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-xl border border-slate-100">
                                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm" style={{ background: state.gradient }}>
                                        {String(cityIdx + 1).padStart(2, '0')}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h3 className="font-extrabold text-slate-800 text-lg truncate" style={{ letterSpacing: '-0.3px' }}>{city.name}</h3>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                                          style={{ background: '#F0F9FF', color: '#0284C7', border: '1px solid #BAE6FD' }}>
                                          {city.type} · {city.places.length} places
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        {selectedPlaces.filter(p => p.city === city.name).length > 0 && (
                                          <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                                            style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                                            {selectedPlaces.filter(p => p.city === city.name).length} selected
                                          </span>
                                        )}
                                        <button onClick={() => toggleCity(originalIdx, cityIdx)}
                                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors">
                                          <X className="w-4 h-4 text-slate-400" />
                                        </button>
                                      </div>
                                    </div>

                                    {/* Interactive attraction cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                      {city.places.map((place, placeIdx) => {
                                        const colors = getTypeColor(place.type);
                                        const emoji = typeIcons[place.type] || '📍';
                                        const isSelected = !!selectedPlaces.find(p => p.name === place.name);
                                        return (
                                          <motion.div key={place.name}
                                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ delay: placeIdx * 0.025 }}
                                            onClick={() => togglePlace(place, city.name, state.state)}
                                            className="relative rounded-2xl overflow-hidden cursor-pointer transition-all"
                                            style={{
                                              background: isSelected ? 'linear-gradient(135deg, #F0FDFA, #E0F2FE)' : '#fff',
                                              border: isSelected ? '2px solid #00CFC8' : '1.5px solid #E2E8F0',
                                              boxShadow: isSelected ? '0 6px 20px rgba(0,207,200,0.18)' : '0 2px 8px rgba(0,0,0,0.04)',
                                            }}
                                            whileHover={{ y: -2, boxShadow: isSelected ? '0 10px 30px rgba(0,207,200,0.25)' : '0 8px 24px rgba(0,0,0,0.10)' }}
                                            whileTap={{ scale: 0.98 }}>
                                            <div className="h-1" style={{ background: isSelected ? 'linear-gradient(to right, #00CFC8, #0EA5E9)' : `linear-gradient(to right, ${colors.text}50, ${colors.text}15)` }} />
                                            <AnimatePresence>
                                              {isSelected && (
                                                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                                                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                                                  style={{ background: '#00CFC8' }}>
                                                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                </motion.div>
                                              )}
                                            </AnimatePresence>
                                            <div className="p-4">
                                              <div className="flex items-start gap-3 mb-2">
                                                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                                                  style={{ background: isSelected ? 'rgba(0,207,200,0.15)' : colors.bg, border: `1.5px solid ${isSelected ? 'rgba(0,207,200,0.3)' : colors.border}` }}>
                                                  {emoji}
                                                </div>
                                                <div className="min-w-0 flex-1 pr-5">
                                                  <h4 className="font-bold text-[13px] leading-tight mb-1" style={{ color: isSelected ? '#0F766E' : '#1E293B' }}>{place.name}</h4>
                                                  <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">{place.desc}</p>
                                                </div>
                                              </div>
                                              <div className="flex items-center justify-between mt-2">
                                                <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg"
                                                  style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
                                                  {place.type}
                                                </span>
                                                <span className="text-[10px] font-semibold flex items-center gap-1"
                                                  style={{ color: isSelected ? '#00CFC8' : '#94A3B8' }}>
                                                  {isSelected ? <><Check className="w-3 h-3" /> Added</> : <><Plus className="w-3 h-3" /> Add</>}
                                                </span>
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
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT: Sticky Trip Summary (desktop) ─ */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24">
              <TripSummaryCard
                selectedPlaces={selectedPlaces}
                removePlace={removePlace}
                destination={destinationLabel}
                onScrollToForm={handleOpenBookingForm}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/* INQUIRY FORM SECTION */}
      {/* ══════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════ */}
      {/* INQUIRY FORM POPUP MODAL */}
      {/* ══════════════════════════════════════════ */}
      <AnimatePresence>
        {formOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFormOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-[#F8FAFC] w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden z-10 flex flex-col my-8"
              style={{ maxHeight: 'calc(100vh - 4rem)', border: '1px solid #E2E8F0' }}
            >
              {/* Header */}
              <div className="px-8 py-5 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>Send Trip Inquiry</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Let us plan your perfect itinerary</p>
                  </div>
                </div>
                <button onClick={() => setFormOpen(false)}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors shrink-0">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {/* Form Body Scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-left">
                {/* Selected recap */}
                {selectedPlaces.length > 0 && (
                  <div className="rounded-2xl p-5 mb-6" style={{ background: '#F0FDFA', border: '1px solid #99F6E4' }}>
                    <p className="text-sm font-semibold text-teal-700 mb-3 flex items-center gap-2">
                      <ListChecks className="w-4 h-4" />
                      {selectedPlaces.length} attraction{selectedPlaces.length > 1 ? 's' : ''} selected for your inquiry
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <AnimatePresence>
                        {selectedPlaces.map(p => (
                          <motion.span key={p.name} layout initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                            style={{ background: '#CCFBF1', color: '#0F766E' }}>
                            <Check className="w-3 h-3" /> {p.name} <span className="opacity-60">· {p.city}</span>
                            <button onClick={() => removePlace(p.name)} className="ml-0.5 hover:text-teal-800"><X className="w-3 h-3" /></button>
                          </motion.span>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Trip Requirements */}
                  <FormSection icon={<Car className="w-4 h-4" />} title="Trip Requirements" subtitle="Tell us about your trip preferences">
                    <div className="space-y-4">
                      <Field label="Number of Days" required error={errors.days}>
                        <StyledSelect value={tripForm.days} onChange={e => { setTripForm(p => ({ ...p, days: e.target.value })); setErrors(p => ({ ...p, days: '' })); }} error={errors.days}>
                          <option value="">Select duration</option>
                          {['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '1 Week', 'More than 1 Week'].map(d => <option key={d} value={d}>{d}</option>)}
                        </StyledSelect>
                      </Field>
                      <Field label="Number of Travelers" required error={errors.travelers}>
                        <StyledSelect value={tripForm.travelers} onChange={e => { setTripForm(p => ({ ...p, travelers: e.target.value })); setErrors(p => ({ ...p, travelers: '' })); }} error={errors.travelers}>
                          <option value="">Select travelers</option>
                          {['1', '2', '3', '4', '5', '6+'].map(n => <option key={n} value={n}>{n} {n === '1' ? 'Traveler' : 'Travelers'}</option>)}
                        </StyledSelect>
                      </Field>
                      <Field label="Vehicle Required" required error={errors.vehicle}>
                        <StyledSelect value={tripForm.vehicle} onChange={e => { setTripForm(p => ({ ...p, vehicle: e.target.value })); setErrors(p => ({ ...p, vehicle: '' })); }} error={errors.vehicle}>
                          <option value="">Select vehicle</option>
                          {['Sedan', 'SUV', 'Tempo Traveller', 'Luxury Car', 'Bus', 'No Vehicle Required'].map(v => <option key={v} value={v}>{v}</option>)}
                        </StyledSelect>
                      </Field>
                      <Field label="Hotel Required">
                        <RadioGroup name="hotelRequired" options={['Yes', 'No']} value={tripForm.hotelRequired} onChange={v => setTripForm(p => ({ ...p, hotelRequired: v }))} />
                      </Field>
                      <Field label="Guide Required">
                        <RadioGroup name="guideRequired" options={['Yes', 'No']} value={tripForm.guideRequired} onChange={v => setTripForm(p => ({ ...p, guideRequired: v }))} />
                      </Field>
                      <Field label="Pickup Location" required error={errors.pickupLocation}>
                        <StyledInput type="text" placeholder="e.g. Delhi Airport, Hotel Name..." value={tripForm.pickupLocation}
                          onChange={e => { setTripForm(p => ({ ...p, pickupLocation: e.target.value })); setErrors(p => ({ ...p, pickupLocation: '' })); }} error={errors.pickupLocation} />
                      </Field>
                      <Field label="Special Requirements">
                        <StyledTextarea placeholder="Any special requests, dietary needs, accessibility..." value={tripForm.specialRequirements}
                          onChange={e => setTripForm(p => ({ ...p, specialRequirements: e.target.value }))} />
                      </Field>
                    </div>
                  </FormSection>

                  {/* Customer Details */}
                  <FormSection icon={<User className="w-4 h-4" />} title="Your Contact Details" subtitle="We'll reach out via phone or WhatsApp">
                    <div className="space-y-4">
                      <Field label="Full Name" required error={errors.name}>
                        <StyledInput type="text" placeholder="Your full name" value={customerForm.name}
                          onChange={e => { setCustomerForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })); }} error={errors.name} />
                      </Field>
                      <Field label="Phone Number" required error={errors.phone}>
                        <StyledInput type="tel" placeholder="10-digit mobile number" value={customerForm.phone} maxLength={10}
                          onChange={e => { setCustomerForm(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: '' })); }} error={errors.phone} />
                      </Field>
                      <Field label="WhatsApp Number (Optional)">
                        <StyledInput type="tel" placeholder="If different from phone" value={customerForm.whatsapp} maxLength={10}
                          onChange={e => setCustomerForm(p => ({ ...p, whatsapp: e.target.value }))} />
                      </Field>
                      <Field label="Email Address" required error={errors.email}>
                        <StyledInput type="email" placeholder="your@email.com" value={customerForm.email}
                          onChange={e => { setCustomerForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })); }} error={errors.email} />
                      </Field>
                      <Field label="Your City" required error={errors.city}>
                        <StyledInput type="text" placeholder="City you're traveling from" value={customerForm.city}
                          onChange={e => { setCustomerForm(p => ({ ...p, city: e.target.value })); setErrors(p => ({ ...p, city: '' })); }} error={errors.city} />
                      </Field>
                      <div className="rounded-xl px-4 py-3 flex items-start gap-2.5" style={{ background: '#F0FDFA', border: '1px solid #99F6E4' }}>
                        <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#0F766E' }} />
                        <p className="text-xs text-teal-700 leading-relaxed">Your details are only used to contact you about this inquiry. We never share your information.</p>
                      </div>
                    </div>
                  </FormSection>
                </div>

                {/* Submit button */}
                <motion.button
                  id="explore-india-send-inquiry-btn"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(0,207,200,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={submitState === 'loading'}
                  className="w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-3"
                  style={{
                    background: submitState === 'loading' ? 'linear-gradient(135deg, #94A3B8, #CBD5E1)' : 'linear-gradient(135deg, #00CFC8 0%, #0EA5E9 100%)',
                    boxShadow: submitState === 'loading' ? 'none' : '0 8px 32px rgba(0,207,200,0.35)',
                    cursor: submitState === 'loading' ? 'not-allowed' : 'pointer',
                  }}>
                  {submitState === 'loading' ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}><Loader2 className="w-5 h-5" /></motion.div> Sending Your Inquiry...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Trip Inquiry</>
                  )}
                </motion.button>
                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                  <Phone className="w-3 h-3" /> Our expert will call or WhatsApp you within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════ */}
      {/* BOTTOM CTA */}
      {/* ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden" style={{ boxShadow: '0 30px 60px -15px rgba(15,23,42,0.25)' }}>
          <div className="absolute inset-0">
            <img src={stateImages['Rajasthan']} alt="CTA BG" className="w-full h-full object-cover" style={{ filter: 'brightness(0.25) saturate(1.3)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-transparent" />
          </div>
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-10 bg-teal-500 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-amber-500 blur-[80px] pointer-events-none" />
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00CFC8]/30 bg-[#00CFC8]/10 mb-4">
                <Download className="w-3 h-3 text-[#00CFC8]" />
                <span className="text-[10px] font-bold text-[#00CFC8] uppercase tracking-widest">Free Download</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: '-1px' }}>
                Get the Complete India Guide as <span className="text-gradient">PDF</span>
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                The complete {stats.totalStates}-state, {stats.totalCities}-city, {stats.totalPlaces}+ places guide in a beautifully formatted PDF.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  onClick={handleDownloadPDF} disabled={isGeneratingPDF}
                  className="w-full sm:w-auto bg-[#00CFC8] text-white text-sm font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-60">
                  {isGeneratingPDF ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Download className="w-5 h-5" />}
                  {isGeneratingPDF ? 'Generating...' : 'Download Free PDF'}
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  onClick={handlePlanMyTripBottom}
                  className="w-full sm:w-auto bg-white/10 border border-white/20 text-white text-sm font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer">
                  Plan My Trip <ArrowRight className="w-4 h-4 text-[#00CFC8]" />
                </motion.button>
              </div>
            </div>
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

      {/* ─── Mobile Sticky Bottom Summary ──────── */}
      <AnimatePresence>
        {selectedPlaces.length > 0 && !mobileSummaryOpen && (
          <motion.div initial={{ y: 80 }} animate={{ y: 0 }} exit={{ y: 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pb-4">
            <button onClick={() => setMobileSummaryOpen(true)}
              className="w-full rounded-2xl px-5 py-4 flex items-center justify-between text-white shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', boxShadow: '0 -4px 32px rgba(0,207,200,0.4)' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ListChecks className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium opacity-80">Your Trip</p>
                  <p className="text-sm font-bold">{selectedPlaces.length} Place{selectedPlaces.length > 1 ? 's' : ''} Selected</p>
                </div>
              </div>
              <span className="text-sm font-semibold">View ↑</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileSummaryOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden" style={{ background: 'rgba(0,0,0,0.5)' }}
              onClick={() => setMobileSummaryOpen(false)} />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden rounded-t-3xl overflow-hidden"
              style={{ background: '#fff', maxHeight: '85vh', overflowY: 'auto' }}>
              <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #F1F5F9' }}>
                <h3 className="font-bold text-slate-800">Your Trip</h3>
                <button onClick={() => setMobileSummaryOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#F1F5F9' }}>
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              </div>
              <div className="p-6">
                <TripSummaryCard selectedPlaces={selectedPlaces} removePlace={removePlace} destination={destinationLabel}
                  onScrollToForm={() => { setMobileSummaryOpen(false); setTimeout(handleOpenBookingForm, 300); }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.07; }
          50% { transform: scale(1.1); opacity: 0.12; }
        }
        .text-gradient {
          background: linear-gradient(135deg, #00CFC8 0%, #67E8F9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
