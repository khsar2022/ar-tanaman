const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);

let mybutton = document.getElementById('btn-back-to-top');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let slidePosition = 0;
SlideShow();

function SlideShow() {
  let i;
  let slides = document.getElementsByClassName('carousel');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }
  slides[slidePosition - 1].style.display = 'block';
  setTimeout(SlideShow, 5000); // Change image every 2 seconds
}
