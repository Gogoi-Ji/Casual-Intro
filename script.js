const $ = (selector) => document.querySelector(selector);

const root = document.documentElement;
const themeToggle = $("#themeToggle");
const themeIcon = $("#themeIcon");
const themeText = $("#themeText");

document.title = SITE_CONFIG.siteTitle;

function applyTheme(theme) {
  const selected = theme === "dark" ? "dark" : "light";
  const colors = SITE_CONFIG.theme[selected];

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  root.dataset.theme = selected;

  const isDark = selected === "dark";
  themeIcon.textContent = isDark ? SITE_CONFIG.theme.lightIcon : SITE_CONFIG.theme.darkIcon;
  themeText.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.title = SITE_CONFIG.theme.toggleTitle;

  if (SITE_CONFIG.theme.rememberChoice) {
    localStorage.setItem("portfolioTheme", selected);
  }
}

const savedTheme = SITE_CONFIG.theme.rememberChoice
  ? localStorage.getItem("portfolioTheme")
  : null;

applyTheme(savedTheme || SITE_CONFIG.theme.default);

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

$("#heroName").textContent = SITE_CONFIG.labels.heroTitle;
$("#badge").textContent = SITE_CONFIG.badge;
$("#intro").textContent = SITE_CONFIG.intro;
const photo = $("#photo");
if (SITE_CONFIG.photo?.src) {
  const image = document.createElement("img");
  image.src = SITE_CONFIG.photo.src;
  image.alt = SITE_CONFIG.photo.alt || SITE_CONFIG.name;
  image.onerror = () => {
    photo.innerHTML = `<span>${SITE_CONFIG.photo.fallbackText || SITE_CONFIG.initials}</span>`;
  };
  photo.appendChild(image);
} else {
  photo.innerHTML = `<span>${SITE_CONFIG.photo?.fallbackText || SITE_CONFIG.initials}</span>`;
}
$("#polaroidCaption").textContent = SITE_CONFIG.polaroidCaption;
$("#polaroidHint").textContent = SITE_CONFIG.polaroidHint;

$("#aboutLabel").innerHTML = SITE_CONFIG.labels.aboutLabel;
$("#aboutTitle").innerHTML = SITE_CONFIG.labels.aboutTitle;
$("#aboutText").textContent = SITE_CONFIG.about;
$("#aboutExtra").textContent = SITE_CONFIG.aboutExtra;
$("#exploringLabel").textContent = SITE_CONFIG.labels.exploringLabel;
$("#currentlyAt").textContent = SITE_CONFIG.currentlyAt;

$("#funLabel").innerHTML = SITE_CONFIG.labels.funLabel;
$("#funTitle").innerHTML = SITE_CONFIG.labels.funTitle;

$("#contactLabel").innerHTML = SITE_CONFIG.labels.contactLabel;
$("#contactTitle").textContent = SITE_CONFIG.labels.contactTitle;
$("#contactText").textContent = SITE_CONFIG.labels.contactText;
$("#emailBtn").textContent = SITE_CONFIG.labels.emailButton;
$("#whatsappBtn").textContent = SITE_CONFIG.labels.whatsappButton;
$("#phoneBtn").textContent = SITE_CONFIG.labels.phoneButton;

$("#footerName").textContent = SITE_CONFIG.footerName;
$("#footerBrand").textContent = SITE_CONFIG.footerBrand;

$("#secretTitle").textContent = SITE_CONFIG.secret.title;
$("#secretText").textContent = SITE_CONFIG.secret.text;
$("#secretExtraText").textContent = SITE_CONFIG.secret.extraText;
$("#secretClose").textContent = SITE_CONFIG.secret.button;

const linksContainer = $("#links");

SITE_CONFIG.socials.forEach((social) => {
  const link = document.createElement("a");

  link.className = `link-card ${social.theme}`;
  link.href = social.url;

  if (social.url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  link.innerHTML = `
    <span class="icon">${social.icon}</span>
    <b>${social.name}</b>
  `;

  link.addEventListener("click", () => showToast(`Opening ${social.name} ✨`));
  linksContainer.appendChild(link);
});

SITE_CONFIG.funCards.forEach((card) => {
  const element = document.createElement("div");
  element.className = "fun-card";
  element.innerHTML = `
    <div class="emoji">${card.emoji}</div>
    <h3>${card.title}</h3>
    <p>${card.text}</p>
  `;
  $("#funGrid").appendChild(element);
});

$("#emailBtn").href = `mailto:${SITE_CONFIG.contact.email}`;
$("#whatsappBtn").href = `https://wa.me/${SITE_CONFIG.contact.whatsapp}`;
$("#phoneBtn").href = `tel:${SITE_CONFIG.contact.phone}`;

const toast = $("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

let clicks = 0;

$("#avatar").addEventListener("click", () => {
  clicks++;

  if (clicks >= 5) {
    $("#secret").classList.add("active");
    clicks = 0;
  }
});

function closeSecret() {
  $("#secret").classList.remove("active");
}

$("#secretClose").addEventListener("click", closeSecret);

$("#secret").addEventListener("click", (event) => {
  if (event.target === $("#secret")) closeSecret();
});