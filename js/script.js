// hämtar html-taggar
const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

// taggarna togglas
function toggleMeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')
}

// lyssnar när någon klickar på hamburgarmenyn
burger.addEventListener('click', toggleMeny)



// slideIndex är en variabel med siffran 1. den slide du är på just nu
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// ny funktion
function showSlides(n) {

  //räknevariabel, är en plats i listan
  var i;

  // hämtar fler html taggar
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // loop, kör en kod ett visst antal gånger, gömmer alla slides med display none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //slideindex är den slide du är på just nu(1 2 3 4) / hur man räknar i listor (0 1 2 3).

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
}