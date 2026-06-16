import { motion } from 'framer-motion';
import { ArrowRight, Search, MapPin, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/* ─── Animation variants ─────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');

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
            className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)',
            }}
          >
            {/* Destination */}
            <div className="flex items-center gap-3 flex-1 px-5 py-4 sm:py-0 sm:h-20 border-b sm:border-b-0 sm:border-r border-white/15">
              <MapPin className="w-5 h-5 shrink-0" style={{ color: '#00CFC8' }} />
              <div className="text-left">
                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Destination</p>
                <input
                  type="text"
                  placeholder="Goa, Kerala, Rajasthan..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-white text-sm font-medium w-full focus:outline-none placeholder-white/40"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 flex-1 px-5 py-4 sm:py-0 sm:h-20 border-b sm:border-b-0 sm:border-r border-white/15">
              <Calendar className="w-5 h-5 shrink-0" style={{ color: '#00CFC8' }} />
              <div className="text-left">
                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Date</p>
                <input
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
                whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(0,207,200,0.6)' }}
                whileTap={{ scale: 0.97 }}
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