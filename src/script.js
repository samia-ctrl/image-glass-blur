const squares = document.querySelectorAll(".square-content");
const overlay = document.querySelector(".overlay");

overlay.style.display = "none";

function displayContent() {
  this.appendChild(overlay); 
  overlay.style.display = "block";
}

function hideContent() {
  overlay.style.display = "none";
}

squares.forEach((square) => {
  square.addEventListener("mouseenter", displayContent);
  square.addEventListener("mouseleave", hideContent);
});
