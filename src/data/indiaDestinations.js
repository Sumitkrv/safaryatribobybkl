// ─────────────────────────────────────────────────────────────
// Comprehensive India Destinations Database — State & City Wise
// ─────────────────────────────────────────────────────────────

const indiaDestinations = [
  // ══════════════════════════════════════════════════════════
  // UTTARAKHAND — Dev Bhoomi
  // ══════════════════════════════════════════════════════════
  {
    state: 'Uttarakhand',
    nickname: 'Dev Bhoomi',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    description: 'The Land of Gods — home to sacred rivers, mighty Himalayan peaks, ancient temples, and serene hill stations.',
    cities: [
      {
        name: 'Haridwar',
        type: 'Pilgrimage',
        places: [
          { name: 'Har Ki Pauri', desc: 'Sacred ghat on the Ganges — witness the mesmerizing Ganga Aarti every evening', type: 'Temple/Ghat' },
          { name: 'Mansa Devi Temple', desc: 'Hilltop temple accessible by ropeway with panoramic city views', type: 'Temple' },
          { name: 'Chandi Devi Temple', desc: 'Ancient temple atop Neel Parvat, reachable by cable car', type: 'Temple' },
          { name: 'Maya Devi Temple', desc: 'One of the oldest temples, part of the Shakti Peethas', type: 'Temple' },
          { name: 'Daksha Mahadev Temple', desc: 'Ancient Shiva temple linked to the legend of Sati', type: 'Temple' },
          { name: 'Rajaji National Park', desc: 'Wildlife sanctuary with elephants, tigers, and rich biodiversity', type: 'Wildlife' },
          { name: 'Shantikunj', desc: 'Spiritual ashram and meditation center of All World Gayatri Pariwar', type: 'Ashram' },
          { name: 'Bharat Mata Mandir', desc: 'Eight-story temple dedicated to Mother India and freedom fighters', type: 'Temple' },
          { name: 'Pavan Dham', desc: 'Glass temple with intricate mirror and glass work', type: 'Temple' },
          { name: 'Saptrishi Ashram', desc: 'Peaceful ashram where seven great sages meditated', type: 'Ashram' },
        ]
      },
      {
        name: 'Rishikesh',
        type: 'Adventure & Spiritual',
        places: [
          { name: 'Lakshman Jhula', desc: 'Iconic 137m suspension bridge over the Ganges', type: 'Landmark' },
          { name: 'Ram Jhula', desc: 'Sacred bridge connecting Sivananda Ashram to Swargashram', type: 'Landmark' },
          { name: 'Triveni Ghat', desc: 'Confluence of three rivers — popular for evening aarti', type: 'Ghat' },
          { name: 'Beatles Ashram', desc: 'Abandoned Maharishi Mahesh Yogi ashram with stunning graffiti art', type: 'Heritage' },
          { name: 'Neelkanth Mahadev Temple', desc: 'Ancient Shiva temple in the mountains above Rishikesh', type: 'Temple' },
          { name: 'White Water Rafting', desc: 'Grade III-IV rapids on the Ganges — 16km to 36km stretches', type: 'Adventure' },
          { name: 'Bungee Jumping', desc: 'India\'s highest bungee at 83m over a rocky riverbed', type: 'Adventure' },
          { name: 'Parmarth Niketan', desc: 'Largest ashram in Rishikesh with daily Ganga Aarti', type: 'Ashram' },
          { name: 'Neer Garh Waterfall', desc: 'Two-tiered waterfall surrounded by lush forests', type: 'Nature' },
          { name: 'Rajaji Tiger Reserve', desc: 'Tiger reserve on the outskirts with jungle safaris', type: 'Wildlife' },
          { name: 'Camping at Shivpuri', desc: 'Riverside camping with bonfire, rafting, and cliff jumping', type: 'Adventure' },
          { name: 'Vashishta Gufa', desc: 'Ancient meditation cave of Sage Vashishta', type: 'Heritage' },
        ]
      },
      {
        name: 'Dehradun',
        type: 'Capital City',
        places: [
          { name: 'Robber\'s Cave (Guchhupani)', desc: 'Natural cave with a river flowing through it', type: 'Nature' },
          { name: 'Sahastradhara', desc: 'Thousand-fold spring — sulphur springs with healing properties', type: 'Nature' },
          { name: 'Mindrolling Monastery', desc: 'One of the largest Buddhist centers with 60m tall Buddha statue', type: 'Monastery' },
          { name: 'Forest Research Institute (FRI)', desc: 'Colonial-era building set in 450 hectares — architectural marvel', type: 'Heritage' },
          { name: 'Tapkeshwar Mahadev Temple', desc: 'Cave temple where water naturally drips on Shivling', type: 'Temple' },
          { name: 'Lachhiwala', desc: 'Nature park with crystal clear artificial lake for swimming', type: 'Nature' },
          { name: 'Rajpur Road', desc: 'Bustling food and shopping street — the lifeline of Dehradun', type: 'Shopping' },
          { name: 'Malsi Deer Park', desc: 'Mini zoo and park at the foothills of Mussoorie', type: 'Wildlife' },
          { name: 'Clock Tower', desc: 'Iconic hexagonal clock tower in the heart of the city', type: 'Landmark' },
          { name: 'Khalanga War Memorial', desc: 'Memorial commemorating the Gurkha-British war of 1814', type: 'Heritage' },
        ]
      },
      {
        name: 'Mussoorie',
        type: 'Hill Station',
        places: [
          { name: 'Kempty Falls', desc: 'Spectacular 40-foot waterfall — most popular picnic spot', type: 'Nature' },
          { name: 'Mall Road', desc: 'Heritage promenade with colonial architecture, shops, and eateries', type: 'Shopping' },
          { name: 'Gun Hill', desc: 'Second highest point with panoramic Himalayan views via ropeway', type: 'Viewpoint' },
          { name: 'Lal Tibba', desc: 'Highest point of Mussoorie with telescope views of Himalayan peaks', type: 'Viewpoint' },
          { name: 'Company Garden', desc: 'Beautiful garden with artificial mini-lake and fountains', type: 'Nature' },
          { name: 'Camel\'s Back Road', desc: '3km nature walk with rock shaped like a camel\'s hump', type: 'Nature' },
          { name: 'Cloud\'s End', desc: 'Where Mussoorie ends and thick forest begins — stunning views', type: 'Nature' },
          { name: 'Jharipani Falls', desc: 'Hidden waterfall with a moderate trek through forests', type: 'Nature' },
          { name: 'Landour', desc: 'Quiet cantonment area with old-world charm and Ruskin Bond connection', type: 'Heritage' },
          { name: 'George Everest House', desc: 'Ruins of the house of Sir George Everest with stunning sunset views', type: 'Heritage' },
        ]
      },
      {
        name: 'Nainital',
        type: 'Lake City',
        places: [
          { name: 'Naini Lake', desc: 'Crescent-shaped lake surrounded by seven hills — heart of the city', type: 'Lake' },
          { name: 'Snow View Point', desc: 'Aerial ropeway offering panoramic snow-clad Himalayan views', type: 'Viewpoint' },
          { name: 'Naina Devi Temple', desc: 'Sacred temple on the north shore of Naini Lake', type: 'Temple' },
          { name: 'Tiffin Top', desc: 'Beautiful viewpoint accessible by pony ride through oak forests', type: 'Viewpoint' },
          { name: 'The Mall Road', desc: 'Shopping and dining hub along the lakeside', type: 'Shopping' },
          { name: 'Eco Cave Garden', desc: 'Interconnected rocky caves named after animals', type: 'Nature' },
          { name: 'Bhimtal Lake', desc: 'Larger lake with an island and aquarium in the center', type: 'Lake' },
          { name: 'Sattal', desc: 'Group of seven interconnected freshwater lakes in dense forest', type: 'Lake' },
          { name: 'Naukuchiatal', desc: 'Nine-cornered lake — deepest lake in Kumaon', type: 'Lake' },
          { name: 'Governor\'s House (Raj Bhawan)', desc: 'Gothic-style Victorian building with a golf course', type: 'Heritage' },
        ]
      },
      {
        name: 'Kedarnath',
        type: 'Pilgrimage',
        places: [
          { name: 'Kedarnath Temple', desc: 'One of the 12 Jyotirlingas at 3,583m — sacred Shiva temple', type: 'Temple' },
          { name: 'Chorabari Tal (Gandhi Sarovar)', desc: 'Glacial lake at 3,900m near the temple', type: 'Lake' },
          { name: 'Bhairav Temple', desc: 'Temple of Bhairavnath — guardian deity of Kedarnath', type: 'Temple' },
          { name: 'Shankaracharya Samadhi', desc: 'Final resting place of Adi Shankaracharya behind the temple', type: 'Heritage' },
          { name: 'Vasuki Tal', desc: 'Pristine glacial lake at 4,150m with stunning Chaukhamba views', type: 'Lake' },
        ]
      },
      {
        name: 'Badrinath',
        type: 'Pilgrimage',
        places: [
          { name: 'Badrinath Temple', desc: 'Sacred Char Dham temple dedicated to Lord Vishnu at 3,133m', type: 'Temple' },
          { name: 'Tapt Kund', desc: 'Natural hot water spring near the temple for holy bath', type: 'Nature' },
          { name: 'Mana Village', desc: 'Last Indian village before the Tibetan border', type: 'Village' },
          { name: 'Vasudhara Falls', desc: 'Majestic 122m waterfall near Mana village', type: 'Nature' },
          { name: 'Neelkanth Peak', desc: 'Sacred peak visible from Badrinath — 6,597m high', type: 'Mountain' },
          { name: 'Saraswati River Origin', desc: 'Point where River Saraswati emerges before going underground', type: 'Nature' },
        ]
      },
      {
        name: 'Auli',
        type: 'Skiing & Nature',
        places: [
          { name: 'Auli Ski Resort', desc: 'India\'s premier skiing destination with slopes at 2,500-3,050m', type: 'Adventure' },
          { name: 'Auli Ropeway', desc: 'Asia\'s longest cable car (4km) with breathtaking views', type: 'Adventure' },
          { name: 'Gorson Bugyal', desc: 'Lush alpine meadow with 360° Himalayan panorama', type: 'Nature' },
          { name: 'Chattrakund Lake', desc: 'Artificial lake surrounded by oak and deodar forests', type: 'Lake' },
          { name: 'Joshimath', desc: 'Gateway town to Auli with ancient Shankaracharya Math', type: 'Town' },
        ]
      },
      {
        name: 'Jim Corbett',
        type: 'Wildlife',
        places: [
          { name: 'Jim Corbett National Park', desc: 'India\'s first national park — tiger reserve with 600+ species', type: 'Wildlife' },
          { name: 'Bijrani Zone', desc: 'Open grassland zone — best for tiger sightings', type: 'Wildlife' },
          { name: 'Dhikala Zone', desc: 'Most scenic zone with panoramic river valley views', type: 'Wildlife' },
          { name: 'Corbett Falls', desc: 'Beautiful 20m waterfall in dense forest', type: 'Nature' },
          { name: 'Garjiya Devi Temple', desc: 'Temple on a rock in the middle of Kosi river', type: 'Temple' },
        ]
      },
      {
        name: 'Chopta-Tungnath',
        type: 'Trekking',
        places: [
          { name: 'Tungnath Temple', desc: 'World\'s highest Shiva temple at 3,680m — one of Panch Kedar', type: 'Temple' },
          { name: 'Chandrashila Peak', desc: 'Summit at 4,000m with 360° views of Nanda Devi and Chaukhamba', type: 'Trekking' },
          { name: 'Deoria Tal', desc: 'Crystal-clear lake reflecting Chaukhamba peaks at sunrise', type: 'Lake' },
          { name: 'Chopta Meadows', desc: 'Mini Switzerland of India — lush green alpine meadows', type: 'Nature' },
        ]
      },
      {
        name: 'Valley of Flowers',
        type: 'UNESCO Heritage',
        places: [
          { name: 'Valley of Flowers National Park', desc: 'UNESCO World Heritage Site — 600+ species of wildflowers', type: 'Nature' },
          { name: 'Hemkund Sahib', desc: 'Sikh pilgrimage gurudwara at 4,329m beside a glacial lake', type: 'Gurudwara' },
          { name: 'Govindghat', desc: 'Base camp for Valley of Flowers and Hemkund Sahib treks', type: 'Town' },
        ]
      },
      {
        name: 'Almora',
        type: 'Heritage Hill Town',
        places: [
          { name: 'Kasar Devi Temple', desc: 'Ancient temple with cosmic energy — attracted scientists and hippies', type: 'Temple' },
          { name: 'Bright End Corner', desc: 'Panoramic sunrise and sunset viewpoint', type: 'Viewpoint' },
          { name: 'Zero Point', desc: 'Confluence viewpoint where sunrise and sunset are visible', type: 'Viewpoint' },
          { name: 'Binsar Wildlife Sanctuary', desc: 'Dense forest with 200+ bird species and Himalayan views', type: 'Wildlife' },
          { name: 'Jageshwar Dham', desc: 'Cluster of 124 ancient stone temples from 7th-12th century', type: 'Temple' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // HIMACHAL PRADESH — The Land of Snow
  // ══════════════════════════════════════════════════════════
  {
    state: 'Himachal Pradesh',
    nickname: 'Land of Snow',
    icon: '❄️',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    description: 'Snow-capped mountains, ancient monasteries, lush valleys, and vibrant Tibetan culture in the western Himalayas.',
    cities: [
      {
        name: 'Shimla',
        type: 'State Capital',
        places: [
          { name: 'The Ridge', desc: 'Open space in the heart of Shimla with views of snow-capped mountains', type: 'Landmark' },
          { name: 'Mall Road', desc: 'The main promenade with colonial buildings, shops, and cafes', type: 'Shopping' },
          { name: 'Christ Church', desc: 'Second oldest church in North India with stunning stained glass', type: 'Heritage' },
          { name: 'Jakhoo Temple', desc: 'Hanuman temple at the highest point with 108-ft statue', type: 'Temple' },
          { name: 'Kufri', desc: 'Mini adventure hub with skiing, horse riding, and zoo', type: 'Adventure' },
          { name: 'Toy Train', desc: 'UNESCO heritage Kalka-Shimla railway through 102 tunnels', type: 'Heritage' },
          { name: 'Scandal Point', desc: 'Historic junction of Ridge and Mall Road', type: 'Landmark' },
          { name: 'Indian Institute of Advanced Study', desc: 'Stunning Viceregal Lodge with Jacobethan architecture', type: 'Heritage' },
          { name: 'Chadwick Falls', desc: '67m waterfall surrounded by thick deodar forest', type: 'Nature' },
          { name: 'Annandale', desc: 'Historic flat ground used for sports during British era', type: 'Heritage' },
        ]
      },
      {
        name: 'Manali',
        type: 'Adventure Hub',
        places: [
          { name: 'Rohtang Pass', desc: 'High mountain pass at 3,978m with stunning snow-clad views', type: 'Mountain' },
          { name: 'Solang Valley', desc: 'Adventure sports hub — paragliding, skiing, zorbing', type: 'Adventure' },
          { name: 'Hadimba Devi Temple', desc: '16th century pagoda temple set in dense cedar forest', type: 'Temple' },
          { name: 'Old Manali', desc: 'Bohemian village with cafes, orchards, and backpacker culture', type: 'Village' },
          { name: 'Jogini Waterfall', desc: 'Serene waterfall accessible through a scenic forest trek', type: 'Nature' },
          { name: 'Vashisht Hot Springs', desc: 'Natural hot sulphur springs with ancient temple', type: 'Nature' },
          { name: 'Manu Temple', desc: 'Ancient temple dedicated to sage Manu, creator of mankind', type: 'Temple' },
          { name: 'Atal Tunnel', desc: 'World\'s longest highway tunnel at 10,000ft connecting Manali to Lahaul', type: 'Landmark' },
          { name: 'Beas River', desc: 'Scenic river running through Manali — rafting and riverside cafes', type: 'Adventure' },
          { name: 'Gulaba', desc: 'Stunning meadow on the way to Rohtang with snow views', type: 'Nature' },
        ]
      },
      {
        name: 'Dharamshala-McLeodGanj',
        type: 'Tibetan Culture',
        places: [
          { name: 'Tsuglagkhang Complex', desc: 'Official residence of Dalai Lama with museum and temple', type: 'Monastery' },
          { name: 'Bhagsu Waterfall', desc: 'Popular cascading waterfall with attached Shiva temple', type: 'Nature' },
          { name: 'Triund Trek', desc: 'Moderate 9km trek to a ridge with panoramic Dhauladhar views', type: 'Trekking' },
          { name: 'Namgyal Monastery', desc: 'Largest Tibetan temple outside Tibet', type: 'Monastery' },
          { name: 'Dal Lake', desc: 'Small serene lake surrounded by deodar trees', type: 'Lake' },
          { name: 'St. John in the Wilderness', desc: 'Neo-Gothic church from 1852 set among cedar trees', type: 'Heritage' },
          { name: 'Dharamkot', desc: 'Israeli village with meditation centers and panoramic views', type: 'Village' },
          { name: 'TIPA (Tibetan Institute)', desc: 'Tibetan performing arts institute with regular shows', type: 'Culture' },
          { name: 'Kangra Fort', desc: 'One of the oldest and largest forts in India', type: 'Heritage' },
          { name: 'Tea Garden', desc: 'Lush Kangra tea estate with guided tours and tastings', type: 'Nature' },
        ]
      },
      {
        name: 'Kullu',
        type: 'Valley of Gods',
        places: [
          { name: 'Great Himalayan National Park', desc: 'UNESCO World Heritage Site — pristine alpine forest', type: 'Wildlife' },
          { name: 'Raghunath Temple', desc: 'Ancient temple dedicated to Lord Rama — cultural landmark', type: 'Temple' },
          { name: 'Manikaran Sahib', desc: 'Sacred hot springs and Gurudwara in Parvati Valley', type: 'Gurudwara' },
          { name: 'Kasol', desc: 'Mini Israel of India — backpacker paradise in Parvati Valley', type: 'Village' },
          { name: 'Kheerganga Trek', desc: 'Hot water springs at 3,050m after a scenic forest trek', type: 'Trekking' },
          { name: 'Tosh', desc: 'Quaint Himalayan village with stunning mountain views', type: 'Village' },
          { name: 'Malana', desc: 'Ancient village claiming descent from Alexander\'s army', type: 'Village' },
          { name: 'Bijli Mahadev Temple', desc: 'Temple at 2,460m struck by lightning — Shivling splits and rejoins', type: 'Temple' },
        ]
      },
      {
        name: 'Spiti Valley',
        type: 'Cold Desert',
        places: [
          { name: 'Key Monastery', desc: 'Largest monastery in Spiti — 1,000-year-old Tibetan Buddhist gompa', type: 'Monastery' },
          { name: 'Chandratal Lake', desc: 'Crescent-shaped lake at 4,300m with surreal blue waters', type: 'Lake' },
          { name: 'Kaza', desc: 'Administrative center and gateway to Spiti Valley', type: 'Town' },
          { name: 'Dhankar Monastery', desc: 'Dramatic monastery perched on a cliff at 3,890m', type: 'Monastery' },
          { name: 'Tabo Monastery', desc: '1,000-year-old monastery — Ajanta of the Himalayas', type: 'Monastery' },
          { name: 'Hikkim Post Office', desc: 'World\'s highest post office at 4,440m', type: 'Landmark' },
          { name: 'Kunzum Pass', desc: 'High pass at 4,590m connecting Spiti to Lahaul', type: 'Mountain' },
          { name: 'Pin Valley National Park', desc: 'Home to endangered snow leopard and Siberian ibex', type: 'Wildlife' },
        ]
      },
      {
        name: 'Dalhousie',
        type: 'Colonial Hill Station',
        places: [
          { name: 'Khajjiar', desc: 'Mini Switzerland of India — lush meadow with a small lake', type: 'Nature' },
          { name: 'Kalatop Wildlife Sanctuary', desc: 'Dense forest with trekking trails and wildlife', type: 'Wildlife' },
          { name: 'St. John\'s Church', desc: 'Beautiful stone church from 1863 in colonial style', type: 'Heritage' },
          { name: 'Dainkund Peak', desc: 'Highest point in Dalhousie with panoramic views', type: 'Viewpoint' },
          { name: 'Chamba', desc: 'Ancient town with 1,000-year-old Lakshmi Narayan temple complex', type: 'Heritage' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // JAMMU & KASHMIR — Paradise on Earth
  // ══════════════════════════════════════════════════════════
  {
    state: 'Jammu & Kashmir',
    nickname: 'Paradise on Earth',
    icon: '🌸',
    gradient: 'linear-gradient(135deg, #F43F5E, #FB923C)',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800&auto=format&fit=crop',
    description: 'The crown jewel of India — breathtaking valleys, pristine lakes, ancient temples, and the legendary Dal Lake houseboats.',
    cities: [
      {
        name: 'Srinagar',
        type: 'Summer Capital',
        places: [
          { name: 'Dal Lake', desc: 'Iconic lake with ornate houseboats and Shikara rides', type: 'Lake' },
          { name: 'Mughal Gardens', desc: 'Three terraced gardens — Shalimar Bagh, Nishat Bagh, Chashme Shahi', type: 'Garden' },
          { name: 'Shankaracharya Temple', desc: 'Ancient Shiva temple on a hill with panoramic city views', type: 'Temple' },
          { name: 'Hazratbal Shrine', desc: 'White marble shrine on Dal Lake shore — contains Prophet\'s relic', type: 'Shrine' },
          { name: 'Pari Mahal', desc: 'Seven-terraced garden with ruins — "Palace of Fairies"', type: 'Heritage' },
          { name: 'Jama Masjid', desc: 'Grand 14th-century mosque with 370 wooden pillars', type: 'Mosque' },
          { name: 'Floating Market', desc: 'Early morning vegetable market on Dal Lake boats', type: 'Market' },
          { name: 'Dachigam National Park', desc: 'Home to the endangered Hangul (Kashmir stag)', type: 'Wildlife' },
          { name: 'Char Chinar Island', desc: 'Island in Dal Lake with four iconic Chinar trees', type: 'Landmark' },
          { name: 'Nagin Lake', desc: 'Smaller pristine lake connected to Dal Lake — quieter and scenic', type: 'Lake' },
        ]
      },
      {
        name: 'Gulmarg',
        type: 'Skiing & Meadows',
        places: [
          { name: 'Gulmarg Gondola', desc: 'One of the highest cable cars in the world — 3,979m', type: 'Adventure' },
          { name: 'Kongdori', desc: 'Phase 1 gondola destination with ski slopes and pony rides', type: 'Adventure' },
          { name: 'Apharwat Peak', desc: 'Phase 2 gondola destination at 4,200m — powder snow paradise', type: 'Mountain' },
          { name: 'Gulmarg Golf Course', desc: 'Highest green golf course in the world', type: 'Sports' },
          { name: 'Strawberry Valley', desc: 'Lush meadow with wild strawberries in summer', type: 'Nature' },
          { name: 'Alpather Lake', desc: 'Frozen alpine lake at 4,390m near Apharwat Peak', type: 'Lake' },
          { name: 'Seven Springs (Botapathri)', desc: 'Beautiful meadow with seven natural springs', type: 'Nature' },
        ]
      },
      {
        name: 'Pahalgam',
        type: 'Valley of Shepherds',
        places: [
          { name: 'Betaab Valley', desc: 'Lush green valley named after the Bollywood movie — stunning scenery', type: 'Nature' },
          { name: 'Aru Valley', desc: 'Base camp for Kolahoi Glacier trek — pristine meadows', type: 'Nature' },
          { name: 'Chandanwari', desc: 'Starting point of Amarnath Yatra — scenic snow bridge', type: 'Pilgrimage' },
          { name: 'Lidder River', desc: 'Beautiful river running through Pahalgam — trout fishing', type: 'Nature' },
          { name: 'Baisaran (Mini Switzerland)', desc: 'Rolling meadows surrounded by dense pine forests', type: 'Nature' },
          { name: 'Mamaleshwar Temple', desc: 'Ancient temple with unique carved stone lingams', type: 'Temple' },
        ]
      },
      {
        name: 'Sonmarg',
        type: 'Meadow of Gold',
        places: [
          { name: 'Thajiwas Glacier', desc: 'Accessible glacier with stunning views — pony rides available', type: 'Nature' },
          { name: 'Zoji La Pass', desc: 'Strategic mountain pass at 3,528m connecting Kashmir to Ladakh', type: 'Mountain' },
          { name: 'Nilagrad River', desc: 'River with red-colored water from iron oxide deposits', type: 'Nature' },
          { name: 'Baltal', desc: 'Gateway to Amarnath Cave via shorter route', type: 'Pilgrimage' },
          { name: 'Vishansar Lake', desc: 'Beautiful alpine lake surrounded by mountains', type: 'Lake' },
        ]
      },
      {
        name: 'Jammu',
        type: 'City of Temples',
        places: [
          { name: 'Vaishno Devi Temple', desc: 'One of India\'s holiest shrines — 12km trek to the cave temple', type: 'Temple' },
          { name: 'Raghunath Temple', desc: 'Largest temple complex in North India with 7 shrines', type: 'Temple' },
          { name: 'Bahu Fort', desc: 'Ancient fort overlooking Tawi River with panoramic views', type: 'Heritage' },
          { name: 'Patnitop', desc: 'Hill station at 2,024m with skiing and paragliding', type: 'Hill Station' },
          { name: 'Amar Mahal Palace', desc: 'French-style palace museum with golden throne', type: 'Heritage' },
          { name: 'Mubarak Mandi Palace', desc: 'Royal palace complex blending Mughal and Baroque styles', type: 'Heritage' },
        ]
      },
      {
        name: 'Leh-Ladakh',
        type: 'Land of High Passes',
        places: [
          { name: 'Pangong Tso', desc: 'Mesmerizing colour-changing lake at 4,350m — 134km long', type: 'Lake' },
          { name: 'Nubra Valley', desc: 'Desert valley with Bactrian camels and Diskit Monastery', type: 'Nature' },
          { name: 'Magnetic Hill', desc: 'Optical illusion where vehicles appear to roll uphill', type: 'Landmark' },
          { name: 'Khardung La', desc: 'One of world\'s highest motorable passes at 5,359m', type: 'Mountain' },
          { name: 'Hemis Monastery', desc: 'Largest and wealthiest monastery in Ladakh', type: 'Monastery' },
          { name: 'Shanti Stupa', desc: 'White-domed Buddhist stupa with panoramic Leh views', type: 'Landmark' },
          { name: 'Tso Moriri Lake', desc: 'High-altitude lake at 4,522m — sacred and serene', type: 'Lake' },
          { name: 'Leh Palace', desc: 'Nine-story royal palace overlooking Leh town', type: 'Heritage' },
          { name: 'Zanskar Valley', desc: 'Remote valley with frozen river trek (Chadar Trek)', type: 'Adventure' },
          { name: 'Confluence of Indus & Zanskar', desc: 'Dramatic meeting of two rivers — turquoise and muddy waters', type: 'Nature' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // RAJASTHAN — Land of Kings
  // ══════════════════════════════════════════════════════════
  {
    state: 'Rajasthan',
    nickname: 'Land of Kings',
    icon: '🏰',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    description: 'Majestic forts, opulent palaces, vast golden deserts, vibrant culture, and legendary Rajput hospitality.',
    cities: [
      {
        name: 'Jaipur',
        type: 'Pink City',
        places: [
          { name: 'Hawa Mahal', desc: 'Iconic "Palace of Winds" with 953 honeycombed windows', type: 'Heritage' },
          { name: 'Amber Fort', desc: 'Stunning hilltop fort with Sheesh Mahal (mirror palace)', type: 'Fort' },
          { name: 'City Palace', desc: 'Royal palace complex blending Mughal and Rajput architecture', type: 'Heritage' },
          { name: 'Jantar Mantar', desc: 'UNESCO-listed astronomical observatory from 1734', type: 'Heritage' },
          { name: 'Nahargarh Fort', desc: 'Fort overlooking Jaipur with stunning sunset views', type: 'Fort' },
          { name: 'Jal Mahal', desc: 'Beautiful water palace floating in Man Sagar Lake', type: 'Heritage' },
          { name: 'Albert Hall Museum', desc: 'Indo-Saracenic architecture — Rajasthan\'s oldest museum', type: 'Museum' },
          { name: 'Birla Mandir', desc: 'White marble temple with stunning night illumination', type: 'Temple' },
          { name: 'Jaigarh Fort', desc: 'Fort housing world\'s largest cannon on wheels (Jaivana)', type: 'Fort' },
          { name: 'Johari Bazaar', desc: 'Famous jewelry and gemstone market in the old city', type: 'Market' },
        ]
      },
      {
        name: 'Udaipur',
        type: 'City of Lakes',
        places: [
          { name: 'City Palace', desc: 'Largest royal complex in Rajasthan overlooking Lake Pichola', type: 'Heritage' },
          { name: 'Lake Pichola', desc: 'Romantic artificial lake with island palaces — boat rides', type: 'Lake' },
          { name: 'Jag Mandir', desc: 'Island palace on Lake Pichola — Mughal emperor\'s refuge', type: 'Heritage' },
          { name: 'Saheliyon ki Bari', desc: 'Garden of maidens with lotus pools and marble elephants', type: 'Garden' },
          { name: 'Fateh Sagar Lake', desc: 'Scenic lake with islands — Nehru Garden on central island', type: 'Lake' },
          { name: 'Monsoon Palace (Sajjangarh)', desc: 'Hilltop palace with panoramic sunset views of the city', type: 'Heritage' },
          { name: 'Bagore Ki Haveli', desc: 'Haveli-turned-museum with traditional Rajasthani dance shows', type: 'Heritage' },
          { name: 'Jagdish Temple', desc: 'Indo-Aryan temple from 1651 with intricate carvings', type: 'Temple' },
          { name: 'Kumbhalgarh Fort', desc: 'Second largest wall after Great Wall of China — 36km perimeter', type: 'Fort' },
          { name: 'Ranakpur Jain Temple', desc: 'Stunning temple with 1,444 intricately carved marble pillars', type: 'Temple' },
        ]
      },
      {
        name: 'Jodhpur',
        type: 'Blue City',
        places: [
          { name: 'Mehrangarh Fort', desc: 'One of India\'s largest forts — perched 125m above the city', type: 'Fort' },
          { name: 'Jaswant Thada', desc: 'White marble cenotaph — the "Taj Mahal of Marwar"', type: 'Heritage' },
          { name: 'Umaid Bhawan Palace', desc: 'Art Deco palace — one of world\'s largest private residences', type: 'Heritage' },
          { name: 'Clock Tower & Sardar Market', desc: 'Bustling market hub around the iconic clock tower', type: 'Market' },
          { name: 'Blue City Walk', desc: 'Walk through the blue-painted old city alleys', type: 'Culture' },
          { name: 'Mandore Garden', desc: 'Ancient capital with cenotaphs and Hall of Heroes', type: 'Heritage' },
          { name: 'Rao Jodha Desert Rock Park', desc: 'Restored rocky wasteland turned into ecological park', type: 'Nature' },
          { name: 'Toorji Ka Jhalra', desc: 'Restored stepwell with stunning architecture', type: 'Heritage' },
        ]
      },
      {
        name: 'Jaisalmer',
        type: 'Golden City',
        places: [
          { name: 'Jaisalmer Fort (Sonar Kila)', desc: 'Living fort rising from the Thar Desert — UNESCO heritage', type: 'Fort' },
          { name: 'Sam Sand Dunes', desc: 'Camel safari, desert camping, and mesmerizing sunset in Thar', type: 'Desert' },
          { name: 'Patwon Ki Haveli', desc: 'Cluster of five ornately carved sandstone havelis', type: 'Heritage' },
          { name: 'Gadisar Lake', desc: 'Artificial lake ringed by temples and shrines', type: 'Lake' },
          { name: 'Kuldhara', desc: 'Abandoned ghost village with 200-year-old mystery', type: 'Heritage' },
          { name: 'Bada Bagh', desc: 'Royal cenotaphs with stunning desert backdrop', type: 'Heritage' },
          { name: 'Desert Cultural Centre', desc: 'Museum and puppet shows showcasing Rajasthani culture', type: 'Museum' },
          { name: 'Tanot Mata Temple', desc: 'Border temple revered by BSF — miracles during 1965 war', type: 'Temple' },
        ]
      },
      {
        name: 'Pushkar',
        type: 'Sacred Town',
        places: [
          { name: 'Brahma Temple', desc: 'One of the very few temples in the world dedicated to Lord Brahma', type: 'Temple' },
          { name: 'Pushkar Lake', desc: 'Sacred lake surrounded by 52 bathing ghats', type: 'Lake' },
          { name: 'Savitri Temple', desc: 'Hilltop temple with ropeway and panoramic town views', type: 'Temple' },
          { name: 'Pushkar Camel Fair', desc: 'World-famous annual camel festival (November)', type: 'Festival' },
          { name: 'Rangji Temple', desc: 'South Indian style temple in the heart of Pushkar', type: 'Temple' },
        ]
      },
      {
        name: 'Mount Abu',
        type: 'Hill Station',
        places: [
          { name: 'Dilwara Temples', desc: 'Finest Jain temples in India — mind-blowing marble carvings', type: 'Temple' },
          { name: 'Nakki Lake', desc: 'Scenic lake surrounded by hills — boating available', type: 'Lake' },
          { name: 'Guru Shikhar', desc: 'Highest point in Rajasthan at 1,722m', type: 'Viewpoint' },
          { name: 'Sunset Point', desc: 'Popular vantage point for spectacular Aravalli sunsets', type: 'Viewpoint' },
          { name: 'Achalgarh Fort', desc: 'Ancient fort with Achaleshwar Mahadev Temple', type: 'Fort' },
        ]
      },
      {
        name: 'Ranthambore',
        type: 'Tiger Reserve',
        places: [
          { name: 'Ranthambore National Park', desc: 'Premier tiger reserve with 80+ tigers — jeep and canter safaris', type: 'Wildlife' },
          { name: 'Ranthambore Fort', desc: 'UNESCO-listed 10th century fort inside the national park', type: 'Fort' },
          { name: 'Padam Talao', desc: 'Largest lake in the park — famous tiger photography spot', type: 'Lake' },
          { name: 'Ganesh Mandir', desc: 'Temple inside the fort — wedding invites sent to Lord Ganesh', type: 'Temple' },
          { name: 'Trinetra Ganesh Temple', desc: 'Three-eyed Ganesh temple inside Ranthambore Fort', type: 'Temple' },
        ]
      },
      {
        name: 'Bikaner',
        type: 'Camel City',
        places: [
          { name: 'Junagarh Fort', desc: 'Unassailable fort — never conquered despite 30+ attacks', type: 'Fort' },
          { name: 'Karni Mata Temple (Rat Temple)', desc: 'Unique temple with thousands of sacred rats', type: 'Temple' },
          { name: 'Lalgarh Palace', desc: 'Red sandstone palace — now a heritage hotel', type: 'Heritage' },
          { name: 'National Camel Research Centre', desc: 'Only camel breeding farm in Asia — camel milk products', type: 'Unique' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // UTTAR PRADESH — Heritage of India
  // ══════════════════════════════════════════════════════════
  {
    state: 'Uttar Pradesh',
    nickname: 'Heritage of India',
    icon: '🕌',
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    description: 'The heartland of Indian civilization — home to the Taj Mahal, sacred Ganga, and the holiest cities of Hinduism and Buddhism.',
    cities: [
      {
        name: 'Agra',
        type: 'Mughal Heritage',
        places: [
          { name: 'Taj Mahal', desc: 'UNESCO World Heritage — the world\'s greatest monument of love', type: 'Heritage' },
          { name: 'Agra Fort', desc: 'Massive red sandstone fort — once the Mughal capital', type: 'Fort' },
          { name: 'Fatehpur Sikri', desc: 'UNESCO-listed abandoned Mughal city — architectural masterpiece', type: 'Heritage' },
          { name: 'Itimad-ud-Daulah', desc: '"Baby Taj" — first Mughal tomb made entirely of marble', type: 'Heritage' },
          { name: 'Mehtab Bagh', desc: 'Moonlight Garden — best sunset views of Taj Mahal', type: 'Garden' },
          { name: 'Akbar\'s Tomb (Sikandra)', desc: 'Grand tomb of Emperor Akbar with Persian gardens', type: 'Heritage' },
          { name: 'Kinari Bazaar', desc: 'Vibrant market famous for marble, leather, and sweets', type: 'Market' },
        ]
      },
      {
        name: 'Varanasi (Banaras)',
        type: 'Spiritual Capital',
        places: [
          { name: 'Dashashwamedh Ghat', desc: 'Most famous ghat — spectacular Ganga Aarti every evening', type: 'Ghat' },
          { name: 'Kashi Vishwanath Temple', desc: 'One of 12 Jyotirlingas — holiest Shiva temple in India', type: 'Temple' },
          { name: 'Assi Ghat', desc: 'Southern-most ghat — popular for morning yoga and meditation', type: 'Ghat' },
          { name: 'Manikarnika Ghat', desc: 'Sacred cremation ghat — believed to grant moksha (liberation)', type: 'Ghat' },
          { name: 'Sarnath', desc: 'Where Buddha gave his first sermon — ancient Buddhist site', type: 'Heritage' },
          { name: 'BHU (Banaras Hindu University)', desc: 'Largest residential university in Asia with New Vishwanath Temple', type: 'Heritage' },
          { name: 'Ramnagar Fort', desc: '18th century Mughal-style fort with a museum across the Ganges', type: 'Fort' },
          { name: 'Boat Ride on Ganges', desc: 'Dawn boat ride past 84 ghats — a soul-stirring experience', type: 'Culture' },
          { name: 'Tulsi Manas Temple', desc: 'Modern marble temple with scenes from Ramcharitmanas', type: 'Temple' },
          { name: 'Durga Temple', desc: 'Red-colored temple dedicated to Goddess Durga — "Monkey Temple"', type: 'Temple' },
        ]
      },
      {
        name: 'Lucknow',
        type: 'City of Nawabs',
        places: [
          { name: 'Bara Imambara', desc: 'Grand complex with world\'s largest arched hall without beams', type: 'Heritage' },
          { name: 'Bhool Bhulaiya', desc: 'Famous labyrinth on the upper floor of Bara Imambara', type: 'Heritage' },
          { name: 'Chota Imambara', desc: 'Ornate palace known as "Palace of Lights" with gold work', type: 'Heritage' },
          { name: 'Rumi Darwaza', desc: 'Imposing 60-foot gateway — gateway of Lucknow', type: 'Landmark' },
          { name: 'British Residency', desc: 'Ruins of British headquarters from 1857 mutiny siege', type: 'Heritage' },
          { name: 'Hazratganj', desc: 'Premier shopping boulevard of Lucknow — the "Connaught Place" of UP', type: 'Shopping' },
          { name: 'Aminabad', desc: 'Famous old market for Lucknowi Chikan embroidery', type: 'Market' },
          { name: 'Ambedkar Memorial Park', desc: 'Grand sandstone park and memorial spread over 107 acres', type: 'Landmark' },
        ]
      },
      {
        name: 'Mathura-Vrindavan',
        type: 'Birthplace of Krishna',
        places: [
          { name: 'Krishna Janmabhoomi', desc: 'Birthplace of Lord Krishna — ancient temple complex', type: 'Temple' },
          { name: 'Banke Bihari Temple', desc: 'Most famous temple in Vrindavan — divine darshan experience', type: 'Temple' },
          { name: 'Prem Mandir', desc: 'Stunning white marble temple illuminated beautifully at night', type: 'Temple' },
          { name: 'ISKCON Vrindavan', desc: 'Beautiful temple with Krishna-Balarama deities', type: 'Temple' },
          { name: 'Vishram Ghat', desc: 'Sacred ghat where Krishna rested after killing Kansa', type: 'Ghat' },
          { name: 'Govardhan Hill', desc: 'Sacred hill that Krishna lifted — parikrama pilgrimage', type: 'Pilgrimage' },
          { name: 'Kusum Sarovar', desc: 'Beautiful historical tank with sandstone pavilions', type: 'Heritage' },
        ]
      },
      {
        name: 'Prayagraj (Allahabad)',
        type: 'Sangam City',
        places: [
          { name: 'Triveni Sangam', desc: 'Sacred confluence of Ganga, Yamuna, and mythical Saraswati', type: 'Pilgrimage' },
          { name: 'Kumbh Mela', desc: 'World\'s largest religious gathering (every 12 years)', type: 'Festival' },
          { name: 'Allahabad Fort', desc: 'Mughal fort at the confluence — built by Akbar in 1583', type: 'Fort' },
          { name: 'Anand Bhavan', desc: 'Nehru family\'s ancestral home — now a museum', type: 'Heritage' },
          { name: 'Khusro Bagh', desc: 'Mughal garden with three sandstone mausoleums', type: 'Heritage' },
        ]
      },
      {
        name: 'Ayodhya',
        type: 'Holy City',
        places: [
          { name: 'Ram Mandir', desc: 'Grand temple at the birthplace of Lord Rama — newly built', type: 'Temple' },
          { name: 'Hanuman Garhi', desc: '10th-century temple fort of Lord Hanuman', type: 'Temple' },
          { name: 'Kanak Bhawan', desc: 'Temple gifted to Sita by step-mother Kaikeyi', type: 'Temple' },
          { name: 'Saryu River Ghats', desc: 'Sacred river ghats with evening aarti ceremony', type: 'Ghat' },
          { name: 'Dashrath Mahal', desc: 'Palace-temple believed to be King Dashrath\'s court', type: 'Heritage' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MADHYA PRADESH — Heart of India
  // ══════════════════════════════════════════════════════════
  {
    state: 'Madhya Pradesh',
    nickname: 'Heart of India',
    icon: '🐅',
    gradient: 'linear-gradient(135deg, #059669, #10B981)',
    image: 'https://images.unsplash.com/photo-1590071089561-39dfdd04ed29?q=80&w=800&auto=format&fit=crop',
    description: 'The geographic and cultural heart of India — ancient temples, tiger reserves, Buddhist stupas, and tribal heritage.',
    cities: [
      {
        name: 'Khajuraho',
        type: 'Temple City',
        places: [
          { name: 'Western Group of Temples', desc: 'UNESCO-listed temples with world-famous erotic sculptures', type: 'Heritage' },
          { name: 'Kandariya Mahadeo Temple', desc: 'Largest and most ornate temple in Khajuraho', type: 'Temple' },
          { name: 'Lakshmana Temple', desc: 'Best-preserved temple from the Chandela dynasty', type: 'Temple' },
          { name: 'Light & Sound Show', desc: 'Evening show narrating the history of Chandela dynasty', type: 'Culture' },
          { name: 'Eastern Group (Jain Temples)', desc: 'Ornate Jain temples with detailed sculptures', type: 'Temple' },
          { name: 'Panna National Park', desc: 'Tiger reserve near Khajuraho with Ken River gorge', type: 'Wildlife' },
          { name: 'Raneh Falls', desc: 'Granite canyon waterfall with stunning rock formations', type: 'Nature' },
        ]
      },
      {
        name: 'Bhopal',
        type: 'City of Lakes',
        places: [
          { name: 'Upper Lake (Bada Talab)', desc: 'One of Asia\'s largest artificial lakes — built in 11th century', type: 'Lake' },
          { name: 'Sanchi Stupa', desc: 'UNESCO-listed Great Stupa — oldest stone structure in India', type: 'Heritage' },
          { name: 'Bhimbetka Rock Shelters', desc: 'UNESCO site with 30,000-year-old cave paintings', type: 'Heritage' },
          { name: 'Taj-ul-Masjid', desc: 'One of the largest mosques in Asia', type: 'Mosque' },
          { name: 'Van Vihar National Park', desc: 'Zoo-cum-national park on the lakeside', type: 'Wildlife' },
          { name: 'Tribal Museum', desc: 'Fascinating museum of tribal art and culture', type: 'Museum' },
          { name: 'Gohar Mahal', desc: 'Palace of Begum Gohar — lakeside Mughal architecture', type: 'Heritage' },
        ]
      },
      {
        name: 'Gwalior',
        type: 'Fort City',
        places: [
          { name: 'Gwalior Fort', desc: 'Magnificent hilltop fort — "Pearl amongst Indian fortresses"', type: 'Fort' },
          { name: 'Man Singh Palace', desc: 'Colorful tiled palace inside the fort — blue and yellow tiles', type: 'Heritage' },
          { name: 'Jai Vilas Palace', desc: 'Opulent palace with world\'s heaviest chandeliers (3.5 tons each)', type: 'Heritage' },
          { name: 'Tansen Memorial', desc: 'Tomb of legendary musician Tansen — annual music festival', type: 'Heritage' },
          { name: 'Sas Bahu Temple', desc: 'Twin ornate temples from the 11th century', type: 'Temple' },
          { name: 'Teli Ka Mandir', desc: 'Tallest monument in the fort at 25m — unique architecture', type: 'Temple' },
        ]
      },
      {
        name: 'Orchha',
        type: 'Medieval Town',
        places: [
          { name: 'Orchha Fort Complex', desc: 'Riverside fort with palaces — frozen in medieval time', type: 'Fort' },
          { name: 'Jahangir Mahal', desc: 'Grand palace built to welcome Emperor Jahangir', type: 'Heritage' },
          { name: 'Raja Mahal', desc: 'Palace with stunning murals depicting religious themes', type: 'Heritage' },
          { name: 'Ram Raja Temple', desc: 'Only temple where Lord Rama is worshipped as a king', type: 'Temple' },
          { name: 'Chaturbhuj Temple', desc: 'Tower temple with stunning geometric design', type: 'Temple' },
          { name: 'Cenotaphs (Chhatris)', desc: '14 royal cenotaphs along the Betwa river', type: 'Heritage' },
        ]
      },
      {
        name: 'Ujjain',
        type: 'Sacred City',
        places: [
          { name: 'Mahakaleshwar Temple', desc: 'One of 12 Jyotirlingas — famous Bhasma Aarti at dawn', type: 'Temple' },
          { name: 'Ram Ghat', desc: 'Sacred ghat on Shipra River — Simhastha Kumbh Mela site', type: 'Ghat' },
          { name: 'Vedh Shala (Observatory)', desc: 'Astronomical observatory built by Maharaja Jai Singh II', type: 'Heritage' },
          { name: 'Kal Bhairav Temple', desc: 'Unique temple where liquor is offered to the deity', type: 'Temple' },
          { name: 'Harsiddhi Temple', desc: 'One of 51 Shakti Peethas with magnificent pillars', type: 'Temple' },
        ]
      },
      {
        name: 'Bandhavgarh',
        type: 'Tiger Country',
        places: [
          { name: 'Bandhavgarh National Park', desc: 'Highest density of Royal Bengal Tigers in India', type: 'Wildlife' },
          { name: 'Bandhavgarh Fort', desc: 'Ancient fort atop a hill inside the national park', type: 'Fort' },
          { name: 'Shesh Shaiya', desc: 'Ancient sleeping Vishnu statue carved from a single rock', type: 'Heritage' },
          { name: 'Tala Zone', desc: 'Best zone for tiger sightings — home to famous tigresses', type: 'Wildlife' },
        ]
      },
      {
        name: 'Kanha',
        type: 'Jungle Book Country',
        places: [
          { name: 'Kanha National Park', desc: 'Inspiration for Rudyard Kipling\'s "The Jungle Book"', type: 'Wildlife' },
          { name: 'Bamni Dadar (Sunset Point)', desc: 'Best sunset viewpoint in any Indian national park', type: 'Viewpoint' },
          { name: 'Kanha Museum', desc: 'Museum with information about flora, fauna, and tribal culture', type: 'Museum' },
          { name: 'Barasingha (Hard Ground Swamp Deer)', desc: 'Kanha is the only habitat of this endangered species', type: 'Wildlife' },
        ]
      },
      {
        name: 'Pachmarhi',
        type: 'Queen of Satpura',
        places: [
          { name: 'Bee Falls', desc: '35m waterfall — most popular tourist spot in Pachmarhi', type: 'Nature' },
          { name: 'Pandav Caves', desc: 'Five ancient Buddhist caves from the 1st century BCE', type: 'Heritage' },
          { name: 'Jata Shankar Cave', desc: 'Sacred cave with natural Shivling formation', type: 'Temple' },
          { name: 'Dhoopgarh', desc: 'Highest point of Satpura Range — stunning sunrise point', type: 'Viewpoint' },
          { name: 'Satpura National Park', desc: 'Pristine national park with walking safaris and boat cruises', type: 'Wildlife' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // HARYANA — Land of Legends
  // ══════════════════════════════════════════════════════════
  {
    state: 'Haryana',
    nickname: 'Land of Legends',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'The land of the Mahabharata — Kurukshetra\'s battlefields, Surajkund\'s heritage fairs, and the gateway to North India.',
    cities: [
      {
        name: 'Kurukshetra',
        type: 'Land of Gita',
        places: [
          { name: 'Brahma Sarovar', desc: 'Sacred tank — believed created by Lord Brahma during a cosmic yajna', type: 'Pilgrimage' },
          { name: 'Jyotisar', desc: 'Exact spot where Lord Krishna delivered the Bhagavad Gita', type: 'Heritage' },
          { name: 'Krishna Museum', desc: 'Museum depicting Lord Krishna\'s life through art and exhibits', type: 'Museum' },
          { name: 'Sannihit Sarovar', desc: 'Holy tank where all sacred rivers are believed to converge', type: 'Pilgrimage' },
          { name: 'Bhadrakali Temple', desc: 'One of the 51 Shakti Peethas — ancient and revered', type: 'Temple' },
          { name: 'Panorama & Science Centre', desc: 'Cylindrical panoramic painting of the Mahabharata war', type: 'Museum' },
          { name: 'Sheikh Chilli\'s Tomb', desc: 'Mughal-era tomb with beautiful gardens and tile work', type: 'Heritage' },
          { name: 'Sthaneshwar Mahadev Temple', desc: 'Ancient Shiva temple where Pandavas prayed before the war', type: 'Temple' },
        ]
      },
      {
        name: 'Faridabad',
        type: 'Industrial Hub',
        places: [
          { name: 'Surajkund', desc: 'Ancient sun-shaped reservoir with annual international crafts fair', type: 'Heritage' },
          { name: 'Badkhal Lake', desc: 'Scenic lake (now rejuvenated) surrounded by Aravalli hills', type: 'Lake' },
          { name: 'Raja Nahar Singh Palace', desc: 'Historical palace of the last king of Ballabhgarh', type: 'Heritage' },
          { name: 'Town Park', desc: 'Major recreational park with gardens and lakes', type: 'Nature' },
          { name: 'Dhauj Lake', desc: 'Rock climbing and rappelling spot near Aravalli hills', type: 'Adventure' },
        ]
      },
      {
        name: 'Gurgaon (Gurugram)',
        type: 'Millennium City',
        places: [
          { name: 'Kingdom of Dreams', desc: 'India\'s first live entertainment destination with culture gully', type: 'Entertainment' },
          { name: 'Cyber Hub', desc: 'Premium dining and nightlife destination in DLF Cyber City', type: 'Entertainment' },
          { name: 'Sultanpur National Park', desc: 'Bird sanctuary with 250+ species — migratory bird paradise', type: 'Wildlife' },
          { name: 'Sheetla Mata Mandir', desc: 'Ancient temple in old Gurgaon village', type: 'Temple' },
          { name: 'Damdama Lake', desc: 'Largest natural lake in Haryana — adventure sports and camping', type: 'Lake' },
          { name: 'Aravalli Biodiversity Park', desc: 'Restored green patch with Aravalli flora and walking trails', type: 'Nature' },
        ]
      },
      {
        name: 'Panipat',
        type: 'City of Weavers',
        places: [
          { name: 'Panipat Museum', desc: 'Museum commemorating the three historic battles of Panipat', type: 'Museum' },
          { name: 'Kabuli Shah Mosque', desc: 'Mosque built by Babur after the First Battle of Panipat', type: 'Heritage' },
          { name: 'Devi Temple', desc: 'Ancient temple associated with the Mahabharata era', type: 'Temple' },
          { name: 'Hemu\'s Samadhi Sthal', desc: 'Memorial of Hemu, the last Hindu emperor of Delhi', type: 'Heritage' },
          { name: 'Ibrahim Lodhi\'s Tomb', desc: 'Tomb of the last Lodhi dynasty sultan', type: 'Heritage' },
        ]
      },
      {
        name: 'Pinjore',
        type: 'Mughal Garden Town',
        places: [
          { name: 'Pinjore Gardens (Yadavindra Gardens)', desc: 'Stunning 17th-century Mughal terraced garden', type: 'Garden' },
          { name: 'Bhima Devi Temple Site', desc: 'Archaeological site with ruins of ancient temples', type: 'Heritage' },
          { name: 'Morni Hills', desc: 'Only hill station in Haryana — trekking and boating', type: 'Nature' },
          { name: 'Tikkar Taal', desc: 'Two lakes in Morni Hills surrounded by hills and forests', type: 'Lake' },
        ]
      },
      {
        name: 'Hisar',
        type: 'Steel City',
        places: [
          { name: 'Agroha Dham', desc: 'Ancient mound and temple related to King Agrasen\'s capital', type: 'Heritage' },
          { name: 'Blue Bird Lake', desc: 'Artificial lake and recreational area in the city', type: 'Lake' },
          { name: 'Firoz Shah Palace', desc: 'Ruins of Firoz Shah Tughlaq\'s palace complex', type: 'Heritage' },
          { name: 'Prithviraj ka Qila', desc: 'Ruins of 12th-century fort attributed to Prithviraj Chauhan', type: 'Fort' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // GOA — Pearl of the Orient
  // ══════════════════════════════════════════════════════════
  {
    state: 'Goa',
    nickname: 'Pearl of the Orient',
    icon: '🏖️',
    gradient: 'linear-gradient(135deg, #F97316, #FBBF24)',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    description: 'India\'s smallest state with the biggest party scene — golden beaches, Portuguese heritage, spice plantations, and vibrant nightlife.',
    cities: [
      {
        name: 'North Goa',
        type: 'Beach & Party',
        places: [
          { name: 'Baga Beach', desc: 'Vibrant beach famous for water sports, shacks, and nightlife', type: 'Beach' },
          { name: 'Calangute Beach', desc: 'Queen of Beaches — Goa\'s most popular and crowded beach', type: 'Beach' },
          { name: 'Anjuna Beach', desc: 'Bohemian beach known for flea markets and trance parties', type: 'Beach' },
          { name: 'Vagator Beach', desc: 'Dramatic red cliffs with the iconic Chapora Fort above', type: 'Beach' },
          { name: 'Fort Aguada', desc: '17th-century Portuguese fort with lighthouse overlooking the sea', type: 'Fort' },
          { name: 'Chapora Fort', desc: 'Famous "Dil Chahta Hai" fort with panoramic coastal views', type: 'Fort' },
          { name: 'Arambol Beach', desc: 'Hippie paradise with drum circles, sweet water lake, and cliffs', type: 'Beach' },
          { name: 'Basilica of Bom Jesus', desc: 'UNESCO World Heritage — houses remains of St. Francis Xavier', type: 'Heritage' },
          { name: 'Se Cathedral', desc: 'Largest church in Asia — stunning Portuguese-Gothic architecture', type: 'Heritage' },
          { name: 'Reis Magos Fort', desc: 'Restored Portuguese fort with river views and art gallery', type: 'Fort' },
        ]
      },
      {
        name: 'South Goa',
        type: 'Serene & Luxury',
        places: [
          { name: 'Palolem Beach', desc: 'Crescent-shaped beach with calm waters — silent noise parties', type: 'Beach' },
          { name: 'Colva Beach', desc: 'White sand beach stretching 2.4km — one of the longest in Goa', type: 'Beach' },
          { name: 'Dudhsagar Falls', desc: 'Spectacular 310m four-tiered waterfall on the Mandovi River', type: 'Nature' },
          { name: 'Cabo de Rama Fort', desc: 'Ancient fort named after Lord Rama with cliff views', type: 'Fort' },
          { name: 'Butterfly Beach', desc: 'Secluded beach accessible only by boat — pristine and quiet', type: 'Beach' },
          { name: 'Agonda Beach', desc: 'Peaceful beach popular for yoga retreats and dolphin sightings', type: 'Beach' },
          { name: 'Shri Mangeshi Temple', desc: 'Oldest and most famous Hindu temple in Goa', type: 'Temple' },
        ]
      },
      {
        name: 'Old Goa (Velha Goa)',
        type: 'Portuguese Heritage',
        places: [
          { name: 'Church of St. Francis of Assisi', desc: 'Beautiful church with archaeological museum inside', type: 'Heritage' },
          { name: 'Fontainhas', desc: 'Latin Quarter — colorful Portuguese colonial houses and cafes', type: 'Heritage' },
          { name: 'Sahakari Spice Farm', desc: 'Guided tours through organic spice plantations with lunch', type: 'Nature' },
          { name: 'Museum of Christian Art', desc: 'Rare Indo-Portuguese Christian art collection', type: 'Museum' },
          { name: 'Divar Island', desc: 'Peaceful island with Portuguese-era churches and village life', type: 'Village' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // KERALA — God's Own Country
  // ══════════════════════════════════════════════════════════
  {
    state: 'Kerala',
    nickname: 'God\'s Own Country',
    icon: '🌴',
    gradient: 'linear-gradient(135deg, #059669, #34D399)',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    description: 'Serene backwaters, Ayurvedic wellness, lush tea gardens, pristine beaches, and one of the highest literacy rates in India.',
    cities: [
      {
        name: 'Alleppey (Alappuzha)',
        type: 'Backwater Capital',
        places: [
          { name: 'Alleppey Backwaters', desc: 'Houseboat cruise through palm-fringed canals and lagoons', type: 'Nature' },
          { name: 'Alappuzha Beach', desc: 'Historic beach with pier and lighthouse', type: 'Beach' },
          { name: 'Nehru Trophy Snake Boat Race', desc: 'World-famous boat race on Punnamada Lake (August)', type: 'Festival' },
          { name: 'Kumarakom Bird Sanctuary', desc: 'Vembanad Lake bird sanctuary with migratory species', type: 'Wildlife' },
          { name: 'Pathiramanal Island', desc: 'Island of midnight sands — 60+ species of migratory birds', type: 'Nature' },
        ]
      },
      {
        name: 'Munnar',
        type: 'Tea Garden Hill Station',
        places: [
          { name: 'Tea Gardens', desc: 'Endless rolling carpets of tea plantations — iconic views', type: 'Nature' },
          { name: 'Eravikulam National Park', desc: 'Home to endangered Nilgiri Tahr — high altitude grasslands', type: 'Wildlife' },
          { name: 'Mattupetty Dam', desc: 'Scenic dam with boating, surrounded by tea estates', type: 'Nature' },
          { name: 'Top Station', desc: 'Highest point in Munnar with views of Tamil Nadu plains', type: 'Viewpoint' },
          { name: 'Anamudi Peak', desc: 'Highest peak in South India at 2,695m', type: 'Mountain' },
          { name: 'Tata Tea Museum', desc: 'Museum showcasing the history of tea production', type: 'Museum' },
          { name: 'Attukal Waterfalls', desc: 'Cascading waterfall surrounded by lush forest', type: 'Nature' },
        ]
      },
      {
        name: 'Kochi (Cochin)',
        type: 'Queen of Arabian Sea',
        places: [
          { name: 'Fort Kochi', desc: 'Historic area with Chinese fishing nets, churches, and art galleries', type: 'Heritage' },
          { name: 'Chinese Fishing Nets', desc: 'Iconic cantilevered fishing nets introduced by Chinese traders', type: 'Landmark' },
          { name: 'Mattancherry Palace', desc: '16th-century Portuguese palace with stunning Kerala murals', type: 'Heritage' },
          { name: 'Jewish Synagogue', desc: 'Oldest active synagogue in the Commonwealth — built 1568', type: 'Heritage' },
          { name: 'St. Francis Church', desc: 'Oldest European church in India — Vasco da Gama buried here', type: 'Heritage' },
          { name: 'Marine Drive', desc: 'Beautiful promenade along the backwaters with sunset views', type: 'Landmark' },
          { name: 'Kerala Kathakali Centre', desc: 'Watch traditional Kathakali dance-drama performances', type: 'Culture' },
        ]
      },
      {
        name: 'Thekkady (Periyar)',
        type: 'Wildlife Sanctuary',
        places: [
          { name: 'Periyar National Park', desc: 'Tiger reserve with boat safari on Periyar Lake', type: 'Wildlife' },
          { name: 'Spice Plantations', desc: 'Guided tours through cardamom, pepper, and cinnamon gardens', type: 'Nature' },
          { name: 'Bamboo Rafting', desc: 'Adventurous bamboo raft ride through the wildlife sanctuary', type: 'Adventure' },
          { name: 'Chellarkovil', desc: 'Viewpoint at Tamil Nadu border with 14-tier waterfall', type: 'Viewpoint' },
          { name: 'Mudra Cultural Centre', desc: 'Traditional Kalaripayattu martial arts performances', type: 'Culture' },
        ]
      },
      {
        name: 'Wayanad',
        type: 'Green Paradise',
        places: [
          { name: 'Edakkal Caves', desc: 'Prehistoric rock carvings dating back to 6,000 BCE', type: 'Heritage' },
          { name: 'Chembra Peak', desc: 'Highest peak in Wayanad with famous heart-shaped lake', type: 'Trekking' },
          { name: 'Banasura Sagar Dam', desc: 'Largest earth dam in India — scenic boating and trekking', type: 'Nature' },
          { name: 'Wayanad Wildlife Sanctuary', desc: 'Part of Nilgiri Biosphere Reserve — elephants and tigers', type: 'Wildlife' },
          { name: 'Soochipara Falls', desc: 'Three-tiered waterfall with a natural pool for swimming', type: 'Nature' },
        ]
      },
      {
        name: 'Kovalam & Trivandrum',
        type: 'Beach & Capital',
        places: [
          { name: 'Kovalam Beach', desc: 'Crescent-shaped beach with lighthouse and Ayurvedic resorts', type: 'Beach' },
          { name: 'Padmanabhaswamy Temple', desc: 'Richest temple in the world — stunning Dravidian architecture', type: 'Temple' },
          { name: 'Napier Museum', desc: 'Indo-Saracenic museum with art and natural history collections', type: 'Museum' },
          { name: 'Varkala Beach', desc: 'Cliff beach with natural springs — spiritual and scenic', type: 'Beach' },
          { name: 'Poovar Island', desc: 'Golden sand beach where backwaters meet the Arabian Sea', type: 'Beach' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // KARNATAKA — One State, Many Worlds
  // ══════════════════════════════════════════════════════════
  {
    state: 'Karnataka',
    nickname: 'One State, Many Worlds',
    icon: '🏯',
    gradient: 'linear-gradient(135deg, #DC2626, #F97316)',
    image: 'https://images.unsplash.com/photo-1600100397608-82137e65481f?q=80&w=800&auto=format&fit=crop',
    description: 'From the Silicon Valley of India to ancient Hampi ruins, coffee plantations to coastal temples — Karnataka has it all.',
    cities: [
      {
        name: 'Mysore (Mysuru)',
        type: 'City of Palaces',
        places: [
          { name: 'Mysore Palace', desc: 'Opulent palace illuminated with 97,000 bulbs — a visual spectacle', type: 'Heritage' },
          { name: 'Chamundi Hills', desc: 'Hill temple with Nandi Bull statue and panoramic city views', type: 'Temple' },
          { name: 'Brindavan Gardens', desc: 'Terraced gardens with musical fountain and illuminated evenings', type: 'Garden' },
          { name: 'St. Philomena\'s Church', desc: 'Neo-Gothic church — one of the tallest in Asia', type: 'Heritage' },
          { name: 'Devaraja Market', desc: '130-year-old heritage market with flowers, spices, and silk', type: 'Market' },
          { name: 'Mysore Zoo', desc: 'One of India\'s oldest and best-maintained zoos', type: 'Wildlife' },
        ]
      },
      {
        name: 'Hampi',
        type: 'UNESCO Ruins',
        places: [
          { name: 'Virupaksha Temple', desc: 'Living temple from the 7th century — oldest in Hampi', type: 'Temple' },
          { name: 'Vittala Temple Complex', desc: 'Famous stone chariot and musical pillars — Hampi icon', type: 'Heritage' },
          { name: 'Lotus Mahal', desc: 'Indo-Islamic pavilion in the Zenana Enclosure — lotus-shaped', type: 'Heritage' },
          { name: 'Elephant Stables', desc: 'Grand structure that once housed royal elephants', type: 'Heritage' },
          { name: 'Matanga Hill', desc: 'Best sunrise point in Hampi — 360° view of boulder landscape', type: 'Viewpoint' },
          { name: 'Tungabhadra River', desc: 'Coracle ride through boulder-strewn riverscape', type: 'Adventure' },
          { name: 'Queen\'s Bath', desc: 'Royal bathing complex with arched corridors and balconies', type: 'Heritage' },
        ]
      },
      {
        name: 'Coorg (Kodagu)',
        type: 'Scotland of India',
        places: [
          { name: 'Abbey Falls', desc: 'Stunning waterfall surrounded by coffee and spice plantations', type: 'Nature' },
          { name: 'Raja\'s Seat', desc: 'Sunset viewpoint where Kodagu kings watched sunsets', type: 'Viewpoint' },
          { name: 'Dubare Elephant Camp', desc: 'Elephant bathing and interaction experience on Kaveri river', type: 'Wildlife' },
          { name: 'Talakaveri', desc: 'Origin of River Kaveri — sacred spring at Brahmagiri Hill', type: 'Pilgrimage' },
          { name: 'Namdroling Monastery', desc: 'Golden Temple — largest Nyingmapa Buddhist monastery', type: 'Monastery' },
          { name: 'Coffee Plantations', desc: 'Walk through aromatic Arabica and Robusta coffee estates', type: 'Nature' },
        ]
      },
      {
        name: 'Bangalore (Bengaluru)',
        type: 'Garden City',
        places: [
          { name: 'Lalbagh Botanical Garden', desc: '240-acre garden with 1,000+ species and glass house', type: 'Garden' },
          { name: 'Bangalore Palace', desc: 'Tudor-style palace inspired by Windsor Castle', type: 'Heritage' },
          { name: 'Cubbon Park', desc: 'Green lung of the city with museums and statues', type: 'Nature' },
          { name: 'Nandi Hills', desc: 'Scenic hilltop 60km from Bangalore — stunning sunrise', type: 'Viewpoint' },
          { name: 'ISKCON Temple', desc: 'Beautiful modern temple with cultural experiences', type: 'Temple' },
          { name: 'Tipu Sultan\'s Summer Palace', desc: 'Indo-Islamic palace from 1791 — teak wood marvel', type: 'Heritage' },
        ]
      },
      {
        name: 'Gokarna',
        type: 'Beach Temple Town',
        places: [
          { name: 'Om Beach', desc: 'Beach shaped like the Om symbol — stunning and serene', type: 'Beach' },
          { name: 'Kudle Beach', desc: 'Crescent-shaped beach perfect for sunset watching', type: 'Beach' },
          { name: 'Half Moon Beach', desc: 'Secluded beach accessible by trek through rocky terrain', type: 'Beach' },
          { name: 'Mahabaleshwar Temple', desc: 'Ancient temple with Atmalinga of Lord Shiva', type: 'Temple' },
          { name: 'Mirjan Fort', desc: 'Laterite stone fort surrounded by lush greenery', type: 'Fort' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TAMIL NADU — Land of Temples
  // ══════════════════════════════════════════════════════════
  {
    state: 'Tamil Nadu',
    nickname: 'Land of Temples',
    icon: '🛕',
    gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    description: 'Magnificent Dravidian temples, pristine beaches, hill stations, and the cradle of classical South Indian culture.',
    cities: [
      {
        name: 'Chennai',
        type: 'Gateway to South',
        places: [
          { name: 'Marina Beach', desc: 'Second longest urban beach in the world — 13km stretch', type: 'Beach' },
          { name: 'Kapaleeshwarar Temple', desc: 'Stunning Dravidian temple dedicated to Lord Shiva — 7th century', type: 'Temple' },
          { name: 'Fort St. George', desc: 'First British fortress in India — now houses a museum', type: 'Heritage' },
          { name: 'San Thome Cathedral', desc: 'Neo-Gothic basilica built over the tomb of St. Thomas', type: 'Heritage' },
          { name: 'Government Museum', desc: 'Second oldest museum in India with bronze gallery', type: 'Museum' },
          { name: 'Mahabalipuram', desc: 'UNESCO Shore Temple and Arjuna\'s Penance rock carvings', type: 'Heritage' },
        ]
      },
      {
        name: 'Madurai',
        type: 'Temple City',
        places: [
          { name: 'Meenakshi Amman Temple', desc: 'Iconic temple with 14 gopurams covered in 33,000 sculptures', type: 'Temple' },
          { name: 'Thirumalai Nayakkar Palace', desc: '17th-century Indo-Saracenic palace with grand pillared hall', type: 'Heritage' },
          { name: 'Gandhi Memorial Museum', desc: 'Museum in a palace showcasing India\'s freedom struggle', type: 'Museum' },
          { name: 'Vaigai Dam', desc: 'Scenic dam on the Vaigai River with garden', type: 'Nature' },
          { name: 'Banana Market', desc: 'Asia\'s largest banana market with 3,000+ tonnes daily', type: 'Market' },
        ]
      },
      {
        name: 'Ooty (Udhagamandalam)',
        type: 'Queen of Hill Stations',
        places: [
          { name: 'Ooty Lake', desc: 'Beautiful artificial lake with boating facilities', type: 'Lake' },
          { name: 'Nilgiri Mountain Railway', desc: 'UNESCO heritage toy train through 16 tunnels and 250 bridges', type: 'Heritage' },
          { name: 'Botanical Gardens', desc: '55-acre garden with 650+ species and a fossil tree trunk', type: 'Garden' },
          { name: 'Doddabetta Peak', desc: 'Highest peak in Nilgiris at 2,637m with telescope house', type: 'Viewpoint' },
          { name: 'Tea Factory & Museum', desc: 'Learn tea-making process and sample fresh Nilgiri tea', type: 'Museum' },
          { name: 'Pykara Falls', desc: 'Twin waterfalls with boat house on Pykara Lake', type: 'Nature' },
        ]
      },
      {
        name: 'Rameswaram',
        type: 'Char Dham',
        places: [
          { name: 'Ramanathaswamy Temple', desc: 'Char Dham temple with world\'s longest corridor — 1,212m', type: 'Temple' },
          { name: 'Pamban Bridge', desc: 'India\'s first sea bridge — spectacular engineering marvel', type: 'Landmark' },
          { name: 'Dhanushkodi', desc: 'Ghost town at India\'s tip — last point of land before Sri Lanka', type: 'Heritage' },
          { name: 'Agni Theertham', desc: 'Sacred beach for ritual bathing near the temple', type: 'Beach' },
          { name: 'Abdul Kalam Memorial', desc: 'Memorial of former President APJ Abdul Kalam', type: 'Heritage' },
        ]
      },
      {
        name: 'Kodaikanal',
        type: 'Princess of Hill Stations',
        places: [
          { name: 'Kodai Lake', desc: 'Star-shaped artificial lake — boating and cycling around it', type: 'Lake' },
          { name: 'Coaker\'s Walk', desc: '1km paved path on the edge of steep slopes with valley views', type: 'Viewpoint' },
          { name: 'Pillar Rocks', desc: 'Three granite pillars rising 122m — stunning viewpoint', type: 'Nature' },
          { name: 'Bear Shola Falls', desc: 'Waterfall in dense forest — best during monsoons', type: 'Nature' },
          { name: 'Bryant Park', desc: 'Beautifully maintained botanical garden with rare flowers', type: 'Garden' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // ANDHRA PRADESH — Kohinoor of India
  // ══════════════════════════════════════════════════════════
  {
    state: 'Andhra Pradesh',
    nickname: 'Kohinoor of India',
    icon: '💎',
    gradient: 'linear-gradient(135deg, #2563EB, #7C3AED)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Rich Buddhist heritage, Tirupati\'s divine temples, Araku Valley\'s beauty, and a 974km coastline.',
    cities: [
      {
        name: 'Tirupati',
        type: 'Temple City',
        places: [
          { name: 'Tirumala Venkateswara Temple', desc: 'Richest and most visited temple in the world — on seven hills', type: 'Temple' },
          { name: 'Sri Padmavathi Temple', desc: 'Temple of Lord Venkateswara\'s consort — beautiful architecture', type: 'Temple' },
          { name: 'Talakona Waterfall', desc: 'Highest waterfall in AP at 270 feet inside a sanctuary', type: 'Nature' },
          { name: 'Chandragiri Fort', desc: 'Last capital of the Vijayanagara Empire with palace museum', type: 'Fort' },
          { name: 'Sri Vari Museum', desc: 'Museum depicting history of Tirumala temple with artifacts', type: 'Museum' },
        ]
      },
      {
        name: 'Visakhapatnam (Vizag)',
        type: 'City of Destiny',
        places: [
          { name: 'Araku Valley', desc: 'Scenic hill station with coffee plantations and tribal culture', type: 'Nature' },
          { name: 'Borra Caves', desc: 'Million-year-old stalactite and stalagmite limestone caves', type: 'Nature' },
          { name: 'RK Beach', desc: 'Popular city beach with submarine museum nearby', type: 'Beach' },
          { name: 'INS Kursura Submarine Museum', desc: 'Decommissioned submarine turned into a museum', type: 'Museum' },
          { name: 'Kailasagiri', desc: 'Hilltop park with giant Shiva-Parvati statues and ropeway', type: 'Viewpoint' },
          { name: 'Simhachalam Temple', desc: 'Ornate 11th-century temple of Lord Narasimha on a hill', type: 'Temple' },
        ]
      },
      {
        name: 'Vijayawada',
        type: 'Gateway City',
        places: [
          { name: 'Kanaka Durga Temple', desc: 'Temple on Indrakeeladri Hill overlooking Krishna River', type: 'Temple' },
          { name: 'Undavalli Caves', desc: 'Rock-cut caves from 4th-5th century with sleeping Vishnu', type: 'Heritage' },
          { name: 'Prakasam Barrage', desc: 'Stunning bridge across Krishna River — illuminated at night', type: 'Landmark' },
          { name: 'Amaravathi', desc: 'Ancient Buddhist site with 2,200-year-old stupa ruins', type: 'Heritage' },
          { name: 'Bhavani Island', desc: 'River island with gardens, boating, and water sports', type: 'Nature' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TELANGANA — Heritage of Deccan
  // ══════════════════════════════════════════════════════════
  {
    state: 'Telangana',
    nickname: 'Heritage of Deccan',
    icon: '🕌',
    gradient: 'linear-gradient(135deg, #DB2777, #9333EA)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'The Nizam\'s legacy — Charminar, Golconda Fort, Ramoji Film City, and a thriving tech capital with rich Deccani culture.',
    cities: [
      {
        name: 'Hyderabad',
        type: 'City of Pearls',
        places: [
          { name: 'Charminar', desc: 'Iconic 1591 monument — symbol of Hyderabad with four minarets', type: 'Heritage' },
          { name: 'Golconda Fort', desc: 'Grand fortress famous for its acoustic engineering and diamond history', type: 'Fort' },
          { name: 'Hussain Sagar Lake', desc: 'Heart-shaped lake with 16m tall monolithic Buddha statue', type: 'Lake' },
          { name: 'Ramoji Film City', desc: 'World\'s largest film studio complex — theme park experience', type: 'Entertainment' },
          { name: 'Salar Jung Museum', desc: 'One of India\'s largest museums with rare art and antiques', type: 'Museum' },
          { name: 'Chowmahalla Palace', desc: 'Nizam\'s grand palace with vintage car collection', type: 'Heritage' },
          { name: 'Laad Bazaar', desc: 'Famous bangle market near Charminar — lacquer bangles and pearls', type: 'Market' },
          { name: 'Birla Mandir', desc: 'White marble temple on Naubath Pahad with city views', type: 'Temple' },
        ]
      },
      {
        name: 'Warangal',
        type: 'Kakatiya Capital',
        places: [
          { name: 'Warangal Fort', desc: 'Kakatiya dynasty fort with famous Thoranam (stone gateway)', type: 'Fort' },
          { name: 'Thousand Pillar Temple', desc: '12th-century temple with star-shaped platform and intricate carvings', type: 'Temple' },
          { name: 'Ramappa Temple', desc: 'UNESCO World Heritage Site — floating brick technology from 1213 AD', type: 'Heritage' },
          { name: 'Pakhal Lake', desc: '13th-century man-made lake surrounded by forest', type: 'Lake' },
          { name: 'Bhadrakali Temple', desc: 'Lakeside temple of Goddess Bhadrakali with stunning views', type: 'Temple' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MAHARASHTRA — Land of Warriors
  // ══════════════════════════════════════════════════════════
  {
    state: 'Maharashtra',
    nickname: 'Land of Warriors',
    icon: '⚔️',
    gradient: 'linear-gradient(135deg, #EA580C, #DC2626)',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop',
    description: 'From Mumbai\'s Bollywood glamour to Ajanta\'s ancient caves, Maratha forts on every hill, and the Western Ghats\' lush beauty.',
    cities: [
      {
        name: 'Mumbai',
        type: 'City of Dreams',
        places: [
          { name: 'Gateway of India', desc: 'Iconic arch monument overlooking the Arabian Sea — built 1924', type: 'Landmark' },
          { name: 'Marine Drive', desc: 'Queen\'s Necklace — 3.6km seafront promenade lit up at night', type: 'Landmark' },
          { name: 'Elephanta Caves', desc: 'UNESCO island caves with 5th-century Shiva sculptures', type: 'Heritage' },
          { name: 'Chhatrapati Shivaji Terminus', desc: 'UNESCO Victorian Gothic railway station — architectural marvel', type: 'Heritage' },
          { name: 'Siddhivinayak Temple', desc: 'Most visited Ganesh temple in Mumbai', type: 'Temple' },
          { name: 'Juhu Beach', desc: 'Famous beach with street food and celebrity bungalows', type: 'Beach' },
          { name: 'Haji Ali Dargah', desc: 'Mosque and tomb on an islet accessible during low tide', type: 'Shrine' },
          { name: 'Colaba Causeway', desc: 'Vibrant shopping street with antiques and street fashion', type: 'Market' },
        ]
      },
      {
        name: 'Pune',
        type: 'Oxford of the East',
        places: [
          { name: 'Shaniwar Wada', desc: 'Historical Peshwa fort — seat of the Maratha Empire', type: 'Fort' },
          { name: 'Aga Khan Palace', desc: 'Where Mahatma Gandhi was imprisoned — now a memorial', type: 'Heritage' },
          { name: 'Sinhagad Fort', desc: 'Historic hill fort with the tale of Tanaji Malusare', type: 'Fort' },
          { name: 'Dagdusheth Halwai Ganpati', desc: 'Most famous Ganesh temple in Pune — gold-plated idol', type: 'Temple' },
          { name: 'Lonavala & Khandala', desc: 'Twin hill stations with waterfalls, forts, and Bhushi Dam', type: 'Hill Station' },
          { name: 'Rajiv Gandhi Zoological Park', desc: 'Well-maintained zoo with snake park and safari', type: 'Wildlife' },
        ]
      },
      {
        name: 'Aurangabad',
        type: 'Tourism Capital',
        places: [
          { name: 'Ajanta Caves', desc: 'UNESCO — 2,200-year-old Buddhist cave paintings and sculptures', type: 'Heritage' },
          { name: 'Ellora Caves', desc: 'UNESCO — 34 rock-cut caves (Buddhist, Hindu, Jain) including Kailasa', type: 'Heritage' },
          { name: 'Bibi Ka Maqbara', desc: 'Replica of Taj Mahal — also called Taj of the Deccan', type: 'Heritage' },
          { name: 'Daulatabad Fort', desc: 'Impregnable hilltop fortress with maze-like defenses', type: 'Fort' },
          { name: 'Panchakki (Water Mill)', desc: 'Ancient water mill with underground channel engineering', type: 'Heritage' },
        ]
      },
      {
        name: 'Mahabaleshwar',
        type: 'Hill Station',
        places: [
          { name: 'Arthur\'s Seat', desc: 'Queen of all viewpoints — valley views on three sides', type: 'Viewpoint' },
          { name: 'Pratapgad Fort', desc: 'Fort where Shivaji fought the historic Battle of Pratapgad', type: 'Fort' },
          { name: 'Venna Lake', desc: 'Scenic lake with boating surrounded by trees', type: 'Lake' },
          { name: 'Mapro Garden', desc: 'Strawberry farm with chocolate factory and food court', type: 'Nature' },
          { name: 'Lingmala Waterfall', desc: 'Stunning waterfall cascading from a height of 500 feet', type: 'Nature' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // GUJARAT — Land of Legends
  // ══════════════════════════════════════════════════════════
  {
    state: 'Gujarat',
    nickname: 'Land of Legends',
    icon: '🦁',
    gradient: 'linear-gradient(135deg, #D97706, #B45309)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Home of Asiatic lions, the White Rann, Sabarmati heritage, ancient stepwells, and vibrant Gujarati culture.',
    cities: [
      {
        name: 'Kutch (Rann of Kutch)',
        type: 'White Desert',
        places: [
          { name: 'White Rann', desc: 'Surreal white salt desert stretching to the horizon — moonlit magic', type: 'Desert' },
          { name: 'Rann Utsav', desc: 'Grand annual festival on the White Rann (Nov-Feb) with tent city', type: 'Festival' },
          { name: 'Kala Dungar (Black Hill)', desc: 'Highest point in Kutch with panoramic Rann views', type: 'Viewpoint' },
          { name: 'Bhuj', desc: 'Gateway to Kutch with Aina Mahal and Prag Mahal palaces', type: 'Heritage' },
          { name: 'Mandvi Beach', desc: 'Pristine beach with shipbuilding yards and Vijay Vilas Palace', type: 'Beach' },
          { name: 'Craft Villages', desc: 'Ajrakhpur, Bhujodi — famous for Kutchi embroidery and crafts', type: 'Culture' },
        ]
      },
      {
        name: 'Ahmedabad',
        type: 'UNESCO Heritage City',
        places: [
          { name: 'Sabarmati Ashram', desc: 'Mahatma Gandhi\'s home — museum and memorial on the riverfront', type: 'Heritage' },
          { name: 'Adalaj Stepwell', desc: 'Stunning 15th-century five-story stepwell with intricate carvings', type: 'Heritage' },
          { name: 'Sidi Saiyyed Mosque', desc: 'Famous for the iconic Tree of Life stone jali window', type: 'Heritage' },
          { name: 'Kankaria Lake', desc: 'Lakefront entertainment zone with zoo, toy train, and park', type: 'Lake' },
          { name: 'Heritage Walk (Old City)', desc: 'UNESCO-listed walled city walk through pols and havelis', type: 'Heritage' },
          { name: 'Akshardham Temple', desc: 'Stunning pink sandstone temple with exhibitions', type: 'Temple' },
        ]
      },
      {
        name: 'Gir National Park',
        type: 'Lion Country',
        places: [
          { name: 'Gir Forest', desc: 'Only home of Asiatic lions in the wild — 700+ lions', type: 'Wildlife' },
          { name: 'Devaliya Safari Park', desc: 'Fenced area for guaranteed sightings of lions and wildlife', type: 'Wildlife' },
          { name: 'Somnath Temple', desc: 'First among 12 Jyotirlingas — on the Arabian Sea coast', type: 'Temple' },
          { name: 'Junagadh', desc: 'Historic city with Uparkot Fort and Buddhist caves', type: 'Heritage' },
        ]
      },
      {
        name: 'Dwarka',
        type: 'Char Dham',
        places: [
          { name: 'Dwarkadhish Temple', desc: 'Char Dham temple — believed to be Lord Krishna\'s kingdom', type: 'Temple' },
          { name: 'Nageshwar Jyotirlinga', desc: 'One of 12 Jyotirlingas with 25m Shiva statue', type: 'Temple' },
          { name: 'Bet Dwarka', desc: 'Island with Krishna temple — accessible by boat', type: 'Temple' },
          { name: 'Rukmini Devi Temple', desc: 'Temple of Krishna\'s queen with beautiful carvings', type: 'Temple' },
        ]
      },
      {
        name: 'Statue of Unity',
        type: 'Modern Marvel',
        places: [
          { name: 'Statue of Unity', desc: 'World\'s tallest statue at 182m — tribute to Sardar Patel', type: 'Landmark' },
          { name: 'Valley of Flowers', desc: 'Flower garden park near the statue with LED fountain show', type: 'Garden' },
          { name: 'Sardar Sarovar Dam', desc: 'Massive dam on the Narmada River with views from the statue', type: 'Landmark' },
          { name: 'Cactus Garden', desc: 'Asia\'s largest cactus garden with 450+ species', type: 'Garden' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // PUNJAB — Land of Five Rivers
  // ══════════════════════════════════════════════════════════
  {
    state: 'Punjab',
    nickname: 'Land of Five Rivers',
    icon: '🌾',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Golden Temple\'s divine aura, lush green farms, rich Sikh heritage, delicious cuisine, and the iconic Wagah Border ceremony.',
    cities: [
      {
        name: 'Amritsar',
        type: 'Holy City',
        places: [
          { name: 'Golden Temple (Harmandir Sahib)', desc: 'Most sacred Sikh shrine — gold-plated with reflection in Amrit Sarovar', type: 'Gurudwara' },
          { name: 'Jallianwala Bagh', desc: 'Memorial of the 1919 massacre — bullet marks still visible', type: 'Heritage' },
          { name: 'Wagah Border', desc: 'India-Pakistan border ceremony — beating retreat at sunset', type: 'Landmark' },
          { name: 'Partition Museum', desc: 'India\'s first museum dedicated to the 1947 partition', type: 'Museum' },
          { name: 'Gobindgarh Fort', desc: 'Renovated Sikh-era fort with light and sound show', type: 'Fort' },
          { name: 'Langar at Golden Temple', desc: 'World\'s largest free kitchen — feeds 100,000+ daily', type: 'Culture' },
        ]
      },
      {
        name: 'Chandigarh',
        type: 'City Beautiful',
        places: [
          { name: 'Rock Garden', desc: 'Nek Chand\'s sculpture garden made from recycled waste — 40 acres', type: 'Heritage' },
          { name: 'Sukhna Lake', desc: 'Man-made lake at Shivalik foothills — boating and walks', type: 'Lake' },
          { name: 'Rose Garden', desc: 'Asia\'s largest rose garden with 1,600+ species', type: 'Garden' },
          { name: 'Capitol Complex', desc: 'Le Corbusier\'s UNESCO-listed modernist government buildings', type: 'Heritage' },
          { name: 'Elante Mall', desc: 'North India\'s largest mall with entertainment and dining', type: 'Shopping' },
        ]
      },
      {
        name: 'Patiala',
        type: 'Royal City',
        places: [
          { name: 'Qila Mubarak', desc: 'Historic fort-palace complex with Darbar Hall and museum', type: 'Fort' },
          { name: 'Sheesh Mahal', desc: 'Mirror palace inside the fort with Rajasthani-style art', type: 'Heritage' },
          { name: 'Bahadurgarh Fort', desc: 'Massive fort covering 38 acres with Sikh history', type: 'Fort' },
          { name: 'Gurdwara Dukh Nivaran Sahib', desc: 'Sacred gurdwara with hot spring believed to cure ailments', type: 'Gurudwara' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // WEST BENGAL — Cultural Capital
  // ══════════════════════════════════════════════════════════
  {
    state: 'West Bengal',
    nickname: 'Cultural Capital',
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop',
    description: 'Kolkata\'s colonial grandeur, Darjeeling\'s tea gardens, Sundarbans\' Royal Bengal Tigers, and unmatched literary and artistic heritage.',
    cities: [
      {
        name: 'Kolkata',
        type: 'City of Joy',
        places: [
          { name: 'Victoria Memorial', desc: 'White marble monument and museum — Kolkata\'s Taj Mahal', type: 'Heritage' },
          { name: 'Howrah Bridge', desc: 'Iconic cantilever bridge over Hooghly River — no nuts or bolts', type: 'Landmark' },
          { name: 'Indian Museum', desc: 'Oldest and largest museum in India — founded 1814', type: 'Museum' },
          { name: 'Dakshineswar Kali Temple', desc: 'Famous temple where Ramakrishna Paramahamsa worshipped', type: 'Temple' },
          { name: 'Park Street', desc: 'Heritage avenue with colonial architecture, restaurants, and nightlife', type: 'Heritage' },
          { name: 'Belur Math', desc: 'Headquarters of Ramakrishna Mission — blends all religions', type: 'Temple' },
          { name: 'Kumartuli', desc: 'Idol-making quarter where Durga idols are crafted', type: 'Culture' },
        ]
      },
      {
        name: 'Darjeeling',
        type: 'Queen of the Hills',
        places: [
          { name: 'Tiger Hill', desc: 'Sunrise over Kanchenjunga and Everest — breathtaking', type: 'Viewpoint' },
          { name: 'Darjeeling Himalayan Railway', desc: 'UNESCO heritage toy train — "most oustanding steam railway"', type: 'Heritage' },
          { name: 'Tea Gardens', desc: 'World-famous Darjeeling tea estates — guided tours and tastings', type: 'Nature' },
          { name: 'Batasia Loop', desc: 'Spiral railway loop with war memorial and Kanchenjunga views', type: 'Landmark' },
          { name: 'Peace Pagoda', desc: 'Japanese Buddhist stupa with four avatars of Buddha', type: 'Monastery' },
          { name: 'Padmaja Naidu Himalayan Zoological Park', desc: 'Zoo with red pandas, snow leopards, and Tibetan wolves', type: 'Wildlife' },
        ]
      },
      {
        name: 'Sundarbans',
        type: 'Mangrove Forest',
        places: [
          { name: 'Sundarbans National Park', desc: 'UNESCO World Heritage — largest mangrove forest, home of Royal Bengal Tiger', type: 'Wildlife' },
          { name: 'Boat Safari', desc: 'Navigate through creeks and rivers to spot tigers and crocodiles', type: 'Adventure' },
          { name: 'Sajnekhali Watch Tower', desc: 'Bird-watching tower with deer, crocodile, and turtle pond', type: 'Wildlife' },
          { name: 'Dobanki Watch Tower', desc: 'Canopy walk and observation tower deep in the mangroves', type: 'Wildlife' },
        ]
      },
      {
        name: 'Shantiniketan',
        type: 'Tagore\'s Abode',
        places: [
          { name: 'Visva-Bharati University', desc: 'Rabindranath Tagore\'s open-air university — cultural landmark', type: 'Heritage' },
          { name: 'Kala Bhavana', desc: 'Art college with murals by Nandalal Bose and Tagore', type: 'Culture' },
          { name: 'Amar Kutir', desc: 'Handicraft center with batik, leather, and weaving', type: 'Culture' },
          { name: 'Sonajhuri Forest', desc: 'Sal tree forest with weekend tribal fairs and baul music', type: 'Nature' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // BIHAR — Cradle of Civilization
  // ══════════════════════════════════════════════════════════
  {
    state: 'Bihar',
    nickname: 'Cradle of Civilization',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #CA8A04, #A16207)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Birthplace of Buddhism and Jainism, ancient Nalanda University, Mahabodhi Temple, and the Sonepur Mela.',
    cities: [
      {
        name: 'Bodh Gaya',
        type: 'Buddhist Holy Site',
        places: [
          { name: 'Mahabodhi Temple', desc: 'UNESCO site — where Buddha attained enlightenment under the Bodhi Tree', type: 'Heritage' },
          { name: 'Bodhi Tree', desc: 'Direct descendant of the original tree under which Buddha sat', type: 'Heritage' },
          { name: 'Great Buddha Statue', desc: '80-foot tall Buddha statue in meditation pose', type: 'Landmark' },
          { name: 'Thai Monastery', desc: 'Ornate Thai Buddhist temple with beautiful architecture', type: 'Monastery' },
          { name: 'Japanese Temple', desc: 'Japanese Buddhist temple with meditation hall', type: 'Monastery' },
        ]
      },
      {
        name: 'Nalanda',
        type: 'Ancient University',
        places: [
          { name: 'Nalanda University Ruins', desc: 'UNESCO — remains of world\'s oldest university (5th century)', type: 'Heritage' },
          { name: 'Nalanda Archaeological Museum', desc: 'Artifacts from excavations — Buddhist sculptures and manuscripts', type: 'Museum' },
          { name: 'Xuanzang Memorial', desc: 'Memorial of the Chinese scholar who studied at Nalanda', type: 'Heritage' },
          { name: 'Rajgir', desc: 'Ancient capital of Magadha with hot springs and Gridhakuta Hill', type: 'Heritage' },
          { name: 'Vishwa Shanti Stupa', desc: 'Peace Pagoda on Ratnagiri Hill with ropeway', type: 'Monastery' },
        ]
      },
      {
        name: 'Patna',
        type: 'State Capital',
        places: [
          { name: 'Patna Sahib Gurudwara', desc: 'Birth place of Guru Gobind Singh — holiest Sikh shrine after Golden Temple', type: 'Gurudwara' },
          { name: 'Golghar', desc: 'Beehive-shaped granary from 1786 with panoramic roof-top views', type: 'Heritage' },
          { name: 'Patna Museum', desc: 'Museum with world\'s longest fossil tree and Didarganj Yakshi', type: 'Museum' },
          { name: 'Mahavir Mandir', desc: 'One of the most revered Hanuman temples in India', type: 'Temple' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // JHARKHAND — Land of Forests
  // ══════════════════════════════════════════════════════════
  {
    state: 'Jharkhand',
    nickname: 'Land of Forests',
    icon: '🌳',
    gradient: 'linear-gradient(135deg, #15803D, #4ADE80)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Dense forests, spectacular waterfalls, Jain pilgrimage at Parasnath, tribal culture, and the industrial city of Jamshedpur.',
    cities: [
      {
        name: 'Ranchi',
        type: 'State Capital',
        places: [
          { name: 'Hundru Falls', desc: '98m waterfall on Subarnarekha River — one of the highest in India', type: 'Nature' },
          { name: 'Dassam Falls', desc: '44m waterfall meaning "10 streams" converging', type: 'Nature' },
          { name: 'Jonha Falls (Gautamdhara)', desc: 'Waterfall with ancient Buddhist shrine at the base', type: 'Nature' },
          { name: 'Tagore Hill', desc: 'Hill where Rabindranath Tagore\'s brother built an ashram', type: 'Heritage' },
          { name: 'Rock Garden', desc: 'Sculptures and garden built by Jharkhand government', type: 'Nature' },
        ]
      },
      {
        name: 'Deoghar',
        type: 'Jyotirlinga City',
        places: [
          { name: 'Baidyanath Dham', desc: 'One of 12 Jyotirlingas — major pilgrimage center for Shiva devotees', type: 'Temple' },
          { name: 'Trikut Hill', desc: 'Three-peaked hill with ropeway and panoramic views', type: 'Viewpoint' },
          { name: 'Nandan Pahar', desc: 'Hill with amusement park and scenic views', type: 'Nature' },
          { name: 'Basukinath Temple', desc: 'Important Shiva temple where Shrawan devotees visit', type: 'Temple' },
        ]
      },
      {
        name: 'Jamshedpur',
        type: 'Steel City',
        places: [
          { name: 'Jubilee Park', desc: 'Large park with zoo, lake, and Japanese garden built by Tata', type: 'Nature' },
          { name: 'Dalma Wildlife Sanctuary', desc: 'Home to elephants, deer, and barking deer on Dalma Hills', type: 'Wildlife' },
          { name: 'Dimna Lake', desc: 'Scenic reservoir surrounded by hills — picnic and boating spot', type: 'Lake' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // ODISHA — Soul of India
  // ══════════════════════════════════════════════════════════
  {
    state: 'Odisha',
    nickname: 'Soul of India',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #0369A1, #38BDF8)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Architectural marvels at Konark, Jagannath Puri\'s divine rath yatra, tribal heritage, and pristine Chilika Lake.',
    cities: [
      {
        name: 'Puri',
        type: 'Char Dham',
        places: [
          { name: 'Jagannath Temple', desc: 'Char Dham — one of India\'s most sacred temples with annual Rath Yatra', type: 'Temple' },
          { name: 'Puri Beach', desc: 'Golden beach with international sand art festival', type: 'Beach' },
          { name: 'Chilika Lake', desc: 'Asia\'s largest brackish water lagoon — Irrawaddy dolphins', type: 'Lake' },
          { name: 'Raghurajpur', desc: 'Heritage craft village famous for Pattachitra paintings', type: 'Culture' },
        ]
      },
      {
        name: 'Konark',
        type: 'Sun Temple',
        places: [
          { name: 'Konark Sun Temple', desc: 'UNESCO — 13th-century chariot-shaped temple dedicated to Sun God', type: 'Heritage' },
          { name: 'Konark Beach (Chandrabhaga)', desc: 'Pristine beach near the Sun Temple — spiritual significance', type: 'Beach' },
          { name: 'ASI Museum', desc: 'Archaeological museum with Sun Temple sculptures', type: 'Museum' },
          { name: 'Konark Dance Festival', desc: 'Annual classical dance festival against the temple backdrop', type: 'Festival' },
        ]
      },
      {
        name: 'Bhubaneswar',
        type: 'Temple City',
        places: [
          { name: 'Lingaraj Temple', desc: '11th-century temple — finest example of Kalinga architecture', type: 'Temple' },
          { name: 'Udayagiri & Khandagiri Caves', desc: 'Jain rock-cut caves from 2nd century BCE with carvings', type: 'Heritage' },
          { name: 'Nandankanan Zoo', desc: 'Famous for white tigers and open-range safaris', type: 'Wildlife' },
          { name: 'Dhauli Shanti Stupa', desc: 'Buddhist peace pagoda at site where Ashoka renounced war', type: 'Heritage' },
          { name: 'Mukteshwar Temple', desc: 'Gem of Odisha architecture — 10th century with ornate torana', type: 'Temple' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // CHHATTISGARH — Rice Bowl of India
  // ══════════════════════════════════════════════════════════
  {
    state: 'Chhattisgarh',
    nickname: 'Rice Bowl of India',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #166534, #86EFAC)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Untouched natural beauty, spectacular waterfalls, ancient cave temples, tribal culture, and dense forests rich in biodiversity.',
    cities: [
      {
        name: 'Jagdalpur',
        type: 'Bastar Capital',
        places: [
          { name: 'Chitrakote Falls', desc: 'Niagara of India — horseshoe-shaped waterfall on Indravati River', type: 'Nature' },
          { name: 'Tirathgarh Falls', desc: 'Spectacular multi-tiered waterfall in Kanger Valley', type: 'Nature' },
          { name: 'Kanger Valley National Park', desc: 'Dense forest with caves, waterfalls, and tribal culture', type: 'Wildlife' },
          { name: 'Kutumsar Caves', desc: 'Natural limestone caves with stalactites — 2km deep', type: 'Nature' },
          { name: 'Bastar Palace', desc: 'Historic royal palace of the Bastar kings', type: 'Heritage' },
        ]
      },
      {
        name: 'Raipur',
        type: 'State Capital',
        places: [
          { name: 'Mahant Ghasidas Museum', desc: 'Museum with inscriptions, sculptures, and coins from local history', type: 'Museum' },
          { name: 'Nandan Van Zoo', desc: 'Zoo and jungle safari spread over 800 acres', type: 'Wildlife' },
          { name: 'Purkhouti Muktangan', desc: 'Open-air museum of Chhattisgarh tribal culture and heritage', type: 'Museum' },
          { name: 'Swami Vivekananda Sarovar', desc: 'Beautiful artificial lake with evening light shows', type: 'Lake' },
        ]
      },
      {
        name: 'Sirpur',
        type: 'Archaeological Site',
        places: [
          { name: 'Laxman Temple', desc: '7th-century brick temple — finest brick temple in India', type: 'Temple' },
          { name: 'Buddha Vihara', desc: 'Ancient Buddhist monastery ruins with excavated structures', type: 'Heritage' },
          { name: 'Sirpur Festival', desc: 'Annual cultural festival with dance, music, and drama', type: 'Festival' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // ASSAM — Gateway to Northeast
  // ══════════════════════════════════════════════════════════
  {
    state: 'Assam',
    nickname: 'Gateway to Northeast',
    icon: '🦏',
    gradient: 'linear-gradient(135deg, #15803D, #22C55E)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'One-horned rhinos at Kaziranga, Brahmaputra river islands, world-famous Assam tea, ancient Kamakhya Temple, and Bihu festivals.',
    cities: [
      {
        name: 'Guwahati',
        type: 'Gateway City',
        places: [
          { name: 'Kamakhya Temple', desc: 'One of 51 Shakti Peethas — atop Nilachal Hill with Tantric traditions', type: 'Temple' },
          { name: 'Umananda Temple', desc: 'Shiva temple on the smallest inhabited river island (Peacock Island)', type: 'Temple' },
          { name: 'Assam State Museum', desc: 'Museum with Ahom antiquities, sculptures, and tribal artifacts', type: 'Museum' },
          { name: 'Pobitora Wildlife Sanctuary', desc: 'Mini Kaziranga — highest density of one-horned rhinos per sq km', type: 'Wildlife' },
          { name: 'Brahmaputra River Cruise', desc: 'Sunset cruise on the mighty Brahmaputra with dinner', type: 'Nature' },
        ]
      },
      {
        name: 'Kaziranga',
        type: 'Rhino Country',
        places: [
          { name: 'Kaziranga National Park', desc: 'UNESCO — home to 2/3 of the world\'s one-horned rhinoceros', type: 'Wildlife' },
          { name: 'Elephant Safari', desc: 'Early morning elephant-back safari for close wildlife encounters', type: 'Wildlife' },
          { name: 'Central Range (Kohora)', desc: 'Best zone for rhino sightings — jeep and elephant safaris', type: 'Wildlife' },
          { name: 'Orchid & Biodiversity Park', desc: 'Park showcasing Assam\'s endemic orchids and flora', type: 'Nature' },
        ]
      },
      {
        name: 'Majuli Island',
        type: 'World\'s Largest River Island',
        places: [
          { name: 'Majuli Island', desc: 'World\'s largest river island — Vaishnavite monastery culture', type: 'Nature' },
          { name: 'Satras (Monasteries)', desc: 'Neo-Vaishnavite monasteries preserving Assamese culture', type: 'Monastery' },
          { name: 'Mask Making', desc: 'Traditional Assamese mask-making craft at Chamaguri Satra', type: 'Culture' },
          { name: 'Mishing Tribal Villages', desc: 'Stilt houses of Mishing tribe along the Brahmaputra', type: 'Village' },
        ]
      },
      {
        name: 'Jorhat & Sivasagar',
        type: 'Tea Capital & Ahom Heritage',
        places: [
          { name: 'Tocklai Tea Research Station', desc: 'World\'s oldest tea research station — guided tours', type: 'Heritage' },
          { name: 'Rang Ghar', desc: 'Two-story amphitheatre — Asia\'s oldest pavilion from 1746', type: 'Heritage' },
          { name: 'Talatal Ghar', desc: 'Ahom palace with underground tunnels and escape routes', type: 'Heritage' },
          { name: 'Sivasagar Tank', desc: 'Man-made 129-acre tank with three historic temples on its banks', type: 'Heritage' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MEGHALAYA — Abode of Clouds
  // ══════════════════════════════════════════════════════════
  {
    state: 'Meghalaya',
    nickname: 'Abode of Clouds',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #0891B2, #67E8F9)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Living root bridges, cleanest village in Asia, wettest place on Earth, stunning limestone caves, and emerald waterfalls.',
    cities: [
      {
        name: 'Shillong',
        type: 'Scotland of the East',
        places: [
          { name: 'Umiam Lake (Barapani)', desc: 'Scenic reservoir surrounded by pine forests — boating and kayaking', type: 'Lake' },
          { name: 'Shillong Peak', desc: 'Highest point in Shillong at 1,965m with panoramic views', type: 'Viewpoint' },
          { name: 'Ward\'s Lake', desc: 'Beautiful artificial lake with gardens in the heart of the city', type: 'Lake' },
          { name: 'Don Bosco Museum', desc: 'Northeast India\'s finest museum — 7 stories of tribal culture', type: 'Museum' },
          { name: 'Police Bazaar', desc: 'Central shopping area with food, handicrafts, and nightlife', type: 'Shopping' },
          { name: 'Elephant Falls', desc: 'Three-tiered waterfall named by the British — lush surroundings', type: 'Nature' },
        ]
      },
      {
        name: 'Cherrapunji (Sohra)',
        type: 'Wettest Place',
        places: [
          { name: 'Living Root Bridges', desc: 'Bio-engineered bridges grown from Ficus elastica tree roots over centuries', type: 'Nature' },
          { name: 'Nohkalikai Falls', desc: 'Tallest plunge waterfall in India at 340m — stunning turquoise pool', type: 'Nature' },
          { name: 'Double Decker Root Bridge', desc: 'Two-level living root bridge — 3,000 steps trek to reach it', type: 'Nature' },
          { name: 'Mawsmai Cave', desc: 'Illuminated limestone cave — accessible and photogenic', type: 'Nature' },
          { name: 'Seven Sisters Falls', desc: 'Seven-segmented waterfall plunging over limestone cliffs', type: 'Nature' },
          { name: 'Thangkharang Park', desc: 'Viewpoint overlooking Bangladesh plains and waterfalls', type: 'Viewpoint' },
        ]
      },
      {
        name: 'Mawlynnong',
        type: 'Cleanest Village',
        places: [
          { name: 'Mawlynnong Village', desc: 'Cleanest village in Asia — immaculate pathways and bamboo dustbins', type: 'Village' },
          { name: 'Sky Walk', desc: 'Bamboo platform on a tree offering views of Bangladesh plains', type: 'Viewpoint' },
          { name: 'Living Root Bridge (Riwai)', desc: 'Well-maintained root bridge near the village', type: 'Nature' },
          { name: 'Balancing Rock', desc: 'Natural boulder balanced on another rock — gravity-defying', type: 'Nature' },
        ]
      },
      {
        name: 'Dawki',
        type: 'Crystal River',
        places: [
          { name: 'Umngot River', desc: 'Crystal-clear river — boats appear to float in air', type: 'Nature' },
          { name: 'Dawki Bridge', desc: 'Suspension bridge over Umngot with stunning views', type: 'Landmark' },
          { name: 'India-Bangladesh Border', desc: 'Scenic border point at Dawki — Tamabil checkpoint', type: 'Landmark' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // SIKKIM — Hidden Kingdom
  // ══════════════════════════════════════════════════════════
  {
    state: 'Sikkim',
    nickname: 'Hidden Kingdom',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #4F46E5, #818CF8)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'India\'s first organic state — Kanchenjunga views, ancient monasteries, Tsomgo Lake, and the cleanest state in India.',
    cities: [
      {
        name: 'Gangtok',
        type: 'State Capital',
        places: [
          { name: 'MG Marg', desc: 'Pedestrian-only main street with shops, cafes, and vibrant nightlife', type: 'Shopping' },
          { name: 'Rumtek Monastery', desc: 'Largest monastery in Sikkim — seat of the Karmapa', type: 'Monastery' },
          { name: 'Tsomgo (Changu) Lake', desc: 'Glacial lake at 3,753m — frozen in winter, stunning in all seasons', type: 'Lake' },
          { name: 'Baba Harbhajan Singh Temple', desc: 'Temple of an army soldier believed to guard the border in spirit', type: 'Temple' },
          { name: 'Nathula Pass', desc: 'Indo-China border pass at 4,310m — permits required', type: 'Mountain' },
          { name: 'Hanuman Tok', desc: 'Hilltop Hanuman temple with stunning Kanchenjunga views', type: 'Temple' },
          { name: 'Tashi View Point', desc: 'Viewpoint for Mt. Kanchenjunga and Mt. Siniolchu at sunrise', type: 'Viewpoint' },
        ]
      },
      {
        name: 'Pelling',
        type: 'Kanchenjunga Views',
        places: [
          { name: 'Pemayangtse Monastery', desc: 'One of the oldest monasteries — 3D wooden sculpture of heaven', type: 'Monastery' },
          { name: 'Skywalk', desc: '137-foot glass skywalk with Kanchenjunga and valley views', type: 'Adventure' },
          { name: 'Rabdentse Ruins', desc: 'Ruins of the second capital of the former kingdom of Sikkim', type: 'Heritage' },
          { name: 'Kanchenjunga Falls', desc: 'Multi-tiered waterfall visible from the highway', type: 'Nature' },
          { name: 'Khecheopalri Lake', desc: 'Sacred wish-fulfilling lake — no leaf floats on its surface', type: 'Lake' },
        ]
      },
      {
        name: 'Lachung & Yumthang',
        type: 'Valley of Flowers',
        places: [
          { name: 'Yumthang Valley', desc: 'Valley of Flowers — stunning rhododendron blooms in spring', type: 'Nature' },
          { name: 'Zero Point (Yumesamdong)', desc: 'Convergence point at 4,572m — snow-covered year-round', type: 'Mountain' },
          { name: 'Lachung Monastery', desc: 'Peaceful monastery in the Lachung valley', type: 'Monastery' },
          { name: 'Hot Springs', desc: 'Natural sulphur hot springs amidst snowy mountains', type: 'Nature' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // ARUNACHAL PRADESH — Land of Dawn-Lit Mountains
  // ══════════════════════════════════════════════════════════
  {
    state: 'Arunachal Pradesh',
    nickname: 'Land of Dawn-Lit Mountains',
    icon: '🌅',
    gradient: 'linear-gradient(135deg, #0D9488, #5EEAD4)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'India\'s easternmost state where the sun rises first — Tawang\'s monasteries, pristine valleys, and 26 tribal communities.',
    cities: [
      {
        name: 'Tawang',
        type: 'Monastic Town',
        places: [
          { name: 'Tawang Monastery', desc: 'Largest Buddhist monastery in India — 400-year-old Gelug gompa', type: 'Monastery' },
          { name: 'Sela Pass', desc: 'High altitude pass at 4,170m with frozen Sela Lake', type: 'Mountain' },
          { name: 'Tawang War Memorial', desc: 'Memorial for soldiers of the 1962 Indo-China war', type: 'Heritage' },
          { name: 'Madhuri Lake (Sangetsar Tso)', desc: 'Lake formed by 1950 earthquake — named after Bollywood actress', type: 'Lake' },
          { name: 'Nuranang Falls', desc: 'Spectacular 100m waterfall also called Jang Falls', type: 'Nature' },
        ]
      },
      {
        name: 'Ziro Valley',
        type: 'UNESCO Tentative',
        places: [
          { name: 'Ziro Valley', desc: 'UNESCO tentative list — stunning rice paddies of the Apatani tribe', type: 'Nature' },
          { name: 'Ziro Music Festival', desc: 'Outdoor music festival in the valley — indie and folk music', type: 'Festival' },
          { name: 'Apatani Tribal Villages', desc: 'Villages of the Apatani tribe with unique facial tattoo traditions', type: 'Culture' },
          { name: 'Talley Valley Wildlife Sanctuary', desc: 'Pristine valley with dense subtropical forests', type: 'Wildlife' },
        ]
      },
      {
        name: 'Itanagar',
        type: 'State Capital',
        places: [
          { name: 'Ita Fort', desc: 'Ruins of a 14th-century brick fort — capital derives its name', type: 'Fort' },
          { name: 'Ganga Lake (Gyekar Sinyi)', desc: 'Sacred lake surrounded by lush forest and hills', type: 'Lake' },
          { name: 'Jawaharlal Nehru Museum', desc: 'Museum showcasing Arunachali tribal culture and artifacts', type: 'Museum' },
          { name: 'Gompa Buddhist Temple', desc: 'Yellow-roofed Buddhist temple with meditation hall', type: 'Monastery' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // NAGALAND — Land of Festivals
  // ══════════════════════════════════════════════════════════
  {
    state: 'Nagaland',
    nickname: 'Land of Festivals',
    icon: '🎪',
    gradient: 'linear-gradient(135deg, #B91C1C, #F87171)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Home of the Hornbill Festival, warrior tribal heritage, stunning hill villages, and the vibrant Naga culture.',
    cities: [
      {
        name: 'Kohima',
        type: 'State Capital',
        places: [
          { name: 'Kohima War Cemetery', desc: 'WWII memorial for Battle of Kohima — "When You Go Home" inscription', type: 'Heritage' },
          { name: 'Kohima State Museum', desc: 'Museum of Naga tribal heritage with artifacts and costumes', type: 'Museum' },
          { name: 'Kohima Cathedral', desc: 'Largest cathedral in Northeast India — stunning hilltop location', type: 'Heritage' },
          { name: 'Dzukou Valley', desc: 'Valley of flowers at 2,452m — seasonal wildflower paradise', type: 'Nature' },
          { name: 'Naga Heritage Village (Kisama)', desc: 'Venue of Hornbill Festival — recreated Naga tribal village', type: 'Culture' },
        ]
      },
      {
        name: 'Dimapur',
        type: 'Gateway City',
        places: [
          { name: 'Kachari Ruins', desc: 'Mysterious mushroom-shaped monoliths of ancient Kachari kingdom', type: 'Heritage' },
          { name: 'Rangapahar Reserve Forest', desc: 'Forest reserve with elephants, bears, and diverse flora', type: 'Wildlife' },
          { name: 'Triple Falls', desc: 'Three-tiered waterfall in lush forest near Dimapur', type: 'Nature' },
        ]
      },
      {
        name: 'Mon',
        type: 'Konyak Tribal Land',
        places: [
          { name: 'Longwa Village', desc: 'Chief\'s house straddles India-Myanmar border — headhunter legacy', type: 'Culture' },
          { name: 'Konyak Tribal Villages', desc: 'Last headhunting tribe — tattooed warriors and unique customs', type: 'Culture' },
          { name: 'Veda Peak', desc: 'Highest point in Mon district with stunning sunrise', type: 'Viewpoint' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MANIPUR — Jewel of India
  // ══════════════════════════════════════════════════════════
  {
    state: 'Manipur',
    nickname: 'Jewel of India',
    icon: '💠',
    gradient: 'linear-gradient(135deg, #7C3AED, #C084FC)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'The floating lake of Loktak, Sangai dancing deer, Ima Keithel women\'s market, and the birthplace of modern polo.',
    cities: [
      {
        name: 'Imphal',
        type: 'State Capital',
        places: [
          { name: 'Loktak Lake', desc: 'Largest freshwater lake in NE India — floating phumdis (islands)', type: 'Lake' },
          { name: 'Kangla Fort', desc: 'Ancient seat of Manipur kings — sacred ceremonial ground', type: 'Fort' },
          { name: 'Ima Keithel (Mother\'s Market)', desc: 'Asia\'s largest all-women market — 5,000+ women vendors', type: 'Market' },
          { name: 'Keibul Lamjao National Park', desc: 'World\'s only floating national park — home of Sangai deer', type: 'Wildlife' },
          { name: 'Shri Govindajee Temple', desc: 'Golden-domed Vaishnavite temple — cultural landmark', type: 'Temple' },
          { name: 'INA War Memorial', desc: 'Memorial of Subhas Chandra Bose\'s INA headquarters', type: 'Heritage' },
        ]
      },
      {
        name: 'Ukhrul',
        type: 'Hill District',
        places: [
          { name: 'Shirui Peak', desc: 'Home of the rare Shirui Lily — found nowhere else on Earth', type: 'Nature' },
          { name: 'Kachou Phung Lake', desc: 'Sacred blue-green lake surrounded by pristine forests', type: 'Lake' },
          { name: 'Hundung', desc: 'Village with stone monuments of the Tangkhul Naga tribe', type: 'Culture' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MIZORAM — Land of the Hill People
  // ══════════════════════════════════════════════════════════
  {
    state: 'Mizoram',
    nickname: 'Land of the Hill People',
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #0E7490, #22D3EE)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Rolling blue hills, bamboo forests, cheerful Mizo culture, and one of India\'s most peaceful and literate states.',
    cities: [
      {
        name: 'Aizawl',
        type: 'State Capital',
        places: [
          { name: 'Mizoram State Museum', desc: 'Museum showcasing Mizo history, culture, and costumes', type: 'Museum' },
          { name: 'Solomon\'s Temple', desc: 'Stunning hilltop church — architectural marvel with panoramic views', type: 'Heritage' },
          { name: 'Durtlang Hills', desc: 'Viewpoint with panoramic views of the city and surrounding hills', type: 'Viewpoint' },
          { name: 'Bara Bazaar', desc: 'Vibrant central market with Mizo handicrafts and food', type: 'Market' },
          { name: 'KV Paradise', desc: 'Amusement park and viewpoint on the outskirts of Aizawl', type: 'Nature' },
        ]
      },
      {
        name: 'Champhai',
        type: 'Rice Bowl of Mizoram',
        places: [
          { name: 'Rih Dil Lake', desc: 'Heart-shaped lake on the Myanmar border — sacred to Mizos', type: 'Lake' },
          { name: 'Murlen National Park', desc: 'Dense forest with hoolock gibbons and over 150 bird species', type: 'Wildlife' },
          { name: 'Lengteng Wildlife Sanctuary', desc: 'Highest peak in Mizoram at 2,141m — rich biodiversity', type: 'Wildlife' },
          { name: 'Kung Nawl', desc: 'Indo-Myanmar border viewpoint with terraced farmlands', type: 'Viewpoint' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TRIPURA — Land of Fourteen Gods
  // ══════════════════════════════════════════════════════════
  {
    state: 'Tripura',
    nickname: 'Land of Fourteen Gods',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #9333EA, #D946EF)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a77a5a6ad?q=80&w=800&auto=format&fit=crop',
    description: 'Rock-cut sculptures at Unakoti, Neermahal water palace, ancient temples, and the harmonious coexistence of 19 tribal communities.',
    cities: [
      {
        name: 'Agartala',
        type: 'State Capital',
        places: [
          { name: 'Ujjayanta Palace', desc: 'White Mughal-style royal palace now housing a state museum', type: 'Heritage' },
          { name: 'Neermahal', desc: 'India\'s largest water palace — Mughal-Hindu fusion in Rudrasagar Lake', type: 'Heritage' },
          { name: 'Tripura Sundari Temple', desc: 'One of 51 Shakti Peethas — revered Hindu pilgrimage', type: 'Temple' },
          { name: 'Sepahijala Wildlife Sanctuary', desc: 'Sanctuary with spectacled monkeys, clouded leopards, and botanical garden', type: 'Wildlife' },
          { name: 'Heritage Park', desc: 'Park with replicas of historical monuments of Tripura', type: 'Heritage' },
        ]
      },
      {
        name: 'Unakoti',
        type: 'Rock Cut Wonders',
        places: [
          { name: 'Unakoti Rock Carvings', desc: 'Mysterious 7th-9th century rock-cut Shiva sculptures — "one less than a crore"', type: 'Heritage' },
          { name: 'Unakoti Waterfall', desc: 'Seasonal waterfall near the rock carvings — scenic setting', type: 'Nature' },
          { name: 'Chabimura', desc: 'Rock carvings on Gomati riverbank — 101 inscribed figures', type: 'Heritage' },
        ]
      },
    ]
  },
];

export default indiaDestinations;

// Helper to get total counts
export function getStats(data) {
  let totalPlaces = 0;
  let totalCities = 0;
  data.forEach(state => {
    totalCities += state.cities.length;
    state.cities.forEach(city => {
      totalPlaces += city.places.length;
    });
  });
  return { totalStates: data.length, totalCities, totalPlaces };
}
