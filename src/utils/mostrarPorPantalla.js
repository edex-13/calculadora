import validaciones from './validaciones.js';
const mostrarProPantalla = (valor, esResultado) => {
   const PANTALLA = document.getElementById('pantalla');
   let valorTotal = PANTALLA.textContent
   let esValido = validaciones(valor , valorTotal);
   if (esResultado) {
      PANTALLA.innerHTML = valor;
   } else {
      if (esValido) {
         PANTALLA.innerHTML += valor;
      }
   }
};
export default mostrarProPantalla;
