var scrollBar = document.getElementById("scrollBar");
var top = document.getElementById("projects").offsetTop;
var buttom = document.getElementById("contact").offsetTop - document.getElementsByClassName("row")[document.getElementsByClassName("row").length-1].offsetHeight;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > top || document.documentElement.scrollTop > top) && (document.documentElement.scrollTop < buttom)) {
    scrollBar.style.display = "block";
  } else {
    scrollBar.style.display = "none";
  }
}