const images = ["0.jpg", "1.jpg", "2.jpg"];

const choiceImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.id = "bg";
bgImg.src = `img/${choiceImg}`;
bgImg.appendChild(body);

document.body.appendChild(bgImg);
