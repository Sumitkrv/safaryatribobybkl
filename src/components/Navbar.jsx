import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  // On home page: transparent glass over hero → solid when scrolled
  // On other pages: always solid
  const useSolid = scrolled || !isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${useSolid ? 'navbar-solid' : 'navbar-glass'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
              <Compass className={`w-8 h-8 transition-colors ${useSolid ? 'text-[#00CFC8]' : 'text-white'}`} />
            </motion.div>
            <span
              className={`font-bold text-2xl tracking-tight transition-colors`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <span className={useSolid ? 'text-[#1E293B]' : 'text-white'}>Safar</span>
              <span className="text-[#00CFC8]">Yatri</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-[#00CFC8]'
                    : useSolid
                    ? 'text-[#64748B] hover:text-[#1E293B]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#00CFC8]"
                  />
                )}
              </Link>
            ))}

            <a
              href="tel:+18001234567"
              className={`hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                useSolid ? 'text-[#64748B] hover:text-[#00CFC8]' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              +1 800 123 4567
            </a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn-primary text-sm px-5 py-2.5"
                style={{ borderRadius: '9999px' }}
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile menu toggle ── */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              useSolid ? 'text-[#1E293B] hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Nav ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#00CFC8] bg-teal-50'
                      : 'text-[#64748B] hover:text-[#1E293B] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn-primary w-full justify-center"
                  style={{ borderRadius: '0.75rem' }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}