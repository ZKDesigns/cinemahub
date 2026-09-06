const genres = [
  {
    id: 'action',
    name: 'Akční',
    emoji: '💥',
    color: '#e50914',
    short: 'Dynamické scény, honičky, výbuchy a hrdinské činy',
    description: 'Žánr, ve kterém je důraz kladen na fyzickou akci: souboje, přestřelky, honičky a velkolepé kousky. Hrdina obvykle překonává překážky silou a obratností.',
    movies: [
      'Smrtonosná zbraň / Die Hard (1988)',
      'Matrix (1999)',
      'John Wick (2014)',
      'Šílený Max: Zběsilá cesta (2015)',
      'Mission: Impossible – Fallout (2018)'
    ],
    tags: ['akce', 'kousky', 'hrdinové']
  },
  {
    id: 'comedy',
    name: 'Komedie',
    emoji: '😂',
    color: '#f5c518',
    short: 'Humor, vtipné dialogy a situace, které vyvolávají smích',
    description: 'Žánr, jehož cílem je pobavit diváka. Může být situační, satirický, romantický nebo absurdní. Dobrá komedie zvedá náladu a často zesměšňuje společenské jevy.',
    movies: [
      'Někdo to rád horké (1959)',
      'Sám doma (1990)',
      'Velký Lebowski (1998)',
      'Hangover (2009)',
      'Nedotknutelní (2011)'
    ],
    tags: ['humor', 'satira', 'lehkost']
  },
  {
    id: 'drama',
    name: 'Drama',
    emoji: '🎭',
    color: '#8b5cf6',
    short: 'Hluboké emoce, lidské osudy a vážná témata',
    description: 'Vážný žánr, který zkoumá konflikty, charaktery a životní situace. Dramata často řeší témata lásky, ztráty, morální volby a společenských problémů.',
    movies: [
      'Kmotr (1972)',
      'Schindlerův seznam (1993)',
      'Vykoupení z věznice Shawshank (1994)',
      'Forrest Gump (1994)',
      'Parazit (2019)'
    ],
    tags: ['emoce', 'charakter', 'život']
  },
  {
    id: 'horror',
    name: 'Horor',
    emoji: '👻',
    color: '#22c55e',
    short: 'Strach, napětí a nadpřirozeno (nebo úplně reálné)',
    description: 'Žánr, který má vyvolat strach a úzkost. Může být psychologický, slasher, nadpřirozený nebo body-horror. Dobrý horor pracuje s očekáváními diváka.',
    movies: [
      'Psycho (1960)',
      'Osvícení (1980)',
      'Vymítač ďábla (1973)',
      'Hereditary (2018)',
      'Tiché místo (2018)'
    ],
    tags: ['strach', 'suspense', 'atmosféra']
  },
  {
    id: 'scifi',
    name: 'Sci-fi',
    emoji: '🚀',
    color: '#3b82f6',
    short: 'Věda, technologie budoucnosti a alternativní světy',
    description: 'Žánr založený na vědeckých nebo pseudovědeckých nápadech: vesmír, umělá inteligence, cestování časem, alternativní reality. Často klade filozofické otázky.',
    movies: [
      '2001: Vesmírná odysea (1968)',
      'Blade Runner (1982)',
      'Interstellar (2014)',
      'Příchozí (2016)',
      'Duna (2021)'
    ],
    tags: ['vesmír', 'technologie', 'budoucnost']
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    emoji: '🧙',
    color: '#a855f7',
    short: 'Magie, mytická stvoření a epické světy',
    description: 'Žánr s prvky kouzel, mytologie a smyšlených světů. Na rozdíl od sci-fi zde mohou být přírodní zákony porušovány magií.',
    movies: [
      'Pán prstenů: Společenstvo Prstenu (2001)',
      'Harry Potter a Kámen mudrců (2001)',
      'Letopisy Narnie (2005)',
      'Panův labyrint (2006)',
      'Avatar (2009)'
    ],
    tags: ['magie', 'světy', 'dobrodružství']
  },
  {
    id: 'thriller',
    name: 'Thriller',
    emoji: '🔪',
    color: '#ef4444',
    short: 'Napětí, intriky a neočekávané zvraty',
    description: 'Žánr, který drží diváka v neustálém napětí. Často se mísí s detektivkou, krimem nebo psychologií. Klíčem je suspense a nepředvídatelnost.',
    movies: [
      'Mlčení jehňátek (1991)',
      'Sedm (1995)',
      'Ostrov prokletých (2010)',
      'Zmizelá (2014)',
      'Parazit (prvky thrilleru, 2019)'
    ],
    tags: ['suspense', 'intriky', 'napětí']
  },
  {
    id: 'romance',
    name: 'Romantika / Melodrama',
    emoji: '💕',
    color: '#ec4899',
    short: 'Láska, city a vztahy mezi hrdiny',
    description: 'Žánr, v jehož centru jsou romantické vztahy. Může být lehký a dojemný nebo hluboký a tragický. Často se překrývá s dramatem a komedií.',
    movies: [
      'Titanic (1997)',
      'Zápisník jedné lásky (2004)',
      'La La Land (2016)',
      'Dokud tě nepřežiju (2016)',
      'Svatba po italsku (1964)'
    ],
    tags: ['láska', 'city', 'vztahy']
  },
  {
    id: 'animation',
    name: 'Animace',
    emoji: '🎨',
    color: '#06b6d4',
    short: 'Kreslené, loutkové a počítačové světy pro všechny věkové kategorie',
    description: 'Žánr (a technika), kde je svět vytvářen umělci. Dnes animace není jen dětské pohádky, ale i vážná díla pro dospělé s hlubokými tématy.',
    movies: [
      'Cesta do fantazie (2001)',
      'WALL·E (2008)',
      'V hlavě (2015)',
      'Spider-Man: Paralelní světy (2018)',
      'Duše (2020)'
    ],
    tags: ['animák', 'umění', 'fantazie']
  },
  {
    id: 'documentary',
    name: 'Dokumentární',
    emoji: '📽️',
    color: '#64748b',
    short: 'Skutečné události, lidé a fakta bez fikce',
    description: 'Žánr, který ukazuje skutečný život, události a lidi. Dokumentární film může být výzkumný, poetický, investigativní nebo observační.',
    movies: [
      'Muž s kinoaparátem (1929)',
      'Fahrenheit 9/11 (2004)',
      'Blackfish (2013)',
      'Můj učitel chobotnice (2020)',
      'Free Solo (2018)'
    ],
    tags: ['realita', 'fakta', 'historie']
  },
  {
    id: 'adventure',
    name: 'Dobrodružný',
    emoji: '🗺️',
    color: '#f97316',
    short: 'Cesty, objevy a překonávání nebezpečí',
    description: 'Žánr o cestování, hledání pokladů a zkoumání neznámého. Často se kombinuje s akcí a fantasy. Hlavní je pocit objevování nového světa.',
    movies: [
      'Indiana Jones: Dobyvatelé ztracené archy (1981)',
      'Jurský park (1993)',
      'Piráti z Karibiku (2003)',
      'Pí a jeho život (2012)',
      'Jumanji (1995 / 2017)'
    ],
    tags: ['cesty', 'objevy', 'riziko']
  },
  {
    id: 'crime',
    name: 'Krimi / Noir',
    emoji: '🕶️',
    color: '#1e293b',
    short: 'Zločiny, vyšetřování a temná stránka města',
    description: 'Žánr o zločinech, policii, mafií a morálních dilematech. Klasický noir se vyznačuje stylem: stíny, osudové ženy, cyničtí detektivové.',
    movies: [
      'Kmotr (1972)',
      'Pulp Fiction (1994)',
      'Zakázané ovoce (The Departed, 2006)',
      'Město Boha (2002)',
      'Drive (2011)'
    ],
    tags: ['zločin', 'mafie', 'noir']
  }
];

// DOM elements
const genresGrid = document.getElementById('genresGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('genreModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const themeToggle = document.getElementById('themeToggle');

// Render cards
function renderGenres(list) {
  genresGrid.innerHTML = '';
  
  if (list.length === 0) {
    noResults.hidden = false;
    return;
  }
  
  noResults.hidden = true;
  
  list.forEach(genre => {
    const card = document.createElement('article');
    card.className = 'genre-card';
    card.style.setProperty('--card-color', genre.color);
    card.innerHTML = `
      <span class="genre-emoji">${genre.emoji}</span>
      <h3 class="genre-name">${genre.name}</h3>
      <p class="genre-short">${genre.short}</p>
    `;
    card.addEventListener('click', () => openModal(genre));
    genresGrid.appendChild(card);
  });
}

// Open modal
function openModal(genre) {
  document.getElementById('modalEmoji').textContent = genre.emoji;
  document.getElementById('modalTitle').textContent = genre.name;
  document.getElementById('modalDescription').textContent = genre.description;
  
  const moviesList = document.getElementById('modalMovies');
  moviesList.innerHTML = genre.movies.map(m => `<li>${m}</li>`).join('');
  
  const tags = document.getElementById('modalTags');
  tags.innerHTML = genre.tags.map(t => `<span class="tag">${t}</span>`).join('');
  
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

// Search
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  
  if (!query) {
    renderGenres(genres);
    return;
  }
  
  const filtered = genres.filter(g => 
    g.name.toLowerCase().includes(query) ||
    g.short.toLowerCase().includes(query) ||
    g.tags.some(t => t.toLowerCase().includes(query)) ||
    g.movies.some(m => m.toLowerCase().includes(query))
  );
  
  renderGenres(filtered);
});

// Theme toggle
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Init
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);
renderGenres(genres);