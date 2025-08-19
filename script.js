   let currentIndex = 0;
    const slides = Array.from(document.querySelectorAll(".slide"));
    const background = document.getElementById("bg");

    // Shuffle slides randomly on load
    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i].src, arr[j].src] = [arr[j].src, arr[i].src];
      }
    }

    shuffleArray(slides);

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[index].classList.add("active");

      // Set the background image to match the current image
      background.style.backgroundImage = `url('${slides[index].src}')`;
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

    // Initialize
    showSlide(currentIndex);

    // Auto-slide every 3 seconds
    setInterval(() => {
      changeSlide(1);
    },10000);

        // Show the first slide 
        showSlide(currentIndex);

        // Auto-slide
        setInterval(() => {
            changeSlide(1); 
        }, 10000);