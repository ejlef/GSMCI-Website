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

let lastScrollTop = 0;
const header = document.getElementById("header");
const zminuot = document.getElementById("zoom-in_out");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    // At the top of the page
    header.style.position = "static";
    zminuot.style.transform = "scale(1)";
    zminuot.style.transition = "transform 1.3s ease";
    header.style.boxShadow = "none";
    header.style.backgroundColor = "transparent";
    header.classList.remove("hidden");
  } else if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.position = "static";
    header.classList.add("hidden");
  } else {
    // Scrolling up
    header.style.position = "sticky";
    header.style.top = "0";
    zminuot.style.transform = "scale(1.1)";
    zminuot.style.transition = "none";
    header.style.backgroundColor = "whitesmoke";
    header.style.boxShadow = "0px 2px 5px  rgba(0, 0, 0, 0.3)";
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

console.log("Navbar Is Working!");
