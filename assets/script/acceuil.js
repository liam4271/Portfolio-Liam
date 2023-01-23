
// animation acceuil au click sur les titre


function changementStyleWeb()
{
  competenceHome.style.opacity = "1";
  carroussel.style.opacity = '1'
  competenceHome.style.transition = '1s'
  competenceHome.innerHTML = "Html, Css, Javascript et Wordpress. "
  carouselAna.style.display = 'none'
  carouselDev.style.display = 'block'
  // image1.src="assets/media/img/LaetitiaProjet.png" 
}
function changementStyleAnalyse()
{
  competenceHome.style.opacity = "1";
  carroussel.style.opacity = '1'
  competenceHome.style.transition = '1s'
  competenceHome.innerHTML = "Phyton, Power-bi, Google data studio, Sql."
  carouselDev.style.display = 'none'
  carouselAna.style.display = 'block'
  // image2.style.display = 'none'
  // image3.style.display = 'none'
  // image1.src="assets/media/img/ecoshifting.png"
}

function changementTextAnalyse(){
  carroussel.style.opacity = '0'
  competenceHome.style.opacity = '0'
  competenceHome.style.transition = '0.5s'
  miseEnAttente(changementStyleAnalyse);
  
}
function changementTextWeb(){
  competenceHome.style.opacity = '0'
  carroussel.style.opacity = '0'
  // image2.style.display = 'block'
  // image3.style.display = 'block'
  competenceHome.style.transition = '0.5s'
  
  miseEnAttente(changementStyleWeb);
}


h2Analyse.addEventListener('click', function(){
changementTextAnalyse()
})

 h1Web.addEventListener('click', function(){
 changementTextWeb()
})

// slider projet

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
    
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesDev");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}




showSlidesAnalyse(slideIndex);

// Next/previous controls
function plusSlidesAnalyse(n) {
  showSlidesAnalyse(slideIndex += n);
}
    
function showSlidesAnalyse(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesAnalyse");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// let slideauto = 0;
// autoSlides();

// function autoSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideauto++;
//   if (slideauto > slides.length) {slideauto = 1}
//   slides[slideauto-1].style.display = "block";
//   setTimeout(autoSlides, 5000); // Change image every 5 seconds
// }
  


h1Web.addEventListener("mouseover", function(){
  mouseTrailer.style.width = "50px";
  mouseTrailer.style.height = "50px";
  mouseTrailer.style.borderRadius = "50px";
  mouseTrailer.style.transition = "0.2s";
  mouseInfos.style.opacity = "1";

})

h1Web.addEventListener("mouseout", function(){
  mouseTrailer.style.width = "20px";
  mouseTrailer.style.height = "20px";
  mouseTrailer.style.borderRadius = "20px";
  mouseInfos.style.opacity = "0";

})



h2Analyse.addEventListener("mouseover", function(){
  mouseTrailer.style.width = "50px";
  mouseTrailer.style.height = "50px";
  mouseTrailer.style.borderRadius = "50px";
  mouseTrailer.style.transition = "0.2s";
  mouseInfos.style.opacity = "1";

})

h2Analyse.addEventListener("mouseout", function(){
  mouseTrailer.style.width = "20px";
  mouseTrailer.style.height = "20px";
  mouseTrailer.style.borderRadius = "20px";
  mouseInfos.style.opacity = "0";

})


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
  mouseInfos.style.opacity = "0";

})


imagecarousel.addEventListener("mouseover", function(){
  mouseTrailer.style.width = "50px";
  mouseTrailer.style.height = "50px";
  mouseTrailer.style.borderRadius = "50px";
  mouseTrailer.style.transition = "0.2s";
  mouseInfos.style.opacity = "1";

})

imagecarousel.addEventListener("mouseout", function(){
  mouseTrailer.style.width = "20px";
  mouseTrailer.style.height = "20px";
  mouseTrailer.style.borderRadius = "20px";
  mouseInfos.innerHTML = "";
  mouseInfos.style.opacity = "0";

})
