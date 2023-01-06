const sidebar = document.querySelector(".sidebar");
const footer = document.querySelector(".footer__bar");

window.addEventListener("load", () => {
  setTimeout(() => {
    sidebar.classList.toggle("show");
    footer.classList.toggle("show");
  }, 1500);
});
