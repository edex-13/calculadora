const eliminar = () => {
   const PANTALLA = document.getElementById('pantalla');
   let textoPantalla = PANTALLA.textContent;
   PANTALLA.innerText = textoPantalla.slice(0, -1);
};
export default eliminar;
