for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    playSound(key);
    anim(key);

  });
}
document.addEventListener("keydown",function(key){
  playSound(key.key);
  anim(key.key);
});
function playSound(key){
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/crash.mp3").play();
      break;
    default:
      console.log(key);
  }

}
function anim(key){
  var target=document.querySelector("."+key);
  target.classList.add("pressed");
  setTimeout(function(){
    target.classList.remove("pressed");
  },100);
}
