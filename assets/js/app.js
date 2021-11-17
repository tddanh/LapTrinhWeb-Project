// NÚT QUAY VỀ ĐẦU TRANG
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 300) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}

// CHUYỂN FORM LOGIN - RESGITER
document.getElementById('myBtn').addEventListener("click", function(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn-login-modal");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
// HEADER SCROLL
window.addEventListener("scroll", function(){
var header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY >0);
})


// HIDE AND SHOW FORM LOGIN
var a;
function show(){
    if(a==1){
        document.getElementById("modal").style.display="block";
    }
    else{
        document.getElementById("modal").style.display="none"
        return a=1;
    }
}
var b;
function hide(){
    if(a==1){
        document.getElementById("modal").style.display="none";
    }
    else{
        document.getElementById("modal").style.display="block"
        return a=1;
    }
}

// Next/previous controls 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
