const updates = [
  {
    id: "football-1",
    sport: "football",
    icon: "⚽",
    glow: "#65d4ff",
    title: "Midfield Engine takes over the derby in a tactical masterclass",
    summary:
      "A compact block, one decisive overlap, and a late press swing the match in dramatic style.",
    description:
      "This sample football update is written as placeholder content, designed to show how rich editorial cards can look without depending on external images. The layout focuses on hierarchy, readability, and premium motion. Replace this text later with your own match analysis, club news, or transfer updates.",
    author: "Desk Analysis",
    date: "2026-06-12",
    likes: 184,
    tags: ["Tactical", "Derby", "Trending"]
  },
  {
    id: "football-2",
    sport: "football",
    icon: "🧤",
    glow: "#2af598",
    title: "Keeper steals the spotlight with a shutdown performance under pressure",
    summary:
      "Big saves, calm distribution, and elite positioning turn danger into confidence all night.",
    description:
      "This update card demonstrates a professional storytelling format for football news. It is intentionally crafted as demo content so the website remains functional offline and avoids broken assets. You can swap in real articles later or connect the cards to a live sports API.",
    author: "Matchday Wire",
    date: "2026-06-10",
    likes: 121,
    tags: ["Goalkeeper", "Defense", "Highlights"]
  },
  {
    id: "cricket-1",
    sport: "cricket",
    icon: "🏏",
    glow: "#ffd166",
    title: "Finisher launches a late over assault to flip a tense chase",
    summary:
      "A disciplined chase becomes chaos in the death overs as clean timing changes the whole mood.",
    description:
      "This placeholder cricket update is built to show rich UI interactions: category filtering, sorting, quick actions, favorites, and modal details. The copy is demo text only so you can safely use the site as a sample project before plugging in real score feeds or articles.",
    author: "Cricket Hub",
    date: "2026-06-11",
    likes: 236,
    tags: ["Chase", "T20", "Clutch"]
  },
  {
    id: "cricket-2",
    sport: "cricket",
    icon: "🎯",
    glow: "#ff6a88",
    title: "New-ball burst crushes the top order in a powerplay ambush",
    summary:
      "Sharp movement, attacking fields, and fearless intent trigger a collapse before the rebuild starts.",
    description:
      "Use this card to present bowling analysis, squad updates, venue notes, or pre-match insight. The design uses icon-led storytelling instead of image thumbnails, which keeps the site reliable even when external image links are unavailable.",
    author: "Powerplay Desk",
    date: "2026-06-08",
    likes: 147,
    tags: ["Bowling", "Powerplay", "Analysis"]
  },
  {
    id: "basketball-1",
    sport: "basketball",
    icon: "🏀",
    glow: "#8b5cf6",
    title: "Fourth-quarter avalanche turns a close game into a statement finish",
    summary:
      "Transition speed, strong ball movement, and a ruthless scoring burst seal the night.",
    description:
      "This sample basketball story card shows how a clean sports website can feel premium without heavy libraries or broken media. The content is demo text and can later be replaced by real game recaps, player notes, or rankings pulled from an API.",
    author: "Hoops Pulse",
    date: "2026-06-09",
    likes: 178,
    tags: ["Clutch", "Playoffs", "Momentum"]
  },
  {
    id: "basketball-2",
    sport: "basketball",
    icon: "📈",
    glow: "#65d4ff",
    title: "Bench unit shifts the tempo and rewrites the matchup blueprint",
    summary:
      "Spacing improves, second-unit chemistry clicks, and the rotation suddenly looks dangerous.",
    description:
      "This card is another placeholder story crafted to make the interface feel like a polished sports magazine. It works great for team news, trade reactions, stat summaries, or fan-focused explainer content.",
    author: "Court Report",
    date: "2026-06-07",
    likes: 97,
    tags: ["Rotation", "Bench", "Coaching"]
  },
  {
    id: "f1-1",
    sport: "f1",
    icon: "🏎️",
    glow: "#ff6a88",
    title: "Undercut timing and tire control decide a brutal night race duel",
    summary:
      "A smart pit sequence and consistent sector pace turn strategy into a headline win.",
    description:
      "This F1 update card is built for a futuristic dashboard experience. It demonstrates a premium card layout with compact metadata, headline emphasis, and modal-ready details. The article text is sample content that you can later replace with real race updates.",
    author: "Track Intel",
    date: "2026-06-12",
    likes: 204,
    tags: ["Strategy", "Night Race", "Racecraft"]
  },
  {
    id: "f1-2",
    sport: "f1",
    icon: "🟣",
    glow: "#2af598",
    title: "Qualifying pace hints at a grid shake-up before lights out",
    summary:
      "Micro gains in the final sector reveal who really found performance overnight.",
    description:
      "This placeholder story helps you showcase a functional motorsport sidebar or article section. Because the project avoids fragile image dependencies, it remains professional and fast while still feeling premium and visually rich.",
    author: "Paddock Signal",
    date: "2026-06-06",
    likes: 133,
    tags: ["Qualifying", "Grid", "Preview"]
  }
];

const tickerItems = [
  '⚽ <strong>Football:</strong> Derby preview drops with tactical notes and squad watch',
  '🏏 <strong>Cricket:</strong> Death-over hitters dominate the conversation before tonight\'s clash',
  '🏀 <strong>Basketball:</strong> Rotation shake-up sparks major fan debate',
  '🏎️ <strong>F1:</strong> Strategy window tightens ahead of the final qualifying run'
];

const root = document.documentElement;
const cardsGrid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const tickerTrack = document.getElementById("tickerTrack");
const favoritesCount = document.getElementById("favoritesCount");
const favoritesList = document.getElementById("favoritesList");
const favoritesEmpty = document.getElementById("favoritesEmpty");
const clearFavoritesBtn = document.getElementById("clearFavoritesBtn");
const favoritesSummaryBtn = document.getElementById("favoritesSummaryBtn");
const currentYear = document.getElementById("currentYear");
const themeToggle = document.getElementById("themeToggle");
const loader = document.getElementById("loader");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const siteNav = document.getElementById("siteNav");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const toast = document.getElementById("toast");

const modal = document.getElementById("detailsModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBadge = document.getElementById("modalBadge");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
const modalLikeBtn = document.getElementById("modalLikeBtn");

let currentFilter = "all";
let currentSearch = "";
let currentSort = "default";
let activeModalId = null;

const storage = {
  getFavorites() {
    return JSON.parse(localStorage.getItem("pulsearena-favorites") || "[]");
  },
  setFavorites(value) {
    localStorage.setItem("pulsearena-favorites", JSON.stringify(value));
  },
  getLikes() {
    return JSON.parse(localStorage.getItem("pulsearena-likes") || "{}");
  },
  setLikes(value) {
    localStorage.setItem("pulsearena-likes", JSON.stringify(value));
  },
  getTheme() {
    return localStorage.getItem("pulsearena-theme") || "dark";
  },
  setTheme(value) {
    localStorage.setItem("pulsearena-theme", value);
  }
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.add("hidden"), 2200);
}

function duplicateTicker() {
  const items = [...tickerItems, ...tickerItems];
  tickerTrack.innerHTML = items
    .map(item => `<span class="ticker__item">${item}</span>`)
    .join("");
}

function getLikesMap() {
  return storage.getLikes();
}

function getFavoriteIds() {
  return storage.getFavorites();
}

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  storage.setTheme(theme);
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "◐" : "◑";
  }
}

function getDisplayLikes(item) {
  const likesMap = getLikesMap();
  return typeof likesMap[item.id] === "number" ? likesMap[item.id] : item.likes;
}

function isFavorite(id) {
  return getFavoriteIds().includes(id);
}

function toggleFavorite(id) {
  const favorites = getFavoriteIds();
  const next = favorites.includes(id)
    ? favorites.filter(value => value !== id)
    : [...favorites, id];

  storage.setFavorites(next);
  renderFavorites();
  renderCards();
  updateFavoritesCount();

  if (activeModalId === id) {
    syncModalButtons(id);
  }

  showToast(next.includes(id) ? "Added to favorites" : "Removed from favorites");
}

function incrementLike(id) {
  const likesMap = getLikesMap();
  const item = updates.find(update => update.id === id);
  if (!item) return;

  likesMap[id] =
    (typeof likesMap[id] === "number" ? likesMap[id] : item.likes) + 1;

  storage.setLikes(likesMap);
  renderCards();
  renderFavorites();

  if (activeModalId === id) {
    openModal(item);
  }

  showToast("Update liked");
}

function updateFavoritesCount() {
  if (favoritesCount) {
    favoritesCount.textContent = getFavoriteIds().length;
  }
}

function getFilteredUpdates() {
  let result = [...updates];

  if (currentFilter !== "all") {
    result = result.filter(item => item.sport === currentFilter);
  }

  if (currentSearch.trim()) {
    const keyword = currentSearch.trim().toLowerCase();
    result = result.filter(item => {
      return (
        item.title.toLowerCase().includes(keyword) ||
        item.summary.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword) ||
        item.author.toLowerCase().includes(keyword) ||
        item.sport.toLowerCase().includes(keyword) ||
        item.tags.join(" ").toLowerCase().includes(keyword)
      );
    });
  }

  if (currentSort === "newest") {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (currentSort === "liked") {
    result.sort((a, b) => getDisplayLikes(b) - getDisplayLikes(a));
  } else if (currentSort === "az") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
}

function createCard(item) {
  const article = document.createElement("article");
  article.className = "update-card";
  article.style.setProperty("--card-glow", item.glow);

  const favoriteLabel = isFavorite(item.id) ? "★ Saved" : "☆ Favorite";
  const favoriteClass = isFavorite(item.id)
    ? "favorite-action is-favorite"
    : "favorite-action";

  article.innerHTML = `
    <div class="update-card__head">
      <div class="update-card__icon" aria-hidden="true">${item.icon}</div>
      <button class="${favoriteClass}" data-action="favorite" data-id="${item.id}" aria-label="Save update    <span class="tag-chip">${capitalize(item.sport)}</span>
      <span class="tag-chip">${formatDate(item.date)}</span>
      <span class="tag-chip">${item.author}</span>
    </div>

    <h3>${item.title}</h3>
    <p>${item.summary}</p>

    <div class="update-card__footer">
      <div class="update-card__stats">
        <span>♥ ${getDisplayLikes(item)}</span>
        <span>•</span>
        <span>${item.tags[0]}</span>
      </div>
      <div class="update-card__buttons">
        <button class="card-action  <button class="card-action card-action--primary" data-action="details" data-id="${item.idorEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;

      if (action === "favorite") toggleFavorite(id);
      if (action === "like") incrementLike(id);
      if (action === "details") {
        const selected = updates.find(update => update.id === id);
        if (selected) openModal(selected);
      }
    });
  });

  return article;
}

function renderCards() {
  if (!cardsGrid) return;

  const data = getFilteredUpdates();
  cardsGrid.innerHTML = "";

  if (data.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  data.forEach(item => cardsGrid.appendChild(createCard(item)));
}

function renderFavorites() {
  if (!favoritesList || !favoritesEmpty) return;

  const favoriteIds = getFavoriteIds();
  const favoriteItems = updates.filter(item => favoriteIds.includes(item.id));

  favoritesList.innerHTML = "";

  if (favoriteItems.length === 0) {
    favoritesEmpty.classList.remove("hidden");
    return;
  }

  favoritesEmpty.classList.add("hidden");

  favoriteItems.forEach(item => {
    const card = document.createElement("article");
    card.className = "favorite-card";

    card.innerHTML = `
      <div>
        <div class="tag-chip">${item.icon} ${capitalize(item.sport)}</div>
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
      </div>
      <div class="favorite-card__actions">
        <button class="card-action" data-action="open" data-id="${item.id`;

    card.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;

        if (btn.dataset.action === "open") {
          const selected = updates.find(update => update.id === id);
          if (selected) openModal(selected);
        }

        if (btn.dataset.action === "remove") {
          toggleFavorite(id);
        }
      });
    });

    favoritesList.appendChild(card);
  });
}

function openModal(item) {
  if (!modal) return;

  activeModalId = item.id;
  modalBadge.textContent = `${item.icon} ${capitalize(item.sport)}`;
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${formatDate(item.date)} • ${item.author} • ♥ ${getDisplayLikes(item)}`;
  modalDescription.textContent = item.description;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  syncModalButtons(item.id);
}

function syncModalButtons(id) {
  if (!modalFavoriteBtn) return;
  modalFavoriteBtn.textContent = isFavorite(id)
    ? "★ Remove from Favorites"
    : "★ Save to Favorites";
}

function closeModal() {
  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeModalId = null;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function resetFilters() {
  currentFilter = "all";
  currentSearch = "";
  currentSort = "default";

  if (searchInput) searchInput.value = "";
  if (sortSelect) sortSelect.value = "default";

  filterButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === "all");
  });

  renderCards();
}

/* Search */
if (searchInput) {
  searchInput.addEventListener("input", event => {
    currentSearch = event.target.value;
    renderCards();
  });
}

/* Filters */
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    filterButtons.forEach(node => node.classList.remove("active"));
    btn.classList.add("active");

    renderCards();
  });
});

/* Sort */
if (sortSelect) {
  sortSelect.addEventListener("change", event => {
    currentSort = event.target.value;
    renderCards();
  });
}

/* Reset */
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener("click", resetFilters);
}

/* Clear favorites */
if (clearFavoritesBtn) {
  clearFavoritesBtn.addEventListener("click", () => {
    storage.setFavorites([]);
    renderFavorites();
    renderCards();
    updateFavoritesCount();
    showToast("Favorites cleared");
  });
}

/* Favorites summary button */
if (favoritesSummaryBtn) {
  favoritesSummaryBtn.addEventListener("click", () => {
    const favoritesSection = document.getElementById("favorites");
    if (favoritesSection) {
      favoritesSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* Theme toggle */
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next);
  });
}

/* Mobile menu */
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    if (siteNav) siteNav.classList.toggle("open");
  });
}

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (siteNav) siteNav.classList.remove("open");
  });
});

/* Modal close */
if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/* Modal buttons */
if (modalFavoriteBtn) {
  modalFavoriteBtn.addEventListener("click", () => {
    if (!activeModalId) return;
    toggleFavorite(activeModalId);
  });
}

if (modalLikeBtn) {
  modalLikeBtn.addEventListener("click", () => {
    if (!activeModalId) return;
    incrementLike(activeModalId);
  });
}

/* Contact form */
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("nameInput")?.value.trim() || "";
    const email = document.getElementById("emailInput")?.value.trim() || "";
    const sport = document.getElementById("sportInput")?.value.trim() || "";
    const message = document.getElementById("messageInput")?.value.trim() || "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !sport) {
      if (formFeedback) {
        formFeedback.textContent = "Please fill name, email, and favorite sport.";
        formFeedback.className = "form-feedback error";
      }
      return;
    }

    if (!emailPattern.test(email)) {
      if (formFeedback) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.className = "form-feedback error";
      }
      return;
    }

    if (formFeedback) {
      formFeedback.textContent = `Thanks ${name}! You are subscribed for ${sport} updates${
        message ? " and your message is saved locally in this demo." : "."
      }`;
      formFeedback.className = "form-feedback success";
    }

    contactForm.reset();
    showToast("Form submitted successfully");
  });
}

/* Init */
window.addEventListener("load", () => {
  setTheme(storage.getTheme());
  duplicateTicker();

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  renderCards();
  renderFavorites();
  updateFavoritesCount();

  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 550);
  }
});
