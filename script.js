 window.addEventListener("DOMContentLoaded", () => {
     const loader = document.getElementById("loader");

     setTimeout(() => {
         loader.style.opacity = "0";
         loader.style.transition = "opacity 0.5s ease";
         setTimeout(() => {
             loader.style.display = "none";
         }, 500);
     }, 1000); // 5000 ms = 5 seconds
 });
