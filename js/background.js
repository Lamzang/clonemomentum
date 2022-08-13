images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const Image = document.createElement("img");
Image.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url("img/${chosenImage}")`;
