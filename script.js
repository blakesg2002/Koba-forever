let currentIndex = 0;
const slides = Array.from(document.querySelectorAll(".slide"));
const background = document.getElementById("bg");

// Shuffle slides randomly on load
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffleArray(slides);

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    // Pause video if it's a video
    if (slide.tagName === "VIDEO") {
      slide.pause();
    }
  });

  const currentSlide = slides[index];
  currentSlide.classList.add("active");

  // Play video if it's a video
  if (currentSlide.tagName === "VIDEO") {
    currentSlide.play();
    background.style.backgroundImage = ""; // optional: set a neutral background
  } else if (currentSlide.tagName === "IMG") {
    background.style.backgroundImage = `url('${currentSlide.src}')`;
  }
}

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  showSlide(currentIndex);
}

// ✅ Only one initial show and one timer
showSlide(currentIndex);

setInterval(() => {
  changeSlide(1);
}, 5000);
