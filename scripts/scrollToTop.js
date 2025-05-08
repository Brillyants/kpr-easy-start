const backToTopButton = document.getElementById("back-to-top");

function scrollToTop() {
  document
    .getElementById("hero-section")
    .scrollIntoView({ behavior: "smooth" });
}

function handleScroll() {
  if (window.scrollY === 0) {
    backToTopButton.style.display = "none";
  } else {
    backToTopButton.style.display = "block";
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();
