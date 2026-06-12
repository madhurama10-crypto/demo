const updates = [
  {
    id: "football-1",
    sport: "football",
    icon: "⚽",
    glow: "#58d6ff",
    title: "Midfield Engine takes over the derby in a tactical masterclass",
    summary:
      "A compact block, one decisive overlap, and a late press swing the match in dramatic style.",
    description:
      "This football update is sample content designed to show a premium sports dashboard without depending on external images. Replace this text later with your own match analysis, club news, or transfer updates.",
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
      "This update card demonstrates a professional storytelling format for football news. It uses static placeholder content so the site works reliably without broken media.",
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
      "This cricket update is placeholder content built to show rich UI interactions like search, sorting, quick actions, favorites, and modal details.",
    author: "Cricket Hub",
    date: "2026-06-11",
    likes: 236,
    tags: ["Chase", "T20", "Clutch"]
  },
  {
    id: "cricket-2",
    sport: "cricket",
    icon: "🎯",
    glow: "#ff6b88",
    title: "New-ball burst crushes the top order in a powerplay ambush",
    summary:
      "Sharp movement, attacking fields, and fearless intent trigger a collapse before the rebuild starts.",
    description:
      "Use this card style for bowling analysis, squad notes, venue previews, or pre-match insight. The design stays reliable without depending on image thumbnails.",
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
      "This basketball story card shows how a clean sports website can feel premium without heavy libraries or broken media.",
    author: "Hoops Pulse",
    date: "2026-06-09",
    likes: 178,
    tags: ["Clutch", "Playoffs", "Momentum"]
  },
  {
    id: "basketball-2",
    sport: "basketball",
    icon: "📈",
    glow: "#58d6ff",
    title: "Bench unit shifts the tempo and rewrites the matchup blueprint",
    summary:
      "Spacing improves, second-unit chemistry clicks, and the rotation suddenly looks dangerous.",
    description:
      "This card works well for team news, stat summaries, fan explainers, or strategy-focused content.",
    author: "Court Report",
    date: "2026-06-07",
    likes: 97,
    tags: ["Rotation", "Bench", "Coaching"]
  },
  {
    id: "f1-1",
    sport: "f1",
    icon: "🏎️",
    glow: "#ff6b88",
    title: "Undercut timing and tire control decide a brutal night race duel",
    summary:
      "A smart pit sequence and consistent sector pace turn strategy into a headline win.",
    description:
      "This Formula 1 update card demonstrates a premium motorsport layout with clean metadata and strong headline emphasis.",
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
      "This placeholder story is perfect for showing motorsport analysis, qualifiers, paddock notes, or team previews.",
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
    try {
      return JSON.parse(localStorage.getItem("pulsearena-favorites") || "[]");
    } catch {
      return [];
    }
  },
  setFavorites(value) {
    try {
      localStorage.setItem("pulsearena-favorites", JSON.stringify(value));
    } catch {}
  },
  getLikes() {
    try {
      return JSON.parse(localStorage.getItem("pulsearena-likes") || "{}");
    } catch {
      return {};
    }
  },
  setLikes(value) {
    try {
      localStorage.setItem("pulsearena-likes", JSON.stringify(value));
    } catch {}
  },
  getTheme() {
    try {
      return localStorage.getItem("pulsearena-theme") || "dark";
    } catch {
      return "dark";
    }
  },
  setTheme(value) {
    try {
      localStorage.setItem("pulsearena-theme", value);
    } catch {}
  }
};

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

function duplicateTicker() {
  if (!tickerTrack) return;
  const items = [...tickerItems, ...tickerItems];
  tickerTrack.innerHTML = items
    .map(item => `<span class="ticker-item">${item}</span>`)
    .join("");
}

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  storage.setTheme(theme);
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "◐" : "◑";
  }
}

function getLikesMap() {
  return storage.getLikes();
}

function getFavoriteIds() {
  return storage.getFavorites();
}

function isFavorite(id) {
  return getFavoriteIds().includes(id);
}

function getDisplayLikes(item) {
  const likesMap = getLikesMap();
  return typeof likesMap[item.id] === "number" ? likesMap[item.id] : item.likes;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function updateFavoritesCount() {
  if (!favoritesCount) return;
  favoritesCount.textContent = getFavoriteIds().length;
}

function toggleFavorite(id) {
  const favorites = getFavoriteIds();
  const next = favorites.includes(id)
    ? favorites.filter(item => item !== id)
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

function createCard(item) {
  const card = document.createElement("article");
  card.className = "update-card";
  card.style.setProperty("--card-glow", item.glow);

  const favoriteLabel = isFavorite(item.id) ? "★ Saved" : "☆ Favorite";
  const favoriteClass = isFavorite(item.id)
    ? "favorite-action is-favorite"
    : "favorite-action";

  card.innerHTML = `
    <div class="update-card-head">
      <div class="update-card-icon" aria-hidden="true">${item.icon}</div>
      <button class="${favoriteClass}" data-action="favorite" data

    <div class="update-card-meta">
      <span class="tag-chip">${capitalize(item.sport)}</span>
      <span class="tag-chip">${formatDate(item.date)}</span>
      <span class="tag-chip">${item.author}</span>
    </div>

    <h3>${item.title}</h3>
    <p>${item.summary}</p>

    <div class="update-card-footer">
      <div class="update-card-stats">
        <span>♥ ${getDisplayLikes(item)}</span>
        <span>•</span>
        <span>${item.tags[0]}</span>
      </div>

      <div class="update-card-buttons">
        <button class="card-action" data-action="like" data-id="${item.idrd-action card-action-primary" data-action="details;

  card.querySelectorAll("button").forEach(btn => {
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

  return card;
}

function renderCards() {
  if (!cardsGrid) return;

  const filtered = getFilteredUpdates();
  cardsGrid.innerHTML = "";

  if (filtered.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  filtered.forEach(item => {
    cardsGrid.appendChild(createCard(item));
  });
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
      <div class="favorite-card-actions">
        <button class="card-action" data-action="open"ite-action is-favorite" data-action="remove" data-id="${").forEach(btn => {
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

function syncModalButtons(id) {
  if (!modalFavoriteBtn) return;
  modalFavoriteBtn.textContent = isFavorite(id)
    ? "★ Remove from Favorites"
    : "★ Save to Favorites";
}

function openModal(item) {
  if (!modal) return;

  activeModalId = item.id;

  if (modalBadge) modalBadge.textContent = `${item.icon} ${capitalize(item.sport)}`;
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalMeta) {
    modalMeta.textContent = `${formatDate(item.date)} • ${item.author} • ♥ ${getDisplayLikes(item)}`;
  }
  if (modalDescription) modalDescription.textContent = item.description;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  syncModalButtons(item.id);
}

function closeModal() {
  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeModalId = null;
}

function bindEvents() {
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value;
      renderCards();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      currentSort = e.target.value;
      renderCards();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetFilters);
  }

  if (clearFavoritesBtn) {
    clearFavoritesBtn.addEventListener("click", () => {
      storage.setFavorites([]);
      renderFavorites();
      renderCards();
      updateFavoritesCount();
      showToast("Favorites cleared");
    });
  }

  if (favoritesSummaryBtn) {
    favoritesSummaryBtn.addEventListener("click", () => {
      const section = document.getElementById("favorites");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  if (mobileMenuBtn && siteNav) {
    mobileMenuBtn.addEventListener("click", () => {
      siteNav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".site-nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (siteNav) siteNav.classList.remove("open");
    });
  });

  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

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

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();

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
        formFeedback.textContent = `Thanks ${name}! You are subscribed for ${sport} updates${message ? " and your message is saved locally in this demo." : "."}`;
        formFeedback.className = "form-feedback success";
      }

      contactForm.reset();
      showToast("Form submitted successfully");
    });
  }
}

function initApp() {
  setTheme(storage.getTheme());
  duplicateTicker();

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  renderCards();
  renderFavorites();
  updateFavoritesCount();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", initApp);
