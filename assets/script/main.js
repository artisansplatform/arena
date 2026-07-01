import { initScrollAnimations } from "./modules/animations.js";
import { initHeader } from "./modules/header.js";

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initHeader();

  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
