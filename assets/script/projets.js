
let rond1 = document.querySelector(".rond.one")
let rond2 = document.querySelector(".rond.two")
let rond3 = document.querySelector(".rond.three")
let rond4 = document.querySelector(".rond.four")
let rond5 = document.querySelector(".rond.five")



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  
  showSlides(slideIndex += n);

}
    
function showSlides(n) {
  let i;
  let z;
  let rond = document.querySelector(".rond")
  let slides = document.getElementsByClassName("projet");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  switch (n) {
    case 1:
      rond1.style.backgroundColor = "var(--roseChina)"
      rond2.style.backgroundColor = "var(--bleuVert)"
      rond3.style.backgroundColor = "var(--bleuVert)"
      rond4.style.backgroundColor = "var(--bleuVert)"
      rond5.style.backgroundColor = "var(--bleuVert)"
      break;
    case 6:
      rond1.style.backgroundColor = "var(--roseChina)"
      rond2.style.backgroundColor = "var(--bleuVert)"
      rond3.style.backgroundColor = "var(--bleuVert)"
      rond4.style.backgroundColor = "var(--bleuVert)"
      rond5.style.backgroundColor = "var(--bleuVert)"
      break;
    case 2:
      rond1.style.backgroundColor = "var(--bleuVert)"
      rond2.style.backgroundColor = "var(--roseChina)"
      rond3.style.backgroundColor = "var(--bleuVert)"
      rond4.style.backgroundColor = "var(--bleuVert)"
      rond5.style.backgroundColor = "var(--bleuVert)"
      break;
    case 3:
      rond1.style.backgroundColor = "var(--bleuVert)"
      rond2.style.backgroundColor = "var(--bleuVert)"
      rond3.style.backgroundColor = "var(--roseChina)"
      rond4.style.backgroundColor = "var(--bleuVert)"
      rond5.style.backgroundColor = "var(--bleuVert)"
      break;
    case 4:
      rond1.style.backgroundColor = "var(--bleuVert)"
      rond2.style.backgroundColor = "var(--bleuVert)"
      rond3.style.backgroundColor = "var(--bleuVert)"
      rond4.style.backgroundColor = "var(--roseChina)"
      rond5.style.backgroundColor = "var(--bleuVert)"
      break;
    case 5:
      rond1.style.backgroundColor = "var(--bleuVert)"
      rond2.style.backgroundColor = "var(--bleuVert)"
      rond3.style.backgroundColor = "var(--bleuVert)"
      rond4.style.backgroundColor = "var(--bleuVert)"
      rond5.style.backgroundColor = "var(--roseChina)"
      console.log(n);
      break;
    default:
      break;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }
  slides[slideIndex-1].style.display = "flex";
 
}

// trailer de la souris


document.querySelector(".darkModeBtn").addEventListener("mouseover", function(){
  mouseTrailer.style.width = "50px";
  mouseTrailer.style.height = "50px";
  mouseTrailer.style.borderRadius = "50px";
  mouseTrailer.style.transition = "0.2s";
  mouseInfos.style.opacity = "1";

})

document.querySelector(".darkModeBtn").addEventListener("mouseout", function(){
  mouseTrailer.style.width = "20px";
  mouseTrailer.style.height = "20px";
  mouseTrailer.style.borderRadius = "20px";
  mouseInfos.innerHTML = "";
  mouseInfos.style.opacity = "0";

})








