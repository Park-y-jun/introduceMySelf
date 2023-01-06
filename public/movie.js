const API_KEY = config.apikey;
const url = `https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&${API_KEY}`;
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

const movies = document.querySelector("#movies");
const clickMovies = document.querySelector(".show__movies");
//top level await
const spinner = document.querySelector("#loading");
const datas = await fetch(url).then((res) => res.json());
console.log(datas);

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
      const { title, poster_path, id } = data;
      const favoritMovie = document.createElement("div");
      favoritMovie.classList.add("movie");
      favoritMovie.innerHTML = `<img id="${id}" src="${
        POSTER_URL + poster_path
      }" alt="${title}">
    <p>${title}</p>`;

      movies.appendChild(favoritMovie);
      document.getElementById(id).addEventListener("click", () => {
        console.log(id);
        fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?${API_KEY}&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const videoList = data.results[0];
            console.log(videoList);
            const videoDiv = document.createElement("div");
            videoDiv.classList.add("video");
            videoDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoList.key}" title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe> 
  <button class="xBtn">X</button>`;
            movies.appendChild(videoDiv);
            const closeBtn = document.querySelector(".xBtn");
            const videoPlayer = document.querySelector(".video");
            closeBtn.addEventListener("click", () => {
              movies.removeChild(videoPlayer);
            });
          });
      });
    }, 2000);
  });
};
clickMovies.addEventListener("click", movie);
