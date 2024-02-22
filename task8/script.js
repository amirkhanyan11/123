const count = document.getElementById("count");
const button = document.getElementById("button");

let clickCount = 1;

button.addEventListener("click", () => {
  
  count.textContent = clickCount++;
});
