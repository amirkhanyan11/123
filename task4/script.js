const showHideButton = document.getElementById("show-hide-button");

let isHidden = true;
showHideButton.addEventListener("click", () => {
  if (isHidden) {
    showHideButton.textContent = "Goodbye";
  } else {
    showHideButton.textContent = "Hello";
  }
  isHidden = !isHidden;
});
