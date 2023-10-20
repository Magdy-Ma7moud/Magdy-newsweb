// Start code Scroll top button
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
    var rootElement = document.documentElement
    
    function handleScroll() {
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
      if ((rootElement.scrollTop / scrollTotal ) > 0.15) {
        scrollToTopBtn.classList.add("showBtn")
      } else {
        scrollToTopBtn.classList.remove("showBtn")
      }
    }
    function scrollToTop() {
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop)
    document.addEventListener("scroll", handleScroll)
// End code Scroll top button

//Start Date & Time code 
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;

function appendZero(value) {
    return "0" + value;
}

function theTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString("en-US");
}

if (day < 10) {
    day = appendZero(day);
}

if (month < 10) {
    month = appendZero(month);
}

today = day + "/" + month + "/" + today.getFullYear();

document.getElementById("date").innerHTML = today;

var myVar = setInterval(function () {
    theTime();
}, 1000);
// End Date & Time code 