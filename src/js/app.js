document.addEventListener("DOMContentLoaded", () => {
  let mainContainer = document.getElementById("main");
  let sliderImage = document.getElementById("slider-img");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");

  let images = [
    "src/img/javascript-1.jpeg",
    "src/img/javascript-2.jpeg",
    "src/img/javascript-3.jpeg",
  ];
  let i = 0;

  // Condition and go to the Method
  const slideShow = () => {
    if (i < 0) {
      i = images.length - 1;
    } else if (i >= images.length) {
      i = 0;
    }

    sliderImage.src = images[i];
  };

  nextBtn.addEventListener("click", () => {
    i++;
    slideShow();
  });
  prevBtn.addEventListener("click", () => {
    i--;
    slideShow();
  });

  // Auto Slider;
  let autoPlay = setInterval(() => {
    i++;
    slideShow();
  }, 3000);

  // Clear the Auto Play;

  mainContainer.addEventListener("mouseover", (e) => {
    if (
      e.target.className == "fa-solid fa-arrow-left" ||
      e.target.className == "fa-solid fa-arrow-right"
    ) {
      clearInterval(autoPlay);
    }
  });

  // Reload the AutoPlay
  mainContainer.addEventListener("mouseout", (e) => {
    if (
      e.target.className == "fa-solid fa-arrow-left" ||
      e.target.className == "fa-solid fa-arrow-right"
    ) {
      autoPlay = setInterval(() => {
        i++;
        slideShow();
      }, 3000);
    }
  });
});
