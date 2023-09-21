// Initializing AOS onscroll animation library
AOS.init();

// Back to top function
let btnTop = document.querySelector(".btn-top");

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Clickable logo 

let btnLogo = document.querySelector(".logo");

function logoHome() {
    window.location.href="../index.html"
}
// View live button in project facts

// Gjol Kro


function viewLiveGjol() {
  window.open("https://mmd.ucn.dk/class/MDE-CSD-S21/10407761/gjolkro/", "_blank");
}

function gjolProject() {
  window.open("./gjolkro.html");
}

function viewLiveConnor() {
  window.open("https://mmd.ucn.dk/class/MDE-CSD-S21/10407761/connorfernandez/index.html", "_blank");
}

function connorProject() {
  window.open("./connorfernandez.html");
}


function viewLiveMentor() {
  window.open("https://xd.adobe.com/view/51764c55-1179-4548-8bef-15c9c5eea123-0425/?fullscreen", "_blank");
}

function mentorProject() {
  window.open("./mentorship.html");
}




// Links for project cards


function gjolKro() {
  window.location.href = "./projects/gjolkro.html"
}

function connorFernandez() {
  window.location.href = "./projects/connorfernandez.html"
}

function mentorPortal() {
  window.location.href = "./projects/mentorship.html"
}


// Show the navigation only when reached a ceratin div

const reachedsection = document.querySelectorAll(".introduction");
const nav = document.querySelector(".steps-nav");

// Navigation for projects 

const sections = document.querySelectorAll(".project-step");
const navLi = document.querySelectorAll(".steps-nav li");
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 20) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

let offsetY = document.querySelector(".introduction").getBoundingClientRect();
let fromTop = offsetY.top;
let navBar = document.querySelector(".steps-nav");
let currentPos = window.pageYOffset;
function showNavigation() {
    if (fromTop < pageYOffset) {
        navBar.classList.add("nav-visible");
        navBar.classList.remove("nav-hidden");

    } else { 
        navBar.classList.add("nav-hiddem");
        navBar.classList.remove("nav-visible");
    } 
    
    console.log(fromTop)
}

window.addEventListener('scroll', showNavigation)
