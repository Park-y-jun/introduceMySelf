//이미지 슬라이드
const firstSlide = document.querySelector(".slides:first-child");
const lastSlide = document.querySelector(".slides:last-child");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const nextBtn = () => {
  const currentSlide = document.querySelector(".showing");
  if (currentSlide) {
    currentSlide.classList.remove("showing");
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add("showing");
    } else {
      //원점 복귀
      firstSlide.classList.add("showing");
    }
  }
};
next.addEventListener("click", nextBtn);

const prevBtn = () => {
  const currentSlide = document.querySelector(".showing");
  if (currentSlide) {
    currentSlide.classList.remove("showing");
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add("showing");
    } else {
      //원점 복귀
      lastSlide.classList.add("showing");
    }
  }
};
prev.addEventListener("click", prevBtn);
