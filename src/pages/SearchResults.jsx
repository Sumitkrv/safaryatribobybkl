import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ArrowLeft, Compass, ArrowRight, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import indiaDestinations from '../data/indiaDestinations';
import { searchCities, toSlug, popularDestinations } from '../utils/searchDestinations';

// ─── Animation ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryParam = searchParams.get('destination') || '';
  const date = searchParams.get('date') || '';
  const guests = searchParams.get('guests') || '2 Guests';

  const [loading, setLoading] = useState(true);
  const [localQuery, setLocalQuery] = useState(queryParam);

  // Simulate brief loading for polish
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [queryParam]);

  const results = useMemo(
    () => searchCities(queryParam, indiaDestinations),
    [queryParam]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const q = localQuery.trim();
    if (!q) return;
    navigate(`/search?destination=${encodeURIComponent(q)}&date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* ─── Top search bar ─────────────────────────────── */}
      <div className="sticky top-0 z-20 shadow-sm" style={{ background: '#fff', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-all shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{ background: '#F1F5F9', border: '1px solid #E2E8F0' }}>
            <Search className="w-4 h-4 shrink-0" style={{ color: '#00CFC8' }} />
            <input
              id="search-results-input"
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="Search destination..."
              className="flex-1 bg-transparent text-slate-800 text-sm font-medium focus:outline-none placeholder-slate-400"
            />
            {localQuery && (
              <button type="button" onClick={() => setLocalQuery('')}>
                <X className="w-4 h-4 text-slate-400 hover:text-slate-600" />
              </button>
            )}
          </form>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleSearch}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0"
            style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}
          >
            Search
          </motion.button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* ─── Loading skeleton ─── */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-2xl overflow-hidden animate-pulse" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                  <div className="h-40" style={{ background: '#E2E8F0' }} />
                  <div className="p-5 space-y-3">
                    <div className="h-4 rounded" style={{ background: '#E2E8F0', width: '60%' }} />
                    <div className="h-3 rounded" style={{ background: '#E2E8F0', width: '40%' }} />
                    <div className="h-8 rounded-xl" style={{ background: '#E2E8F0' }} />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!loading && (
          <>
            {/* ─── Results header ─── */}
            <motion.div {...fadeUp(0)} className="mb-8">
              {queryParam ? (
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">
                    {results.length > 0
                      ? `${results.length} result${results.length > 1 ? 's' : ''} for `
                      : 'No results for '}
                    <span style={{ color: '#00CFC8' }}>"{queryParam}"</span>
                  </h1>
                  {date && <p className="text-sm text-slate-500 mt-1">📅 {new Date(date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} · 👥 {guests}</p>}
                </div>
              ) : (
                <h1 className="text-2xl font-bold text-slate-800">Explore Destinations</h1>
              )}
            </motion.div>

            {/* ─── Results grid ─── */}
            {results.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {results.map((city, i) => (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
                    className="rounded-2xl overflow-hidden"
                    style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={city.stateImage} alt={city.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                      <div className="absolute bottom-3 left-4">
                        <h3 className="text-white font-bold text-xl">{city.name}</h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-sm">{city.stateIcon}</span>
                          <span className="text-white/70 text-xs font-medium">{city.state}</span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ background: 'rgba(0,207,200,0.45)', border: '1px solid rgba(0,207,200,0.6)', backdropFilter: 'blur(8px)' }}
                        >
                          {city.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-slate-500 font-medium">{city.places?.length || 0} attractions</span>
                        <span className="text-xs text-slate-400">{city.stateNickname}</span>
                      </div>
                      <Link
                        to={`/destination/${city.slug}?date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`}
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                          style={{ background: 'linear-gradient(135deg, #00CFC8, #0EA5E9)' }}
                        >
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ─── No results ─── */}
            {results.length === 0 && queryParam && (
              <motion.div {...fadeUp(0.1)} className="text-center py-12 mb-12">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'linear-gradient(135deg, #F0FDFA, #E0F2FE)' }}>
                  <Compass className="w-10 h-10" style={{ color: '#00CFC8' }} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">No destination found</h2>
                <p className="text-slate-500 mb-2">
                  We couldn't find a match for <strong>"{queryParam}"</strong>.
                </p>
                <p className="text-slate-400 text-sm mb-8">Check your spelling, or try one of these popular destinations:</p>
              </motion.div>
            )}

            {/* ─── Popular destinations (always shown at bottom) ─── */}
            <motion.div {...fadeUp(0.15)}>
              <h2 className="text-lg font-bold text-slate-700 mb-4">
                {results.length > 0 ? '🔥 Popular Destinations' : '✨ Try searching for'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {popularDestinations.map((dest) => (
                  <Link
                    key={dest}
                    to={`/destination/${toSlug(dest)}?date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
                      style={{
                        background: '#fff',
                        border: '1px solid #E2E8F0',
                        color: '#475569',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      }}
                    >
                      <MapPin className="w-3.5 h-3.5" style={{ color: '#00CFC8' }} />
                      {dest}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
