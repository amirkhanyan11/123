const hiddenText = document.getElementById("paragraph");
const showHideButton = document.getElementById("toggleButton");

let isHidden = true;
showHideButton.addEventListener("click", () => {
  if (isHidden) {
    hiddenText.style.display = "block";
    showHideButton.textContent = "Hide";
  } else {
    hiddenText.style.display = "none";
    showHideButton.textContent = "Show";
  }
  isHidden = !isHidden;
});
