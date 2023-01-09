// //service worker

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .catch((err) => console.log("Failure", err));
//   });
// }

// //parallax
// document.addEventListener("mousemove", parallax);
// function parallax(e) {
//   this.querySelectorAll(".layer").forEach((layer) => {
//     const speed = layer.getAttribute("data-speed");

//     const x = (window.innerWidth - e.pageX * speed) / 100;
//     const y = (window.innerWidth - e.pageY * speed) / 80;

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }
