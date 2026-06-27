import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle,
  Calendar, Star, ChevronDown, ChevronUp, Sparkles, Award, ShieldCheck,
  Compass, ArrowRight, User, Users, Shield, HelpCircle, Heart
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Trust metrics
const stats = [
  { label: '10,000+ Travelers', desc: 'Curated Bespoke Trips' },
  { label: '50+ Countries', desc: 'Worldwide Connections' },
  { label: '4.9★ Google Rating', desc: 'Client Satisfaction' },
  { label: '24/7 Support', desc: 'Worldwide Assistance' }
];

// Specialty Categories
const categories = [
  { name: 'Honeymoon', desc: 'Romantic retreats & secluded villas' },
  { name: 'Family Vacation', desc: 'Curated generational escapes' },
  { name: 'Luxury Escape', desc: '5-star resorts & yacht transfers' },
  { name: 'Corporate Travel', desc: 'VIP executive coordination' },
  { name: 'Adventure Tour', desc: 'Private helicopter & glacial excursions' }
];

// Luxury Travel FAQs
const faqs = [
  { q: 'How does the bespoke concierge process work?', a: 'Once you submit your inquiry, you are paired with a dedicated luxury concierge. We schedule a 1-on-1 consultation to understand your style, design a custom day-by-day itinerary, execute all reservations, and provide 24/7 support throughout your journey.' },
  { q: 'Can my itinerary be customized during the trip?', a: 'Yes, absolutely. Your dedicated concierge is available on WhatsApp or phone 24/7 to adjust plans, book spontaneous dining reservations, coordinate yachts, or handle emergency changes.' },
  { q: 'Do you assist with visa documentation?', a: 'Yes. Our specialized visa desk assists in document preparation, checklist curation, and coordinates embassy appointment scheduling for Schengen, US, UK, and all major destinations.' },
  { q: 'What is your cancellation and flexibility policy?', a: 'We secure highly flexible booking terms with our 5-star partner properties and luxury operators. Your concierge will detail specific cancel policies for each component prior to payment.' }
];

// Indian Regional Hubs & Desks
const offices = [
  { city: 'Delhi HQ', address: 'Connaught Place, New Delhi, Delhi', phone: '+91 96507 82439', email: 'safarhumara05@gmail.com', coords: { x: 51, y: 28 }, region: 'North India' },
  { city: 'Jaipur Office', address: 'MI Road, Jaipur, Rajasthan', phone: '+91 96507 82439', email: 'safarhumara05@gmail.com', coords: { x: 44, y: 35 }, region: 'Rajasthan' },
  { city: 'Mumbai Office', address: 'Nariman Point, Mumbai, Maharashtra', phone: '+91 96507 82439', email: 'safarhumara05@gmail.com', coords: { x: 42, y: 56 }, region: 'West Coast' },
];

// 29 States connection nodes for map decoration
const mapStates = [
  { name: 'Jammu & Kashmir', x: 50, y: 12 },
  { name: 'Himachal Pradesh', x: 52, y: 19 },
  { name: 'Punjab', x: 47, y: 22 },
  { name: 'Uttarakhand', x: 54, y: 23 },
  { name: 'Delhi NCR', x: 51, y: 28 },
  { name: 'Rajasthan', x: 44, y: 35 },
  { name: 'Uttar Pradesh', x: 57, y: 31 },
  { name: 'Gujarat', x: 38, y: 44 },
  { name: 'Madhya Pradesh', x: 49, y: 43 },
  { name: 'Bihar', x: 64, y: 33 },
  { name: 'Sikkim', x: 67, y: 30 },
  { name: 'Assam', x: 74, y: 32 },
  { name: 'Arunachal Pradesh', x: 78, y: 28 },
  { name: 'Nagaland', x: 79, y: 33 },
  { name: 'Manipur', x: 78, y: 37 },
  { name: 'Mizoram', x: 76, y: 41 },
  { name: 'Tripura', x: 72, y: 39 },
  { name: 'Meghalaya', x: 72, y: 34 },
  { name: 'West Bengal', x: 66, y: 40 },
  { name: 'Jharkhand', x: 60, y: 39 },
  { name: 'Odisha', x: 59, y: 47 },
  { name: 'Chhattisgarh', x: 54, y: 48 },
  { name: 'Maharashtra', x: 42, y: 56 },
  { name: 'Telangana', x: 50, y: 62 },
  { name: 'Andhra Pradesh', x: 52, y: 69 },
  { name: 'Goa', x: 41, y: 67 },
  { name: 'Karnataka', x: 47, y: 74 },
  { name: 'Kerala', x: 48, y: 84 },
  { name: 'Tamil Nadu', x: 51, y: 87 }
];

// Testimonials
const testimonials = [
  {
    name: 'Karan & Shruti',
    review: 'The honeymoon our concierge planned for us in Santorini was flawless. The private sunset yacht charter and caldera villa stays were unforgettable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Amanda Sterling',
    review: 'Our corporate escape to Swiss Alps was executed to perfection. Helicopter transfers and private chalets made all the difference.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  }
];

export default function Contact() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1); // Step 1: Basics, Step 2: Personal, Step 3: Consultation Schedule
  const [openFaq, setOpenFaq] = useState(null);

  // Form states
  const [form, setForm] = useState({
    category: 'Luxury Escape',
    destination: '',
    budget: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consultationDate: '',
    consultationTimeSlot: 'Morning (9 AM - 12 PM)',
    contactMethod: 'WhatsApp'
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const selectCategory = (catName) => {
    setForm({ ...form, category: catName });
    // Scroll down to form container smoothly
    document.getElementById('inquiry-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextStep = () => setFormStep(formStep + 1);
  const prevStep = () => setFormStep(formStep - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("access_key", "c92fc004-6520-4c3f-81c6-86cf71ccdc87");
    formData.append("name", `${form.firstName} ${form.lastName}`);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("category", form.category);
    formData.append("destination", form.destination);
    formData.append("budget", form.budget);
    formData.append("message", form.message);
    formData.append("consultationDate", form.consultationDate);
    formData.append("consultationTimeSlot", form.consultationTimeSlot);
    formData.append("contactMethod", form.contactMethod);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const resetForm = () => {
    setForm({
      category: 'Luxury Escape',
      destination: '',
      budget: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      consultationDate: '',
      consultationTimeSlot: 'Morning (9 AM - 12 PM)',
      contactMethod: 'WhatsApp'
    });
    setFormStep(1);
    setSubmitted(false);
  };

  useEffect(() => {
    resetForm();
  }, [location.key]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ── 1. PREMIUM HERO SECTION ── */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-slate-950 flex items-center justify-center min-h-[550px]">
        {/* Background Image Overlay */}
        <img
          src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1200&auto=format&fit=crop"
          alt="Luxury Yacht Concierge"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/70 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#00CFC8]/20 border border-[#00CFC8]/30 text-[#00CFC8] text-xs font-black tracking-[0.2em] px-4 py-1.5 rounded-full uppercase block w-fit mx-auto mb-4">
              Your Personal Travel Concierge
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1.5px' }}>
              Let's Coordinate Your <span className="text-gradient">Bespoke Escape</span>
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base mb-8">
              Skip standard booking portals. Connect directly with our worldwide team of certified luxury concierges and VIP coordinators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('inquiry-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-[#00CFC8] hover:bg-[#00b5af] text-slate-950 text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                Request Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <a href="https://wa.me/919650782439" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer">
                  WhatsApp Us <MessageCircle className="w-4 h-4 text-emerald-400" />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 2. TRUST METRICS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-xl shadow-slate-100/50 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-extrabold text-[#0F172A] text-lg md:text-xl leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {s.label}
              </span>
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mt-1">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. QUICK INQUIRY CATEGORIES ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-10">
          <span className="section-label mx-auto mb-2">✦ Select Vacation Theme</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What Luxury Journey Are You Planning?
          </h2>
          <p className="text-slate-500 text-xs mt-1">Select a category below to instantly configure your concierge team.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              whileHover={{ y: -5, borderColor: '#00CFC8' }}
              onClick={() => selectCategory(cat.name)}
              className={`bg-white rounded-2xl border p-5 cursor-pointer text-left flex flex-col justify-between transition-all duration-300 min-h-[140px] ${
                form.category === cat.name ? 'border-[#00CFC8] bg-[#00CFC8]/5 shadow-md shadow-teal-500/5' : 'border-slate-150 shadow-sm'
              }`}
            >
              <Sparkles className={`w-5 h-5 ${form.category === cat.name ? 'text-[#00CFC8]' : 'text-slate-400'}`} />
              <div>
                <h4 className="font-extrabold text-slate-800 text-xs tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>{cat.name}</h4>
                <p className="text-[10px] text-slate-500 mt-1 leading-snug">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 6. TRAVEL PLANNING PROCESS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#0F172A] rounded-3xl p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 bg-[#00CFC8] filter blur-[60px] pointer-events-none" />
          <h3 className="text-lg md:text-xl font-extrabold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Bespoke Planning Route</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { num: '01', title: 'Concierge Inquiry', desc: 'Configure vacation parameters, date preferences, and styles in our portal form.' },
              { num: '02', title: '1-on-1 Consultation', desc: 'Our travel desk coordinates a detailed briefing call to refine logistics.' },
              { num: '03', title: 'Bespoke Itinerary', desc: 'Review day-by-day luxury route drafts, hotels, and custom travel layouts.' },
              { num: '04', title: 'Confirm & Book', desc: 'Secure booking deposits, coordinate flights, visa documents, and local concierge.' }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 text-left">
                <span className="text-3xl font-black text-[#00CFC8]/45 block" style={{ fontFamily: 'Outfit, sans-serif' }}>{p.num}</span>
                <h4 className="font-extrabold text-white text-xs mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{p.title}</h4>
                <p className="text-white/60 text-[10px] leading-relaxed mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4 & 5. ENHANCED MULTI-STEP CONTACT FORM & SCHEDULER ── */}
      <div id="inquiry-form-section" className="max-w-4xl mx-auto px-4 mt-20 relative z-30">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-xl shadow-slate-100/50"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[#00CFC8]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Concierge Request Received!</h3>
              <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-800">{form.firstName}</span>. Your paired travel concierge will review your parameters for <span className="font-bold text-[#00CFC8]">{form.destination || 'your destination'}</span> and contact you via <span className="font-bold text-slate-800">{form.contactMethod}</span> on <span className="font-bold text-slate-800">{form.consultationDate || 'your selected date'}</span>.
              </p>
              <button
                onClick={resetForm}
                className="mt-8 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3 rounded-full cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </motion.div>
          ) : (
            <div>
              {/* Step indicator header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[#00CFC8] text-[9px] font-black uppercase tracking-wider block">BESPOKE ITINERARY DESIGN</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Concierge Inquiry Form
                  </h3>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(step => (
                    <span
                      key={step}
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                        formStep === step
                          ? 'bg-[#00CFC8] text-white shadow-sm'
                          : formStep > step
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form body steps */}
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <AnimatePresence mode="wait">
                  {formStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      <h4 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider mb-2">Step 1: Journey Scope</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Vacation Category *</label>
                          <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          >
                            {categories.map(cat => (
                              <option key={cat.name} value={cat.name}>{cat.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Dream Destination *</label>
                          <input
                            name="destination"
                            type="text"
                            required
                            placeholder="Maldives, Switzerland, Bali, etc."
                            value={form.destination}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Expected Budget (INR) *</label>
                        <select
                          name="budget"
                          required
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                        >
                          <option value="">Choose Budget Range</option>
                          <option>Under ₹1 Lakh</option>
                          <option>₹1 Lakh – ₹2 Lakhs</option>
                          <option>₹2 Lakhs – ₹5 Lakhs</option>
                          <option>₹5 Lakhs+</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {formStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      <h4 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider mb-2">Step 2: Traveler Details</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name *</label>
                          <input
                            name="firstName"
                            type="text"
                            required
                            placeholder="Vikram"
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name *</label>
                          <input
                            name="lastName"
                            type="text"
                            required
                            placeholder="Mehta"
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address *</label>
                          <input
                            name="email"
                            type="email"
                            required
                            placeholder="vikram@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number *</label>
                          <input
                            name="phone"
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message & Details *</label>
                        <textarea
                          name="message"
                          required
                          rows="3"
                          placeholder="List custom lodging preferences, group details, or specific tour activities..."
                          value={form.message}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#00CFC8] resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {formStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      <h4 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider mb-2">Step 3: Free Consultation Booking</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Preferred Date *</label>
                          <input
                            name="consultationDate"
                            type="date"
                            required
                            value={form.consultationDate}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Preferred Time Slot *</label>
                          <select
                            name="consultationTimeSlot"
                            value={form.consultationTimeSlot}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#00CFC8]"
                          >
                            <option>Morning (9 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 8 PM)</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Preferred Contact Method *</label>
                        <div className="flex gap-3">
                          {['WhatsApp', 'Call', 'Email'].map(method => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setForm({ ...form, contactMethod: method })}
                              className={`flex-1 py-3 rounded-xl border text-xs font-extrabold transition-all text-center cursor-pointer ${
                                form.contactMethod === method
                                  ? 'bg-[#00CFC8] border-[#00CFC8] text-white shadow-sm'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Controls */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-6 gap-4">
                  {formStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold px-6 py-3 rounded-xl cursor-pointer"
                    >
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold px-6 py-3 rounded-xl cursor-pointer ml-auto"
                    >
                      Continue
                    </button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#00CFC8] hover:bg-[#00b5af] text-white text-xs font-black px-8 py-3.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-teal-500/10 cursor-pointer ml-auto"
                    >
                      Submit Booking Inquiry <Send className="w-3.5 h-3.5" />
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>

      {/* ── 7. CLIENT TESTIMONIALS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-10">
          <span className="section-label mx-auto mb-2">✦ Verified Reviews</span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What Our Luxury Travelers Say
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs italic leading-relaxed mb-6">
                  "{t.review}"
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="font-extrabold text-xs text-slate-800">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 9. GLOBAL OFFICE LOCATIONS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-10">
          <span className="section-label mx-auto mb-2">✦ Pan-India Coverage</span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Our India Connection Network
          </h3>
          <p className="text-slate-500 text-xs mt-1">Traced seamless private travel logistics across all 29 Indian states from Kashmir to Kanyakumari.</p>
        </div>

        {/* Global Schematic Indicator Grid */}
        <div className="bg-[#0F172A] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden aspect-[2/1] w-full mx-auto flex items-center justify-center mb-8 border border-white/5 shadow-2xl">
          {/* Schematic SVG Map of India outline */}
          <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            <defs>
              <pattern id="grid-office" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
              </pattern>
              <linearGradient id="glowing-spine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00CFC8" />
                <stop offset="50%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <rect width="1000" height="500" fill="url(#grid-office)" />
            
            {/* Glowing route line from Kashmir (500,60) down to Kanyakumari (510,455) */}
            <path 
              d="M 500,60 L 510,95 L 470,110 L 510,140 L 440,175 L 380,220 L 420,280 L 410,335 L 470,370 L 480,420 L 500,455" 
              fill="none" 
              stroke="url(#glowing-spine)" 
              strokeWidth="3.5" 
              strokeDasharray="5 5" 
              className="animate-pulse"
            />
            {/* Dotted contour representing schematic India border */}
            <path 
              d="M 500,40 L 530,75 L 515,100 L 565,120 L 530,155 L 565,175 L 610,185 L 670,185 L 730,165 L 780,185 L 800,215 L 750,225 L 710,215 L 680,245 L 640,235 L 630,265 L 580,285 L 540,325 L 520,385 L 510,455 L 490,415 L 470,325 L 415,285 L 390,265 L 340,245 L 370,205 L 410,195 L 440,155 L 460,125 L 470,85 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.06)" 
              strokeWidth="2.5" 
            />
          </svg>

          {/* Dotted States Pins Tracing Kashmir to Kanyakumari */}
          {mapStates.map((st, sidx) => (
            <div
              key={sidx}
              className="absolute group"
              style={{ left: `${st.x}%`, top: `${st.y}%` }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#00CFC8] opacity-35 animate-ping" />
                <span className="relative rounded-full w-2 h-2 bg-white/70 border border-[#00CFC8]" />
              </div>
              <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-white/10 px-2 py-0.5 rounded text-[8px] text-white font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {st.name}
              </div>
            </div>
          ))}

          {/* Hub pulse hotspots */}
          {offices.map((o) => (
            <div
              key={o.city}
              className="absolute text-center group"
              style={{ left: `${o.coords.x}%`, top: `${o.coords.y}%` }}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00CFC8] opacity-55 animate-ping" />
                <span className="relative rounded-full w-4 h-4 bg-[#00CFC8] border-2 border-white shadow-md shadow-teal-500" />
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#00CFC8] text-slate-950 px-2 py-0.5 rounded text-[10px] font-black whitespace-nowrap shadow-lg">
                {o.city}
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-6 text-left">
            <p className="text-xs text-white/50 tracking-wider font-bold uppercase">Bespoke India Spine Route</p>
            <p className="text-sm font-extrabold text-white">Connecting Srinagar to Cape Comorin</p>
          </div>
        </div>

        {/* Office details cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((o) => (
            <div key={o.city} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm text-left">
              <span className="text-[#00CFC8] text-[9px] font-black uppercase tracking-wider block mb-1">{o.region} Desk</span>
              <h4 className="font-extrabold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {o.city}
              </h4>
              <p className="text-slate-500 text-xs mb-4 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#00CFC8] shrink-0 mt-0.5" />
                {o.address}
              </p>
              <div className="space-y-1 text-slate-600 text-xs font-semibold pt-3 border-t border-slate-50">
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-400" /> {o.phone}</p>
                <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> {o.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. LUXURY TRAVEL FAQ ── */}
      <div className="max-w-4xl mx-auto px-4 mt-24 text-left">
        <div className="text-center mb-10">
          <span className="section-label mx-auto mb-2">✦ FAQ Concierge Desk</span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Frequently Asked Inquiries
          </h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-150 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-slate-800 font-extrabold text-xs tracking-wide cursor-pointer focus:outline-none"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {faq.q}
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#00CFC8]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-1 text-slate-500 text-xs leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 10. PREMIUM CTA SECTION ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24">
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
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-sky-500 filter blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#00CFC8] font-bold text-xs uppercase tracking-[0.2em] block mb-3">✦ Plan Bespoke Journey</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-1px' }}>
              Let's Create Your Dream Journey
            </h2>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-8">
              Every detail coordinated, every transfer mapped, every VIP reserve cleared. Begin drafting your bespoked luxury itinerary now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('inquiry-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-[#00CFC8] hover:bg-[#00b5af] text-slate-950 text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                Inquire Journey Now <Compass className="w-4 h-4" />
              </button>
              <a href="tel:+18001234567">
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer">
                  Talk To Travel Specialist <Phone className="w-4 h-4 text-[#00CFC8]" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}