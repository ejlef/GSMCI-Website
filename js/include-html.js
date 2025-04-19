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
      } else {
        el.innerHTML = "Content Not Found.";
      }
    } catch (error) {
      console.error("Error Including HTML:", error);
    }
  }
})();
