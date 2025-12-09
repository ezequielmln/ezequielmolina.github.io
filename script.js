// LAB 5 - Formulario 

const nombre = document.getElementById("name");
const apellido = document.getElementById("lastname");
const email = document.getElementById("email");
const telefono = document.getElementById("telephone");
const edad = document.getElementById("age");
const direccion = document.getElementById("address");
const provincia = document.getElementById("provincia");
const codigoPostal = document.getElementById("cp");
const contacto = document.querySelectorAll('input[name="pref_contacto"]');
const suscripcion = document.querySelectorAll('input[name="suscripcion"]');

const celdas = document.querySelectorAll("table tbody tr td:nth-child(2)");


// Actualización de la tabla 
function actualizarCelda(posicion, valor) {
  celdas[posicion].textContent = valor;
}

nombre.addEventListener("input", function() {actualizarCelda(0, nombre.value)});
apellido.addEventListener("input", function() {actualizarCelda(1, apellido.value)});
email.addEventListener("input", function() {actualizarCelda(2, email.value)});
edad.addEventListener("input", function() {actualizarCelda(3, edad.value)});
provincia.addEventListener("input", function() {actualizarCelda(4, provincia.value)});
telefono.addEventListener("input", function() {actualizarCelda(5, telefono.value)});
codigoPostal.addEventListener("input",function() {actualizarCelda(6, codigoPostal.value)});

contacto.forEach(function(radio) {
  radio.addEventListener("change", function() {
    const seleccionado = document.querySelector("input[name='pref_contacto']:checked");
    if (seleccionado) {
      actualizarCelda(7, seleccionado.value);
    } else {
      actualizarCelda(7, "");
    }
  });
});

suscripcion.forEach(function(checkbox) {
  checkbox.addEventListener("change", function() {
    const seleccionados = Array.from(suscripcion)
      .filter(function(cb) {
        return cb.checked;
      })
      .map(function(cb) {
        return cb.value;
      })
      .join(", ");
    actualizarCelda(8, seleccionados);
  });
});



