let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesToShow = 4;

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = slideIndex; i < slideIndex + slidesToShow; i++) {
    if (slides[i]) {
      slides[i].style.display = 'block';
    }
  }
}

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex >= totalSlides - slidesToShow) {
    slideIndex = totalSlides - slidesToShow;
  }
  showSlides();
}

showSlides();
