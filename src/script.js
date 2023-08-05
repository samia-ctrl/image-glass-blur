const squareContent = document.querySelector("#square-content");
const overlay = document.querySelector(".overlay");
overlay.style.display = "none";

function displayContent() {
  squareContent.appendChild(overlay);
  overlay.style.display = "block";
}

squareContent.addEventListener("mouseenter", displayContent);

function hideContent() {
  squareContent.appendChild(overlay);
  overlay.style.display = "none";
}
squareContent.addEventListener("mouseleave", hideContent);
