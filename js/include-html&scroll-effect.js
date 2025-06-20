(async function () {
  const elements = document.querySelectorAll("[include-html]");
  for (const el of elements) {
    const file = el.getAttribute("include-html");
    try {
      const response = await fetch(file);
      if (response.ok) {
        const text = await response.text();
        el.innerHTML = text;

        // Execute scripts within the injected content
        const scripts = el.querySelectorAll("script");
        scripts.forEach((script) => {
          if (!document.querySelector(`script[src="${script.src}"]`)) {
            const newScript = document.createElement("script");
            if (script.src) {
              newScript.src = script.src;
              newScript.async = false;
            } else {
              newScript.text = script.textContent;
            }
            document.body.appendChild(newScript);
          }
        });

        // Initialize animations after content is loaded
        requestAnimationFrame(animateContent); // Use requestAnimationFrame for better timing
      } else {
        el.innerHTML = "Content Not Found.";
      }
    } catch (error) {
      console.error("Error Including HTML:", error);
    }
  }
})();

// GSAP animation function
function animateContent() {
  const contents = document.querySelectorAll(
    ".disclosure, .permit-box, .about-us, .content-profile, .box-vmgc, .our-business, .content-business, .orgbox, .board-of-directors"
  );

  contents.forEach((content) => {
    if (!content.dataset.animated) {
      content.dataset.animated = "true"; // Prevent duplicate animations
      gsap.fromTo(
        content,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.Out",
          scrollTrigger: {
            trigger: content,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            scrub: false,
            markers: false,
            once: true,
          },
        }
      );
    }
  });
}

// // GSAP animation function2
// function animateContent1() {
//   const contents = document.querySelectorAll(
//     ".board-of-directors, .box-img1, .details1"
//   );
//   contents.forEach((content) => {
//     if (window.getComputedStyle(content).display === "block") {
//       gsap.fromTo(
//         content,
//         {
//           y: 100,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: content,
//             start: "top 90%",
//             end: "top 50%",
//             toggleActions: "play none none reverse",
//             scrub: false,
//             markers: true,
//           },
//         }
//       );
//     } else {
//       console.log("err!");
//     }
//   });
// }

// // Function to initialize animations for desktop view
// function initDesktopAnimations() {
//   // Check if the viewport width is greater than 768px (typical desktop breakpoint)
//   if (window.innerWidth > 768) {
//     // Select all elements with the class "content"
//     const contents = document.querySelectorAll('.brdofdrk-box1');

//     // Loop through each element
//     contents.forEach((content) => {
//       // Check if the element's display style is "block"
//       if (window.getComputedStyle(content).display === "block") {
//         gsap.fromTo(
//           content,
//           {
//             y: 100,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.5,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: content,
//               start: "top 65%",
//               end: "top 60%",
//               toggleActions: "play none none reverse",
//               scrub: false,
//               markers: true, // Set to true for debugging
//             },
//           }
//         );
//       }
//     });
//   }
// }

// // Run the function on page load
// initDesktopAnimations();

// // Optional: Rerun the function if the user resizes the window
// window.addEventListener("resize", initDesktopAnimations);
