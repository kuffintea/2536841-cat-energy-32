const mb = document.querySelectorAll('.main-header__toggle');
const m = document.querySelector('.main-nav');

document.querySelector('.main-header--nojs').classList.remove('main-header--nojs');

for (const i of mb) {
  i.onclick = function() {
    m.classList.toggle('main-nav--show');
  };
}
