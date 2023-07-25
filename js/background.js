const images = ["0.jpg", "1.jpg", "2.jpg"];
const choiceImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.getElementById("bg");
bgImg.style.backgroundImage = `url('img/${choiceImg}')`;
