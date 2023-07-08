const title = document.querySelector(".title:first-child h1");

function hadleTitleClick() {
  console.log("click h1!");
}

function handleMouseEnter() {
  title.innerText = "mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("click", hadleTitleClick);
title.addEventListener("mouseleave", handleMouseLeave);
title.addEventListener("mouseenter", handleMouseEnter);
