const hamburger = document.querySelector("#toggle-btn");

hamburger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

document.addEventListener("DOMContentLoaded", function () {
  const userName = "Prima"; // Replace with the actual user name
  document.querySelector(".navbar-text").textContent = `Halo, ${userName}`;
});
