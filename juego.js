let numeroSecreto;
let intentos = 0;
const maxIntentos = 10;
let juegoActivo = true;
let min = 1;
let max = 100;

const inputNumero = document.getElementById('numero');
const btnAdivinar = document.getElementById('adivinar');
const btnReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const contadorIntentos = document.getElementById('intentos');
const rango = document.getElementById('rango');
const listaIntentos = document.getElementById('lista');

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    juegoActivo = true;
    min = 1;
    max = 100;

    // reset
    contadorIntentos.textContent = intentos;
    rango.textContent = `${min} - ${max}`;
    mensaje.textContent = "Ingresa un número de 1 a 100";
    mensaje.className = "";
    listaIntentos.innerHTML = "";
    inputNumero.value = "";
    inputNumero.disabled = false;
    btnAdivinar.disabled = false;

    console.log("Número secreto:", numeroSecreto);
    
}

function adivinar() {
    if (!juegoActivo) return;
    
    const numero = parseInt(inputNumero.value);
    
    if (isNaN(numero) || numero < 1 || numero > 100) {
        mensaje.textContent = "Por favor, ingresa un número de 1 a 100";
        mensaje.className = "error";
        return;
    }
    
    intentos++;
    contadorIntentos.textContent = intentos;
    
    // historial
    const intentoDiv = document.createElement('div');
    intentoDiv.className = 'intento';
    intentoDiv.textContent = `Intento ${intentos}: ${numero}`;
    
    if (numero === numeroSecreto) {
        // gana
        juegoActivo = false;
        intentoDiv.classList.add('acierto');
        mensaje.textContent = `gz, adivinaste en ${intentos} intentos`;
        mensaje.className = "exito";
        inputNumero.disabled = true;
        btnAdivinar.disabled = true;
    } else if (intentos >= maxIntentos) {
        // pierde
        juegoActivo = false;
        intentoDiv.classList.add('error');
        mensaje.textContent = `Se acabaron los intentos. El número era ${numeroSecreto}`;
        mensaje.className = "error";
        inputNumero.disabled = true;
        btnAdivinar.disabled = true;
    } else {
        // pista
        if (numero < numeroSecreto) {
            min = Math.max(min, numero + 1);
            intentoDiv.innerHTML += ` - <p>Muy bajo</p>`;
            mensaje.textContent = `El número es mayor que ${numero}`;
            mensaje.className = "pista";
        } else {
            max = Math.min(max, numero - 1);
            intentoDiv.innerHTML += ` - <p>Muy alto</p>`;
            mensaje.textContent = `El número es menor que ${numero}`;
            mensaje.className = "pista";
        }
        rango.textContent = `${min} - ${max}`;
    }
    
    // agregar al historial
    listaIntentos.prepend(intentoDiv);
    inputNumero.value = "";
    inputNumero.focus();
}

btnAdivinar.addEventListener('click', adivinar);
btnReiniciar.addEventListener('click', iniciarJuego);

inputNumero.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adivinar();
    }
});

window.addEventListener('DOMContentLoaded', iniciarJuego);