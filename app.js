// ── Workshop Cards ────────────────────────────────────────────────────────────
function renderWorkshops() {
  const grid = document.getElementById("workshop-grid");
  grid.innerHTML = WORKSHOPS.map(w => `
    <div class="workshop-card">
      <div class="card-accent" style="background:${w.color}"></div>
      <div class="card-body">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
          <span class="card-tag" style="background:${w.tagBg};color:${w.tagColor}">${w.level}</span>
          ${w.logo ? `<img src="${w.logo}" alt="" style="height:28px;width:28px;border-radius:50%;object-fit:cover;" />` : ""}
        </div>
        <h3 class="card-title">${w.title}</h3>
        <p class="card-desc">${w.description}</p>
        <div class="card-meta">
          <span>⏱ ${w.duration}</span>
          <span>🏷 ${w.level}</span>
        </div>
        <a href="${w.link}" class="card-link" target="_blank" rel="noopener">
          Start Workshop →
        </a>
      </div>
    </div>
  `).join("");
}

// ── Resource Cards ────────────────────────────────────────────────────────────
function renderResources(items, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(r => `
    <div class="resource-card">
      <div class="resource-icon" style="background:${r.iconBg}">${r.icon}</div>
      <div class="resource-info">
        <div class="resource-title" title="${r.title}">${r.title}</div>
        <div class="resource-desc">${r.description}</div>
        <a href="${r.link}" class="resource-link" target="_blank" rel="noopener">Open →</a>
      </div>
    </div>
  `).join("");
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".resource-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
    });
  });
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function animateCounter(el, target) {
  let current = 0;
  const step = Math.ceil(target / 30);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

function initStats() {
  const total = WORKSHOPS.length;
  const resTotal = SLIDES.length + CODE_SAMPLES.length + VIDEOS.length + LINKS.length;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(document.getElementById("stat-workshops"), total);
        animateCounter(document.getElementById("stat-resources"), resTotal);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const section = document.querySelector(".about");
  if (section) obs.observe(section);
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderWorkshops();
  renderResources(SLIDES,        "slides-grid");
  renderResources(CODE_SAMPLES,  "code-grid");
  renderResources(VIDEOS,        "videos-grid");
  renderResources(LINKS,         "links-grid");
  initTabs();
  initStats();
});
