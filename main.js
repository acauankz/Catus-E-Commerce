window.addEventListener("scroll", function () {
  let header = document.querySelector("#header-container");
  header.classList.toggle("roll", window.scrollY > 0);
});
