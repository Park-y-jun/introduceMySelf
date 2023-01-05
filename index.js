//토글
let sidebar = document.querySelector(".sidebar");
let footer = document.querySelector(".footer__bar");

window.addEventListener("load", () => {
  setTimeout(() => {
    sidebar.classList.toggle("show");
    footer.classList.toggle("show");
  }, 1500);
});
// 영화 api
const API_KEY = config.apikey;
const url = `https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&${API_KEY}`;
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

const movies = document.querySelector("#movies");
const clickMovies = document.querySelector(".show__movies");
//top level await
const spinner = document.querySelector("#loading");
const datas = await fetch(url).then((res) => res.json());

const movie = () => {
  window.scrollTo({
    top: 4500,
    behavior: "smooth",
  });
  const movieList = datas.results;
  setTimeout(() => {
    spinner.classList.add("spinner");
  }, 1000);

  setTimeout(() => {
    movies.innerHTML = "";
  }, 2000);

  movieList.forEach((data) => {
    setTimeout(() => {
      const { title, poster_path } = data;
      const favoritMovie = document.createElement("div");
      favoritMovie.classList.add("movie");
      favoritMovie.innerHTML = `<img src="${
        POSTER_URL + poster_path
      }" alt="${title}">
    <p>${title}</p>
    <button id="trailer">예고편</button>`;
      movies.appendChild(favoritMovie);
    }, 2000);
  });
};
clickMovies.addEventListener("click", movie);

//<a href="https://api.themoviedb.org/3/movie/${id}/videos?${API_KEY}&language=en-US"></a>

// const showTrailer = document.querySelector("#trailer");

// const movieTrailer = async() => {
//   const movieList = datas.results;
//   const
// };

// showTrailer.addEventListener("click", movieTrailer);

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
  } else {
    // 첫 클릭
    firstSlide.classList.add("showing");
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
  } else {
    //첫 클릭
    lastSlide.classList.add("showing");
  }
};
prev.addEventListener("click", prevBtn);

//scroll
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
