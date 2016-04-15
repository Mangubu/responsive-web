var $burger = document.getElementById("burger");
var $cross = document.getElementById("cross");
var $cross2 = document.getElementById("cross2");
var $search = document.getElementById("search");

var head = document.getElementById("head");
var side = document.getElementById("side");
var research = document.getElementById("head-search");

function toggle(){
  side.classList.toggle("visible");
  research.classList.remove("display");
  head.classList.remove("show");
}

function search(){
  research.classList.toggle("display");
  head.classList.toggle("show");
  side.classList.remove("visible");
  head.classList.remove("visible");

}

$burger.addEventListener("click", toggle, false);
$cross.addEventListener("click", toggle, false);
$cross2.addEventListener("click", search, false);
$search.addEventListener("click", search, false);
