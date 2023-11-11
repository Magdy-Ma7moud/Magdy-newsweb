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
    document.getElementById("time").innerHTML = d.toLocaleTimeString("en-Egypt");
}

if (day < 10) {
    day = appendZero(day);
}

if (month < 10) {
    month = appendZero(month);
}

today = month + "/" + day + "/" + today.getFullYear();

document.getElementById("date").innerHTML = today;

var myVar = setInterval(function () {
    theTime();
}, 1000);
// End Date & Time code 

// dark &light mode
const checkbox = document.getElementById("checkbox");

// Function to set the theme based on the checkbox state
function setTheme() {
    if (checkbox.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}

// Function to load the theme from local storage
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        checkbox.checked = true;
        setTheme();
    } else {
        checkbox.checked = false;
    }
}

// Add a change event listener to the checkbox
checkbox.addEventListener("change", setTheme);

// Load the theme when the page loads
loadTheme();
