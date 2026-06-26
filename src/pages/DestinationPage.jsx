import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Calendar, Users, ArrowLeft, Star, Clock, Hotel,
  Activity, Compass, Camera, ChevronRight, Search, Sparkles,
  Mountain, ExternalLink, Heart, Share2, Info, CheckCircle2, X,
  Check, Plus, Minus, Send, Phone, Mail, MessageCircle,
  Car, Home, User, FileText, Loader2, AlertCircle, CheckCheck,
  ChevronDown, Trash2, ListChecks
} from 'lucide-react';
import { useState, useMemo, useRef, useEffect } from 'react';
import indiaDestinations from '../data/indiaDestinations';
import { getCityBySlug, toSlug, popularDestinations } from '../utils/searchDestinations';

// ─────────────────────────────────────────────────────────────
// 🔑  Web3Forms Access Key — paste your key here
// ─────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

// ─── Animation helpers ────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

// ─── Type color mapping ───────────────────────────────────────
const typeColors = {
  Temple: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  Heritage: { bg: '#FCE7F3', text: '#9D174D', border: '#FBCFE8' },
  Nature: { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
  Adventure: { bg: '#FEE2E2', text: '#991B1B', border: '#FECACA' },
  Lake: { bg: '#DBEAFE', text: '#1E40AF', border: '#BFDBFE' },
  Fort: { bg: '#E0E7FF', text: '#3730A3', border: '#C7D2FE' },
  Wildlife: { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
  Monastery: { bg: '#EDE9FE', text: '#5B21B6', border: '#DDD6FE' },
  Ghat: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  Mountain: { bg: '#CFFAFE', text: '#155E75', border: '#A5F3FC' },
  Landmark: { bg: '#F3E8FF', text: '#6B21A8', border: '#E9D5FF' },
  Ashram: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  Beach: { bg: '#CCFBF1', text: '#115E59', border: '#99F6E4' },
  Palace: { bg: '#FEF9C3', text: '#713F12', border: '#FEF08A' },
  Market: { bg: '#FEE2E2', text: '#991B1B', border: '#FECACA' },
  Shopping: { bg: '#E0E7FF', text: '#3730A3', border: '#C7D2FE' },
  Waterfall: { bg: '#DBEAFE', text: '#1E40AF', border: '#BFDBFE' },
  Village: { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
  Viewpoint: { bg: '#CFFAFE', text: '#155E75', border: '#A5F3FC' },
  default: { bg: '#F1F5F9', text: '#475569', border: '#E2E8F0' },
};

const getTypeColor = (type) => {
  const base = (type || '').split('/')[0];
  return typeColors[base] || typeColors['default'];
};

const typeEmojis = {
  Temple: '🛕', Heritage: '🏛️', Nature: '🌿', Adventure: '🎯',
  Lake: '💧', Fort: '🏰', Wildlife: '🐅', Monastery: '☸️',
  Ghat: '🔱', Mountain: '⛰️', Landmark: '📍', Ashram: '🙏',
  Beach: '🏖️', Palace: '👑', Market: '🛒', Shopping: '🛍️',
  Waterfall: '💦', Village: '🏘️', 'Temple/Ghat': '🛕', Viewpoint: '🌄',
};

// ─── Toast notification ───────────────────────────────────────
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
      transition={{ duration: 0.3 }}
      className="fixed top-24 right-6 z-[100] flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl max-w-sm"
      style={{ background: c.bg, color: '#fff' }}
    >
      <span className="shrink-0 mt-0.5">{c.icon}</span>
      <p className="text-sm font-medium leading-relaxed flex-1">{message}</p>
      <button onClick={onClose} className="shrink-0 opacity-70 hover:opacity-100 transition-opacity ml-1">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

// ─── Form Section Heading ──────────────────────────────────────
function FormSection({ icon, title, subtitle, children }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E2E8F0', background: '#fff' }}>
      <div className="px-6 py-5 flex items-center gap-3" style={{ borderBottom: '1px solid #F1F5F9', background: 'linear-gradient(135deg, #F8FAFC, #F0FDFA)' }}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
          <span className="text-white">{icon}</span>
        </div>
        <div>
          <h3 className="font-bold text-slate-800">{title}</h3>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

// ─── Field component ──────────────────────────────────────────
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

const inputBase = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '10px',
  border: '1.5px solid #E2E8F0',
  fontSize: '14px',
  color: '#1E293B',
  background: '#F8FAFC',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'inherit',
};

const inputError = { borderColor: '#F87171', background: '#FFF5F5' };
const inputFocus = { borderColor: '#00CFC8', boxShadow: '0 0 0 3px rgba(0,207,200,0.12)' };

function StyledInput({ error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{ ...inputBase, ...(error ? inputError : {}), ...(focused ? inputFocus : {}) }}
      onFocus={e => { setFocused(true); props.onFocus?.(e); }}
      onBlur={e => { setFocused(false); props.onBlur?.(e); }}
    />
  );
}

function StyledSelect({ error, children, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      style={{
        ...inputBase,
        ...(error ? inputError : {}),
        ...(focused ? inputFocus : {}),
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 12px center',
        paddingRight: '36px',
        cursor: 'pointer',
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
    <textarea
      {...props}
      style={{
        ...inputBase,
        ...(error ? inputError : {}),
        ...(focused ? inputFocus : {}),
        resize: 'vertical',
        minHeight: '100px',
      }}
      onFocus={e => { setFocused(true); props.onFocus?.(e); }}
      onBlur={e => { setFocused(false); props.onBlur?.(e); }}
    />
  );
}

// ─── Radio Group ──────────────────────────────────────────────
function RadioGroup({ name, options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
          <div
            className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
            style={{
              borderColor: value === opt ? '#00CFC8' : '#CBD5E1',
              background: value === opt ? '#00CFC8' : '#fff',
            }}
            onClick={() => onChange(opt)}
          >
            {value === opt && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          <span
            className="text-sm font-medium transition-colors"
            style={{ color: value === opt ? '#00CFC8' : '#475569' }}
            onClick={() => onChange(opt)}
          >
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────
export default function DestinationPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const date = searchParams.get('date') || '';
  const guests = searchParams.get('guests') || '2 Guests';

  const city = useMemo(() => getCityBySlug(slug, indiaDestinations), [slug]);

  // ── Tab state ──────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState('planner');

  // ── Place filter ───────────────────────────────────────────
  const [placeFilter, setPlaceFilter] = useState('All');

  // ── Selected places ───────────────────────────────────────
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  // ── Share ─────────────────────────────────────────────────
  const [shareMsg, setShareMsg] = useState('');

  // ── Trip requirements ──────────────────────────────────────
  const [tripForm, setTripForm] = useState({
    days: '',
    travelers: '',
    vehicle: '',
    hotelRequired: 'Yes',
    guideRequired: 'No',
    pickupLocation: '',
    specialRequirements: '',
  });

  // ── Customer details ───────────────────────────────────────
  const [customerForm, setCustomerForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: '',
  });

  // ── Form errors ────────────────────────────────────────────
  const [errors, setErrors] = useState({});

  // ── Submission state ───────────────────────────────────────
  const [submitState, setSubmitState] = useState('idle'); // idle | loading | success | error
  const [toast, setToast] = useState(null);

  // ── Mobile summary open ────────────────────────────────────
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  if (!city) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: '#F8FAFC' }}>
        <motion.div {...fadeUp(0)} className="text-center max-w-md">
          <div className="text-7xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Destination Not Found</h1>
          <p className="text-slate-500 mb-8">
            We couldn't find <strong>"{slug}"</strong>. Try searching for a different destination.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {popularDestinations.slice(0, 6).map((d) => (
              <Link key={d} to={`/destination/${toSlug(d)}`}>
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', color: '#fff' }}
                >
                  {d}
                </motion.span>
              </Link>
            ))}
          </div>
          <Link to="/">
            <button className="flex items-center gap-2 mx-auto px-6 py-3 rounded-xl font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── Derived data ───────────────────────────────────────────
  const placeTypes = ['All', ...new Set(city.places.map((p) => (p.type || '').split('/')[0]))];
  const filteredPlaces = placeFilter === 'All'
    ? city.places
    : city.places.filter((p) => (p.type || '').includes(placeFilter));

  // ── Place selection helpers ────────────────────────────────
  const togglePlace = (placeName) => {
    setSelectedPlaces(prev =>
      prev.includes(placeName)
        ? prev.filter(p => p !== placeName)
        : [...prev, placeName]
    );
  };

  const removePlace = (placeName) => {
    setSelectedPlaces(prev => prev.filter(p => p !== placeName));
  };

  // ── Share handler ──────────────────────────────────────────
  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setShareMsg('Link copied!');
      setTimeout(() => setShareMsg(''), 2000);
    });
  };

  // ── Validation ─────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    if (!tripForm.days) errs.days = 'Please select number of days';
    if (!tripForm.travelers) errs.travelers = 'Please select number of travelers';
    if (!tripForm.vehicle) errs.vehicle = 'Please select vehicle preference';
    if (!tripForm.pickupLocation.trim()) errs.pickupLocation = 'Pickup location is required';
    if (!customerForm.name.trim()) errs.name = 'Full name is required';
    if (!customerForm.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(customerForm.phone.replace(/\s/g, ''))) errs.phone = 'Enter a valid 10-digit phone number';
    if (!customerForm.email.trim()) errs.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerForm.email)) errs.email = 'Enter a valid email address';
    if (!customerForm.city.trim()) errs.city = 'Your city is required';
    return errs;
  };

  // ── Submission ─────────────────────────────────────────────
  const handleSubmit = async () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setToast({ message: 'Please fix the highlighted fields before submitting.', type: 'error' });
      // Scroll to first error
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (selectedPlaces.length === 0) {
      setToast({ message: 'Please select at least one attraction to visit.', type: 'error' });
      return;
    }

    setSubmitState('loading');

    const now = new Date();
    const submittedAt = now.toLocaleString('en-IN', {
      weekday: 'long', year: 'numeric', month: 'long',
      day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true,
    });

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Trip Inquiry — ${city.name} (${city.state})`,
      from_name: customerForm.name,
      // Human-readable email body
      'Customer Name': customerForm.name,
      'Phone Number': customerForm.phone,
      'WhatsApp Number': customerForm.whatsapp || 'Not provided',
      'Email Address': customerForm.email,
      'Customer City': customerForm.city,
      'Destination': city.name,
      'State': city.state,
      'Selected Attractions': selectedPlaces.join(', '),
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
      if (data.success) {
        setSubmitState('success');
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setSubmitState('error');
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  const tabs = [
    { id: 'planner', label: 'Plan My Trip', icon: <ListChecks className="w-4 h-4" /> },
    { id: 'nearby', label: 'Nearby', icon: <Compass className="w-4 h-4" /> },
  ];

  // ══════════════════════════════════════════════════════════════
  // SUCCESS STATE
  // ══════════════════════════════════════════════════════════════
  if (submitState === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: '#F8FAFC' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-lg w-full mx-auto"
        >
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 14 }}
            className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', boxShadow: '0 20px 60px rgba(0,207,200,0.4)' }}
          >
            <CheckCheck className="w-14 h-14 text-white" />
          </motion.div>

          <h1 className="text-3xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Thank You! 🎉
          </h1>
          <p className="text-lg font-semibold text-slate-600 mb-3">Your trip inquiry has been sent successfully.</p>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Our travel expert will contact you shortly via <strong>phone or WhatsApp</strong> to discuss your
            itinerary and pricing for <strong>{city.name}</strong>.
          </p>

          {/* Selected places recap */}
          <div className="rounded-2xl p-5 mb-8 text-left" style={{ background: '#F0FDFA', border: '1px solid #99F6E4' }}>
            <p className="text-sm font-semibold text-teal-700 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Your selected attractions ({selectedPlaces.length})
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedPlaces.map(p => (
                <span key={p} className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: '#CCFBF1', color: '#0F766E' }}>
                  ✓ {p}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}
              >
                Back to Home
              </motion.button>
            </Link>
            <Link to="/destinations">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full font-semibold text-slate-600"
                style={{ background: '#fff', border: '1.5px solid #E2E8F0' }}
              >
                Explore More Destinations
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════
  // MAIN PAGE
  // ══════════════════════════════════════════════════════════════
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* ─── Toast ───────────────────────────────────────── */}
      <AnimatePresence>
        {toast && (
          <Toast
            key="toast"
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      {/* ─── Hero Banner ─────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.15) 100%)' }} />
          <img
            src={city.stateImage}
            alt={city.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back button */}
        <div className="absolute top-6 left-6 z-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
            style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>
        </div>

        {/* Share button */}
        <div className="absolute top-6 right-6 z-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 h-10 rounded-full text-sm font-medium text-white"
            style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {shareMsg ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
            {shareMsg || 'Share'}
          </motion.button>
        </div>

        {/* Destination info */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-10">
          <motion.div {...fadeUp(0.1)}>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-2xl">{city.stateIcon}</span>
              <span className="text-white/70 text-sm font-medium">{city.state}</span>
              <span className="text-white/40">•</span>
              <span
                className="px-3 py-0.5 rounded-full text-xs font-semibold text-white"
                style={{ background: 'rgba(0,207,200,0.35)', border: '1px solid rgba(0,207,200,0.5)' }}
              >
                {city.type}
              </span>
            </div>
            <h1
              className="text-white font-extrabold leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'Outfit, sans-serif', letterSpacing: '-1.5px' }}
            >
              {city.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-white"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {city.places.length} Attractions
              </div>
              {selectedPlaces.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(0,207,200,0.3)', border: '1px solid rgba(0,207,200,0.5)', color: '#fff', backdropFilter: 'blur(8px)' }}
                >
                  <Check className="w-3.5 h-3.5" />
                  {selectedPlaces.length} Selected
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Sticky Tab Bar ─────────────────────────────── */}
      <div className="sticky top-0 z-30 shadow-md" style={{ background: '#fff', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5 px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all relative shrink-0"
                style={{ color: activeTab === tab.id ? '#00CFC8' : '#64748B' }}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                    style={{ background: '#00CFC8' }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Mobile: show selected count badge */}
          {selectedPlaces.length > 0 && (
            <button
              className="flex lg:hidden items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white shrink-0"
              style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}
              onClick={() => setMobileSummaryOpen(true)}
            >
              <ListChecks className="w-3.5 h-3.5" />
              {selectedPlaces.length} Places
            </button>
          )}
        </div>
      </div>

      {/* ─── Content ─────────────────────────────────────── */}
      <AnimatePresence mode="wait">

        {/* ══ PLANNER TAB ══ */}
        {activeTab === 'planner' && (
          <motion.div
            key="planner"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {/* ─── 2-column layout ───────────────────────── */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
              <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* ── LEFT: Attractions ──────────────────── */}
                <div className="flex-1 min-w-0">

                  {/* Header + filters */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">
                        🗺️ Select Places to Visit
                      </h2>
                      <p className="text-slate-500 text-sm mt-1">
                        Tap any attraction to add it to your trip
                      </p>
                    </div>
                    {selectedPlaces.length > 0 && (
                      <button
                        onClick={() => setSelectedPlaces([])}
                        className="flex items-center gap-1.5 text-xs font-medium text-rose-500 hover:text-rose-600 transition-colors shrink-0"
                      >
                        <X className="w-3.5 h-3.5" /> Clear all
                      </button>
                    )}
                  </div>

                  {/* Filter pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {placeTypes.map((t) => (
                      <motion.button
                        key={t}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        id={`filter-${t}`}
                        onClick={() => setPlaceFilter(t)}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                        style={
                          placeFilter === t
                            ? { background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', color: '#fff', boxShadow: '0 4px 12px rgba(0,207,200,0.35)' }
                            : { background: '#F1F5F9', color: '#64748B' }
                        }
                      >
                        {t === 'All' ? '🗺️ All' : `${typeEmojis[t] || '📍'} ${t}`}
                      </motion.button>
                    ))}
                  </div>

                  {/* Attraction cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredPlaces.map((place, i) => {
                      const col = getTypeColor(place.type);
                      const emoji = typeEmojis[(place.type || '').split('/')[0]] || '📍';
                      const isSelected = selectedPlaces.includes(place.name);
                      return (
                        <motion.div
                          key={place.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          onClick={() => togglePlace(place.name)}
                          className="rounded-2xl p-4 flex flex-col gap-3 cursor-pointer relative overflow-hidden transition-all"
                          style={{
                            background: isSelected ? 'linear-gradient(135deg, #F0FDFA, #E0F2FE)' : '#fff',
                            border: isSelected ? '2px solid #00CFC8' : '1.5px solid #E2E8F0',
                            boxShadow: isSelected
                              ? '0 8px 32px rgba(0,207,200,0.18)'
                              : '0 2px 8px rgba(0,0,0,0.04)',
                          }}
                          whileHover={{
                            y: -3,
                            boxShadow: isSelected
                              ? '0 12px 40px rgba(0,207,200,0.25)'
                              : '0 8px 28px rgba(0,0,0,0.10)',
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Selection checkmark */}
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                                style={{ background: '#00CFC8' }}
                              >
                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="flex items-start gap-3">
                            <span className="text-2xl shrink-0 mt-0.5">{emoji}</span>
                            <div className="min-w-0 flex-1">
                              <h3
                                className="font-bold leading-snug pr-6 transition-colors"
                                style={{ color: isSelected ? '#0F766E' : '#1E293B' }}
                              >
                                {place.name}
                              </h3>
                              <span
                                className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                                style={{ background: col.bg, color: col.text, border: `1px solid ${col.border}` }}
                              >
                                {place.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-slate-500 text-xs leading-relaxed">{place.desc}</p>

                          {/* Add/Remove indicator */}
                          <div
                            className="flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-xs font-semibold transition-all"
                            style={{
                              background: isSelected ? 'rgba(0,207,200,0.12)' : '#F8FAFC',
                              color: isSelected ? '#0F766E' : '#64748B',
                              border: isSelected ? '1px solid rgba(0,207,200,0.3)' : '1px solid #E2E8F0',
                            }}
                          >
                            {isSelected ? (
                              <><Check className="w-3 h-3" /> Added to Trip</>
                            ) : (
                              <><Plus className="w-3 h-3" /> Add to Trip</>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* ── RIGHT: Sticky Trip Summary (desktop) ── */}
                <div className="hidden lg:block w-80 shrink-0">
                  <div className="sticky top-24">
                    <TripSummaryCard
                      city={city}
                      selectedPlaces={selectedPlaces}
                      removePlace={removePlace}
                      onScrollToForm={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* ─── Trip Requirements + Customer Details ──── */}
            <div ref={formRef} className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">

              {/* Section divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', color: '#fff' }}>
                  <FileText className="w-4 h-4" /> Trip Details
                </div>
                <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* ── Trip Requirements ────────────────── */}
                <FormSection
                  icon={<Car className="w-5 h-5" />}
                  title="Trip Requirements"
                  subtitle="Tell us about your trip preferences"
                >
                  <div className="space-y-5">

                    <Field label="Number of Days" required error={errors.days}>
                      <StyledSelect
                        value={tripForm.days}
                        onChange={e => { setTripForm(p => ({ ...p, days: e.target.value })); setErrors(p => ({ ...p, days: '' })); }}
                        error={errors.days}
                      >
                        <option value="">Select duration</option>
                        {['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '1 Week', 'More than 1 Week'].map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </StyledSelect>
                    </Field>

                    <Field label="Number of Travelers" required error={errors.travelers}>
                      <StyledSelect
                        value={tripForm.travelers}
                        onChange={e => { setTripForm(p => ({ ...p, travelers: e.target.value })); setErrors(p => ({ ...p, travelers: '' })); }}
                        error={errors.travelers}
                      >
                        <option value="">Select travelers</option>
                        {['1', '2', '3', '4', '5', '6+'].map(n => (
                          <option key={n} value={n}>{n} {n === '1' ? 'Traveler' : 'Travelers'}</option>
                        ))}
                      </StyledSelect>
                    </Field>

                    <Field label="Vehicle Required" required error={errors.vehicle}>
                      <StyledSelect
                        value={tripForm.vehicle}
                        onChange={e => { setTripForm(p => ({ ...p, vehicle: e.target.value })); setErrors(p => ({ ...p, vehicle: '' })); }}
                        error={errors.vehicle}
                      >
                        <option value="">Select vehicle</option>
                        {['Sedan', 'SUV', 'Tempo Traveller', 'Luxury Car', 'Bus', 'No Vehicle Required'].map(v => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </StyledSelect>
                    </Field>

                    <Field label="Hotel Required">
                      <RadioGroup
                        name="hotelRequired"
                        options={['Yes', 'No']}
                        value={tripForm.hotelRequired}
                        onChange={v => setTripForm(p => ({ ...p, hotelRequired: v }))}
                      />
                    </Field>

                    <Field label="Guide Required">
                      <RadioGroup
                        name="guideRequired"
                        options={['Yes', 'No']}
                        value={tripForm.guideRequired}
                        onChange={v => setTripForm(p => ({ ...p, guideRequired: v }))}
                      />
                    </Field>

                    <Field label="Pickup Location" required error={errors.pickupLocation}>
                      <StyledInput
                        type="text"
                        placeholder="e.g. Jaipur Railway Station, Hotel Name..."
                        value={tripForm.pickupLocation}
                        onChange={e => { setTripForm(p => ({ ...p, pickupLocation: e.target.value })); setErrors(p => ({ ...p, pickupLocation: '' })); }}
                        error={errors.pickupLocation}
                      />
                    </Field>

                    <Field label="Special Requirements">
                      <StyledTextarea
                        placeholder="Any special requests, dietary needs, accessibility requirements, preferred activities..."
                        value={tripForm.specialRequirements}
                        onChange={e => setTripForm(p => ({ ...p, specialRequirements: e.target.value }))}
                      />
                    </Field>

                  </div>
                </FormSection>

                {/* ── Customer Details ──────────────────── */}
                <FormSection
                  icon={<User className="w-5 h-5" />}
                  title="Your Contact Details"
                  subtitle="We'll reach out via phone or WhatsApp"
                >
                  <div className="space-y-5">

                    <Field label="Full Name" required error={errors.name}>
                      <StyledInput
                        type="text"
                        placeholder="Your full name"
                        value={customerForm.name}
                        onChange={e => { setCustomerForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })); }}
                        error={errors.name}
                      />
                    </Field>

                    <Field label="Phone Number" required error={errors.phone}>
                      <StyledInput
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={customerForm.phone}
                        onChange={e => { setCustomerForm(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: '' })); }}
                        error={errors.phone}
                        maxLength={10}
                      />
                    </Field>

                    <Field label="WhatsApp Number (Optional)">
                      <StyledInput
                        type="tel"
                        placeholder="If different from phone number"
                        value={customerForm.whatsapp}
                        onChange={e => setCustomerForm(p => ({ ...p, whatsapp: e.target.value }))}
                        maxLength={10}
                      />
                    </Field>

                    <Field label="Email Address" required error={errors.email}>
                      <StyledInput
                        type="email"
                        placeholder="your@email.com"
                        value={customerForm.email}
                        onChange={e => { setCustomerForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })); }}
                        error={errors.email}
                      />
                    </Field>

                    <Field label="Your City" required error={errors.city}>
                      <StyledInput
                        type="text"
                        placeholder="City you're traveling from"
                        value={customerForm.city}
                        onChange={e => { setCustomerForm(p => ({ ...p, city: e.target.value })); setErrors(p => ({ ...p, city: '' })); }}
                        error={errors.city}
                      />
                    </Field>

                    {/* Privacy note */}
                    <div className="rounded-xl px-4 py-3 flex items-start gap-2.5" style={{ background: '#F0FDFA', border: '1px solid #99F6E4' }}>
                      <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#0F766E' }} />
                      <p className="text-xs text-teal-700 leading-relaxed">
                        Your details are only used to contact you about this trip inquiry. We never share your information with third parties.
                      </p>
                    </div>

                  </div>
                </FormSection>
              </div>

              {/* ── Submit Section ────────────────────────── */}
              <div className="mt-8">

                {/* Selected places recap before submit */}
                {selectedPlaces.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-2xl p-5 mb-6 flex items-start gap-3"
                    style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#EA580C' }} />
                    <div>
                      <p className="text-sm font-semibold text-orange-700">No attractions selected</p>
                      <p className="text-xs text-orange-600 mt-0.5">Scroll up and select at least one attraction to include in your inquiry.</p>
                    </div>
                  </motion.div>
                )}

                {selectedPlaces.length > 0 && (
                  <div className="rounded-2xl p-5 mb-6" style={{ background: '#F0FDFA', border: '1px solid #99F6E4' }}>
                    <p className="text-sm font-semibold text-teal-700 mb-3 flex items-center gap-2">
                      <ListChecks className="w-4 h-4" />
                      {selectedPlaces.length} attraction{selectedPlaces.length > 1 ? 's' : ''} in your trip inquiry
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPlaces.map(p => (
                        <motion.span
                          key={p}
                          layout
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: '#CCFBF1', color: '#0F766E' }}
                        >
                          <Check className="w-3 h-3" /> {p}
                          <button onClick={() => removePlace(p)} className="ml-0.5 hover:text-teal-800">
                            <X className="w-3 h-3" />
                          </button>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Big submit button */}
                <motion.button
                  id="send-trip-inquiry-btn"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(0,207,200,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={submitState === 'loading'}
                  className="w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-3 transition-all"
                  style={{
                    background: submitState === 'loading'
                      ? 'linear-gradient(135deg, #94A3B8, #CBD5E1)'
                      : 'linear-gradient(135deg, #00CFC8 0%, #0EA5E9 100%)',
                    boxShadow: submitState === 'loading' ? 'none' : '0 8px 32px rgba(0,207,200,0.35)',
                    cursor: submitState === 'loading' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitState === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Loader2 className="w-5 h-5" />
                      </motion.div>
                      Sending Your Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Trip Inquiry
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                  <Phone className="w-3 h-3" />
                  Our expert will call or WhatsApp you within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ══ NEARBY TAB ══ */}
        {activeTab === 'nearby' && (
          <motion.div
            key="nearby"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Nearby in {city.state}</h2>
                <p className="text-slate-500 text-sm mt-1">More places to explore in {city.stateIcon} {city.state}</p>
              </div>

              {city.nearbyCities && city.nearbyCities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {city.nearbyCities.map((nearby, i) => (
                    <motion.div
                      key={nearby.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.45 }}
                      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
                      className="rounded-2xl overflow-hidden"
                      style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                    >
                      <div className="relative h-36 overflow-hidden">
                        <img src={nearby.stateImage} alt={nearby.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                        <div className="absolute bottom-3 left-4">
                          <h3 className="text-white font-bold text-lg">{nearby.name}</h3>
                          <span className="text-white/70 text-xs">{nearby.type}</span>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="text-sm text-slate-500">{nearby.places?.length || 0} attractions</span>
                        <Link to={`/destination/${nearby.slug}?date=${date}&guests=${encodeURIComponent(guests)}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                            style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}
                          >
                            Explore <ChevronRight className="w-3.5 h-3.5" />
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-slate-400">
                  <Compass className="w-12 h-12 mx-auto mb-3 opacity-40" />
                  <p>No nearby cities found for this destination.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* ─── Mobile Sticky Bottom Summary ────────────── */}
      {activeTab === 'planner' && (
        <>
          {/* Collapsed bottom bar */}
          <AnimatePresence>
            {selectedPlaces.length > 0 && !mobileSummaryOpen && (
              <motion.div
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                exit={{ y: 80 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pb-4"
              >
                <button
                  onClick={() => setMobileSummaryOpen(true)}
                  className="w-full rounded-2xl px-5 py-4 flex items-center justify-between text-white shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', boxShadow: '0 -4px 32px rgba(0,207,200,0.4)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <ListChecks className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-medium opacity-80">Your Trip</p>
                      <p className="text-sm font-bold">{selectedPlaces.length} Place{selectedPlaces.length > 1 ? 's' : ''} Selected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold">
                    View <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Full-height mobile summary drawer */}
          <AnimatePresence>
            {mobileSummaryOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 lg:hidden"
                  style={{ background: 'rgba(0,0,0,0.5)' }}
                  onClick={() => setMobileSummaryOpen(false)}
                />
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="fixed bottom-0 left-0 right-0 z-50 lg:hidden rounded-t-3xl overflow-hidden"
                  style={{ background: '#fff', maxHeight: '85vh', overflowY: 'auto' }}
                >
                  <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <h3 className="font-bold text-slate-800">Your Trip</h3>
                    <button
                      onClick={() => setMobileSummaryOpen(false)}
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: '#F1F5F9' }}
                    >
                      <X className="w-4 h-4 text-slate-500" />
                    </button>
                  </div>
                  <div className="p-6">
                    <TripSummaryCard
                      city={city}
                      selectedPlaces={selectedPlaces}
                      removePlace={removePlace}
                      onScrollToForm={() => {
                        setMobileSummaryOpen(false);
                        setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
                      }}
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

// ─── Trip Summary Card ────────────────────────────────────────
function TripSummaryCard({ city, selectedPlaces, removePlace, onScrollToForm }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid #E2E8F0', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
      {/* Header */}
      <div
        className="px-5 py-4"
        style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}
      >
        <div className="flex items-center gap-2 mb-1">
          <ListChecks className="w-5 h-5 text-white" />
          <h3 className="font-bold text-white">Your Trip</h3>
        </div>
        <p className="text-white/80 text-xs">{city.name}, {city.state}</p>
      </div>

      <div className="p-5">
        {selectedPlaces.length === 0 ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#F1F5F9' }}>
              <MapPin className="w-5 h-5 text-slate-300" />
            </div>
            <p className="text-sm text-slate-400 font-medium">No places selected yet</p>
            <p className="text-xs text-slate-300 mt-1">Tap an attraction to add it</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Selected Places
              </p>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', color: '#fff' }}
              >
                {selectedPlaces.length}
              </span>
            </div>

            <div className="space-y-2 mb-5">
              <AnimatePresence>
                {selectedPlaces.map((name) => (
                  <motion.div
                    key={name}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2.5 group"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}>
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-sm text-slate-700 font-medium flex-1 leading-tight">{name}</p>
                    <button
                      onClick={() => removePlace(name)}
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: '#FEE2E2' }}
                    >
                      <X className="w-3 h-3 text-rose-500" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="pt-4" style={{ borderTop: '1px solid #F1F5F9' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">Total Selected</span>
                <span className="text-sm font-bold" style={{ color: '#00CFC8' }}>{selectedPlaces.length} Places</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,207,200,0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onScrollToForm}
                className="w-full py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}
              >
                <Send className="w-4 h-4" />
                Fill Trip Details
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
