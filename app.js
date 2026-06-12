document.getElementById("nav-logo").textContent =
  PROFILE.name.split(" ")[0].toLowerCase() + ".dev";

document.getElementById("hero-name").textContent    = PROFILE.name;
document.getElementById("hero-tagline").textContent = PROFILE.tagline;

document.getElementById("about-text").textContent = PROFILE.about;

const grid = document.getElementById("projects-grid");

PROJECTS.forEach(p => {
  let mediaHTML = `<div class="no-media">no media</div>`;

  if (p.media) {
    if (p.type === "video") {
      mediaHTML = `<video src="${p.media}" muted loop autoplay playsinline></video>`;
    } else {
      mediaHTML = `<img src="${p.media}" alt="${p.name}" loading="lazy" />`;
    }
  }

  const tags = p.techs.map(t => `<span class="tag">${t}</span>`).join("");

  grid.innerHTML += `
    <div class="project-item">
      ${mediaHTML}
      <div class="project-info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="tags">${tags}</div>
        <div class="card-links">
          <a href="${p.github}" target="_blank">GitHub</a>
        </div>
      </div>
    </div>`;
});

function slide(dir) {
  grid.scrollBy({ left: dir * 260, behavior: "smooth" });
}

const contacts = [
  { label: "Email",    value: PROFILE.email,              href: `mailto:${PROFILE.email}` },
  { label: "GitHub",   value: "@mattheusramos",           href: PROFILE.github },
  { label: "LinkedIn", value: "in/matheus-ramos-cruz",    href: PROFILE.linkedin },
  { label: "WhatsApp", value: "+55 31 9 9810-6500",       href: PROFILE.whatsapp },
];

const list = document.getElementById("contact-list");
contacts.forEach(c => {
  list.innerHTML += `
    <a class="contact-item" href="${c.href}" target="_blank">
      <div>
        <span class="label">${c.label}</span>
        ${c.value}
      </div>
    </a>`;
});

document.getElementById("footer").textContent =
  `© ${new Date().getFullYear()} ${PROFILE.name}`;
