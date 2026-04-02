(function () {
  const videos = Array.from(document.querySelectorAll('.hero-video'));
  if (!videos.length) return;

  let current = 0;
  const TRANSITION_TIME = 0.6; // seconds

  videos[current].classList.add('active');
  videos[current].play();

  function switchTo(nextIndex) {
    const prev = videos[current];
    const next = videos[nextIndex];

    next.currentTime = 0;
    next.classList.add('active');
    next.play().catch(() => {});

    setTimeout(() => {
      prev.classList.remove('active');
      prev.pause();
      prev.currentTime = 0;
    }, TRANSITION_TIME * 1000);

    current = nextIndex;
  }

  videos.forEach((video, idx) => {
    video.addEventListener('timeupdate', () => {
      if (
        video === videos[current] &&
        video.duration &&
        video.currentTime >= video.duration - TRANSITION_TIME
      ) {
        const nextIndex = (idx + 1) % videos.length;
        switchTo(nextIndex);
      }
    });
  });
})();


const spots = [
  { id:1,  name:"Chocolate Hills",  location:"Bohol, Visayas",              region:"visayas",  desc:"Over 1,200 perfectly cone-shaped hills stretching across Carmen, Bohol. They turn chocolate brown in the dry season — one of the Philippines' most iconic natural wonders.",                                                                                      img:"https://i.pinimg.com/originals/89/5d/d1/895dd1a5e2a204dcceaf0abd61ec8a62.jpg",                                                                                                                                                                                        season:"Nov – May",    fame:"Geological Formation",        activity:"Sightseeing & Hiking",         tags:["bohol","hills","nature","iconic","visayas"] },
  { id:2,  name:"El Nido",          location:"Palawan, Luzon",              region:"luzon",    desc:"Dramatic limestone karst cliffs, crystal-clear lagoons, and pristine white sand beaches. El Nido is often ranked among the world's most beautiful islands.",                                                                                                       img:"https://media.istockphoto.com/id/1200568289/photo/blue-lagoon-in-coron-island-palawan-philippines-close-to-kayangan-lake.jpg?s=170667a&w=0&k=20&c=WqOEz2e5fYY1tDQzNaxTD1kPzQjR8yk1XAT_iEHcSWM=",                                                            season:"Nov – April",  fame:"Lagoons & Beaches",           activity:"Island Hopping",               tags:["palawan","beach","lagoon","island","luzon","el nido"] },
  { id:3,  name:"Mayon Volcano",    location:"Albay, Luzon",                region:"luzon",    desc:"Known as the 'Perfect Cone', Mayon Volcano is the most active volcano in the Philippines. Its near-perfect symmetry set against the lush Bicol landscape is breathtaking.",                                                                                       img:"https://tse4.mm.bing.net/th/id/OIP.dgfHBLL0HaYhRw1nOxK74gHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",                                                                                                                                                                          season:"Dec – March",  fame:"Perfect Cone Volcano",        activity:"Trekking & Photography",       tags:["albay","volcano","mayon","luzon","bicol"] },
  { id:4,  name:"Boracay Island",   location:"Aklan, Visayas",              region:"visayas",  desc:"Home to the world-famous White Beach, Boracay dazzles with powdery white sand and electric-blue waters. Its vibrant nightlife and water sports make it a favorite for all travelers.",                                                                             img:"https://th.bing.com/th/id/R.1c5e6aa2c0d3c3ee81fc8b57b3074701?rik=LTga5HjXCafx6Q&riu=http%3a%2f%2fattracttour.com%2fwp-content%2fuploads%2f2012%2f12%2fboracay-beach.jpg&ehk=0%2b9xbV4%2fpRpXWs8Ufa39mgfsyTw%2fIVol7pRM9Yi9TgU%3d&risl=&pid=ImgRaw&r=0",          season:"Nov – May",    fame:"White Beach",                 activity:"Water Sports & Relaxation",    tags:["boracay","beach","aklan","visayas","island","white beach"] },
  { id:5,  name:"Intramuros",       location:"Manila, Luzon",               region:"luzon",    desc:"The 'Walled City' of Manila preserves centuries of Spanish colonial heritage. Cobblestone streets, centuries-old churches, and fort ramparts transport visitors back to 16th-century Philippines.",                                                                img:"https://cdn.getyourguide.com/img/tour/5e144e5712325.jpeg/148.jpg",                                                                                                                                                                                                      season:"Nov – Feb",    fame:"Spanish Colonial Heritage",   activity:"History & Culture Tour",       tags:["manila","intramuros","history","heritage","luzon","fort","walled city"] },
  { id:6,  name:"Siargao Island",   location:"Surigao del Norte, Mindanao", region:"mindanao", desc:"The surf capital of the Philippines, Siargao is famed for Cloud 9 — one of Asia's best surfing waves. Beyond the waves lie emerald lagoons, mangrove forests, and island escapades.",                                                                             img:"https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/01/21214029/the-philippines_siargo_0_feature.jpeg",                                                                                                                                             season:"Aug – Nov",    fame:"Cloud 9 Surfing",             activity:"Surfing & Island Hopping",     tags:["siargao","surf","mindanao","island","surigao","cloud 9"] },
  { id:7,  name:"Batanes Islands",  location:"Batanes, Luzon",              region:"luzon",    desc:"The northernmost province of the Philippines feels like another world — rolling green hills, stone houses, and cliffs meeting the Pacific Ocean. A UNESCO candidate site.",                                                                                         img:"https://pinaywise.com/wp-content/uploads/2024/04/Marlboro-Country-1024x1024.jpg",                                                                                                                                                                                       season:"March – June", fame:"Stone Houses & Scenery",      activity:"Biking & Photography",         tags:["batanes","luzon","hills","stone","scenic","pacific","ivatan"] },
  { id:8,  name:"Tubbataha Reef",   location:"Sulu Sea, Palawan",           region:"visayas",  desc:"A UNESCO World Heritage Site and one of the planet's premier diving destinations. Tubbataha hosts over 360 coral species and 600+ fish species in pristine, untouched waters.",                                                                                    img:"https://philippinetourismusa.com/wp-content/uploads/2016/10/228784-tubbataha-reef-1200x750.jpg",                                                                                                                                                                        season:"March – June", fame:"Coral Reef Diving",           activity:"Scuba Diving & Snorkeling",    tags:["tubbataha","reef","palawan","diving","underwater","unesco","coral"] },
  { id:9,  name:"Camiguin Island",  location:"Camiguin, Mindanao",          region:"mindanao", desc:"Called the 'Island Born of Fire', Camiguin packs more volcanoes per square kilometre than any place on earth. It also offers sunken cemeteries, white sand bars, and warm springs.",                                                                               img:"https://i.pinimg.com/originals/1f/08/fc/1f08fcf3fef8f742b6ec091bd8726026.jpg",                                                                                                                                                                                         season:"March – May",  fame:"Volcanoes & Hot Springs",     activity:"Swimming & Hiking",            tags:["camiguin","mindanao","volcano","island","hot spring","sunken cemetery"] },
  { id:10, name:"Vigan City",       location:"Ilocos Sur, Luzon",           region:"luzon",    desc:"One of the best-preserved examples of Spanish colonial town planning in Asia. Vigan's Calle Crisologo is lined with ancestral houses, calesas, and cobblestone romance.",                                                                                          img:"https://images.squarespace-cdn.com/content/v1/5adf25b575f9ee4695083a1a/1668778209964-7E0BWC7XH8K519J0MF8I/Depositphotos_173180652_XL.jpg",                                                                                                                           season:"Nov – April",  fame:"Colonial Heritage Street",    activity:"Cultural Walk & Culinary Tour",tags:["vigan","ilocos","luzon","heritage","colonial","history","calesa"] },
  { id:11, name:"Coron, Palawan",   location:"Palawan, Luzon",              region:"luzon",    desc:"Coron is renowned for crystal-clear lakes perched above sea level, World War II shipwrecks waiting to be explored, and dramatic limestone cliffs soaring over turquoise coves.",                                                                                   img:"https://theworldtravelguy.com/wp-content/uploads/2020/02/DJI_0195.jpg",                                                                                                                                                                                                 season:"Nov – May",    fame:"Shipwreck Diving & Lakes",    activity:"Diving & Kayaking",            tags:["coron","palawan","luzon","diving","lake","shipwreck","island","ww2"] },
  { id:12, name:"Mount Pulag",      location:"Benguet, Luzon",              region:"luzon",    desc:"The third-highest peak in the Philippines, Mount Pulag is famous for its stunning sea of clouds and unique mossy forest ecosystem. The sunrise above the clouds is unforgettable.",                                                                                 img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifsJVjFnk3UdxJA-dntfabk3kAzMB0gbJ2VSFmRmf_cUSKr0_bUSCGXy4IzbiUXQGdQXAVqtKvHEx0SyXwgQo5pzp742acJyLvyJ9x5miMCPz77cRppBo1o76udUbDEIxTB-lw9_ghV7d4g1G7G1ZjJbG-DCBmed3VKxVPS81c5tsf3fIRIm4XFOpDAL8/s1200/Mt-Pulag-Sea-of-Clouds-1.jpeg", season:"Oct – March",  fame:"Sea of Clouds",               activity:"Mountaineering & Camping",     tags:["pulag","mountain","benguet","luzon","hiking","clouds","cordillera","trekking"] },
  { id:13, name:"Davao City",       location:"Davao del Sur, Mindanao",     region:"mindanao", desc:"Gateway to Philippine Eagle encounters and Mount Apo, the country's highest peak. Davao is also famed for exotic fruits like durian, and its clean and orderly streets.",                                                                                          img:"https://th.bing.com/th/id/R.608986363c1b4bff8ff7e610606f4745?rik=%2fRq23XLSrW%2favg&riu=http%3a%2f%2fwww.osomnimedia.com%2fwp-content%2fuploads%2f2015%2f03%2fct2.jpg&ehk=oYZtuFtyPvqaDuphJHTeb9%2fQ9cTzijOLF2Fn2HG8Epo%3d&risl=&pid=ImgRaw&r=0",                  season:"All Year",     fame:"Philippine Eagle & Mt. Apo",  activity:"Wildlife Watching & Trekking", tags:["davao","mindanao","eagle","mountain","apo","city","durian"] },
  { id:14, name:"Hundred Islands",  location:"Pangasinan, Luzon",           region:"luzon",    desc:"A national park composed of 124 islands and islets scattered across Lingayen Gulf. Explore limestone caves, turquoise coves, and snorkeling spots with vibrant marine life.",                                                                                       img:"https://boomersdaily.files.wordpress.com/2021/07/aerial-views-hundred-islands-national-park-philippines-4k-video-july-5-2021.jpg",                                                                                                                                      season:"March – June", fame:"Island National Park",        activity:"Boating & Snorkeling",         tags:["hundred islands","pangasinan","luzon","islands","national park","beach","caves"] },
  { id:15, name:"Cebu City",        location:"Cebu, Visayas",               region:"visayas",  desc:"The Queen City of the South blends history and modernity. Visit Magellan's Cross and Basilica Minore del Santo Niño, then dive into nightlife and thresher shark diving in Moalboal.",                                                                             img:"https://images.unsplash.com/photo-1505261476952-32e25cbfc755?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",                                                                                                                                                                        season:"All Year",     fame:"History & Whale Sharks",      activity:"Culture, Diving & Nightlife",  tags:["cebu","visayas","city","history","diving","oslob","whale shark","sinulog"] },
];

const festivals = [
  { id:"f1",  name:"Sinulog Festival",       location:"Cebu City, Visayas",           month:"January",         desc:"One of the grandest festivals in the Philippines, Sinulog honors the Santo Niño with vibrant street dancing, elaborate costumes, and a massive parade drawing millions of devotees and tourists.", img:"./assets/images/sinulog.jpg",     tags:["sinulog","cebu","january","dance","religious","street","visayas","santo nino","cultural"] },
  { id:"f2",  name:"Ati-Atihan Festival",    location:"Kalibo, Aklan, Visayas",       month:"January",         desc:"Known as the 'Mother of All Philippine Festivals,' Ati-Atihan features revelers painted in black soot dancing to drums, celebrating the Sto. Niño with wild, jubilant energy.",                  img:"https://images.pexels.com/photos/15313428/pexels-photo-15313428.jpeg", tags:["ati-atihan","aklan","kalibo","january","tribal","drums","visayas","cultural","music"] },
  { id:"f3",  name:"MassKara Festival",      location:"Bacolod City, Visayas",        month:"October",         desc:"Born from tragedy, MassKara is Bacolod's answer to adversity — a festival of smiling masks and exuberant street dancing that earned Bacolod its title as the 'City of Smiles.'",               img:"./assets/images/maskara.jpg",     tags:["masskara","bacolod","october","masks","dance","art","visayas","smiles","resilience"] },
  { id:"f4",  name:"Pahiyas Festival",       location:"Lucban, Quezon, Luzon",        month:"May",             desc:"A dazzling harvest festival where houses in Lucban are decorated with colorful kiping rice wafers, fruits, and vegetables in thanksgiving to San Isidro Labrador, patron of farmers.",           img:"https://www.rappler.com/tachyon/2025/05/pahiyas-2025-1.jpg", tags:["pahiyas","lucban","quezon","may","harvest","luzon","colors","folk art","kiping","farmers"] },
  { id:"f5",  name:"Kadayawan Festival",     location:"Davao City, Mindanao",         month:"August",          desc:"Davao's week-long celebration of life, nature's bounty, and the rich heritage of its 11 indigenous tribes, highlighted by floral parades, street dancing, and cultural showcases.",               img:"https://lakbaypinas.com/wp-content/uploads/2024/09/457297862_8195285397198218_3005208262213019372_n-1024x683.jpg", tags:["kadayawan","davao","august","mindanao","flowers","indigenous","tribal","heritage","parade"] },
  { id:"f6",  name:"Panagbenga Festival",    location:"Baguio City, Luzon",           month:"February",        desc:"The 'Flower Festival' of Baguio fills the City of Pines with spectacular floats blanketed in fresh blooms, grand street dancing, and a month-long celebration of highland culture.",               img:"./assets/images/penagbenga.jpg",  tags:["panagbenga","baguio","february","luzon","flowers","parade","highland","cordillera","floats"] },
  { id:"f7",  name:"Moriones Festival",      location:"Marinduque, Luzon",            month:"April (Holy Week)",desc:"During Holy Week, Marinduque transforms as participants don elaborate Roman soldier masks and costumes to reenact the legend of Longinus — a uniquely Filipino passion play.",                    img:"./assets/images/moriones.jpg",    tags:["moriones","marinduque","april","holy week","luzon","religious","masks","theater","roman"] },
  { id:"f8",  name:"Dinagyang Festival",     location:"Iloilo City, Visayas",         month:"January",         desc:"Iloilo's answer to Sinulog, Dinagyang is a UNESCO-recognized festival featuring warrior-themed dance troupes in elaborate body paint and costumes performing to thunderous drum beats.",           img:"https://www.raindeocampo.com/wp-content/uploads/2024/11/462539339_8878072175584283_7433859542571841568_n.jpg", tags:["dinagyang","iloilo","january","visayas","unesco","warrior","dance","tribal","drums"] },
  { id:"f9",  name:"Lanzones Festival",      location:"Camiguin, Mindanao",           month:"October",         desc:"Camiguin's beloved harvest festival where locals adorn themselves in lanzones fruit costumes and celebrate the island's famous sweet harvest with street dancing and trade fairs.",                img:"https://pia.gov.ph/wp-content/uploads/2024/07/LF1.jpg", tags:["lanzones","camiguin","october","mindanao","harvest","island","tropical","fruit","dance"] },
  { id:"f10", name:"Giant Lantern Festival", location:"San Fernando, Pampanga, Luzon",month:"December",        desc:"The 'Christmas Capital of the Philippines' hosts a dazzling competition of giant star-shaped lanterns — called parol — that spin and light up the night sky with kaleidoscopic brilliance.",     img:"https://www.rappler.com/tachyon/2022/12/san-fernando-pampanga-114th-giant-lantern-festival-gerald-gloton.jpg", tags:["lantern","san fernando","pampanga","december","luzon","christmas","parol","lights","holiday"] },
];

// ── STATE ──
let activeRegion  = "all";
let currentQuery  = "";

// ── DOM REFS ──
const searchInput  = document.getElementById("searchInput");
const searchBtn    = document.getElementById("searchBtn");
const clearBtn     = document.getElementById("clearBtn");
const cardGrid     = document.getElementById("cardGrid");
const noResults    = document.getElementById("noResults");
const resultsTitle = document.getElementById("resultsTitle");
const resultsCount = document.getElementById("resultsCount");
const pills        = document.querySelectorAll(".pill");
const festTrack    = document.getElementById("festTrack");
const festSection  = document.querySelector(".festivals-section");
const festHeading  = document.querySelector(".festivals-header h2");
const festBadge    = document.querySelector(".fest-badge");


renderCards(spots);
updateTitle(spots.length);

pills.forEach(pill => {
  pill.addEventListener("click", () => {
    pills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activeRegion = pill.dataset.region;
    applyFilters();
  });
});

// ── SEARCH EVENTS ──
searchBtn.addEventListener("click", doSearch);
searchInput.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });
searchInput.addEventListener("input", () => {
  clearBtn.classList.toggle("visible", searchInput.value.length > 0);
  // Live search
  currentQuery = searchInput.value.trim().toLowerCase();
  applyFilters();
});
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.classList.remove("visible");
  currentQuery = "";
  applyFilters();
});

function doSearch() {
  currentQuery = searchInput.value.trim().toLowerCase();
  applyFilters();
  document.querySelector(".main-content").scrollIntoView({ behavior: "smooth" });
}

function applyFilters() {
  const q = currentQuery;

  // --- Destinations ---
  let filteredSpots = spots;
  if (activeRegion !== "all") {
    filteredSpots = filteredSpots.filter(s => s.region === activeRegion);
  }
  if (q) {
    filteredSpots = filteredSpots.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.season.toLowerCase().includes(q) ||
      s.fame.toLowerCase().includes(q) ||
      s.activity.toLowerCase().includes(q) ||
      s.tags.some(t => t.includes(q))
    );
  }

  // --- Festivals ---
  let filteredFests = festivals;
  if (q) {
    filteredFests = filteredFests.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.location.toLowerCase().includes(q) ||
      f.month.toLowerCase().includes(q) ||
      f.desc.toLowerCase().includes(q) ||
      f.tags.some(t => t.includes(q))
    );
  }

  if (activeRegion !== "all") {
    filteredFests = filteredFests.filter(f =>
      f.location.toLowerCase().includes(activeRegion)
    );
  }

  updateTitle(filteredSpots.length, filteredFests.length);
  renderCards(filteredSpots);
  renderFestivals(filteredFests, q);
}

// ── UPDATE HEADER ──
function updateTitle(spotCount, festCount = festivals.length) {
  const total = spotCount + festCount;

  if (currentQuery) {
    resultsTitle.textContent = `Results for "${searchInput.value.trim()}"`;
    resultsCount.textContent = total > 0
      ? `${spotCount} place${spotCount !== 1 ? "s" : ""} · ${festCount} festival${festCount !== 1 ? "s" : ""}`
      : "";
  } else if (activeRegion !== "all") {
    const labels = { luzon:"Luzon", visayas:"Visayas", mindanao:"Mindanao" };
    resultsTitle.textContent = `Destinations in ${labels[activeRegion]}`;
    resultsCount.textContent = spotCount > 0 ? `${spotCount} place${spotCount !== 1 ? "s" : ""}` : "";
  } else {
    resultsTitle.textContent = "Featured Destinations";
    resultsCount.textContent = spotCount > 0 ? `${spotCount} places` : "";
  }
}

// ── RENDER DESTINATION CARDS ──
function renderCards(data) {
  cardGrid.innerHTML = "";
  if (data.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");
  data.forEach((spot, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 55}ms`;
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${spot.img}" alt="${spot.name}" loading="lazy"/>
        <div class="card-img-overlay"></div>
        <span class="card-region-badge badge-${spot.region}">${capitalize(spot.region)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${highlight(spot.name)}</h3>
        <p class="card-location">📍 ${highlight(spot.location)}</p>
        <p class="card-desc">${highlight(spot.desc)}</p>
      </div>
      <div class="card-footer">
        <span class="card-activity">🏄 ${spot.activity}</span>
        <span class="card-cta">Explore →</span>
      </div>
    `;
    card.addEventListener("click", () => openModal(spot));
    cardGrid.appendChild(card);
  });
}

// ── RENDER FESTIVALS ──
function renderFestivals(data, q) {
  // Show/hide entire section
  if (data.length === 0 && q) {
    festSection.style.display = "none";
    return;
  }
  festSection.style.display = "";

  // Update badge count
  festBadge.textContent = `${data.length} Celebration${data.length !== 1 ? "s" : ""}`;

  // Update heading during search
  if (q) {
    festHeading.innerHTML = `Festival <em>Results</em>`;
  } else {
    festHeading.innerHTML = `Featured <em>Festivals</em>`;
  }

  festTrack.innerHTML = "";
  data.forEach((fest, i) => {
    const card = document.createElement("div");
    card.className = "fest-card";
    card.style.animationDelay = `${i * 60}ms`;
    card.innerHTML = `
      <img src="${fest.img}" alt="${fest.name}" loading="lazy"/>
      <div class="fest-card-overlay"></div>
      <div class="fest-card-content">
        <span class="fest-month">${highlight(fest.month)}</span>
        <h3 class="fest-name">${highlight(fest.name)}</h3>
        <p class="fest-location">📍 ${highlight(fest.location)}</p>
        <p class="fest-desc">${highlight(fest.desc)}</p>
        <span class="fest-tag">${fest.tags.slice(0,3).map(t => capitalize(t)).join(" · ")} ↗</span>
      </div>
    `;
    festTrack.appendChild(card);
  });
}

// ── HIGHLIGHT MATCHES ──
function highlight(text) {
  if (!currentQuery || currentQuery.length < 2) return text;
  const escaped = currentQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'),
    '<mark style="background:rgba(232,169,74,.35);color:inherit;border-radius:2px;padding:0 1px;">$1</mark>'
  );
}

// ── MODAL ──
function openModal(spot) {
  document.getElementById("modalImg").src      = spot.img;
  document.getElementById("modalImg").alt      = spot.name;
  document.getElementById("modalTitle").textContent    = spot.name;
  document.getElementById("modalLocation").textContent = "📍 " + spot.location;
  document.getElementById("modalDesc").textContent     = spot.desc;
  document.getElementById("modalSeason").textContent   = spot.season;
  document.getElementById("modalFame").textContent     = spot.fame;
  document.getElementById("modalActivity").textContent = spot.activity;
  const tag = document.getElementById("modalRegionTag");
  tag.textContent = capitalize(spot.region);
  tag.className   = `modal-region-tag badge-${spot.region}`;
  document.getElementById("modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ── HELPERS ──
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function resetSearch() {
  searchInput.value = "";
  clearBtn.classList.remove("visible");
  currentQuery = "";
  activeRegion = "all";
  pills.forEach(p => p.classList.remove("active"));
  document.querySelector('[data-region="all"]').classList.add("active");
  renderCards(spots);
  renderFestivals(festivals, "");
  updateTitle(spots.length, festivals.length);
}

(function () {
  const track = document.getElementById('festTrack');
  const prev  = document.getElementById('festPrev');
  const next  = document.getElementById('festNext');
  if (!track || !prev || !next) return;

  const cardW = () => {
    const c = track.querySelector('.fest-card');
    return c ? c.offsetWidth + 22 : 360;
  };

  next.addEventListener('click', () => track.scrollBy({ left: cardW(), behavior: 'smooth' }));
  prev.addEventListener('click', () => track.scrollBy({ left: -cardW(), behavior: 'smooth' }));

  let isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', e => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mouseup',    () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mousemove',  e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
})();