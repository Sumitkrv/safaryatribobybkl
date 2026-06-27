import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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
    { name: 'Explore India', path: '/explore-india' },
    { name: 'Packages', path: '/packages' },
  ];

  const isHome = location.pathname === '/';
  const isTransparent = !scrolled && isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isTransparent ? 'navbar-glass' : 'navbar-solid'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* ── Logo ── */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group shrink-0">
            <motion.img
              src="/logo.png"
              alt="Safar Hamara"
              className="h-10 sm:h-12 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col leading-none">
              <span
                className="font-black text-lg sm:text-xl tracking-tight transition-colors duration-500"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  color: '#fff',
                  textShadow: '0 1px 8px rgba(0,0,0,0.6)'
                }}
              >
                Safar Hamara
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: '#00CFC8', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                Travel Agency
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-[#00CFC8]'
                    : 'text-white hover:text-[#00CFC8]'
                }`}
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
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
              href="tel:+919650782439"
              className="hidden lg:flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors text-white hover:text-[#00CFC8]"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
            >
              <Phone className="w-3.5 h-3.5" />
              96507 82439
            </a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/explore-india?book=true"
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
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
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

              {/* Phone in mobile menu */}
              <a href="tel:+919650782439"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-[#64748B] hover:text-[#00CFC8] hover:bg-teal-50 transition-colors">
                <Phone className="w-4 h-4" />
                96507 82439
              </a>

              <div className="pt-3">
                <Link
                  to="/explore-india?book=true"
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