const content = document.getElementById("hero-content");
const accessories = document.getElementById("accessories");
const bgBehindImg = document.getElementById("bg-behind-img");
const salPriadi = document.getElementById("sal-priadi");
const vynil1 = document.getElementById("vynil-1");
const vynil2 = document.getElementById("vynil-2");
const vynil3 = document.getElementById("vynil-3");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  content.style.transform = `translateY(${value * 0.25}px)`;
  bgBehindImg.style.transform = `translateY(${-value * 0.5}px)`;
  salPriadi.style.transform = `translateY(${value * 0.5}px)`;
  vynil1.style.transform = `translateX(${value * 0.5}px)`;
  vynil2.style.transform = `translateX(${-value * 0.5}px)`;
  vynil3.style.transform = `translateX(${value * 0.25}px)`;
});

function adjustSectionHeight() {
  const heroImage = document.querySelector("#bg-behind-img");
  const heroSection = document.querySelector("#hero-section");

  if (heroImage) {
    const imageHeight = heroImage.height;

    heroSection.style.height = `${imageHeight - 150}px`;
  }
}

window.addEventListener("load", adjustSectionHeight);
window.addEventListener("resize", adjustSectionHeight);
