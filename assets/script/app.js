let imagecarousel = document.querySelector('.imgcar');
let carroussel = document.querySelector('.slideshow-container')
let h1Web = document.querySelector("#devWebHome");
let h2Analyse = document.querySelector("#analyseHome");
let competenceHome = document.querySelector(".competence")
let svgPropos = document.querySelector(".svgProposCercle")
let linkedin = document.querySelector("#linkedin")
let liamFontperso = document.querySelector("#imgLiamFontPerso")
let spanCV = document.querySelector(".hoverOpacity")
let arrowSkipProject = document.querySelector(".changeProjet")
let mouseTrailer = document.querySelector("#trailer")
let mouseInfos = document.querySelector(".mousseInfos")
let iconsSoleilLune = document.querySelector(".iconsSoleilLune")
let carouselDev = document.querySelector(".slideshow-container.Dev")
let carouselAna = document.querySelector(".slideshow-container.Analyse")



let chiffre = 0
// console log 

console.log('%cMon Portfolio vous a plu!?', "color:#2A66AC;");
console.log('%cContactez-Moi', "color:#e36396;");
console.log('%cliam.desrayaud@next-u.fr', "color:#FEFBE8; background-color:#2A66AC;");


// animation dark mode
document.querySelector(".darkModeBtn").addEventListener("click", function(){
  chiffre++
  if(chiffre%2 == 0)
  {
    document.documentElement.style.setProperty("--beige", "#FEFBE8");
    document.documentElement.style.setProperty("--bleuVert", "#2A66AC");
    linkedin.style.backgroundColor = "#2A66AC";
    iconsSoleilLune.src="assets/media/img/croissant-de-lune.png"
    liamFontperso.src="assets/media/img/liamFontPerso.png"
    
   
  }
  else
  {
    document.documentElement.style.setProperty("--beige", "#2A2B2A");
    document.documentElement.style.setProperty("--bleuVert", "#FEFBE8");
    document.querySelector('body').style.backgroundColor = "#020202";
    linkedin.style.backgroundColor = "#e36396";
    iconsSoleilLune.src="assets/media/img/soleil.png"
    liamFontperso.src="assets/media/img/liamFontPersoBeige.png";
    
    


  }

})




// mise en azttent


function miseEnAttente(fonctionAExecuter)
             {
                setTimeout(fonctionAExecuter, 500);
}



// // souris follow

// window.onmousemove = e =>{
//   const x = e.clientX - mouseTrailer.offsetWidth / 2;
//   const y = e.clientY - mouseTrailer.offsetHeight / 2;
//   const keyframes = {
//     transform: `translate(${x}px, ${y}px)`
//   }

//   mouseTrailer.animate(keyframes, {
//     duration: 800,
//     fill: "forwards"
//   })
// }


// Obtenez la taille de l'écran
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

window.onmousemove = e => {
  // Calculez la position relative de la souris par rapport au centre de l'écran
  const x = e.clientX - (screenWidth / 100);
  const y = e.clientY - (screenHeight / 100);

  // Utilisez les coordonnées calculées pour déplacer l'élément de suivi de souris
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }
  console.log(x);
  mouseTrailer.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  });
}






