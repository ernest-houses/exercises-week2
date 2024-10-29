let isVisible = false;

function toggleText() {
    const additionalText = document.querySelector(".additional");
    const toggleLink = document.getElementById("toggleLink");
  
    if (isVisible) {
      additionalText.classList.remove("visible");
      additionalText.classList.add("hidden");
      toggleLink.textContent = "Seguir leyendo";
    } else {
      additionalText.classList.remove("hidden");
      additionalText.classList.add("visible");
      toggleLink.textContent = "Ocultar exceso de texto";
    }
  
    isVisible = !isVisible;
  }