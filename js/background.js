const images = ["0.jpg", "1.jpg", "2.jpg"];

const choiceImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${choiceImg}`;
bgImg.style = "width:500px";
console.log(bgImg.style);

document.body.appendChild(bgImg);
