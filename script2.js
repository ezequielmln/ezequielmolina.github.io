
    const leerMas = document.getElementById("botonLeer");
    const cv = document.getElementById("cv");

  // click
  leerMas.addEventListener("click", function() {
    if (cv.style.display === "block") {
      cv.style.display = "none";
      leerMas.textContent = "Leer más";
    } else {
      cv.style.display = "block";
      leerMas.textContent = "Leer menos";
    }
  });

