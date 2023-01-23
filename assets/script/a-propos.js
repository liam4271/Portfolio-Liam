function mouvementSurX(id){
    id.style.transform = `translateX(${X}px)`;
  }
  
  window.addEventListener("mousemove", function(e){
    X = -.7*e.clientX/2.2;
    mouvementSurX(svgPropos)
  })




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


document.querySelector(".btnCV").addEventListener("mouseover", function(){
  mouseTrailer.style.width = "50px";
  mouseTrailer.style.height = "50px";
  mouseTrailer.style.borderRadius = "50px";
  mouseTrailer.style.transition = "0.2s";
  mouseInfos.style.opacity = "1";

})

document.querySelector(".btnCV").addEventListener("mouseout", function(){
  mouseTrailer.style.width = "20px";
  mouseTrailer.style.height = "20px";
  mouseTrailer.style.borderRadius = "20px";
  mouseInfos.innerHTML = "";
  mouseInfos.style.opacity = "0";

})