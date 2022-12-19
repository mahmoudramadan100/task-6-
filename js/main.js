let scroll = document.querySelector('.scroll-top');
let section = document.querySelector('.testmoinal');
let imgOne = document.querySelector('.child-one');
let imgTwo = document.querySelector('.child-two');
let imgThree = document.querySelector('.child-three');
let navbar = document.querySelector('.navbar');
let scrollUp = document.querySelector('.header');
let imgScroll = document.querySelector(".img-content img");
let sectionProgress = document.querySelector(".section-progress");
let progressSpans = document.querySelectorAll(".one span");

window.onscroll = function () {
  if (window.scrollY >= sectionProgress.offsetTop - 200) {
    progressSpans.forEach((span) => {
      span.style.height = span.dataset.height;
    });
  }
  if(window.scrollY >= section.offsetTop + 200 ) {
    imgThree.classList.add('fade-left');
    imgTwo.classList.add('fade-right');
   };
   if (window.scrollY > 400) {
    navbar
        .classList
        .add('navbar-scroll');
} else {
    navbar
        .classList
        .remove('navbar-scroll');
}

if(window.scrollY >= 500) {
  scroll.style.display= "block";
} else {
  scroll.style.display = "none"
}

};

window.onclick = function() {
  scroll({
    top: 0,
    behavior: "smooth"
  });
}
// window.onscroll = () => {
    
// };
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}