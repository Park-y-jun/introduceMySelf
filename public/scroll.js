const scrollProfile = document.querySelector(".scroll__profile");
const scrollSkill = document.querySelector(".scroll__skill");
const scrollEducation = document.querySelector(".scroll__education");
const scrollGallery = document.querySelector(".scroll__gallery");
const scrollFooter = document.querySelector(".scroll__footer");

scrollProfile.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollSkill.addEventListener("click", () => {
  window.scrollTo({
    top: 780,
    behavior: "smooth",
  });
});

scrollEducation.addEventListener("click", () => {
  window.scrollTo({
    top: 1500,
    behavior: "smooth",
  });
});

scrollGallery.addEventListener("click", () => {
  window.scrollTo({
    top: 2300,
    behavior: "smooth",
  });
});
scrollFooter.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
