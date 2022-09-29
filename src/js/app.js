//Let Go

//service worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .catch((err) => console.log("Failure", err));
  });
}


//parallax
document.addEventListener('mousemove', parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerWidth - e.pageY*speed)/80

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}


//others

const body = document.querySelector("body");

const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector(".mobile-nav");

const navItem = document.querySelectorAll(".mobile-nav-list li");

var lastScrollTop = 0;

const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   var scrollTop = window.pageYOffset;

//   if (scrollTop >= navbar.offsetTop + 100) {
//     if (scrollTop > lastScrollTop) {
//       navbar.style.position = "fixed";
//       navbar.style.top = "-100px";
//     } else {
//       navbar.style.top = "0";
//       navbar.style.display = "relative";
//     }
//   } else {
//     navbar.style.top = "0";
//   }
//   lastScrollTop = scrollTop;
// });

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
