function changeLikeMode(){
   checkColor = document.getElementById('likebutton');
   if(checkColor.style.color =="blue"){
      checkColor.style.color = "black";
      checkColor.style.backgroundColor="white";
   }
   else{
      checkColor.style.color= "blue";
      checkColor.style.backgroundColor = "#4CAF50";
   }
}