const items = [
  {
    title: "Neon Breakfast Bowl",
    category: "breakfast",
    description: "A healthy and modern breakfast combination with fruit, grains, and a fresh start for the day.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Future Toast Stack",
    category: "breakfast",
    description: "A practical breakfast card with rich texture, layered toppings, and a clean premium look.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Cyber Steak Plate",
    category: "lunch",
    description: "A bold and high-contrast lunch card designed to feel strong, modern, and sophisticated.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Urban Pasta Grid",
    category: "lunch",
    description: "A vibrant plate of pasta with a futuristic visual tone and practical content layout.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Crystal Berry Cake",
    category: "dessert",
    description: "Elegant dessert styling with sharp colors and a premium card design language.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Digital Choco Slice",
    category: "dessert",
    description: "A dessert card that blends smooth UI styling with a rich and clean presentation.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Blue Energy Drink",
    category: "drinks",
    description: "An eye-catching beverage card with cool colors and a sleek interactive panel feeling.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Aurora Fruit Shake",
    category: "drinks",
    description: "A fresh drink card with bright visuals, smooth glassmorphism styling, and polished spacing.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a90b0d7f?auto=format&fit=crop&w=900&q=80"
  }
];

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");

const detailModal = document.getElementById("detailModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";

function formatCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="card-image-wrap">
      ${item.image}
      <span class="card-badge">${formatCategory(item.category)}</span>
    </div>
    <div class="card-content">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <div class="card-actions">
        previewQuick View</button>
        detailsView Details</button>
      </div>
    </div>
  `;

  const buttons = card.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => openModal(item));
  });

  return card;
}

function getFilteredItems() {
  let filtered = [...items];

  if (currentCategory !== "all") {
    filtered = filtered.filter(item => item.category === currentCategory);
  }

  if (currentSearch.trim()) {
    const keyword = currentSearch.toLowerCase();
    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
    );
  }

  if (currentSort === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === "za") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  return filtered;
}

function renderCards() {
  const filteredItems = getFilteredItems();
  cardsContainer.innerHTML = "";

  if (filteredItems.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filteredItems.forEach(item => {
    cardsContainer.appendChild(createCard(item));
  });
}

function openModal(item) {
  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modalCategory.textContent = formatCategory(item.category);
  modalDescription.textContent = item.description;
  detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  detailModal.classList.add("hidden");
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderCards();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderCards();
  });
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderCards();
});

modalOverlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !detailModal.classList.contains("hidden")) {
    closeModal();
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

year.textContent = new Date().getFullYear();

renderCards();
