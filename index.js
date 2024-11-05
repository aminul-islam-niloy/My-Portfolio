

window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-menu a");

  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".nav-menu a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});




// document.addEventListener("DOMContentLoaded", () => {
//   const options = {
//     threshold: 0.5, 
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const target = entry.target;

//       if (entry.isIntersecting && !target.classList.contains("played")) {
//         if (target.classList.contains("slide-left")) {
//           target.classList.add("show-left");
//         } else if (target.classList.contains("slide-right")) {
//           target.classList.add("show-right");
//         } else if (target.classList.contains("slide-up")) {
//           target.classList.add("show-up");
//         } else if (target.classList.contains("slide-bottom")) {
//           target.classList.add("show-bottom");
//         }
        
//         target.classList.add("played", "visible");

//       } else if (!entry.isIntersecting && target.classList.contains("played")) {

//         setTimeout(() => {
//           if (target.classList.contains("slide-left")) {
//             target.classList.remove("show-left");
          
//           } else if (target.classList.contains("slide-up")) {
//             target.classList.remove("show-up");
//           } else if (target.classList.contains("slide-bottom")) {
//             target.classList.remove("show-bottom");
//           }

//           target.classList.remove("played"); 
//         }, 2000); 
//       }
//     });
//   }, options);

//   document.querySelectorAll(".slide-left, .slide-right, .slide-up, .slide-bottom").forEach((el) => {
//     observer.observe(el);
//   });
// });



