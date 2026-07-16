// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate on Scroll) if it exists
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }
});
