/* ══════════════════════════════════════════════════════════
   PartnerLogos.jsx
   Premium auto-scrolling SVG logo marquee
   - Infinite loop (two identical sets = seamless)
   - Pause on hover
   - Greyscale → colour on hover
   - Framer Motion for smooth CSS animation control
══════════════════════════════════════════════════════════ */
import { useRef, useState } from 'react';

/* ─── SVG Logo components ──────────────────────────────── */

const EmiratesLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 56" width="130" height="40" aria-label="Emirates">
    {/* Arabic wing emblem simplified */}
    <g fill="currentColor">
      {/* Left decorative rule */}
      <rect x="0" y="24" width="28" height="2" rx="1" opacity="0.6"/>
      {/* Stylised winglet */}
      <path d="M32 12 C36 6 44 4 50 8 L46 14 C42 10 36 12 34 16 Z" />
      <path d="M32 28 C36 34 44 36 50 32 L46 26 C42 30 36 28 34 24 Z" />
      {/* Wordmark */}
      <text x="56" y="35" fontFamily="Georgia, serif" fontSize="19" fontWeight="700" letterSpacing="2">EMIRATES</text>
    </g>
  </svg>
);

const QatarAirwaysLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 56" width="150" height="40" aria-label="Qatar Airways">
    <g fill="currentColor">
      {/* Oryx head silhouette simplified */}
      <ellipse cx="18" cy="22" rx="10" ry="12" />
      <line x1="14" y1="10" x2="10" y2="0" stroke="currentColor" strokeWidth="2.5" />
      <line x1="22" y1="10" x2="26" y2="0" stroke="currentColor" strokeWidth="2.5" />
      {/* Wordmark */}
      <text x="36" y="24" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" letterSpacing="1">QATAR AIRWAYS</text>
      <text x="36" y="40" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2" opacity="0.7">THE WORLD'S BEST AIRLINE</text>
    </g>
  </svg>
);

const HiltonLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 56" width="110" height="40" aria-label="Hilton">
    <g fill="currentColor">
      {/* Big H mark */}
      <rect x="2" y="10" width="7" height="36" rx="1"/>
      <rect x="2" y="26" width="22" height="5" rx="1"/>
      <rect x="17" y="10" width="7" height="36" rx="1"/>
      {/* Wordmark */}
      <text x="34" y="37" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" letterSpacing="1.5">HILTON</text>
    </g>
  </svg>
);

const MarriottLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 56" width="130" height="40" aria-label="Marriott">
    <g fill="currentColor">
      {/* Decorative M */}
      <path d="M4 42 L4 14 L18 32 L32 14 L32 42" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      {/* Wordmark */}
      <text x="40" y="37" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" letterSpacing="1">MARRIOTT</text>
    </g>
  </svg>
);

const HyattLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 56" width="100" height="40" aria-label="Hyatt">
    <g fill="currentColor">
      {/* H glyph */}
      <rect x="2" y="10" width="6" height="30" rx="1"/>
      <rect x="2" y="23" width="20" height="5" rx="1"/>
      <rect x="16" y="10" width="6" height="30" rx="1"/>
      {/* Wordmark */}
      <text x="30" y="35" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" letterSpacing="2">HYATT</text>
    </g>
  </svg>
);

const TajLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 56" width="120" height="40" aria-label="Taj Hotels">
    <g fill="currentColor">
      {/* Stylised dome/arch */}
      <path d="M14 34 Q14 12 26 12 Q38 12 38 34 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="10" y="34" width="32" height="3" rx="1"/>
      <line x1="26" y1="4" x2="26" y2="12" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="26" cy="3" r="2.5"/>
      {/* Wordmark */}
      <text x="46" y="28" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" letterSpacing="2">TAJ</text>
      <text x="46" y="43" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2.5" opacity="0.8">HOTELS</text>
    </g>
  </svg>
);

/* ─── Brand list (duplicated for seamless loop) ────────── */
const BRANDS = [
  { id: 'emirates',      label: 'Emirates',      Logo: EmiratesLogo,    color: '#C8102E' },
  { id: 'qatar',         label: 'Qatar Airways',  Logo: QatarAirwaysLogo,color: '#5C0632' },
  { id: 'hilton',        label: 'Hilton',         Logo: HiltonLogo,      color: '#00558C' },
  { id: 'marriott',      label: 'Marriott',       Logo: MarriottLogo,    color: '#8B1B1B' },
  { id: 'hyatt',         label: 'Hyatt',          Logo: HyattLogo,       color: '#1D3954' },
  { id: 'taj',           label: 'Taj Hotels',     Logo: TajLogo,         color: '#8B6914' },
];

/* ─── Single logo card ─────────────────────────────────── */
function LogoCard({ Logo, label, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="img"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 48px',
        flexShrink: 0,
        cursor: 'default',
        transition: 'color 0.35s ease, filter 0.35s ease',
        color: hovered ? color : '#94A3B8',
        filter: hovered ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.55)',
      }}
    >
      <Logo />
    </div>
  );
}

/* ─── Marquee ──────────────────────────────────────────── */
export default function PartnerLogos() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Two identical sets → when first set scrolls fully off-screen,
  // the second set is already in place → seamless infinite loop.
  const set = [...BRANDS, ...BRANDS];

  return (
    <section
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        padding: '36px 0',
        overflow: 'hidden',
      }}
    >
      {/* Label */}
      <p
        style={{
          textAlign: 'center',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#CBD5E1',
          marginBottom: '28px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Trusted Partners
      </p>

      {/* Fade-edge masks */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
            background: 'linear-gradient(to right, #ffffff, transparent)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
            background: 'linear-gradient(to left, #ffffff, transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: `marqueeScroll 32s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {set.map((brand, i) => (
            <LogoCard
              key={`${brand.id}-${i}`}
              Logo={brand.Logo}
              label={brand.label}
              color={brand.color}
            />
          ))}
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
