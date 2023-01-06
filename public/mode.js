//토글

// 영화 api

//scroll

//다크 모드

const darkMode = document.querySelector(".light__icon:first-child");
const whiteMode = document.querySelector(".light__icon:last-child");
const mainblack = document.querySelector("main");
const sideBlack = document.querySelector(".sidebar");
const bodyBlack = document.querySelector("body");
const footerBlack = document.querySelector(".footer__bar");

const goDarkMode = () => {
  bodyBlack.classList.toggle("dark");
  sideBlack.classList.toggle("dark");
  mainblack.classList.toggle("dark__main");
  footerBlack.classList.toggle("dark");
  const currentMode = document.querySelector(".mode");
  if (currentMode) {
    currentMode.classList.remove("mode");
    const nextMode = currentMode.nextElementSibling;
    if (nextMode) {
      nextMode.classList.add("mode");
    } else {
      darkMode.classList.add("mode");
    }
  }
};

darkMode.addEventListener("click", goDarkMode);

const goWhiteMode = () => {
  bodyBlack.classList.toggle("dark");
  sideBlack.classList.toggle("dark");
  mainblack.classList.toggle("dark__main");
  footerBlack.classList.toggle("dark");
  const currentMode = document.querySelector(".mode");
  if (currentMode) {
    currentMode.classList.remove("mode");
    const prevMode = currentMode.previousElementSibling;
    if (prevMode) {
      prevMode.classList.add("mode");
    } else {
      whiteMode.classList.add("mode");
    }
  }
};

whiteMode.addEventListener("click", goWhiteMode);

//snow mode
const webPage = document.querySelector(".web__page");
const snowing = document.querySelector(".snow__icon");
const body = document.querySelector("body");

const makeSnowFlake = () => {
  const duration = Math.random() * 50 + 20;
  const snowFlake = document.createElement("div");
  snowFlake.classList.add("snowflake");
  snowFlake.style.left = `${Math.random() * window.screen.width}px`;
  snowFlake.style.animation = `fall ${duration}s linear`;
  webPage.appendChild(snowFlake);

  setTimeout(() => {
    //webPage.removeChild(snowFlake);
    webPage.removeChild(snowFlake);
  }, duration * 1000);
};

snowing.addEventListener("click", makeSnowFlake);
