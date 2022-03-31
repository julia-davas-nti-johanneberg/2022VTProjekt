// hämtar html-taggar som har klassen navlinks och burger
const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

// taggarna togglas, navActive och toggle tas bort eller läggs till
function toggleMeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')
}

// lyssnar när någon klickar på hamburgarmenyn, den kör en funktion som heter toggleMeny vilket man ser ovan
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

  //räknevariabel, används i loopar, i är en plats i listan
  var i;

  // hämtar fler html taggar med dessa klasser
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  //om n är större än antal slides kommer den ändra nuvarande slide till första
  if (n > slides.length) {slideIndex = 1}

  // om n är mindre än ett, går den till sliden längst bak
  if (n < 1) {slideIndex = slides.length}

  // loop, kör en kod ett visst antal gånger, gömmer alla slides med display none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // dots istället för slides, men inte dölja
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // två listor med element, slideindex är den slide du är på just nu(1 2 3 4) då måste man ta minus 1 för att få hur man räknar i listor (0 1 2 3).
  
  // Visar bara den slide man är på nu, alla andra är gömda
  slides[slideIndex-1].style.display = "block";

  // gör punkten aktiv, den man är på nu
  dots[slideIndex-1].className += " active";
}