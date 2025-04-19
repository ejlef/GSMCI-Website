// Import .html
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
          const newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
            newScript.async = false;
          } else {
            newScript.text = script.textContent;
          }
          document.body.appendChild(newScript);
        });

        // Initialize animations after content is loaded
        animateContent();
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
    ".disclosure, .permit-box, .about-us, .content-profile"
  );

  contents.forEach((content) => {
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: false,
          markers: false,
        },
      }
    );
  });
}
