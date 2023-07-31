const navSlideWindow = document.querySelector(".js-list");
const navToggleButton = document.querySelector("button[aria-controls=js-list]");
const themeToggle = document.querySelector("input[aria-controls=js-theme]");

navToggleButton.addEventListener("click", () => {
  const isVisible = navSlideWindow.getAttribute("data-visible");

  if (isVisible === "false") {
    navSlideWindow.setAttribute("data-visible", true);
    navToggleButton.setAttribute("aria-expanded", true);
  } else if (isVisible === "true") {
    navSlideWindow.setAttribute("data-visible", false);
    navToggleButton.setAttribute("aria-expanded", false);
  }
});

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.className = "theme-dark-pink";
  } else {
    document.body.className = "theme-default";
  }
});
