const d = document;
const $iconosShare = d.querySelectorAll('.icono-share');
const $footer = d.querySelector("footer");
const $articles = d.querySelectorAll(".footer-items");

$iconosShare.forEach(el => {
  el.addEventListener('click', e => {
    $articles[0].classList.toggle("footer-no-activo");
    $articles[1].classList.toggle("footer-no-activo");
    $footer.classList.toggle("footer");
  })
})