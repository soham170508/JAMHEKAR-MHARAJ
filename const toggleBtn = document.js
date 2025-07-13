const toggleBtn = document.getElementById("langToggle");
let currentLang = "en";

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "mr" : "en";
  document.querySelectorAll(".lang-en").forEach(el => {
    el.style.display = currentLang === "en" ? "block" : "none";
  });
  document.querySelectorAll(".lang-mr").forEach(el => {
    el.style.display = currentLang === "mr" ? "block" : "none";
  });
  toggleBtn.textContent = currentLang === "en" ? "मराठी" : "English";
});
