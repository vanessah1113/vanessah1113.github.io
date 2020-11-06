"use strict";

let slides;
let idx = 0;
let maxIdx;

const slider = () => {
  slides = document.getElementsByClassName("slide");
  maxIdx = slides.length - 1;
  console.log(maxIdx);
};

const showSlide = (i) => {
  for (const slide of slides) {
    slide.classList.remove("active");
  }

  slides[i].classList.add("active");
};

const handleNext = () => {
  if (idx + 1 <= maxIdx) {
    idx += 1;
  } else {
    idx = 0;
  }
  showSlide(idx);
};

const handlePrev = () => {
  if (idx - 1 >= 0) {
    idx -= 1;
  } else {
    idx = maxIdx;
  }
  showSlide(idx);
};
window.addEventListener("DOMContentLoaded", () => slider());
