const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

const newText = "New text after clicking!";

document.getElementById("myButton").addEventListener("click", () => {
	console.log("Button clicked with ID:", event.target.id);
  });


button.addEventListener("click", () => {
  paragraph.textContent = newText;
});
