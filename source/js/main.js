const vw = window.innerWidth;

if (vw < 768) {
  const sidenav__nav = document.getElementById("sidenav__nav");
  const sidenav__toggle = document.getElementById("sidenav__toggle");

  sidenav__toggle.addEventListener("click", function () {
    sidenav__nav.classList.toggle("sidenav__nav--opened");
  });
}
