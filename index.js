window.onload = function () {
  document.querySelector(".notification-panel").classList.add("active");
  document.querySelector("header").classList.add("active");
};

let notificationPanel = document.querySelector(".notification-panel");
let header = document.querySelector("header");
document.querySelector(".button-close").addEventListener("click", function () {
  notificationPanel.classList.add("hidden");
  header.classList.add('hidden')
});

window.onscroll = function () {
  if (window.scrollY > 300) {
    document.querySelector(".newsletter-card").classList.add("active");
  }
};

let newsletterCard= document.querySelector(".newsletter-card");
document.querySelector(".close-newsletter-card").addEventListener("click", function () {
  newsletterCard.classList.add("hidden");
});
