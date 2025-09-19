document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("main section");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1); // remove the #

      // Hide all sections
      sections.forEach(section => {
        section.style.display = "none";
      });

      // Show the target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });

  // Optionally, show only the first section at the start
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });
});
