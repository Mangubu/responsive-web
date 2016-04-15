var burger = document.getElementById("burger");

burger.addEventListener("click", toggle, false);

function toggle(){
  var side = document.getElementById("side");
  side.classList.toggle("visible");
}
