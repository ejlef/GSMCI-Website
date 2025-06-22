const boxes = document.querySelectorAll(".scrolleffect");

window.addEventListener("scroll", () => {
  boxes.forEach((box, index) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setTimeout(() => box.classList.add("visible"), index * 500); // Delay for staggered animation
    }
  });
});
