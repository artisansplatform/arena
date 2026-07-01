// Header behavior: scroll progress bar + scrolled state.
// Kept out of the markup so the site stays free of inline scripts.
export function initHeader() {
  const header = document.getElementById("arenaHeader");
  const progress = document.getElementById("scrollProgress");
  if (!header && !progress) return;

  const onScroll = () => {
    const scrollTotal =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (progress && scrollTotal > 0) {
      progress.style.width = (window.scrollY / scrollTotal) * 100 + "%";
    }

    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 8);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
