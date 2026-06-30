import { initScrollAnimations } from "./modules/animations.js";

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();

  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
