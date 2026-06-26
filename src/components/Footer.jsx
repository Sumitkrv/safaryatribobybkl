import { Send, Star, Users, ShieldCheck, Plane, FileCheck, Headphones, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  Destinations: [
    { label: 'Rajasthan', href: '/explore-india' },
    { label: 'Kerala', href: '/explore-india' },
    { label: 'Goa', href: '/explore-india' },
    { label: 'Kashmir', href: '/explore-india' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Send Inquiry', href: '/contact' },
    { label: 'Explore India', href: '/explore-india' },
    { label: 'Packages', href: '/packages' },
  ],
};

// Social icons
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
const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
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
  { icon: <WaIcon />, label: 'WhatsApp', href: 'https://wa.me/919650782439' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-14">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <img src="/logo.png" alt="Safar Hamara" className="h-12 w-auto object-contain bg-white rounded-xl p-1" />
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Safar Hamara
                </span>
                <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#E05548' }}>
                  Travel Agency
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Explore Incredible India with Safar Hamara. We curate extraordinary journeys across 29 states — from sacred Himalayan pilgrimages to vibrant coastal escapes.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a href="tel:+919650782439" className="flex items-center gap-2 text-slate-400 hover:text-[#00CFC8] transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#00CFC8]" /> +91 96507 82439
              </a>
              <a href="mailto:safarhumara05@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-[#00CFC8] transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#00CFC8]" /> safarhumara05@gmail.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00CFC8] hover:border-[#00CFC8]/40 hover:bg-teal-500/10 transition-all"
                >
                  {s.icon}
                </a>
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
                      <Link to={link.href} className="text-slate-400 hover:text-[#00CFC8] transition-colors text-sm flex items-center gap-1.5 group">
                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#00CFC8] transition-all duration-200 rounded" />
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-slate-400 hover:text-[#00CFC8] transition-colors text-sm flex items-center gap-1.5 group">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 border-t border-b border-white/5 py-8 sm:py-10 text-center">
          {[
            { icon: <Star className="w-6 h-6 text-[#00CFC8]" />, label: '4.9★ Google Reviews', desc: 'Highly rated travel agency' },
            { icon: <Users className="w-6 h-6 text-[#00CFC8]" />, label: '10,000+ Travelers', desc: 'Happy satisfied clients' },
            { icon: <ShieldCheck className="w-6 h-6 text-[#00CFC8]" />, label: '100% Trusted', desc: 'Safe & secure bookings' },
            { icon: <Plane className="w-6 h-6 text-[#00CFC8]" />, label: 'All India Tours', desc: '29 states covered' },
            { icon: <FileCheck className="w-6 h-6 text-[#00CFC8]" />, label: 'Trip Planning', desc: 'End-to-end guidance' },
            { icon: <Headphones className="w-6 h-6 text-[#00CFC8]" />, label: '24/7 Support', desc: 'Always here to help' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center group">
              <div className="mb-3 bg-white/5 p-3 rounded-2xl border border-white/5 group-hover:bg-[#00CFC8]/10 group-hover:border-[#00CFC8]/20 transition-all duration-300">
                {item.icon}
              </div>
              <h5 className="text-white font-semibold text-xs sm:text-sm mb-0.5">{item.label}</h5>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Newsletter ── */}
        <div className="border border-white/10 rounded-2xl p-5 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div>
            <h4 className="text-white font-bold text-lg sm:text-xl mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Get Exclusive Travel Deals
            </h4>
            <p className="text-slate-400 text-sm">Subscribe for insider offers and travel inspiration.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[320px]" onSubmit={handleSubscribe}>
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
              className="bg-[#00CFC8] hover:bg-[#00b5af] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              {subscribed ? '✓ Done!' : <><Send className="w-4 h-4" /> Subscribe</>}
            </motion.button>
          </form>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Safar Hamara Travel Agency. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-[#00CFC8] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#00CFC8] transition-colors">Terms</a>
            <a href="mailto:safarhumara05@gmail.com" className="hover:text-[#00CFC8] transition-colors">safarhumara05@gmail.com</a>
          </div>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-[#00CFC8]">♥</span> for Indian travelers
          </p>
        </div>
      </div>
    </footer>
  );
}