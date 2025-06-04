function toggleIcon() {
  const icon = document.getElementById("menuIcon");
  const sidepanel = document.getElementById("mySidepanel");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    sidepanel.style.width = "100%";
    sidepanel.style.height = "90%";
    document.body.style.overflow = "hidden";
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    sidepanel.style.width = "0";
    // sidepanel.style.height = "0";
    document.body.style.overflow = "auto";
  }
}

// let lastScrollTop = 0;
// const header = document.getElementById("header");
// const zminuot = document.getElementById("zoom-in_out");

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop === 0) {
//     // At the top of the page
//     header.style.position = "static";
//     zminuot.style.transform = "scale(1)";
//     zminuot.style.transition = "transform 1.3s ease";
//     header.style.boxShadow = "none";
//     header.style.backgroundColor = "transparent";
//     header.classList.remove("hidden");
//   } else if (scrollTop > lastScrollTop) {
//     // Scrolling down
//     header.style.position = "static";
//     header.classList.add("hidden");
//   } else {
//     // Scrolling up
//     header.style.position = "sticky";
//     header.style.top = "0";
//     zminuot.style.transform = "scale(1.1)";
//     zminuot.style.transition = "none";
//     header.style.backgroundColor = "whitesmoke";
//     header.style.boxShadow = "0px 2px 5px  rgba(0, 0, 0, 0.3)";
//     header.classList.remove("hidden");
//   }

//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// });



// let lastScrollTop = 0;
// const header = document.getElementById("header");
// const zminuot = document.getElementById("zoom-in_out");
// let scrollStopTimeout;

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   // Hide the navbar when scrolling down
//   if (scrollTop > lastScrollTop) {
//     clearTimeout(scrollStopTimeout); // Clear any pending timeout
//     header.classList.add("hidden");
//   } else {
//     // When scrolling up, show the navbar only if the user stops scrolling
//     clearTimeout(scrollStopTimeout);
//     scrollStopTimeout = setTimeout(() => {
//       header.style.position = "sticky";
//       header.style.top = "0";
//       header.style.backgroundColor = "whitesmoke";
//       header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
//       header.classList.remove("hidden");
//     }, 300); // Adjust the delay as needed (300ms in this case)
//   }

//   // Update the `lastScrollTop` to the current position
//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// });



// let lastScrollTop = 0;
// let lastTime = 0; // To track the time of the last scroll event
// const header = document.getElementById("header");
// const zminuot = document.getElementById("zoom-in_out");
// let scrollStopTimeout;

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   const currentTime = new Date().getTime();
//   const deltaTime = currentTime - lastTime; // Time difference between scroll events
//   const deltaScroll = scrollTop - lastScrollTop; // Distance scrolled since the last event

//   if (scrollTop === 0) {
//     // At the top of the page
//     clearTimeout(scrollStopTimeout); // Clear any pending timeout
//     header.style.position = "static";
//     zminuot.style.transform = "scale(1)"; // Reset zoom
//     zminuot.style.transition = "transform 0.5s ease"; // Smooth transition
//     header.style.boxShadow = "none";
//     header.style.backgroundColor = "transparent";
//     header.classList.remove("hidden");
//   } else if (scrollTop > lastScrollTop) {
//     // Scrolling down
//     clearTimeout(scrollStopTimeout); // Clear timeout to avoid conflicts
//     header.classList.add("hidden");
//     zminuot.style.transform = "scale(1)"; // Reset zoom while scrolling down
//     zminuot.style.transition = "transform 0.3s ease"; // Smooth transition
//   } else {
//     // Scrolling up: Calculate speed based on time and distance
//     clearTimeout(scrollStopTimeout);

//     let scrollSpeed = Math.abs(deltaScroll) / deltaTime; // Scroll speed (distance / time)
//     let speedThreshold = 0.2; // Minimum speed to show navbar (adjust as needed)

//     if (scrollSpeed > speedThreshold) {
//       // Only show navbar if the scroll speed is above the threshold
//       scrollStopTimeout = setTimeout(() => {
//         header.style.position = "sticky";
//         header.style.top = "0";
//         header.style.backgroundColor = "whitesmoke";
//         header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
//         header.classList.remove("hidden");
//         zminuot.style.transform = "scale(1.1)"; // Zoom-in effect when scrolling up
//         zminuot.style.transition = "transform 0.3s ease"; // Smooth transition
//       }, 100); // Faster appearance when scrolling quickly
//     }
//   }

//   // Update the `lastScrollTop` and `lastTime` to the current values
//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//   lastTime = currentTime;
// });


let lastScrollTop = 0;
let lastTime = 0; // To track the time of the last scroll event
const header = document.getElementById("header");
const zminuot = document.getElementById("zoom-in_out");
let scrollStopTimeout;
let speedThreshold = 0.3; // Minimum speed to show navbar (very sensitive)

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const currentTime = new Date().getTime();
  const deltaTime = currentTime - lastTime; // Time difference between scroll events
  const deltaScroll = scrollTop - lastScrollTop; // Distance scrolled since the last event

  if (scrollTop === 0) {
    // At the top of the page
    clearTimeout(scrollStopTimeout); // Clear any pending timeout
    header.style.position = "static";
    zminuot.style.transform = "scale(1)"; // Reset zoom
    zminuot.style.transition = "transform 0.5s ease"; // Smooth transition
    header.style.boxShadow = "none";
    header.style.backgroundColor = "transparent";
    header.classList.remove("hidden");
  } else if (scrollTop > lastScrollTop) {
    // Scrolling down
    clearTimeout(scrollStopTimeout); // Clear timeout to avoid conflicts
    header.classList.add("hidden");
    zminuot.style.transform = "scale(1)"; // Reset zoom while scrolling down
    zminuot.style.transition = "transform 0.3s ease"; // Smooth transition
  } else {
    // Scrolling up: Calculate speed based on time and distance
    clearTimeout(scrollStopTimeout);

    let scrollSpeed = Math.abs(deltaScroll) / deltaTime; // Scroll speed (distance / time)

    if (scrollSpeed > speedThreshold) {
      // Only show navbar if the scroll speed is above the threshold
      scrollStopTimeout = setTimeout(() => {
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
        header.classList.remove("hidden");
        zminuot.style.transform = "scale(1.1)"; // Zoom-in effect when scrolling up
        zminuot.style.transition = "transform 0.3s ease"; // Smooth transition
      }, 100); // Faster appearance when scrolling quickly
    }
  }

  // Update the `lastScrollTop` and `lastTime` to the current values
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  lastTime = currentTime;
});

// console.log("Navbar Is Working...");
