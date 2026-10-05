// Curated Unsplash photos — warm golden-hour, mountain-dining, eco-luxe mood.
// Using direct Unsplash CDN with sizing params (no API key needed).
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // the Peak at golden hour
  hero: u("1589182337358-2cb63099350c", 2000),
  // Hand-built wooden eco-lodge / pavilion
  story: u("1517248135467-4c7edcad34c4", 1600),
  // String-light evening dining table
  experience: u("1414235077428-338989a2e8c0", 1800),
  // Signature dishes
  dishChoma: u("1544025162-d76694265947", 1100), // grilled meat
  dishMain: u("1546549032-9571cd6b27df", 1100), // plated fish-ish
  dishVegan: u("1540420773420-3366772f4999", 1100), // veg bowl
  // Gallery strip
  gallery1: u("1519671482749-fd09be7ccebf", 900),   // string lights bokeh
  gallery2: u("1466637574441-749b8f19452f", 900),   // farm veggies
  gallery3: u("1493770348161-369560ae357d", 900),   // wine toast / dinner
  gallery4: u("1504609813442-a8924e83f76e", 900),   // acoustic guitar
  gallery5: u("1504674900247-0877df9cc836", 900),   // plated food
  // Reservation page background
  reservation: u("1485631083525-d3a9caee52a2", 1800),
  // Menu page background
  menu: u("1559339352-11d035aa65de", 1800),
};
