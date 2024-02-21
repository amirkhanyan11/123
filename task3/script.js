const hiddenDiv = document.getElementById("hidden-div");
const showHideButton = document.getElementById("show-hide-button");

let isHidden = true;
showHideButton.addEventListener("click", () => {
  if (isHidden) {
    hiddenDiv.style.display = "block";
    showHideButton.textContent = "Hide";
  } else {
    hiddenDiv.style.display = "none";
    showHideButton.textContent = "Show";
  }
  isHidden = !isHidden;
});
