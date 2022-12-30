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
const url =
  "https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=3e1366d1c7506ea8d2d3bfa34c4583b5";
const API_KEY = "api_key=3e1366d1c7506ea8d2d3bfa34c4583b5";
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

const movies = document.querySelector("#movies");
const clickMovies = document.querySelector(".show__movies");

const movie = async () => {
  const res = await fetch(url);
  const datas = await res.json();
  //console.log(datas)
  const movieList = datas.results;
  movies.innerHTML = "";

  movieList.forEach((data) => {
    setTimeout(() => {
      const { title, poster_path } = data;
      const favoritMovie = document.createElement("div");
      favoritMovie.classList.add("movie");
      favoritMovie.innerHTML = `<img src="${
        POSTER_URL + poster_path
      }" alt="${title}">
    <p>${title}</p>`;
      movies.appendChild(favoritMovie);
    }, 2000);
  });
};

clickMovies.addEventListener("click", movie);

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
