window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 1000) {
    document.getElementById("navbar").style.padding = "5px 3px";
    document.getElementById("use").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "30px 6px";
    document.getElementById("user").style.fontSize = "35px";
  }
}