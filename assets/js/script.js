// Sticky Navbar
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var sn = document.getElementById("stickyNav");
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    sn.style.top = "0";
  } else {
    sn.style.top = "-85px";
  }
}
