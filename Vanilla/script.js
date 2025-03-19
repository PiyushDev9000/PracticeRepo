const images = [
  "https://i.pinimg.com/736x/52/f9/7c/52f97cef3cab0058c99ee61a914b49ca.jpg",
  "https://i.pinimg.com/736x/61/76/22/6176222d555e0023f9bcd1a50bab374c.jpg",
  "https://i.pinimg.com/736x/ae/bd/c6/aebdc63e8f62ad58fdffc91c289a17bb.jpg",
  "https://i.pinimg.com/736x/34/50/14/3450145f04c4e946013937669ce2660a.jpg",
  "https://i.pinimg.com/736x/dc/26/21/dc262104d1e9ae09325dc478011f11ee.jpg",
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function prevSlide() {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  slider.src = images[currentIndex];
}

function nextSlide() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  slider.src = images[currentIndex];
}
