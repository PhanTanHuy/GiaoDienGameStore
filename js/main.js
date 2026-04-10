const currentPage = document.body.dataset.page;
const app = document.getElementById("app");

const users = [
  {
    id: 1,
    username: "nova",
    name: "Nova Vale",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    bio: "Indie curator sharing atmospheric builds, narrative experiments, and cozy worlds.",
    blocked: false,
    role: "player"
  },
  {
    id: 2,
    username: "pixelforge",
    name: "Pixel Forge Studio",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    bio: "Small dev team building immersive survival and action RPG prototypes.",
    blocked: false,
    role: "developer"
  },
  {
    id: 3,
    username: "mod.aria",
    name: "Aria Tran",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    bio: "Community moderator focused on curation quality and creator support.",
    blocked: false,
    role: "admin"
  }
];

const games = [
  {
    id: 1,
    title: "Neon Drift",
    developer: "Pixel Forge Studio",
    price: 0,
    rating: 4.7,
    likes: 1230,
    dislikes: 94,
    favorites: 420,
    downloads: 12400,
    views: 90400,
    revenue: 0,
    tags: ["Racing", "Arcade", "Cyberpunk"],
    status: "featured",
    description: "High-speed synthwave racing through shifting city lanes, reactive obstacles, and browser-ready challenge tracks.",
    longDescription: "Neon Drift is a stylish arcade racer where every lap reacts to your skill level. Dodge traffic, chain boosts, and unlock maps in a glowing world built for short, satisfying sessions.",
    heroImage: "Image/Resident Evil Requiem.jpg",
    gallery: [
      "Image/Resident Evil Requiem.jpg",
      "Image/Resident Evil Requiem.jpg",
      "Image/Resident Evil Requiem.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Ashfall Keep",
    developer: "Grey Lantern",
    price: 14.99,
    rating: 4.9,
    likes: 2130,
    dislikes: 103,
    favorites: 712,
    downloads: 8600,
    views: 120500,
    revenue: 24900,
    tags: ["RPG", "Adventure", "Story"],
    status: "trending",
    description: "A dark fantasy action RPG with tactical boss fights and a beautifully ruined fortress city.",
    longDescription: "Explore a vertical fortress kingdom filled with secrets, branching quests, and handcrafted encounters. Ashfall Keep mixes soulslike tension with strong environmental storytelling.",
    heroImage: "Image/The Last Faith.jpg",
    gallery: [
      "Image/The Last Faith.jpg",
      "Image/The Last Faith.jpg",
      "Image/The Last Faith.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Cozy Circuit",
    developer: "Nova Vale",
    price: 4.99,
    rating: 4.3,
    likes: 882,
    dislikes: 41,
    favorites: 301,
    downloads: 4100,
    views: 39000,
    revenue: 6900,
    tags: ["Puzzle", "Cozy", "Simulation"],
    status: "new",
    description: "Repair tiny robot neighborhoods by solving grid-based energy puzzles at your own pace.",
    longDescription: "Cozy Circuit combines cute builder vibes with thoughtful puzzle chains. Each level asks you to restore power, decorate districts, and help a soft-spoken robot cast thrive.",
    heroImage: "Image/BattleField 6.jpg",
    gallery: [
      "Image/BattleField 6.jpg",
      "Image/BattleField 6.jpg",
      "Image/BattleField 6.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Void Signal",
    developer: "Signal Cabin",
    price: 0,
    rating: 4.5,
    likes: 1544,
    dislikes: 67,
    favorites: 512,
    downloads: 19300,
    views: 148000,
    revenue: 0,
    tags: ["Horror", "Sci-Fi", "Story"],
    status: "trending",
    description: "Narrative sci-fi horror told through intercepted transmissions and decaying station logs.",
    longDescription: "Reconstruct what happened aboard a silent relay station. Void Signal leans into unsettling UI, voice fragments, and investigative exploration with short but memorable chapters.",
    heroImage: "Image/Cyberpunk2077.jpg",
    gallery: [
      "Image/Cyberpunk2077.jpg",
      "Image/Cyberpunk2077.jpg",
      "Image/Cyberpunk2077.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Skyfarer Tactics",
    developer: "Cloudpath",
    price: 19.99,
    rating: 4.8,
    likes: 2920,
    dislikes: 120,
    favorites: 940,
    downloads: 7200,
    views: 112400,
    revenue: 54000,
    tags: ["Strategy", "Turn-Based", "Fantasy"],
    status: "featured",
    description: "Squad-based tactical battles set across floating islands and airship routes.",
    longDescription: "Build a crew, optimize turn order, and defend trade lanes in a strategy title that rewards positioning, status combos, and long-form campaign planning.",
    heroImage: "Image/GTA V.jfif",
    gallery: [
      "Image/GTA V.jfif",
      "Image/GTA V.jfif",
      "Image/GTA V.jfif"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Bloom Byte",
    developer: "Fernlight Lab",
    price: 2.99,
    rating: 4.1,
    likes: 404,
    dislikes: 29,
    favorites: 167,
    downloads: 2100,
    views: 18200,
    revenue: 2600,
    tags: ["Casual", "Cozy", "Indie"],
    status: "new",
    description: "Grow luminous plants inside tiny digital terrariums and share snapshots with friends.",
    longDescription: "Bloom Byte is a relaxing mini-management game built around collectible seeds, idle growth, and playful visual customization designed for short unwind sessions.",
    heroImage: "Image/EGS_BlaspBlasphemous.jfif",
    gallery: [
      "Image/EGS_BlaspBlasphemous.jfif",
      "Image/EGS_BlaspBlasphemous.jfif",
      "Image/EGS_BlaspBlasphemous.jfif"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const posts = [
  {
    id: 1,
    userId: 1,
    content: "Just cleared the final Neon Drift route on keyboard only. The speed lines and audio sync feel absurdly good.",
    images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80"],
    likes: 182,
    dislikes: 7,
    comments: 23,
    createdAt: "2h ago"
  },
  {
    id: 2,
    userId: 2,
    content: "New Ashfall Keep patch is live. We reworked stamina windows, improved boss readability, and added a foggy courtyard zone.",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80"
    ],
    likes: 312,
    dislikes: 11,
    comments: 54,
    createdAt: "5h ago"
  },
  {
    id: 3,
    userId: 3,
    content: "Moderation note: we are highlighting small cozy and experimental games all weekend. Drop your favorites below.",
    images: [],
    likes: 143,
    dislikes: 2,
    comments: 37,
    createdAt: "1d ago"
  }
];

const commentsByGame = {
  1: [
    { userId: 1, text: "Tight controls and really good sense of speed.", time: "4h ago" },
    { userId: 2, text: "Track three is still my favorite. Great free pickup.", time: "1d ago" }
  ],
  2: [
    { userId: 3, text: "Boss pacing feels much better after the latest update.", time: "3h ago" }
  ]
};

const state = {
  user: users[0],
  gameVotes: {},
  postVotes: {},
  favorites: new Set([2, 4]),
  ratings: { 1: 5, 2: 4, 4: 5 },
  activeGameTab: "description",
  activeProfileTab: "games",
  carouselIndex: 0,
  expandedPosts: new Set(),
  filters: {
    price: "all",
    tags: [],
    rating: 0,
    sort: "popular"
  }
};

const ALL_TAGS = [...new Set(games.flatMap((game) => game.tags))];

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const formatPrice = (price) => (price === 0 ? "Free" : `$${price.toFixed(2)}`);
const formatCompact = (value) => Intl.NumberFormat("en", { notation: "compact" }).format(value);
const getUser = (id) => users.find((user) => user.id === id);
const getGame = (id) => games.find((game) => game.id === id);
const getQueryParam = (key) => new URLSearchParams(window.location.search).get(key);

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function stars(rating, interactive = false, gameId = null) {
  const rounded = interactive ? Math.round(state.ratings[gameId] || 0) : Math.round(rating);
  return `
    <div class="star-row" ${interactive ? `data-rating-stars="${gameId}"` : ""}>
      ${Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        const filled = value <= rounded ? "filled" : "";
        const attrs = interactive ? `data-rate="${value}" role="button" tabindex="0"` : "";
        return `<span class="star ${filled}" ${attrs}>★</span>`;
      }).join("")}
      <span class="muted-text">${interactive ? `${rounded || 0}/5` : rating.toFixed(1)}</span>
    </div>
  `;
}

function shell(content, options = {}) {
  const nav = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "games.html", label: "Games", key: "games" },
    { href: "posts.html", label: "Posts", key: "posts" }
  ];

  const sidebarLinks = [
    { href: "profile.html", label: "Profile" },
    { href: "dashboard.html", label: "Dashboard" },
    { href: "admin.html", label: "Admin" },
    { href: "game-detail.html?id=2", label: "Spotlight" }
  ];

  return `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="index.html">
          <span class="brand-mark">G</span>
          <span>GameStore</span>
        </a>
        <label class="searchbar">
          <span>⌕</span>
          <input type="search" placeholder="Search games, tags, creators..." />
        </label>
        <div class="topbar-right">
          <nav class="nav-links">
            ${nav
              .map(
                (item) => `
                  <a class="nav-link ${currentPage === item.key ? "active" : ""}" href="${item.href}">
                    ${item.label}
                  </a>
                `
              )
              .join("")}
          </nav>
          <a class="ghost-button mobile-nav-toggle" href="games.html">Browse</a>
          <a class="ghost-button" href="dashboard.html">Login</a>
          <a class="pill-button" href="profile.html">
            <img class="avatar" src="${state.user.avatar}" alt="${state.user.username}" />
            ${state.user.username}
          </a>
        </div>
      </header>
      <div class="layout">
        <aside class="sidebar">
          <div class="sidebar-group">
            <h3 class="sidebar-title">Discover</h3>
            <div class="sidebar-links">
              ${sidebarLinks.map((item) => `<a class="ghost-button" href="${item.href}">${item.label}</a>`).join("")}
            </div>
          </div>
          <div class="sidebar-group">
            <h3 class="sidebar-title">Popular Tags</h3>
            <div class="chip-row">
              ${ALL_TAGS.slice(0, 8).map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="sidebar-group">
            <h3 class="sidebar-title">Community Pulse</h3>
            <div class="stack">
              <div class="panel">
                <div class="meta">Live players</div>
                <h2>${formatCompact(124500)}</h2>
              </div>
              <div class="panel">
                <div class="meta">New posts today</div>
                <h2>${posts.length * 12}</h2>
              </div>
            </div>
          </div>
        </aside>
        <main class="main">${content}</main>
      </div>
      <footer class="footer">GameStore UI concept built with pure HTML, CSS, and JavaScript.</footer>
      <div class="toast-stack" id="toast-stack"></div>
    </div>
  `;
}

function showToast(message) {
  const stack = qs("#toast-stack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2600);
}

function gameCard(game, compact = false) {
  const vote = state.gameVotes[game.id] || 0;
  const favoriteActive = state.favorites.has(game.id);
  return `
    <article class="card">
      <div class="card-media">
        <img src="${game.heroImage}" alt="${game.title}" />
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <div>
            <h3 class="card-title">${game.title}</h3>
            <div class="card-meta">${game.developer}</div>
          </div>
          <button class="icon-button ${favoriteActive ? "active" : ""}" data-favorite-game="${game.id}" aria-label="Toggle favorite">
            ♡
          </button>
        </div>
        <div class="tag-row">
          ${game.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="meta-row">
          <span class="price ${game.price === 0 ? "free" : "paid"}">${formatPrice(game.price)}</span>
          <span class="stat-badge">${stars(game.rating)}</span>
        </div>
        ${
          compact
            ? ""
            : `
              <p class="muted-text">${game.description}</p>
              <div class="card-actions">
                <a class="primary-button" href="game-detail.html?id=${game.id}">View</a>
                ${game.price === 0 ? `<button class="ghost-button ghost-outline" data-play-game="${game.id}">Play</button>` : `<button class="ghost-button ghost-outline" data-buy-game="${game.id}">Buy</button>`}
                <button class="icon-button ${vote === 1 ? "active" : ""}" data-game-vote="${game.id}:1">👍</button>
                <button class="icon-button ${vote === -1 ? "active" : ""}" data-game-vote="${game.id}:-1">👎</button>
              </div>
            `
        }
      </div>
    </article>
  `;
}

function postCard(post) {
  const author = getUser(post.userId);
  const vote = state.postVotes[post.id] || 0;
  const expanded = state.expandedPosts.has(post.id);
  return `
    <article class="feed-card">
      <div class="feed-main">
        <div class="feed-head">
          <div class="inline-actions">
            <img class="avatar" src="${author.avatar}" alt="${author.username}" />
            <div>
              <div><strong>${author.name}</strong></div>
              <div class="feed-meta">@${author.username} <span>•</span> <span>${post.createdAt}</span></div>
            </div>
          </div>
          <span class="tag">${author.role}</span>
        </div>
        <div class="feed-content">${post.content}</div>
        ${
          post.images.length
            ? `<div class="feed-image-grid">${post.images.map((image) => `<img src="${image}" alt="Post image" class="post-image" />`).join("")}</div>`
            : ""
        }
        <div class="card-actions">
          <button class="ghost-button ${vote === 1 ? "active" : ""}" data-post-vote="${post.id}:1">♥ ${formatCompact(post.likes + (vote === 1 ? 1 : 0))}</button>
          <button class="ghost-button ${vote === -1 ? "active" : ""}" data-post-vote="${post.id}:-1">Dislike</button>
          <button class="ghost-button" data-toggle-comments="${post.id}">Comments ${expanded ? "▲" : "▼"} ${post.comments}</button>
        </div>
        <div class="${expanded ? "" : "hidden"}" data-comments-panel="${post.id}">
          <div class="comment-list">
            <div class="comment-card">
              <div class="comment-meta"><strong>${state.user.username}</strong><span>•</span><span>Now</span></div>
              <div class="muted-text">Mock thread comments stay local to the UI.</div>
            </div>
            <div class="comment-card">
              <div class="comment-meta"><strong>game_hunter</strong><span>•</span><span>27m ago</span></div>
              <div>Loving the community direction here. Need more cozy recommendations.</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function sectionHeading(title, subtitle = "", action = "") {
  return `
    <div class="section-head">
      <div>
        <h2>${title}</h2>
        ${subtitle ? `<p>${subtitle}</p>` : ""}
      </div>
      ${action}
    </div>
  `;
}

function renderHomePage() {
  const featured = games.filter((game) => game.status === "featured");
  const trending = games.filter((game) => game.status === "trending");
  const latestPosts = posts.slice(0, 3);

  return shell(`
    <section class="section hero">
      <div class="hero-copy">
        <span class="eyebrow">Featured Drop</span>
        <h1>Discover indie games, creator updates, and community threads in one dark, modern hub.</h1>
        <p>GameStore blends the dense discovery feel of itch-style storefronts with a social feed designed for player reactions, mock comments, and creator storytelling.</p>
        <div class="hero-actions">
          <a class="primary-button" href="game-detail.html?id=1">Play Now</a>
          <a class="ghost-button ghost-outline" href="games.html">View Games</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="${games[0].heroImage}" alt="${games[0].title}" />
        <div class="floating-card">
          <div class="muted-text">Trending tonight</div>
          <h3>${games[1].title}</h3>
          <div class="meta-row">
            <span class="price paid">${formatPrice(games[1].price)}</span>
            <span class="tag accent">${games[1].tags[0]}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      ${sectionHeading("Featured Games", "Curated highlights with strong cover art, ratings, and tags.", `<a class="ghost-button ghost-outline" href="games.html">Browse all</a>`)}
      <div class="grid game-grid">${featured.map((game) => gameCard(game)).join("")}</div>
    </section>

    <section class="section">
      ${sectionHeading("Trending Now", "A horizontal discovery rail inspired by storefront browsing.")}
      <div class="trending-row">${trending.map((game) => gameCard(game, true)).join("")}</div>
    </section>

    <section class="section">
      ${sectionHeading("Latest Posts", "Threads-style community updates from players and devs.", `<a class="ghost-button ghost-outline" href="posts.html">Open feed</a>`)}
      <div class="feed">${latestPosts.map((post) => postCard(post)).join("")}</div>
    </section>
  `);
}

function filteredGames() {
  let result = [...games];

  if (state.filters.price === "free") result = result.filter((game) => game.price === 0);
  if (state.filters.price === "paid") result = result.filter((game) => game.price > 0);
  if (state.filters.rating > 0) result = result.filter((game) => game.rating >= state.filters.rating);
  if (state.filters.tags.length) {
    result = result.filter((game) => state.filters.tags.every((tag) => game.tags.includes(tag)));
  }

  const sorters = {
    newest: (a, b) => b.id - a.id,
    popular: (a, b) => b.likes - a.likes,
    price: (a, b) => a.price - b.price
  };

  return result.sort(sorters[state.filters.sort]);
}

function renderGamesPage() {
  const list = filteredGames();
  return shell(`
    <section class="section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Game Library</span>
          <h1 class="page-title">Browse curated releases</h1>
          <p>Filter by price, tag, rating, and sort order with instant client-side updates.</p>
        </div>
      </div>
      <div class="filter-layout">
        <aside class="panel filter-panel">
          <div class="filter-block">
            <h3 class="sidebar-title">Price</h3>
            <div class="radio-list">
              ${["all", "free", "paid"]
                .map(
                  (option) => `
                    <label class="control">
                      <input type="radio" name="price" value="${option}" ${state.filters.price === option ? "checked" : ""} />
                      <span>${option[0].toUpperCase() + option.slice(1)}</span>
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="filter-block">
            <h3 class="sidebar-title">Tags</h3>
            <div class="checkbox-list">
              ${ALL_TAGS.map(
                (tag) => `
                  <label class="control">
                    <input type="checkbox" value="${tag}" data-tag-filter ${state.filters.tags.includes(tag) ? "checked" : ""} />
                    <span>${tag}</span>
                  </label>
                `
              ).join("")}
            </div>
          </div>
          <div class="filter-block">
            <h3 class="sidebar-title">Minimum Rating</h3>
            <select class="select" id="rating-filter">
              <option value="0">All ratings</option>
              <option value="3" ${state.filters.rating === 3 ? "selected" : ""}>3+</option>
              <option value="4" ${state.filters.rating === 4 ? "selected" : ""}>4+</option>
              <option value="4.5" ${state.filters.rating === 4.5 ? "selected" : ""}>4.5+</option>
            </select>
          </div>
          <div class="filter-block">
            <h3 class="sidebar-title">Sort</h3>
            <select class="select" id="sort-filter">
              <option value="newest" ${state.filters.sort === "newest" ? "selected" : ""}>Newest</option>
              <option value="popular" ${state.filters.sort === "popular" ? "selected" : ""}>Most Popular</option>
              <option value="price" ${state.filters.sort === "price" ? "selected" : ""}>Price</option>
            </select>
          </div>
        </aside>
        <div>
          <div class="section-head">
            <h2>${list.length} games found</h2>
            <div class="chip-row">${state.filters.tags.map((tag) => `<span class="filter-chip active">${tag}</span>`).join("")}</div>
          </div>
          ${
            list.length
              ? `<div class="grid game-grid">${list.map((game) => gameCard(game)).join("")}</div>`
              : `<div class="panel empty-state"><h3>Hiện chưa có trò chơi nào</h3><p class="muted-text">Try clearing a few filters to see more releases.</p></div>`
          }
        </div>
      </div>
    </section>
  `);
}

function renderGameDetailPage() {
  const requestedId = Number(getQueryParam("id")) || 1;
  const game = getGame(requestedId) || games[0];
  const currentImage = game.gallery[state.carouselIndex % game.gallery.length];
  const comments = commentsByGame[game.id] || [];

  const tabContent = {
    description: `
      <div class="panel detail-panel active">
        <h3>Game Overview</h3>
        <p class="feed-content">${game.longDescription}</p>
      </div>
    `,
    comments: `
      <div class="panel detail-panel active">
        <h3>Comments</h3>
        <div class="comment-list">
          ${comments
            .map((comment) => {
              const author = getUser(comment.userId);
              return `
                <div class="comment-card">
                  <div class="comment-meta"><strong>${author.username}</strong><span>•</span><span>${comment.time}</span></div>
                  <div>${comment.text}</div>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="composer" style="padding-inline:0;padding-bottom:0;">
          <textarea id="game-comment-input" placeholder="Share your thoughts on this game..."></textarea>
          <div class="toolbar" style="margin-top:12px;">
            <button class="primary-button" data-submit-game-comment="${game.id}">Post Comment</button>
          </div>
        </div>
      </div>
    `,
    ratings: `
      <div class="panel detail-panel active">
        <h3>Ratings</h3>
        <p class="muted-text">Set a local star rating to preview UI interactions.</p>
        ${stars(game.rating, true, game.id)}
      </div>
    `
  };

  return shell(`
    <section class="section">
      <div class="detail-layout">
        <div class="detail-header">
          <div class="panel detail-panel">
            <div class="carousel">
              <img class="carousel-image" src="${currentImage}" alt="${game.title}" />
              <div class="carousel-controls">
                <button class="icon-button" data-carousel="prev">←</button>
                <button class="icon-button" data-carousel="next">→</button>
              </div>
            </div>
          </div>
          <iframe class="video-frame" src="${game.video}" title="${game.title} video" allowfullscreen></iframe>
          <div>
            <div class="tab-row">
              ${["description", "comments", "ratings"]
                .map((tab) => `<button class="tab-button ghost-button ${state.activeGameTab === tab ? "active" : ""}" data-game-tab="${tab}">${tab[0].toUpperCase() + tab.slice(1)}</button>`)
                .join("")}
            </div>
            <div class="tabs-content">${tabContent[state.activeGameTab]}</div>
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="panel detail-panel">
            <div class="tag accent">${game.status}</div>
            <h1>${game.title}</h1>
            <div class="meta">by ${game.developer}</div>
            <div class="meta-row">
              <span class="price ${game.price === 0 ? "free" : "paid"}">${formatPrice(game.price)}</span>
              <span class="tag">${formatCompact(game.views)} views</span>
              <span class="tag">${formatCompact(game.downloads)} downloads</span>
            </div>
            ${stars(game.rating)}
            <div class="tag-row">${game.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
            <div class="card-actions">
              <button class="primary-button" data-buy-game="${game.id}">${game.price === 0 ? "Download" : "Buy Now"}</button>
              <button class="ghost-button ghost-outline" data-play-game="${game.id}">Play</button>
              <button class="ghost-button ghost-outline ${state.favorites.has(game.id) ? "active" : ""}" data-favorite-game="${game.id}">Add to Favorite</button>
            </div>
            <div class="card-actions">
              <button class="icon-button" data-game-vote="${game.id}:1">👍</button>
              <button class="icon-button" data-game-vote="${game.id}:-1">👎</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `);
}

function renderPostsPage() {
  return shell(`
    <section class="section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Community Feed</span>
          <h1 class="page-title">Threads-style posts for players and devs</h1>
          <p>Share updates, celebrate launches, and expand mock comments without leaving the page.</p>
        </div>
      </div>
      <div class="feed">
        <div class="panel composer">
          <div class="inline-actions" style="margin-bottom:14px;">
            <img class="avatar" src="${state.user.avatar}" alt="${state.user.username}" />
            <div>
              <strong>${state.user.name}</strong>
              <div class="small-meta">@${state.user.username}</div>
            </div>
          </div>
          <textarea id="new-post-content" placeholder="Post something about the latest build, patch notes, or your current favorite game..."></textarea>
          <div class="toolbar" style="margin-top:14px;">
            <button class="ghost-button ghost-outline" type="button">Upload image</button>
            <button class="primary-button" id="create-post-button">Post</button>
          </div>
        </div>
        ${posts.map((post) => postCard(post)).join("")}
      </div>
    </section>
  `);
}

function renderProfilePage() {
  const favoriteGames = games.filter((game) => state.favorites.has(game.id));
  const authoredPosts = posts.filter((post) => post.userId === state.user.id);
  const tabs = {
    games: games.slice(0, 3),
    posts: authoredPosts,
    favorites: favoriteGames
  };

  const content = {
    games: `<div class="grid game-grid">${tabs.games.map((game) => gameCard(game)).join("")}</div>`,
    posts: authoredPosts.length ? `<div class="feed">${authoredPosts.map((post) => postCard(post)).join("")}</div>` : `<div class="panel empty-state"><h3>No posts yet</h3></div>`,
    favorites: favoriteGames.length ? `<div class="grid game-grid">${favoriteGames.map((game) => gameCard(game)).join("")}</div>` : `<div class="panel empty-state"><h3>No favorites yet</h3></div>`
  };

  return shell(`
    <section class="section profile-layout">
      <div class="panel profile-banner">
        <img class="avatar" style="width:88px;height:88px;" src="${state.user.avatar}" alt="${state.user.username}" />
        <div>
          <h1>${state.user.name}</h1>
          <div class="feed-meta">@${state.user.username}</div>
          <p class="muted-text">${state.user.bio}</p>
          ${state.user.blocked ? `<div class="tag accent">Tài khoản đã bị khóa</div>` : ""}
        </div>
        <button class="primary-button" id="follow-button">Follow</button>
      </div>
      <div class="tab-row">
        ${["games", "posts", "favorites"]
          .map((tab) => `<button class="tab-button ghost-button ${state.activeProfileTab === tab ? "active" : ""}" data-profile-tab="${tab}">${tab[0].toUpperCase() + tab.slice(1)}</button>`)
          .join("")}
      </div>
      ${content[state.activeProfileTab]}
    </section>
  `);
}

function renderDashboardPage() {
  const devGames = games.slice(0, 4);
  const values = [36, 58, 44, 72, 86, 62, 94];
  return shell(`
    <section class="section dashboard-layout">
      <div class="section-head">
        <div>
          <span class="eyebrow">Developer Dashboard</span>
          <h1 class="page-title">Monitor performance and manage releases</h1>
        </div>
      </div>
      <div class="stats-grid">
        <div class="panel"><div class="meta">Downloads</div><h2>${formatCompact(46300)}</h2></div>
        <div class="panel"><div class="meta">Views</div><h2>${formatCompact(312000)}</h2></div>
        <div class="panel"><div class="meta">Revenue</div><h2>$87.6k</h2></div>
      </div>
      <div class="panel">
        <h2>Weekly activity</h2>
        <div class="chart-bars">
          ${values.map((value) => `<div class="chart-bar" style="height:${value}%;"></div>`).join("")}
        </div>
      </div>
      <div class="table-card">
        <div class="section-head">
          <h2>Manage Games</h2>
          <button class="primary-button">Upload</button>
        </div>
        <div class="table-list">
          ${devGames
            .map(
              (game) => `
                <div class="table-row">
                  <div>
                    <strong>${game.title}</strong>
                    <div class="small-meta">${formatCompact(game.downloads)} downloads • ${formatCompact(game.views)} views</div>
                  </div>
                  <div class="inline-actions">
                    <button class="ghost-button ghost-outline">Edit</button>
                    <button class="ghost-button ghost-outline">Delete</button>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="table-card">
        <div class="section-head">
          <h2>Manage Posts</h2>
          <button class="ghost-button ghost-outline">Create</button>
        </div>
        <div class="table-list">
          ${posts
            .map(
              (post) => `
                <div class="table-row">
                  <div>
                    <strong>${escapeHtml(post.content.slice(0, 70))}...</strong>
                    <div class="small-meta">${formatCompact(post.likes)} likes • ${post.createdAt}</div>
                  </div>
                  <div class="inline-actions">
                    <button class="ghost-button ghost-outline">Edit</button>
                    <button class="ghost-button ghost-outline">Delete</button>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `);
}

function renderAdminPage() {
  return shell(`
    <section class="section admin-layout">
      <div class="section-head">
        <div>
          <span class="eyebrow">Admin Panel</span>
          <h1 class="page-title">Moderate content and track platform health</h1>
        </div>
      </div>
      <div class="stats-grid">
        <div class="panel"><div class="meta">Total users</div><h2>${formatCompact(184200)}</h2></div>
        <div class="panel"><div class="meta">Revenue</div><h2>$420k</h2></div>
        <div class="panel"><div class="meta">Activity</div><h2>High</h2></div>
      </div>
      <div class="table-card">
        <div class="section-head"><h2>Moderation Queue</h2><span class="tag accent">6 pending</span></div>
        <div class="moderation-list">
          ${games.slice(0, 4).map((game) => `
            <div class="moderation-row">
              <div>
                <strong>${game.title}</strong>
                <div class="small-meta">${game.developer} • ${game.tags.join(", ")}</div>
              </div>
              <div class="inline-actions">
                <button class="primary-button" data-admin-action="approve">Approve</button>
                <button class="ghost-button ghost-outline" data-admin-action="reject">Reject</button>
                <button class="ghost-button ghost-outline" data-admin-action="delete">Delete</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `);
}

const renderers = {
  home: renderHomePage,
  games: renderGamesPage,
  "game-detail": renderGameDetailPage,
  posts: renderPostsPage,
  profile: renderProfilePage,
  dashboard: renderDashboardPage,
  admin: renderAdminPage
};

function renderApp() {
  const renderer = renderers[currentPage] || renderHomePage;
  app.innerHTML = renderer();
  bindEvents();
}

function bindEvents() {
  qsa("[data-favorite-game]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.favoriteGame);
      if (state.favorites.has(id)) {
        state.favorites.delete(id);
        showToast("Removed from favorites");
      } else {
        state.favorites.add(id);
        showToast("Added to favorites");
      }
      renderApp();
    });
  });

  qsa("[data-game-vote]").forEach((button) => {
    button.addEventListener("click", () => {
      const [id, value] = button.dataset.gameVote.split(":").map(Number);
      state.gameVotes[id] = state.gameVotes[id] === value ? 0 : value;
      showToast(value === 1 ? "You liked this game" : "You disliked this game");
      renderApp();
    });
  });

  qsa("[data-post-vote]").forEach((button) => {
    button.addEventListener("click", () => {
      const [id, value] = button.dataset.postVote.split(":").map(Number);
      state.postVotes[id] = state.postVotes[id] === value ? 0 : value;
      showToast(value === 1 ? "Post liked" : "Feedback noted");
      renderApp();
    });
  });

  qsa("[data-toggle-comments]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.toggleComments);
      if (state.expandedPosts.has(id)) {
        state.expandedPosts.delete(id);
      } else {
        state.expandedPosts.add(id);
      }
      renderApp();
    });
  });

  qsa("[data-rate]").forEach((star) => {
    star.addEventListener("click", () => {
      const gameId = Number(star.parentElement.dataset.ratingStars);
      const rating = Number(star.dataset.rate);
      state.ratings[gameId] = rating;
      showToast(`Rated ${getGame(gameId).title} ${rating} stars`);
      renderApp();
    });
  });

  qsa("[data-carousel]").forEach((button) => {
    button.addEventListener("click", () => {
      const gameId = Number(getQueryParam("id")) || 1;
      const game = getGame(gameId) || games[0];
      const direction = button.dataset.carousel;
      const delta = direction === "next" ? 1 : -1;
      state.carouselIndex = (state.carouselIndex + delta + game.gallery.length) % game.gallery.length;
      renderApp();
    });
  });

  qsa("[data-game-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeGameTab = button.dataset.gameTab;
      renderApp();
    });
  });

  qsa("[data-profile-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeProfileTab = button.dataset.profileTab;
      renderApp();
    });
  });

  qsa('input[name="price"]').forEach((input) => {
    input.addEventListener("change", () => {
      state.filters.price = input.value;
      renderApp();
    });
  });

  qsa("[data-tag-filter]").forEach((input) => {
    input.addEventListener("change", () => {
      const { value, checked } = input;
      state.filters.tags = checked
        ? [...state.filters.tags, value]
        : state.filters.tags.filter((tag) => tag !== value);
      renderApp();
    });
  });

  const ratingFilter = qs("#rating-filter");
  if (ratingFilter) {
    ratingFilter.addEventListener("change", (event) => {
      state.filters.rating = Number(event.target.value);
      renderApp();
    });
  }

  const sortFilter = qs("#sort-filter");
  if (sortFilter) {
    sortFilter.addEventListener("change", (event) => {
      state.filters.sort = event.target.value;
      renderApp();
    });
  }

  qsa("[data-play-game]").forEach((button) => {
    button.addEventListener("click", () => showToast("Launching mock browser build..."));
  });

  qsa("[data-buy-game]").forEach((button) => {
    button.addEventListener("click", () => showToast("Added to mock checkout cart"));
  });

  const createPostButton = qs("#create-post-button");
  if (createPostButton) {
    createPostButton.addEventListener("click", () => {
      const input = qs("#new-post-content");
      const content = input.value.trim();
      if (!content) {
        showToast("Write something before posting");
        return;
      }
      posts.unshift({
        id: Date.now(),
        userId: state.user.id,
        content,
        images: [],
        likes: 0,
        dislikes: 0,
        comments: 0,
        createdAt: "Just now"
      });
      input.value = "";
      showToast("Post published");
      renderApp();
    });
  }

  const gameCommentButton = qs("[data-submit-game-comment]");
  if (gameCommentButton) {
    gameCommentButton.addEventListener("click", () => {
      const gameId = Number(gameCommentButton.dataset.submitGameComment);
      const input = qs("#game-comment-input");
      const text = input.value.trim();
      if (!text) {
        showToast("Comment cannot be empty");
        return;
      }
      if (!commentsByGame[gameId]) commentsByGame[gameId] = [];
      commentsByGame[gameId].unshift({
        userId: state.user.id,
        text,
        time: "Just now"
      });
      state.activeGameTab = "comments";
      showToast("Comment added");
      renderApp();
    });
  }

  const followButton = qs("#follow-button");
  if (followButton) {
    followButton.addEventListener("click", () => {
      followButton.textContent = followButton.textContent === "Follow" ? "Following" : "Follow";
      showToast(followButton.textContent === "Following" ? "You are now following this user" : "Unfollowed");
    });
  }

  qsa("[data-admin-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.adminAction;
      const label = action.charAt(0).toUpperCase() + action.slice(1);
      showToast(`${label} action completed (mock)`);
    });
  });
}

renderApp();
