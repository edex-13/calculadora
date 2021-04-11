const mostrarProPantalla = (valor, esResultado) => {
   const PANTALLA = document.getElementById('pantalla');
   if (esResultado) {
      PANTALLA.innerHTML = valor;
   } else {
      PANTALLA.innerHTML += valor;
   }
};
export default mostrarProPantalla;
