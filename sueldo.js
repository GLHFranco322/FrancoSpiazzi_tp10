let nombre = "Franco";
let apellido = "Spiazzi";
let sueldoActual = 100000;
let porcentajeAumento = 25;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola, estimado " + nombre);
console.log("En base a su sueldo actual: " + sueldoActual)

console.log("Ha recibido un aumento del 25%: " + calculoAumento)
console.log("y su nuevo sueldo es de: " + nuevoSueldo)