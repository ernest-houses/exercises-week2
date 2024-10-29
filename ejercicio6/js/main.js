document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
  
    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        const content = this.previousElementSibling;
  
        if (content.style.display === "none") {
          content.style.display = "block";
          this.textContent = "Ocultar contenidos";
        } else {
          content.style.display = "none";
          this.textContent = "Mostrar contenidos";
        }
      });
    });
  });