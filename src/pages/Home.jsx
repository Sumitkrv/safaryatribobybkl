import Hero from '../components/Hero';
import PartnerLogos from '../components/PartnerLogos';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, MapPin, ArrowRight, Check, ChevronDown, ChevronUp,
  Shield, Award, Clock, Headphones, Globe, Tag, Plane,
  Anchor, Wind, Ship, Mountain, Waves, X,
  Send, Phone, Mail, MessageCircle, ZoomIn, Play, Quote,
  ChevronLeft, ChevronRight
} from 'lucide-react';


/* ═══════════════════════════════════════════
   FADE-UP animation preset
═══════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ═══════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ''), 10);
    if (start === end) return;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const timer = setInterval(() => {
      start += Math.max(1, Math.floor(end / 60));
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const destinations = [
  {
    name: 'Goa', country: 'West India',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    rating: 4.9, price: '₹24,999', duration: '4 Nights', visa: 'No Visa', bestSeason: 'Oct – Mar',
    tag: 'Beach',
    desc: 'Golden beaches, Portuguese heritage, vibrant nightlife, and Dudhsagar waterfalls.',
  },
  {
    name: 'Kerala', country: 'South India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    rating: 5.0, price: '₹29,999', duration: '5 Nights', visa: 'No Visa', bestSeason: 'Sep – Mar',
    tag: 'Nature',
    desc: 'Serene backwaters, Ayurvedic retreats, lush tea gardens, and houseboat cruises.',
  },
  {
    name: 'Rajasthan', country: 'North India',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    rating: 4.9, price: '₹34,999', duration: '6 Nights', visa: 'No Visa', bestSeason: 'Oct – Mar',
    tag: 'Heritage',
    desc: 'Royal palaces, desert safaris, majestic forts, and vibrant Rajasthani culture.',
  },
  {
    name: 'Kashmir', country: 'North India',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?q=80&w=800&auto=format&fit=crop',
    rating: 5.0, price: '₹27,999', duration: '5 Nights', visa: 'No Visa', bestSeason: 'Mar – Oct',
    tag: 'Paradise',
    desc: 'Dal Lake houseboats, Mughal gardens, snow-capped mountains, and tulip gardens.',
  },
  {
    name: 'Uttarakhand', country: 'North India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    rating: 4.8, price: '₹19,999', duration: '4 Nights', visa: 'No Visa', bestSeason: 'Mar – Jun',
    tag: 'Spiritual',
    desc: 'Holy Rishikesh, Haridwar Ganga aarti, Mussoorie hills, and Kedarnath trek.',
  },
  {
    name: 'Himachal Pradesh', country: 'North India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    rating: 4.8, price: '₹22,999', duration: '5 Nights', visa: 'No Visa', bestSeason: 'Mar – Jun',
    tag: 'Adventure',
    desc: 'Shimla\'s colonial charm, Manali\'s valleys, Spiti\'s moonscape, and Dharamshala.',
  },
];

const packages = [
  {
    name: 'Royal Rajasthan Circuit',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    duration: '7 Days / 6 Nights',
    price: '₹34,999',
    badge: 'Most Popular',
    badgeClass: 'badge-popular',
    features: ['Heritage Palace Stay', 'Desert Safari', 'Private City Tours', 'Traditional Rajasthani Dinner', 'All Transfers Included'],
  },
  {
    name: 'Kerala Backwater Bliss',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    duration: '5 Days / 4 Nights',
    price: '₹29,999',
    badge: 'Bestseller',
    badgeClass: 'badge-new',
    features: ['Premium Houseboat', 'Ayurvedic Spa', 'Tea Garden Tour', 'Kathakali Show', 'All Meals Included'],
  },
  {
    name: 'Goa Beach Escape',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    duration: '4 Days / 3 Nights',
    price: '₹19,999',
    badge: 'Great Value',
    badgeClass: 'badge-popular',
    features: ['5-Star Beach Resort', 'Water Sports', 'Old Goa Heritage Tour', 'Spice Plantation Visit', 'Airport Transfers'],
  },
];

const whyUs = [
  { icon: <Globe className="w-6 h-6" />, title: 'Pan-India Coverage', desc: 'Covering all 29 states and 127+ cities with curated travel experiences across India.' },
  { icon: <Award className="w-6 h-6" />, title: 'Premium Stays', desc: 'Hand-picked heritage hotels, luxury resorts, and boutique properties for every budget.' },
  { icon: <Tag className="w-6 h-6" />, title: 'Tailored Itineraries', desc: 'Custom trips meticulously designed around your preferences and schedule.' },
  { icon: <Headphones className="w-6 h-6" />, title: '24/7 Support', desc: 'Around-the-clock personal concierge service for every need, any time.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Safe Travel', desc: 'Verified stays, trusted drivers, and comprehensive travel insurance coverage.' },
  { icon: <Check className="w-6 h-6" />, title: 'Best Price Guarantee', desc: 'We match any comparable price and guarantee the best deal on every trip.' },
];



const experiences = [
  { title: 'Kerala Houseboat Cruise', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop', icon: <Ship className="w-5 h-5" /> },
  { title: 'Rajasthan Desert Safari', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800&auto=format&fit=crop', icon: <Wind className="w-5 h-5" /> },
  { title: 'Himalayan Trekking', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', icon: <Mountain className="w-5 h-5" /> },
  { title: 'Goa Beach Adventures', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop', icon: <Waves className="w-5 h-5" /> },
  { title: 'Varanasi Ganga Aarti', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop', icon: <Anchor className="w-5 h-5" /> },
  { title: 'Andaman Island Stays', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800&auto=format&fit=crop', icon: <Plane className="w-5 h-5" /> },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    country: 'Delhi, India',
    destination: 'Kerala Backwaters Tour',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    review: 'Safar Hamara exceeded every expectation. Our Kerala trip was pure magic — the private houseboat, Ayurvedic spa, and Munnar tea gardens. Truly unforgettable!',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-sitting-on-boat-dock-looking-at-ocean-41619-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Arjun Mehta',
    country: 'Mumbai, India',
    destination: 'Royal Rajasthan Circuit',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    review: 'The Rajasthan circuit was seamlessly organized. From Jaipur palaces to Jaisalmer desert safari, every detail was flawlessly curated. Highly recommended!',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-traveling-by-car-on-a-mountain-road-41721-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Sneha Patel',
    country: 'Ahmedabad, India',
    destination: 'Kashmir Paradise Tour',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    review: 'Kashmir was beyond beautiful — the Dal Lake houseboat stay, Pahalgam valleys, and Mughal gardens. Safar Hamara made our honeymoon absolutely perfect!',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-standing-on-top-of-a-mountain-41584-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Vikram Singh',
    country: 'Bangalore, India',
    destination: 'Goa Beach Escape',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    review: 'From Palolem beach to Old Goa churches, every moment of our Goa trip was perfectly planned. The resort was top-class and Dudhsagar Falls was the highlight!',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-underwater-shot-of-a-woman-swimming-41712-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop'
  }
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop', label: 'Taj Mahal' },
  { src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop', label: 'Goa Beaches' },
  { src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop', label: 'Kerala' },
  { src: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop', label: 'Rajasthan' },
  { src: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?q=80&w=600&auto=format&fit=crop', label: 'Kashmir' },
  { src: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop', label: 'Varanasi' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop', label: 'Himalayas' },
  { src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600&auto=format&fit=crop', label: 'Andaman' },
];

const processSteps = [
  { step: '01', title: 'Choose State', desc: 'Browse our curated collection of 29 Indian states and find your dream destination.' },
  { step: '02', title: 'Customize Package', desc: 'Personalise every detail — from heritage stays to local experiences and cuisine.' },
  { step: '03', title: 'Book Your Journey', desc: 'Secure your booking with flexible payment options and complete peace of mind.' },
  { step: '04', title: 'Enjoy Safar', desc: 'Arrive and immerse yourself while our concierge handles every detail for you.' },
];

const faqs = [
  { q: 'How do bookings work?', a: 'Simply choose your destination and package, customise as needed, and complete the booking online. Our team confirms your reservation within 24 hours and provides a detailed itinerary.' },
  { q: 'What is your refund policy?', a: 'We offer a full refund up to 30 days before departure. Cancellations within 15–30 days receive a 50% refund. Our travel insurance options also provide additional coverage for unforeseen circumstances.' },
  { q: 'Do you cover all 29 Indian states?', a: 'Yes! We cover all 29 Indian states with 127+ cities and 732+ tourist destinations. From Kashmir to Kanyakumari, from Gujarat to Arunachal Pradesh — we have you covered.' },
  { q: 'Is travel insurance included?', a: 'Basic travel insurance is included with all Gold and Platinum packages. We also offer premium insurance upgrades for enhanced medical coverage, trip cancellation, and lost luggage protection.' },
  { q: 'Can packages be customised?', a: 'Yes, every package is fully customisable. Contact our concierge team to tailor transport, hotel categories, activities, dining preferences, and add exclusive local experiences.' },
];

// Partner brands handled by <PartnerLogos /> component

/* ═══════════════════════════════════════════
   SECTION WRAPPER
═══════════════════════════════════════════ */
function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function SectionHeader({ label, title, titleAccent, subtitle, center = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      {label && <div className={`section-label mb-4 ${center ? 'mx-auto' : ''}`}>{label}</div>}
      <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {title} {titleAccent && <span className="text-gradient">{titleAccent}</span>}
      </h2>
      {subtitle && <p className="text-[#64748B] max-w-2xl text-lg leading-relaxed mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(null);
  const [email, setEmail] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  // Auto-advance testimonials
  useEffect(() => {
    if (isTestimonialHovered || activeVideo) return;
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [isTestimonialHovered, activeVideo]);

  return (
    <div className="bg-[#F8FAFC]">
      {/* ── 1. HERO ────────────────────────────────── */}
      <Hero />

      {/* ── 2. PARTNER BRANDS ──────────────────────── */}
      <PartnerLogos />

      {/* ── 3. FEATURED DESTINATIONS ───────────────── */}
      <Section id="destinations">
        <SectionHeader
          label="✦ Top Indian Destinations"
          title="Explore"
          titleAccent="Incredible India"
          subtitle="Hand-picked destinations across India — from royal palaces to serene backwaters, holy rivers to golden beaches."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.name}
              variants={fadeUp}
              custom={idx * 0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-white"
              style={{ boxShadow: '0 4px 24px rgba(15,23,42,0.07)', transition: 'box-shadow 0.4s ease, transform 0.4s ease' }}
              whileHover={{
                y: -10,
                boxShadow: '0 24px 64px rgba(0,207,200,0.15), 0 8px 32px rgba(15,23,42,0.12)',
              }}
            >
              {/* ── Image ── */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Strong gradient: only bottom 50% */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.3) 40%, transparent 70%)' }} />

                {/* Top-left tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}>
                    {dest.tag}
                  </span>
                </div>

                {/* Top-right rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900 text-sm">{dest.rating}</span>
                </div>

                {/* Bottom overlay: name + country */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <p className="flex items-center gap-1 text-white/65 text-[11px] mb-1 font-medium uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-[#00CFC8]" /> {dest.country}
                  </p>
                  <h3 className="text-2xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.5px' }}>
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* ── Info Panel ── */}
              <div className="flex flex-col flex-grow px-5 py-4">

                {/* Meta chips row */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {/* Duration */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1E293B] bg-slate-100 rounded-full px-3 py-1">
                    <Clock className="w-3 h-3 text-[#00CFC8]" /> {dest.duration}
                  </span>
                  {/* Region */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-emerald-50 text-emerald-700 rounded-full px-3 py-1">
                    <Shield className="w-3 h-3" />
                    {dest.visa}
                  </span>
                  {/* Best season */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#64748B] bg-slate-50 border border-[#E2E8F0] rounded-full px-3 py-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {dest.bestSeason}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#F1F5F9] mb-4" />

                {/* Price row + CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-widest mb-0.5">Starting from</p>
                    <p className="text-2xl font-extrabold text-[#1E293B]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {dest.price}
                    </p>
                  </div>
                  <Link to="/destinations">
                    <motion.button
                      whileHover={{ scale: 1.07, boxShadow: '0 8px 24px rgba(0,207,200,0.35)' }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                      style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)', boxShadow: '0 4px 16px rgba(0,207,200,0.25)' }}
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/explore-india">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-secondary">
              Explore All 29 States <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </Section>

      {/* ── 4. PACKAGES ────────────────────────────── */}
      <Section id="packages" className="bg-section-alt">
        <SectionHeader
          label="✦ Curated Packages"
          title="Premium Travel"
          titleAccent="Packages"
          subtitle="Expertly designed packages that combine luxury accommodation, exclusive experiences, and seamless service."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              custom={idx * 0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-luxury overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-4 left-4 ${pkg.badgeClass}`}>{pkg.badge}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E293B] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{pkg.name}</h3>
                <p className="text-[#64748B] text-sm mb-4 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00CFC8]" /> {pkg.duration}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <div className="w-4 h-4 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#00CFC8]" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                  <div>
                    <span className="text-[#94A3B8] text-xs">Starting from</span>
                    <p className="text-2xl font-bold text-[#1E293B]" style={{ fontFamily: 'Outfit, sans-serif' }}>{pkg.price}</p>
                  </div>
                  <Link to="/packages">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary text-sm px-5 py-2.5"
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 5. WHY CHOOSE US ───────────────────────── */}
      <Section id="why-us">
        <SectionHeader
          label="✦ Why Safar Hamara"
          title="The Safar Hamara"
          titleAccent="Difference"
          subtitle="We go beyond travel planning — we create extraordinary experiences tailored to your every desire."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={idx * 0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,207,200,0.12)' }}
              className="glass-card p-7 cursor-default transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 flex items-center justify-center text-[#00CFC8] mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>



      
{/* ── 6. PROCESS ────────────────────────────── */}
      <Section id="process" className="bg-section-alt">
        <SectionHeader
          label="✦ How It Works"
          title="Your Journey"
          titleAccent="Starts Here"
          subtitle="Four simple steps to your perfect luxury escape — we handle everything, you simply enjoy."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* connector line desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00CFC8] via-[#0EA5E9] to-[#E2E8F0]" style={{ top: '3rem' }} />
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              custom={idx * 0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-[#E2E8F0] flex items-center justify-center mb-6 shadow-lg group-hover:border-[#00CFC8] transition-colors">
                <span className="text-3xl font-black text-gradient" style={{ fontFamily: 'Outfit, sans-serif' }}>{step.step}</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{step.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>


      
{/* ── 7. LUXURY EXPERIENCES ──────────────────── */}
      <Section id="experiences">
        <SectionHeader
          label="✦ Indian Experiences"
          title="Unforgettable"
          titleAccent="Experiences"
          subtitle="Immerse in India's incredible diversity — from backwater cruises to desert safaris, temple rituals to mountain treks."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              variants={fadeUp}
              custom={idx * 0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-square md:aspect-video"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white mb-3 group-hover:bg-[#00CFC8] transition-colors">
                  {exp.icon}
                </div>
                <h3 className="text-white font-bold text-center text-sm md:text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>{exp.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      
{/* ── 8. GALLERY ─────────────────────────────── */}
      <Section id="gallery" className="bg-section-alt">
        <SectionHeader
          label="✦ Travel Gallery"
          title="Inspiring"
          titleAccent="Moments"
          subtitle="A glimpse into the extraordinary worlds that await you on your next luxury journey."
        />
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={idx * 0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="gallery-item group cursor-pointer"
              onClick={() => setGalleryOpen(img)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold px-3 py-1 rounded-full">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {galleryOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setGalleryOpen(null)}
            >
              <button className="absolute top-6 right-6 text-white hover:text-[#00CFC8] transition-colors">
                <X className="w-8 h-8" />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={galleryOpen.src}
                alt={galleryOpen.label}
                className="max-w-4xl w-full max-h-[85vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      {/* ── NEWSLETTER CTA ──────────────────────────── */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 60%), radial-gradient(circle at 80% 50%, white 0%, transparent 60%)' }}
        />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Get Exclusive Travel Deals
            </h2>
            <p className="text-white/80 text-lg mb-8">Subscribe to our newsletter for insider offers and luxury travel inspiration delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3.5 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-white text-[#00CFC8] font-bold px-8 py-3.5 rounded-full hover:bg-white/95 transition-colors shrink-0"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
{/* ── 9. TESTIMONIALS ────────────────────────── */}
      <Section id="testimonials" className="relative overflow-hidden bg-[#F8FAFC]">
        <SectionHeader
          label="✦ Traveler Stories"
          title="What Our"
          titleAccent="Travelers Say"
          subtitle="Join thousands of satisfied travelers who have experienced the Safar Hamara difference."
        />

        <div 
          className="relative max-w-5xl mx-auto px-4 md:px-8"
          onMouseEnter={() => setIsTestimonialHovered(true)}
          onMouseLeave={() => setIsTestimonialHovered(false)}
        >
          {/* Main Card Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[420px]"
                style={{ boxShadow: '0 10px 40px -10px rgba(15,23,42,0.08)' }}
              >
                {/* Left Side: Video Thumbnail Story */}
                <div className="relative md:w-5/12 bg-slate-900 group overflow-hidden min-h-[260px] md:min-h-full flex items-center justify-center">
                  <img
                    src={testimonials[activeTestimonial].thumbnail}
                    alt={testimonials[activeTestimonial].destination}
                    className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Destination Badge */}
                  <span className="absolute top-6 left-6 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white bg-slate-900/60 backdrop-blur-md border border-white/10 uppercase">
                    {testimonials[activeTestimonial].destination}
                  </span>

                  {/* Play Button Overlay */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveVideo(testimonials[activeTestimonial].video)}
                    className="relative z-10 w-16 h-16 rounded-full bg-white/20 hover:bg-[#00CFC8] backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </motion.button>

                  <div className="absolute bottom-6 text-center w-full px-4">
                    <p className="text-white/80 text-xs tracking-wider uppercase font-semibold">Watch Video Story</p>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-between relative bg-white">
                  {/* Large decorative Quote Icon */}
                  <div className="absolute top-8 right-8 text-slate-100 pointer-events-none">
                    <Quote className="w-24 h-24 stroke-[1px] opacity-20 text-slate-300" />
                  </div>

                  <div>
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-[#1E293B] text-lg md:text-xl font-medium leading-relaxed italic mb-8 relative z-10">
                      "{testimonials[activeTestimonial].review}"
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#00CFC8]/30"
                    />
                    <div>
                      <h4 className="font-bold text-[#1E293B] text-base md:text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-[#64748B] text-sm flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#00CFC8]" />
                        {testimonials[activeTestimonial].country}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-8 w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#00CFC8] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hidden sm:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-8 w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#00CFC8] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hidden sm:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Multiple Cards: Thumbnails list below to select testimonials */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {testimonials.map((test, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                  i === activeTestimonial
                    ? 'bg-white border-[#00CFC8] shadow-md scale-105'
                    : 'bg-white/50 border-slate-200/60 hover:bg-white hover:border-slate-300'
                }`}
              >
                <img
                  src={test.avatar}
                  alt={test.name}
                  className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
                    i === activeTestimonial ? 'ring-2 ring-[#00CFC8]' : 'opacity-70'
                  }`}
                />
                <div className="hidden sm:block">
                  <p className="font-semibold text-xs text-[#1E293B]">{test.name}</p>
                  <p className="text-[10px] text-[#64748B]">{test.destination}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Story Modal Overlay */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-black rounded-3xl overflow-hidden max-w-3xl w-full aspect-video shadow-2xl border border-white/10"
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <video 
                  src={activeVideo} 
                  autoPlay 
                  controls 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </div>
  );
}

      