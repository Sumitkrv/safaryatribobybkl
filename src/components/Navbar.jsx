/**
 * Navbar.jsx — Premium Redesign
 * Luxury Indian Travel Agency · Safar Hamara
 * ─────────────────────────────────────────────
 * Features:
 *  • Glassmorphism + backdrop-blur (ramps up on scroll)
 *  • Scroll-aware height shrink (86px → 70px)
 *  • Animated underline via framer layoutId
 *  • Premium gradient "Book Now" pill with glow
 *  • Glass-container phone CTA
 *  • Full-screen mobile overlay with staggered items
 *  • Accessible: focus rings, ARIA labels, keyboard nav
 */

import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

/* ─── Nav links ──────────────────────────────────── */
const NAV_LINKS = [
  { name: 'Home',          path: '/' },
  { name: 'Destinations',  path: '/destinations' },
  { name: 'Explore India', path: '/explore-india' },
  { name: 'Packages',      path: '/packages' },
];

/* ─── Framer variants ────────────────────────────── */
const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

const menuPanelVariants = {
  hidden:  { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
};

const menuItemVariants = {
  hidden:  { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Component ──────────────────────────────────── */
export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Scroll listener — passive for perf */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* Close mobile menu on route change */
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isHome        = location.pathname === '/';
  const isTransparent = !scrolled && isHome;

  /* Smooth-scroll to top on internal nav */
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ═══════════════════════════════════════════
          NAVBAR BAR
      ═══════════════════════════════════════════ */}
      <nav
        className={`navbar-root ${isTransparent ? 'navbar-transparent' : 'navbar-scrolled'}`}
        aria-label="Main navigation"
      >
        <div className="navbar-inner">

          {/* ── Logo ──────────────────────────────── */}
          <Link
            to="/"
            onClick={scrollTop}
            className="navbar-logo-link"
            aria-label="Safar Hamara — Home"
          >
            <motion.img
              src="/logo.png"
              alt="Safar Hamara logo"
              className="navbar-logo-img"
              whileHover={{ scale: 1.06, rotate: -1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">Safar Hamara</span>
              <span className="navbar-brand-tagline">Travel Agency</span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ──────────────────── */}
          <ul className="navbar-links" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollTop}
                    className={`navbar-link ${isActive ? 'navbar-link--active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    {/* Animated underline — shared layoutId morphs between links */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="navbar-link-underline"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop Right Actions ──────────────── */}
          <div className="navbar-actions">
            {/* Glass Phone Pill */}
            <a
              href="tel:+919650782439"
              className="navbar-phone-pill"
              aria-label="Call us at 96507 82439"
            >
              <span className="navbar-phone-icon-wrap" aria-hidden="true">
                <PhoneCall size={13} strokeWidth={2.2} />
              </span>
              <span className="navbar-phone-text">
                <span className="navbar-phone-label">Call Us</span>
                <span className="navbar-phone-number">96507 82439</span>
              </span>
            </a>

            {/* Book Now CTA */}
            <motion.div
              whileHover={{ scale: 1.045, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Link
                to="/explore-india?book=true"
                onClick={scrollTop}
                className="navbar-cta-btn"
                aria-label="Book your trip now"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile Hamburger ──────────────────── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen((v) => !v)}
            className="navbar-hamburger"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu-panel"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex' }}
                >
                  <X size={22} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex' }}
                >
                  <Menu size={22} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          MOBILE FULL-SCREEN MENU OVERLAY
      ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-overlay-backdrop"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="mobile-menu-panel"
              variants={menuPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Panel header */}
              <div className="mobile-menu-header">
                <div className="mobile-menu-brand">
                  <img src="/logo.png" alt="Safar Hamara" className="mobile-menu-logo" />
                  <div>
                    <div className="mobile-brand-name">Safar Hamara</div>
                    <div className="mobile-brand-tagline">Travel Agency</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mobile-menu-close"
                  aria-label="Close navigation menu"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              {/* Divider */}
              <div className="mobile-menu-divider" aria-hidden="true" />

              {/* Nav links */}
              <nav aria-label="Mobile navigation" className="mobile-nav-links">
                {NAV_LINKS.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link.path}
                        onClick={scrollTop}
                        className={`mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="mobile-nav-link-text">{link.name}</span>
                        {isActive && (
                          <span className="mobile-nav-active-dot" aria-hidden="true" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mobile-menu-divider" aria-hidden="true" />

              {/* Bottom Actions */}
              <motion.div
                className="mobile-menu-actions"
                custom={NAV_LINKS.length}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Phone */}
                <a
                  href="tel:+919650782439"
                  className="mobile-phone-row"
                  aria-label="Call us at 96507 82439"
                >
                  <span className="mobile-phone-icon" aria-hidden="true">
                    <PhoneCall size={15} strokeWidth={2} />
                  </span>
                  <div className="mobile-phone-texts">
                    <span className="mobile-phone-label">Call Us</span>
                    <span className="mobile-phone-number">96507 82439</span>
                  </div>
                </a>

                {/* CTA */}
                <Link
                  to="/explore-india?book=true"
                  onClick={scrollTop}
                  className="mobile-cta-btn"
                  aria-label="Book your trip now"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}