document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track img");
  const dots = document.querySelectorAll(".carousel-dots .dot");

  let index = 0;

  function goToSlide(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  });

  // Auto slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    goToSlide(index);
  }, 4000);
});