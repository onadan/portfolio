if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .catch(err => console.log("Failure", err))
    })
  }

const body = document.querySelector("body");

const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector(".mobile-nav");

const navItem = document.querySelectorAll(".mobile-nav-list li");

var lastScrollTop = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  var scrollTop = window.pageYOffset;

  if (scrollTop >= navbar.offsetTop + 100) {
    if (scrollTop > lastScrollTop) {
      navbar.style.position = "fixed";
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0";
      navbar.style.display = "relative";
    }
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

hamburger.addEventListener("click", () => {
  nav.classList.toggle("hide");
  body.style.overflow = "hidden";
  if (nav.classList.contains("hide")) {
    body.style.overflow = "visible";
  }
});

navItem.forEach((navitem) => {
  navitem.addEventListener("click", () => {
    nav.classList.add("hide");
    body.style.overflow = "visible";
  });
});
