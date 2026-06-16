import { Compass, Send, Star, Users, ShieldCheck, Plane, FileCheck, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Destinations: [
    { label: 'Rajasthan', href: '/explore-india' },
    { label: 'Kerala', href: '/explore-india' },
    { label: 'Goa', href: '/explore-india' },
    { label: 'Kashmir', href: '/explore-india' },
  ],
  Support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

// Inline SVG social icons (lucide-react v1 doesn't export brand icons)
const IgIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const FbIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const LiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socials = [
  { icon: <IgIcon />, label: 'Instagram', href: '#' },
  { icon: <FbIcon />, label: 'Facebook', href: '#' },
  { icon: <LiIcon />, label: 'LinkedIn', href: '#' },
  { icon: <TwIcon />, label: 'Twitter / X', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer style={{ background: '#0F172A' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.6 }}>
                <Compass className="w-7 h-7 text-[#00CFC8]" />
              </motion.div>
              <span className="font-bold text-2xl tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Safar<span className="text-[#00CFC8]">Yatri</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Explore Incredible India in premium style. We curate extraordinary journeys across 29 states for travelers who demand nothing but the best.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00CFC8] hover:border-[#00CFC8]/40 hover:bg-teal-500/10 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 pt-2">
              {['ISO Certified', 'IATA Member', 'Award 2024'].map((badge) => (
                <span key={badge} className="text-xs font-medium text-slate-500 border border-slate-700 rounded-full px-3 py-1">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-[#00CFC8] transition-colors text-sm flex items-center gap-1.5 group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#00CFC8] transition-all duration-200 rounded" />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-[#00CFC8] transition-colors text-sm flex items-center gap-1.5 group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#00CFC8] transition-all duration-200 rounded" />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Trust Elements Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 border-t border-b border-white/5 py-10 text-center lg:text-left">
          {[
            { icon: <Star className="w-6 h-6 text-[#00CFC8]" />, label: '4.9★ Google Reviews', desc: 'Highly rated travel agency' },
            { icon: <Users className="w-6 h-6 text-[#00CFC8]" />, label: '10,000+ Travelers', desc: 'Satisfied luxury clients' },
            { icon: <ShieldCheck className="w-6 h-6 text-[#00CFC8]" />, label: 'Secure Payments', desc: '100% encrypted checkout' },
            { icon: <Plane className="w-6 h-6 text-[#00CFC8]" />, label: 'IATA Certified', desc: 'Officially registered agent' },
            { icon: <FileCheck className="w-6 h-6 text-[#00CFC8]" />, label: 'Visa Support', desc: 'End-to-end travel guidance' },
            { icon: <Headphones className="w-6 h-6 text-[#00CFC8]" />, label: '24/7 Concierge', desc: 'Dedicated personal support' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center lg:items-start group">
              <div className="mb-3 bg-white/5 p-3 rounded-2xl border border-white/5 group-hover:bg-[#00CFC8]/10 group-hover:border-[#00CFC8]/20 transition-all duration-300">
                {item.icon}
              </div>
              <h5 className="text-white font-semibold text-sm mb-0.5">{item.label}</h5>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Newsletter ── */}
        <div className="border border-white/10 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div>
            <h4 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Get Exclusive Travel Deals
            </h4>
            <p className="text-slate-400 text-sm">Subscribe for insider offers and luxury travel inspiration.</p>
          </div>
          <form className="flex gap-3 w-full md:w-auto min-w-[320px]" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00CFC8] transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#00CFC8] hover:bg-[#00b5af] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 shrink-0"
            >
              {subscribed ? '✓ Done!' : <><Send className="w-4 h-4" /> Subscribe</>}
            </motion.button>
          </form>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SafarYatri. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#00CFC8] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#00CFC8] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#00CFC8] transition-colors">Cookies</a>
          </div>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-[#00CFC8]">♥</span> for Indian travelers
          </p>
        </div>
      </div>
    </footer>
  );
}