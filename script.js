// Get references to the menu toggle button, navigation links container, and its icon
const menuToggle = document.getElementById("nav-toggle-btn"); // Matches HTML ID
const navLinks = document.getElementById("nav-menu"); // Matches HTML ID
const toggleIcon = menuToggle.querySelector("i");
const navItems = document.querySelectorAll("#nav-menu a"); // Matches HTML ID

// Toggle mobile menu open/close on button click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  toggleIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu when a nav item is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggleIcon.setAttribute("class", "ri-menu-line");
  });
});

// Ensure menu is closed if viewport is resized above tablet width
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("open");
    toggleIcon.setAttribute("class", "ri-menu-line");
  }
});
