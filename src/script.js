const squareContent = document.querySelector("#square-content");
const overlay = document.querySelector(".overlay")
squareContent.appendChild(overlay);

squareContent.addEventListener(
  "mouseenter",
  () => (overlay.style.display = "block")
);
squareContent.addEventListener(
  "mouseleave",
  () => (overlay.style.display = "none")
);
