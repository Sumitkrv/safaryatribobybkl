// ─────────────────────────────────────────────────────────────
// Search utilities for India Destinations
// ─────────────────────────────────────────────────────────────

/**
 * Normalise a query string: trim, lowercase, collapse spaces.
 */
export function normaliseQuery(query) {
  return (query || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Convert a city name to a URL-safe slug.
 * e.g. "Leh-Ladakh" → "leh-ladakh", "Andaman & Nicobar" → "andaman-nicobar"
 */
export function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Search all cities across all states.
 * Supports partial, case-insensitive matching.
 * Returns an array of enriched city objects (includes state info).
 */
export function searchCities(query, data) {
  const q = normaliseQuery(query);
  if (!q) return [];

  return data.flatMap((state) =>
    state.cities
      .filter((city) => city.name.toLowerCase().includes(q))
      .map((city) => ({
        ...city,
        slug: toSlug(city.name),
        state: state.state,
        stateNickname: state.nickname,
        stateIcon: state.icon,
        stateGradient: state.gradient,
        stateImage: state.image,
        stateDescription: state.description,
      }))
  );
}

/**
 * Get a single city by its slug.
 * Returns null if not found.
 */
export function getCityBySlug(slug, data) {
  const s = (slug || '').toLowerCase();
  for (const state of data) {
    for (const city of state.cities) {
      if (toSlug(city.name) === s) {
        return {
          ...city,
          slug: toSlug(city.name),
          state: state.state,
          stateNickname: state.nickname,
          stateIcon: state.icon,
          stateGradient: state.gradient,
          stateImage: state.image,
          stateDescription: state.description,
          // Other cities in the same state (nearby)
          nearbyCities: state.cities
            .filter((c) => toSlug(c.name) !== s)
            .slice(0, 5)
            .map((c) => ({
              ...c,
              slug: toSlug(c.name),
              state: state.state,
              stateGradient: state.gradient,
              stateImage: state.image,
            })),
        };
      }
    }
  }
  return null;
}

/**
 * Get all cities for autocomplete suggestions (max `limit`).
 * Sorts exact prefix matches first, then partial matches.
 */
export function getAutocompleteSuggestions(query, data, limit = 6) {
  const q = normaliseQuery(query);
  if (!q || q.length < 1) return [];

  const results = [];
  for (const state of data) {
    for (const city of state.cities) {
      const name = city.name.toLowerCase();
      if (name.includes(q)) {
        results.push({
          name: city.name,
          state: state.state,
          icon: state.icon,
          slug: toSlug(city.name),
          isExact: name === q,
          isPrefix: name.startsWith(q),
        });
      }
    }
  }

  // Sort: exact > prefix > partial
  results.sort((a, b) => {
    if (a.isExact !== b.isExact) return a.isExact ? -1 : 1;
    if (a.isPrefix !== b.isPrefix) return a.isPrefix ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return results.slice(0, limit);
}

/**
 * Popular destinations shown when search is blank or no results found.
 */
export const popularDestinations = [
  'Goa',
  'Manali',
  'Jaipur',
  'Rishikesh',
  'Udaipur',
  'Shimla',
  'Kerala',
  'Varanasi',
  'Mussoorie',
  'Darjeeling',
];
