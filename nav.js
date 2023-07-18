const navSlideWindow = document.querySelector(".js-list");
const navToggleButton = document.querySelector("button[aria-controls=js-list]");

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
