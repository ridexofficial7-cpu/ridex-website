/**
 * RideX Public Website configuration
 * Keep public URLs here. Never place API keys, passwords or private secrets in this file.
 *
 * Replace the three "#" placeholders when the final public app/admin URLs are confirmed.
 */
const RIDEX_SITE_CONFIG = {
  adminLoginUrl: "#",
  customerAppUrl: "#",
  driverAppUrl: "#",
};

function applyRideXLinks() {
  const adminLinks = [
    document.getElementById("admin-login-link"),
    document.getElementById("admin-login-footer"),
  ].filter(Boolean);

  for (const link of adminLinks) link.href = RIDEX_SITE_CONFIG.adminLoginUrl;

  const customerLinks = document.querySelectorAll('[aria-label="Google Play"]');
  const driverLinks = document.querySelectorAll('[aria-label="App Store"]');

  customerLinks.forEach(link => link.href = RIDEX_SITE_CONFIG.customerAppUrl);
  driverLinks.forEach(link => link.href = RIDEX_SITE_CONFIG.driverAppUrl);
}

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav a")];

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + visible.target.id
    );
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: [0, .25, .5] });

sections.forEach(section => observer.observe(section));
applyRideXLinks();
